# DANA QA Report

Date: 2026-06-25

## Completed Checks

- Static HTML pages created for required routes.
- Shared responsive header and footer implemented.
- Mobile menu uses `aria-expanded` and closes after link selection.
- Newsletter forms include labels, validation, success state, and accessible live status.
- Structured content created in `dana_website/data/`.
- Events are data-driven.
- Issues are data-driven.
- Governance, privacy, accessibility, board, archive, committees, sponsors, and volunteer pages exist.
- No fake phone number, board roster, or campaign ID was introduced.
- JSON validation passed for all files in `dana_website/data/`.
- JavaScript syntax check passed with `node --check dana_website/script.js`.
- Local link audit passed for static HTML files.
- Static preview server was started on port `8080` after sandbox approval.
- Second-pass content QA added homepage sponsor visibility, Association naming, dedicated Public Safety page, collaborative board profiles, and Vercel rewrites.
- Swept for outdated phrases including sole-ownership technical framing, old membership CTA language, and obsolete sponsorship price placeholders.
- Landing-page redesign QA passed on local preview: mobile render at phone width had no horizontal overflow, desktop render had no horizontal overflow, homepage dynamic issue/event sections rendered, and browser console errors were empty.

## Pending Checks

- Browser viewport screenshots at 375, 390, 430, 768, 1024, and 1440.
- Keyboard navigation pass in browser.
- Lighthouse mobile audit.
- WordPress implementation QA after porting into the selected theme/block system.
- Authenticated migration check against old WordPress content, Google Docs, and credential-managed tools.
- Headless Playwright render check could not run because the bundled Playwright package is present but the Chromium browser binary is not installed.

## Known Review Items

- Confirm Association remains final naming direction across all brand assets.
- Palette decision.
- Official contact information.
- Final pricing and Givebutter URLs.
- Mailchimp embed/list URL.
- Privacy and accessibility policy text import.
- Board, bylaws, minutes, and committee content.
