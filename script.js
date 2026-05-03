/* =====================================================
   script.js — render content + interactions
   ===================================================== */
(function () {
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* Decorative SVG placeholder for image-less tiles */
  const placeholderSVG = (variant) => {
    const stroke = (variant === 'ink' || variant === 'clay' || variant === 'sage' || variant === 'gold') ? 'rgba(244,239,230,.8)' : 'rgba(26,26,26,.45)';
    return `<div class="tile__placeholder" aria-hidden="true">
      <svg viewBox="0 0 100 100" fill="none" stroke="${stroke}" stroke-width="0.6">
        <circle cx="50" cy="50" r="30" />
        <path d="M30 70 L50 40 L70 70" />
        <circle cx="60" cy="35" r="3" fill="${stroke}" stroke="none"/>
      </svg>
    </div>`;
  };

  /* ---------- VISION BOARD ---------- */
  function renderBoard() {
    const grid = $('#boardGrid');
    if (!grid || !window.SITE) return;
    const tiles = window.SITE.BOARD_TILES;
    grid.innerHTML = tiles.map((t, i) => {
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
      return `<${tag} ${href} ${role} class="tile ${sizeClass} ${variantClass} ${hasImage ? 'tile--has-image' : ''}" data-i="${i}">${inner}</${tag}>`;
    }).join('');
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
        <div class="paper__head">
          <span class="paper__venue">${p.venue}</span>
          <span class="paper__date">${p.date}</span>
        </div>
        <h3>${p.title}</h3>
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
          <h3>${t.title}</h3>
          <p class="talk__event">${t.event}</p>
          <p class="talk__desc">${t.desc || ''}</p>
          ${t.link ? `<a href="${t.link}" target="_blank" rel="noopener">View →</a>` : ''}
        </div>
        <span class="talk__meta">${t.location || ''}</span>
      </li>
    `).join('');
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
        <span class="comm__role">${c.role}</span>
        <h3>${c.org}</h3>
        <p>${c.desc}</p>
        <span class="comm__date">${c.date}</span>
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

  /* ---------- INIT ---------- */
  function init() {
    renderBoard();
    renderTimeline();
    renderResearch();
    renderProjects();
    renderTalks();
    bindTalkFilter();
    renderWriting();
    renderCommunity();
    renderAchievements();
    bindNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
