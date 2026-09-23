(() => {
  const site = window.SITE;
  const main = document.getElementById("main");
  const nav = document.getElementById("topnav");
  const esc = (s = "") => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const tint = u => `var(--${u.tint || "lilac"})`;
  const canEmbedPdf = navigator.pdfViewerEnabled !== false;

  document.title = site.title;
  document.getElementById("brand").textContent = site.title;
  document.getElementById("footer").textContent = `${site.title}, ${site.term}. ${site.student}`;
  nav.innerHTML = site.units.map((u, i) => `<a href="#/unit/${u.id}">${i + 1}. ${esc(u.title)}</a>`).join("");

  function heroPlot() {
    const L = 150, eps = 24, pts = [];
    let firstIn = null;
    for (let n = 1; n <= 16; n++) {
      const x = 40 + n * 28, y = L + (n % 2 ? -1 : 1) * 118 / n;
      const inside = Math.abs(y - L) < eps;
      if (inside && firstIn === null) firstIn = x;
      pts.push(`<circle class="pt${inside ? " in" : ""}" cx="${x}" cy="${y.toFixed(1)}" r="6" style="animation-delay:${n * 90}ms"/>`);
    }
    return `
      <figure class="plot" style="margin:0">
        <svg viewBox="0 0 520 300" role="img" aria-label="A sequence converging to L, eventually staying inside an epsilon band">
          <rect class="band" x="30" y="${L - eps}" width="480" height="${eps * 2}" rx="8"/>
          <line class="axis" x1="30" y1="280" x2="510" y2="280"/>
          <line class="limit" x1="30" y1="${L}" x2="510" y2="${L}"/>
          <line class="axis" x1="${firstIn - 14}" y1="40" x2="${firstIn - 14}" y2="280" stroke-dasharray="3 5"/>
          ${pts.join("")}
          <text x="488" y="${L - 8}">L</text>
          <text x="462" y="${L - eps - 8}">ε band</text>
          <text x="${firstIn - 22}" y="274">N</text>
        </svg>
        <figcaption>After some N, every term stays within ε of L.</figcaption>
      </figure>`;
  }

  function home() {
    const pins = site.units.map((u, i) => {
      const photos = u.notes.filter(n => n.type === "photo").length;
      const texts = u.notes.length - photos;
      const counts = [
        u.pdfs.length && `${u.pdfs.length} PDF${u.pdfs.length > 1 ? "s" : ""}`,
        photos && `${photos} photo${photos > 1 ? "s" : ""}`,
        texts && `${texts} note${texts > 1 ? "s" : ""}`
      ].filter(Boolean).join(", ");
      return `
        <a class="pin" href="#/unit/${u.id}" style="--tint:${tint(u)}">
          ${u.cover ? `<img src="${esc(u.cover)}" alt="" loading="lazy">` : ""}
          <div class="body">
            <div class="num">Unit ${i + 1}</div>
            <h3>${esc(u.title)}</h3>
            <p>${esc(u.summary)}</p>
            <ul class="tags">${(u.topics || []).map(t => `<li>${esc(t)}</li>`).join("")}</ul>
            <div class="counts">${counts || "Nothing added yet"}</div>
          </div>
        </a>`;
    }).join("");

    main.innerHTML = `
      <section class="hero">
        <div>
          <h1>${esc(site.title)}</h1>
          <p class="sub">${esc(site.subtitle)}</p>
          <p class="about">${esc(site.about)}</p>
          <ul class="meta">
            <li>${esc(site.student)}</li>
            <li>with ${esc(site.professor)}</li>
            <li>${esc(site.term)}</li>
          </ul>
        </div>
        ${heroPlot()}
      </section>
      <div class="board-head"><h2>Units</h2><span>${site.units.length} units</span></div>
      <div class="board">${pins}</div>`;
    setActive(null);
  }

  function unitPage(id) {
    const i = site.units.findIndex(u => u.id === id);
    if (i < 0) return home();
    const u = site.units[i];
    const prev = site.units[i - 1], next = site.units[i + 1];

    const docs = u.pdfs.length ? `
      <div class="docs">
        <ul class="doc-list" role="tablist" aria-label="Documents">
          ${u.pdfs.map((p, k) => `
            <li><button role="tab" data-k="${k}" aria-selected="${k === 0}">
              ${esc(p.title)}${p.note ? `<small>${esc(p.note)}</small>` : ""}
            </button></li>`).join("")}
        </ul>
        <div class="viewer" id="viewer"></div>
      </div>` : `<div class="empty">No PDFs yet. Put files in <code>assets/</code> and list them under <code>pdfs</code> for this unit in <code>content.js</code>.</div>`;

    let photoIndex = 0;
    const notes = u.notes.length ? `<div class="wall">${u.notes.map(n => {
      const date = n.date ? `<span class="date">${esc(n.date)}</span>` : "";
      if (n.type === "photo") {
        return `<figure class="note">
          <button class="photo" data-photo="${photoIndex++}" aria-label="Enlarge: ${esc(n.caption || "photo")}">
            <img src="${esc(n.src)}" alt="${esc(n.caption || "")}" loading="lazy">
          </button>
          ${n.caption || date ? `<figcaption>${date}${esc(n.caption || "")}</figcaption>` : ""}
        </figure>`;
      }
      if (n.type === "pdf") {
        return `<div class="note pdf-note"><a href="${esc(n.src)}" target="_blank" rel="noopener">
          ${date}<span class="icon">PDF</span> ${esc(n.caption || "Scanned notes")}</a></div>`;
      }
      return `<div class="note text-note" style="--tint:${tint(u)}"><div class="text">
        ${date}${n.title ? `<h4>${esc(n.title)}</h4>` : ""}<p>${esc(n.body)}</p></div></div>`;
    }).join("")}</div>` : `<div class="empty">No notes yet. Add whiteboard photos or typed notes under <code>notes</code> for this unit in <code>content.js</code>.</div>`;

    main.innerHTML = `
      <section class="unit-hero" style="--tint:${tint(u)}">
        <div class="big-num" aria-hidden="true">${i + 1}</div>
        <h1>${esc(u.title)}</h1>
        <p>${esc(u.summary)}</p>
        <ul class="tags">${(u.topics || []).map(t => `<li>${esc(t)}</li>`).join("")}</ul>
      </section>
      <h2 class="section-title">Work</h2>
      ${docs}
      <h2 class="section-title">Scratch notes and whiteboards</h2>
      ${notes}
      <nav class="pager" aria-label="Other units">
        ${prev ? `<a href="#/unit/${prev.id}"><small>Previous</small>${esc(prev.title)}</a>` : "<span></span>"}
        ${next ? `<a href="#/unit/${next.id}"><small>Next</small>${esc(next.title)}</a>` : "<span></span>"}
      </nav>`;

    if (u.pdfs.length) {
      const tabs = main.querySelectorAll('[role="tab"]');
      const show = k => {
        const p = u.pdfs[k];
        tabs.forEach(t => t.setAttribute("aria-selected", t.dataset.k == k));
        document.getElementById("viewer").innerHTML = `
          <div class="viewer-bar"><strong>${esc(p.title)}</strong>
            <a href="${esc(p.file)}" target="_blank" rel="noopener">Open in new tab</a></div>
          ${canEmbedPdf
            ? `<iframe src="${esc(p.file)}#view=FitH" title="${esc(p.title)}"></iframe>`
            : `<div class="empty" style="margin:1rem">This browser can't show PDFs inline. Use "Open in new tab" above.</div>`}`;
      };
      tabs.forEach(t => t.addEventListener("click", () => show(+t.dataset.k)));
      show(0);
    }

    const photos = u.notes.filter(n => n.type === "photo");
    main.querySelectorAll("[data-photo]").forEach(b =>
      b.addEventListener("click", () => openLightbox(photos, +b.dataset.photo)));

    if (window.renderMathInElement) {
      renderMathInElement(main, {
        delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }],
        throwOnError: false
      });
    }
    setActive(u.id);
  }

  function setActive(id) {
    nav.querySelectorAll("a").forEach(a =>
      a.getAttribute("href") === `#/unit/${id}` ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"));
  }

  const lb = document.getElementById("lightbox");
  const lbImg = lb.querySelector("img"), lbCap = lb.querySelector("figcaption");
  let lbList = [], lbAt = 0;
  function openLightbox(list, at) { lbList = list; lbAt = at; drawLightbox(); lb.showModal(); }
  function drawLightbox() {
    const p = lbList[lbAt];
    lbImg.src = p.src; lbImg.alt = p.caption || "";
    lbCap.textContent = [p.date, p.caption].filter(Boolean).join(": ");
    lb.querySelectorAll(".lb-nav").forEach(b => b.hidden = lbList.length < 2);
  }
  const step = d => { lbAt = (lbAt + d + lbList.length) % lbList.length; drawLightbox(); };
  lb.querySelector(".lb-close").onclick = () => lb.close();
  lb.querySelector(".lb-prev").onclick = () => step(-1);
  lb.querySelector(".lb-next").onclick = () => step(1);
  lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
  lb.addEventListener("keydown", e => { if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); });

  function route() {
    const m = location.hash.match(/^#\/unit\/(.+)$/);
    m ? unitPage(decodeURIComponent(m[1])) : home();
    window.scrollTo(0, 0);
    if (m) main.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", route);
  route();
})();
