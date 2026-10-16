import React, { useEffect } from 'react';
import { X, AlertCircle, Code2 } from 'lucide-react';
import { APP_CONFIG } from '../../config/appConfig';

interface DownloadPlaceholderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadPlaceholderModal: React.FC<DownloadPlaceholderModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Close on Escape key press
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
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-brand-border-subtle p-6 sm:p-8 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-brand-secondary-text hover:text-brand-dark-text hover:bg-brand-light-purple/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded-md">
              Download Notice
            </span>
            <h3 id="modal-title" className="text-xl font-bold text-brand-dark-text mt-1">
              APK Release Pending
            </h3>
          </div>
        </div>

        {/* Informative Explanation */}
        <div className="space-y-3.5 text-sm text-brand-secondary-text leading-relaxed">
          <p>
            The official standalone Android APK for <strong className="text-brand-dark-text font-semibold">{APP_CONFIG.appName}</strong> is currently being prepared for production hosting.
          </p>
          <p>
            To guarantee safety and prevent downloading broken or unverified files, this download button is temporarily disabled until the official production APK URL is configured.
          </p>

          {/* Verified Metadata Box */}
          <div className="p-4 rounded-2xl bg-brand-surface-card border border-brand-border-subtle space-y-2 text-xs">
            <div className="flex items-center justify-between border-b border-brand-border-subtle/60 pb-2">
              <span className="text-brand-secondary-text">Application Version</span>
              <span className="font-bold font-mono text-brand-purple">v{APP_CONFIG.version} (Verified)</span>
            </div>
            <div className="flex items-center justify-between border-b border-brand-border-subtle/60 pb-2">
              <span className="text-brand-secondary-text">Package Identifier</span>
              <span className="font-mono text-brand-dark-text">{APP_CONFIG.packageName}</span>
            </div>
            <div className="flex items-center justify-between border-b border-brand-border-subtle/60 pb-2">
              <span className="text-brand-secondary-text">Compatibility</span>
              <span className="font-semibold text-brand-dark-text">{APP_CONFIG.minAndroidVersion}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-brand-secondary-text">Verified File Size</span>
              <span className="italic text-brand-secondary-text">
                {APP_CONFIG.verifiedFileSize ? APP_CONFIG.verifiedFileSize : 'Pending build verification'}
              </span>
            </div>
          </div>

          {/* Developer / Configuration Note */}
          <div className="p-3.5 rounded-xl bg-brand-light-purple/60 border border-brand-border-light text-xs text-brand-dark-text/90 flex items-start gap-2">
            <Code2 className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-brand-purple">For maintainers & testers:</p>
              <p className="text-brand-secondary-text mt-0.5">
                Set <code className="bg-white px-1.5 py-0.5 rounded border border-brand-border-light font-mono text-brand-purple">VITE_APK_DOWNLOAD_URL</code> in your <code className="font-mono">.env</code> to activate immediate direct downloads.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-sm text-white bg-brand-purple hover:bg-brand-purple-hover transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
