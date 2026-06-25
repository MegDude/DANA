# DANA Integrations

## Givebutter

Target: `https://givebutter.com/dana`

Environment/config placeholders:

- `GIVEBUTTER_NEWSLETTER_URL`
- `GIVEBUTTER_MEMBER_URL`
- `GIVEBUTTER_SPONSOR_URL`

Do not hardcode campaign IDs until DANA confirms final campaigns.

## Mailchimp

Recommended email platform for the rebuild.

Required fields:

- Email address
- Optional name
- Source tag such as `website_home`, `website_newsletter`, or `givebutter_sync`
- Consent timestamp

Implementation options:

- Embed Mailchimp form in `newsletter.html`.
- Use a WordPress plugin block if this is ported into WordPress.
- Use a lightweight endpoint only if DANA wants custom validation and tagging.

## EmailOctopus

Current site loads an EmailOctopus frontend stylesheet. Keep as fallback only if DANA does not move to Mailchimp.

## Zapier Givebutter Sync

Recommended sync path:

1. Givebutter member/sponsor transaction.
2. Zapier trigger on new transaction/supporter.
3. Add/update Mailchimp contact.
4. Apply tag: `member`, `sponsor`, `newsletter`, or `event`.
5. Confirm opt-in and unsubscribe handling.

## Events

Current/proposed options:

- Eventbrite currently referenced in project inventory.
- The Events Calendar recommended for WordPress.
- Luma is acceptable for externally managed events.
- Static JSON remains the fallback for this prototype.

## Testing Checklist

- Submit valid email.
- Submit invalid email and confirm accessible error text.
- Confirm Mailchimp contact creation.
- Confirm Givebutter member and sponsor URLs.
- Confirm Zapier tags.
- Confirm unsubscribe link appears in email templates.
- Confirm no third-party embed blocks first contentful paint on mobile.
