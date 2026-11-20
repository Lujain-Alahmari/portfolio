
const sections = {
  about: {
    title: "about_me.txt",
    html: `
      <span class="meta">01 / A LITTLE INTRODUCTION</span>
      <h2>Hi, I'm <em>Lujain.</em> ✦</h2>
      <p>I'm a Computer Science graduate from King Khalid University and an AI Engineering Bootcamp alumna at Olo Academy, in collaboration with MCIT. I'm interested in building useful, accessible AI applications—especially multilingual information retrieval, NLP, and retrieval-augmented generation.</p>
      <p>My earlier work in IT support taught me how to approach technical problems with patience, clarity, and a focus on real users. Today, I bring that same mindset to AI engineering.</p>
      <hr class="section-rule"/>
      <span class="meta">EDUCATION</span>
      <div class="resume-line"><div class="resume-date">May 2023</div><h3>B.Sc. in Computer Science</h3><p>King Khalid University · GPA 4.73 / 5.00 · Second Class Honors</p></div>
      <div class="resume-line"><div class="resume-date">Sep 13 — Nov 5, 2026</div><h3>AI Engineering Bootcamp (AIEP)</h3><p>Olo Academy × Ministry of Communications and Information Technology · Machine Learning, Deep Learning, NLP and LLM Applications</p></div>`
  },
  projects: {
    title: "projects_explorer.exe",
    html: `
      <span class="meta">02 / SELECTED PROJECTS</span>
      <h2>Things I've <em>built.</em> ✦</h2>
      <p>A few projects where research, code, and practical problem-solving meet.</p>
      <div class="detail-grid">
        <article class="detail-card">
          <span class="meta">FEATURED · AI / NLP</span><h3>01. Daleel ✦</h3>
          <p>A bilingual privacy-information assistant exploring retrieval and RAG for source-backed questions. Prepared 180 Arabic/English knowledge-base records, compared keyword, dense, hybrid and reranked search, and built a Streamlit interface.</p>
          <div class="tag-row"><span class="tag">RAG</span><span class="tag">NLP</span><span class="tag">FAISS</span><span class="tag">Streamlit</span></div>
          <a href="https://github.com/Lujain-Alahmari/Daleel" target="_blank" rel="noopener noreferrer">VIEW GITHUB ↗</a>
        </article>
        <article class="detail-card">
          <span class="meta">GRADUATION PROJECT · A+</span><h3>02. Tadarab</h3>
          <p>An Android training-management application connecting students, training advisors, academic advisors, and administrators. Includes training listings, application tracking, form exchange and messaging.</p>
          <div class="tag-row"><span class="tag">Java</span><span class="tag">Android SDK</span><span class="tag">XML</span><span class="tag">Volley</span></div>
          <a href="https://github.com/Lujain-Alahmari/Tadarab" target="_blank" rel="noopener noreferrer">VIEW GITHUB ↗</a>
        </article>
        <article class="detail-card">
          <span class="meta">MACHINE LEARNING · PRACTICE</span><h3>03. Student Performance Predictor</h3>
          <p>A small regression project modeling the relationship between study hours and predicted performance, built with Python and scikit-learn.</p>
          <div class="tag-row"><span class="tag">Python</span><span class="tag">scikit-learn</span><span class="tag">Regression</span></div>
          <a href="https://github.com/Lujain-Alahmari" target="_blank" rel="noopener noreferrer">EXPLORE PROFILE ↗</a>
        </article>
        <article class="detail-card">
          <span class="meta">MORE EXPLORATIONS</span><h3>04. Learning Lab</h3>
          <p>Experiments across computer vision, sentiment analysis, transfer learning, segmentation and GANs during my AI engineering learning journey.</p>
          <div class="tag-row"><span class="tag">PyTorch</span><span class="tag">Computer Vision</span><span class="tag">Deep Learning</span></div>
          <a href="https://github.com/Lujain-Alahmari" target="_blank" rel="noopener noreferrer">SEE MORE ON GITHUB ↗</a>
        </article>
      </div>`
  },
  experience: {
    title: "experience.doc",
    html: `
      <span class="meta">03 / MY JOURNEY</span>
      <h2>Work & <em>learning.</em></h2>
      <div class="resume-line"><div class="resume-date">JAN 2024 — JUL 2024</div><h3>Computer Engineer Trainee (Tamheer)</h3><p><strong>Ministry of Transport and Logistics</strong><br/>Configured employee computers, installed and updated software and operating systems, solved network problems, and coordinated with approved hardware vendors.</p></div>
      <div class="resume-line"><div class="resume-date">MAY 2022 — AUG 2022</div><h3>IT Support Trainee</h3><p><strong>King Khalid University</strong><br/>Provided on-site and remote technical support, prepared staff computers and software, and supported university computer laboratories.</p></div>
      <hr class="section-rule"/><span class="meta">SELECTED TRAINING</span>
      <div class="resume-line"><div class="resume-date">2026</div><h3>AI Engineering Bootcamp · Olo Academy</h3><p>Training in Python, ML, deep learning, NLP and LLM applications.</p></div>
      <hr class="section-rule"/><span class="meta">GOOGLE CLOUD · AI & CLOUD KINGDOM TOUR</span>
      <div class="resume-line"><div class="resume-date">JUL 08, 2026</div><h3>Kickstart Your Journey with ML using GCP</h3><p>Google Cloud · Certificate of attendance · Issued Aug 16, 2026</p></div>
      <div class="resume-line"><div class="resume-date">JUL 07, 2026</div><h3>Implementing Local On-Device AI with Gemma 4</h3><p>Google Cloud · Certificate of attendance · Issued Aug 13, 2026</p></div>
      <div class="resume-line"><div class="resume-date">JUL 06, 2026</div><h3>Extending AI Agents with Custom Web Tools</h3><p>Google Cloud · Certificate of attendance · Issued Aug 13, 2026</p></div>
      <div class="resume-line"><div class="resume-date">JUL 05, 2026</div><h3>Offline Cross-Platform AI with Gemma</h3><p>Google Cloud · Certificate of attendance · Issued Aug 12, 2026</p></div>
      <div class="resume-line"><div class="resume-date">2024 / 2021</div><h3>Data Analysis · STC–IBM / TensorFlow on Google Cloud · Qwiklabs</h3></div>
      <p><a href="https://lnkd.in/p/exBfus4Q" target="_blank" rel="noopener noreferrer">View Google Cloud workshop certificates ↗</a></p>`
  },
  skills: {
    title: "skills.ini",
    html: `
      <span class="meta">04 / TOOLBOX</span>
      <h2>Skills & <em>curiosities.</em></h2>
      <p>Tools and subjects I have worked with in projects, coursework and technical training.</p>
      <div class="detail-grid">
       <article class="detail-card"><span class="meta">PROGRAMMING</span><h3>Languages</h3><div class="tag-row"><span class="tag">Python</span><span class="tag">SQL</span><span class="tag">Java</span></div></article>
       <article class="detail-card"><span class="meta">ARTIFICIAL INTELLIGENCE</span><h3>NLP & Retrieval</h3><div class="tag-row"><span class="tag">RAG</span><span class="tag">BM25</span><span class="tag">Multilingual Embeddings</span><span class="tag">Hybrid Search</span><span class="tag">Reranking</span></div></article>
       <article class="detail-card"><span class="meta">DEVELOPMENT</span><h3>Tools</h3><div class="tag-row"><span class="tag">FAISS</span><span class="tag">Streamlit</span><span class="tag">GitHub</span><span class="tag">PyTorch</span><span class="tag">scikit-learn</span></div></article>
       <article class="detail-card"><span class="meta">IT FOUNDATIONS</span><h3>Support & Systems</h3><div class="tag-row"><span class="tag">Troubleshooting</span><span class="tag">Software Setup</span><span class="tag">System Updates</span><span class="tag">Network Support</span></div></article>
      </div>`
  },
  contact: {
    title: "send_a_message.eml",
    html: `
      <span class="meta">05 / LET'S CONNECT</span>
      <h2>Say <em>hello!</em> ✦</h2>
      <p>Have a role, an idea, or a project you'd like to discuss? I'd love to hear about it.</p>
      <a class="contact-link" href="mailto:alahmari1lujain@gmail.com">✉ &nbsp; alahmari1lujain@gmail.com ↗</a>
      <a class="contact-link" href="tel:+966501694824">☎ &nbsp; +966 50 169 4824 ↗</a>
      <a class="contact-link" href="https://www.linkedin.com/in/lujain-mesfer-155773254/" target="_blank" rel="noopener noreferrer">↗ &nbsp; LinkedIn / lujain-mesfer</a>
      <a class="contact-link" href="https://github.com/Lujain-Alahmari" target="_blank" rel="noopener noreferrer">⌘ &nbsp; GitHub / Lujain-Alahmari</a>
      <p class="smallprint">Based in Abha, Saudi Arabia · Open to opportunities</p>`
  }
};
const layer = document.querySelector("#window-layer");
const template = document.querySelector("#window-template");
const windows = new Map();
let highestZ = 100;
let offset = 0;

