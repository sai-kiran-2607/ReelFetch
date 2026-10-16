import React from 'react';
import { ShieldCheck, Mail, ArrowUp } from 'lucide-react';
import { APP_CONFIG, isApkConfigured } from '../../config/appConfig';

interface FooterProps {
  onPrivacyClick: () => void;
  onDownloadClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onPrivacyClick }) => {
  const isReady = isApkConfigured();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-brand-border-subtle pt-16 pb-12 text-brand-secondary-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-brand-border-subtle">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-brand-border-light shadow-sm flex items-center justify-center bg-brand-light-purple">
                <img src="/logo.png" alt="ReelFetch Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-brand-dark-text tracking-tight">
                  {APP_CONFIG.appName}
                </span>
                <p className="text-xs text-brand-secondary-text -mt-0.5 font-medium">
                  {APP_CONFIG.subtitle}
                </p>
              </div>
            </div>

            <p className="text-sm text-brand-secondary-text leading-relaxed max-w-sm">
              {APP_CONFIG.tagline} The fast, private Android utility for saving Instagram Reels directly into your device gallery for offline watching anytime.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Zero-Tracking • 100% Device-Local</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-dark-text">Navigation</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#features" className="hover:text-brand-purple transition-colors">
                  Verified Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-brand-purple transition-colors">
                  How It Works (3 Steps)
                </a>
              </li>
              <li>
                {isReady ? (
                  <a
                    href={APP_CONFIG.apkDownloadUrl}
                    download="ReelFetch.apk"
                    className="hover:text-brand-purple transition-colors text-left cursor-pointer"
                  >
                    Download Android APK
                  </a>
                ) : (
                  <a
                    href="#download"
                    className="hover:text-brand-purple transition-colors text-left text-brand-muted-text"
                  >
                    Android APK (Coming soon)
                  </a>
                )}
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-purple transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-dark-text">Support & Legal</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={onPrivacyClick}
                  className="hover:text-brand-purple transition-colors text-left font-medium"
                >
                  Privacy Policy & Terms
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${APP_CONFIG.supportEmail}`}
                  className="hover:text-brand-purple transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-purple" />
                  <span>Support: {APP_CONFIG.supportEmail}</span>
                </a>
              </li>
              <li className="text-xs text-brand-muted-text pt-1">
                Version v{APP_CONFIG.version} • Target OS: Android 8.0+
              </li>
            </ul>
          </div>

        </div>

        {/* Mandatory Independent Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-xs text-brand-secondary-text">
              © {new Date().getFullYear()} {APP_CONFIG.appName}. All rights reserved.
            </p>
            <p className="text-xs text-brand-muted-text max-w-2xl leading-relaxed">
              <strong className="font-semibold text-brand-secondary-text">Disclaimer:</strong> ReelFetch is an independent Android application and is not affiliated with, associated with, authorized, endorsed by, or in any way officially connected with Instagram, Meta Platforms, Inc., or any of their subsidiaries or affiliates. "Instagram" and the Instagram logo are registered trademarks of Meta Platforms, Inc.
            </p>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-brand-light-purple text-brand-purple hover:bg-brand-purple hover:text-white transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple shrink-0"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
