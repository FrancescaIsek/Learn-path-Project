import type { ReactNode } from 'react';

export type IconName =
  | 'spark'
  | 'arrow'
  | 'arrow-left'
  | 'down'
  | 'check'
  | 'book'
  | 'pen'
  | 'target'
  | 'clock'
  | 'plus'
  | 'flag'
  | 'level'
  | 'layers'
  | 'external';

const STROKES: Record<Exclude<IconName, 'spark'>, ReactNode> = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  'arrow-left': <path d="M19 12H5M11 6l-6 6 6 6" />,
  down: <path d="M6 9l6 6 6-6" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  book: (
    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5zM20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5a1.5 1.5 0 0 1 1.5 1.5z" />
  ),
  pen: <path d="M4 20l1-4L16.5 4.5a2 2 0 0 1 3 3L8 19zM14 7l3 3" />,
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.2" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  flag: <path d="M6 21V4M6 5h11l-2 4 2 4H6" />,
  level: <path d="M5 19v-4M12 19V10M19 19V5" />,
  layers: <path d="M12 4l9 5-9 5-9-5zM3 14l9 5 9-5" />,
  external: <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />,
};

export function Icon({ name, className = 'h-4 w-4' }: { name: IconName; className?: string }) {
  if (name === 'spark') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
        <path d="M12 2C12.6 7.5 16.5 11.4 22 12 16.5 12.6 12.6 16.5 12 22 11.4 16.5 7.5 12.6 2 12 7.5 11.4 11.4 7.5 12 2Z" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {STROKES[name]}
    </svg>
  );
}
