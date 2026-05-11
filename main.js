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

// 追踪当前选中的 filter
let currentFilter = 'all';
let isTransitioning = false;

/**
 * 淡入淡出切换背景
 */
function switchHeroBg(filter) {
  if (!bgCurrent || !bgNext) return;
  if (isTransitioning) return;

  const isAll = filter === 'all';
  const targetClass = isAll ? 'has-bg' : 'hero-bg-' + filter;

  // 检查是否已是目标背景
  const currentBgClass = Array.from(bgCurrent.classList)
    .find(cls => cls === 'has-bg' || cls.startsWith('hero-bg-'));
  if (currentBgClass === targetClass) return;

  isTransitioning = true;

  // 设置 bgNext 为新背景
  bgNext.className = 'page-hero-bg bg-next';
  bgNext.classList.add(targetClass);

  // 触发淡入淡出
  requestAnimationFrame(() => {
    bgNext.classList.add('fading'); // 新图淡入
    bgCurrent.classList.add('fading'); // 旧图淡出

    // 动画结束后交换层
    bgCurrent.addEventListener('transitionend', function onEnd() {
      bgCurrent.removeEventListener('transitionend', onEnd);
      
      // 交换类名
      bgNext.classList.remove('fading');
      bgNext.classList.remove('bg-next');
      bgNext.classList.add('bg-current');
      
      bgCurrent.classList.remove('fading');
      bgCurrent.classList.remove(currentBgClass);
      bgCurrent.classList.add('bg-next');
      
      isTransitioning = false;
    });
  });
}

if (filterBtns.length && productCards.length && bgCurrent) {
  // 初始化 currentFilter 为当前 active 按钮的 filter
  const initActive = document.querySelector('.filter-btn.active');
  if (initActive) {
    currentFilter = initActive.dataset.filter;
  }

  filterBtns.forEach(btn => {
    // 点击：切换筛选 + 更新背景 + 更新 currentFilter
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      currentFilter = filter;

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
      switchHeroBg(filter);
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
