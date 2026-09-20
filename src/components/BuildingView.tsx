import type { BuildOptions, Subject } from '@/types';
import { Icon } from '@/components/Icon';
import { Node, Spine } from '@/components/Node';
import { formatMinutes, stripNumber, topicCountForDepth, topicMinutes } from '@/lib/theme';

export const BUILD_STEPS = [
  { title: 'Understanding your goal', detail: (o: BuildOptions) => `${o.level} · ${o.hoursPerWeek} hrs a week` },
  { title: 'Mapping the subject', detail: () => 'Finding the key ideas and common beginner mistakes' },
  { title: 'Ordering by what comes first', detail: () => 'Sequencing topics so each one earns the next' },
  { title: 'Writing your notes', detail: () => 'Short notes, key points and resources' },
  { title: 'Final check', detail: () => 'Length, pacing and gaps' },
];

interface Props {
  topic: string;
  options: BuildOptions;
  subject: Subject | null;
  /** 0-4 = which step is running. 5 = all done. */
  stage: number;
  /** How many topic cards have "landed" in the preview. */
  revealed: number;
  onCancel: () => void;
}

export function BuildingView({ topic, options, subject, stage, revealed, onCancel }: Props) {
  const total = subject ? subject.topics.length : topicCountForDepth(options.depth);

  return (
    <div className="relative z-10 mx-auto grid max-w-[1136px] gap-10 px-4 pb-20 pt-6 sm:px-8 lg:grid-cols-[400px_1fr] lg:gap-14 lg:pt-10">
      <div>
        <div className="label">Building your path</div>
        <h1 className="mb-9 mt-3 text-[38px] font-bold leading-[1.05] tracking-[-0.045em] sm:text-[52px]">
          Building your <span className="text-ember">{topic}</span> path
        </h1>

        <ol>
          {BUILD_STEPS.map((step, i) => {
            const status = i < stage ? 'done' : i === stage ? 'active' : 'pending';
            return (
              <li key={step.title} className="relative grid grid-cols-[28px_1fr] gap-4 pb-7 last:pb-0">
                {i < BUILD_STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0.5 left-[13px] top-[30px] w-0.5 ${status === 'done' ? 'bg-ink' : 'bg-line'}`}
                  />
                )}
                <span
                  className={`grid h-7 w-7 place-items-center rounded-full border-2 ${
                    status === 'done'
                      ? 'border-ink bg-ink text-paper'
                      : status === 'active'
                        ? 'animate-pulse-ring border-ember bg-paper'
                        : 'border-line bg-paper'
                  }`}
                >
                  {status === 'done' && <Icon name="check" className="h-3.5 w-3.5" />}
                  {status === 'active' && <span className="h-2.5 w-2.5 rounded-full bg-ember" />}
                </span>
                <div>
                  <div className={`text-[17px] leading-snug ${status === 'pending' ? 'font-medium text-ink-3' : 'font-semibold'}`}>
                    {step.title}
                  </div>
                  <div className="mt-0.5 text-sm text-ink-3">{step.detail(options)}</div>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-8 flex items-center gap-4 text-sm text-ink-3">
          <span className="inline-flex items-center gap-2">
            <Icon name="clock" /> Usually a few seconds
          </span>
          <button type="button" onClick={onCancel} className="underline decoration-line underline-offset-4 hover:text-ink">
            Cancel
          </button>
        </div>
      </div>

      <div className="rounded-[34px] bg-sand p-5 sm:p-7">
        <div className="mb-6 flex justify-between">
          <span className="label">Path preview</span>
          <span className="label">
            {Math.min(revealed, total)} of {total} topics ready
          </span>
        </div>
        <Spine dashed>
          {Array.from({ length: total }).map((_, i) => {
            const topicData = subject?.topics[i];
            if (topicData && i < revealed) {
              return (
                <div key={i} className="relative mb-4 animate-fade-up rounded-card border border-line bg-surface px-6 py-5">
                  <Node state="built" label={String(i + 1).padStart(2, '0')} />
                  <div className="label">Topic {String(i + 1).padStart(2, '0')}</div>
                  <h3 className="mb-2 mt-1.5 text-[24px] font-semibold leading-tight tracking-[-0.035em]">
                    {stripNumber(topicData.title)}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-ink-2">{topicData.shortDescription}</p>
                  <div className="mt-3.5 flex gap-4 text-[13.5px] text-ink-3">
                    <span className="inline-flex items-center gap-1.5">
                      <Icon name="clock" /> {formatMinutes(topicMinutes(topicData))}
                    </span>
                  </div>
                </div>
              );
            }
            const writingNow = i === revealed;
            return (
              <div
                key={i}
                className={`relative mb-4 rounded-card px-6 py-5 ${
                  writingNow ? 'border border-line bg-surface' : 'border-[1.5px] border-dashed border-[#CDBFA6]'
                }`}
              >
                <Node state={writingNow ? 'now' : 'pending'} label={String(i + 1).padStart(2, '0')} />
                {writingNow && (
                  <div className="mb-3 inline-flex items-center gap-1.5 font-mono text-[11.5px] uppercase tracking-[0.08em] text-ember">
                    <span className="h-1.5 w-1.5 animate-blink rounded-full bg-ember" />
                    Writing topic {String(i + 1).padStart(2, '0')}
                  </div>
                )}
                <div className={`skeleton mb-3 h-6 ${writingNow ? 'w-3/5' : 'w-2/5 opacity-50'}`} />
                <div className={`skeleton h-3 ${writingNow ? 'w-11/12' : 'w-4/5 opacity-40'}`} />
                {writingNow && <div className="skeleton mt-2 h-3 w-2/3" />}
              </div>
            );
          })}
        </Spine>
      </div>
    </div>
  );
}
