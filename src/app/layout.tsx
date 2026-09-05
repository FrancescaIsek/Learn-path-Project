import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LearnPath - Turn any subject into a simple, structured learning path',
  description: 'Select a subject or enter your own to get a beginner-friendly, step-by-step learning path.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50 text-slate-900`}>
        <Header />
        <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8">
          {children}
        </main>
        <footer className="border-t border-slate-200 bg-white py-6 mt-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-xs text-slate-500">
            LearnPath — Simple, focused learning paths for any subject.
          </div>
        </footer>
      </body>
    </html>
  );
}
