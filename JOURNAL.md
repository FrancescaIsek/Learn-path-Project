# LearnPath Project Journal

### The Idea

I wanted to build a small project that helps people know where to start when learning something new.

This became **LearnPath**, a simple tool that turns a subject into a structured learning path.

### MVP Decisions

The first version includes:

* Popular subjects
* Learning paths
* Individual topics
* Short notes and key points
* Useful resources
* Topic completion

I deliberately left out AI, accounts, databases, quizzes, analytics, and other features to keep the project small.

### Building

I built LearnPath with Next.js, TypeScript, and Tailwind CSS using local data.

During testing, I encountered a Next.js runtime error caused by how route parameters were being handled. I fixed it by accessing the parameters directly.

### What I Learned

The biggest lesson was that **scope control matters**.

It would have been easy to turn LearnPath into a large AI-powered learning platform, but building a small working product was more valuable for this MVP.

### Current State

The main flow works:

**Home → Learning Path → Topic → Mark Complete → Back to Learning Path**

### Future Ideas

Dynamic learning paths, more subjects, AI-generated content, and persistent progress.

## September 5, 2026

### Finalising and shipping

Today I finished the LearnPath MVP and prepared it for public deployment.

I cleaned the Git repository after discovering that generated `node_modules` files had accidentally been included in the repository. One of the files was larger than GitHub's file-size limit, so I removed the generated files from the Git history and created a clean repository history.

I then pushed the clean project to GitHub and deployed it with Vercel.

### What I chose

I kept the product focused on one core problem: helping a beginner understand where to start when learning something new.

The MVP uses static local content instead of a database or AI generation. This keeps the product simple while still allowing the complete experience to work from beginning to end.

### What I parked

I deliberately left these ideas out of the MVP:

* AI-generated learning paths
* User accounts
* Persistent progress
* Quizzes
* Recommendations
* Analytics
* Streaks
* Notifications

These could become future iterations, but they are not necessary for testing the core idea.

### Current state

LearnPath is now deployed and working.

The complete flow is:

Home → Learning Path → Topic → Mark Complete → Learning Path

The project now has a public repository, a case-study README, a project journal, and a live deployment.

## September 23, 2026

### Upgrading to LearnPath v2

The goal was to replace the v1 version of LearnPath with the new v2 implementation.

* **Separate Development**: LearnPath v2 was developed in a separate local folder from v1, with the actual v2 project located at `Downloads\learnpath-v2\learnpath-v2`.
* **Local Testing**: v2 was successfully run locally using `npm.cmd run dev`. Since ports 3000 and 3001 were already in use, v2 ran on port 3002.
* **Repository Sync**: v2 was already connected to the existing GitHub repository `FrancescaIsek/Learn-path-Project`. The local branch was initially one commit behind `origin/main`, so remote changes were fetched and synced safely before committing the v2 work.
* **Commit & Push**: The v2 changes were committed with the message `Update LearnPath to v2` (commit hash: `99f13b3`) and successfully pushed to the existing `main` branch.

## October 8, 2026

### Mobile responsiveness, end-to-end flow verification, and ship log

Today I conducted a full audit of LearnPath v2, fixed mobile viewport issues at 375px, added automated regression testing, documented architectural decisions, and verified the live Vercel deployment.

#### 1. Getting it running clean
* Ran a fresh production build (`npm run build`) on Next.js 14 App Router, verifying that all static routes (`/`, `/paths`, `/icon.svg`) and dynamic routes (`/path/[subjectId]`, `/path/[subjectId]/[topicId]`) compile with zero type errors and zero build warnings.
* Walked the complete user journey: Landing $\rightarrow$ Composer $\rightarrow$ Building animation $\rightarrow$ Finished path $\rightarrow$ Topic detail $\rightarrow$ Mark complete $\rightarrow$ My paths library.

#### 2. Mobile responsiveness audit (375px viewport)
I ran an automated headless Chrome audit specifically targeting 375px mobile viewports (standard iPhone width) to measure element bounding boxes and detect any `scrollWidth > clientWidth` overflow. The audit caught subtle layout bugs that wouldn't show up on desktop:
* **Topic resource link overflow**: In `src/app/path/[subjectId]/[topicId]/page.tsx`, long external URLs inside resource cards were causing a 5px horizontal overflow (380px wide on a 375px screen). Because CSS Grid defaults columns to `minmax(auto, 1fr)`, the child flex container was sizing to the un-truncated URL length. Fixed by adding `min-w-0 max-w-full` to the anchor tags and `min-w-0` to the grid container so `truncate` works correctly.
* **Module cards on mobile**: On `/path/[subjectId]`, quiet topic cards previously used a fixed 84px tile art next to a 20px gap. Inside the path spine's 58px left padding, this left only 133px for the title and metadata. The notes and time badges had no `flex-wrap`, which forced the card wider than 375px. Fixed by adding `min-w-0` to the text column, scaling the tile to 68px on mobile (`sm:84px`), and adding `flex-wrap` with `gap-x-4 gap-y-1` to the metadata badges.
* **Composer sizing twin**: In `Composer.tsx`, an invisible hidden span (`whitespace-pre`) is used to dynamically size the input field to whatever the user types. On longer queries, this span expanded beyond 100% of the screen width and forced horizontal scrolling. Fixed by adding `max-w-full overflow-hidden` to the sizing twin.
* **Header Dock capsule**: In `SiteNav.tsx`, the `AppNav` center column containing the Dock capsule was constrained with `min-w-0 w-full`, preventing the grid cell from expanding past the viewport during the building animation.
* **Heading typography**: Adjusted hero and cover heading font sizes (`text-[38px] sm:text-[68px]` and `text-[32px] sm:text-[62px]`) so decorated headlines fit cleanly within the 343px mobile content container.
* **App icon & 404 fix**: Added `src/app/icon.svg` using Next.js App Router conventions, eliminating browser 404 console errors for `/favicon.ico`.

#### 3. Automated end-to-end verification
* Created `test-flow.mjs` using `puppeteer-core` hooked into the local Google Chrome binary.
* The script programmatically executes the entire flow:
  1. Loads landing page at 375px and verifies zero horizontal overflow.
  2. Types into the composer (testing both standard starter topics and long strings).
  3. Triggers the building state and checks progress steps and skeleton preview.
  4. Waits for automatic routing to `/path/cooking-basics`.
  5. Opens the first topic, clicks "Mark as complete", and asserts button toggles to "Marked complete".
  6. Navigates to `/paths` and verifies the started path appears with 1 topic completed.
  7. Resizes to desktop (1280x800) and verifies custom topic path generation.
* The test passed 100% clean with zero console errors and zero horizontal overflow.

#### 4. Ship log discipline & deployment
* Created `SHIP_LOG.md` documenting every key decision made (responsive flex/grid constraints, App Router vector icon, headless verification architecture, and maintaining absolute honesty about the template-based generation engine).
* Committed changes atomically with semantic commit messages (`fix`, `feat`, `chore`, `docs`).
* Pushed all commits to `origin/main` (`FrancescaIsek/Learn-path-Project`).
* Confirmed the live production deployment on Vercel is healthy and serving HTTP 200: `https://learn-path-project-delta.vercel.app`.


