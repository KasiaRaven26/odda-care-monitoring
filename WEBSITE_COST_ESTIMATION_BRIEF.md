# Website Cost Estimation Brief — Odda Care

## Instructions for the estimating AI

Act as a senior UK web-project estimator. Estimate the fair commercial price to design, build, test and launch the website described below. This is a brochure/lead-generation website for a UK care-technology business; it is **not** the customer monitoring platform or IoT backend.

Use GBP and state whether figures exclude or include VAT. Do not give only one unexplained total. Provide:

1. A low, expected and high market price for a complete build from scratch matching the described website.
2. A separate low, expected and high price to take the existing implementation described under “Current implementation status” through production launch.
3. Estimated hours and cost by workstream: discovery/project management, UX, visual design, front-end development, integrations, content entry, SEO/accessibility/performance, QA, deployment and contingency.
4. Appropriate hourly/day-rate assumptions for:
   - an independent freelancer;
   - a small UK agency.
5. One-off costs separately from recurring third-party, hosting and maintenance costs.
6. Assumptions, exclusions, risks and the five questions that would most change the price.
7. A recommended client quote, suggested payment milestones and a clearly stated revision allowance.

Do not price features that are explicitly out of scope. If information is uncertain, state the assumption rather than silently inventing functionality. Account for the fact that the design is custom and content-rich even though the underlying functionality is relatively light.

Suggested final response structure:

| Scenario | Freelancer low | Freelancer expected | Freelancer high | Small agency expected |
|---|---:|---:|---:|---:|
| Rebuild from scratch | | | | |
| Finish existing implementation | | | | |

Then include the workstream breakdown, recurring costs, assumptions/exclusions, risks, questions, recommended quote and milestones.

---

## 1. Project summary

**Brand:** Odda Care  
**Market:** United Kingdom  
**Website type:** Custom, responsive marketing and lead-generation website  
**Primary audience:** Families supporting an older relative who wants to continue living independently  
**Primary goals:** Explain the service, build trust, show the monitoring hardware and companion dashboard, communicate pricing, answer common questions and generate consultation/assessment bookings  
**Tone:** Calm, reassuring, personal, privacy-conscious and non-technical  
**Primary calls to action:** “Book a free assessment”, “Contact us”, “See how Odda works”

The service being marketed uses discreet home sensors and an “Odda View” dashboard. The public website describes these products but does not itself receive sensor data or provide customer monitoring.

## 2. Design and UX specification

- Bespoke visual design rather than a purchased theme.
- Warm, care-focused palette using off-white, beige and sage/green tones.
- Large editorial typography, rounded cards/panels, full-width photography and generous spacing.
- Fully responsive layouts for mobile, tablet and desktop.
- Shared sticky header/navigation with desktop and mobile variants.
- Shared multi-column footer with navigation, social icons, legal links, company statement and ICO registration information.
- Repeated conversion-focused CTA panels across the site.
- Hover, focus, fade, scale and scroll-triggered transitions.
- Reduced-motion handling for the main rotating hero.
- Semantic headings, descriptive image alternative text and ARIA labelling on key controls.
- Content is in English only; no multilingual functionality is required.

## 3. Page inventory and content scope

There are **nine public routes/pages** in the current website.

### 3.1 Home (`/`)

- Large two-slide photographic hero carousel.
- Auto-advance approximately every 5.5 seconds, manual slide indicators and reduced-motion support.
- Introductory brand message and two primary CTA buttons.
- “Odda View” product section with a two-slide desktop/mobile dashboard showcase.
- Four-item interactive accordion describing dashboard insights.
- Six-device product gallery.
- Device detail dialog/modal with image, description and suggested placement.
- One-time delayed welcome/chat-style panel stored in browser local storage; this is a CTA widget, not live chat.

### 3.2 How It Works (`/how-it-works`)

- Image-led hero and jump link.
- Four-stage process timeline with scroll-triggered reveal animation.
- Odda View walkthrough with two product screenshots and three benefit descriptions.
- Links to selected anchored FAQ answers.
- Closing consultation CTA.

### 3.3 About (`/about`)

- Founder-led hero and founder portrait card.
- Expand-on-hover/focus founder biography overlay.
- Brand origin/story section.
- Four brand-value statements.
- Installation/service imagery and current-company-positioning content.
- CTA for assessment booking and email contact.

### 3.4 Technology (`/technology`)

This is the longest and most complex content page.

- Image hero.
- Three-stage visual system flow: sensors → Odda Hub → Odda View.
- Six-device product breakdown: hub, motion sensor, environmental sensor, door sensor, smart plug and assistance button.
- Responsive product-card layouts.
- Interactive modal dialogs for device descriptions and placement advice, operable by hover/click and dismissible by overlay, close control or Escape key.
- Privacy-focused content section.
- Odda View/dashboard explanation and alert imagery.
- Four-step installation/onboarding flow.
- Closing CTA.

