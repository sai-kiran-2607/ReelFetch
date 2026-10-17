import { useState } from 'react';
import { RouterProvider } from './context/RouterContext';
import { useRouter } from './hooks/useRouter';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PrivacyModal } from './components/legal/PrivacyModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { InstallGuidePage } from './pages/InstallGuidePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { ContactPage } from './pages/ContactPage';

function AppContent() {
  const { path } = useRouter();
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  // Render matching page based on current route
  const renderCurrentPage = () => {
    switch (path) {
      case '/about':
        return <AboutPage />;
      case '/install-guide':
        return <InstallGuidePage />;
      case '/privacy-policy':
        return <PrivacyPolicyPage />;
      case '/terms':
        return <TermsPage />;
      case '/contact':
        return <ContactPage />;
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

      {/* Quick Privacy Modal Dialog */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
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
