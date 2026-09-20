export interface Resource {
  title: string;
  url: string;
  type?: string;
}

export interface Topic {
  id: string;
  title: string;
  shortDescription: string;
  notes: string[];
  keyPoints: [string, string, string] | string[];
  resources: Resource[];
  /** Rough time to work through the topic. Optional so paths saved by V1 still load. */
  minutes?: number;
}

/** One accent colour per learning path (used for the cover + card art). */
export type ThemeColor = 'cobalt' | 'pine' | 'tangerine' | 'marigold' | 'blush' | 'ink';

/** Which flat illustration to show on cards. */
export type ArtKey =
  | 'cooking'
  | 'budget'
  | 'garden'
  | 'drawing'
  | 'speaking'
  | 'photo'
  | 'generic';

export type Level = 'Beginner' | 'Intermediate';
export type Depth = 'Quick overview' | 'Balanced' | 'Deep dive';

export interface BuildOptions {
  level: Level;
  hoursPerWeek: number;
  depth: Depth;
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  category: string;
  topics: Topic[];
  isCustom?: boolean;
  /** Short line shown as the big title on the path cover. */
  tagline?: string;
  color?: ThemeColor;
  art?: ArtKey;
  /** Words that should match this subject when someone types it into the composer. */
  keywords?: string[];
  options?: BuildOptions;
}
