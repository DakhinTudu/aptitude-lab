/**
 * Lab UX — learning path rail + mobile continue + light progress chip.
 * Additive: works with existing topic pages without rewriting them.
 */
(function () {
  const LABEL_RULES = [
    { re: /understand|discover|build the tree|see the|watch the|family tree|row, as a line|balance beam|slots:|walk the path|dataset|two curves|price waterfall|shared timeline|base change/i, label: "Understand" },
    { re: /play:|step through|mini-lab|possibility|either\/or|replace one|circular|pole vs|walked path|linear row|successive|partial|direct vs|compounding|frequency|gender|facing|exclusion|spatial|than.anchor|caselet|conversion lab|relative speed/i, label: "Play" },
    { re: /predict first/i, label: "Predict" },
    { re: /^practice$|practice\b/i, label: "Practice" },
    { re: /exam shortcuts|speed card|exam speed/i, label: "Shortcuts" },
    { re: /formula|rules that|general rule|pattern signatures|when may you/i, label: "Rule" }
  ];

  function topicIdFromPath() {
    const m = location.pathname.match(/([^/]+)\.html$/i);
    return m ? m[1] : "topic";
  }

  function smartSlice(text, max) {
    const t = String(text || "").trim();
    if (t.length <= max) return t;
    const cut = t.slice(0, max);
    const sp = cut.lastIndexOf(" ");
    return ((sp > max * 0.5 ? cut.slice(0, sp) : cut).replace(/[—–\-:]+$/, "") || cut).trim();
  }

  function sectionLabel(section, index) {
    const custom = (section.getAttribute("data-lab-label") || "").trim();
    if (custom) return custom;
    const h = section.querySelector("h2");
    const raw = (h && h.textContent || "").trim();
    for (const rule of LABEL_RULES) {
      if (rule.re.test(raw)) return rule.label;
    }
    if (index === 0) return "Understand";
    return smartSlice(raw.split(/[—–-]/)[0].trim(), 22) || ("Step " + (index + 1));
  }

  function ensureSectionIds(sections) {
    sections.forEach((sec, i) => {
      if (!sec.id) sec.id = "lab-sec-" + (i + 1);
    });
  }

  function readProgress() {
    const id = topicIdFromPath();
    try {
      const raw = localStorage.getItem("lab_progress_" + id);
      if (!raw) return null;
      const s = JSON.parse(raw);
      if (!s || typeof s.attempts !== "number") return null;
      const acc = s.attempts ? Math.round((s.correct || 0) / s.attempts * 100) : 0;
      return { attempts: s.attempts, correct: s.correct || 0, acc };
    } catch (_) {
      return null;
    }
  }

  function buildPath(sections) {
    if (!sections.length) return;
    ensureSectionIds(sections);

    const path = document.createElement("nav");
    path.className = "lab-path";
    path.setAttribute("aria-label", "Learning path");

    const inner = document.createElement("div");
    inner.className = "lab-path-inner";

    const used = {};
    sections.forEach((sec, i) => {
      if (i > 0) {
        const sep = document.createElement("span");
        sep.className = "lab-path-sep";
        sep.textContent = "→";
        sep.setAttribute("aria-hidden", "true");
        inner.appendChild(sep);
      }
      let label = sectionLabel(sec, i);
      used[label] = (used[label] || 0) + 1;
      if (used[label] > 1 && label !== "Play" && label !== "Understand") {
        label = label + " " + used[label];
      } else if (used[label] > 1) {
        label = label + " " + used[label];
      }

      const a = document.createElement("a");
      a.className = "lab-path-step";
      a.href = "#" + sec.id;
      a.dataset.target = sec.id;
      a.innerHTML = '<span class="lab-path-num">' + (i + 1) + "</span><span>" + label + "</span>";
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const el = document.getElementById(sec.id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        el.classList.remove("lab-section-flash");
        void el.offsetWidth;
        el.classList.add("lab-section-flash");
        history.replaceState(null, "", "#" + sec.id);
      });
      inner.appendChild(a);
    });

    const prog = readProgress();
    if (prog && prog.attempts > 0) {
      const chip = document.createElement("div");
      chip.className = "lab-progress-chip";
      chip.innerHTML = "Practice <strong>" + prog.correct + "/" + prog.attempts + "</strong> · " + prog.acc + "%";
      chip.title = "Local practice stats for this topic";
      inner.appendChild(chip);
    }

    path.appendChild(inner);

    const main = document.getElementById("main-content") || document.querySelector("main");
    if (!main) return;
    const headerCard = main.querySelector(":scope > header.card");
    if (headerCard && headerCard.nextSibling) {
      main.insertBefore(path, headerCard.nextSibling);
    } else {
      main.insertBefore(path, main.firstChild);
    }

    // Mark first lab card
    if (sections[0]) sections[0].classList.add("lab-hero");

    return path;
  }

  function watchCurrent(sections) {
    const links = Array.from(document.querySelectorAll(".lab-path-step"));
    if (!links.length || !("IntersectionObserver" in window)) {
      if (links[0]) links[0].setAttribute("aria-current", "step");
      return;
    }
    const map = new Map(sections.map((s) => [s.id, s]));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const id = visible.target.id;
        links.forEach((l) => {
          if (l.dataset.target === id) l.setAttribute("aria-current", "step");
          else l.removeAttribute("aria-current");
        });
        updateContinue(sections, id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );
    sections.forEach((s) => io.observe(s));
  }

  function buildContinue(sections) {
    const bar = document.createElement("div");
    bar.className = "lab-continue";
    bar.innerHTML =
      '<div class="lab-continue-inner">' +
      '<div class="lab-continue-label"><strong id="lab-continue-title">Continue</strong><span id="lab-continue-sub">Next section</span></div>' +
      '<button type="button" class="btn btn-primary" id="lab-continue-btn">Next →</button>' +
      "</div>";
    document.body.appendChild(bar);
    const btn = bar.querySelector("#lab-continue-btn");
    btn.addEventListener("click", () => {
      const cur = document.querySelector('.lab-path-step[aria-current="step"]');
      const idx = sections.findIndex((s) => s.id === (cur && cur.dataset.target));
      const next = sections[Math.min(sections.length - 1, Math.max(0, idx) + 1)] || sections[0];
      if (!next) return;
      next.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    updateContinue(sections, sections[0] && sections[0].id);
  }

  function updateContinue(sections, currentId) {
    const title = document.getElementById("lab-continue-title");
    const sub = document.getElementById("lab-continue-sub");
    const btn = document.getElementById("lab-continue-btn");
    if (!title || !btn) return;
    const idx = sections.findIndex((s) => s.id === currentId);
    const next = sections[idx + 1];
    if (!next) {
      title.textContent = "You're at Practice";
      sub.textContent = "Solve without hints when ready";
      btn.textContent = "Back to top";
      btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const label = sectionLabel(next, idx + 1);
    title.textContent = "Next: " + label;
    sub.textContent = (next.querySelector("h2") || {}).textContent || "";
    btn.textContent = "Continue →";
    btn.onclick = () => next.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function init() {
    const main = document.getElementById("main-content") || document.querySelector("main");
    if (!main) return;
    const sections = Array.from(main.querySelectorAll(":scope > section.card"));
    if (sections.length < 2) return;
    buildPath(sections);
    watchCurrent(sections);
    buildContinue(sections);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
