import React from 'react';
import {
  Download,
  Smartphone,
  ShieldCheck,
  Info,
  Clock,
  FolderOpen
} from 'lucide-react';
import { APP_CONFIG, isApkConfigured } from '../../config/appConfig';

interface DownloadSectionProps {
  onDownloadClick?: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = () => {
  const isReady = isApkConfigured();

  return (
    <section id="download" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <div className="relative rounded-[36px] bg-gradient-to-br from-[#1E1238] via-[#2A1553] to-[#17152A] p-8 sm:p-12 md:p-16 text-white overflow-hidden shadow-2xl border border-purple-900/40">
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-pink/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-purple/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading, Direct CTA & Specs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-purple-200">
                <Smartphone className="w-4 h-4 text-brand-pink" />
                <span>Official Android APK</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Ready to save Reels without the hassle?
              </h2>

              <p className="text-base sm:text-lg text-purple-200/90 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Download the standalone ReelFetch APK directly to your phone. Zero intrusive ads, no account signups, and local device-first privacy.
              </p>

              {/* Action Button & Release status */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                {isReady ? (
                  <a
                    href={APP_CONFIG.apkDownloadUrl}
                    download="ReelFetch.apk"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base text-brand-dark-text bg-white hover:bg-purple-50 shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40 cursor-pointer"
                  >
                    <Download className="w-5 h-5 text-brand-purple" />
                    <span>Download for Android (APK)</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base text-purple-300 bg-white/10 border border-white/20 cursor-not-allowed opacity-80"
                    aria-disabled="true"
                    title="Download coming soon: The official APK release is being finalized."
                  >
                    <Clock className="w-5 h-5 text-purple-300" />
                    <span>Download coming soon</span>
                  </button>
                )}

                <div className="flex items-center gap-2 text-xs text-purple-200">
                  {isReady ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Official APK Hosted & Ready
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      Download Coming Soon
                    </span>
                  )}
                </div>
              </div>

              {/* Friendly explanation if unconfigured */}
              {!isReady && (
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs text-purple-200/90 text-left">
                  <p className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-brand-pink shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white font-semibold">Download coming soon:</strong> The official v{APP_CONFIG.version} standalone APK package will be available for direct download right here. Once published, simply tap the button above to start your download.
                    </span>
                  </p>
                </div>
              )}

              {/* Verified Specs Details */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 text-xs">
                <div>
                  <p className="text-purple-300/70 uppercase tracking-wider text-[10px] font-bold">Version</p>
                  <p className="font-bold text-sm text-white font-mono mt-0.5">v{APP_CONFIG.version}</p>
                </div>
                <div>
                  <p className="text-purple-300/70 uppercase tracking-wider text-[10px] font-bold">OS Requirement</p>
                  <p className="font-bold text-sm text-white mt-0.5">Android 8.0+</p>
                </div>
                <div>
                  <p className="text-purple-300/70 uppercase tracking-wider text-[10px] font-bold">File Size</p>
                  <p className="font-bold text-sm text-white font-mono mt-0.5">{APP_CONFIG.verifiedFileSize}</p>
                </div>
                <div>
                  <p className="text-purple-300/70 uppercase tracking-wider text-[10px] font-bold">Package Name</p>
                  <p className="font-semibold text-xs text-white/90 truncate font-mono mt-0.5">
                    {APP_CONFIG.packageName}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Short Step-by-Step Android Installation Guide */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/10 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <FolderOpen className="w-4 h-4 text-brand-pink" />
                  <span>How to Install the APK</span>
                </h3>
                <span className="text-[11px] font-semibold text-purple-200 bg-white/10 px-2 py-0.5 rounded-md">
                  Android Sideload Guide
                </span>
              </div>

              <ol className="space-y-3.5 text-xs sm:text-sm text-purple-200/90">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-brand text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">
                    1
                  </span>
                  <div>
                    <strong className="text-white block font-semibold mb-0.5">Download the APK</strong>
                    <span>
                      Tap <strong className="text-white">Download for Android</strong> above on your phone or mobile browser.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-brand text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">
                    2
                  </span>
                  <div>
                    <strong className="text-white block font-semibold mb-0.5">Allow Unknown Apps</strong>
                    <span>
                      Open the downloaded file from your notifications. If prompted with <em>"Install unknown apps"</em>, tap <strong className="text-white">Settings</strong> and toggle on <strong className="text-white">"Allow from this source"</strong>.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-brand text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm">
                    3
                  </span>
                  <div>
                    <strong className="text-white block font-semibold mb-0.5">Install & Save Reels</strong>
                    <span>
                      Tap <strong className="text-white">Install</strong>. Open ReelFetch, grant gallery permissions when prompted, and start saving reels to your photos!
                    </span>
                  </div>
                </li>
              </ol>

              <div className="pt-2 flex items-center gap-2 text-emerald-300 text-xs font-medium border-t border-white/10">
                <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Official, malware-free package built directly from the source repository.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
