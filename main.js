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
const pageHero = document.querySelector('.page-hero');

let heroFadeTimeout = null;

/**
 * 背景图淡入淡出切换
 * 原理：::after 层级在 ::before 之上，::before 显示旧图，::after 显示新图
 * 通过 opacity 平滑过渡，全程不闪现黑色
 */
function crossfadeHeroTo(filter) {
  if (!pageHero) return;
  
  const isAll = filter === 'all';
  const alreadyThere = isAll
    ? pageHero.classList.contains('has-bg') && !heroFadeTimeout
    : pageHero.classList.contains('hero-bg-' + filter) && !heroFadeTimeout;
  
  if (alreadyThere) return;
  if (heroFadeTimeout) clearTimeout(heroFadeTimeout);

  // 阶段1：旧图淡出（opacity 1→0，0.6s）
  pageHero.classList.add('hero-fading-out');
  pageHero.classList.remove('has-bg');
  
  // 移除所有 hero-bg-* 类（保留 hero-fading-out）
  const classes = Array.from(pageHero.classList);
  classes.forEach(cls => {
    if (cls.startsWith('hero-bg-')) {
      pageHero.classList.remove(cls);
    }
  });

  heroFadeTimeout = setTimeout(() => {
    // 阶段2：切换到新背景类，新图淡入（opacity 0→1，1s）
    if (isAll) {
      pageHero.classList.add('has-bg');
    } else {
      pageHero.classList.add('hero-bg-' + filter);
    }
    pageHero.classList.remove('hero-fading-out');
    heroFadeTimeout = null;
  }, 1000);
}

if (filterBtns.length && productCards.length) {
  // 页面加载时，根据默认 active 按钮初始化背景
  const activeBtn = document.querySelector('.filter-btn.active');
  if (activeBtn) {
    const f = activeBtn.dataset.filter;
    if (f === 'all') pageHero.classList.add('has-bg');
  }

  filterBtns.forEach(btn => {
    // 鼠标悬停：预览背景切换
    btn.addEventListener('mouseenter', () => {
      const f = btn.dataset.filter;
      if (f === 'all') return;
      crossfadeHeroTo(f);
    });

    // 鼠标离开：恢复 active 背景
    btn.addEventListener('mouseleave', () => {
      const activeBtn = document.querySelector('.filter-btn.active');
      if (!activeBtn) return;
      const f = activeBtn.dataset.filter;
      crossfadeHeroTo(f);
    });

    // 点击：切换筛选 + 更新背景
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

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
