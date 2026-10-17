import React from 'react';
import { Hero } from '../components/hero/Hero';
import { Features } from '../components/features/Features';
import { HowItWorks } from '../components/howItWorks/HowItWorks';
import { DownloadSection } from '../components/download/DownloadSection';
import { FaqSection } from '../components/faq/FaqSection';
import { usePageMeta } from '../hooks/useRouter';

export const HomePage: React.FC = () => {
  usePageMeta(
    'ReelFetch — Instagram Reels Saver | Save Reels. Watch Anytime.',
    'ReelFetch is a clean, privacy-focused Android app to save public Instagram Reels directly to your local storage and gallery. Fast downloads in HD, SD, and audio formats.'
  );

  return (
    <main className="flex-1">
      <Hero />
      <Features />
      <HowItWorks />
      <DownloadSection />
      <FaqSection />
    </main>
  );
};
