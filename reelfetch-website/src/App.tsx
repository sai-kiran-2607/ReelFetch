import { useState, lazy, Suspense } from 'react';
import { RouterProvider } from './context/RouterContext';
import { useRouter } from './hooks/useRouter';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Eager load HomePage for instant landing page LCP
import { HomePage } from './pages/HomePage';

// Lazy-load secondary pages and modals into separate chunks
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const InstallGuidePage = lazy(() => import('./pages/InstallGuidePage').then(m => ({ default: m.InstallGuidePage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyModal = lazy(() => import('./components/legal/PrivacyModal').then(m => ({ default: m.PrivacyModal })));

function RouteLoadingFallback() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-brand-purple border-t-transparent animate-spin" />
    </div>
  );
}

function AppContent() {
  const { path } = useRouter();
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  // Render matching page based on current route
  const renderCurrentPage = () => {
    switch (path) {
      case '/about':
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <AboutPage />
          </Suspense>
        );
      case '/install-guide':
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <InstallGuidePage />
          </Suspense>
        );
      case '/privacy-policy':
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <PrivacyPolicyPage />
          </Suspense>
        );
      case '/terms':
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <TermsPage />
          </Suspense>
        );
      case '/contact':
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <ContactPage />
          </Suspense>
        );
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-brand-dark-text flex flex-col font-sans selection:bg-brand-purple selection:text-white">
      {/* Top Navigation */}
      <Navbar onPrivacyClick={() => setPrivacyModalOpen(true)} />

      {/* Main Content Area */}
      <div className="flex-1">
        {renderCurrentPage()}
      </div>

      {/* Footer */}
      <Footer onPrivacyClick={() => setPrivacyModalOpen(true)} />

      {/* Quick Privacy Modal Dialog (Lazy-loaded) */}
      {privacyModalOpen && (
        <Suspense fallback={null}>
          <PrivacyModal
            isOpen={privacyModalOpen}
            onClose={() => setPrivacyModalOpen(false)}
          />
        </Suspense>
      )}
    </div>
  );
}

export function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

export default App;
