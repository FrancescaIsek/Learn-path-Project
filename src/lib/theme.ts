import type { BuildOptions, Subject, ThemeColor, Topic } from '@/types';

export const PALETTE = {
  paper: '#F6F0E4',
  surface: '#FBF7EF',
  ink: '#1C1815',
  ember: '#E8452C',
  cobalt: '#2A30D8',
  pine: '#14604B',
  marigold: '#F7B733',
  blush: '#EBA4DA',
  tangerine: '#FF7A30',
} as const;

interface ThemeSpec {
  bg: string;
  /** Text colour to use on top of the theme background. */
  text: 'light' | 'dark';
  /** Three accent colours used for the cover illustration. */
  a: string;
  b: string;
  c: string;
}

export const THEMES: Record<ThemeColor, ThemeSpec> = {
  cobalt: { bg: PALETTE.cobalt, text: 'light', a: PALETTE.pine, b: PALETTE.marigold, c: PALETTE.blush },
  pine: { bg: PALETTE.pine, text: 'light', a: PALETTE.cobalt, b: PALETTE.marigold, c: PALETTE.blush },
  tangerine: { bg: PALETTE.tangerine, text: 'dark', a: PALETTE.cobalt, b: PALETTE.marigold, c: PALETTE.surface },
  marigold: { bg: PALETTE.marigold, text: 'dark', a: PALETTE.cobalt, b: PALETTE.tangerine, c: PALETTE.blush },
  blush: { bg: PALETTE.blush, text: 'dark', a: PALETTE.cobalt, b: PALETTE.marigold, c: PALETTE.tangerine },
  ink: { bg: PALETTE.ink, text: 'light', a: PALETTE.cobalt, b: PALETTE.marigold, c: PALETTE.blush },
};

const THEME_ORDER: ThemeColor[] = ['cobalt', 'pine', 'tangerine', 'marigold', 'blush', 'ink'];

export function themeFromString(value: string): ThemeColor {
  let hash = 0;
  for (let i = 0; i < value.length; i++) hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  return THEME_ORDER[hash % THEME_ORDER.length];
}

export function slugify(value: string): string {
  return (
    value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '') || 'custom-subject'
  );
}

/** "cooking basics" -> "Cooking basics" */
export function formatName(value: string): string {
  const clean = value.trim().replace(/\s+/g, ' ');
  return clean.charAt(0).toUpperCase() + clean.slice(1);
}

/** Paths saved by V1 have titles like "1. Fundamentals". The new UI shows the number separately. */
export function stripNumber(title: string): string {
  return title.replace(/^\d+\.\s*/, '');
}

export function formatMinutes(total: number): string {
  if (total < 60) return `${total} min`;
  const hrs = Math.floor(total / 60);
  const mins = total % 60;
  if (mins === 0) return hrs === 1 ? '1 hr' : `${hrs} hrs`;
  return `${hrs} hr ${mins}`;
}

export const DEFAULT_OPTIONS: BuildOptions = {
  level: 'Beginner',
  hoursPerWeek: 3,
  depth: 'Balanced',
};

export function topicMinutes(topic: Topic): number {
  return topic.minutes ?? 30;
}

export function pathTotals(subject: Subject) {
  const options = subject.options ?? DEFAULT_OPTIONS;
  const minutes = subject.topics.reduce((sum, t) => sum + topicMinutes(t), 0);
  const weeks = Math.max(1, Math.ceil(minutes / 60 / options.hoursPerWeek));
  return { minutes, weeks, options };
}

export function topicCountForDepth(depth: BuildOptions['depth']): number {
  if (depth === 'Quick overview') return 3;
  if (depth === 'Deep dive') return 5;
  return 4;
}
