# DANA Website Rebuild

Static prototype for the DANA mobile-first redesign and content migration plan.

## Purpose

This build reframes the current `downtownaustin.org` WordPress site around resident clarity: hero, issue priorities, events, Join / Member / Sponsorship routing, newsletter signup, governance access, and archive strategy.

## Local Preview

```bash
cd dana_website
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Content Editing Guide

- Site/config and membership paths: `dana_website/data/site.json`
- Issues: `dana_website/data/issues.json`
- Events: `dana_website/data/events.json`
- Source inventory: `dana_website/data/pages.json`
- Migration notes: `docs/content-migration-audit.md`

## Deployment Guide

The project brief says to maintain WordPress on Bluehost. Use this prototype as the front-end and content model, then port sections into the chosen WordPress theme or block system.

For static preview hosting, deploy `dana_website/` as the site root.

## Integration Placeholders

- `GIVEBUTTER_MEMBER_URL`
- `GIVEBUTTER_SPONSOR_URL`
- `MAILCHIMP_SIGNUP_URL`

See `docs/integrations.md`.

## Known Review Items

- Resolve Association vs Alliance.
- Resolve olive/chartreuse vs navy/gold/teal.
- Import approved Privacy Policy and WCAG 2.1 AA accessibility statement.
- Verify board, bylaws, minutes, official email, social links, and campaign URLs.
- Reconcile the public API count of 295 posts with the project note of 461 old posts.
