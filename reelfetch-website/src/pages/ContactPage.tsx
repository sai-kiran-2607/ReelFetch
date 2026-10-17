import React, { useState } from 'react';
import {
  Mail,
  Copy,
  CheckCircle2,
  Send,
  HelpCircle,
  MessageSquare,
  ShieldCheck,
  Clock,
  ArrowRight,
  Info
} from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';
import { useRouter, usePageMeta } from '../hooks/useRouter';

export const ContactPage: React.FC = () => {
  const { navigate } = useRouter();
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    topic: 'Bug Report',
    message: '',
  });

  usePageMeta(
    'Contact & Support — ReelFetch',
    'Get in touch with the ReelFetch team. Submit bug reports, feature suggestions, installation questions, or copyright inquiries.'
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(APP_CONFIG.supportEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.message) return;
    
    // Construct mailto link as direct fallback so user can send immediately via their default client
    const subject = encodeURIComponent(`[ReelFetch Support - ${form.topic}] Inquiry from ${form.name || 'User'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${APP_CONFIG.supportEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light-purple border border-brand-border-light text-xs font-bold text-brand-purple uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Developer Support</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark-text tracking-tight leading-tight">
            Get in Touch with <span className="text-gradient">ReelFetch</span>
          </h1>

          <p className="text-base sm:text-lg text-brand-secondary-text leading-relaxed">
            Have a question, feedback, bug report, or copyright inquiry? We're here to assist you.
          </p>
        </div>

        {/* Contact Method Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Support Card & Quick FAQ */}
          <div className="md:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-brand-surface-card border border-brand-border-subtle shadow-card-soft space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-brand-light-purple text-brand-purple flex items-center justify-center font-bold">
                <Mail className="w-6 h-6" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-brand-dark-text">Official Support Email</h2>
                <p className="text-xs text-brand-secondary-text mt-0.5">
                  Direct developer contact inbox
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-brand-border-subtle flex items-center justify-between gap-2">
                <span className="text-xs font-bold font-mono text-brand-purple truncate">
                  {APP_CONFIG.supportEmail}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-lg text-xs font-bold bg-brand-light-purple text-brand-purple hover:bg-brand-purple hover:text-white transition-colors flex items-center gap-1 shrink-0"
                  aria-label="Copy support email address"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-2 text-xs text-brand-secondary-text pt-1">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                  <span>Response time: Usually within 24–48 business hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Confidential and spam-free communication</span>
                </div>
              </div>
            </div>

            {/* Quick Self-Help Links */}
            <div className="p-6 rounded-3xl bg-white border border-brand-border-subtle shadow-card-soft space-y-3">
              <h3 className="font-bold text-sm text-brand-dark-text flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-brand-purple" />
                <span>Common Quick Help</span>
              </h3>
              
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    type="button"
                    onClick={() => navigate('/install-guide')}
                    className="w-full text-left p-2 rounded-xl hover:bg-brand-light-purple/40 text-brand-secondary-text hover:text-brand-purple transition-colors flex items-center justify-between"
                  >
                    <span>Having trouble installing the APK?</span>
                    <ArrowRight className="w-3 h-3 shrink-0" />
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigate('/#faq')}
                    className="w-full text-left p-2 rounded-xl hover:bg-brand-light-purple/40 text-brand-secondary-text hover:text-brand-purple transition-colors flex items-center justify-between"
                  >
                    <span>Check Frequently Asked Questions</span>
                    <ArrowRight className="w-3 h-3 shrink-0" />
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigate('/terms#copyright')}
                    className="w-full text-left p-2 rounded-xl hover:bg-brand-light-purple/40 text-brand-secondary-text hover:text-brand-purple transition-colors flex items-center justify-between"
                  >
                    <span>Copyright policy & rights inquiries</span>
                    <ArrowRight className="w-3 h-3 shrink-0" />
                  </button>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="md:col-span-7 bg-white rounded-3xl border border-brand-border-subtle p-7 sm:p-9 shadow-card-soft space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-brand-dark-text">Send a Message</h2>
              <p className="text-xs text-brand-secondary-text mt-1">
                Fill out the form below to launch your email client with your pre-composed request.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base">Message Prompt Dispatched!</h3>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-sm mx-auto">
                  Your email application has been launched with your inquiry addressed to <code className="font-mono">{APP_CONFIG.supportEmail}</code>. You can also email us directly at any time.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-xs font-bold text-brand-dark-text">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl border border-brand-border-subtle text-sm text-brand-dark-text focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block text-xs font-bold text-brand-dark-text">
                    Your Email Address <span className="text-brand-pink">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-brand-border-subtle text-sm text-brand-dark-text focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-topic" className="block text-xs font-bold text-brand-dark-text">
                    Inquiry Topic
                  </label>
                  <select
                    id="contact-topic"
                    value={form.topic}
                    onChange={(e) => setForm({ ...form, topic: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-border-subtle text-sm text-brand-dark-text bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all"
                  >
                    <option value="Bug Report">Bug Report</option>
                    <option value="APK Installation Help">APK Installation Help</option>
                    <option value="Feature Suggestion">Feature Suggestion</option>
                    <option value="Content / Copyright Inquiry">Content / Copyright Inquiry</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-xs font-bold text-brand-dark-text">
                    Your Message <span className="text-brand-pink">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your question, issue, or feedback in detail..."
                    className="w-full px-4 py-3 rounded-xl border border-brand-border-subtle text-sm text-brand-dark-text focus:outline-none focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-brand text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-brand-purple/25 hover:opacity-95 transition-all active:scale-[0.99] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Maintainer Input Callout Notice */}
        <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200/80 text-amber-950 space-y-2">
          <div className="flex items-start gap-2.5">
            <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs">
              <p className="font-bold text-sm text-amber-900">
                Contact & Physical Presence Notice
              </p>
              <p className="text-amber-800 leading-relaxed">
                ReelFetch currently provides support exclusively via digital developer email at <code className="bg-amber-100 px-1 py-0.5 rounded text-amber-900 font-mono">{APP_CONFIG.supportEmail}</code>.
              </p>
              <p className="text-amber-800">
                <span className="font-semibold text-amber-900">[Maintainer Input Required]:</span> If you have a registered physical business address, business registration number, telephone hotline, or public issue tracker (e.g. GitHub Issues), specify them to be displayed on this page.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
