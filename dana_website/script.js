const SITE_NAV = `
  <nav class="nav-shell" aria-label="Primary navigation">
    <button class="brand nav-toggle nav-logo-toggle" type="button" aria-expanded="false" aria-controls="primary-menu">
      <span class="sr-only">Open navigation</span>
      <span class="brand-mark brand-mark-image" aria-hidden="true">
        <img src="images/dana-green-filled-white-transparent-highres.png" alt="" />
      </span>
    </button>
    <div class="nav-panel" id="primary-menu">
      <ul class="nav-list">
        <li><a href="about.html">Learn</a></li>
        <li><a href="issues.html">Issues</a></li>
        <li><a href="events.html">Events</a></li>
        <li><a href="join.html">Join</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <a class="button button-primary nav-cta" href="contact.html">Raise an Issue</a>
    </div>
  </nav>
`;

const SITE_FOOTER = `
  <div class="shell footer-layout">
    <div class="footer-brand-block">
      <a class="footer-brand" href="index.html" aria-label="Downtown Austin Neighborhood Association home">
        <span class="footer-logo-mark" aria-hidden="true">
          <img src="images/dana-green-filled-white-transparent-highres.png" alt="">
        </span>
        <span class="footer-brand-text">
          <strong>Downtown Austin Neighborhood Association</strong>
          <span class="footer-brand-copy">Helping downtown Austin residents stay informed, connected, and involved in the neighborhood they call home.</span>
        </span>
      </a>
    </div>

    <nav class="footer-nav" aria-label="Footer navigation">
      <div class="footer-column">
        <h2>Explore</h2>
        <a href="about.html">About DANA</a>
        <a href="board.html">Board</a>
        <a href="issues.html">Issues</a>
        <a href="public-safety.html">Public Safety</a>
        <a href="events.html">Events</a>
      </div>

      <div class="footer-column">
        <h2>Participate</h2>
        <a href="join.html">Join DANA</a>
        <a href="newsletter.html">Newsletter</a>
        <a href="sponsors.html">Community Partners</a>
        <a href="contact.html">Contact</a>
      </div>

      <div class="footer-column">
        <h2>Records</h2>
        <a href="governance.html">Bylaws &amp; Minutes</a>
        <a href="privacy.html">Privacy Policy</a>
      </div>
    </nav>
  </div>

  <div class="shell footer-bottom">
    <p>© 2026 Downtown Austin Neighborhood Association.</p>
    <span>Resident-led. Downtown-focused.</span>
  </div>
`;

const fallback = {
  issues: [
    {
      id: "public-safety",
      title: "Public Safety & Quality of Life",
      summary: "Helping downtown feel safer, quieter, better lit, and easier to enjoy.",
      status: "Recently Updated",
      sourceUrl: "public-safety.html"
    },
    {
      id: "transportation-housing",
      title: "Housing & Development",
      summary: "New homes, new buildings, and planning conversations that shape how downtown grows.",
      status: "In Planning",
      sourceUrl: "issues.html"
    },
    {
      id: "parks-shoal-creek",
      title: "Parks & Public Spaces",
      summary: "Parks, trails, trees, plazas, and open spaces where people want to spend time.",
      status: "Community Project",
      sourceUrl: "https://www.downtownaustin.org/june-shoal-creek-clean-up/"
    },
    {
      id: "i-35-expansion",
      title: "I-35",
      summary: "Construction, traffic changes, air quality, and how the reconstruction may affect downtown residents.",
      status: "Long-Term Project",
      sourceUrl: "issues.html"
    },
    {
      id: "project-connect",
      title: "Project Connect",
      summary: "Austin's future transit network, including downtown station planning, timelines, and resident impact.",
      status: "City Project",
      sourceUrl: "issues.html"
    },
    {
      id: "downtown-vitality",
      title: "Downtown's Future",
      summary: "Homes, local businesses, walkable streets, public life, and events that make downtown feel like a neighborhood.",
      status: "Community Conversation",
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
      rsvpUrl: "events.html",
      featured: true,
      status: "upcoming"
    }
  ],
  membership: [
    {
      id: "join",
      label: "Resident Membership",
      price: "For downtown residents",
      copy: "For neighbors who want to meet people, receive useful updates, and support DANA's work.",
      cta: "Become a member",
      url: "join.html"
    },
    {
      id: "member",
      label: "Building Membership",
      price: "For residential buildings",
      copy: "For buildings that want residents to know about DANA, attend events, and feel more connected downtown.",
      cta: "Bring DANA to your building",
      url: "contact.html"
    },
    {
      id: "sponsor",
      label: "Community Partner",
      price: "For businesses and organizations",
      copy: "For local partners who want to support resident events, outreach, and neighborhood advocacy.",
      cta: "Support DANA",
      url: "sponsors.html"
    }
  ]
};

