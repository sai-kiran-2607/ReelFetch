import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Smartphone, Clock } from 'lucide-react';
import { APP_CONFIG, isApkConfigured } from '../../config/appConfig';

interface NavbarProps {
  onDownloadClick?: () => void;
  onPrivacyClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const apkConfigured = isApkConfigured();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Install Guide', href: '#download' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-brand-border-subtle py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Title */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple rounded-xl p-1"
            aria-label="ReelFetch Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shadow-md shadow-brand-purple/20 transition-transform duration-200 group-hover:scale-105 border border-brand-border-light bg-white flex items-center justify-center">
              <img
                src="/logo.png"
                alt="ReelFetch App Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-brand-dark-text group-hover:text-brand-purple transition-colors">
                  {APP_CONFIG.appName}
                </span>
                <span className="hidden sm:inline-flex items-center text-[11px] font-bold px-2 py-0.5 rounded-full bg-brand-light-purple text-brand-purple border border-brand-border-light">
                  v{APP_CONFIG.version}
                </span>
              </div>
              <p className="text-xs text-brand-secondary-text hidden sm:block -mt-0.5 font-medium">
                {APP_CONFIG.subtitle}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-brand-secondary-text hover:text-brand-purple transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple rounded-md px-1 py-0.5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            {apkConfigured ? (
              <a
                href={APP_CONFIG.apkDownloadUrl}
                download="ReelFetch.apk"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-brand hover:opacity-95 shadow-md shadow-brand-purple/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-purple cursor-pointer"
                aria-label="Download ReelFetch APK for Android"
              >
                <Download className="w-4 h-4" />
                <span>Download APK</span>
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-brand-secondary-text bg-slate-100 border border-brand-border-subtle cursor-not-allowed opacity-80"
                aria-disabled="true"
                title="Download coming soon: The official APK release is being finalized."
              >
                <Clock className="w-4 h-4 text-brand-secondary-text" />
                <span>Download coming soon</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-brand-secondary-text hover:text-brand-purple hover:bg-brand-light-purple/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-brand-border-subtle bg-white rounded-2xl shadow-xl px-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-brand-secondary-text hover:text-brand-purple px-2 py-2 rounded-lg hover:bg-brand-light-purple/40 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                {apkConfigured ? (
                  <a
                    href={APP_CONFIG.apkDownloadUrl}
                    download="ReelFetch.apk"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-brand shadow-md shadow-brand-purple/20 cursor-pointer"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Download for Android (APK)</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-brand-secondary-text bg-slate-100 border border-brand-border-subtle cursor-not-allowed opacity-80"
                    aria-disabled="true"
                  >
                    <Clock className="w-4 h-4" />
                    <span>Download coming soon</span>
                  </button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
