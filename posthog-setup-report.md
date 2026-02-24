<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the **DevEvent** Next.js App Router application. Here is a summary of all changes made:

- **`instrumentation-client.ts`** (new) — Initialises PostHog on the client side using the Next.js 15.3+ `instrumentation-client.ts` pattern. Configures a reverse-proxy ingestion host (`/ingest`), enables automatic exception capture, and activates debug mode in development.
- **`next.config.ts`** (updated) — Added PostHog reverse-proxy rewrites (`/ingest/static/*` and `/ingest/*`) plus `skipTrailingSlashRedirect: true` to correctly forward PostHog API requests.
- **`components/ExploreBtn.tsx`** (updated) — Added `explore_events_clicked` capture to the existing `onClick` handler.
- **`components/EventCard.tsx`** (updated) — Converted to a client component and added `event_card_clicked` capture on link click, with rich properties (`event_title`, `event_slug`, `event_location`, `event_date`).
- **`components/Navbar.tsx`** (updated) — Converted to a client component and added `nav_link_clicked` capture on each navigation link, with a `link_label` property.
- **`components/FeaturedEventsSection.tsx`** (new) — New client component that encapsulates the featured events list and uses the browser `IntersectionObserver` API to fire `featured_events_viewed` once when the section scrolls into view.
- **`app/page.tsx`** (updated) — Replaced the inline events section with the new `FeaturedEventsSection` component.
- **`.env.local`** (updated) — `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables set and protected by `.gitignore`.

## Events instrumented

| Event name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicks the "Explore Events" CTA button on the homepage hero — top of the discovery funnel | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks on an event card to view event details — key conversion step indicating interest in a specific event | `components/EventCard.tsx` |
| `nav_link_clicked` | User clicks a navigation link (Home, Events, Create Event, Logo) — tracks site navigation engagement | `components/Navbar.tsx` |
| `featured_events_viewed` | User scrolls to and sees the featured events section — marks the start of the event browsing funnel | `components/FeaturedEventsSection.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behaviour, based on the events we just instrumented:

- 📊 **Dashboard — Analytics basics**: https://us.posthog.com/project/322545/dashboard/1304664
- 🔽 **Event Discovery Funnel** (conversion funnel: viewed → CTA → card click): https://us.posthog.com/project/322545/insights/zYHaQQSd
- 📈 **CTA & Event Card Clicks Over Time** (daily trend line): https://us.posthog.com/project/322545/insights/rmGYkUQY
- 🏆 **Most Clicked Events** (bar chart by event title): https://us.posthog.com/project/322545/insights/FLeqGvvj
- 🥧 **Navigation Engagement by Link** (pie chart by nav label): https://us.posthog.com/project/322545/insights/Q4nlry0h
- 👥 **Daily Active Users: Browse vs. Click** (DAU trend line): https://us.posthog.com/project/322545/insights/K7TtoEgI

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/posthog-integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
