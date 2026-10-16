import React from 'react';
import {
  Share2,
  Download,
  HardDrive,
  History,
  ShieldCheck,
  Sparkles,
  Sliders
} from 'lucide-react';
import type { FeatureItem } from '../../types';

export const Features: React.FC = () => {
  const verifiedFeatures: FeatureItem[] = [
    {
      id: 'link-sharing',
      icon: Share2,
      title: 'Seamless Share Sheet & Link Parsing',
      description:
        'Share links directly from the Instagram app into ReelFetch with Android’s system share sheet, or paste any Reel URL. The app automatically cleans query parameters, verifies valid Reel formats, and generates an instant preview.',
      tag: 'Android Share Intent',
      badge: 'Verified Feature',
    },
    {
      id: 'high-quality-downloads',
      icon: Download,
      title: 'HD, SD & Audio-Only Formats',
      description:
        'Download your reels in original high-definition 1080p MP4, standard 720p for data savings, or extract pure MP3 audio tracks for offline music and voice memos.',
      tag: 'Multiple Formats',
      badge: 'Verified Feature',
    },
    {
      id: 'local-gallery-storage',
      icon: HardDrive,
      title: 'Direct Gallery & Local Storage',
      description:
        'Downloaded videos are securely saved to your local storage under Internal Storage/ReelFetch and seamlessly exported into your Android device gallery (DCIM/Photos) for instant offline viewing in your preferred media player.',
      tag: 'Gallery Export',
      badge: 'Verified Feature',
    },
    {
      id: 'download-history',
      icon: History,
      title: 'Built-in Download History & Player',
      description:
        'Track all completed downloads in one clean tab. Verify files on disk, watch saved reels offline with the integrated video player, share files to other apps, or clear history whenever you need to free device space.',
      tag: 'Library Management',
      badge: 'Verified Feature',
    },
    {
      id: 'privacy-first',
      icon: ShieldCheck,
      title: '100% Private — No Account Required',
      description:
        'ReelFetch does not ask for your Instagram login, cookies, or account credentials. All downloads and processing are executed locally on your device without transmitting personal data to third-party servers.',
      tag: 'Zero Tracking',
      badge: 'Verified Feature',
    },
    {
      id: 'quality-preference',
      icon: Sliders,
      title: 'Configurable Download Preferences',
      description:
        'Choose whether to be asked for your desired resolution each time, or set a default preference (Always HD, Always SD, or Always Audio) to speed up repeated downloads.',
      tag: 'User Controls',
      badge: 'Verified Feature',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light-purple border border-brand-border-light text-xs font-bold text-brand-purple uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built For Performance & Privacy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark-text tracking-tight">
            Everything you need to save Reels{' '}
            <span className="text-gradient">effortlessly.</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-secondary-text">
            Every feature described below is fully implemented and verified in the official ReelFetch Android application codebase.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verifiedFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative rounded-3xl p-8 bg-brand-surface-card border border-brand-border-subtle hover:border-brand-purple/40 shadow-card-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-light-purple border border-brand-border-light text-brand-purple flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-gradient-brand group-hover:text-white transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white text-brand-purple border border-brand-border-subtle shadow-sm">
                      {feature.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-brand-dark-text mb-3 group-hover:text-brand-purple transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-brand-secondary-text leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Verified indicator */}
                <div className="pt-6 mt-6 border-t border-brand-border-subtle/80 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{feature.badge}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
