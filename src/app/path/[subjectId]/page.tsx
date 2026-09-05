'use client';

import Link from 'next/link';
import { getSubjectById } from '@/data/subjects';
import { useProgress } from '@/hooks/useProgress';

interface PageProps {
  params: {
    subjectId: string;
  };
}

export default function LearningPathPage({ params }: PageProps) {
  const { customSubjects, isCompleted, isLoaded } = useProgress();

  const subject = getSubjectById(params.subjectId, customSubjects);

  if (!subject) {
    return (
      <div className="text-center py-16 space-y-4">
        <h1 className="text-2xl font-bold text-slate-900">Subject Not Found</h1>
        <p className="text-slate-600">The requested learning path could not be found.</p>
        <Link
          href="/"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          &larr; Back to Subjects
        </Link>
      </div>
    );
  }

  const completedCount = subject.topics.filter((t) => isCompleted(`${subject.id}/${t.id}`)).length;
  const totalTopics = subject.topics.length;
  const progressPercent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  return (
    <div className="space-y-8">
      {/* Breadcrumb / Back Link */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to All Subjects
        </Link>
      </div>

      {/* Subject Header & Progress Bar */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700">
              {subject.category}
            </span>
            {subject.isCustom && (
              <span className="text-xs font-medium px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                Custom Subject
              </span>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {subject.name} Learning Path
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            {subject.description}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
            <span>Progress: {completedCount} of {totalTopics} topics completed</span>
            <span>{progressPercent}%</span>
          </div>
          <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Topics Timeline / List */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900">
          Learning Path Topics
        </h2>

        <div className="space-y-3">
          {subject.topics.map((topic, index) => {
            const topicKey = `${subject.id}/${topic.id}`;
            const done = isLoaded && isCompleted(topicKey);

            return (
              <Link
                key={topic.id}
                href={`/path/${subject.id}/${topic.id}`}
                className={`group block bg-white rounded-xl p-5 border transition-all ${done
                  ? 'border-emerald-200 bg-emerald-50/20 hover:border-emerald-300'
                  : 'border-slate-200 hover:border-blue-300 hover:shadow-sm'
                  }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    {/* Index badge */}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${done
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-100 text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors'
                        }`}
                    >
                      {done ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </div>

                    <div className="space-y-1">
                      <h3
                        className={`text-base font-bold transition-colors ${done ? 'text-slate-800 line-through decoration-slate-400' : 'text-slate-900 group-hover:text-blue-600'
                          }`}
                      >
                        {topic.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600">
                        {topic.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${done
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors'
                      }`}
                  >
                    {done ? 'Completed' : 'Not Started'}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
