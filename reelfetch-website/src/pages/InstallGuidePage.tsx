import React, { useState } from 'react';
import {
  Download,
  Smartphone,
  ShieldCheck,
  AlertTriangle,
  ChevronDown,
  Info,
  Bell,
  HardDrive
} from 'lucide-react';
import { APP_CONFIG, isApkConfigured } from '../config/appConfig';
import { usePageMeta } from '../hooks/useRouter';

export const InstallGuidePage: React.FC = () => {
  const isReady = isApkConfigured();
  const [selectedBrowser, setSelectedBrowser] = useState<'chrome' | 'samsung' | 'files'>('chrome');
  const [openTroubleshoot, setOpenTroubleshoot] = useState<string | null>('issue-1');

  usePageMeta(
    'Android Installation Guide — How to Install ReelFetch APK',
    'Step-by-step guide to installing the ReelFetch Android APK. Learn how to enable Unknown Apps, handle Play Protect, configure permissions, and troubleshoot install issues.'
  );

  const troubleshootingItems = [
    {
      id: 'issue-1',
      title: 'Android shows "App not installed"',
      cause: 'Usually caused by a conflicting older build, an existing test version with a mismatched signature, or insufficient device storage.',
      solution:
        '1. Check your apps list and uninstall any previous test version of ReelFetch.\n2. Ensure your phone has at least 300 MB of free internal storage space.\n3. Restart your phone and reinstall the freshly downloaded APK.',
    },
    {
      id: 'issue-2',
      title: '"There was a problem parsing the package" (Parse Error)',
      cause: 'The APK file was corrupted during download or your device is running an incompatible Android version.',
      solution:
        '1. Verify your Android version: Go to Settings > About Phone > Software Information. ReelFetch requires Android 8.0 (Oreo) or higher.\n2. If your Android version is 8.0+, the download was likely interrupted. Delete the file from your Downloads folder and re-download.',
    },
    {
      id: 'issue-3',
      title: 'Browser shows "File might be harmful"',
      cause: 'Google Chrome and modern browsers display this generic warning for ALL downloaded .apk executable packages outside Google Play.',
      solution:
        'Tap "Download anyway". ReelFetch contains zero malicious code, advertising SDKs, or spyware.',
    },
    {
      id: 'issue-4',
      title: 'Google Play Protect says "Unrecognized app"',
      cause: 'Because ReelFetch is distributed directly as an independent APK without Google Play certification, Play Protect prompts for manual confirmation.',
      solution:
        'Tap "More details" and then tap "Install anyway". You can optionally let Play Protect scan the app—it will verify clean.',
    },
    {
      id: 'issue-5',
      title: 'Saved videos are not showing in my Gallery / Google Photos',
      cause: 'Some Android vendor skins (MIUI, ColorOS) delay MediaStore gallery indexing for newly downloaded files.',
      solution:
        '1. Open your phone\'s built-in "Files" or "My Files" app.\n2. Navigate to Internal Storage > ReelFetch.\n3. Tap any video once to trigger the Android MediaStore scanner. The album will now appear in your photos app.',
    },
  ];

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light-purple border border-brand-border-light text-xs font-bold text-brand-purple uppercase tracking-wider">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Official Sideloading Walkthrough</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark-text tracking-tight leading-tight">
            How to Install <span className="text-gradient">ReelFetch APK</span>
          </h1>

          <p className="text-base sm:text-lg text-brand-secondary-text leading-relaxed">
            Follow this clear step-by-step guide to download and install ReelFetch on any Android device running Android 8.0 or higher.
          </p>
        </div>

        {/* Quick Specs & Direct Download Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#1E1238] via-[#2A1553] to-[#17152A] p-7 sm:p-9 text-white shadow-xl border border-purple-900/40 relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                  Ready to Install
                </span>
                <h2 className="text-2xl font-bold text-white mt-0.5">ReelFetch Standalone APK</h2>
              </div>
              
              <div>
                {isReady ? (
                  <a
                    href={APP_CONFIG.apkDownloadUrl}
                    download="ReelFetch.apk"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-brand-dark-text bg-white hover:bg-purple-50 shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-brand-purple" />
                    <span>Download APK ({APP_CONFIG.verifiedFileSize || '108.3 MB'})</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-purple-300 bg-white/10 border border-white/15">
                    Release Pending (Coming soon)
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <p className="text-purple-300/70 font-medium">Version</p>
                <p className="font-bold text-sm text-white font-mono mt-0.5">v{APP_CONFIG.version}</p>
              </div>
              <div>
                <p className="text-purple-300/70 font-medium">OS Requirement</p>
                <p className="font-bold text-sm text-white mt-0.5">Android 8.0+</p>
              </div>
              <div>
                <p className="text-purple-300/70 font-medium">File Name</p>
                <p className="font-bold text-sm text-white font-mono mt-0.5 truncate">ReelFetch.apk</p>
              </div>
              <div>
                <p className="text-purple-300/70 font-medium">Package</p>
                <p className="font-bold text-xs text-purple-200 font-mono mt-0.5 truncate">{APP_CONFIG.packageName}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sideload Walkthrough Steps */}
        <div className="space-y-10">
          <div className="border-b border-brand-border-subtle pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-text tracking-tight">
              Step-by-Step Installation Process
            </h2>
            <p className="text-sm text-brand-secondary-text mt-1">
              Installing an APK outside Google Play is standard on Android. Here is how it works:
            </p>
          </div>

          <div className="space-y-8">
            
            {/* Step 1 */}
            <div className="flex gap-5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-brand text-white flex items-center justify-center font-extrabold text-base shrink-0 shadow-md shadow-brand-purple/20">
                1
              </div>
              <div className="space-y-3 flex-1 pt-1">
                <h3 className="text-xl font-bold text-brand-dark-text">Download the APK File</h3>
                <p className="text-sm text-brand-secondary-text leading-relaxed">
                  Tap the <strong className="text-brand-dark-text">Download APK</strong> button above from your Android phone’s browser. Your browser will download <code className="bg-slate-100 px-1.5 py-0.5 rounded text-brand-purple font-mono text-xs">ReelFetch.apk</code>.
                </p>
                <div className="p-3.5 rounded-2xl bg-brand-light-purple/50 border border-brand-border-light text-xs text-brand-secondary-text flex items-start gap-2">
                  <Info className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                  <span>
                    If your browser warns that <em>"File might be harmful"</em>, tap <strong>Download anyway</strong>. This is Android's default caution for any APK file downloaded via a web browser.
                  </span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-brand text-white flex items-center justify-center font-extrabold text-base shrink-0 shadow-md shadow-brand-purple/20">
                2
              </div>
              <div className="space-y-4 flex-1 pt-1">
                <h3 className="text-xl font-bold text-brand-dark-text">Allow "Install Unknown Apps"</h3>
                <p className="text-sm text-brand-secondary-text leading-relaxed">
                  When the download finishes, tap the completed notification or open your Downloads folder and tap <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-xs">ReelFetch.apk</code>. Android requires you to authorize the app that downloaded the file to perform installs.
                </p>

                {/* Browser Tab Selector */}
                <div className="bg-brand-surface-card border border-brand-border-subtle rounded-2xl p-4 space-y-3">
                  <p className="text-xs font-bold text-brand-dark-text uppercase tracking-wider">
                    Select your browser or app to view exact instructions:
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedBrowser('chrome')}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        selectedBrowser === 'chrome'
                          ? 'bg-brand-purple text-white shadow-sm'
                          : 'bg-white text-brand-secondary-text border border-brand-border-subtle hover:bg-slate-50'
                      }`}
                    >
                      Google Chrome
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedBrowser('samsung')}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        selectedBrowser === 'samsung'
                          ? 'bg-brand-purple text-white shadow-sm'
                          : 'bg-white text-brand-secondary-text border border-brand-border-subtle hover:bg-slate-50'
                      }`}
                    >
                      Samsung Internet
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedBrowser('files')}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        selectedBrowser === 'files'
                          ? 'bg-brand-purple text-white shadow-sm'
                          : 'bg-white text-brand-secondary-text border border-brand-border-subtle hover:bg-slate-50'
                      }`}
                    >
                      Files by Google / My Files
                    </button>
                  </div>

                  {/* Browser-specific instructions */}
                  <div className="pt-2 text-xs text-brand-secondary-text leading-relaxed space-y-1.5">
                    {selectedBrowser === 'chrome' && (
                      <ol className="list-decimal list-inside space-y-1 pl-1">
                        <li>Tap the downloaded file. When prompted with <em>"Chrome needs permission to install apps"</em>, tap <strong>Settings</strong>.</li>
                        <li>Toggle ON the switch for <strong>"Allow from this source"</strong>.</li>
                        <li>Tap the Android Back button once to return to the installer.</li>
                      </ol>
                    )}
                    {selectedBrowser === 'samsung' && (
                      <ol className="list-decimal list-inside space-y-1 pl-1">
                        <li>Tap <em>ReelFetch.apk</em> in Samsung Internet Downloads.</li>
                        <li>When prompted, tap <strong>Settings</strong>.</li>
                        <li>Toggle ON <strong>"Allow from this source"</strong> for Samsung Internet.</li>
                        <li>Press Back to proceed with the install.</li>
                      </ol>
                    )}
                    {selectedBrowser === 'files' && (
                      <ol className="list-decimal list-inside space-y-1 pl-1">
                        <li>Open the <strong>Files</strong> or <strong>My Files</strong> app on your device.</li>
                        <li>Open the <strong>Downloads</strong> folder and tap <code className="font-mono">ReelFetch.apk</code>.</li>
                        <li>If asked to allow your file manager to install unknown apps, tap <strong>Settings</strong> and toggle ON <strong>"Allow from this source"</strong>.</li>
                      </ol>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-brand text-white flex items-center justify-center font-extrabold text-base shrink-0 shadow-md shadow-brand-purple/20">
                3
              </div>
              <div className="space-y-3 flex-1 pt-1">
                <h3 className="text-xl font-bold text-brand-dark-text">Complete the Installation</h3>
                <p className="text-sm text-brand-secondary-text leading-relaxed">
                  On the installation prompt, tap <strong className="text-brand-dark-text">Install</strong>. If Google Play Protect shows a notification stating <em>"Unrecognized app"</em>, tap <strong className="text-brand-dark-text">"More details"</strong> and then <strong className="text-brand-dark-text">"Install anyway"</strong>.
                </p>
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Play Protect triggers this prompt for any app not installed through the Play Store. ReelFetch contains no malware, advertisements, or background trackers.
                  </span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-brand text-white flex items-center justify-center font-extrabold text-base shrink-0 shadow-md shadow-brand-purple/20">
                4
              </div>
              <div className="space-y-3 flex-1 pt-1">
                <h3 className="text-xl font-bold text-brand-dark-text">Grant Permissions & Start Saving</h3>
                <p className="text-sm text-brand-secondary-text leading-relaxed">
                  Open ReelFetch from your app drawer. The app requires only two permissions to function:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-2xl border border-brand-border-subtle bg-white space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-brand-dark-text">
                      <HardDrive className="w-4 h-4 text-brand-purple" />
                      <span>Photos & Media Storage</span>
                    </div>
                    <p className="text-xs text-brand-secondary-text">
                      Required to write downloaded HD/SD videos and MP3 files into your local Gallery (<code className="font-mono text-[10px]">DCIM</code> and <code className="font-mono text-[10px]">Internal Storage/ReelFetch</code>).
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl border border-brand-border-subtle bg-white space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-brand-dark-text">
                      <Bell className="w-4 h-4 text-brand-purple" />
                      <span>Notifications</span>
                    </div>
                    <p className="text-xs text-brand-secondary-text">
                      Required solely on Android 13 and higher to display download progress and notify you when a Reel has been saved.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Troubleshooting Accordion */}
        <div className="space-y-6 pt-6 border-t border-brand-border-subtle">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-text tracking-tight flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              <span>Troubleshooting & Common Questions</span>
            </h2>
            <p className="text-sm text-brand-secondary-text">
              Ran into an issue while downloading or installing? Here are solutions to the most common Android sideloading situations:
            </p>
          </div>

          <div className="space-y-3">
            {troubleshootingItems.map((item) => {
              const isOpen = openTroubleshoot === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-brand-border-subtle bg-white overflow-hidden shadow-card-soft transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenTroubleshoot(isOpen ? null : item.id)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-brand-light-purple/20 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-sm sm:text-base text-brand-dark-text">
                      {item.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-brand-secondary-text shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-brand-purple' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-brand-secondary-text leading-relaxed border-t border-brand-border-subtle/50 space-y-2 animate-in fade-in duration-150">
                      <p>
                        <strong className="text-brand-dark-text">Why it happens:</strong> {item.cause}
                      </p>
                      <div className="p-3 rounded-xl bg-brand-surface-card border border-brand-border-subtle whitespace-pre-line text-xs font-medium text-brand-dark-text/90">
                        {item.solution}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Help Notice */}
        <div className="p-6 rounded-3xl bg-brand-light-purple/40 border border-brand-border-light text-center space-y-3">
          <h3 className="font-bold text-base text-brand-dark-text">Need Further Assistance?</h3>
          <p className="text-xs text-brand-secondary-text max-w-lg mx-auto">
            If you experience an issue not listed here or need help verifying your installation, feel free to contact developer support at{' '}
            <a href={`mailto:${APP_CONFIG.supportEmail}`} className="text-brand-purple font-semibold hover:underline">
              {APP_CONFIG.supportEmail}
            </a>.
          </p>
        </div>

      </div>
    </div>
  );
};
