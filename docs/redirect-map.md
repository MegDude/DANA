# DANA Redirect Map

Use `301` redirects for durable content moves after URLs are final. Use `302` only during staging.

| Old URL | New URL | Type | Notes |
| --- | --- | --- | --- |
| `https://www.downtownaustin.org/` | `/` | 301 | New homepage. |
| `https://www.downtownaustin.org/calendar/` | `/events` | 301 | Calendar becomes event list/calendar page. |
| `https://www.downtownaustin.org/june-shoal-creek-clean-up/` | `/events` | 301 | Also link from `/issues#parks-shoal-creek`. |
| `https://www.downtownaustin.org/downtown-safety-forum-may-2026/` | `/public-safety` | 301 | Keep event archive reference. |
| `https://www.downtownaustin.org/toward-a-more-walkable-austin/` | `/issues#transportation-homes` | 301 | Candidate evergreen issue content. |
| `https://www.downtownaustin.org/dana-2026-board-nominations/` | `/board` | 301 | Confirm before launch. |
| Legacy blog posts marked retire | `/archive` or `410` | 301/410 | Use `410` only for intentionally retired posts with no resident value. |