function activate(win) { win.style.zIndex = ++highestZ; }

function attachControls(win, id, persistent = false) {
  const close = win.querySelector(".close-window");
  const minimize = win.querySelector(".minimize-window");
  const dismiss = () => {
    if (win.classList.contains("is-closing")) return;
    win.classList.add("is-closing");
    const finish = () => {
      if (persistent) { win.hidden = true; win.classList.remove("is-closing"); }
      else { win.remove(); windows.delete(id); }
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) finish();
    else setTimeout(finish, 230);
  };
  close?.addEventListener("click", dismiss);
  minimize?.addEventListener("click", dismiss);
  win.addEventListener("pointerdown", () => activate(win));

  // Drag windows by their title bars with mouse, touch, or pen.
  const bar = win.querySelector(".window-titlebar");
  if (!bar) return;
  bar.addEventListener("pointerdown", e => {
    if (e.target.closest("button") || e.button !== 0) return;
    e.preventDefault();
    activate(win);
    const initialX = e.clientX, initialY = e.clientY;
    const startX = Number(win.dataset.dragX || 0);
    const startY = Number(win.dataset.dragY || 0);
    bar.setPointerCapture(e.pointerId);
    const moving = ev => {
      if (ev.pointerId !== e.pointerId) return;
      const dx = startX + ev.clientX - initialX;
      const dy = startY + ev.clientY - initialY;
      win.dataset.dragX = String(dx);
      win.dataset.dragY = String(dy);
      if (persistent) {
        win.style.setProperty("--offset-x", dx + "px");
        win.style.setProperty("--offset-y", dy + "px");
      } else {
        win.style.setProperty("--dx", dx + "px");
        win.style.setProperty("--dy", dy + "px");
      }
    };
    const end = ev => {
      if (ev.pointerId !== e.pointerId) return;
      bar.removeEventListener("pointermove", moving);
      bar.removeEventListener("pointerup", end);
      bar.removeEventListener("pointercancel", end);
    };
    bar.addEventListener("pointermove", moving);
    bar.addEventListener("pointerup", end);
    bar.addEventListener("pointercancel", end);
  });
}

