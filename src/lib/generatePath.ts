import type { BuildOptions, Subject } from '@/types';
import { findStaticSubject } from '@/data/subjects';
import { createCustomSubject } from '@/lib/customPath';

/**
 * The single place where a learning path gets made.
 *
 * V1/V2 behaviour: if the topic matches a starter path, return it; otherwise build a
 * template path locally. It is async on purpose so that this function can later call a
 * real generator (an API route, an LLM, etc.) without any UI changes: the building screen
 * already waits on this promise.
 */
export async function generateLearningPath(topic: string, options: BuildOptions): Promise<Subject> {
  const starter = findStaticSubject(topic);
  if (starter) return starter;
  return createCustomSubject(topic, options);
}
