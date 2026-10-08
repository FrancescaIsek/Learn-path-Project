'use client';

import Link from 'next/link';
import { getSubjectById, isStaticId } from '@/data/subjects';
import { useProgress } from '@/hooks/useProgress';
import { AppNav } from '@/components/SiteNav';
import { Icon } from '@/components/Icon';
import { formatMinutes, stripNumber, topicMinutes } from '@/lib/theme';

interface PageProps {
  params: { subjectId: string; topicId: string };
}

function Section({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-card border border-line bg-surface p-5 sm:p-8">
      <div className="mb-5 flex items-center gap-3 border-b border-line pb-4">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-sand font-mono text-xs font-bold">{n}</span>
        <h2 className="text-xl font-semibold tracking-[-0.03em]">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function TopicPage({ params }: PageProps) {
  const { subjectId, topicId } = params;
  const { customSubjects, isCompleted, toggleCompletion, isLoaded } = useProgress();

  if (!isLoaded && !isStaticId(subjectId)) {
    return (
      <div>
        <AppNav />
        <div className="mx-auto max-w-[760px] px-4 sm:px-8">
          <div className="skeleton h-56 w-full !rounded-card" />
        </div>
      </div>
    );
  }

  const subject = getSubjectById(subjectId, customSubjects);
  const topic = subject?.topics.find((t) => t.id === topicId);

  if (!subject || !topic) {
    return (
      <div>
        <AppNav />
        <div className="mx-auto max-w-[560px] px-4 py-20 text-center">
          <h1 className="text-3xl font-bold tracking-[-0.04em]">Topic not found</h1>
          <p className="mt-2 text-ink-2">We could not find that topic.</p>
          <Link href={`/path/${subjectId}`} className="btn mt-6">
            <Icon name="arrow-left" /> Back to the path
          </Link>
        </div>
      </div>
    );
  }

  const topicKey = `${subject.id}/${topic.id}`;
  const done = isLoaded && isCompleted(topicKey);
  const currentIndex = subject.topics.findIndex((t) => t.id === topic.id);
  const nextTopic = subject.topics[currentIndex + 1];

  return (
    <div>
      <AppNav />
      <div className="mx-auto max-w-[760px] space-y-5 px-4 pb-20 sm:px-8">
        <div className="flex items-center justify-between">
          <Link href={`/path/${subject.id}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-2 hover:text-ink">
            <Icon name="arrow-left" /> {subject.name}
          </Link>
          <span className="label">
            Topic {String(currentIndex + 1).padStart(2, '0')} of {String(subject.topics.length).padStart(2, '0')}
          </span>
        </div>

        {/* Header */}
        <div className="rounded-cover bg-sand p-5 sm:p-9">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="label">{subject.name}</span>
            <button
              id="toggle-completion"
              onClick={() => toggleCompletion(topicKey)}
              className={`btn btn-sm ${done ? '!border-pine !bg-pine' : ''}`}
            >
              <Icon name="check" /> {done ? 'Marked complete' : 'Mark as complete'}
            </button>
          </div>
          <h1 className="mb-3 mt-5 text-[28px] sm:text-[48px] font-bold leading-[1.05] tracking-[-0.045em]">
            {stripNumber(topic.title)}
          </h1>
          <p className="max-w-[560px] text-[17px] leading-relaxed text-ink-2">{topic.shortDescription}</p>
          <div className="mt-5 inline-flex items-center gap-1.5 text-sm text-ink-3">
            <Icon name="clock" /> About {formatMinutes(topicMinutes(topic))}
          </div>
        </div>

        <Section n={1} title="Learning notes">
          <div className="space-y-4 text-[16.5px] leading-[1.7] text-ink">
            {topic.notes.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Section>

        <Section n={2} title="3 key things to understand">
          <ul className="space-y-3">
            {topic.keyPoints.slice(0, 3).map((point, i) => (
              <li key={i} className="flex items-start gap-3.5 rounded-2xl border border-line bg-paper p-4">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink font-mono text-xs font-bold text-paper">
                  {i + 1}
                </span>
                <span className="min-w-0 text-[15.5px] font-medium leading-snug">{point}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section n={3} title="Recommended resources">
          <div className="grid min-w-0 gap-3">
            {topic.resources.map((res, i) => (
              <a
                key={i}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 max-w-full items-center justify-between gap-4 rounded-2xl border border-line bg-paper p-4 transition-colors hover:border-ink-3"
              >
                <div className="min-w-0">
                  <span className="label">{res.type || 'Resource'}</span>
                  <div className="mt-1 font-semibold tracking-[-0.02em]">{res.title}</div>
                  <div className="mt-0.5 truncate text-[13px] text-ink-3">{res.url}</div>
                </div>
                <Icon name="external" className="h-5 w-5 shrink-0 text-ink-2 transition-transform group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </Section>

        <div className="flex flex-col items-stretch justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
          <Link href={`/path/${subject.id}`} className="btn btn-line">
            <Icon name="arrow-left" /> Back to path
          </Link>
          {nextTopic ? (
            <Link href={`/path/${subject.id}/${nextTopic.id}`} className="btn">
              Next: {stripNumber(nextTopic.title)} <Icon name="arrow" />
            </Link>
          ) : (
            <Link href={`/path/${subject.id}`} className="btn !border-pine !bg-pine">
              Finish path <Icon name="arrow" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
