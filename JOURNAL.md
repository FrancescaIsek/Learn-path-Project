# LearnPath Project Journal

## September 4, 2026

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