### 3.5 Pricing (`/pricing`)

- Introductory pricing hero with photography.
- UK pricing presentation for:
  - £39.99 weekly subscription;
  - £99 one-off professional installation;
  - £100 refundable equipment deposit.
- Three custom icon/cards over an image background.
- Daily-cost explanation (£5.71/day).
- Payment/setup information and GoCardless brand treatment.
- Scroll-triggered reveal animation.
- This page only explains payment; it does not process checkout or Direct Debit payments.

### 3.6 FAQ (`/faq`)

- Hero and assessment-booking CTA.
- 26 accordion questions grouped into seven categories:
  - About Odda;
  - How it works;
  - Installation and equipment;
  - Family access and privacy;
  - Visitors and everyday life;
  - Pricing and contract;
  - Getting started.
- Deep links using URL hashes automatically open and scroll to the relevant answer.
- Accessible expanded/collapsed state on question controls.

### 3.7 Insights (`/insights`)

- One long-form editorial article with category, publication date and reading time.
- Featured image, section headings, prose and pull quote.
- Three external references to NHS and Age UK resources.
- No blog index, CMS, authoring workflow, categories/search, pagination or dynamic article routes.

### 3.8 Contact (`/contact`)

- Contact introduction and two-panel responsive layout.
- Contact details/expectation panel.
- Form fields for name, email, optional phone, who support is for and message.
- Browser-native field validation.
- Current form submission creates a pre-filled `mailto:` link and opens the visitor’s email application.
- No database, transactional email service, CRM submission, spam prevention or server-side success/error flow is currently included.

### 3.9 Book an Assessment (`/book-assessment`)

- Introductory copy.
- Embedded 30-minute Calendly scheduling page in a responsive iframe.
- Booking availability, reminders and confirmation are handled by Calendly, not by this website.

## 4. Shared features and interactions

- Sticky global navigation with six main links, contact CTA and an Odda View/login icon.
- Responsive navigation presentation.
- Global branded footer.
- Two independent automatic carousels.
- Accordion controls on the home and FAQ pages.
- Device information dialogs/modals.
- Intersection Observer-based reveal animations.
- Delayed welcome CTA panel with local-storage persistence.
- Internal anchor/deep-link behaviour.
- External links and email links.
- Calendly iframe integration.
- Google-hosted Montserrat/Inter fonts.
- GoCardless logo/branding on the pricing page.

## 5. Content and supplied assets

- The present codebase includes the English page copy.
- It contains **44 image/logo files** totalling approximately **62 MB** in source form.
- Assets include commissioned/brand photography, founder portrait, product cut-outs, app/dashboard mock-ups, installation imagery, logo/favicon and a GoCardless SVG.
- Approximately 25 unique image assets are referenced by the current UI; the remainder appear to be alternates or unused source assets.
- Pricing should assume the client supplies and licenses the existing copy, logo, product images and photography unless an estimator explicitly offers an alternative scenario.
- Include basic copy editing, consistency checks, image preparation, compression and responsive delivery in the launch scope.
- Do **not** include a new brand identity, photography shoot, 3D product rendering or full copywriting package in the base price; show these only as optional extras if relevant.

## 6. Technical implementation

- React 19.2 with TypeScript 5.9.
- React Router 8 framework mode with server-side rendering enabled.
- Vite 8 build system.
- Tailwind CSS 4 utility styling plus a small amount of global CSS.
- Node 24 Alpine multi-stage Docker build.
- No database.
- No CMS.
- No authentication implementation in this repository.
- No application API or custom backend.
- No automated test suite currently present.
- Deployment target is not selected; the Docker image can be deployed to a suitable Node/Docker host.
- The repository currently contains roughly 3,700 lines across the main route/component/CSS implementation, excluding generated files and dependencies. Line count is context only and must not be used as the sole pricing method.

## 7. Current implementation status

The project is substantially implemented in code, not merely specified or represented by wireframes.

Verified on 27 September 2026:

- Dependency installation is represented by a committed npm lockfile.
- Type generation and TypeScript checking complete successfully.
- The production client and server bundles build successfully.
- All nine listed public routes are registered.
- The main layouts, responsive classes, content and interactions are implemented.

The “finish existing implementation” estimate should allow for a professional visual/browser/device audit and correction of issues, not assume that a successful compiler build means launch readiness.

## 8. Known launch gaps and defects to price

The following items are not complete or require a product decision. Include reasonable launch work in the “finish existing implementation” estimate and list major enhancements separately.

### Required launch completion