async function getJson(path, key) {
  if (window.location.protocol === "file:") return fallback[key];

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

const editorialIssueCovers = [
  {
    id: "sound-quality-of-life",
    label: "Active Issue",
    title: "Sound & Quality of Life",
    copy: "Reasonable standards for residents and venues. From late-night noise to outdoor events, DANA works toward a downtown people can enjoy and live in comfortably.",
    cta: "Explore Issue",
    href: "public-safety.html",
    icon: "sound"
  },
  {
    id: "housing-growth",
    label: "Long-Term Planning",
    title: "Housing & Growth",
    copy: "More homes, thoughtful urban design, and balanced development help create a downtown people can actually live in, not simply visit.",
    cta: "Read Background",
    href: "https://www.downtownaustin.org/toward-a-more-walkable-austin/",
    icon: "housing"
  },
  {
    id: "parks-public-spaces",
    label: "Community Priority",
    title: "Parks & Public Spaces",
    copy: "Parks, trails, trees, plazas, and cared-for open spaces shape how downtown feels when people spend real time here.",
    cta: "See Current Projects",
    href: "https://www.downtownaustin.org/june-shoal-creek-clean-up/",
    icon: "parks"
  },
  {
    id: "i-35-transformation",
    label: "Major Project",
    title: "I-35 Transformation",
    copy: "Construction, mobility, air quality, and reconnecting neighborhoods all matter. Residents deserve to understand what changes mean before they happen.",
    cta: "Follow Project",
    href: "issues.html",
    icon: "highway"
  },
  {
    id: "project-connect",
    label: "Infrastructure",
    title: "Project Connect",
    copy: "Transit planning will reshape how residents move through downtown. DANA follows station planning, timelines, and chances to participate.",
    cta: "View Updates",
    href: "issues.html",
    icon: "transit"
  },
  {
    id: "downtown-future",
    label: "Community Vision",
    title: "Downtown's Future",
    copy: "Housing, parks, public spaces, local business, and community life all work together to create a stronger downtown neighborhood.",
    cta: "Join Conversation",
    href: "https://www.downtownaustin.org/dana-letter-c20-2024-018-ddbp-updates-2026-05-14/",
    icon: "future"
  }
];

function issueCoverIcon(type) {
  const paths = {
    sound: `
      <path d="M7 38h50" /><path d="M12 38V26l8-6 8 6v12" /><path d="M28 38V18l9-6 9 6v20" />
      <path d="M47 38V25l6-4 5 4v13" /><path d="M14 14c5-5 13-5 18 0" /><path d="M10 9c8-8 20-8 28 0" />
    `,
    streets: `
      <path d="M32 10v44" /><path d="M18 54l9-44" /><path d="M46 54l-9-44" />
      <path d="M14 34h36" /><path d="M17 42h30" /><path d="M22 18h20" />
      <path d="M51 16h7v18" /><path d="M50 16c0-4 2-7 5-7s5 3 5 7" />
    `,
    housing: `
      <path d="M10 54h44" /><path d="M16 54V18h15v36" /><path d="M31 54V10h18v44" />
      <path d="M21 25h5M21 34h5M21 43h5" /><path d="M37 18h6M37 27h6M37 36h6M37 45h6" />
    `,
    parks: `
      <path d="M10 54h44" /><path d="M18 54c3-8 8-13 14-16s12-8 14-16" />
      <path d="M31 54V25" /><path d="M22 28c0-7 5-13 10-17 5 4 10 10 10 17 0 6-4 10-10 10s-10-4-10-10Z" />
      <path d="M15 42c7-3 13-3 20 0s12 3 17 0" />
    `,
    transit: `
      <path d="M17 13h30c4 0 7 3 7 7v19c0 4-3 7-7 7H17c-4 0-7-3-7-7V20c0-4 3-7 7-7Z" />
      <path d="M17 23h30" /><path d="M20 46l-6 8M44 46l6 8" /><path d="M22 36h.1M42 36h.1" /><path d="M18 54h28" />
    `,
    highway: `
      <path d="M12 54c8-12 13-26 15-44" /><path d="M52 54C44 42 39 28 37 10" />
      <path d="M32 16v8M32 32v8M32 48v6" /><path d="M13 30h38" /><path d="M18 21c5-4 9-4 14 0s9 4 14 0" />
    `,
    future: `
      <path d="M8 54h48" /><path d="M13 54V31l7-5 7 5v23" /><path d="M28 54V18h12v36" />
      <path d="M41 54V29h10v25" /><path d="M12 22c7-6 14-6 21 0s13 6 19 0" /><path d="M19 45c5-5 11-5 16 0s10 5 14 0" />
    `
  };

  return `
    <svg class="issue-shelf-icon" viewBox="0 0 64 64" aria-hidden="true">
      ${paths[type] || paths.future}
    </svg>
  `;
}

function renderIssueShelfCard(issue) {
  return `
    <article class="issue-shelf-card" id="${issue.id}">
      <div class="issue-shelf-topline">
        <span>${issue.label}</span>
        ${issueCoverIcon(issue.icon)}
      </div>
      <h3>${issue.title}</h3>
      <p>${issue.copy}</p>
      <a href="${issue.href}">${issue.cta} <span aria-hidden="true">↗</span></a>
    </article>
  `;
}

function renderIssues(issues) {
  const targets = [
    [document.querySelector("[data-issues-preview]"), issues.slice(0, 6)],
    [document.querySelector("[data-issues-all]"), issues]
  ];

  targets.forEach(([target, list]) => {
    if (!target) return;
    if (target.matches("[data-issues-preview]")) {
      target.className = "issue-grid";
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
      return;
    }
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

function setupIssueShelf() {
  document.querySelectorAll(".issue-shelf").forEach((shelf) => {
    const track = shelf.querySelector(".issue-shelf-track");
    const prev = shelf.querySelector("[data-issue-scroll-prev]");
    const next = shelf.querySelector("[data-issue-scroll-next]");
    const progress = shelf.querySelector("[data-issue-progress]");
    const count = shelf.querySelector("[data-issue-count]");
    if (!track || !prev || !next || !progress) return;
    const cards = Array.from(track.querySelectorAll(".issue-shelf-card"));
    if (!cards.length) return;

    const update = () => {
      const max = Math.max(track.scrollWidth - track.clientWidth, 1);
      const ratio = track.scrollLeft / max;
      const card = cards[0];
      const gap = parseFloat(getComputedStyle(track).columnGap || "0");
      const amount = card ? card.getBoundingClientRect().width + gap : track.clientWidth;
      const current = Math.min(cards.length - 1, Math.max(0, Math.round(track.scrollLeft / Math.max(amount, 1))));
      progress.style.setProperty("transform", `scaleX(${Math.max(0.12, ratio || 0.12)})`, "important");
      if (count) count.textContent = `${String(current + 1).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`;
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max - 2;
    };

    const scrollByCard = (direction) => {
      const card = cards[0];
      const gap = parseFloat(getComputedStyle(track).columnGap || "0");
      const amount = card ? card.getBoundingClientRect().width + gap : track.clientWidth * 0.85;
      track.scrollBy({ left: amount * direction, behavior: "smooth" });
      window.setTimeout(update, 360);
      window.setTimeout(update, 720);
    };

    prev.addEventListener("click", () => scrollByCard(-1));
    next.addEventListener("click", () => scrollByCard(1));
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  });
}

function initStartHereStack() {
  const root = document.querySelector("[data-start-carousel]");
  if (!root) return;

  const cards = Array.from(root.querySelectorAll("[data-start-card]"));
  const prev = root.querySelector("[data-start-prev]");
  const next = root.querySelector("[data-start-next]");
  const dots = Array.from(root.querySelectorAll("[data-start-dot]"));
  if (!cards.length || !prev || !next) return;

  let active = 0;

  const render = () => {
    cards.forEach((card, index) => {
      const position = (index - active + cards.length) % cards.length;
      card.dataset.stackPosition = String(position);
      card.classList.toggle("is-active", position === 0);
      card.tabIndex = position === 0 ? 0 : -1;
      card.setAttribute("aria-current", position === 0 ? "true" : "false");
      card.removeAttribute("aria-hidden");
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("is-active", index === active);
      dot.setAttribute("aria-current", index === active ? "true" : "false");
    });
  };

  const go = (direction) => {
    active = (active + direction + cards.length) % cards.length;
    render();
  };

  prev.addEventListener("click", () => go(-1));
  next.addEventListener("click", () => go(1));

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      active = index;
      render();
    });
  });

  cards.forEach((card, index) => {
    card.addEventListener("click", (event) => {
      if (index === active) return;
      event.preventDefault();
      active = index;
      render();
    });
  });

  root.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") go(1);
    if (event.key === "ArrowLeft") go(-1);
  });

  render();
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
      <div class="event-card-copy">
        <span class="status-pill">${event.category}</span>
        <h3>${event.title}</h3>
        ${meta ? `<p class="event-meta">${meta}</p>` : ""}
        <p>${event.description}</p>
        <a href="${event.rsvpUrl || "events.html"}">View details</a>
      </div>
    </article>
  `;
}

function eventRow(event) {
  const date = dateParts(event.date);
  const meta = [event.startTime, event.location].filter(Boolean).join(" · ");
  const href = event.rsvpUrl || "events.html";
  return `
    <article class="event-card event-row js-reveal is-revealed" data-status="${event.status}" data-date="${event.date}" tabindex="0">
      <a class="event-row-link" href="${href}" aria-label="View details for ${event.title}">
        <div class="event-date"><strong>${date.day}</strong><span>${date.month}</span></div>
        <div class="event-card-copy">
          <div class="event-row-topline">
            <span class="status-pill">${event.category}</span>
            ${meta ? `<p class="event-meta">${meta}</p>` : ""}
          </div>
          <h3>${event.title}</h3>
          <p>${event.description}</p>
          <span class="event-link">View details <span aria-hidden="true">↗</span></span>
        </div>
      </a>
    </article>
  `;
}

function renderEvents(events) {
  const preview = document.querySelector("[data-events-preview]");
  const all = document.querySelector("[data-events-all]");
  const upcoming = events.filter((event) => event.status === "upcoming");

  if (preview) preview.innerHTML = (upcoming.length ? upcoming : events.slice(0, 3)).map(eventCard).join("");
  if (all) all.innerHTML = events.map(eventRow).join("");
  setupEventTimeline();
}

function setupEventTimeline() {
  const eventButtons = document.querySelectorAll("[data-event-filter]");
  const eventRows = document.querySelectorAll("[data-events-all] .event-card");
  const calendarToggle = document.querySelector("[data-calendar-toggle]");
  const calendarPanel = document.querySelector("[data-calendar-panel]");
  const calendarGrid = document.querySelector("[data-calendar-grid]");
  const calendarTitle = document.querySelector("[data-calendar-title]");
  const calendarPrev = document.querySelector("[data-calendar-prev]");
  const calendarNext = document.querySelector("[data-calendar-next]");

  if (!eventRows.length) return;

  const eventItems = Array.from(eventRows).map((row) => {
    const title = row.querySelector("h3")?.textContent?.trim() || "";
    const href = row.querySelector("a")?.getAttribute("href") || "#";
    const status = row.dataset.status || "all";
    const date = row.dataset.date || "";
    return { row, title, href, status, date };
  });

  const setEventFilter = (filter, shouldScroll = true) => {
    eventButtons.forEach((button) => {
      const isActive = button.dataset.eventFilter === filter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    eventItems.forEach((event) => {
      const shouldShow = filter === "all" || event.status === filter;
      event.row.hidden = !shouldShow;
    });

    if (!shouldScroll) return;
    const firstVisible = eventItems.find((event) => !event.row.hidden);
    firstVisible?.row.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  eventButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.classList.contains("is-active")));
    button.addEventListener("click", () => setEventFilter(button.dataset.eventFilter));
  });

  let activeMonth = new Date(2026, 7, 1);

  const renderCalendar = () => {
    if (!calendarGrid || !calendarTitle) return;

    const year = activeMonth.getFullYear();
    const month = activeMonth.getMonth();
    calendarTitle.textContent = activeMonth.toLocaleString("en-US", { month: "long", year: "numeric" });
    calendarGrid.innerHTML = "";

    const startOffset = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < startOffset; i += 1) {
      const empty = document.createElement("div");
      empty.className = "event-calendar-day is-empty";
      calendarGrid.appendChild(empty);
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const dayEvents = eventItems.filter((event) => event.date === dateString);
      const cell = document.createElement("div");
      cell.className = `event-calendar-day${dayEvents.length ? " has-event" : ""}`;
      cell.innerHTML = `<strong>${day}</strong>`;

      dayEvents.forEach((event) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = event.title;
        button.addEventListener("click", () => {
          event.row.hidden = false;
          event.row.scrollIntoView({ behavior: "smooth", block: "center" });
          event.row.focus?.();
        });
        cell.appendChild(button);
      });

      calendarGrid.appendChild(cell);
    }
  };

  calendarToggle?.addEventListener("click", () => {
    if (!calendarPanel) return;
    const isHidden = calendarPanel.hasAttribute("hidden");
    calendarPanel.toggleAttribute("hidden", !isHidden);
    calendarToggle.classList.toggle("is-active", isHidden);
    calendarToggle.textContent = isHidden ? "List view" : "Calendar view";
    calendarToggle.setAttribute("aria-expanded", String(isHidden));
    if (isHidden) renderCalendar();
  });

  calendarPrev?.addEventListener("click", () => {
    activeMonth = new Date(activeMonth.getFullYear(), activeMonth.getMonth() - 1, 1);
    renderCalendar();
  });

  calendarNext?.addEventListener("click", () => {
    activeMonth = new Date(activeMonth.getFullYear(), activeMonth.getMonth() + 1, 1);
    renderCalendar();
  });

  calendarToggle?.setAttribute("aria-expanded", "false");
  setEventFilter("upcoming", false);
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

function setupEditorialReveals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

  const items = Array.from(
    document.querySelectorAll(
      [
        ".section > .shell",
        ".issue-shelf-card",
        ".event-card",
        ".story-feature",
        ".story-list article",
        ".journal-side-list article",
        ".partner-pathways article",
        ".join-action-card"
      ].join(",")
    )
  );

  if (!items.length) return;

  items.forEach((item) => item.classList.add("js-reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach((item) => observer.observe(item));
}

function setupDanaWhatPillarMorph() {
  const pillars = document.querySelector(".dana-what-pillars--morph");
  if (!pillars) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    pillars.classList.add("is-morphed");
    return;
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      pillars.classList.add("is-morphed");
      observer.disconnect();
    },
    { threshold: 0.3 }
  );

  observer.observe(pillars);
}

function setupDanaWhatCarousel() {
  document.querySelectorAll("[data-dana-what-carousel]").forEach((carousel) => {
    const track = carousel.querySelector(".dana-what-pillars--carousel");
    const cards = Array.from(track?.querySelectorAll("article") || []);
    const prev = carousel.querySelector("[data-dana-what-prev]");
    const next = carousel.querySelector("[data-dana-what-next]");
    const mediaVideo = carousel.querySelector(".dana-what-media video");
    const mediaSource = mediaVideo?.querySelector("source");
    if (!track || !cards.length) return;

    let index = 0;

    const visibleCount = () => (window.matchMedia("(min-width: 1120px)").matches ? cards.length : 1);

    const maxIndex = () => Math.max(0, cards.length - visibleCount());

    const updateCarousel = () => {
      index = Math.min(index, maxIndex());
      if (maxIndex() === 0) index = 0;
      const gap = parseFloat(window.getComputedStyle(track).gap || "0");
      const cardWidth = cards[0].getBoundingClientRect().width;
      const step = cardWidth + gap;

      track.style.transform = maxIndex() === 0 ? "none" : `translateX(${-index * step}px)`;
      cards.forEach((card, cardIndex) => {
        card.classList.toggle("is-active", cardIndex === index);
      });

      const activeCard = cards[index];
      const nextVideo = activeCard?.dataset.video;
      const nextPoster = activeCard?.dataset.poster;
      if (mediaVideo && mediaSource && nextVideo && !mediaSource.src.endsWith(nextVideo)) {
        mediaVideo.classList.add("is-switching");
        mediaSource.src = nextVideo;
        mediaVideo.poster = nextPoster || "";
        mediaVideo.load();
        const playPromise = mediaVideo.play();
        if (playPromise) playPromise.catch(() => {});
        window.setTimeout(() => mediaVideo.classList.remove("is-switching"), 220);
      } else if (mediaVideo && nextPoster) {
        mediaVideo.poster = nextPoster;
      }

      if (prev) prev.disabled = index === 0;
      if (next) next.disabled = index === maxIndex();
    };

    prev?.addEventListener("click", () => {
      index = Math.max(0, index - 1);
      updateCarousel();
    });

    next?.addEventListener("click", () => {
      index = Math.min(maxIndex(), index + 1);
      updateCarousel();
    });

    window.addEventListener("resize", updateCarousel);
    updateCarousel();
  });
}

function setupPartnerPathwaysCarousel() {
  document.querySelectorAll("[data-partner-carousel]").forEach((carousel) => {
    const track = carousel.querySelector(".partner-carousel-track");
    const cards = Array.from(carousel.querySelectorAll("[data-partner-card]"));
    const prev = carousel.querySelector("[data-partner-prev]");
    const next = carousel.querySelector("[data-partner-next]");
    const dots = Array.from(carousel.querySelectorAll("[data-partner-dot]"));
    if (!track || !cards.length) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let index = 0;

    const setActive = (nextIndex) => {
      index = (nextIndex + cards.length) % cards.length;
      const firstCard = cards[0].getBoundingClientRect();
      const gap = parseFloat(window.getComputedStyle(track).gap || "0");
      const step = firstCard.width + gap;
      track.style.transform = `translateX(${-index * step}px)`;
      track.style.transitionDuration = reduceMotion ? "0ms" : "";

      cards.forEach((card, cardIndex) => {
        const isActive = cardIndex === index;
        const link = card.querySelector("a");
        card.classList.toggle("is-active", isActive);
        card.setAttribute("aria-hidden", String(!isActive));
        if (link) link.tabIndex = isActive ? 0 : -1;
      });

      dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === index;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-current", isActive ? "true" : "false");
      });
    };

    prev?.addEventListener("click", () => setActive(index - 1));
    next?.addEventListener("click", () => setActive(index + 1));

    dots.forEach((dot, dotIndex) => {
      dot.addEventListener("click", () => setActive(dotIndex));
    });

    carousel.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      setActive(index + (event.key === "ArrowRight" ? 1 : -1));
    });

    window.addEventListener("resize", () => setActive(index));
    carousel.tabIndex = 0;
    setActive(0);
  });
}

function setupSponsorShowcase() {
  const tabs = document.querySelector("[data-sponsor-tabs]");
  const details = document.querySelector("[data-sponsor-details]");
  if (!tabs || !details) return;

  const buttons = Array.from(tabs.querySelectorAll("[data-sponsor]"));
  const panels = Array.from(details.querySelectorAll("[data-sponsor-panel]"));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let activeIndex = Math.max(0, buttons.findIndex((button) => button.getAttribute("aria-selected") === "true"));
  let timer = null;

  const activate = (id) => {
    buttons.forEach((button) => {
      const isActive = button.dataset.sponsor === id;
      button.setAttribute("aria-selected", String(isActive));
      button.classList.toggle("is-active", isActive);
      if (isActive) {
        activeIndex = buttons.indexOf(button);
        button.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", inline: "center", block: "nearest" });
      }
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.sponsorPanel === id;
      panel.hidden = !isActive;
      panel.classList.toggle("is-active", isActive);
    });
  };

  const stopAuto = () => {
    if (timer) window.clearInterval(timer);
    timer = null;
  };

  const startAuto = () => {
    if (reduceMotion || timer || buttons.length < 2) return;
    timer = window.setInterval(() => {
      activeIndex = (activeIndex + 1) % buttons.length;
      activate(buttons[activeIndex].dataset.sponsor);
    }, 4200);
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      stopAuto();
      activate(button.dataset.sponsor);
      startAuto();
    });
  });

  [tabs, details].forEach((element) => {
    element.addEventListener("mouseenter", stopAuto);
    element.addEventListener("mouseleave", startAuto);
    element.addEventListener("focusin", stopAuto);
    element.addEventListener("focusout", startAuto);
  });

  startAuto();
}

function initJournalStoryRail() {
  const rail = document.querySelector("[data-journal-rail]");
  if (!rail) return;

  const track = rail.querySelector(".journal-story-track");
  const prev = rail.querySelector("[data-journal-prev]");
  const next = rail.querySelector("[data-journal-next]");
  const progress = rail.querySelector("[data-journal-progress]");
  const cards = Array.from(rail.querySelectorAll(".journal-story-card"));
  if (!track || !cards.length) return;

  const updateProgress = () => {
    if (!progress) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const ratio = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
    const base = 1 / cards.length;
    const width = base + ratio * (1 - base);
    progress.style.setProperty("width", `${width * 100}%`, "important");
  };

  const scrollByCard = (direction) => {
    const card = cards[0];
    const gap = parseFloat(window.getComputedStyle(track).columnGap || "0");
    const amount = card.getBoundingClientRect().width + gap;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    track.scrollBy({
      left: direction * amount,
      behavior: reduceMotion ? "auto" : "smooth"
    });
  };

  prev?.addEventListener("click", () => scrollByCard(-1));
  next?.addEventListener("click", () => scrollByCard(1));
  track.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();
}

function setupDanaOrbit() {
  const orbit = document.querySelector(".dana-orbit");
  if (!orbit) return;

  const content = {
    advocacy: {
      eyebrow: "Resident Advocacy",
      title: "Helping residents follow city decisions.",
      copy: "We track the public meetings, city proposals, and planning choices that affect downtown life, then help neighbors speak clearly when it matters."
    },
    events: {
      eyebrow: "Community Events",
      title: "Simple ways to meet the people nearby.",
      copy: "Happy hours, meetings, volunteer projects, and neighborhood gatherings give residents an easy way to show up and feel connected."
    },
    issues: {
      eyebrow: "Neighborhood Issues",
      title: "The everyday things that shape downtown life.",
      copy: "Safety, sound, mobility, housing, parks, and public spaces all matter because they affect how downtown feels when you live here."
    },
    governance: {
      eyebrow: "Open Governance",
      title: "The official pieces, easy to find.",
      copy: "Board information, bylaws, minutes, committees, and member records stay close at hand so residents do not have to dig."
    }
  };

  const panel = orbit.querySelector(".dana-orbit-panel");
  const buttons = Array.from(orbit.querySelectorAll("[data-orbit-tab]"));

  const activate = (id) => {
    const item = content[id];
    if (!item || !panel) return;

    buttons.forEach((button) => {
      const isActive = button.dataset.orbitTab === id;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    panel.innerHTML = `
      <p class="eyebrow">${item.eyebrow}</p>
      <h3>${item.title}</h3>
      <p>${item.copy}</p>
    `;
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => activate(button.dataset.orbitTab));
  });
}

function setupCivicCardSystem() {
  const cards = Array.from(document.querySelectorAll("[data-civic-card]"));
  if (!cards.length) return;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const startX = [-180, 0, 180];
  const startY = [80, -50, 80];
  const startRotate = [-7, 4, 7];

  cards.forEach((card, index) => {
    card.style.setProperty("--civic-card-x", prefersReducedMotion ? "0px" : `${startX[index] || 0}px`);
    card.style.setProperty("--civic-card-y", prefersReducedMotion ? "0px" : `${startY[index] || 0}px`);
    card.style.setProperty("--civic-card-rotate", prefersReducedMotion ? "0deg" : `${startRotate[index] || 0}deg`);
    if (prefersReducedMotion) card.classList.add("is-visible");
  });

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    cards.forEach((card) => {
      card.style.setProperty("--civic-card-x", "0px");
      card.style.setProperty("--civic-card-y", "0px");
      card.style.setProperty("--civic-card-rotate", "0deg");
      card.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.style.setProperty("--civic-card-x", "0px");
        entry.target.style.setProperty("--civic-card-y", "0px");
        entry.target.style.setProperty("--civic-card-rotate", "0deg");
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
  );

  cards.forEach((card) => observer.observe(card));
}

document.addEventListener("DOMContentLoaded", async () => {
  setupChrome();
  setupHeroParallax();
  setupSponsorShowcase();
  initJournalStoryRail();
  setupDanaOrbit();
  setupCivicCardSystem();
  setupDanaWhatPillarMorph();
  setupDanaWhatCarousel();
  setupPartnerPathwaysCarousel();
  initStartHereStack();
  const [issues, events, membership] = await Promise.all([
    getJson("data/issues.json", "issues"),
    getJson("data/events.json", "events"),
    getJson("data/site.json", "membership").then((data) => data.membership || fallback.membership)
  ]);
  renderIssues(issues);
  setupIssueShelf();
  renderEvents(events);
  renderMembership(membership);
  renderArchive();
  setupForms();
  setupEditorialReveals();
});
