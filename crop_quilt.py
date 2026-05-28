#!/usr/bin/env python3
"""Crop QB-25001~QB-25009 (被子&毯子系列) from catalog image.
V2: Find main product bounding box -> tight crop + uniform padding for perfect centering."""

from PIL import Image
import numpy as np
from scipy import ndimage
import os

OUT_DIR = "/Users/yuekai/WorkBuddy/2026-05-09-task-6/fengyue-website/imgs/quilt"
os.makedirs(OUT_DIR, exist_ok=True)

PRODUCTS = [
    "QB-25001", "QB-25002", "QB-25003",
    "QB-25004", "QB-25005", "QB-25006",
    "QB-25007", "QB-25008", "QB-25009",
]


def detect_grid_centers(img_path, rows, cols):
    """Detect row and column centers for grid layout."""
    img = Image.open(img_path)
    gray = np.array(img.convert("L"))
    h, w = gray.shape

    mean_val = np.mean(gray)
    if mean_val > 210:
        thresh = 240
    elif mean_val > 190:
        thresh = 230
    else:
        thresh = 235

    binary = gray < thresh
    labeled, num_features = ndimage.label(binary, structure=np.ones((3, 3)))
    sizes = ndimage.sum(binary, labeled, range(num_features + 1))

    min_size = 3000
    products = []
    for lbl in range(1, num_features + 1):
        if sizes[lbl] > min_size:
            coords = np.where(labeled == lbl)
            y0, y1 = coords[0].min(), coords[0].max()
            x0, x1 = coords[1].min(), coords[1].max()
            products.append({
                "x0": x0, "y0": y0, "x1": x1, "y1": y1,
                "xc": (x0 + x1) // 2, "yc": (y0 + y1) // 2,
                "area": int(sizes[lbl])
            })

    print(f"  Found {len(products)} regions")

    # Cluster by y for rows
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

    # Cluster by x for columns
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

    print(f"  Row centers: {[int(c) for c in row_centers]}")
    print(f"  Col centers: {[int(c) for c in col_centers]}")

    return img, gray, h, w, row_centers, col_centers


def find_cell_boundaries(centers, total_size, margin=10):
    """Convert center positions to cell boundaries."""
    if len(centers) <= 1:
        return [(margin, total_size - margin)]

    boundaries = []
    for i, c in enumerate(centers):
        if i == 0:
            left = margin
        else:
            left = int((centers[i - 1] + c) / 2)

        if i == len(centers) - 1:
            right = total_size - margin
        else:
            right = int((c + centers[i + 1]) / 2)

        boundaries.append((left, right))

    return boundaries


def extract_main_product(cell_img):
    """
    Core logic:
    1. Find all connected components in the cell
    2. The largest one IS the product
    3. Crop tightly to its bounding box
    4. Add uniform padding (3% of product size) for clean edges
    This solves both black-edge removal AND centering.
    """
    gray = np.array(cell_img.convert("L"))
    h, w = gray.shape

    # Binary threshold for dark content
    binary = (gray < 215).astype(np.uint8)

    # Morphological closing to merge nearby dark parts of same product
    structure = np.ones((7, 7))
    closed = ndimage.binary_closing(binary, structure=structure).astype(np.uint8)

    # Label all connected components
    labeled, num_features = ndimage.label(closed)
    sizes = ndimage.sum(closed, labeled, range(num_features + 1))

    if num_features == 0:
        # No dark pixels found, return original
        print("    WARN: no components found")
        return cell_img

    # The largest component = the actual product
    main_label = np.argmax(sizes[1:]) + 1
    main_coords = np.where(labeled == main_label)

    py0 = int(main_coords[0].min())
    py1 = int(main_coords[0].max())
    px0 = int(main_coords[1].min())
    px1 = int(main_coords[1].max())

    print(f"    Main bbox: ({px0},{py0})-({px1},{py1}) size={px1-px0}x{py1-py0}")

    # Uniform padding: 4% of product dimension, min 8px, max 25px
    pad_x = max(8, min(25, int((px1 - px0) * 0.04)))
    pad_y = max(8, min(25, int((py1 - py0) * 0.04)))

    # Clamp to image bounds
    cx0 = max(0, px0 - pad_x)
    cy0 = max(0, py0 - pad_y)
    cx1 = min(w, px1 + pad_x + 1)
    cy1 = min(h, py1 + pad_y + 1)

    cropped = cell_img.crop((cx0, cy0, cx1, cy1))

    # Final pass: whiten any remaining edge artifacts (very small isolated dark spots)
    arr = np.array(cropped.convert("L"))
    h2, w2 = arr.shape
    binary2 = (arr < 220).astype(np.uint8)
    labeled2, nf2 = ndimage.label(binary2)
    if nf2 > 1:
        sz2 = ndimage.sum(binary2, labeled2, range(nf2 + 1))
        main2 = np.argmax(sz2[1:]) + 1
        result_arr = np.array(cropped)
        for lbl in range(1, nf2 + 1):
            if lbl == main2:
                continue
            if sz2[lbl] < 100:  # Remove tiny specks
                coords2 = np.where(labeled2 == lbl)
                result_arr[coords2[0], coords2[1]] = [255, 255, 255]
        cropped = Image.fromarray(result_arr)

    return cropped


def process_image(img_path, rows, cols, products):
    """Main processing."""
    img, gray, h, w, row_centers, col_centers = detect_grid_centers(img_path, rows, cols)

    row_bounds = find_cell_boundaries(row_centers, h, margin=10)
    col_bounds = find_cell_boundaries(col_centers, w, margin=10)

    print(f"  Row bounds: {row_bounds}")
    print(f"  Col bounds: {col_bounds}")

    idx = 0
    for r in range(rows):
        y0, y1 = row_bounds[r]
        for c in range(cols):
            if idx >= len(products):
                break
            x0, x1 = col_bounds[c]

            name = products[idx]
            print(f"\n  [{idx+1}] {name} cell ({r},{c}): ({x0},{y0})-({x1},{y1})", end="")

            # Step 1: Rough crop the cell
            cell = img.crop((x0, y0, x1, y1))

            # Step 2: Extract main product (tight crop + centering)
            final = extract_main_product(cell)

            out_path = os.path.join(OUT_DIR, f"{name}.jpg")
            final.save(out_path, quality=95)
            print(f" => {final.width}x{final.height}")

            idx += 1

    img.close()


# ── Process ──
print("=== V2: Re-cropping 广交会画册-15.jpg ===")
print("Strategy: main-component bounding box + uniform padding\n")
img_path = "/Users/yuekai/WorkBuddy/2026-05-09-task-6/fengyue-website/imgs/raw/广交会画册-15.jpg"
process_image(img_path, rows=3, cols=3, products=PRODUCTS)

print(f"\nDone! Output: {OUT_DIR}")
