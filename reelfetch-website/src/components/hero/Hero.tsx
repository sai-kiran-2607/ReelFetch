import React from 'react';
import {
  ShieldCheck,
  Zap,
  HardDrive,
  ArrowRight,
  Smartphone,
  Download,
  Clock,
  Info
} from 'lucide-react';
import { MobileMockup } from './MobileMockup';
import { APP_CONFIG, isApkConfigured } from '../../config/appConfig';

interface HeroProps {
  onDownloadClick?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const apkConfigured = isApkConfigured();

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-hero">
      {/* Background radial gradient blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-brand-purple/15 to-brand-pink/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-brand-light-purple/60 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Call-To-Action */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Tagline / Release Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light-purple border border-brand-border-light shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-purple animate-pulse" />
              <span className="text-xs font-bold text-brand-purple tracking-wide uppercase">
                {APP_CONFIG.tagline}
              </span>
              <span className="text-brand-border-strong">•</span>
              <span className="text-xs font-semibold text-brand-secondary-text">
                v{APP_CONFIG.version} Official Android App
              </span>
            </div>

            {/* Main Heading (Requirement: "Save Your Favorite Reels.") */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark-text tracking-tight leading-[1.12]">
              Save Your Favorite{' '}
              <span className="text-gradient">Reels.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-brand-secondary-text max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Experience seamless Instagram video saving. Share any public Reel link directly
              from the Instagram app or paste the URL into <strong className="text-brand-dark-text font-semibold">{APP_CONFIG.appName}</strong> to download HD videos straight to your device gallery for offline watching anytime.
            </p>

            {/* CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {apkConfigured ? (
                <a
                  href={APP_CONFIG.apkDownloadUrl}
                  download="ReelFetch.apk"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base text-white bg-gradient-brand hover:opacity-95 shadow-xl shadow-brand-purple/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-purple/30 group cursor-pointer"
                  id="hero-download-cta"
                  aria-label="Download ReelFetch APK for Android"
                >
                  <Smartphone className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span>Download for Android</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base text-brand-secondary-text bg-slate-100 border border-brand-border-subtle cursor-not-allowed opacity-85 shadow-sm"
                  id="hero-download-cta"
                  aria-disabled="true"
                  title="Download coming soon: APK release is pending."
                >
                  <Clock className="w-5 h-5 text-brand-secondary-text" />
                  <span>Download coming soon</span>
                </button>
              )}

              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-base text-brand-dark-text bg-white hover:bg-brand-light-purple/60 border border-brand-border-subtle shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
              >
                <span>How It Works</span>
              </a>
            </div>

            {/* Friendly message if download is coming soon */}
            {!apkConfigured && (
              <div className="pt-1 flex items-center justify-center lg:justify-start">
                <p className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-brand-light-purple/80 border border-brand-border-light text-xs text-brand-dark-text font-medium">
                  <Info className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                  <span>Download coming soon: The official v{APP_CONFIG.version} Android APK will be accessible here once published.</span>
                </p>
              </div>
            )}

            {/* APK Status & Verification Subnote */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs text-brand-secondary-text">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Free & No Ads</span>
              </div>
              <span className="text-brand-border-strong hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <HardDrive className="w-4 h-4 text-brand-purple" />
                <span>Direct Gallery Export</span>
              </div>
              <span className="text-brand-border-strong hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Android 8.0+</span>
              </div>
              {APP_CONFIG.verifiedFileSize && (
                <>
                  <span className="text-brand-border-strong hidden sm:inline">•</span>
                  <div className="flex items-center gap-1.5">
                    <Download className="w-4 h-4 text-brand-purple" />
                    <span className="font-semibold text-brand-dark-text">{APP_CONFIG.verifiedFileSize} APK</span>
                  </div>
                </>
              )}
            </div>

            {/* Micro Feature Highlights Grid */}
            <div className="pt-6 border-t border-brand-border-subtle grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="space-y-1">
                <p className="font-extrabold text-xl text-brand-dark-text">100%</p>
                <p className="text-xs text-brand-secondary-text font-medium">Device-Local</p>
              </div>
              <div className="space-y-1">
                <p className="font-extrabold text-xl text-brand-dark-text">1080p</p>
                <p className="text-xs text-brand-secondary-text font-medium">HD Quality</p>
              </div>
              <div className="space-y-1">
                <p className="font-extrabold text-xl text-brand-dark-text">0 Login</p>
                <p className="text-xs text-brand-secondary-text font-medium">No Credentials</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive App Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <MobileMockup />
          </div>

        </div>
      </div>
    </section>
  );
};
