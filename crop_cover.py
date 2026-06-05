#!/usr/bin/env python3
"""Crop SC-25001~SC-25012 (睡袋套系列) from catalog images.
Uses the proven white-gap + connected-components approach."""

from PIL import Image
import numpy as np
from scipy import ndimage
import os, sys

OUT_DIR = "/Users/yuekai/WorkBuddy/2026-05-09-task-6/fengyue-website/imgs/cover"
os.makedirs(OUT_DIR, exist_ok=True)

# ── Product data ──
# Image 1: SC-25001~SC-25009 (3×3 grid)
PRODUCTS_1 = [
    ("SC-25001", "216×80cm"),
    ("SC-25002", "225×80cm"),
    ("SC-25003", "216×80cm"),
    ("SC-25004", "223×85×60cm"),
    ("SC-25005", "230×90×60cm"),
    ("SC-25006", "210×75cm"),
    ("SC-25007", "210×75cm"),
    ("SC-25008", "210×75cm"),
    ("SC-25009", "220×80cm"),
]
# Image 2: SC-25010~SC-25012 (1×3 grid)
PRODUCTS_2 = [
    ("SC-25010", "210×90cm"),
    ("SC-25011", "210×90cm"),
    ("SC-25012", "210×90cm"),
]


def detect_grid_centers(img_path, rows, cols):
    """Detect row and column centers for a grid layout."""
    img = Image.open(img_path)
    gray = np.array(img.convert("L"))
    h, w = gray.shape
    
    binary = gray < 230
    labeled, num_features = ndimage.label(binary, structure=np.ones((3, 3)))
    sizes = ndimage.sum(binary, labeled, range(num_features + 1))
    
    # Find all large components (product regions)
    min_size = 3000
    products = []
    for lbl in range(1, num_features + 1):
        if sizes[lbl] > min_size:
            coords = np.where(labeled == lbl)
            y0, y1 = coords[0].min(), coords[0].max()
            x0, x1 = coords[1].min(), coords[1].max()
            x_center = (x0 + x1) // 2
            y_center = (y0 + y1) // 2
            products.append({"x0": x0, "y0": y0, "x1": x1, "y1": y1,
                           "xc": x_center, "yc": y_center, "area": int(sizes[lbl])})
    
    print(f"  Found {len(products)} product regions")
    
    # Cluster by y-coordinate to find rows
    products.sort(key=lambda p: p["yc"])
    row_groups = []
    used = set()
    for p in products:
        if id(p) in used:
            continue
        group = [p]
        used.add(id(p))
        for q in products:
            if id(q) in used:
                continue
            if abs(q["yc"] - p["yc"]) < 150:
                group.append(q)
                used.add(id(q))
        group.sort(key=lambda p: p["xc"])
        row_groups.append(group)
    
    row_centers = [np.mean([p["yc"] for p in g]) for g in row_groups[:rows]]
    print(f"  Row centers: {[int(c) for c in row_centers]}")
    
    # Cluster by x-coordinate to find columns
    products.sort(key=lambda p: p["xc"])
    col_groups = []
    used = set()
    for p in products:
        if id(p) in used:
            continue
        group = [p]
        used.add(id(p))
        for q in products:
            if id(q) in used:
                continue
            if abs(q["xc"] - p["xc"]) < 200:
                group.append(q)
                used.add(id(q))
        group.sort(key=lambda p: p["yc"])
        col_groups.append(group)
    
    col_centers = [np.mean([p["xc"] for p in g]) for g in col_groups[:cols]]
    col_centers.sort()
    print(f"  Col centers: {[int(c) for c in col_centers]}")
    
    return img, gray, h, w, row_centers, col_centers


def find_cell_boundaries(centers, total_size, margin):
    """Convert center positions to cell boundaries."""
    if len(centers) <= 1:
        return [(margin, total_size - margin)]
    
    boundaries = []
    for i, c in enumerate(centers):
        if i == 0:
            left = margin
        else:
            left = int((centers[i-1] + c) / 2)
        
        if i == len(centers) - 1:
            right = total_size - margin
        else:
            right = int((c + centers[i+1]) / 2)
        
        boundaries.append((left, right))
    
    return boundaries


