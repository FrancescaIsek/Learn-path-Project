import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 text-xl font-semibold tracking-[-0.02em]">
      <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
        <circle cx="15" cy="15" r="15" fill="#1C1815" />
        <path d="M8 20c3.5 0 3-10 7-10s3.5 10 7 10" stroke="#F6F0E4" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="8" cy="20" r="2.2" fill="#E8452C" />
        <circle cx="22" cy="20" r="2.2" fill="#F7B733" />
      </svg>
      LearnPath
    </Link>
  );
}
