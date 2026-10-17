import React from 'react';
import {
  FileText,
  AlertCircle,
  ShieldCheck,
  Scale,
  Mail,
  Info
} from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { usePageMeta } from '../hooks/useRouter';

export const TermsPage: React.FC = () => {
  usePageMeta(
    'Terms of Use — ReelFetch',
    'Read the Terms of Use for ReelFetch. Learn about permissible personal use, authorized content saving, intellectual property policies, and legal disclaimers.'
  );

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="border-b border-brand-border-subtle pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light-purple border border-brand-border-light text-xs font-bold text-brand-purple">
            <Scale className="w-3.5 h-3.5" />
            <span>Legal Agreement</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark-text tracking-tight">
            Terms of Use
          </h1>

          <p className="text-xs text-brand-secondary-text">
            Last Updated: <strong>{APP_CONFIG.lastUpdated}</strong> • Please read these terms carefully before using ReelFetch
          </p>
        </div>

        {/* Essential Requirement Banner */}
        <div className="p-6 rounded-3xl bg-purple-50/80 border border-brand-border-light text-brand-dark-text space-y-3">
          <h2 className="text-base font-bold text-brand-purple flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-purple" />
            <span>Important Notice: Authorized Content Saving Only</span>
          </h2>
          <p className="text-sm text-brand-secondary-text leading-relaxed">
            ReelFetch is a personal device utility designed to assist users in saving and archiving public media for personal, offline viewing. You agree that you will <strong className="text-brand-dark-text font-semibold">only download and save content that you own, have created, or have express permission, license, or legal authorization from the respective copyright owner to download</strong>. Commercial redistribution or copyright infringement is strictly prohibited.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-sm text-brand-secondary-text leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-dark-text flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-purple" />
              <span>1. Agreement to Terms</span>
            </h2>
            <p>
              By accessing the ReelFetch website (<code className="bg-slate-100 px-1 py-0.5 rounded text-brand-purple font-mono text-xs">reel-fetch-henna.vercel.app</code>) or downloading, installing, or using the ReelFetch Android application (<code className="bg-slate-100 px-1 py-0.5 rounded text-brand-purple font-mono text-xs">{APP_CONFIG.packageName}</code>), you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, do not download, install, or use the software.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3" id="trademark">
            <h2 className="text-xl font-bold text-brand-dark-text flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-brand-purple" />
              <span>2. Independent Status & Non-Affiliation Disclaimer</span>
            </h2>
            <div className="p-4 rounded-2xl bg-slate-50 border border-brand-border-subtle text-xs text-brand-dark-text space-y-2">
              <p className="font-semibold text-brand-dark-text">
                ReelFetch is completely independent and is not affiliated with Meta Platforms, Inc.
              </p>
              <p className="text-brand-secondary-text leading-relaxed">
                ReelFetch is an independent Android software utility. ReelFetch is not affiliated with, associated with, authorized by, sponsored by, endorsed by, or in any way officially connected with Instagram, Meta Platforms, Inc., or any of their parent companies, subsidiaries, or affiliates.
              </p>
              <p className="text-brand-secondary-text leading-relaxed">
                "Instagram", "Reels", and associated names, marks, emblems, and logos are registered trademarks of Meta Platforms, Inc. Their mention on this website and in the app is solely for nominative and descriptive purposes to identify third-party compatibility.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3" id="copyright">
            <h2 className="text-xl font-bold text-brand-dark-text flex items-center gap-2">
              <Scale className="w-5 h-5 text-brand-purple" />
              <span>3. Permitted Use & Intellectual Property Policy</span>
            </h2>
            <p>
              We respect the intellectual property rights of content creators and expect our users to do the same:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong>Authorized Downloading:</strong> You must ensure you have the appropriate legal rights, license, or explicit consent from the copyright holder before downloading any media.
              </li>
              <li>
                <strong>Personal, Non-Commercial Offline Viewing:</strong> Saved media is intended strictly for your personal, private, non-commercial offline viewing. You may not sell, commercially exploit, broadcast, publicly perform, re-publish, or syndicate any downloaded media without the explicit written permission of the content creator.
              </li>
              <li>
                <strong>No Circumvention:</strong> ReelFetch processes only publicly accessible URLs. The application does not circumvent, bypass, or disable digital rights management (DRM), cryptographic protection mechanisms, or access control measures. It cannot download media from private accounts or expiring Stories.
              </li>
              <li>
                <strong>Third-Party Platform Terms:</strong> You agree to abide by all applicable terms of service and community guidelines of the platforms from which you access content, including Instagram’s Terms of Use.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-dark-text">4. License & Restrictions</h2>
            <p>
              Subject to your compliance with these Terms, you are granted a limited, personal, non-exclusive, non-transferable, revocable license to install and use the ReelFetch Android APK on your compatible Android device.
            </p>
            <p>You agree that you will not:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-xs">
              <li>Use the software for any unlawful purpose or in violation of any applicable local, state, national, or international law.</li>
              <li>Attempt to decompile, reverse-engineer, or disassemble the application, except to the extent permitted by mandatory statutory law.</li>
              <li>Use automated bots, scripts, or scrapers to overload or abuse media endpoints.</li>
              <li>Misrepresent ReelFetch as an official product of Meta Platforms, Inc. or Instagram.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-dark-text">5. Disclaimer of Warranties</h2>
            <p className="uppercase text-xs font-bold text-brand-dark-text">
              The software and website are provided "AS IS" and "AS AVAILABLE".
            </p>
            <p>
              To the maximum extent permitted by applicable law, ReelFetch and its maintainers disclaim all warranties of any kind, whether express, implied, or statutory, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, non-infringement, and uninterrupted or error-free operation.
            </p>
            <p>
              <strong>Third-Party Platform Changes:</strong> Because ReelFetch interacts with third-party web endpoints that are subject to modification, deprecation, or alteration by Instagram or Meta Platforms at any time, we do not warrant that the application will operate continuously, reliably, or without interruptions.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-dark-text">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, ReelFetch, its maintainers, developers, and distributors shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including loss of data, device damage, loss of profits, or legal claims resulting from your use of or inability to use the application or website, or any copyright infringement committed by you.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-dark-text">7. Copyright Inquiries & Takedowns</h2>
            <p>
              If you are a copyright owner or an authorized agent and believe that content accessible through our platform infringes your copyright or requires review, please email our support team at{' '}
              <a href={`mailto:${APP_CONFIG.supportEmail}`} className="text-brand-purple font-semibold hover:underline">
                {APP_CONFIG.supportEmail}
              </a>{' '}
              with a description of the matter. We will review and respond promptly.
            </p>
          </section>

          {/* Section 8: Legal Identity & Maintainer Input Items */}
          <section className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200/80 text-amber-950 space-y-3">
            <div className="flex items-start gap-2.5">
              <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h3 className="font-bold text-base text-amber-900">
                  Required Maintainer Inputs for Governing Law & Entity
                </h3>
                <p className="text-xs text-amber-900 leading-relaxed">
                  These Terms of Use are currently structured for an independent open developer utility. If you wish to bind users under a specific formal corporate entity and legal jurisdiction, the following items require your specific input:
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-amber-800 pl-1">
                  <li><strong>Governing Jurisdiction:</strong> [Maintainer Input Required: Specify governing state, country, or arbitration venue].</li>
                  <li><strong>Corporate Entity Name:</strong> [Maintainer Input Required: Specify legal entity name if incorporated].</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 9: Modifications & Contact */}
          <section className="space-y-3 pt-4 border-t border-brand-border-subtle">
            <h2 className="text-xl font-bold text-brand-dark-text flex items-center gap-2">
              <Mail className="w-5 h-5 text-brand-purple" />
              <span>8. Modifications & Contact</span>
            </h2>
            <p>
              We reserve the right to revise or update these Terms of Use at our sole discretion. Any changes will be posted on this page with an updated revision date.
            </p>
            <p className="font-semibold text-brand-dark-text">
              Questions regarding these Terms? Contact us at:{' '}
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
