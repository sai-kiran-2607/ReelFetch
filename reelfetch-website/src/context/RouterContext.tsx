import { useState, useEffect, useCallback, type FC, type ReactNode } from 'react';
import type { RoutePath } from './routerCore';
import {
  RouterContext,
  normalizeRoute,
  getInitialPath,
} from './routerCore';

export const RouterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [path, setPath] = useState<RoutePath>(getInitialPath());
  const [currentHash, setCurrentHash] = useState<string>(
    typeof window !== 'undefined' ? window.location.hash : ''
  );

  const scrollToHash = useCallback((hash: string) => {
    if (!hash || hash === '#' || hash === '#/') return;
    const elementId = hash.replace(/^#\/?/, '');
    const element = document.getElementById(elementId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }, []);

  const navigate = useCallback((to: string) => {
    if (typeof window === 'undefined') return;

    // Handle in-page anchors when on home
    if (to.startsWith('#')) {
      const targetHash = to;
      if (path !== '/') {
        // Navigate to home first, then scroll
        window.history.pushState(null, '', `/${targetHash}`);
        setPath('/');
        setCurrentHash(targetHash);
        scrollToHash(targetHash);
      } else {
        window.history.pushState(null, '', targetHash);
        setCurrentHash(targetHash);
        scrollToHash(targetHash);
      }
      return;
    }

    // Handle path with hash (e.g. '/#features' or '/terms#copyright')
    const [targetPath, targetHash] = to.split('#');
    const normalized = normalizeRoute(targetPath || '/');
    const fullTarget = targetHash ? `${normalized}#${targetHash}` : normalized;

    if (normalized !== path || window.location.pathname !== normalized) {
      window.history.pushState(null, '', fullTarget);
      setPath(normalized);
      setCurrentHash(targetHash ? `#${targetHash}` : '');
      if (targetHash) {
        scrollToHash(`#${targetHash}`);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (targetHash) {
      window.history.pushState(null, '', fullTarget);
      setCurrentHash(`#${targetHash}`);
      scrollToHash(`#${targetHash}`);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [path, scrollToHash]);

  // Sync on back/forward browser button navigation
  useEffect(() => {
    const handlePopState = () => {
      const newPath = getInitialPath();
      setPath(newPath);
      setCurrentHash(window.location.hash);

      if (window.location.hash) {
        scrollToHash(window.location.hash);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [scrollToHash]);

  // Handle initial page load with hash
  useEffect(() => {
    if (window.location.hash && !window.location.hash.startsWith('#/')) {
      scrollToHash(window.location.hash);
    }
  }, [scrollToHash]);

  return (
    <RouterContext.Provider value={{ path, navigate, currentHash }}>
      {children}
    </RouterContext.Provider>
  );
};
