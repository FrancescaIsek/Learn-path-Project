import Link from 'next/link';
import type { Subject, Topic } from '@/types';
import { Icon } from '@/components/Icon';
import { ModuleTile } from '@/components/art/ModuleTile';
import { Node, NodeState } from '@/components/Node';
import { formatMinutes, stripNumber, topicMinutes } from '@/lib/theme';

interface Props {
  subject: Subject;
  topic: Topic;
  index: number;
  state: NodeState;
  expanded: boolean;
  isLast: boolean;
}

/** One topic on the path. The current topic is expanded; the rest are quiet cards. */
export function ModuleCard({ subject, topic, index, state, expanded, isLast }: Props) {
  const href = `/path/${subject.id}/${topic.id}`;
  const label = String(index + 1).padStart(2, '0');
  const title = stripNumber(topic.title);
  const done = state === 'done';

  if (expanded) {
    return (
      <div className="relative mb-4 rounded-card border border-line bg-surface p-6 pb-5 shadow-[0_1px_0_#fff_inset]">
        <Node state={state} label={label} isFlag={isLast} />
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="label">Topic {label}</div>
            <h3 className="mb-2 mt-1.5 text-[26px] font-semibold leading-tight tracking-[-0.035em] sm:text-[30px]">{title}</h3>
            <p className="text-[15px] leading-relaxed text-ink-2">{topic.shortDescription}</p>
          </div>
          <span className="shrink-0 rounded-full bg-ember px-3 py-1.5 text-[12.5px] font-semibold text-white">Start here</span>
        </div>

        <div className="label mt-6">What you will learn</div>
        <ul className="mt-2">
          {topic.keyPoints.slice(0, 3).map((point, i) => (
            <li key={i} className="grid grid-cols-[38px_1fr] items-center gap-3.5 border-t border-line py-3.5">
              <span className="grid h-[38px] w-[38px] place-items-center rounded-[13px] bg-sand font-mono text-[13px] font-bold">
                {i + 1}
              </span>
              <span className="text-[15.5px] leading-snug">{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-1 flex items-center justify-between border-t border-line pt-4">
          <span className="label">
            {topic.notes.length} short notes · {formatMinutes(topicMinutes(topic))}
          </span>
          <Link href={href} className="btn btn-sm">
            Begin topic <Icon name="arrow" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className="group relative mb-4 grid grid-cols-[1fr_84px] items-center gap-5 rounded-card border border-line bg-surface px-6 py-5 transition-transform duration-200 hover:-translate-y-0.5"
    >
      <Node state={state} label={label} isFlag={isLast} />
      <div>
        <div className="label">
          Topic {label}
          {done && <span className="ml-2 text-ink">· Completed</span>}
        </div>
        <h3
          className={`mb-1.5 mt-1.5 text-[24px] font-semibold leading-tight tracking-[-0.035em] sm:text-[26px] ${
            done ? 'text-ink-2' : ''
          }`}
        >
          {title}
        </h3>
        <p className="text-[15px] leading-relaxed text-ink-2">{topic.shortDescription}</p>
        <div className="mt-3.5 flex gap-4 text-[13.5px] text-ink-3">
          <span className="inline-flex items-center gap-1.5">
            <Icon name="book" /> {topic.notes.length} notes
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Icon name="clock" /> {formatMinutes(topicMinutes(topic))}
          </span>
        </div>
      </div>
      <div className="h-[84px] w-[84px] overflow-hidden rounded-tile">
        <ModuleTile index={index} isLast={isLast} />
      </div>
    </Link>
  );
}
