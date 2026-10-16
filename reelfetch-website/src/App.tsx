import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { Features } from './components/features/Features';
import { HowItWorks } from './components/howItWorks/HowItWorks';
import { DownloadSection } from './components/download/DownloadSection';
import { FaqSection } from './components/faq/FaqSection';
import { Footer } from './components/layout/Footer';
import { PrivacyModal } from './components/legal/PrivacyModal';

export function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-brand-dark-text flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar onPrivacyClick={() => setPrivacyModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <DownloadSection />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onPrivacyClick={() => setPrivacyModalOpen(true)} />

      {/* Privacy Policy & Terms Modal */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}

export default App;