def find_white_gap(gray_cell, start_pct=0.35, end_pct=0.95):
    """
    Scan rows for the widest white stripe (dark_pct < 0.02) in the given range.
    Returns gap_start_row within the cell, or None if not found.
    """
    h, w = gray_cell.shape
    row_start = int(h * start_pct)
    row_end = int(h * end_pct)
    
    if row_end <= row_start:
        return None
    
    dark_pcts = [np.mean(gray_cell[r] < 220) for r in range(row_start, row_end)]
    
    best_start, best_len = 0, 0
    i = 0
    while i < len(dark_pcts):
        if dark_pcts[i] < 0.02:
            j = i
            while j < len(dark_pcts) and dark_pcts[j] < 0.02:
                j += 1
            length = j - i
            if length > best_len:
                best_start = i
                best_len = length
            i = j
        else:
            i += 1
    
    if best_len >= 2:
        return row_start + best_start
    
    # Fallback: find where darkness drops significantly
    for i in range(1, len(dark_pcts)):
        if dark_pcts[i] < 0.01 and dark_pcts[i-1] > 0.03:
            return row_start + i
    
    return None


def remove_right_icons(cell_img):
    """
    Detect isolated dark regions on the right side (>55% x) and whiten them.
    Uses connected components with morphological closing for robustness.
    """
    gray = np.array(cell_img.convert("L"))
    h, w = gray.shape
    
    # Binary: dark regions
    binary = (gray < 210).astype(np.uint8)
    
    # Morphological closing to merge nearby dark regions
    structure = np.ones((5, 5))
    closed = ndimage.binary_closing(binary, structure=structure).astype(np.uint8)
    
    labeled, num_features = ndimage.label(closed)
    sizes = ndimage.sum(closed, labeled, range(num_features + 1))
    
    if num_features <= 1:
        return cell_img  # no separate icons
    
    # Find main product (largest component)
    main_label = np.argmax(sizes[1:]) + 1
    main_coords = np.where(labeled == main_label)
    main_right = main_coords[1].max()
    
    # Identify and remove right-side components
    result = cell_img.copy()
    result_arr = np.array(result)
    
    for lbl in range(1, num_features + 1):
        if lbl == main_label:
            continue
        coords = np.where(labeled == lbl)
        if len(coords[0]) < 50:
            continue
        
        col_mean = np.mean(coords[1])
        if col_mean > max(main_right * 0.8, w * 0.45):
            # Whiten this component
            for y, x in zip(coords[0], coords[1]):
                result_arr[y, x] = [255, 255, 255]
    
    return Image.fromarray(result_arr)


def crop_cell(img, gray, x0, y0, x1, y1, name):
    """Crop a single cell: remove bottom text + side icons."""
    cell = img.crop((x0, y0, x1, y1))
    gray_cell = gray[y0:y1, x0:x1]
    
    # Step 1: Find and remove bottom text
    gap_row = find_white_gap(gray_cell)
    if gap_row:
        cell = cell.crop((0, 0, cell.width, max(gap_row - 2, 0)))
    else:
        # Fallback: remove bottom 20%
        cell = cell.crop((0, 0, cell.width, int(cell.height * 0.80)))
    
    # Step 2: Remove right-side icons
    cell = remove_right_icons(cell)
    
    return cell


def process_image(img_path, rows, cols, products, margin=10):
    """Main processing function for a catalog image."""
    img, gray, h, w, row_centers, col_centers = detect_grid_centers(img_path, rows, cols)
    
    row_bounds = find_cell_boundaries(row_centers, h, margin)
    col_bounds = find_cell_boundaries(col_centers, w, margin)
    
    print(f"  Row bounds: {row_bounds}")
    print(f"  Col bounds: {col_bounds}")
    
    idx = 0
    for r in range(rows):
        y0, y1 = row_bounds[r]
        for c in range(cols):
            if idx >= len(products):
                break
            x0, x1 = col_bounds[c]
            
            name, size = products[idx]
            print(f"  Processing {name} ({size}) at cell ({r},{c}): ({x0},{y0})-({x1},{y1})", end="")
            
            cell = crop_cell(img, gray, x0, y0, x1, y1, name)
            
            out_path = os.path.join(OUT_DIR, f"{name}.jpg")
            cell.save(out_path, quality=95)
            print(f" → {cell.width}×{cell.height}")
            
            idx += 1
    
    img.close()


# ── Process Image 1: SC-25001~SC-25009 ──
print("=== Processing 广交会画册-09.jpg (SC-25001~SC-25009) ===")
img1_path = "/Users/yuekai/WorkBuddy/2026-05-09-task-6/fengyue-website/imgs/raw/广交会画册-09.jpg"
process_image(img1_path, rows=3, cols=3, products=PRODUCTS_1)

# ── Process Image 2: SC-25010~SC-25012 ──
print("\n=== Processing 广交会画册-14.jpg (SC-25010~SC-25012) ===")
img2_path = "/Users/yuekai/WorkBuddy/2026-05-09-task-6/fengyue-website/imgs/raw/广交会画册-14.jpg"
process_image(img2_path, rows=1, cols=3, products=PRODUCTS_2)

print(f"\nDone! Output: {OUT_DIR}")
