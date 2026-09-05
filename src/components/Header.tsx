import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-blue-700 transition-colors">
            L
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">
            Learn<span className="text-blue-600">Path</span>
          </span>
        </Link>
        <span className="text-xs sm:text-sm text-slate-500 font-medium hidden xs:inline-block">
          Structured Learning Paths
        </span>
      </div>
    </header>
  );
}
