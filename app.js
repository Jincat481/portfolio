"use strict";
(() => {
  const data = window.portfolioData;
  const dialog = document.querySelector("#project-dialog");
  const lightbox = document.querySelector("#lightbox");
  const allProjects = [...data.projects, data.additional];
  let returnFocus = null;
  let pushedProject = false;
  const Escape = (Value) => String(Value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  const Tags = (Values) => `<div class="project-tags">${Values.map(value => `<span>${Escape(value)}</span>`).join("")}</div>`;
  const ProjectUrl = (Id) => { const url = new URL(location.href); url.search = ""; url.searchParams.set("project", Id); url.hash = ""; return url; };
  const VideoLinks = (Links, Label = "기능 구현 영상") => Links?.length ? `<div class="external-videos">${Links.map(link => `<a href="${Escape(link)}" target="_blank" rel="noopener noreferrer">${Escape(Label)} · YouTube ↗</a>`).join("")}</div>` : "";

  document.querySelector("#portrait").src = data.portrait;
  document.querySelector("#timeline-list").innerHTML = data.timeline.map(item => `<article class="timeline-row"><div class="timeline-period">${Escape(item.year)}<small>${Escape(item.label)}</small></div><div><h3>${item.project ? `<a href="?project=${item.project}" data-project="${item.project}">${Escape(item.title)} ↗</a>` : Escape(item.title)}</h3><p>${Escape(item.body)}</p></div></article>`).join("");
  document.querySelector("#project-list").innerHTML = data.projects.map((project, index) => `<article class="project-item" id="project-${project.id}"><p class="project-index">0${index + 1} · ${Escape(project.kicker)}</p><a class="project-cover" href="?project=${project.id}" data-project="${project.id}" aria-label="${Escape(project.title)} 프로젝트 상세 보기"><img src="${project.cover}" width="1280" height="512" alt="${Escape(project.title)} 게임 화면" loading="lazy" decoding="async"><span class="project-cover-label">PROJECT DETAIL ↗</span></a><h3 class="project-title"><a href="?project=${project.id}" data-project="${project.id}">${Escape(project.title)}<span aria-hidden="true">↗</span></a></h3><p class="project-summary">${Escape(project.summary)}</p><p class="project-meta">${Escape(project.period)} · ${Escape(project.kicker)}</p>${Tags(project.stack)}<div class="project-links"><a href="?project=${project.id}" data-project="${project.id}">구현 내용 살펴보기 ↗</a>${project.overview.links.map(link => `<a href="${link}" target="_blank" rel="noopener noreferrer">전체 플레이 영상 ↗</a>`).join("")}</div></article>`).join("");

  function Media(Image, Context = "") {
    const label = Image.label || Context;
    const content = Image.video
      ? `<video controls playsinline preload="none" poster="${Escape(Image.src)}" src="${Escape(Image.video)}" aria-label="${Escape(label || "플레이 영상")}">동영상을 재생할 수 없습니다. <a href="${Escape(Image.video)}">영상 열기</a></video>`
      : `<button type="button" data-lightbox="${Escape(Image.src)}" data-caption="${Escape(label)}" aria-label="${Escape(label || "프로젝트 이미지")} 확대"><img src="${Escape(Image.src)}" alt="${Escape(label || Image.alt || "프로젝트 화면")}" loading="lazy" decoding="async"${Image.width ? ` width="${Image.width}" height="${Image.height}"` : ""}></button>`;
    return `<figure>${label ? `<p class="media-label">${Escape(label)}</p>` : ""}${content}${Image.caption ? `<figcaption>${Escape(Image.caption)}</figcaption>` : ""}</figure>`;
  }

  function Feature(Feature, Index) {
    const imageCount = Math.min(Feature.images.length, 3);
    const comparison = Feature.sourcePage === 8;
    const images = imageCount ? `<div class="feature-media${comparison ? " comparison" : ""}" style="--count:${imageCount}">${Feature.images.map(image => Media(image)).join("")}</div>` : "";
    const summary = Feature.diagram ? `<div class="diagram-summary">${Feature.diagram.map(item => `<div><h4>${Escape(item.heading)}</h4><p>${Escape(item.body)}</p></div>`).join("")}</div>` : "";
    const notes = Feature.rows.length ? `<div class="feature-notes">${Feature.rows.map(item => `<div><h4>${Escape(item.heading)}</h4><p>${Escape(item.body)}</p></div>`).join("")}</div>` : "";
    const flow = Feature.flow ? `<figure class="flow-block"><div><span>처리 흐름</span><button type="button" data-lightbox="${Feature.flow}" data-caption="${Escape(Feature.title)} · 처리 흐름">확대해서 보기 ↗</button></div><div class="flow-scroll"><img src="${Feature.flow}" alt="${Escape(Feature.title)} 처리 흐름도" loading="lazy"></div></figure>` : "";
    return `<section class="detail-section" id="${Feature.anchor}"><p class="feature-topline">IMPLEMENTATION · ${String(Index + 1).padStart(2, "0")}</p><h3>${Escape(Feature.title)}</h3>${images}${summary}${notes}${flow}${VideoLinks(Feature.links)}</section>`;
  }

  function Overview(Project) {
    const overview = Project.overview;
    if (!overview) return `<section class="project-overview" id="detail-overview"><p class="detail-kicker">${Escape(Project.kicker)}</p><h2 id="project-dialog-title">${Escape(Project.title)}</h2><p class="detail-summary">${Escape(Project.summary)}</p>${Tags(Project.stack)}</section>`;
    const scope = Project.id === "moonlight" ? `<div class="scope-list">${data.scope.map(item => `<div><h4>${Escape(item.title)}</h4><p>${Escape(item.body)}</p></div>`).join("")}</div>` : "";
    return `<section class="project-overview" id="detail-overview"><p class="detail-kicker">${Escape(Project.kicker)}</p><h2 id="project-dialog-title">${Escape(Project.title)}</h2><p class="detail-summary">${Escape(Project.summary)}</p>${Tags(Project.stack)}<div class="project-visual">${overview.images.map(image => Media(image, "게임 플레이")).join("")}</div><dl class="project-facts">${overview.table.map(row => `<div><dt>${Escape(row[0])}</dt><dd>${Escape(row[1])}</dd></div>`).join("")}</dl>${VideoLinks(overview.links, "전체 플레이 영상")}${scope}</section>`;
  }

  function RenderProject(Project) {
    document.querySelector("#project-content").innerHTML = `<div class="project-layout"><aside class="project-sidebar" aria-label="프로젝트 목차"><p>CONTENTS</p><a href="#detail-overview" data-detail-anchor="detail-overview">프로젝트 소개</a>${Project.features.map(feature => `<a href="#${feature.anchor}" data-detail-anchor="${feature.anchor}">${Escape(feature.title)}</a>`).join("")}</aside><article class="project-main">${Overview(Project)}${Project.features.map(Feature).join("")}<div class="detail-end"><button type="button" data-close-project>← 프로젝트 목록으로</button><a href="mailto:${data.email}">이메일 문의 ↗</a></div></article></div>`;
    document.querySelector("#project-permalink").href = ProjectUrl(Project.id).href;
    dialog.scrollTop = 0;
  }

  function OpenProject(Id, Push = true) {
    const project = allProjects.find(item => item.id === Id);
    if (!project) return;
    returnFocus = document.activeElement;
    RenderProject(project);
    if (!dialog.open) dialog.showModal();
    document.body.classList.add("dialog-open");
    document.title = `${project.title} — 전진오 포트폴리오`;
    if (Push && location.protocol !== "file:") { history.pushState({project: Id}, "", ProjectUrl(Id)); pushedProject = true; }
    else pushedProject = false;
    document.querySelector("#project-close").focus({preventScroll: true});
  }

  function CloseView() {
    dialog.querySelectorAll("video").forEach(video => video.pause());
    if (lightbox.open) lightbox.close();
    if (dialog.open) dialog.close();
    document.body.classList.remove("dialog-open");
    document.title = "전진오 — 게임 클라이언트 개발 포트폴리오";
    if (returnFocus instanceof HTMLElement && document.contains(returnFocus)) returnFocus.focus({preventScroll: true});
  }

  function CloseProject() {
    if (pushedProject) { pushedProject = false; CloseView(); history.back(); }
    else { const url = new URL(location.href); url.searchParams.delete("project"); url.hash = "projects"; if (location.protocol !== "file:") history.replaceState(null, "", url); CloseView(); document.querySelector("#projects").scrollIntoView(); }
  }

  function OpenLightbox(Source, Caption) {
    const image = document.querySelector("#lightbox-image");
    image.src = Source; image.alt = Caption || "프로젝트 이미지";
    document.querySelector("#lightbox-caption").textContent = Caption || "";
    lightbox.showModal();
  }

  document.addEventListener("click", event => {
    const project = event.target.closest("[data-project]");
    if (project && !event.ctrlKey && !event.metaKey && !event.shiftKey && event.button === 0) { event.preventDefault(); OpenProject(project.dataset.project); return; }
    const zoom = event.target.closest("[data-lightbox]");
    if (zoom) { OpenLightbox(zoom.dataset.lightbox, zoom.dataset.caption); return; }
    const anchor = event.target.closest("[data-detail-anchor]");
    if (anchor) { event.preventDefault(); document.getElementById(anchor.dataset.detailAnchor)?.scrollIntoView({behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start"}); return; }
    if (event.target.closest("[data-close-project]")) CloseProject();
  });
  document.querySelector("#project-close").addEventListener("click", CloseProject);
  document.querySelector("#project-back").addEventListener("click", event => { event.preventDefault(); CloseProject(); });
  dialog.addEventListener("cancel", event => { event.preventDefault(); CloseProject(); });
  dialog.addEventListener("click", event => { if (event.target === dialog) CloseProject(); });
  document.querySelector("#lightbox-close").addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", event => { if (event.target === lightbox) lightbox.close(); });
  lightbox.addEventListener("close", () => { if (!dialog.open) document.body.classList.remove("dialog-open"); });
  window.addEventListener("popstate", () => { const id = new URL(location.href).searchParams.get("project"); if (id) OpenProject(id, false); else CloseView(); });
  const activeProject = new URL(location.href).searchParams.get("project");
  if (activeProject) OpenProject(activeProject, false);
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (!entry.isIntersecting) return; document.querySelectorAll(".site-header nav a").forEach(link => { if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "location"); else link.removeAttribute("aria-current"); }); }); }, {rootMargin:"-15% 0px -55% 0px"});
    document.querySelectorAll(".page-shell>section").forEach(section => observer.observe(section));
  }
})();
