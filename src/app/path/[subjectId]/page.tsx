'use client';

import Link from 'next/link';
import { getSubjectById, isStaticId } from '@/data/subjects';
import { useProgress } from '@/hooks/useProgress';
import { AppNav, Dock } from '@/components/SiteNav';
import { CoverArt } from '@/components/art/CoverArt';
import { ModuleCard } from '@/components/ModuleCard';
import { Spine, NodeState } from '@/components/Node';
import { Icon } from '@/components/Icon';
import { THEMES, formatMinutes, pathTotals, stripNumber } from '@/lib/theme';
import { DEFAULT_OPTIONS } from '@/lib/theme';

interface PageProps {
  params: { subjectId: string };
}

function PathSkeleton() {
  return (
    <div>
      <AppNav />
      <div className="mx-auto max-w-[1136px] px-4 sm:px-8">
        <div className="skeleton h-[420px] w-full !rounded-cover" />
        <div className="mt-10 space-y-4">
          <div className="skeleton h-40 w-full !rounded-card" />
          <div className="skeleton h-28 w-full !rounded-card" />
        </div>
      </div>
    </div>
  );
}

export default function LearningPathPage({ params }: PageProps) {
  const { customSubjects, isCompleted, isLoaded } = useProgress();

  // Saved custom paths live in localStorage, so wait for it before deciding what to show.
  if (!isLoaded && !isStaticId(params.subjectId)) return <PathSkeleton />;

  const subject = getSubjectById(params.subjectId, customSubjects);
  if (!subject) return null;

  const theme = THEMES[subject.color ?? 'cobalt'];
  const dark = theme.text === 'dark';
  const { minutes, weeks, options } = pathTotals(subject);
  const total = subject.topics.length;

  const doneFlags = subject.topics.map((t) => isLoaded && isCompleted(`${subject.id}/${t.id}`));
  const completedCount = doneFlags.filter(Boolean).length;
  const progress = total > 0 ? Math.round((completedCount / total) * 100) : 0;
  const currentIndex = doneFlags.findIndex((d) => !d); // first topic not done, -1 = finished
  const allDone = currentIndex === -1;
  const targetIndex = allDone ? 0 : currentIndex;
  const target = subject.topics[targetIndex];

  const stateFor = (i: number): NodeState => (doneFlags[i] ? 'done' : i === currentIndex ? 'now' : 'next');

  return (
    <div>
      <AppNav center={<Dock topic={subject.name} options={options ?? DEFAULT_OPTIONS} />} />

      <div className="mx-auto max-w-[1136px] px-4 sm:px-8">
        {/* Cover */}
        <section
          className={`relative overflow-hidden rounded-[32px] sm:rounded-cover ${dark ? 'text-ink' : 'text-paper'}`}
          style={{ backgroundColor: theme.bg }}
        >
          <div className="relative z-10 max-w-[690px] px-6 py-10 sm:px-12 sm:py-11">
            <div className={`label ${dark ? '!text-ink/70' : '!text-paper/75'}`}>
              Your learning path · {options.level}
            </div>
            <h1 className="mb-4 mt-3.5 text-[40px] font-bold leading-[1.02] tracking-[-0.05em] sm:text-[62px]">
              {subject.tagline ?? `${subject.name}, step by step`}
            </h1>
            <p className={`max-w-[520px] text-[17px] leading-relaxed sm:text-lg ${dark ? 'text-ink/80' : 'text-paper/90'}`}>
              {subject.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[`${total} topics`, `≈ ${formatMinutes(minutes)}`, `~${weeks} ${weeks === 1 ? 'week' : 'weeks'} at ${options.hoursPerWeek} hrs / wk`].map((t) => (
                <span
                  key={t}
                  className={`rounded-full border px-3.5 py-1.5 text-sm ${dark ? 'border-black/15 bg-black/10' : 'border-white/25 bg-white/15'}`}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-2.5">
              <Link
                href={`/path/${subject.id}/${target.id}`}
                className={`btn ${dark ? '' : 'btn-cream'}`}
              >
                {allDone ? 'Review the path' : completedCount === 0 ? 'Start topic 1' : `Continue with topic ${targetIndex + 1}`}
                <Icon name="arrow" />
              </Link>
              <Link href="/" className={`btn btn-line-light ${dark ? '!border-black/30' : ''}`}>
                <Icon name="plus" /> Make another path
              </Link>
            </div>
          </div>
          <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[470px] lg:block">
            <CoverArt theme={subject.color ?? 'cobalt'} />
          </div>
        </section>

        {/* Body */}
        <div className="grid gap-10 pb-20 pt-10 lg:grid-cols-[270px_1fr] lg:gap-14">
          {/* Outline rail */}
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="label">Outline</div>
            <div className="mb-2 mt-3 h-1.5 overflow-hidden rounded-full bg-sand">
              <div className="h-full rounded-full bg-ember transition-all duration-500" style={{ width: `${Math.max(progress, 4)}%` }} />
            </div>
            <div className="label mb-4 !text-[11px]">
              {completedCount} of {total} complete
            </div>
            <ol>
              {subject.topics.map((t, i) => (
                <li key={t.id} className={`border-t border-line ${i === total - 1 ? 'border-b' : ''}`}>
                  <Link
                    href={`/path/${subject.id}/${t.id}`}
                    className={`flex gap-3.5 py-3 text-[15px] leading-snug hover:text-ink ${
                      i === currentIndex ? 'font-semibold text-ink' : doneFlags[i] ? 'text-ink-3 line-through decoration-line' : 'text-ink-2'
                    }`}
                  >
                    <span className={`min-w-[22px] pt-0.5 font-mono text-[11px] ${i === currentIndex ? 'text-ember' : 'text-ink-3'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {stripNumber(t.title)}
                  </Link>
                </li>
              ))}
            </ol>
            <div className="mt-6 rounded-[24px] bg-[#F4DCEF] p-5 text-[14.5px] leading-relaxed text-[#4A2C43]">
              <div className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-ink">
                <Icon name="spark" className="h-4 w-4 text-ember" /> Why this order
              </div>
              Each topic gives you the ideas the next one needs, so nothing arrives out of nowhere.
            </div>
          </aside>

          {/* Path */}
          <div>
            <Spine>
              {subject.topics.map((topic, i) => (
                <ModuleCard
                  key={topic.id}
                  subject={subject}
                  topic={topic}
                  index={i}
                  state={stateFor(i)}
                  expanded={i === targetIndex && !allDone}
                  isLast={i === total - 1}
                />
              ))}
            </Spine>
            {allDone && (
              <div className="mt-2 rounded-card border border-line bg-surface p-6 text-center">
                <h2 className="text-2xl font-semibold tracking-[-0.03em]">You finished this path 🎉</h2>
                <p className="mt-1.5 text-[15px] text-ink-2">Pick something new to learn next.</p>
                <Link href="/" className="btn mt-4">
                  Build another path <Icon name="arrow" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
