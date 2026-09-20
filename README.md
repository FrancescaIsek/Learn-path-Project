# LearnPath

Learn anything, in the right order. Type what you want to learn, and LearnPath builds a simple step-by-step path around it.

**Flow:** type a topic, the path is built (loading state), you see the finished path, open a topic, mark it complete.

## What changed in v2

- Full visual redesign ("warm editorial intelligence"): paper canvas, one topic colour per path, flat geometric art.
- **Fonts are Notion's:** Inter (Notion's default sans) for all UI and headings, iA Writer Mono for small labels. Both are bundled through npm (`@fontsource-variable/inter`, `@fontsource/ia-writer-mono`), so there is no runtime request to Google Fonts. Notion's serif (Lyon Text) is a paid font and is intentionally not used.
- The prompt is a sentence: **"I want to learn ____"** with Level / Time per week / Depth chips.
- New states: building (progress steps + skeleton preview), finished path (cover, outline rail, expandable current topic), empty "My paths", and a "topic too broad" suggestion state.
- New starter subjects, all simple and everyday: Cooking Basics, Budgeting Basics, Home Gardening, Learn to Draw, Public Speaking, Photography Basics.

## What is (and is not) real

There is still **no AI, database or accounts** (same scope as v1). Custom topics get a template path built locally in
`src/lib/customPath.ts`; level and depth change how many topics it has and how it reads. Progress and saved paths are in `localStorage`.

All path creation goes through one async function, `generateLearningPath()` in `src/lib/generatePath.ts`. The building screen already
waits on it, so a real generator can replace it without touching the UI.

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
```

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

Next.js 14 (App Router), TypeScript, Tailwind CSS 3.
