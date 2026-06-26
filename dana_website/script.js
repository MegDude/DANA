const SITE_NAV = `
  <nav class="nav-shell" aria-label="Primary navigation">
    <a class="brand" href="index.html" aria-label="DANA home">
      <span class="brand-mark brand-mark-image" aria-hidden="true"><img src="images/dana-logo-green-white.png" alt="" /></span>
    </a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-menu">
      <span class="sr-only">Open navigation</span>
      <span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>
    </button>
    <div class="nav-panel" id="primary-menu">
      <ul class="nav-list">
        <li><a href="about.html">About</a></li>
        <li><a href="issues.html">Issues</a></li>
        <li><a href="events.html">Events</a></li>
        <li><a href="join.html">Join</a></li>
        <li><a href="newsletter.html">Newsletter</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <a class="button button-primary nav-cta" href="join.html">Join us</a>
    </div>
  </nav>
`;

const SITE_FOOTER = `
  <div class="shell footer-grid">
    <div class="footer-column footer-summary">
      <a class="brand footer-brand" href="index.html" aria-label="DANA home">
        <span class="brand-mark brand-mark-image" aria-hidden="true"><img src="images/dana-logo-green-white.png" alt="" /></span>
      </a>
      <p>Neighbors working together for a downtown that feels good to come home to.</p>
    </div>
    <div class="footer-column">
      <h2>Look Around</h2>
      <a href="about.html">About</a>
      <a href="board.html">Board</a>
      <a href="public-safety.html">Public Safety</a>
      <a href="issues.html">Issues</a>
    </div>
    <div class="footer-column">
      <h2>Connect</h2>
      <a href="join.html">Join DANA</a>
      <a href="newsletter.html">Newsletter</a>
      <a href="sponsors.html">Sponsors</a>
      <a href="governance.html">Bylaws & Minutes</a>
      <a href="privacy.html">Privacy Policy</a>
      <a href="accessibility.html">Accessibility</a>
    </div>
  </div>
  <div class="shell footer-bottom">
    <p>© 2026 Downtown Austin Neighborhood Association.</p>
  </div>
`;

const fallback = {
  issues: [
    {
      id: "public-safety",
      title: "Public Safety",
      summary: "Quieter nights, safer crossings, better lighting, and blocks that feel easier to walk.",
      status: "Now",
      sourceUrl: "public-safety.html"
    },
    {
      id: "transportation-housing",
      title: "Transportation & Housing",
      summary: "Transit, sidewalks, housing choices, and streets that make daily life less frustrating.",
      status: "Watching",
      sourceUrl: "#"
    },
    {
      id: "parks-shoal-creek",
      title: "Parks & Shoal Creek",
      summary: "Cleanups, trails, parks, and green spaces people actually use.",
      status: "Active",
      sourceUrl: "https://www.downtownaustin.org/june-shoal-creek-clean-up/"
    },
    {
      id: "i-35-expansion",
      title: "I-35 Expansion",
      summary: "Air quality, safer routes, and better choices for the highway cutting through downtown.",
      status: "Long View",
      sourceUrl: "#"
    },
    {
      id: "project-connect",
      title: "Project Connect",
      summary: "Light rail plans, station choices, costs, and how transit will change downtown.",
      status: "Transit Watch",
      sourceUrl: "#"
    },
    {
      id: "downtown-vitality",
      title: "Downtown Vitality",
      summary: "More homes, better street life, local businesses, and reasons to know your neighbors.",
      status: "Everyday Life",
      sourceUrl: "https://www.downtownaustin.org/toward-a-more-walkable-austin/"
    }
  ],
  events: [
    {
      id: "june-shoal-creek-clean-up",
      title: "June Shoal Creek Clean-Up",
      date: "2026-06-10",
      startTime: "Community update",
      endTime: "",
      location: "Shoal Creek area",
      description: "A neighborhood cleanup for Shoal Creek and the public spaces around it.",
      category: "Parks",
      rsvpUrl: "https://www.downtownaustin.org/june-shoal-creek-clean-up/",
      featured: true,
      status: "past"
    },
    {
      id: "downtown-safety-forum-may-2026",
      title: "Downtown Safety Forum",
      date: "2026-05-12",
      startTime: "Community forum",
      endTime: "",
      location: "Downtown Austin",
      description: "A resident forum on safety, sound, and what people are seeing on the street.",
      category: "Public Safety",
      rsvpUrl: "https://www.downtownaustin.org/downtown-safety-forum-may-2026/",
      featured: true,
      status: "past"
    },
    {
      id: "next-board-meeting",
      title: "Next Board Meeting",
      date: "2026-08-01",
      startTime: "Board update",
      endTime: "",
      location: "Downtown Austin",
      description: "A board meeting for neighborhood notes, resident questions, and what is next.",
      category: "Governance",
      rsvpUrl: "#",
      featured: true,
      status: "upcoming"
    }
  ],
  membership: [
    {
      id: "join",
      label: "Live Downtown",
      price: "$25-$50",
      copy: "For neighbors who want to meet people, get short notes, and help make downtown easier to live in.",
      cta: "Become a member",
      url: "join.html"
    },
    {
      id: "member",
      label: "Building Membership",
      price: "Building membership",
      copy: "For buildings that want residents to know more people and feel more at home downtown.",
      cta: "Start building membership",
      url: "contact.html"
    },
    {
      id: "sponsor",
      label: "Sponsorship",
      price: "$1,000+",
      copy: "For local partners who want to help downtown feel better for the people who live here.",
      cta: "Help out",
      url: "sponsors.html"
    }
  ]
};

