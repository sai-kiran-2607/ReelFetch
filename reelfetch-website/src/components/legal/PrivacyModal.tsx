import React, { useEffect } from 'react';
import { X, ShieldCheck, Lock, HardDrive, FileText, Mail } from 'lucide-react';
import { APP_CONFIG } from '../../config/appConfig';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
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
                Privacy Policy & Terms
              </h2>
              <p className="text-xs text-brand-secondary-text">
                Last updated: {APP_CONFIG.lastUpdated}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-brand-secondary-text hover:text-brand-dark-text hover:bg-brand-light-purple/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple transition-colors"
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
              ReelFetch is architected from the ground up as a device-local utility. We do not maintain user databases, do not require user accounts or logins, and never upload your media to any remote server.
            </p>
          </div>

          <section className="space-y-2">
            <h3 className="text-base font-bold text-brand-dark-text flex items-center gap-2">
              <Lock className="w-4 h-4 text-brand-purple" />
              <span>1. Zero Personal Data Collection</span>
            </h3>
            <p>
              ReelFetch does not collect, record, transmit, or monetize any personally identifiable information (PII). We do not record your IP address, browsing history, Instagram login credentials, search queries, or identity. No account creation is ever requested.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold text-brand-dark-text flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-brand-purple" />
              <span>2. Local Device Storage & Gallery Access</span>
            </h3>
            <p>
              All downloaded video and audio files are saved strictly to your Android device’s local file system (<code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded text-brand-purple">Internal Storage/ReelFetch</code>) and directly exported to your local Android MediaStore / Photo Gallery. ReelFetch never syncs, replicates, or uploads your saved media to external cloud infrastructure.
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
              <li><strong>Network Access (INTERNET):</strong> Required solely to stream public video data directly from source media servers to your device.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold text-brand-dark-text flex items-center gap-2">
              <FileText className="w-4 h-4 text-brand-purple" />
              <span>4. Independent Status & Non-Affiliation Disclaimer</span>
            </h3>
            <p>
              ReelFetch is an independent software tool developed for personal offline media archiving. ReelFetch is not affiliated with, endorsed by, sponsored by, or associated with Instagram, Meta Platforms, Inc., or any of their affiliates or subsidiaries. All Instagram trademarks, logos, and brand names are the intellectual property of Meta Platforms, Inc.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-bold text-brand-dark-text flex items-center gap-2">
              <Mail className="w-4 h-4 text-brand-purple" />
              <span>5. Contact & Support</span>
            </h3>
            <p>
              If you have any questions, feedback, or inquiries regarding privacy or app functionality, contact our developer support team directly at{' '}
              <a
                href={`mailto:${APP_CONFIG.supportEmail}`}
                className="text-brand-purple font-semibold hover:underline"
              >
                {APP_CONFIG.supportEmail}
              </a>.
            </p>
          </section>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-brand-border-subtle shrink-0 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl font-bold text-sm text-white bg-brand-purple hover:bg-brand-purple-hover transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
          >
            Close Privacy Policy
          </button>
        </div>

      </div>
    </div>
  );
};
