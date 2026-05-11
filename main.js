/* ============================================================
   main.js  —  峰悦户外官网交互逻辑
   ============================================================ */

// ── 导航滚动效果 ──────────────────────────────────────────────
const nav = document.getElementById('nav');
if (nav) {
  if (!nav.classList.contains('scrolled')) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }
}

// ── 汉堡菜单 ─────────────────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');

if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navMobile.classList.toggle('open');
  });

  navMobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navMobile.classList.remove('open');
    });
  });

  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !navMobile.contains(e.target)) {
      navToggle.classList.remove('open');
      navMobile.classList.remove('open');
    }
  });
}

// ── 滚动淡入动画 ─────────────────────────────────────────────
const fadeEls = document.querySelectorAll('.fade-in');
if (fadeEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach(el => observer.observe(el));
}

// ── 产品筛选 & 背景图切换 ────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('#productsGrid .product-card');
const bgCurrent = document.getElementById('bgCurrent');
const bgNext = document.getElementById('bgNext');

let isTransitioning = false;
const TRANSITION_DURATION = 2000; // 2秒总时长

// 追踪当前选中的 filter（用于鼠标离开后恢复）
let currentFilter = 'all';

/**
 * 交叉淡入淡出切换背景图
 * 原理：双层背景同时过渡，旧图淡出 + 新图淡入，全程交叉无黑屏
 */
function crossfadeHeroTo(filter) {
  if (!bgCurrent || !bgNext) return;
  if (isTransitioning) return;

  const isAll = filter === 'all';
  const targetClass = isAll ? 'has-bg' : 'hero-bg-' + filter;

  // 判断是否已经是目标背景
  const currentBgClass = Array.from(bgCurrent.classList)
    .find(cls => cls === 'has-bg' || cls.startsWith('hero-bg-'));
  if (currentBgClass === targetClass) return;

  // 开始过渡
  isTransitioning = true;

  // 给 bgNext 设置新背景
  bgNext.className = 'page-hero-bg bg-next';
  if (isAll) {
    bgNext.classList.add('has-bg');
  } else {
    bgNext.classList.add('hero-bg-' + filter);
  }

  // 同时触发动画：旧图淡出 + 新图淡入
  bgCurrent.classList.add('fading');
  bgNext.classList.add('fading');

  // 动画结束后，交换层并清理
  setTimeout(() => {
    // 复制 bgNext 的类名到 bgCurrent
    bgCurrent.className = bgNext.className;
    // 移除 fading 类
    bgCurrent.classList.remove('fading');
    
    // 重置 bgNext
    bgNext.className = 'page-hero-bg bg-next';
    
    isTransitioning = false;
  }, TRANSITION_DURATION);
}

if (filterBtns.length && productCards.length && bgCurrent) {
  // 初始化 currentFilter 为当前 active 按钮的 filter
  const initActive = document.querySelector('.filter-btn.active');
  if (initActive) {
    currentFilter = initActive.dataset.filter;
  }

  filterBtns.forEach(btn => {
    // 鼠标悬停：预览背景切换
    btn.addEventListener('mouseenter', () => {
      const f = btn.dataset.filter;
      crossfadeHeroTo(f);
    });

    // 鼠标离开：恢复到当前选中的背景
    btn.addEventListener('mouseleave', () => {
      crossfadeHeroTo(currentFilter);
    });

    // 点击：切换筛选 + 更新背景 + 更新 currentFilter
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      currentFilter = filter; // 更新当前选中状态

      // 筛选产品卡片
      productCards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        if (show) {
          card.style.display = '';
          card.classList.remove('visible');
          requestAnimationFrame(() => {
            requestAnimationFrame(() => card.classList.add('visible'));
          });
        } else {
          card.style.display = 'none';
        }
      });

      // 背景图切换
      crossfadeHeroTo(filter);
    });
  });
}

// ── 联系表单提交 ─────────────────────────────────────────────
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm && formSuccess) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.textContent = (typeof translations !== 'undefined' && translations.form_sending)
      ? translations.form_sending[document.documentElement.lang.startsWith('en') ? 'en' : 'zh']
      : '发送中…';
    submitBtn.disabled = true;

    setTimeout(() => {
      contactForm.style.display = 'none';
      formSuccess.classList.add('show');
    }, 800);
  });
}

// ── 数字计数动画 ─────────────────────────────────────────────
function animateCount(el, target, suffix, duration = 1500) {
  const startTime = performance.now();
  const isFloat = String(target).includes('.');

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 4);
    const current = isFloat
      ? (ease * target).toFixed(1)
      : Math.round(ease * target);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const numEl = entry.target;
      const rawText = numEl.dataset.target;
      if (!rawText) return;
      const suffix = numEl.dataset.suffix || '';
      animateCount(numEl, parseFloat(rawText), suffix);
      statsObserver.unobserve(numEl);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => statsObserver.observe(el));

// ── 平滑滚动 ─────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
    }
  });
});

// ── 页面加载完成后触发首屏元素可见 ─────────────────────────
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .fade-in').forEach(el => {
    setTimeout(() => el.classList.add('visible'), 100);
  });
});

// ── 首页轮播 ────────────────────────────────────────────────
const heroSlides = document.getElementById('heroSlides');
const heroDots = document.getElementById('heroDots');

if (heroSlides && heroDots) {
  const slides = heroSlides.querySelectorAll('.hero-slide');
  let currentSlide = 0;
  let slideInterval;

  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    heroDots.appendChild(dot);
  });

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    heroDots.children[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    heroDots.children[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
  }

  function startSlideshow() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopSlideshow() {
    clearInterval(slideInterval);
  }

  heroSlides.addEventListener('mouseenter', stopSlideshow);
  heroSlides.addEventListener('mouseleave', startSlideshow);

  startSlideshow();
}
