import Link from 'next/link';
import type { Subject } from '@/types';
import { SubjectArt } from '@/components/art/SubjectArt';
import { Icon } from '@/components/Icon';

export function SubjectCard({ subject, done }: { subject: Subject; done?: number }) {
  return (
    <Link
      href={`/path/${subject.id}`}
      className="group flex flex-col rounded-card border border-line bg-surface p-2.5 shadow-soft transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="h-[150px] overflow-hidden rounded-[18px]">
        <SubjectArt art={subject.art} theme={subject.color} />
      </div>
      <div className="flex flex-1 flex-col px-2 pb-2 pt-3.5">
        <div className="label">{subject.category}</div>
        <h3 className="mt-1 text-[22px] font-semibold leading-tight tracking-[-0.03em]">{subject.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-2">{subject.description}</p>
        <div className="mt-auto flex items-center justify-between pt-4 text-[13px] text-ink-2">
          <span>
            {subject.topics.length} topics
            {done ? ` · ${done} done` : ''}
          </span>
          <span className="grid h-7 w-7 place-items-center rounded-full border border-line bg-paper transition-colors group-hover:bg-ink group-hover:text-paper">
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
