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

