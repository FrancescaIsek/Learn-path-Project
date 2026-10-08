# LearnPath

Learn anything, in the right order. Type what you want to learn, and LearnPath builds a simple step-by-step path around it.

- **Live URL:** [https://learn-path-project-delta.vercel.app](https://learn-path-project-delta.vercel.app)
- **Flow:** type a topic, the path is built (animated loading state), you see the finished path, open a topic, mark it complete, and view progress in "My paths".

## What changed in v2

- Full visual redesign ("warm editorial intelligence"): paper canvas, one topic colour per path, flat geometric art.
- **Fonts are Notion's:** Inter (Notion's default sans) for all UI and headings, iA Writer Mono for small labels. Both are bundled through npm (`@fontsource-variable/inter`, `@fontsource/ia-writer-mono`), so there is no runtime request to Google Fonts. Notion's serif (Lyon Text) is a paid font and is intentionally not used.
- The prompt is a sentence: **"I want to learn ____"** with Level / Time per week / Depth chips.
- New states: building (progress steps + skeleton preview), finished path (cover, outline rail, expandable current topic), empty "My paths", and a "topic too broad" suggestion state.
- Starter subjects: Cooking Basics, Budgeting Basics, Home Gardening, Learn to Draw, Public Speaking, Photography Basics.
## Mobile responsiveness (375px)

The UI is built and verified for small mobile viewports (down to 375px width, standard iPhone SE / mini) with zero horizontal overflow:
- **Sentence Composer**: The hidden sizing twin element uses `max-w-full overflow-hidden` so long user queries do not force the form or page past 375px.
- **Header Dock Capsule**: In `AppNav`, the center dock column uses `min-w-0 w-full` with truncated topic labels to prevent grid blowouts during build animations.
- **Module Cards**: Uses `min-w-0` on card columns, responsive art tiles (68px on mobile, 84px on desktop), and flex-wrapping metadata badges to fit comfortably inside the 58px spine offset.
- **Topic Resource Links**: Enforces `min-w-0 max-w-full` on card anchors to ensure long external URLs truncate properly inside CSS Grid containers.

## What is (and is not) real

- **No AI generation yet**: The 6 starter subjects (Cooking Basics, Budgeting Basics, Home Gardening, Learn to Draw, Public Speaking, Photography Basics) have real, hand-written content with 3 key takeaways and recommended resources.
- **Template paths for custom topics**: Anything else runs through `createCustomSubject()` in `src/lib/customPath.ts` — a deterministic local template, not an AI model. Level (Beginner vs. Intermediate) and depth (Quick overview, Balanced, Deep dive) determine the module count and wording.
- **Local storage**: Progress and saved custom paths are stored in browser `localStorage`.
- **Decoupled generation architecture**: All path creation goes through one async function, `generateLearningPath()` in `src/lib/generatePath.ts`. The building screen already waits on this promise, so an actual AI generator or API route can easily replace the local template builder without touching any UI code.

## Structure

```
src/app/page.tsx                       landing + composer + building state
src/app/path/[subjectId]/page.tsx      finished path
src/app/path/[subjectId]/[topicId]/    topic page
src/app/paths/page.tsx                 My paths (+ empty state)
src/components/                        Composer, CardFan, BuildingView, ModuleCard, SiteNav (Dock), art/*
src/data/subjects.ts                   starter subjects + "too broad" suggestions
src/lib/                               theme tokens, template path builder, generatePath
docs/DESIGN.md                         design tokens and rules
SHIP_LOG.md                            log of implementation decisions
JOURNAL.md                             development history & project log
```

## Run it locally

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Run production build
npm run build

# Run automated end-to-end flow & 375px overflow test
node test-flow.mjs
```

Next.js 14 (App Router), TypeScript, Tailwind CSS 3.

