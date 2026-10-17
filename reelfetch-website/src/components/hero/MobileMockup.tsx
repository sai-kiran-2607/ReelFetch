import React, { useState } from 'react';
import {
  Download,
  Share2,
  CheckCircle2,
  FolderDown,
  Sparkles,
  Play,
  Copy,
  ShieldCheck,
  Video
} from 'lucide-react';

export const MobileMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'downloads'>('home');
  const [mockPasted, setMockPasted] = useState(true);
  const [selectedQuality, setSelectedQuality] = useState<'hd' | 'sd' | 'audio'>('hd');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleSimulateDownload = () => {
    if (isDownloading) return;
    setIsDownloading(true);
    setDownloadSuccess(false);

    setTimeout(() => {
      setIsDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => {
        setDownloadSuccess(false);
      }, 4000);
    }, 1800);
  };

  return (
    <div className="relative mx-auto max-w-[340px] sm:max-w-[370px] w-full">
      {/* Outer ambient decorative glows */}
      <div className="absolute -inset-4 bg-gradient-to-r from-brand-purple/20 via-brand-pink/20 to-brand-deep-purple/20 rounded-[50px] blur-2xl -z-10 opacity-70 animate-pulse-slow pointer-events-none" />

      {/* Floating Badge Left */}
      <div className="hidden sm:flex absolute -left-8 top-28 z-20 items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-brand-border-subtle animate-float">
        <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-bold text-brand-dark-text">Saved to Gallery</p>
          <p className="text-[10px] text-brand-secondary-text">Auto-synced to DCIM</p>
        </div>
      </div>

      {/* Floating Badge Right */}
      <div className="hidden sm:flex absolute -right-8 bottom-32 z-20 items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-brand-border-subtle animate-float [animation-delay:2s]">
        <div className="w-8 h-8 rounded-xl bg-brand-light-purple text-brand-purple flex items-center justify-center font-bold">
          <Share2 className="w-4 h-4" />
        </div>
        <div>
          <p className="text-xs font-bold text-brand-dark-text">Share Sheet Ready</p>
          <p className="text-[10px] text-brand-secondary-text">Share directly from IG</p>
        </div>
      </div>

      {/* Phone Hardware Shell */}
      <div className="relative bg-[#17152A] p-3 rounded-[46px] shadow-mockup border-[4px] border-[#2E284A]">
        {/* Speaker / Camera Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#17152A] rounded-full z-30 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-[#2E284A] mr-2" />
          <div className="w-12 h-1.5 rounded-full bg-[#2E284A]" />
        </div>

        {/* Screen Display Container */}
        <div className="relative bg-white rounded-[38px] overflow-hidden pt-8 pb-3 min-h-[580px] flex flex-col justify-between select-none">
          
          {/* In-App Header */}
          <div className="px-4 py-2 border-b border-brand-border-subtle flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-brand-border-light shadow-sm flex items-center justify-center bg-brand-light-purple">
                <img
                  src="/logo.webp"
                  alt="ReelFetch"
                  width="32"
                  height="32"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-sm text-brand-dark-text">ReelFetch</span>
                </div>
                <p className="text-[10px] text-brand-secondary-text">Instagram Reels Saver</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[10px] font-bold">Ready</span>
            </div>
          </div>

          {/* Tab Switcher Inside Screen */}
          <div className="px-4 pt-3">
            <div className="grid grid-cols-2 p-1 bg-brand-light-purple/60 rounded-xl border border-brand-border-light text-xs font-bold text-center">
              <button
                type="button"
                onClick={() => setActiveTab('home')}
                className={`py-1.5 rounded-lg transition-all ${
                  activeTab === 'home'
                    ? 'bg-white text-brand-purple shadow-sm'
                    : 'text-brand-secondary-text hover:text-brand-dark-text'
                }`}
              >
                Link Saver
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('downloads')}
                className={`py-1.5 rounded-lg transition-all ${
                  activeTab === 'downloads'
                    ? 'bg-white text-brand-purple shadow-sm'
                    : 'text-brand-secondary-text hover:text-brand-dark-text'
                }`}
              >
                Downloads (2)
              </button>
            </div>
          </div>

          {/* Screen Body */}
          <div className="p-4 flex-1 overflow-y-auto">
            {activeTab === 'home' ? (
              <div className="space-y-3.5">
                {/* Input Bar */}
                <div className="relative">
                  <div className="flex items-center rounded-xl border border-brand-purple/40 bg-brand-light-purple/30 p-1.5 focus-within:border-brand-purple focus-within:ring-2 focus-within:ring-brand-purple/20 transition-all">
                    <input
                      type="text"
                      readOnly
                      value={mockPasted ? 'https://www.instagram.com/reel/C8qXY10L9/' : ''}
                      placeholder="Paste Instagram Reel link..."
                      className="w-full text-xs bg-transparent px-2 text-brand-dark-text font-medium outline-none truncate"
                    />
                    <button
                      type="button"
                      onClick={() => setMockPasted(!mockPasted)}
                      className="px-2.5 py-1 rounded-lg bg-brand-purple text-white text-[11px] font-bold flex items-center gap-1 hover:bg-brand-purple-hover transition-colors shrink-0"
                    >
                      <Copy className="w-3 h-3" />
                      <span>{mockPasted ? 'Clear' : 'Paste'}</span>
                    </button>
                  </div>
                </div>

                {/* If link pasted: Reel Preview Card */}
                {mockPasted ? (
                  <div className="border border-brand-border-subtle rounded-2xl p-3 bg-white shadow-card-soft space-y-3 animate-in fade-in duration-200">
                    <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900 h-32 flex items-center justify-center text-white">
                      {/* Video graphic preview */}
                      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#7138F5_1px,transparent_1px)] [background-size:12px_12px]" />
                      <div className="z-10 flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-lg">
                          <Play className="w-5 h-5 fill-white ml-0.5" />
                        </div>
                        <span className="text-[10px] mt-1.5 font-medium px-2 py-0.5 rounded bg-black/40">
                          Reel • 0:28
                        </span>
                      </div>
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-brand-pink/90 text-white text-[9px] font-bold">
                        Verified Link
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-brand-dark-text truncate">
                          Sunset in Dolomites 🏔️
                        </span>
                        <span className="text-[10px] text-brand-secondary-text font-mono">1080p</span>
                      </div>
                      <p className="text-[10px] text-brand-secondary-text truncate mt-0.5">
                        instagram.com/reel/C8qXY10L9
                      </p>
                    </div>

                    {/* Quality Selector */}
                    <div>
                      <p className="text-[10px] font-bold text-brand-secondary-text uppercase tracking-wider mb-1.5">
                        Select Download Format
                      </p>
                      <div className="grid grid-cols-3 gap-1.5 text-[11px] font-bold">
                        <button
                          type="button"
                          onClick={() => setSelectedQuality('hd')}
                          className={`py-1 rounded-lg border text-center transition-all ${
                            selectedQuality === 'hd'
                              ? 'border-brand-purple bg-brand-light-purple text-brand-purple'
                              : 'border-brand-border-subtle text-brand-secondary-text hover:bg-slate-50'
                          }`}
                        >
                          HD Video
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedQuality('sd')}
                          className={`py-1 rounded-lg border text-center transition-all ${
                            selectedQuality === 'sd'
                              ? 'border-brand-purple bg-brand-light-purple text-brand-purple'
                              : 'border-brand-border-subtle text-brand-secondary-text hover:bg-slate-50'
                          }`}
                        >
                          SD Video
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedQuality('audio')}
                          className={`py-1 rounded-lg border text-center transition-all ${
                            selectedQuality === 'audio'
                              ? 'border-brand-purple bg-brand-light-purple text-brand-purple'
                              : 'border-brand-border-subtle text-brand-secondary-text hover:bg-slate-50'
                          }`}
                        >
                          Audio MP3
                        </button>
                      </div>
                    </div>

                    {/* Download Trigger */}
                    <button
                      type="button"
                      onClick={handleSimulateDownload}
                      disabled={isDownloading}
                      className="w-full py-2.5 rounded-xl bg-gradient-brand text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-brand-purple/20 hover:opacity-95 transition-all active:scale-[0.98]"
                    >
                      {isDownloading ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Downloading to Device...</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          <span>Save Reel to Gallery</span>
                        </>
                      )}
                    </button>

                    {downloadSuccess && (
                      <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] flex items-center gap-1.5 font-medium animate-in fade-in">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Saved to Internal Storage & Gallery!</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="border border-dashed border-brand-border-strong rounded-2xl p-6 text-center bg-brand-light-purple/20">
                    <div className="w-12 h-12 rounded-2xl bg-white text-brand-purple mx-auto flex items-center justify-center shadow-sm border border-brand-border-light mb-3">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <p className="text-xs font-bold text-brand-dark-text">No Reel Selected</p>
                    <p className="text-[11px] text-brand-secondary-text mt-1">
                      Paste a Reel URL above or tap Share in Instagram and choose ReelFetch.
                    </p>
                    <button
                      type="button"
                      onClick={() => setMockPasted(true)}
                      className="mt-3 text-[11px] font-bold text-brand-purple hover:underline inline-flex items-center gap-1"
                    >
                      Load Sample Reel Preview
                    </button>
                  </div>
                )}

                {/* Privacy footnote inside mockup */}
                <div className="flex items-center justify-center gap-1 text-[10px] text-brand-secondary-text">
                  <ShieldCheck className="w-3 h-3 text-brand-purple" />
                  <span>100% on-device processing • No login required</span>
                </div>
              </div>
            ) : (
              /* Downloads Tab */
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-bold text-brand-secondary-text px-1">
                  <span>Saved Files</span>
                  <span className="text-brand-purple">2 Completed</span>
                </div>

                {/* Item 1 */}
                <div className="p-2.5 rounded-xl border border-brand-border-subtle bg-white shadow-sm flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-brand-light-purple flex items-center justify-center text-brand-purple shrink-0">
                    <Video className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-brand-dark-text truncate">
                      sunset_dolomites_reel.mp4
                    </p>
                    <p className="text-[10px] text-brand-secondary-text flex items-center gap-1">
                      <span className="text-emerald-600 font-semibold">Saved to Gallery</span> • 14.2 MB
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-brand-dark-text hover:bg-brand-light-purple">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Item 2 */}
                <div className="p-2.5 rounded-xl border border-brand-border-subtle bg-white shadow-sm flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center text-brand-pink shrink-0">
                    <FolderDown className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-brand-dark-text truncate">
                      cooking_pasta_carbonara.mp4
                    </p>
                    <p className="text-[10px] text-brand-secondary-text flex items-center gap-1">
                      <span className="text-emerald-600 font-semibold">Saved to Gallery</span> • 9.8 MB
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-brand-dark-text hover:bg-brand-light-purple">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <p className="text-[10px] text-brand-secondary-text">
                    Stored locally in <code className="text-brand-purple font-mono">Internal Storage/ReelFetch</code>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Android Bottom Navigation Pill */}
          <div className="pt-2 flex justify-center">
            <div className="w-24 h-1 bg-slate-300 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