async function getJson(path, key) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Unable to load ${path}`);
    return response.json();
  } catch (error) {
    return fallback[key];
  }
}

function setupChrome() {
  document.querySelectorAll("[data-header]").forEach((header) => {
    if (!header.innerHTML.trim()) header.innerHTML = SITE_NAV;
  });
  document.querySelectorAll("footer.site-footer").forEach((footer) => {
    if (!footer.innerHTML.trim()) footer.innerHTML = SITE_FOOTER;
  });

  const toggle = document.querySelector(".nav-toggle");
  const panel = document.querySelector(".nav-panel");
  if (!toggle || !panel) return;

  toggle.addEventListener("click", () => {
    const isOpen = panel.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      panel.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function renderIssues(issues) {
  const targets = [
    [document.querySelector("[data-issues-preview]"), issues.slice(0, 6)],
    [document.querySelector("[data-issues-all]"), issues]
  ];

  targets.forEach(([target, list]) => {
    if (!target) return;
    target.innerHTML = list
      .map(
        (issue) => `
          <article class="issue-card" id="${issue.id}">
            ${issue.status ? `<span class="status-pill">${issue.status}</span>` : ""}
            <h3>${issue.title}</h3>
            <p>${issue.summary}</p>
            ${issue.sourceUrl && issue.sourceUrl !== "#" ? `<a href="${issue.sourceUrl}">${issue.sourceUrl.endsWith(".html") ? "Read the issue" : "See the background"}</a>` : ""}
          </article>
        `
      )
      .join("");
  });
}

function dateParts(dateString) {
  const date = new Date(`${dateString}T12:00:00`);
  if (Number.isNaN(date.getTime())) return { day: "--", month: "" };
  return {
    day: new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(date),
    month: new Intl.DateTimeFormat("en-US", { month: "short" }).format(date)
  };
}

function eventCard(event) {
  const date = dateParts(event.date);
  const meta = [event.startTime, event.location].filter(Boolean).join(" · ");
  return `
    <article class="event-card" data-status="${event.status}">
      <div class="event-date"><strong>${date.day}</strong><span>${date.month}</span></div>
      <div>
        <span class="status-pill">${event.category}</span>
        <h3>${event.title}</h3>
        ${meta ? `<p class="event-meta">${meta}</p>` : ""}
        <p>${event.description}</p>
        <a href="${event.rsvpUrl || "#"}">Take a look</a>
      </div>
    </article>
  `;
}

function renderEvents(events) {
  const preview = document.querySelector("[data-events-preview]");
  const all = document.querySelector("[data-events-all]");
  const upcoming = events.filter((event) => event.status === "upcoming");

  if (preview) preview.innerHTML = (upcoming.length ? upcoming : events.slice(0, 3)).map(eventCard).join("");
  if (all) all.innerHTML = events.map(eventCard).join("");

  document.querySelectorAll("[data-event-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-event-filter]").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      const filter = button.dataset.eventFilter;
      document.querySelectorAll("[data-events-all] .event-card").forEach((card) => {
        card.hidden = filter !== "all" && card.dataset.status !== filter;
      });
    });
  });
}

function renderMembership(items) {
  const target = document.querySelector("[data-membership]");
  if (!target) return;
  target.innerHTML = items
    .map(
      (item) => `
        <article class="membership-card" id="${item.id}">
          <span>${item.price}</span>
          <h3>${item.label}</h3>
          <p>${item.copy}</p>
          <a class="button button-primary" href="${item.url}">${item.cta}</a>
        </article>
      `
    )
    .join("");
}

function renderArchive() {
  const target = document.querySelector("[data-archive]");
  if (!target) return;
  target.innerHTML = `
    <article><h2>Past Notes</h2><p>Older posts and records live here while the main site stays centered on what neighbors need now.</p></article>
    <article><h2>Worth Keeping</h2><p>Meeting records, bylaws, public letters, and helpful explainers should stay easy to find.</p></article>
    <article><h2>Worth Moving</h2><p>Good issue notes can move into issue pages so neighbors do not have to search through old posts.</p></article>
    <article><h2>Ready To Retire</h2><p>Old announcements can come down when they no longer help explain what happened.</p></article>
  `;
}

function setupForms() {
  document.querySelectorAll("[data-signup]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = form.querySelector('input[type="email"]');
      const status = form.querySelector(".form-status");
      if (!email.value || !email.checkValidity()) {
        status.textContent = "Add a valid email and try again.";
        email.focus();
        return;
      }
      status.textContent = "Thanks. You're on the list.";
      form.reset();
    });
  });
}

function setupHeroParallax() {
  const hero = document.querySelector(".hero");
  if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let ticking = false;
  const update = () => {
    const rect = hero.getBoundingClientRect();
    const offset = Math.max(-48, Math.min(48, rect.top * -0.08));
    hero.style.setProperty("--hero-parallax", `${offset}px`);
    ticking = false;
  };

  update();
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );
}

function setupSponsorShowcase() {
  const tabs = document.querySelector("[data-sponsor-tabs]");
  const details = document.querySelector("[data-sponsor-details]");
  if (!tabs || !details) return;

  const buttons = Array.from(tabs.querySelectorAll("[data-sponsor]"));
  const panels = Array.from(details.querySelectorAll("[data-sponsor-panel]"));

  const activate = (id) => {
    buttons.forEach((button) => {
      const isActive = button.dataset.sponsor === id;
      button.setAttribute("aria-selected", String(isActive));
      button.classList.toggle("is-active", isActive);
      if (isActive) button.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.sponsorPanel === id;
      panel.hidden = !isActive;
      panel.classList.toggle("is-active", isActive);
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => activate(button.dataset.sponsor));
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  setupChrome();
  setupHeroParallax();
  setupSponsorShowcase();
  const [issues, events, membership] = await Promise.all([
    getJson("data/issues.json", "issues"),
    getJson("data/events.json", "events"),
    getJson("data/site.json", "membership").then((data) => data.membership || fallback.membership)
  ]);
  renderIssues(issues);
  renderEvents(events);
  renderMembership(membership);
  renderArchive();
  setupForms();
});
