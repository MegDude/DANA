# DANA Content Migration Audit

Date: 2026-06-25

## Source Inventory

- Current site: `https://www.downtownaustin.org/`
- WordPress admin: `https://www.downtownaustin.org/wp-admin`
- Current site identifies itself in Open Graph metadata as `Downtown Austin Neighborhood Association`.
- Earlier rebuild brief used `Downtown Austin Neighborhood Alliance`; this prototype now uses `Association` because the current WordPress source and supplied leadership copy use Association.
- Public WordPress REST API header reports `X-WP-Total: 295` posts.
- Project note reports approximately `461` old blog posts, with about 80% to retire.
- Public WordPress REST API exposes only 4 pages via `/wp-json/wp/v2/pages?per_page=100`.

## Pages Ingested

| Source | Destination | Status | Notes |
| --- | --- | --- | --- |
| `/` | `/` | rewrite | Rebuilt as mobile-first homepage with hero, issue preview, event preview, 3-bucket router, newsletter, and footer. |
| `/calendar/` | `/events` | rewrite | Moved into structured event data. |
| `/june-shoal-creek-clean-up/` | `/events`, `/issues#parks-shoal-creek` | migrate | Recent parks/public-space signal. |
| `/downtown-safety-forum-may-2026/` | `/events`, `/issues#public-safety` | migrate | Public safety issue/event content. |
| `/toward-a-more-walkable-austin/` | `/issues#transportation-homes` | migrate | Transportation/walkability source. |
| `/dana-letter-c20-2024-018-ddbp-updates-2026-05-14/` | `/issues#downtown-vitality` | migrate | Advocacy content candidate. |

## Content Retained

- DANA acronym and downtown Austin resident focus.
- Current WordPress source site and admin path.
- EmailOctopus presence as current email plugin.
- WordPress/Bluehost context.
- Recent post titles related to Shoal Creek, safety forums, DDBP updates, annual meeting, board nominations, and walkability.

## Content Rewritten

- Homepage structure and copy rewritten for clarity and mobile-first hierarchy.
- Issue cards rewritten into short resident-facing summaries.
- Event cards converted to structured JSON.
- Membership flow rewritten around resident membership, building membership, partner support, and newsletter signup.

## Content Archived

- Canceled 2026 annual meeting stays in past event archive, not homepage promotion.
- Time-sensitive cleanup and safety forum posts should move to event archive after their dates.
- Older blog posts should be classified into evergreen, archive, or retire.

## Content Needing DANA Review

- Confirm Association remains final naming direction across all brand assets.
- Olive/chartreuse brand book palette vs navy/gold/teal dana-child palette.
- Board roster and leadership titles.
- Bylaws and minutes links.
- Official email, social channels, and mailing address.
- Final payment and partner-support URLs.
- Final newsletter audience/signup URL.
- Final membership and sponsorship pricing.
- Privacy Policy approved text.
- WCAG 2.1 AA accessibility statement approved text.
- Reconcile `295` public API posts with `461` posts in project notes.

## Broken Links / Risky Links Found

- Current homepage contains legacy WordPress/Joomla-era assets and plugins.
- Public REST API page inventory appears incomplete for expected static pages.
- Google Doc and Sheets sources require authenticated access and should be imported by an authorized DANA user.
- Temporary `#` links in the prototype mark routes that still need final board-approved URLs, bylaws, minutes, and RSVP destinations.

## Recommended Redirects

See `docs/redirect-map.md`.
