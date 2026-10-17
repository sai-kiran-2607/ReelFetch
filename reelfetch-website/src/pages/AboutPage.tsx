import React from 'react';
import {
  ShieldCheck,
  Smartphone,
  HardDrive,
  Download,
  AlertCircle,
  Lock,
  Layers,
  Sparkles,
  ArrowRight,
  Info
} from 'lucide-react';
import { APP_CONFIG, isApkConfigured } from '../config/appConfig';
import { useRouter, usePageMeta } from '../hooks/useRouter';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();
  const isReady = isApkConfigured();

  usePageMeta(
    'About ReelFetch — The Private, Device-Local Instagram Reels Saver',
    'Learn about ReelFetch: our mission, device-first architecture, zero-login privacy philosophy, verified Android app capabilities, and independent developer project details.'
  );

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section */}
        <div className="text-center space-y-5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light-purple border border-brand-border-light text-xs font-bold text-brand-purple uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Mission & Story</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark-text tracking-tight leading-tight">
            Built for people who want to save Reels <span className="text-gradient">privately & effortlessly.</span>
          </h1>

          <p className="text-lg text-brand-secondary-text leading-relaxed">
            ReelFetch was created to provide Android users with a clean, fast, and device-local alternative to ad-bloated web downloaders, invasive redirects, and forced account logins.
          </p>
        </div>

        {/* Why ReelFetch Exists Card */}
        <div className="relative rounded-3xl bg-brand-surface-card border border-brand-border-subtle p-8 sm:p-10 shadow-card-soft space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-light-purple text-brand-purple flex items-center justify-center font-bold">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-dark-text">The Problem We Solved</h2>
              <p className="text-xs text-brand-secondary-text">Why online web downloaders let users down</p>
            </div>
          </div>

          <p className="text-base text-brand-secondary-text leading-relaxed">
            Anyone who has tried saving a helpful recipe, workout routine, or memorable travel Reel from Instagram knows the usual frustration: copying a link into an ad-saturated website, dodging deceptive "Download" buttons, suffering endless captcha tests, and wondering what tracking scripts are sniffing their data.
          </p>

          <p className="text-base text-brand-secondary-text leading-relaxed">
            <strong className="text-brand-dark-text">ReelFetch takes a completely different path.</strong> By running as a native Android utility, it plugs directly into Android’s system share sheet. You tap "Share" on any public Reel in Instagram, select ReelFetch, pick your quality preference, and save the file directly to your local gallery—in seconds, without popups or trackers.
          </p>
        </div>

        {/* Core Architectural Principles */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-brand-dark-text tracking-tight">
              Our Core Principles
            </h2>
            <p className="text-sm text-brand-secondary-text">
              Every design decision in ReelFetch puts your privacy, device security, and ease-of-use first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Principle 1 */}
            <div className="p-7 rounded-3xl bg-white border border-brand-border-subtle shadow-card-soft space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-brand-purple flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark-text">Zero-Login & Zero Credentials</h3>
              <p className="text-sm text-brand-secondary-text leading-relaxed">
                ReelFetch never asks for your Instagram username, password, two-factor code, or cookies. It processes only public URLs. Your account credentials never touch our app or any third-party server.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="p-7 rounded-3xl bg-white border border-brand-border-subtle shadow-card-soft space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <HardDrive className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark-text">100% Device-Local Storage</h3>
              <p className="text-sm text-brand-secondary-text leading-relaxed">
                Downloaded videos and audio files are written straight to your phone’s internal memory (<code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded text-brand-purple">Internal Storage/ReelFetch</code>) and registered with the Android MediaStore. Your media is never stored on a ReelFetch server.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="p-7 rounded-3xl bg-white border border-brand-border-subtle shadow-card-soft space-y-3">
              <div className="w-10 h-10 rounded-xl bg-pink-50 text-brand-pink flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark-text">Deep Android System Integration</h3>
              <p className="text-sm text-brand-secondary-text leading-relaxed">
                Rather than forcing manual URL copy-pasting, ReelFetch registers with Android's system Share Sheet (<code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">ACTION_SEND</code>). Share directly from Instagram without toggling between multiple browser tabs.
              </p>
            </div>

            {/* Principle 4 */}
            <div className="p-7 rounded-3xl bg-white border border-brand-border-subtle shadow-card-soft space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark-text">Respect for Intellectual Property</h3>
              <p className="text-sm text-brand-secondary-text leading-relaxed">
                ReelFetch is built as a personal offline utility. We strictly encourage users to respect original content creators and only save media they are authorized to download for offline personal enjoyment.
              </p>
            </div>

          </div>
        </div>

        {/* Technical Specifications Table */}
        <div className="rounded-3xl border border-brand-border-subtle overflow-hidden shadow-card-soft bg-white">
          <div className="p-6 sm:p-8 bg-brand-surface-card border-b border-brand-border-subtle">
            <h2 className="text-2xl font-bold text-brand-dark-text">Technical Specifications</h2>
            <p className="text-xs text-brand-secondary-text mt-1">Verified Android application metadata</p>
          </div>

          <div className="divide-y divide-brand-border-subtle text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:px-8 gap-1">
              <span className="font-semibold text-brand-dark-text">Application Name</span>
              <span className="sm:col-span-2 text-brand-secondary-text">{APP_CONFIG.appName}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:px-8 gap-1">
              <span className="font-semibold text-brand-dark-text">Current Release</span>
              <span className="sm:col-span-2 text-brand-secondary-text font-mono">v{APP_CONFIG.version}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:px-8 gap-1">
              <span className="font-semibold text-brand-dark-text">Package Identifier</span>
              <span className="sm:col-span-2 text-brand-secondary-text font-mono">{APP_CONFIG.packageName}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:px-8 gap-1">
              <span className="font-semibold text-brand-dark-text">Target Operating System</span>
              <span className="sm:col-span-2 text-brand-secondary-text">{APP_CONFIG.minAndroidVersion}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:px-8 gap-1">
              <span className="font-semibold text-brand-dark-text">Standalone APK Size</span>
              <span className="sm:col-span-2 text-brand-secondary-text font-mono">{APP_CONFIG.verifiedFileSize || '108.3 MB'}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:px-8 gap-1">
              <span className="font-semibold text-brand-dark-text">Supported Media Formats</span>
              <span className="sm:col-span-2 text-brand-secondary-text">HD MP4 (1080p), SD MP4 (720p), MP3 Audio</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:px-8 gap-1">
              <span className="font-semibold text-brand-dark-text">Official Support Email</span>
              <span className="sm:col-span-2 text-brand-purple font-medium">
                <a href={`mailto:${APP_CONFIG.supportEmail}`} className="hover:underline">
                  {APP_CONFIG.supportEmail}
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Project Maintainer & Legal Identity Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-amber-50/70 border border-amber-200/80 text-amber-950 space-y-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h3 className="font-bold text-base text-amber-900">
                Project Ownership & Information Notice
              </h3>
              <p className="text-sm leading-relaxed text-amber-800">
                ReelFetch is maintained as an independent open project. In compliance with high standards of public transparency:
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-amber-800">
                <li>
                  <strong>Project Structure:</strong> Independent software tool distributed as a direct Android APK release.
                </li>
                <li>
                  <strong>Support Desk:</strong> Queries, bug reports, and copyright requests are received via <code className="bg-amber-100 px-1 py-0.5 rounded text-amber-900">{APP_CONFIG.supportEmail}</code>.
                </li>
                <li>
                  <span className="font-semibold text-amber-900">[Maintainer Input Required]:</span> If you operate ReelFetch under a registered company name or formal commercial entity, specify your official corporate legal entity name, jurisdiction of incorporation, and registered physical business address in <code className="bg-amber-100 px-1 py-0.5 rounded text-amber-900">appConfig.ts</code>.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mandatory Independent Disclaimer */}
        <div className="p-6 rounded-3xl bg-slate-50 border border-brand-border-subtle text-xs text-brand-secondary-text space-y-2">
          <p className="font-bold text-brand-dark-text flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-brand-purple" />
            <span>Trademark & Non-Affiliation Disclaimer</span>
          </p>
          <p className="leading-relaxed">
            ReelFetch is an independent Android application and is not affiliated with, associated with, authorized, sponsored, endorsed by, or in any way officially connected with Instagram, Meta Platforms, Inc., or any of their subsidiaries or affiliates. "Instagram" and the Instagram logo are registered trademarks of Meta Platforms, Inc. ReelFetch interacts strictly with publicly accessible web media endpoints for personal offline viewing purposes.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {isReady ? (
            <a
              href={APP_CONFIG.apkDownloadUrl}
              download="ReelFetch.apk"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm text-white bg-gradient-brand hover:opacity-95 shadow-xl shadow-brand-purple/20 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download ReelFetch APK</span>
            </a>
          ) : (
            <button
              type="button"
              onClick={() => navigate('/install-guide')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm text-white bg-brand-purple hover:bg-brand-purple-hover shadow-md transition-all"
            >
              <span>View Installation Guide</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => navigate('/install-guide')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-sm text-brand-dark-text bg-brand-light-purple hover:bg-brand-border-light border border-brand-border-light transition-all"
          >
            <span>Installation Guide</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
