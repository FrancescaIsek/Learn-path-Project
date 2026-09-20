import type { ArtKey, ThemeColor } from '@/types';
import { PALETTE as P, THEMES } from '@/lib/theme';

const SPARK =
  'M12 2C12.6 7.5 16.5 11.4 22 12 16.5 12.6 12.6 16.5 12 22 11.4 16.5 7.5 12.6 2 12 7.5 11.4 11.4 7.5 12 2Z';

function Spark({ x, y, size, fill }: { x: number; y: number; size: number; fill: string }) {
  return <path d={SPARK} fill={fill} transform={`translate(${x} ${y}) scale(${size / 24})`} />;
}

/** Flat geometric illustration for a subject card (200 x 150). */
export function SubjectArt({ art = 'generic', theme = 'cobalt' }: { art?: ArtKey; theme?: ThemeColor }) {
  const t = THEMES[theme];
  return (
    <svg viewBox="0 0 200 150" preserveAspectRatio="xMidYMid slice" className="block h-full w-full" aria-hidden="true">
      <rect width="200" height="150" fill={t.bg} />
      {art === 'cooking' && (
        <>
          <circle cx="88" cy="78" r="46" fill={P.ink} />
          <circle cx="88" cy="78" r="36" fill="#34302B" />
          <circle cx="88" cy="78" r="24" fill={P.surface} />
          <circle cx="93" cy="74" r="10" fill={P.marigold} />
          <rect x="128" y="72" width="58" height="13" rx="6.5" fill={P.ink} />
          <Spark x={140} y={22} size={22} fill={P.surface} />
          <Spark x={40} y={16} size={14} fill={P.surface} />
        </>
      )}
      {art === 'budget' && (
        <>
          <rect x="34" y="88" width="30" height="42" rx="7" fill={P.surface} />
          <rect x="76" y="64" width="30" height="66" rx="7" fill={P.blush} />
          <rect x="118" y="38" width="30" height="92" rx="7" fill={P.marigold} />
          <rect x="18" y="130" width="164" height="4" rx="2" fill={P.ink} />
          <circle cx="44" cy="40" r="17" fill={P.tangerine} />
          <circle cx="44" cy="40" r="8" fill="none" stroke={P.ink} strokeWidth="3" />
        </>
      )}
      {art === 'garden' && (
        <>
          <circle cx="160" cy="34" r="16" fill={P.marigold} />
          <path d="M90 96V56" stroke={P.surface} strokeWidth="4" strokeLinecap="round" />
          <path d="M90 74C66 72 60 54 64 42 84 42 92 58 90 74Z" fill={P.marigold} />
          <path d="M90 64C112 62 122 46 118 34 98 34 88 48 90 64Z" fill={P.surface} />
          <rect x="60" y="94" width="60" height="10" rx="5" fill={P.tangerine} />
          <path d="M66 104h48l-7 30H73z" fill={P.tangerine} />
          <rect x="18" y="134" width="164" height="4" rx="2" fill={P.ink} />
        </>
      )}
      {art === 'drawing' && (
        <>
          <circle cx="36" cy="34" r="14" fill={P.cobalt} />
          <g transform="rotate(-32 100 70)">
            <rect x="34" y="57" width="108" height="26" rx="4" fill={P.marigold} />
            <rect x="34" y="57" width="18" height="26" rx="4" fill={P.ember} />
            <path d="M142 57L178 70L142 83Z" fill={P.surface} />
            <path d="M166 65.6L178 70L166 74.4Z" fill={P.ink} />
          </g>
          <path d="M20 128C50 100 70 140 100 118S150 110 180 130" fill="none" stroke={P.ink} strokeWidth="4" strokeLinecap="round" />
        </>
      )}
      {art === 'speaking' && (
        <>
          <rect x="34" y="26" width="116" height="74" rx="22" fill={P.surface} />
          <path d="M62 98L52 128L90 100Z" fill={P.surface} />
          <rect x="52" y="46" width="78" height="8" rx="4" fill={P.ink} />
          <rect x="52" y="62" width="58" height="8" rx="4" fill={P.ink} />
          <rect x="52" y="78" width="68" height="8" rx="4" fill={P.ink} />
          <circle cx="166" cy="58" r="14" fill={P.cobalt} />
          <circle cx="164" cy="112" r="12" fill={P.tangerine} />
          <Spark x={150} y={16} size={20} fill={P.ink} />
        </>
      )}
      {art === 'photo' && (
        <>
          <circle cx="100" cy="78" r="52" fill={P.marigold} />
          <circle cx="100" cy="78" r="36" fill={P.cobalt} />
          <circle cx="100" cy="78" r="16" fill={P.surface} />
          <circle cx="160" cy="30" r="11" fill={P.blush} />
          <rect x="18" y="18" width="36" height="12" rx="6" fill={P.surface} />
        </>
      )}
      {art === 'generic' && (
        <>
          <path d="M200 150V78A72 72 0 0 0 128 150Z" fill={t.a} />
          <circle cx="76" cy="70" r="40" fill={t.b} />
          <circle cx="150" cy="38" r="12" fill={t.c} />
          <path d="M0 150a46 46 0 0 1 92 0Z" fill={P.ink} />
          <Spark x={20} y={16} size={24} fill={P.surface} />
        </>
      )}
    </svg>
  );
}
