"use strict";
(() => {
  const stage = document.querySelector("#sample-stage");
  const moonlight = window.portfolioData.projects.find(item => item.id === "moonlight");
  const options = {A:{size:16,weight:600},B:{size:18,weight:600},C:{size:20,weight:700}};
  let selected = new URL(location.href).searchParams.get("size") || "B";
  if (!options[selected]) selected = "B";
  const Escape = (Value) => String(Value ?? "").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
  function SetSize(Size) {
    document.body.dataset.size = Size;
    document.querySelector(`input[value="${Size}"]`).checked = true;
    document.querySelector("#current-size").textContent = `${Size}안 · ${options[Size].size}px / ${options[Size].weight}`;
    if (location.protocol !== "file:") { const url = new URL(location.href); url.searchParams.set("size",Size); history.replaceState(null,"",url); }
  }
  function RenderDemo(Kind) {
    stage.querySelectorAll("video").forEach(video=>video.pause());
    const feature = moonlight.features.find(item=>item.sourcePage === (Kind === "execution" ? 9 : 8));
    const images = feature.images.map(image=>`<figure><p class="media-label">${Escape(image.label)}</p>${image.video ? `<video controls playsinline preload="none" poster="../${Escape(image.src)}" src="../${Escape(image.video)}" aria-label="${Escape(image.label)}"></video>` : `<img src="../${Escape(image.src)}" alt="${Escape(image.label)}" loading="lazy">`}${image.caption ? `<figcaption>${Escape(image.caption)}</figcaption>` : ""}</figure>`).join("");
    stage.innerHTML = `<p class="feature-topline">IMPLEMENTATION · ${Kind === "execution" ? "05" : "04"}</p><h2>${Escape(feature.title)}</h2><div class="feature-media${Kind === "fade" ? " comparison" : ""}" style="--count:${feature.images.length}">${images}</div>${feature.rows.length ? `<div class="feature-notes">${feature.rows.map(row=>`<div><h4>${Escape(row.heading)}</h4><p>${Escape(row.body)}</p></div>`).join("")}</div>` : ""}`;
    document.querySelectorAll("[data-demo]").forEach(button=>button.setAttribute("aria-pressed",String(button.dataset.demo===Kind)));
  }
  document.querySelectorAll("input[name=size]").forEach(input=>input.addEventListener("change",()=>SetSize(input.value)));
  document.querySelectorAll("[data-demo]").forEach(button=>button.addEventListener("click",()=>RenderDemo(button.dataset.demo)));
  SetSize(selected);RenderDemo("execution");
})();
