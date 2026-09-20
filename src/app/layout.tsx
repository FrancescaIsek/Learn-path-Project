import type { Metadata } from 'next';
// Notion's fonts: Inter (their default sans) and iA Writer Mono (their mono).
import '@fontsource-variable/inter';
import '@fontsource/ia-writer-mono/400.css';
import '@fontsource/ia-writer-mono/700.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'LearnPath - Learn anything, in the right order',
  description:
    'Tell LearnPath what you want to learn and get a simple, step-by-step path built around it.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer className="border-t border-line py-8">
          <div className="mx-auto max-w-[1136px] px-4 text-center text-xs text-ink-3 sm:px-8">
            LearnPath · Simple, step-by-step learning paths for everyday skills.
          </div>
        </footer>
      </body>
    </html>
  );
}
