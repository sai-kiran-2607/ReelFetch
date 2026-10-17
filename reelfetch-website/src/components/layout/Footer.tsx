import React from 'react';
import { ShieldCheck, ArrowUp } from 'lucide-react';
import { APP_CONFIG, isApkConfigured } from '../../config/appConfig';
import { useRouter } from '../../hooks/useRouter';

interface FooterProps {
  onPrivacyClick: () => void;
  onDownloadClick?: () => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ onPrivacyClick }) => {
  const { navigate } = useRouter();
  const isReady = isApkConfigured();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (e: React.MouseEvent, to: string) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <footer className="bg-white border-t border-brand-border-subtle pt-16 pb-12 text-brand-secondary-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-brand-border-subtle">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
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
              {APP_CONFIG.tagline} The fast, device-local Android utility for saving authorized Instagram Reels directly into your phone's photo gallery for offline watching anytime.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Zero-Tracking • 100% Device-Local</span>
            </div>
          </div>

          {/* Navigation & App Features */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-dark-text">Product</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/#features"
                  onClick={(e) => handleLink(e, '/#features')}
                  className="hover:text-brand-purple transition-colors"
                >
                  Verified Features
                </a>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  onClick={(e) => handleLink(e, '/#how-it-works')}
                  className="hover:text-brand-purple transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/install-guide"
                  onClick={(e) => handleLink(e, '/install-guide')}
                  className="hover:text-brand-purple transition-colors"
                >
                  Install Guide
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  onClick={(e) => handleLink(e, '/#faq')}
                  className="hover:text-brand-purple transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Guides & Resources */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-dark-text">Resources</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleLink(e, '/about')}
                  className="hover:text-brand-purple transition-colors"
                >
                  About ReelFetch
                </a>
              </li>
              <li>
                <a
                  href="/install-guide"
                  onClick={(e) => handleLink(e, '/install-guide')}
                  className="hover:text-brand-purple transition-colors"
                >
                  Android Sideloading
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleLink(e, '/contact')}
                  className="hover:text-brand-purple transition-colors"
                >
                  Contact & Support
                </a>
              </li>
              <li>
                {isReady ? (
                  <a
                    href={APP_CONFIG.apkDownloadUrl}
                    download="ReelFetch.apk"
                    className="hover:text-brand-purple transition-colors font-medium text-brand-purple"
                  >
                    Direct APK Download
                  </a>
                ) : (
                  <span className="text-brand-muted-text text-xs">APK Coming Soon</span>
                )}
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-dark-text">Legal & Privacy</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => handleLink(e, '/privacy-policy')}
                  className="hover:text-brand-purple transition-colors font-medium"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  onClick={(e) => handleLink(e, '/terms')}
                  className="hover:text-brand-purple transition-colors font-medium"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="/terms#copyright"
                  onClick={(e) => handleLink(e, '/terms#copyright')}
                  className="hover:text-brand-purple transition-colors"
                >
                  Authorized Saving Policy
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onPrivacyClick}
                  className="text-xs text-brand-purple hover:underline"
                >
                  Quick Privacy Overview
                </button>
              </li>
              <li className="text-xs text-brand-muted-text pt-1">
                Version v{APP_CONFIG.version} • Android 8.0+
              </li>
            </ul>
          </div>

        </div>

        {/* Mandatory Independent Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-xs text-brand-secondary-text">
              © {CURRENT_YEAR} {APP_CONFIG.appName}. All rights reserved.
            </p>
            <p className="text-xs text-brand-muted-text max-w-3xl leading-relaxed">
              <strong className="font-semibold text-brand-secondary-text">Independent Disclaimer:</strong> ReelFetch is an independent Android application and is not affiliated with, associated with, authorized, sponsored, endorsed by, or in any way officially connected with Instagram, Meta Platforms, Inc., or any of their subsidiaries or affiliates. "Instagram" and the Instagram logo are registered trademarks of Meta Platforms, Inc. Users must only download media they are legally authorized to save.
            </p>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-brand-light-purple text-brand-purple hover:bg-brand-purple hover:text-white transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple shrink-0 cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
