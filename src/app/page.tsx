'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { STATIC_SUBJECTS } from '@/data/subjects';
import { useProgress } from '@/hooks/useProgress';

export default function HomePage() {
  const [customSubjectInput, setCustomSubjectInput] = useState('');
  const router = useRouter();
  const { customSubjects, addCustomSubject } = useProgress();

  const handleCreateCustomPath = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customSubjectInput.trim()) return;

    const created = addCustomSubject(customSubjectInput);
    setCustomSubjectInput('');
    router.push(`/path/${created.id}`);
  };

  // Combine static subjects with any saved custom subjects
  const allSubjects = [
    ...STATIC_SUBJECTS,
    ...customSubjects.filter(
      (cs) => !STATIC_SUBJECTS.some((ss) => ss.id === cs.id)
    ),
  ];

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="text-center space-y-4 max-w-2xl mx-auto pt-4 pb-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
          Structured Learning MVP
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Turn any subject into a simple, structured learning path.
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Stop getting overwhelmed by endless content. Select a subject below or enter your own to get a step-by-step beginner guide.
        </p>
      </section>

      {/* Custom Subject Input Form */}
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <h2 className="text-lg font-bold text-slate-900 mb-2">
          Want to learn something else?
        </h2>
        <p className="text-slate-500 text-sm mb-4">
          Enter any subject (e.g. Astronomy, Photography, Microeconomics) to generate a custom learning path.
        </p>

        <form onSubmit={handleCreateCustomPath} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={customSubjectInput}
            onChange={(e) => setCustomSubjectInput(e.target.value)}
            placeholder="e.g. Psychology, Astronomy, Macroeconomics..."
            className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50 focus:bg-white transition-all"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl text-sm transition-colors shadow-sm whitespace-nowrap flex items-center justify-center gap-2"
          >
            <span>Create Learning Path</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>
      </section>

      {/* Popular Subjects */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">
            Popular Subjects
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            {allSubjects.length} subjects available
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {allSubjects.map((subject) => (
            <Link
              key={subject.id}
              href={`/path/${subject.id}`}
              className="group bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                    {subject.category}
                  </span>
                  {subject.isCustom && (
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Custom
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {subject.name}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm line-clamp-2">
                  {subject.description}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>{subject.topics.length} Ordered Topics</span>
                <span className="text-blue-600 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Start Path &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
