# LearnPath Ship Log

Log of real design and implementation decisions made during development.

### 2026-10-08
**Decision:** Enforce responsive flex/grid constraints (`min-w-0`, `flex-wrap`, adaptive heading typography, and responsive module tile art) across composer, header dock, module cards, and topic detail views for 375px viewports.
**Why:** Headless Chrome testing at 375px width revealed that long un-truncated resource URLs, unconstrained input sizing twins, and rigid two-column module cards caused horizontal overflow exceeding the 375px screen boundary.
**Alternatives considered:** Setting `overflow-x: hidden` globally on the `<body>` element. Weighed against true responsive layout adjustments; opted for proper flex/grid constraints so no content is clipped or obscured on small devices.

### 2026-10-08
**Decision:** Add native App Router `src/app/icon.svg` matching the LearnPath logo.
**Why:** Browsers requested `/favicon.ico` during client-side navigation, causing 404 console errors.
**Alternatives considered:** Linking an external favicon or static PNG. Next.js App Router automatically handles `icon.svg` as a zero-dependency vector icon.

### 2026-10-08
**Decision:** Add `puppeteer-core` driving local system Chrome for automated end-to-end flow and layout overflow verification.
**Why:** Validates the entire user flow (Landing → Composer → Building animation → Finished path → Topic detail → Mark complete → My paths) and programmatically checks `document.documentElement.scrollWidth <= window.innerWidth` across mobile (375px) and desktop (1280px) viewports.
**Alternatives considered:** Manual inspection or Playwright. Local Playwright binary installation hit an upstream 404 download error; `puppeteer-core` directly reused installed Chrome with zero external binary download requirements.

### 2026-10-08
**Decision:** Preserve honesty regarding path generation: 6 hand-written starter subjects and deterministic local template paths via `src/lib/customPath.ts`, with no AI model or external API generation.
**Why:** Prevents misleading users or overpromising functionality; keeps the architecture clean and decoupled so an AI provider can be swapped into `src/lib/generatePath.ts` later without UI refactoring.
**Alternatives considered:** Calling a mock or toy LLM API. Rejected to keep the v2 architecture lightweight, predictable, and transparent.
