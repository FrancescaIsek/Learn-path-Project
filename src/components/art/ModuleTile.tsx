import { PALETTE as P } from '@/lib/theme';

const SPARK =
  'M12 2C12.6 7.5 16.5 11.4 22 12 16.5 12.6 12.6 16.5 12 22 11.4 16.5 7.5 12.6 2 12 7.5 11.4 11.4 7.5 12 2Z';

/** Small 84px flat tile shown on the right of a topic card. Cycles through 4 looks; the last topic gets a flag. */
export function ModuleTile({ index, isLast }: { index: number; isLast?: boolean }) {
  const variant = isLast ? 4 : index % 4;
  return (
    <svg viewBox="0 0 84 84" className="block h-full w-full" aria-hidden="true">
      {variant === 0 && (
        <>
          <rect width="84" height="84" fill={P.marigold} />
          <rect x="14" y="30" width="56" height="24" rx="8" fill={P.ink} />
          <circle cx="56" cy="42" r="10" fill={P.cobalt} />
          <rect x="20" y="58" width="30" height="6" rx="3" fill={P.ink} />
        </>
      )}
      {variant === 1 && (
        <>
          <rect width="84" height="84" fill={P.blush} />
          <circle cx="12" cy="42" r="22" fill={P.marigold} />
          <circle cx="12" cy="42" r="36" fill="none" stroke={P.ink} strokeWidth="2" />
          <circle cx="12" cy="42" r="56" fill="none" stroke={P.ink} strokeWidth="2" />
          <circle cx="48" cy="42" r="6" fill={P.cobalt} />
          <circle cx="55" cy="10" r="7" fill={P.ember} />
        </>
      )}
      {variant === 2 && (
        <>
          <rect width="84" height="84" fill={P.ink} />
          <path d={SPARK} fill={P.marigold} transform="translate(12 12) scale(2.5)" />
          <path d={SPARK} fill={P.surface} transform="translate(60 10) scale(.58)" />
          <path d={SPARK} fill={P.surface} transform="translate(8 60) scale(.5)" />
        </>
      )}
      {variant === 3 && (
        <>
          <rect width="84" height="84" fill={P.pine} />
          <circle cx="34" cy="42" r="20" fill={P.surface} />
          <circle cx="52" cy="42" r="20" fill={P.marigold} style={{ mixBlendMode: 'multiply' }} />
        </>
      )}
      {variant === 4 && (
        <>
          <rect width="84" height="84" fill={P.tangerine} />
          <rect x="26" y="14" width="5" height="58" rx="2" fill={P.ink} />
          <path d="M31 16h32l-8 14 8 14H31z" fill={P.surface} />
          <circle cx="28" cy="72" r="6" fill={P.ink} />
        </>
      )}
    </svg>
  );
}
