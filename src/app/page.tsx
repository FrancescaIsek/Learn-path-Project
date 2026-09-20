'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { BuildOptions, Subject } from '@/types';
import { STATIC_SUBJECTS, getBroadSuggestions } from '@/data/subjects';
import { generateLearningPath } from '@/lib/generatePath';
import { DEFAULT_OPTIONS } from '@/lib/theme';
import { useProgress } from '@/hooks/useProgress';
import { AppNav, Dock, LandingNav } from '@/components/SiteNav';
import { Composer } from '@/components/Composer';
import { CardFan } from '@/components/CardFan';
import { SubjectCard } from '@/components/SubjectCard';
import { BuildingView, BUILD_STEPS } from '@/components/BuildingView';
import { Icon } from '@/components/Icon';

type Phase = 'input' | 'building';

const PLACEHOLDERS = ['cooking basics', 'home gardening', 'how to draw', 'budgeting', 'public speaking', 'photography'];
const TRY_THESE = ['Baking bread', 'Basic French', 'Guitar basics', 'Healthy eating'];
const FAN_IDS = ['cooking-basics', 'budgeting-basics', 'home-gardening', 'learn-to-draw', 'photography-basics'];

export default function HomePage() {
  const router = useRouter();
  const { customSubjects, saveCustomSubject } = useProgress();
  const inputRef = useRef<HTMLInputElement>(null);

  const [topic, setTopic] = useState('');
  const [options, setOptions] = useState<BuildOptions>(DEFAULT_OPTIONS);
  const [phase, setPhase] = useState<Phase>('input');
  const [broad, setBroad] = useState<string[] | null>(null);
  const [placeholderIdx, setPlaceholderIdx] = useState(0);

  // building state
  const [built, setBuilt] = useState<Subject | null>(null);
  const [stage, setStage] = useState(0);
  const [revealed, setRevealed] = useState(0);

  // rotate the placeholder while the field is empty
  useEffect(() => {
    const id = setInterval(() => setPlaceholderIdx((i) => (i + 1) % PLACEHOLDERS.length), 2600);
    return () => clearInterval(id);
  }, []);

  // run the build animation, then go to the finished path
  useEffect(() => {
    if (phase !== 'building') return;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const later = (ms: number, fn: () => void) => timers.push(setTimeout(() => !cancelled && fn(), ms));

    setBuilt(null);
    setStage(0);
    setRevealed(0);

    generateLearningPath(topic, options).then((subject) => {
      if (cancelled) return;
      setBuilt(subject);
      subject.topics.forEach((_, i) => later(1500 + i * 520, () => setRevealed(i + 1)));
      const finishAt = 1500 + subject.topics.length * 520 + 500;
      later(finishAt, () => setStage(BUILD_STEPS.length));
      later(finishAt + 450, () => {
        if (subject.isCustom) saveCustomSubject(subject);
        router.push(`/path/${subject.id}`);
      });
    });

    [700, 1500, 2300, 3100].forEach((ms, i) => later(ms, () => setStage((s) => Math.max(s, i + 1))));

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const startBuild = (force = false) => {
    const suggestions = getBroadSuggestions(topic);
    if (!force && suggestions) {
      setBroad(suggestions);
      return;
    }
    setBroad(null);
    setPhase('building');
  };

  const pick = (name: string) => {
    setTopic(name);
    setBroad(null);
    inputRef.current?.focus();
    document.getElementById('start')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  if (phase === 'building') {
    return (
      <div className="relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute left-1/2 top-[-300px] h-[760px] w-[1200px] -translate-x-1/2 opacity-60" />
        <AppNav center={<Dock topic={topic.trim()} options={options} building />} />
        <BuildingView
          topic={topic.trim()}
          options={options}
          subject={built}
          stage={stage}
          revealed={revealed}
          onCancel={() => setPhase('input')}
        />
      </div>
    );
  }

  const fanSubjects = FAN_IDS.map((id) => STATIC_SUBJECTS.find((s) => s.id === id)).filter(
    (s): s is Subject => Boolean(s)
  );

  return (
    <div>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute left-1/2 top-[-220px] h-[760px] w-[1200px] -translate-x-1/2" />
        <div className="bg-grid pointer-events-none absolute inset-0" />

        <LandingNav />

        <section className="relative z-10 px-4 pt-12 text-center sm:pt-14">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface py-1.5 pl-1.5 pr-4 text-sm text-ink-2 shadow-[0_6px_16px_-10px_rgba(60,40,20,.3)]">
            <b className="rounded-full bg-ink px-3 py-1 text-[12.5px] font-semibold text-paper">Beta</b>
            Any subject. Built in the right order.
          </div>

          <h1 className="mx-auto mt-6 max-w-[1000px] text-[44px] font-bold leading-[1.02] tracking-[-0.05em] sm:text-[68px] lg:text-[88px]">
            Learn anything,
            <br />
            <span className="relative inline-block bg-ember-tint px-[0.12em] text-ember">
              in the right order.
              {/* selection handles */}
              <span aria-hidden="true" className="absolute -bottom-[7px] -top-[7px] left-0 w-[1.5px] bg-ember" />
              <span aria-hidden="true" className="absolute -bottom-[7px] -top-[7px] right-0 w-[1.5px] bg-ember" />
              {(['-top-2.5 -left-1', '-top-2.5 -right-1', '-bottom-2.5 -left-1', '-bottom-2.5 -right-1'] as const).map((pos) => (
                <i key={pos} aria-hidden="true" className={`absolute h-[7px] w-[7px] border-[1.5px] border-ember bg-paper ${pos}`} />
              ))}
              <span
                aria-hidden="true"
                className="absolute -bottom-14 -right-24 hidden items-start text-ember xl:flex"
              >
                <svg viewBox="0 0 16 16" className="-mr-0.5 h-5 w-5" fill="currentColor">
                  <path d="M2 1l11 5.5-4.8 1.5L6.5 13z" />
                </svg>
                <span className="mt-3 rounded-[999px_999px_999px_4px] bg-ember px-2.5 py-1 text-[13px] font-semibold tracking-normal text-white">
                  LearnPath
                </span>
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-[580px] text-lg leading-relaxed text-ink-2 sm:text-[19px]">
            <span className="mr-1 inline-flex items-center gap-1.5 rounded-[10px] border border-line bg-surface px-2.5 py-0.5 text-base font-semibold text-ink">
              <Icon name="pen" className="h-3.5 w-3.5" /> Type a topic
            </span>{' '}
            and LearnPath builds a step-by-step course around it. No overwhelm, no forty open tabs.
          </p>

          <div className="mt-11">
            <Composer
              value={topic}
              onChange={(v) => {
                setTopic(v);
                setBroad(null);
              }}
              placeholder={PLACEHOLDERS[placeholderIdx]}
              options={options}
              onOptionsChange={setOptions}
              onSubmit={() => startBuild()}
              inputRef={inputRef}
            />

            {broad ? (
              <div className="mx-auto mt-6 max-w-[820px] rounded-card border border-line bg-surface p-6 text-left animate-fade-up">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-ember-tint text-ember">
                    <Icon name="spark" className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="text-[22px] font-semibold leading-tight tracking-[-0.03em]">
                      &ldquo;{topic.trim()}&rdquo; is a big neighbourhood.
                    </h2>
                    <p className="mt-1 text-[15px] text-ink-2">Pick a corner and we will build a much sharper path.</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {broad.map((s) => (
                    <button key={s} type="button" onClick={() => pick(s)} className="chip hover:border-ink-3">
                      {s}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => startBuild(true)}
                  className="btn btn-line btn-sm mt-4"
                >
                  Try &ldquo;{topic.trim()}&rdquo; anyway
                </button>
              </div>
            ) : (
              <p className="mt-5 text-sm text-ink-2">
                Or try{' '}
                {TRY_THESE.map((t, i) => (
                  <span key={t}>
                    <button
                      type="button"
                      onClick={() => pick(t)}
                      className="mx-1 text-ink underline decoration-line underline-offset-4 hover:decoration-ink"
                    >
                      {t}
                    </button>
                    {i < TRY_THESE.length - 1 && '·'}
                  </span>
                ))}
              </p>
            )}
          </div>
        </section>

        <CardFan subjects={fanSubjects} onPick={pick} />
      </div>

      {/* Starter + saved paths */}
      <div className="mx-auto max-w-[1136px] px-4 pb-16 pt-14 sm:px-8">
        {customSubjects.length > 0 && (
          <section className="mb-14">
            <div className="mb-5 flex items-baseline justify-between">
              <h2 className="text-[28px] font-bold tracking-[-0.04em]">Your paths</h2>
              <span className="label">{customSubjects.length} saved</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {customSubjects.map((s) => (
                <SubjectCard key={s.id} subject={s} />
              ))}
            </div>
          </section>
        )}

        <section id="starter">
          <div className="mb-5 flex items-baseline justify-between">
            <h2 className="text-[28px] font-bold tracking-[-0.04em]">Starter paths</h2>
            <span className="label">{STATIC_SUBJECTS.length} ready to go</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STATIC_SUBJECTS.map((s) => (
              <SubjectCard key={s.id} subject={s} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
