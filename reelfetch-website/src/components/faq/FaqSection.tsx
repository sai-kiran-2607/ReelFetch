import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import type { FaqItem } from '../../types';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const faqs: FaqItem[] = [
    // Installation
    {
      id: 'faq-1',
      category: 'Installation',
      question: 'How do I install the ReelFetch APK on my Android device?',
      answer:
        'Download the official .apk file directly from this page onto your phone. When prompted by Android or your web browser (Chrome, Samsung Internet, etc.), select "Settings" and enable "Allow from this source" under Install Unknown Apps. Then tap Install and open ReelFetch once the installation finishes.',
    },
    {
      id: 'faq-2',
      category: 'Installation',
      question: 'Why does Android warn about "Unknown Sources" or Play Protect?',
      answer:
        'Because ReelFetch is distributed directly as a standalone APK file outside the Google Play Store, Android shows a standard security verification prompt for all direct APK packages. ReelFetch contains no malware, advertisements, or tracking scripts.',
    },

    // Permissions
    {
      id: 'faq-3',
      category: 'Permissions',
      question: 'What permissions does ReelFetch require, and why?',
      answer:
        'ReelFetch requires permission to access your device storage/photos (READ_MEDIA_VIDEO and WRITE_EXTERNAL_STORAGE on older Android versions) exclusively so it can save downloaded video and audio files into your device gallery (Internal Storage/ReelFetch and DCIM). It also requests notification permission to inform you when a download completes. It never requests contacts, camera, mic, or location access.',
    },
    {
      id: 'faq-4',
      category: 'Permissions',
      question: 'Does ReelFetch ask for my Instagram login or account password?',
      answer:
        'No, never! ReelFetch requires zero login and will never ask for your Instagram username, password, or session cookies. You simply share or paste public links. Your account credentials stay 100% private.',
    },

    // Compatibility
    {
      id: 'faq-5',
      category: 'Compatibility',
      question: 'Which Android versions and devices are supported?',
      answer:
        'ReelFetch is built for Android 8.0 (Oreo, API Level 26) and higher, extending through Android 14 and Android 15. It works on Android smartphones, foldables, and tablets from manufacturers including Samsung, Google Pixel, Xiaomi, OnePlus, Motorola, and Oppo.',
    },
    {
      id: 'faq-6',
      category: 'Compatibility',
      question: 'Can I download private Instagram Reels or Stories?',
      answer:
        'No. ReelFetch operates without logging into any Instagram account, meaning it can only access and process public Instagram Reels and public video posts. Private account posts and expiring Stories cannot be accessed.',
    },

    // Troubleshooting
    {
      id: 'faq-7',
      category: 'Troubleshooting',
      question: 'What should I do if a link shows "Unsupported URL protocol or platform"?',
      answer:
        'Ensure the URL begins with instagram.com/reel/ or instagram.com/p/. ReelFetch strictly validates links to ensure safety and rejects non-Instagram URLs (such as YouTube or TikTok) as well as non-media links like user profiles or Instagram Explore pages.',
    },
    {
      id: 'faq-8',
      category: 'Troubleshooting',
      question: 'Where do I find my downloaded videos on my device?',
      answer:
        'Downloaded videos automatically sync into your phone’s default Gallery or Google Photos app under the "ReelFetch" or "Downloads" album. Files are also stored on disk in your device internal storage at: Internal Storage/ReelFetch.',
    },
    {
      id: 'faq-9',
      category: 'Troubleshooting',
      question: 'A download failed or was interrupted. Can I retry it?',
      answer:
        'Yes. Inside the ReelFetch app, tap the Downloads tab. If a download was interrupted due to a network glitch or closing the app, it will be marked as failed. You can tap the retry action or re-paste the link in the Home tab.',
    },
  ];

  const categories = ['All', 'Installation', 'Permissions', 'Compatibility', 'Troubleshooting'];

  const filteredFaqs =
    activeCategory === 'All'
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-brand-surface-card border-t border-brand-border-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light-purple border border-brand-border-light text-xs font-bold text-brand-purple uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark-text tracking-tight">
            Frequently Asked <span className="text-gradient">Questions.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-secondary-text">
            Everything you need to know about installing, permissions, device compatibility, and troubleshooting.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-brand-purple text-white shadow-md shadow-brand-purple/20'
                  : 'bg-white text-brand-secondary-text hover:text-brand-dark-text border border-brand-border-subtle hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-brand-border-subtle bg-white overflow-hidden shadow-card-soft transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-brand-light-purple/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-brand-light-purple text-brand-purple border border-brand-border-light shrink-0">
                      {faq.category}
                    </span>
                    <span className="text-base font-bold text-brand-dark-text">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-brand-purple' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-sm text-brand-secondary-text leading-relaxed border-t border-brand-border-subtle/50 animate-in fade-in duration-150"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