- Replace the contact email placeholder (`WPISZ_TUTAJ_EMAIL`) with the real address and agree whether `mailto:` is acceptable.
- If production lead capture is expected, replace `mailto:` with a secure form endpoint/email service, success/error states and basic spam protection. Price this separately so the client can choose.
- Add or deliberately remove links to four routes that do not exist: `/login`, `/privacy`, `/terms` and `/cookies`.
- Supply and publish the privacy policy, terms and cookie policy if legal links remain.
- Add cookie consent only if the final analytics/marketing setup makes it necessary; confirm requirements with an appropriate privacy professional.
- Replace placeholder `#` social-media URLs or remove their icons.
- Correct footer navigation links that currently point to non-existent home-page anchors such as `/#about`, `/#pricing` and `/#contact`, or add those anchors/sections.
- Remove a duplicate footer rendering on the How It Works page (the root layout already renders a global footer).
- Decide the destination and responsibility for the `/login` “Odda View” link; the customer dashboard itself is outside this website scope.
- Add unique page titles and meta descriptions to pages that currently lack them (About, Pricing, Insights and Book an Assessment).
- Add appropriate favicon/app metadata, social sharing metadata and canonical URLs.
- Add `robots.txt` and sitemap generation/static files.
- Compress and resize large imagery, use modern formats where appropriate and confirm lazy loading/preloading to control Core Web Vitals and bandwidth.
- Cross-browser and responsive QA across current mobile, tablet and desktop viewport sizes.
- Keyboard/focus and screen-reader QA, including focus trapping/restoration and body-scroll behaviour for modals.
- Check colour contrast, reduced-motion coverage, heading structure and accessible naming.
- Verify the Calendly embed’s responsive behaviour, privacy impact and fallback link.
- Add a user-friendly branded 404 page and production error handling.
- Remove unused template/dead files and tidy duplicated or inconsistent implementation details.
- Configure the production domain, HTTPS, environment/configuration, hosting, deployment and a basic rollback/handover process.

### Recommended but separately identifiable

- Privacy-friendly analytics and Search Console setup.
- Consent-management platform if required by selected tracking tools.
- Secure server-side/hosted contact-form delivery and CRM integration.
- Basic automated smoke/end-to-end tests for routes, form and key interactions.
- Uptime monitoring, error reporting and automated dependency/security updates.
- Ongoing maintenance/support agreement.

## 9. SEO, accessibility, quality and acceptance criteria

For a production-ready estimate, assume the following sensible baseline:

- Valid, indexable SSR output for public pages.
- Unique title and description for every indexable page.
- Canonical URL, Open Graph/social metadata, sitemap and robots configuration.
- Semantic content hierarchy and descriptive links/alternative text.
- Practical WCAG 2.2 AA review of the supplied designs, with keyboard access and visible focus states for all interactive UI.
- Functional tests of navigation, accordions, carousels, dialogs, deep-linked FAQs, contact flow and booking embed.
- Testing on recent Chrome, Safari, Firefox and Edge, including representative iOS and Android viewport sizes.
- Image and bundle optimisation aimed at good Core Web Vitals; do not promise a fixed Lighthouse score without defining the test environment and third-party-script allowance.
- No broken internal links or placeholder destinations.
- Production build, deployment documentation and a short handover session.
- Reasonable post-launch defect warranty (estimator should state the period).

## 10. Explicitly out of scope

Unless shown as an optional item, do not include:

- The Odda View customer dashboard or `/login` application.
- User accounts, authentication, roles or customer portals.
- IoT device firmware, sensor connectivity, data ingestion or monitoring infrastructure.
- Real-time alerts, SMS/push notifications or emergency-response functionality.
- E-commerce, subscription checkout or GoCardless API integration.
- Database or custom admin panel.
- Full CMS/blog platform or migration of multiple articles.
- Multilingual content.
- New brand identity, logo design, photography shoot or video production.
- Legal drafting or formal regulatory/accessibility certification.
- Native mobile applications.
- Hosting and third-party subscription fees beyond setup, unless itemised as recurring costs.

## 11. Commercial assumptions for comparison

Use these assumptions unless you clearly replace them:

- Client supplies approved logo, images, product facts, prices, legal/company details and substantially final English copy.
- One decision-maker provides consolidated feedback.
- Include two reasonable rounds of design/content revisions; distinguish additional revisions by rate.
- The estimator is responsible for front-end implementation, QA and launch coordination.
- Scope includes the nine pages above plus the required legal/404 route work necessary for a credible launch, but no customer dashboard.
- Calendly remains the scheduling provider.
- Hosting is a standard managed Node/Docker or compatible platform, with normal low-to-moderate marketing-site traffic.
- Quote should include project management and a sensible contingency; neither should be hidden in an unexplained total.
- Separate any discount for reusable existing code from the replacement value of the completed website.

## 12. Questions whose answers may change the final quote

The estimator should make assumptions now but flag the effect of these questions:

1. Is the requested price for the replacement value of all work already performed, or only for finishing and launching the existing repository?
2. Were the design direction, copy and all imagery supplied by the client, or were they created as part of the engagement?
3. Should the contact form only open an email client, send securely through a provider, or create CRM records?
4. Who will supply/approve legal policies, cookie requirements and the final Odda View login destination?
5. What hosting, analytics, maintenance, browser-support and post-launch support level is required?

