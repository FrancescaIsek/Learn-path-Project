import Link from 'next/link';
import type { ReactNode } from 'react';
import type { BuildOptions } from '@/types';
import { Icon } from '@/components/Icon';
import { Logo } from '@/components/Logo';

/** Floating pill navigation used on the landing page. */
export function LandingNav() {
  return (
    <nav className="relative z-10 mx-auto mt-6 flex h-[60px] w-[calc(100%-32px)] max-w-[780px] items-center justify-between rounded-full border border-line bg-surface/85 pl-5 pr-2 shadow-nav backdrop-blur">
      <Logo />
      <div className="hidden gap-7 text-[15px] text-ink-2 md:flex">
        <a href="#starter" className="hover:text-ink">Starter paths</a>
        <Link href="/paths" className="hover:text-ink">My paths</Link>
      </div>
      <a href="#start" className="btn btn-sm">
        Start learning <Icon name="arrow" />
      </a>
    </nav>
  );
}

/** Slim app header. `center` is where the dock capsule goes. */
export function AppNav({ center }: { center?: ReactNode }) {
  return (
    <header className="relative z-10 mx-auto grid max-w-[1136px] grid-cols-[1fr_auto] items-center gap-x-3 gap-y-3 px-4 py-5 sm:px-8 lg:grid-cols-[1fr_620px_1fr]">
      <Logo />
      {center && <div className="order-3 col-span-2 min-w-0 w-full lg:order-none lg:col-span-1">{center}</div>}
      <div className="flex items-center justify-end gap-5 text-[15px] text-ink-2 lg:col-start-3">
        <Link href="/paths" className="hover:text-ink">My paths</Link>
        <Link href="/" className="btn btn-sm hidden sm:inline-flex">
          <Icon name="plus" /> New path
        </Link>
      </div>
    </header>
  );
}

/** The composer, shrunk into a capsule that lives in the header on build + path screens. */
export function Dock({
  topic,
  options,
  building = false,
}: {
  topic: string;
  options: BuildOptions;
  building?: boolean;
}) {
  return (
    <div className={`w-full max-w-full rounded-full p-[2px] shadow-[0_14px_30px_-18px_rgba(120,70,20,.45)] ${building ? 'edge-live animate-slide' : 'edge'}`}>
      <div className="flex items-center gap-3 rounded-full bg-surface py-2 pl-4 pr-2 text-base">
        <Icon name="spark" className="h-[18px] w-[18px] shrink-0 text-ember" />
        <span className="text-ink-3">Learn</span>
        <span className="min-w-0 truncate font-semibold tracking-[-0.02em]">{topic}</span>
        <span className="chip chip-sm hidden sm:inline-flex">{options.level}</span>
        <span className="chip chip-sm hidden sm:inline-flex">{options.hoursPerWeek} hrs / wk</span>
        <span className="flex-1" />
        {building ? (
          <span className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper">
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Building…
          </span>
        ) : (
          <Link
            href="/"
            aria-label="Start a different path"
            className="grid h-9 w-9 place-items-center rounded-full border border-line bg-paper hover:border-ink-3"
          >
            <Icon name="pen" />
          </Link>
        )}
      </div>
    </div>
  );
}
