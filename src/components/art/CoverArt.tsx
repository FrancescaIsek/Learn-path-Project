import type { ThemeColor } from '@/types';
import { PALETTE as P, THEMES } from '@/lib/theme';

const SPARK =
  'M12 2C12.6 7.5 16.5 11.4 22 12 16.5 12.6 12.6 16.5 12 22 11.4 16.5 7.5 12.6 2 12 7.5 11.4 11.4 7.5 12 2Z';

/** Big flat illustration for the path cover. Colours come from the path's theme. */
export function CoverArt({ theme }: { theme: ThemeColor }) {
  const t = THEMES[theme];
  const spark = t.text === 'light' ? P.paper : P.ink;
  return (
    <svg viewBox="0 0 470 470" preserveAspectRatio="xMaxYMax slice" className="h-full w-full" aria-hidden="true">
      <path d="M470 470V220A250 250 0 0 0 220 470Z" fill={t.a} />
      <circle cx="300" cy="150" r="78" fill={t.b} />
      <circle cx="300" cy="150" r="120" fill="none" stroke={spark} strokeOpacity=".55" strokeWidth="2" strokeDasharray="4 9" />
      <circle cx="187" cy="109" r="11" fill={t.c} />
      <path d="M330 470a56 56 0 0 1 112 0z" fill={P.ink} />
      <circle cx="60" cy="230" r="16" fill={t.b} />
      <circle cx="150" cy="340" r="58" fill={t.c} />
      <path d="M40 440C110 400 130 470 210 430S330 340 300 260" fill="none" stroke={P.ink} strokeWidth="6" strokeLinecap="round" strokeDasharray="2 14" />
      <path d={SPARK} fill={spark} transform="translate(40 56) scale(1.42)" />
      <path d={SPARK} fill={spark} transform="translate(398 40)" />
      <path d={SPARK} fill={spark} transform="translate(250 392) scale(.92)" />
      <circle cx="110" cy="150" r="3" fill={spark} />
      <circle cx="430" cy="250" r="3" fill={spark} />
      <circle cx="24" cy="400" r="3" fill={spark} />
    </svg>
  );
}
