import React, { useEffect } from 'react';
import { X, ShieldCheck, Lock, HardDrive, FileText, ArrowRight } from 'lucide-react';
import { APP_CONFIG } from '../../config/appConfig';
import { useRouter } from '../../hooks/useRouter';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  const { navigate } = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleNavigate = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-brand-border-subtle p-6 sm:p-8 max-h-[85vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-brand-border-subtle shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-light-purple text-brand-purple flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 id="privacy-title" className="text-xl font-bold text-brand-dark-text">
                Privacy Overview
              </h2>
              <p className="text-xs text-brand-secondary-text">
                Last updated: {APP_CONFIG.lastUpdated}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-brand-secondary-text hover:text-brand-dark-text hover:bg-brand-light-purple/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Scrollable */}
        <div className="overflow-y-auto py-5 space-y-5 text-sm text-brand-secondary-text leading-relaxed pr-2">
          
          <div className="p-4 rounded-2xl bg-brand-light-purple/40 border border-brand-border-light text-brand-dark-text text-xs space-y-1">
            <p className="font-bold text-brand-purple">Core Principle:</p>
            <p>
              ReelFetch is architected as an on-device utility. We do not require accounts, do not ask for your Instagram credentials, and never upload your media to any remote server.
            </p>
          </div>

          <section className="space-y-2">
            <h3 className="text-base font-bold text-brand-dark-text flex items-center gap-2">
              <Lock className="w-4 h-4 text-brand-purple" />
              <span>1. Zero Personal Account Data</span>
            </h3>
            <p>
              ReelFetch operates without user registration. We do not prompt for, store, or transmit your Instagram login credentials, search history, or profile identity.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold text-brand-dark-text flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-brand-purple" />
              <span>2. Local Device Storage & Gallery Access</span>
            </h3>
            <p>
              All downloaded video and audio files are saved strictly to your Android device’s local file system (<code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded text-brand-purple">Internal Storage/ReelFetch</code>) and directly exported to your local Android MediaStore. Media is never stored on external ReelFetch cloud servers.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold text-brand-dark-text flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-purple" />
              <span>3. Android Device Permissions</span>
            </h3>
            <p>
              The app requests only the minimum operating system permissions required for its documented core features:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-xs">
              <li><strong>Photos / Media Library (READ_MEDIA_VIDEO):</strong> Used exclusively to save and display downloaded videos in your gallery.</li>
              <li><strong>Notifications (POST_NOTIFICATIONS):</strong> Used solely to alert you upon download completion or error.</li>
              <li><strong>Network Access (INTERNET):</strong> Required to fetch public video streams directly from source media servers to your device.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold text-brand-dark-text flex items-center gap-2">
              <FileText className="w-4 h-4 text-brand-purple" />
              <span>4. Independent Status & Non-Affiliation</span>
            </h3>
            <p>
              ReelFetch is an independent software tool developed for personal offline media archiving. ReelFetch is not affiliated with, endorsed by, sponsored by, or associated with Instagram, Meta Platforms, Inc., or any of their affiliates or subsidiaries. All Instagram trademarks, logos, and brand names are the intellectual property of Meta Platforms, Inc.
            </p>
          </section>

          {/* Quick links to standalone pages */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleNavigate('/privacy-policy')}
              className="p-3.5 rounded-xl border border-brand-border-light bg-brand-light-purple/30 text-left hover:bg-brand-light-purple transition-all flex items-center justify-between"
            >
              <div>
                <p className="text-xs font-bold text-brand-dark-text">Full Privacy Policy</p>
                <p className="text-[11px] text-brand-secondary-text">Read comprehensive data handling details</p>
              </div>
              <ArrowRight className="w-4 h-4 text-brand-purple shrink-0 ml-2" />
            </button>

            <button
              type="button"
              onClick={() => handleNavigate('/terms')}
              className="p-3.5 rounded-xl border border-brand-border-light bg-brand-light-purple/30 text-left hover:bg-brand-light-purple transition-all flex items-center justify-between"
            >
              <div>
                <p className="text-xs font-bold text-brand-dark-text">Terms of Use</p>
                <p className="text-[11px] text-brand-secondary-text">Review authorized content saving rules</p>
              </div>
              <ArrowRight className="w-4 h-4 text-brand-purple shrink-0 ml-2" />
            </button>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-brand-border-subtle shrink-0 flex items-center justify-between">
          <span className="text-xs text-brand-secondary-text">
            Support: <a href={`mailto:${APP_CONFIG.supportEmail}`} className="text-brand-purple font-medium hover:underline">{APP_CONFIG.supportEmail}</a>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl font-bold text-sm text-white bg-brand-purple hover:bg-brand-purple-hover transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple cursor-pointer"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
};