function openWindow(id) {
  if (!sections[id]) return;
  const existing = windows.get(id);
  if (existing?.isConnected) {
    activate(existing);
    existing.classList.remove("window-focus");
    void existing.offsetWidth;
    existing.classList.add("window-focus");
    return;
  }
  const win = template.content.firstElementChild.cloneNode(true);
  win.querySelector(".detail-title").textContent = "✦ " + sections[id].title;
  win.querySelector(".detail-body").innerHTML = sections[id].html;
  win.setAttribute("aria-label", sections[id].title);
  // Stagger multiple windows in desktop view.
  const shift = (offset++ % 4) * 22;
  win.style.setProperty("--dx", shift + "px");
  win.style.setProperty("--dy", shift + "px");
  win.dataset.dragX = String(shift); win.dataset.dragY = String(shift);
  layer.append(win);
  windows.set(id, win);
  attachControls(win, id);
  activate(win);
  win.querySelector(".close-window")?.focus();
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    win.querySelectorAll(".detail-card, .resume-line, .contact-link").forEach((element, index) => {
      element.style.setProperty("--item-order", Math.min(index, 8));
      element.classList.add("stagger-item");
    });
  }
}

document.querySelectorAll("[data-open]").forEach(button => {
  button.addEventListener("click", () => openWindow(button.dataset.open));
});
document.querySelectorAll(".desktop-icon").forEach(button => {
  button.addEventListener("dblclick", () => openWindow(button.dataset.open));
});
document.querySelectorAll(".desktop-window").forEach((win, index) => {
  attachControls(win, "persistent-" + index, true);
  win.querySelector(".window-titlebar")?.addEventListener("dblclick", () => { win.hidden = true; });
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    const open = [...windows.values()].filter(w => w.isConnected);
    if (open.length) {
      const win = open.sort((a,b) => Number(b.style.zIndex) - Number(a.style.zIndex))[0];
      win.querySelector(".close-window").click();
    }
  }
});
document.getElementById("year").textContent = String(new Date().getFullYear());
const clock = document.getElementById("clock");
if (clock) {
  // Uses the visitor's device clock and local time zone, not a fixed Riyadh time.
  const updateClock = () => {
    clock.textContent = "✦ " + new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    });
  };
  updateClock();
  // Check every second so the display stays in sync when the minute changes.
  setInterval(updateClock, 1000);
  // Refresh promptly when returning to a tab that was asleep.
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) updateClock();
  });
}

// Soft scroll reveal for the editorial page and the retro desktop.
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const appearObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        appearObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".intro-copy, .intro-art, .desktop-header, .desktop, .bottom-note")
    .forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", (index % 2) * 100 + "ms");
      appearObserver.observe(element);
    });
}

// A small star trail when navigating; no libraries, no canvas.
const sparkles = document.createElement("div");
sparkles.className = "navigation-sparkles";
sparkles.setAttribute("aria-hidden", "true");
document.body.append(sparkles);
function sparkleAt(target) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const rect = target.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + Math.min(rect.height / 2, 60);
  for (let i = 0; i < 5; i++) {
    const star = document.createElement("span");
    star.textContent = ["✦", "✧", "⋆"][i % 3];
    star.className = "nav-spark";
    star.style.left = x + "px";
    star.style.top = y + "px";
    star.style.setProperty("--star-x", (Math.cos(i * Math.PI * 2 / 5) * 36) + "px");
    star.style.setProperty("--star-y", (Math.sin(i * Math.PI * 2 / 5) * 28) + "px");
    sparkles.append(star);
    setTimeout(() => star.remove(), 680);
  }
}
document.querySelectorAll("[data-open]").forEach(el => {
  el.addEventListener("click", () => sparkleAt(el));
});
