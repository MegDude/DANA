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
      <a class="button button-primary nav-cta" href="join.html">Join DANA</a>
    </div>
  </nav>
`;

const SITE_FOOTER = `
  <div class="shell footer-grid">
    <div class="footer-column footer-summary">
      <a class="brand footer-brand" href="index.html" aria-label="DANA home">
        <span class="brand-mark brand-mark-image" aria-hidden="true"><img src="images/dana-logo-green-white.png" alt="" /></span>
      </a>
      <p>Neighbors working together for a safer, more welcoming downtown Austin.</p>
    </div>
    <div class="footer-column">
      <h2>Explore</h2>
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
      summary: "Sound standards, safer streets, high-rise security, and compassionate public-space solutions.",
      status: "Evergreen",
      sourceUrl: "public-safety.html"
    },
    {
      id: "transportation-homes",
      title: "Transportation / HOMES",
      summary: "Transit access, HOMES discussion, active transportation, and street experience.",
      status: "In progress",
      sourceUrl: "#"
    },
    {
      id: "parks-shoal-creek",
      title: "Parks & Shoal Creek",
      summary: "Monthly Shoal Creek cleanups and downtown public-space stewardship.",
      status: "Active",
      sourceUrl: "https://www.downtownaustin.org/june-shoal-creek-clean-up/"
    },
    {
      id: "i-35-expansion",
      title: "I-35 Expansion",
      summary: "Historic advocacy around air quality, active transportation, and no-build alternatives.",
      status: "Long-range",
      sourceUrl: "#"
    },
    {
      id: "project-connect",
      title: "Project Connect",
      summary: "Orange Line, Blue Line, cost context, and transit tunnel benefits.",
      status: "Transit",
      sourceUrl: "#"
    },
    {
      id: "downtown-vitality",
      title: "Downtown Vitality",
      summary: "Development, walkability, events, resident experience, and neighborhood identity.",
      status: "Ongoing",
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
      description: "A neighborhood cleanup supporting Shoal Creek and nearby public spaces.",
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
      description: "A resident forum focused on public safety, sound, and street-level concerns.",
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
      description: "A board meeting for neighborhood updates, resident questions, and current work.",
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
      copy: "For residents who want to meet neighbors, attend social events, and support downtown advocacy.",
      cta: "Join DANA",
      url: "join.html"
    },
    {
      id: "member",
      label: "Building Membership",
      price: "Building membership",
      copy: "For HOAs and high-rises that want to provide DANA benefits to all their residents.",
      cta: "Start building membership",
      url: "contact.html"
    },
    {
      id: "sponsor",
      label: "Sponsorship",
      price: "$1,000+",
      copy: "For local businesses and partners who want to support DANA's mission and gain visibility.",
      cta: "Sponsor DANA",
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
            ${issue.sourceUrl && issue.sourceUrl !== "#" ? `<a href="${issue.sourceUrl}">${issue.sourceUrl.endsWith(".html") ? "Read more" : "Learn more"}</a>` : ""}
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
        <a href="${event.rsvpUrl || "#"}">View details</a>
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
    <article><h2>Blog archive</h2><p>Public WordPress API exposes 295 posts as of 2026-06-25. Project notes reference 461 old blog posts; reconcile during authenticated migration.</p></article>
    <article><h2>Retire</h2><p>Approximately 80% of old posts should be retired if they are time-sensitive, duplicated, or no longer useful.</p></article>
    <article><h2>Migrate</h2><p>Evergreen advocacy, governance, safety, transportation, parks, and sponsor materials should move into structured pages.</p></article>
    <article><h2>Preserve</h2><p>Legal, bylaws, meeting minutes, and historically important materials should remain accessible and grouped by year.</p></article>
  `;
}

function setupForms() {
  document.querySelectorAll("[data-signup]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = form.querySelector('input[type="email"]');
      const status = form.querySelector(".form-status");
      if (!email.value || !email.checkValidity()) {
        status.textContent = "Enter a valid email address.";
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

document.addEventListener("DOMContentLoaded", async () => {
  setupChrome();
  setupHeroParallax();
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
