'use client';

import { useCallback, useEffect, useState } from 'react';
import { Subject } from '@/types';

const COMPLETED_KEY = 'learnpath_completed_topics';
const CUSTOM_SUBJECTS_KEY = 'learnpath_custom_subjects';

function readJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch (e) {
    console.error(`Failed to read ${key} from localStorage:`, e);
    return fallback;
  }
}

function writeJSON(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Failed to save ${key} to localStorage:`, e);
  }
}

export function useProgress() {
  const [completedTopicIds, setCompletedTopicIds] = useState<string[]>([]);
  const [customSubjects, setCustomSubjects] = useState<Subject[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setCompletedTopicIds(readJSON<string[]>(COMPLETED_KEY, []));
    setCustomSubjects(readJSON<Subject[]>(CUSTOM_SUBJECTS_KEY, []));
    setIsLoaded(true);
  }, []);

  const isCompleted = useCallback(
    (topicKey: string): boolean => completedTopicIds.includes(topicKey),
    [completedTopicIds]
  );

  /** topicKey is `${subjectId}/${topicId}` (same as V1, so saved progress keeps working). */
  const toggleCompletion = (topicKey: string) => {
    const current = readJSON<string[]>(COMPLETED_KEY, []);
    const updated = current.includes(topicKey)
      ? current.filter((id) => id !== topicKey)
      : [...current, topicKey];
    writeJSON(COMPLETED_KEY, updated);
    setCompletedTopicIds(updated);
  };

  const saveCustomSubject = (subject: Subject) => {
    const current = readJSON<Subject[]>(CUSTOM_SUBJECTS_KEY, []);
    const updated = [subject, ...current.filter((s) => s.id !== subject.id)];
    writeJSON(CUSTOM_SUBJECTS_KEY, updated);
    setCustomSubjects(updated);
  };

  return {
    isLoaded,
    completedTopicIds,
    isCompleted,
    toggleCompletion,
    customSubjects,
    saveCustomSubject,
  };
}
