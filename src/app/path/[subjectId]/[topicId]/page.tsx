'use client';

import Link from 'next/link';
import { getSubjectById } from '@/data/subjects';
import { useProgress } from '@/hooks/useProgress';

interface PageProps {
  params: {
    subjectId: string;
    topicId: string;
  };
}

export default function TopicPage({ params }: PageProps) {
  const { subjectId, topicId } = params;
  const { customSubjects, isCompleted, toggleCompletion, isLoaded } = useProgress();

  const subject = getSubjectById(subjectId, customSubjects);
  const topic = subject?.topics.find((t) => t.id === topicId);

  if (!subject || !topic) {
    return (
      <div className="text-center py-16 space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Topic Not Found</h1>
        <p className="text-slate-600">The requested topic could not be found.</p>
        <Link
          href={`/path/${subjectId}`}
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          &larr; Back to Learning Path
        </Link>
      </div>
    );
  }

  const topicKey = `${subject.id}/${topic.id}`;
  const done = isLoaded && isCompleted(topicKey);

  // Find next topic if available
  const currentIndex = subject.topics.findIndex((t) => t.id === topic.id);
  const nextTopic = subject.topics[currentIndex + 1];

  return (
    <div className="space-y-8">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href={`/path/${subject.id}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to {subject.name} Path
        </Link>

        <span className="text-xs font-medium text-slate-500">
          Topic {currentIndex + 1} of {subject.topics.length}
        </span>
      </div>

      {/* Main Topic Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700">
            {subject.name}
          </span>

          {/* Mark Complete Button */}
          <button
            onClick={() => toggleCompletion(topicKey)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border shadow-sm ${
              done
                ? 'bg-emerald-500 text-white border-emerald-600 hover:bg-emerald-600'
                : 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            <span>{done ? 'Marked as Complete' : 'Mark as Complete'}</span>
          </button>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
          {topic.title}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {topic.shortDescription}
        </p>
      </div>

      {/* Section 1: Short Learning Notes */}
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <div className="w-6 h-6 rounded bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
            1
          </div>
          <h2 className="text-lg font-bold text-slate-900">
            Learning Notes
          </h2>
        </div>

        <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
          {topic.notes.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Section 2: Three Key Things to Understand */}
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <div className="w-6 h-6 rounded bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
            2
          </div>
          <h2 className="text-lg font-bold text-slate-900">
            3 Key Things to Understand
          </h2>
        </div>

        <ul className="space-y-3">
          {topic.keyPoints.slice(0, 3).map((point, i) => (
            <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-800 leading-normal">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 3: External Useful Resources */}
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <div className="w-6 h-6 rounded bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
            3
          </div>
          <h2 className="text-lg font-bold text-slate-900">
            Recommended Resources
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {topic.resources.map((res, i) => (
            <a
              key={i}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors">
                    {res.type || 'Resource'}
                  </span>
                </div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {res.title}
                </div>
                <div className="text-xs text-slate-500 truncate max-w-md">
                  {res.url}
                </div>
              </div>

              <div className="text-blue-600 shrink-0 group-hover:translate-x-1 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer Navigation Bar */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
        <Link
          href={`/path/${subject.id}`}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs sm:text-sm font-medium hover:bg-slate-100 transition-colors text-center"
        >
          &larr; Back to {subject.name} Path
        </Link>

        <div className="w-full sm:w-auto flex items-center gap-3">
          {nextTopic ? (
            <Link
              href={`/path/${subject.id}/${nextTopic.id}`}
              className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors text-center flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Next Topic: {nextTopic.title.replace(/^\d+\.\s*/, '')}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <Link
              href={`/path/${subject.id}`}
              className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors text-center"
            >
              Finish Path &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
