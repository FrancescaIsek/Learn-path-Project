'use client';

import Link from 'next/link';
import { STATIC_SUBJECTS } from '@/data/subjects';
import { useProgress } from '@/hooks/useProgress';
import { AppNav } from '@/components/SiteNav';
import { SubjectCard } from '@/components/SubjectCard';
import { Icon } from '@/components/Icon';

/** "My paths": paths you built + starter paths you have started. */
export default function MyPathsPage() {
  const { customSubjects, completedTopicIds, isLoaded } = useProgress();

  const doneIn = (id: string) => completedTopicIds.filter((k) => k.startsWith(`${id}/`)).length;
  const started = STATIC_SUBJECTS.filter((s) => doneIn(s.id) > 0);
  const all = [...customSubjects, ...started.filter((s) => !customSubjects.some((c) => c.id === s.id))];

  return (
    <div>
      <AppNav />
      <div className="mx-auto max-w-[1136px] px-4 pb-20 sm:px-8">
        <div className="label">Library</div>
        <h1 className="mb-8 mt-3 text-[40px] font-bold tracking-[-0.05em] sm:text-[56px]">My paths</h1>

        {!isLoaded ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="skeleton h-[300px] !rounded-card" />
            ))}
          </div>
        ) : all.length === 0 ? (
          <div className="mx-auto max-w-[520px] rounded-[30px] border border-line bg-surface p-8 text-center sm:p-10">
            <svg viewBox="0 0 300 120" className="mx-auto mb-5 w-full max-w-[300px]" aria-hidden="true">
              <path d="M20 90C80 90 70 30 130 30S190 90 250 60" fill="none" stroke="#CDBFA6" strokeWidth="2.5" strokeDasharray="3 9" strokeLinecap="round" />
              <circle cx="20" cy="90" r="11" fill="#FBF7EF" stroke="#CDBFA6" strokeWidth="2.5" />
              <circle cx="130" cy="30" r="11" fill="#FBF7EF" stroke="#CDBFA6" strokeWidth="2.5" />
              <circle cx="250" cy="60" r="14" fill="#F7B733" />
            </svg>
            <h2 className="text-3xl font-bold tracking-[-0.04em]">Nothing here yet</h2>
            <p className="mx-auto mt-2 max-w-[360px] text-[15px] text-ink-2">
              Your paths will live here. Start with something you have always wondered about.
            </p>
            <Link href="/" className="btn mt-6">
              Build your first path <Icon name="arrow" />
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {all.map((s) => (
              <SubjectCard key={s.id} subject={s} done={doneIn(s.id)} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
