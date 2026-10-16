import React from 'react';
import { Share2, Download, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { StepItem } from '../../types';

// Crisp Instagram vector icon
const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const HowItWorks: React.FC = () => {
  const steps: StepItem[] = [
    {
      number: '01',
      title: 'Find Reel on Instagram',
      description:
        'Open the Instagram app on your Android device and navigate to any public Reel, video post, or creator clip you wish to save.',
      tip: 'Public reels from creators and open profiles are supported.',
      icon: InstagramIcon,
    },
    {
      number: '02',
      title: 'Share or Copy the Link',
      description:
        'Tap the Share paper-plane icon on the Reel. Select ReelFetch from the Android share sheet, or simply tap "Copy link".',
      tip: 'Sharing directly opens ReelFetch with the URL already loaded.',
      icon: Share2,
    },
    {
      number: '03',
      title: 'Preview & Save to Gallery',
      description:
        'ReelFetch verifies the video instantly. Choose your desired quality (HD, SD, or MP3 Audio) and tap "Save Reel" to download directly to your gallery.',
      tip: 'The video is saved offline and ready in your photo gallery immediately.',
      icon: Download,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-brand-surface-card border-y border-brand-border-subtle relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light-purple border border-brand-border-light text-xs font-bold text-brand-purple uppercase tracking-wider">
            <span>Fast 3-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark-text tracking-tight">
            How ReelFetch <span className="text-gradient">Works.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-secondary-text">
            No complex configurations or logins. Saving your favorite videos takes less than 5 seconds.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connecting arrow line on desktop */}
          <div className="hidden md:block absolute top-20 left-[20%] right-[20%] h-0.5 border-t-2 border-dashed border-brand-border-strong -z-0" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white rounded-3xl p-8 border border-brand-border-subtle shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between z-10 hover:-translate-y-1"
              >
                <div>
                  {/* Top Row: Big Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-extrabold text-brand-purple/20 font-mono">
                      {step.number}
                    </span>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-deep-purple text-white flex items-center justify-center shadow-md shadow-brand-purple/25">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-brand-dark-text mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-secondary-text leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Helpful Tip Box */}
                <div className="p-3.5 rounded-2xl bg-brand-light-purple/60 border border-brand-border-light flex items-start gap-2.5 text-xs text-brand-secondary-text">
                  <CheckCircle2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                  <span className="font-medium text-brand-dark-text/90">{step.tip}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Workflow summary badge */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-3 sm:p-4 rounded-2xl bg-white border border-brand-border-subtle shadow-sm text-xs sm:text-sm font-semibold text-brand-dark-text">
            <span className="text-brand-purple">Instagram App</span>
            <ArrowRight className="w-4 h-4 text-brand-secondary-text" />
            <span className="text-brand-pink">Share / Copy Link</span>
            <ArrowRight className="w-4 h-4 text-brand-secondary-text" />
            <span className="text-brand-purple">ReelFetch App</span>
            <ArrowRight className="w-4 h-4 text-brand-secondary-text" />
            <span className="text-emerald-600 font-bold">Saved in DCIM Gallery</span>
          </div>
        </div>

      </div>
    </section>
  );
};
