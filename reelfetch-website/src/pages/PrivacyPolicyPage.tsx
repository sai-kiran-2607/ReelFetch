import React from 'react';
import {
  ShieldCheck,
  Lock,
  HardDrive,
  FileText,
  Mail,
  AlertCircle,
  Globe,
  Smartphone,
  Info
} from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { usePageMeta } from '../hooks/useRouter';

export const PrivacyPolicyPage: React.FC = () => {
  usePageMeta(
    'Privacy Policy — ReelFetch Android App & Website',
    'Transparent privacy policy for ReelFetch. Learn about our device-local data handling, website server logs, Android permissions, and commitment to privacy.'
  );

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="border-b border-brand-border-subtle pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light-purple border border-brand-border-light text-xs font-bold text-brand-purple">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Legal Document</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-text tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-xs text-brand-secondary-text">
            Last Updated: <strong>{APP_CONFIG.lastUpdated}</strong> • Effective immediately for the ReelFetch Website and Android Application
          </p>
        </div>

        {/* Executive Summary Callout */}
        <div className="p-6 rounded-3xl bg-brand-light-purple/40 border border-brand-border-light text-brand-dark-text space-y-2">
          <h2 className="text-base font-bold text-brand-purple flex items-center gap-2">
            <Lock className="w-4 h-4" />
            <span>Summary of Key Principles</span>
          </h2>
          <p className="text-sm text-brand-secondary-text leading-relaxed">
            ReelFetch is architected as an on-device utility. We do not require account creation, do not request or store your Instagram credentials, do not maintain remote media repositories, and do not track or sell your personal information. This Privacy Policy details how data is handled across both our promotional website and our Android application.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-sm text-brand-secondary-text leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-dark-text flex items-center gap-2">
              <Globe className="w-5 h-5 text-brand-purple" />
              <span>1. Information Handled on the ReelFetch Website</span>
            </h2>
            <p>
              When you visit our public website (<code className="bg-slate-100 px-1 py-0.5 rounded text-brand-purple">https://reel-fetch-henna.vercel.app</code> or custom domain):
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong>Web Hosting Logs (Vercel Inc.):</strong> The website is deployed and hosted on Vercel. Like virtually all web servers, Vercel automatically collects standard HTTP request logs when you access pages. These logs typically include your Internet Protocol (IP) address, browser user-agent string, operating system type, referring URL, requested page URL, and the date and time of the request. These logs are processed strictly for server maintenance, network security, DDoS mitigation, and reliable content delivery.
              </li>
              <li>
                <strong>APK File Distribution (GitHub Releases):</strong> When you click the download link for the ReelFetch Android APK (<code className="bg-slate-100 px-1 py-0.5 rounded text-xs">ReelFetch.apk</code>), your browser connects to GitHub's content delivery infrastructure (GitHub, Inc. / Microsoft Corporation). Network requests for the file are handled pursuant to GitHub’s own Privacy Statement.
              </li>
              <li>
                <strong>Cookies & Tracking Technologies:</strong> Our website does not set third-party marketing cookies, user profiling cookies, or tracking pixels (such as Meta Pixel or Google Analytics).
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-dark-text flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-brand-purple" />
              <span>2. Data Practices in the ReelFetch Android Application</span>
            </h2>
            <p>
              The ReelFetch Android application (<code className="bg-slate-100 px-1 py-0.5 rounded text-brand-purple font-mono text-xs">{APP_CONFIG.packageName}</code>) operates as a device-local media tool:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong>No Account or Credentials:</strong> You do not register for a ReelFetch account. The app never prompts for, records, accesses, or transmits your Instagram username, password, two-factor authentication tokens, or session cookies.
              </li>
              <li>
                <strong>Link Processing & Stripping:</strong> When you share or paste an Instagram URL into ReelFetch, query tracking parameters (such as <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">?igsh=...</code> or <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">?utm_source=...</code>) are parsed and stripped locally on your device to isolate the clean media identifier.
              </li>
              <li>
                <strong>Direct Media Streaming:</strong> Media files are streamed directly over secure HTTPS from public media servers to your local device. ReelFetch does not relay video streams through a private intermediary proxy or maintain a remote cache of downloaded videos.
              </li>
              <li>
                <strong>Local Storage & MediaStore:</strong> Downloaded video (<code className="bg-slate-100 px-1 py-0.5 rounded text-xs">.mp4</code>) and audio (<code className="bg-slate-100 px-1 py-0.5 rounded text-xs">.mp3</code>) files are stored entirely within your Android device’s local internal storage (<code className="bg-slate-100 px-1 py-0.5 rounded text-brand-purple font-mono text-xs">Internal Storage/ReelFetch</code>) and registered with the Android MediaStore so they appear in your Photos or Gallery app. ReelFetch never syncs or replicates your saved media to any cloud storage.
              </li>
              <li>
                <strong>In-App Download History:</strong> The downloads tab in the app reads file records stored locally on your device (in local SQLite / AsyncStorage). This history never leaves your device and can be cleared at any time directly within the app.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-dark-text flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-brand-purple" />
              <span>3. Android Device Permissions</span>
            </h2>
            <p>
              ReelFetch requests only the permissions strictly required to perform its advertised core features:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-brand-border-subtle rounded-xl overflow-hidden">
                <thead className="bg-brand-surface-card border-b border-brand-border-subtle text-brand-dark-text">
                  <tr>
                    <th className="p-3 font-bold">Permission</th>
                    <th className="p-3 font-bold">Android Version</th>
                    <th className="p-3 font-bold">Strict Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border-subtle">
                  <tr>
                    <td className="p-3 font-mono text-brand-purple font-medium">READ_MEDIA_VIDEO</td>
                    <td className="p-3">Android 13+ (API 33+)</td>
                    <td className="p-3">Allows saving downloaded videos to the device gallery and displaying them in the app's history.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-brand-purple font-medium">WRITE_EXTERNAL_STORAGE</td>
                    <td className="p-3">Android 8.0 - 12</td>
                    <td className="p-3">Allows writing downloaded media files into <code className="bg-slate-100 px-1 py-0.5 rounded">Internal Storage/ReelFetch</code> on older OS versions.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-brand-purple font-medium">POST_NOTIFICATIONS</td>
                    <td className="p-3">Android 13+ (API 33+)</td>
                    <td className="p-3">Allows posting download progress notifications and completion alerts.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-brand-purple font-medium">INTERNET</td>
                    <td className="p-3">All versions</td>
                    <td className="p-3">Allows fetching public media data directly from source media servers to your phone.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-brand-secondary-text italic">
              Note: ReelFetch never requests access to your contacts, camera, microphone, precise GPS location, or device call logs.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-dark-text flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-brand-purple" />
              <span>4. Third-Party Services & Links</span>
            </h2>
            <p>
              ReelFetch interacts with and references third-party platforms:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li>
                <strong>Instagram & Meta Platforms, Inc.:</strong> ReelFetch processes publicly available Instagram URLs provided by the user. ReelFetch is an independent third-party utility and is not affiliated with, endorsed by, or partnered with Meta Platforms, Inc. Your use of Instagram services is governed by Instagram's own Terms of Use and Data Policy.
              </li>
              <li>
                <strong>Infrastructure Providers:</strong> Vercel Inc. (web hosting) and GitHub Inc. (APK release asset hosting) act as technical infrastructure providers for distributing our software.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-dark-text flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-purple" />
              <span>5. User Rights, Data Retention & Deletion</span>
            </h2>
            <p>
              Because ReelFetch does not store user profiles, account identifiers, or personal databases on any server, there is no personal server data retained to export or delete. You retain 100% control over the media files saved to your device:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>To delete saved media: Delete the files from your Android Photos / Gallery app or via your device file manager at <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-xs">Internal Storage/ReelFetch</code>.</li>
              <li>To clear download records: Use the clear history function inside the ReelFetch app or clear the app's cache and data in your phone's Android Settings.</li>
              <li>To remove the app entirely: Uninstall ReelFetch via your phone’s App Settings or launcher.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-dark-text">6. Children's Privacy</h2>
            <p>
              ReelFetch is not directed to children under the age of 13 (or under 16 in the European Economic Area or UK). We do not knowingly solicit or collect personal information from children.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-dark-text">7. Updates to This Policy</h2>
            <p>
              We may revise this Privacy Policy from time to time to reflect modifications in our software, applicable operating system requirements, or legal standards. Any revisions will be published on this page with an updated "Last Updated" date.
            </p>
          </section>

          {/* Section 8: Legal Identity & Input Callout */}
          <section className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200/80 text-amber-950 space-y-3">
            <div className="flex items-start gap-2.5">
              <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h3 className="font-bold text-base text-amber-900">
                  Data Controller Identity & Required Maintainer Inputs
                </h3>
                <p className="text-xs text-amber-900 leading-relaxed">
                  ReelFetch is currently operated as an independent software release. To finalize this Privacy Policy for full corporate or commercial compliance, the following items require your specific input:
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-amber-800 pl-1">
                  <li><strong>Legal Entity / Data Controller:</strong> [Maintainer Input Required: Insert official company name, registered business identifier, or project maintainer legal identity].</li>
                  <li><strong>Registered Physical Address:</strong> [Maintainer Input Required: Specify physical registered mailing address and governing jurisdiction].</li>
                  <li><strong>Mobile Telemetry Disclosure:</strong> [Maintainer Input Required: Confirm whether any opt-in crash telemetry (e.g., Sentry, Firebase Crashlytics) will be incorporated into future mobile APK releases].</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 9: Contact */}
          <section className="space-y-3 pt-4 border-t border-brand-border-subtle">
            <h2 className="text-xl font-bold text-brand-dark-text flex items-center gap-2">
              <Mail className="w-5 h-5 text-brand-purple" />
              <span>8. Contact & Inquiries</span>
            </h2>
            <p>
              If you have any questions, clarifications, or privacy-related requests regarding this policy or ReelFetch, please reach out directly to developer support:
            </p>
            <p className="font-semibold text-brand-dark-text">
              Email:{' '}
              <a
                href={`mailto:${APP_CONFIG.supportEmail}`}
                className="text-brand-purple hover:underline"
              >
                {APP_CONFIG.supportEmail}
              </a>
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
