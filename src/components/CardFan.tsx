'use client';

import type { Subject } from '@/types';
import { SubjectArt } from '@/components/art/SubjectArt';
import { Icon } from '@/components/Icon';

const SLOTS = [
  { left: 43, y: 46, rot: -13 },
  { left: 268, y: 14, rot: -6.5 },
  { left: 493, y: 0, rot: 0 },
  { left: 718, y: 14, rot: 6.5 },
  { left: 943, y: 46, rot: 13 },
];

/** Decorative fan of starter paths under the composer. Picking one fills the sentence. Desktop only. */
export function CardFan({ subjects, onPick }: { subjects: Subject[]; onPick: (name: string) => void }) {
  return (
    <div className="relative mt-10 hidden h-[250px] overflow-hidden md:block" aria-label="Starter paths">
      <div className="absolute left-1/2 h-full w-[1200px] -translate-x-1/2">
        {subjects.slice(0, 5).map((s, i) => {
          const slot = SLOTS[i];
          return (
            <div
              key={s.id}
              className="absolute top-10 w-[214px]"
              style={{ left: slot.left, transform: `translateY(${slot.y}px) rotate(${slot.rot}deg)` }}
            >
              <button
                type="button"
                onClick={() => onPick(s.name)}
                className="block w-full rounded-card border border-line bg-surface p-2.5 text-left shadow-soft transition-transform duration-200 hover:-translate-y-2"
              >
                <div className="h-[150px] overflow-hidden rounded-[18px]">
                  <SubjectArt art={s.art} theme={s.color} />
                </div>
                <div className="px-1.5 pb-1.5 pt-3">
                  <div className="label text-[10px]">{s.category}</div>
                  <div className="mt-1 text-[21px] font-semibold leading-tight tracking-[-0.03em]">{s.name}</div>
                  <div className="mt-2 flex items-center justify-between text-[13px] text-ink-2">
                    <span>{s.topics.length} topics</span>
                    <span className="grid h-7 w-7 place-items-center rounded-full border border-line bg-paper">
                      <Icon name="arrow" className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </button>
            </div>
          );
        })}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-paper/90 to-transparent" />
    </div>
  );
}
