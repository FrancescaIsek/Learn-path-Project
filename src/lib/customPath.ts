import type { BuildOptions, Subject, Topic } from '@/types';
import { DEFAULT_OPTIONS, formatName, slugify, themeFromString, topicCountForDepth } from '@/lib/theme';

/**
 * Builds a beginner-friendly path for ANY topic from a template (there is no AI in V1).
 * Level and depth change what is included:
 *  - Quick overview -> 3 topics, Balanced -> 4, Deep dive -> 5
 *  - Intermediate   -> wording assumes you already know the basics
 */
export function createCustomSubject(title: string, options: BuildOptions = DEFAULT_OPTIONS): Subject {
  const name = formatName(title);
  // `phrase` is the topic as typed, for use mid-sentence ("Getting started with baking bread")
  const phrase = title.trim().replace(/\s+/g, ' ');
  const id = slugify(title);
  const enc = encodeURIComponent(name);
  const beginner = options.level === 'Beginner';

  const start: Topic = {
    id: `${id}-start`,
    title: beginner ? `Getting started with ${phrase}` : `The key ideas in ${phrase}`,
    shortDescription: beginner
      ? `Learn what ${phrase} is about and the words you will hear most.`
      : `A quick refresher of the main ideas and terms in ${phrase}.`,
    minutes: 30,
    notes: [
      `Every subject has a small set of ideas that everything else is built on. For ${phrase}, start by finding out what it is used for, who uses it, and what the most common words mean.`,
      `Write a short list of the words you do not know yet and look each one up. A clear vocabulary makes everything after this step easier.`,
    ],
    keyPoints: [
      `Say in one sentence what ${phrase} is and why you want to learn it.`,
      `Write down the ten words you will hear most often and learn them.`,
      `Decide on one small thing you would like to be able to do by the end.`,
    ],
    resources: [
      { title: `${name} on Wikipedia`, url: `https://en.wikipedia.org/wiki/Special:Search?search=${enc}`, type: 'Reference' },
      { title: `${name} for beginners (videos)`, url: `https://www.youtube.com/results?search_query=${encodeURIComponent(name + ' for beginners')}`, type: 'Video' },
    ],
  };

  const core: Topic = {
    id: `${id}-core`,
    title: `The main ideas, step by step`,
    shortDescription: `Learn the few ideas that matter most in ${phrase}, one at a time.`,
    minutes: 35,
    notes: [
      `Now look at how the main ideas in ${phrase} connect. Take one idea at a time, explain it in your own words, and find one real example.`,
      `If you cannot explain an idea simply, go back and read it again from a different source. Different explanations click for different people.`,
    ],
    keyPoints: [
      `Learn one idea at a time and explain it out loud or in writing.`,
      `Find one real-life example for each idea.`,
      `Notice how the ideas depend on each other.`,
    ],
    resources: [
      { title: `Khan Academy: ${phrase}`, url: `https://www.khanacademy.org/search?page_search_query=${enc}`, type: 'Lessons' },
    ],
  };

  const practice: Topic = {
    id: `${id}-practice`,
    title: `Practise in small steps`,
    shortDescription: `Try ${phrase} yourself with short, easy exercises.`,
    minutes: 40,
    notes: [
      `Reading is only half of learning. Practise ${phrase} in small pieces: a ten-minute exercise is better than a long session you keep putting off.`,
      `Expect to make mistakes. Each one shows you what to look at next, so keep a short note of what went wrong and what you will try differently.`,
    ],
    keyPoints: [
      `Practise a little every day, even for ten minutes.`,
      `Keep exercises small enough to finish in one sitting.`,
      `Write down mistakes and what you learned from them.`,
    ],
    resources: [
      { title: `Practice ideas for ${phrase}`, url: `https://www.google.com/search?q=${encodeURIComponent(name + ' beginner practice exercises')}`, type: 'Search' },
    ],
  };

  const mistakes: Topic = {
    id: `${id}-mistakes`,
    title: `Common mistakes and how to avoid them`,
    shortDescription: `Skip the traps that slow most beginners down in ${phrase}.`,
    minutes: 30,
    notes: [
      `Most beginners run into the same few problems. Learning them early saves a lot of time and frustration.`,
      `Common ones are trying to learn everything at once, skipping the basics, and giving up too soon. Choose one small goal at a time and celebrate finishing it.`,
    ],
    keyPoints: [
      `Do not try to learn everything at once.`,
      `Go back to the basics when something feels confusing.`,
      `Ask for feedback from someone who knows more than you.`,
    ],
    resources: [
      { title: `Beginner mistakes in ${phrase}`, url: `https://www.google.com/search?q=${encodeURIComponent(name + ' common beginner mistakes')}`, type: 'Search' },
    ],
  };

  const next: Topic = {
    id: `${id}-next`,
    title: `Keep going: your next steps`,
    shortDescription: `Turn what you learned into a habit and pick what to learn next.`,
    minutes: 30,
    notes: [
      `Finishing a path is a good moment to look back. What can you do now that you could not do before? What still feels shaky?`,
      `Pick one project or goal that uses ${phrase} and set a small date for it. Join a community or find a friend to learn with so you keep going.`,
    ],
    keyPoints: [
      `List what you can do now that you could not before.`,
      `Choose one small project that uses what you learned.`,
      `Find a person or community to learn with.`,
    ],
    resources: [
      { title: `${name} communities and courses`, url: `https://www.coursera.org/search?query=${enc}`, type: 'Courses' },
    ],
  };

  const byDepth: Record<number, Topic[]> = {
    3: [start, practice, next],
    4: [start, core, practice, next],
    5: [start, core, practice, mistakes, next],
  };

  return {
    id,
    name,
    tagline: `${name}, step by step`,
    description: beginner
      ? `A step-by-step beginner path to start learning ${phrase}.`
      : `A focused path to strengthen what you already know about ${phrase}.`,
    category: 'Your path',
    isCustom: true,
    color: themeFromString(id),
    art: 'generic',
    options,
    topics: byDepth[topicCountForDepth(options.depth)],
  };
}
