/* =====================================================
   script.js
   Renders content + interactions. Vanilla JS, no deps.
   ===================================================== */
(function () {
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  const REDUCE_MOTION = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Decorative SVG placeholder ---------- */
  const placeholderSVG = (variant) => {
    const stroke = (['ink','clay','sage','gold'].includes(variant)) ? 'rgba(244,239,230,.8)' : 'rgba(26,26,26,.45)';
    return `<div class="tile__placeholder" aria-hidden="true">
      <svg viewBox="0 0 100 100" fill="none" stroke="${stroke}" stroke-width="0.6">
        <circle cx="50" cy="50" r="30" />
        <path d="M30 70 L50 40 L70 70" />
        <circle cx="60" cy="35" r="3" fill="${stroke}" stroke="none"/>
      </svg>
    </div>`;
  };

  /* ---------- Card-level image carousel ----------
     Renders one of three states based on `images` array:
       []       -> nothing rendered
       [single] -> static image, no controls
       [many]   -> auto-rotating carousel with dots + arrows
     Assign a unique id for aria linking. */
  let carouselCount = 0;
  function carouselHTML(images, opts = {}) {
    if (!images || images.length === 0) return '';
    const cid = `carousel-${++carouselCount}`;
    const aspect = opts.aspect || '16 / 9';
    if (images.length === 1) {
      const img = images[0];
      return `<figure class="card-media" style="aspect-ratio: ${aspect}">
        <img src="${img.src}" alt="${img.alt || ''}" loading="lazy"
             onerror="this.parentElement.classList.add('card-media--broken')" />
        ${img.caption ? `<figcaption>${img.caption}</figcaption>` : ''}
      </figure>`;
    }
    const slides = images.map((img, i) => `
      <div class="slide" data-i="${i}" ${i === 0 ? '' : 'aria-hidden="true"'}>
        <img src="${img.src}" alt="${img.alt || ''}" loading="lazy" />
        ${img.caption ? `<figcaption>${img.caption}</figcaption>` : ''}
      </div>
    `).join('');
    const dots = images.map((_, i) => `
      <button class="carousel__dot ${i === 0 ? 'is-active' : ''}"
              data-i="${i}"
              aria-label="Go to image ${i + 1} of ${images.length}"
              aria-controls="${cid}"></button>
    `).join('');
    return `<div class="carousel" id="${cid}" role="region" aria-label="Image carousel" style="aspect-ratio: ${aspect}">
      <div class="carousel__track">${slides}</div>
      <button class="carousel__nav carousel__nav--prev" aria-label="Previous image">‹</button>
      <button class="carousel__nav carousel__nav--next" aria-label="Next image">›</button>
      <div class="carousel__dots">${dots}</div>
    </div>`;
  }

  function initCarousels(scope = document) {
    $$('.carousel', scope).forEach(car => {
      const slides = $$('.slide', car);
      const dots   = $$('.carousel__dot', car);
      const prev   = $('.carousel__nav--prev', car);
      const next   = $('.carousel__nav--next', car);
      let idx = 0, timer = null;

      function goTo(i) {
        idx = (i + slides.length) % slides.length;
        slides.forEach((s, si) => {
          s.classList.toggle('is-active', si === idx);
          if (si === idx) s.removeAttribute('aria-hidden');
          else s.setAttribute('aria-hidden', 'true');
        });
        dots.forEach((d, di) => d.classList.toggle('is-active', di === idx));
      }
      function start() {
        if (REDUCE_MOTION) return;
        stop();
        timer = setInterval(() => goTo(idx + 1), 5000);
      }
      function stop() { if (timer) { clearInterval(timer); timer = null; } }

      prev.addEventListener('click', () => { goTo(idx - 1); start(); });
      next.addEventListener('click', () => { goTo(idx + 1); start(); });
      dots.forEach(d => d.addEventListener('click', () => { goTo(parseInt(d.dataset.i, 10)); start(); }));
      car.addEventListener('mouseenter', stop);
      car.addEventListener('mouseleave', start);
      car.addEventListener('focusin', stop);
      car.addEventListener('focusout', start);

      // Set first slide active for CSS transition
      goTo(0);
      start();
    });
  }

  /* ---------- VISION BOARD ---------- */
  function renderBoard() {
    const grid = $('#boardGrid');
    if (!grid || !window.SITE) return;
    const tiles = window.SITE.BOARD_TILES;
    grid.innerHTML = tiles.map((t) => {
      if (t.gallery) {
        return `<button type="button" aria-label="${t.alt || 'Open gallery image'}" class="tile tile--gallery tile--has-image" data-gallery-src="${t.image}" data-gallery-alt="${t.alt || ''}">
          <img class="tile__img" src="${t.image}" alt="${t.alt || ''}" loading="lazy"
                onerror="this.style.display='none';this.parentElement.classList.remove('tile--has-image');">
        </button>`;
      }
      const sizeClass = `tile--${t.size || 'sm'}`;
      const variantClass = `tile--${t.variant || 'paper2'}`;
      const hasImage = t.image && t.image.length > 0;
      const imageHTML = hasImage
        ? `<img class="tile__img" src="${t.image}" alt="${t.alt || t.title}" loading="lazy"
              onerror="this.style.display='none';this.parentElement.classList.remove('tile--has-image');">`
        : placeholderSVG(t.variant);
      const captionHTML = t.caption ? `<span class="tile__caption">${t.caption}</span>` : '';
      const inner = `
        ${imageHTML}
        <span class="tile__label">${t.label || ''}</span>
        <h3 class="tile__title">${(t.title || '').replace(/\n/g, '<br>')}</h3>
        ${captionHTML}
      `;
      const tag = t.link ? 'a' : 'div';
      const href = t.link ? `href="${t.link}"` : '';
      const role = t.link ? '' : 'role="figure"';
      return `<${tag} ${href} ${role} class="tile ${sizeClass} ${variantClass} ${hasImage ? 'tile--has-image' : ''}">${inner}</${tag}>`;
    }).join('');
  }

  function bindGalleryPreview() {
    const tiles = $$('.tile--gallery[data-gallery-src]');
    if (!tiles.length) return;

    let preview = $('.gallery-preview');
    if (!preview) {
      preview = document.createElement('div');
      preview.className = 'gallery-preview';
      preview.setAttribute('aria-hidden', 'true');
      preview.innerHTML = '<div class="gallery-preview__backdrop"></div><img class="gallery-preview__img" alt="">';
      document.body.appendChild(preview);
    }

    const previewImg = $('.gallery-preview__img', preview);
    const backdrop = $('.gallery-preview__backdrop', preview);
    let touchLocked = false;
    let lastPointerType = 'mouse';

    function show(tile, mode = 'hover') {
      previewImg.src = tile.dataset.gallerySrc;
      previewImg.alt = tile.dataset.galleryAlt || '';
      preview.dataset.activeSrc = tile.dataset.gallerySrc;
      touchLocked = mode === 'touch';
      preview.classList.toggle('is-touch', touchLocked);
      preview.classList.add('is-visible');
      preview.setAttribute('aria-hidden', 'false');
      tile.classList.add('is-previewed');
    }

    function hide() {
      preview.classList.remove('is-visible', 'is-touch');
      preview.setAttribute('aria-hidden', 'true');
      preview.dataset.activeSrc = '';
      tiles.forEach(tile => tile.classList.remove('is-previewed'));
      touchLocked = false;
    }

    tiles.forEach(tile => {
      tile.addEventListener('pointerenter', (event) => {
        if (event.pointerType !== 'touch') show(tile, 'hover');
      });
      tile.addEventListener('pointerleave', (event) => {
        if (event.pointerType !== 'touch' && !touchLocked) hide();
      });
      tile.addEventListener('pointerdown', (event) => {
        lastPointerType = event.pointerType || 'mouse';
        if (lastPointerType === 'touch') tile.dataset.touchPending = 'true';
      });
      tile.addEventListener('focus', () => {
        if (tile.dataset.touchPending === 'true') return;
        show(tile, 'hover');
      });
      tile.addEventListener('blur', () => {
        if (!touchLocked) hide();
      });
      tile.addEventListener('click', (event) => {
        if (lastPointerType !== 'touch') return;
        event.preventDefault();
        delete tile.dataset.touchPending;
        if (preview.classList.contains('is-visible') && preview.dataset.activeSrc === tile.dataset.gallerySrc) hide();
        else show(tile, 'touch');
      });
    });

    backdrop.addEventListener('click', hide);
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') hide();
    });
    window.addEventListener('scroll', () => {
      if (touchLocked) hide();
    }, { passive: true });
  }

  /* ---------- NEWS / LATEST ---------- */
  function renderNews() {
    const list = $('#newsList');
    if (!list || !window.SITE) return;
    list.innerHTML = window.SITE.NEWS.map(n => `
      <li class="news__item">
        <span class="news__date">${n.date}</span>
        <div class="news__body">
          <span class="news__cat">${n.category}</span>
          <h3>${n.title}</h3>
          <p>${n.desc}</p>
          ${n.link ? `<a class="link-arrow news__link" href="${n.link}" target="_blank" rel="noopener">Open source →</a>` : ''}
        </div>
      </li>
    `).join('');
  }

  /* ---------- TIMELINE / EXPERIENCE ---------- */
  function renderTimeline() {
    const list = $('#timeline');
    if (!list || !window.SITE) return;
    list.innerHTML = window.SITE.EXPERIENCES.map(item => `
      <li class="timeline__item">
        <span class="timeline__date">${item.date}</span>
        <div class="timeline__body">
          <h3>${item.role}</h3>
          <p class="timeline__org">${item.org}</p>
          ${carouselHTML(item.images)}
          <ul class="timeline__bullets">
            ${item.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
          <div class="timeline__tags">
            ${(item.tags || []).map(t => `<span class="timeline__tag">${t}</span>`).join('')}
          </div>
        </div>
        <span class="timeline__loc">${item.location || ''}</span>
      </li>
    `).join('');
  }

  /* ---------- RESEARCH ---------- */
  function renderResearch() {
    const grid = $('#researchGrid');
    if (!grid || !window.SITE) return;
    grid.innerHTML = window.SITE.RESEARCH.map(p => `
      <article class="paper">
        ${carouselHTML(p.images)}
        <div class="paper__head">
          <span class="paper__venue">${p.venue}</span>
          <span class="paper__date">${p.date}</span>
        </div>
        <h3>${p.title}</h3>
        ${p.authors ? `<p class="paper__authors">${p.authors}</p>` : ''}
        <p>${p.summary}</p>
        ${p.status ? `<span class="paper__status">${p.status}</span>` : ''}
      </article>
    `).join('');
  }

  /* ---------- PROJECTS ---------- */
  function renderProjects() {
    const grid = $('#projectsGrid');
    if (!grid || !window.SITE) return;
    grid.innerHTML = window.SITE.PROJECTS.map(pr => `
      <article class="proj">
        ${carouselHTML(pr.images)}
        <span class="proj__cat">${pr.cat}</span>
        <h3>${pr.name}</h3>
        <p>${pr.desc}</p>
        <div class="proj__tags">
          ${(pr.tags || []).map(t => `<span class="proj__tag">${t}</span>`).join('')}
        </div>
      </article>
    `).join('');
  }

  /* ---------- TALKS ---------- */
  let activeCat = 'all';
  function renderTalks() {
    const list = $('#talksList');
    if (!list || !window.SITE) return;
    const items = window.SITE.TALKS.filter(t => activeCat === 'all' || t.cat === activeCat);
    list.innerHTML = items.map(t => `
      <li class="talk">
        <span class="talk__date">${t.date}</span>
        <div class="talk__main">
          ${carouselHTML(t.images)}
          <h3>${t.title}</h3>
          <p class="talk__event">${t.event}</p>
          <p class="talk__desc">${t.desc || ''}</p>
          ${t.link ? `<a href="${t.link}" target="_blank" rel="noopener">View →</a>` : ''}
        </div>
        <span class="talk__meta">${t.location || ''}</span>
      </li>
    `).join('');
    initCarousels(list);
  }

  function bindTalkFilter() {
    const filter = $('#talksFilter');
    if (!filter) return;
    filter.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-cat]');
      if (!btn) return;
      $$('button[data-cat]', filter).forEach(b => b.classList.remove('chip--active'));
      btn.classList.add('chip--active');
      activeCat = btn.dataset.cat;
      renderTalks();
    });
  }

  /* ---------- WRITING ---------- */
  function renderWriting() {
    const list = $('#writingList');
    if (!list || !window.SITE) return;
    list.innerHTML = window.SITE.WRITING.map(w => `
      <li class="post">
        <span class="post__platform">${w.platform}</span>
        <div>
          ${carouselHTML(w.images)}
          <h4>${w.url ? `<a href="${w.url}" target="_blank" rel="noopener" style="color:inherit;text-decoration:none">${w.title} →</a>` : w.title}</h4>
          <p>${w.excerpt}</p>
        </div>
        <span class="post__date">${w.date}</span>
      </li>
    `).join('');
  }

  /* ---------- COMMUNITY ---------- */
  function renderCommunity() {
    const grid = $('#communityGrid');
    if (!grid || !window.SITE) return;
    grid.innerHTML = window.SITE.COMMUNITY.map(c => `
      <article class="comm">
        ${carouselHTML(c.images)}
        <span class="comm__role">${c.role}</span>
        <h3>${c.org}</h3>
        <p>${c.desc}</p>
        <span class="comm__date">${c.date}</span>
      </article>
    `).join('');
  }

  /* ---------- MENTORING ---------- */
  function renderMentoring() {
    const grid = $('#mentoringGrid');
    if (!grid || !window.SITE) return;
    grid.innerHTML = window.SITE.MENTORING.map(m => `
      <article class="comm">
        ${carouselHTML(m.images)}
        <span class="comm__role">${m.role}</span>
        <h3>${m.org}</h3>
        <p>${m.desc}</p>
        <span class="comm__date">${m.date}</span>
      </article>
    `).join('');
  }

  /* ---------- ACHIEVEMENTS ---------- */
  function renderAchievements() {
    const grid = $('#achGrid');
    if (!grid || !window.SITE) return;
    grid.innerHTML = window.SITE.ACHIEVEMENTS.map(a => `
      <article class="ach">
        <span class="ach__cat">${a.cat}</span>
        <h3>${a.title}</h3>
        <p>${a.desc}</p>
      </article>
    `).join('');
  }

  /* ---------- MOBILE NAV ---------- */
  function bindNav() {
    const toggle = $('.nav__toggle');
    const links = $('.nav__links');
    if (!toggle || !links) return;
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    $$('.nav__links a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      });
    });
  }

  function bindThemeToggle() {
    const toggle = $('.theme-toggle');
    if (!toggle) return;

    function setTheme(theme) {
      document.documentElement.dataset.theme = theme;
      toggle.setAttribute('aria-pressed', theme === 'dark');
      toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      const text = $('.theme-toggle__text', toggle);
      if (text) text.textContent = theme === 'dark' ? 'Light' : 'Dark';
      try {
        localStorage.setItem('portfolio-theme', theme);
      } catch (error) {
        // Theme still changes for this page view if storage is unavailable.
      }
    }

    setTheme(document.documentElement.dataset.theme || 'light');
    toggle.addEventListener('click', () => {
      setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
    });
  }

  function bindMotionLayer() {
    const paceFill = $('.scroll-pace__fill');
    const route = $('.cursor-route');

    if (paceFill) {
      const updateScrollPace = () => {
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
        document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(4));
      };
      updateScrollPace();
      window.addEventListener('scroll', updateScrollPace, { passive: true });
      window.addEventListener('resize', updateScrollPace);
    }

    if (!route || REDUCE_MOTION || !window.matchMedia('(hover: hover)').matches) return;

    let hideTimer;
    window.addEventListener('pointermove', (event) => {
      route.style.transform = `translate3d(${event.clientX - 110}px, ${event.clientY - 110}px, 0) scale(.82)`;
      route.classList.add('is-visible');
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => route.classList.remove('is-visible'), 900);
    }, { passive: true });
  }

  /* ---------- INIT ---------- */
  function init() {
    renderBoard();
    renderNews();
    renderTimeline();
    renderResearch();
    renderProjects();
    renderTalks();
    bindTalkFilter();
    renderWriting();
    renderCommunity();
    renderMentoring();
    renderAchievements();
    bindNav();
    bindThemeToggle();
    bindMotionLayer();
    bindGalleryPreview();
    // Initialize any carousels that were rendered (talks re-initializes on filter change)
    initCarousels(document);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
