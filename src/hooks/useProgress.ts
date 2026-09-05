'use client';

import { useState, useEffect } from 'react';
import { Subject } from '@/types';
import { createCustomSubject } from '@/data/subjects';

const COMPLETED_KEY = 'learnpath_completed_topics';
const CUSTOM_SUBJECTS_KEY = 'learnpath_custom_subjects';

export function useProgress() {
  const [completedTopicIds, setCompletedTopicIds] = useState<string[]>([]);
  const [customSubjects, setCustomSubjects] = useState<Subject[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedCompleted = localStorage.getItem(COMPLETED_KEY);
      if (storedCompleted) {
        setCompletedTopicIds(JSON.parse(storedCompleted));
      }

      const storedCustom = localStorage.getItem(CUSTOM_SUBJECTS_KEY);
      if (storedCustom) {
        setCustomSubjects(JSON.parse(storedCustom));
      }
    } catch (e) {
      console.error('Failed to read from localStorage:', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const isCompleted = (topicId: string): boolean => {
    return completedTopicIds.includes(topicId);
  };

  const toggleCompletion = (topicId: string) => {
    setCompletedTopicIds((prev) => {
      const isDone = prev.includes(topicId);
      const updated = isDone
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId];

      try {
        localStorage.setItem(COMPLETED_KEY, JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save progress to localStorage:', e);
      }
      return updated;
    });
  };

  const addCustomSubject = (title: string): Subject => {
    const newSubject = createCustomSubject(title);
    setCustomSubjects((prev) => {
      const exists = prev.some((s) => s.id === newSubject.id);
      if (exists) return prev;

      const updated = [newSubject, ...prev];
      try {
        localStorage.setItem(CUSTOM_SUBJECTS_KEY, JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save custom subject to localStorage:', e);
      }
      return updated;
    });
    return newSubject;
  };

  return {
    isLoaded,
    completedTopicIds,
    isCompleted,
    toggleCompletion,
    customSubjects,
    addCustomSubject,
  };
}
