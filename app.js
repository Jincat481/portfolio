"use strict";
(() => {
  const data = window.portfolioData;
  const lightbox = document.querySelector('#lightbox');
  const Escape = (Value) => String(Value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const Note = (Row) => `<div class="slide-note"><h4>${Escape(Row.heading)}</h4><p>${Escape(Row.body)}</p></div>`;
  const Links = (Values) => Values.length ? `<div class="slide-links">${Values.map(value => `<a href="${Escape(value)}" target="_blank" rel="noopener noreferrer">${value.includes('youtu') ? 'YouTube에서 영상 보기' : /\.mp4(?:[?#]|$)/i.test(value) ? '비교 영상 보기' : 'GitHub에서 코드 보기'} <span aria-hidden="true">↗</span></a>`).join('')}</div>` : '';

  function Media(Item, Gallery = false) {
    const content = Item.video
      ? `<video controls playsinline preload="none" poster="${Escape(Item.src)}" style="aspect-ratio:${Item.aspect}" aria-label="${Escape(Item.alt)}"><source src="${Escape(Item.video)}" type="video/mp4">동영상을 재생할 수 없습니다. <a href="${Escape(Item.video)}">영상 열기</a></video>`
      : `<button type="button" class="zoom-media" data-lightbox="${Escape(Item.src)}" data-caption="${Escape(Item.alt)}" aria-label="${Escape(Item.alt)} 확대"><img src="${Escape(Item.src)}" width="${Item.width}" height="${Item.height}" alt="${Escape(Item.alt)}" loading="lazy" decoding="async"></button>`;
    const annotations = Gallery && Item.annotations?.length ? `<figcaption class="media-annotation">${Item.annotations.map(Escape).join('<br>')}</figcaption>` : '';
    return `<figure${annotations ? ' class="has-media-annotation"' : ''}>${Item.label ? `<p class="media-label">${Escape(Item.label)}</p>` : ''}${content}${annotations}</figure>`;
  }

  function Flow(Item, SlideId) {
    return window.portfolioFlowcharts.Render(Item, SlideId);
  }

  function Page(Item, Category) {
    const id = `${Category.id}-page-${Item.page}`;
    const heading = Item === Category.pages[0] ? '' : `<h3>${Escape(Item.title)}</h3>`;
    const notes = Item.rows.map(Note).join('');
    if (Item.scope) return `<section class="portfolio-page scope-page" id="${id}" data-slide-id="${Item.slideId}">${heading}<div class="scope-rows">${Item.rows.map(row => `<div class="scope-row"><div>${Note(row)}${Links(row.links || [])}</div>${row.image ? `<div class="scope-image">${Media(row.image)}</div>` : ''}</div>`).join('')}</div></section>`;
    const galleryRatio = [...Item.images].map(Image => Image.aspect).sort((Left,Right) => Left-Right)[Math.floor(Item.images.length/2)] || 1;
    const gallery = Item.images.length ? `<div class="slide-media media-count-${Item.images.length}" style="--gallery-ratio:${galleryRatio}">${Item.images.map(Image => Media(Image, Item.images.length === 3)).join('')}</div>` : '';
    const mainFlow = Item.flow?.large ? Flow(Item.flow, Item.slideId) : '';
    const bottomFlow = Item.flow && !Item.flow.large ? Flow(Item.flow, Item.slideId) : '';
    const extras = Item.extra.map(text => `<p class="slide-measurement">${Escape(text)}</p>`).join('');
    const achievement = Item.achievement ? `<div class="page-achievement"><p class="achievement-title">${Escape(Item.achievement.lead)} <strong>${Escape(Item.achievement.emphasis)}</strong></p><p class="achievement-description">${Escape(Item.achievement.description)}</p></div>` : '';
    return `<section class="portfolio-page" id="${id}" data-slide-id="${Item.slideId}">${heading}${achievement}<div class="slide-layout"><div class="slide-description">${notes}${Links(Item.links)}</div><div class="slide-visual">${gallery}${mainFlow}${extras}${bottomFlow}</div></div></section>`;
  }

  document.querySelector('#project-list').innerHTML = data.categories.map((category, index) => `<details class="portfolio-category" id="${category.id}" open><summary><span class="category-number">${String(index + 1).padStart(2,'0')}</span><span class="category-label"><h2>${Escape(category.title)}</h2><span>${Escape(category.subtitle)}</span></span><span class="category-toggle" aria-hidden="true"><span class="when-open">접기 −</span><span class="when-closed">펼치기 ＋</span></span></summary><div class="category-content">${category.pages.map(page => Page(page, category)).join('')}</div></details>`).join('');
  window.portfolioFlowcharts.Mount(document.querySelector('#project-list'));

  const categories = [...document.querySelectorAll('.portfolio-category')];
  const expand = document.querySelector('#expand-all');
  const collapse = document.querySelector('#collapse-all');
  function UpdateControls() {
    expand.disabled = categories.every(category => category.open);
    collapse.disabled = categories.every(category => !category.open);
  }
  function SetExpanded(Open) {
    categories.forEach(category => category.open = Open);
    UpdateControls();
  }
  expand.addEventListener('click', () => SetExpanded(true));
  collapse.addEventListener('click', () => SetExpanded(false));
  categories.forEach(category => category.addEventListener('toggle', () => {
    if (!category.open) category.querySelectorAll('video').forEach(video => video.pause());
    UpdateControls();
  }));
  UpdateControls();

  function RevealAnchor(Id) {
    const target = document.getElementById(Id);
    if (!target) return;
    const category = target.closest('.portfolio-category');
    if (category) category.open = true;
    target.scrollIntoView({block:'start', behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  }
  let zoomReturn = null;
  document.addEventListener('click', event => {
    const zoom = event.target.closest('[data-lightbox]');
    if (zoom) {
      zoomReturn = zoom;
      const image = document.querySelector('#lightbox-image');
      image.src = zoom.dataset.lightbox;
      image.alt = zoom.dataset.caption || '프로젝트 자료';
      const thumbnail = zoom.querySelector('img');
      image.style.filter = thumbnail ? getComputedStyle(thumbnail).filter : 'none';
      document.querySelector('#lightbox-caption').textContent = zoom.dataset.caption || '';
      lightbox.showModal();
      document.body.classList.add('zoom-open');
      return;
    }
    const anchor = event.target.closest('.category-nav a');
    if (anchor) {
      event.preventDefault();
      const id = anchor.hash.slice(1);
      history.replaceState(null, '', anchor.hash);
      RevealAnchor(id);
    }
  });
  document.querySelector('#lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
  lightbox.addEventListener('close', () => {
    document.body.classList.remove('zoom-open');
    if (zoomReturn?.isConnected) zoomReturn.focus({preventScroll:true});
  });
  window.addEventListener('hashchange', () => RevealAnchor(location.hash.slice(1)));
  const query = new URL(location.href).searchParams.get('project');
  if (query && data.categories.some(category => category.id === query)) RevealAnchor(query);
  else if (location.hash) RevealAnchor(location.hash.slice(1));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll('.site-header nav a').forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current','location');
        else link.removeAttribute('aria-current');
      });
    }), {rootMargin:'-15% 0px -55% 0px'});
    document.querySelectorAll('.page-shell > section').forEach(section => observer.observe(section));
  }
})();
