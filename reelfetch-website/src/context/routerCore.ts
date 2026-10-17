import { createContext } from 'react';

export type RoutePath =
  | '/'
  | '/about'
  | '/install-guide'
  | '/privacy-policy'
  | '/terms'
  | '/contact';

export interface RouterContextType {
  path: RoutePath;
  navigate: (to: string) => void;
  currentHash: string;
}

export const RouterContext = createContext<RouterContextType>({
  path: '/',
  navigate: () => {},
  currentHash: '',
});

export function normalizeRoute(rawPath: string): RoutePath {
  // Strip query string and hash
  let clean = rawPath.split('?')[0].split('#')[0].trim();
  
  // Remove trailing slashes (except root)
  if (clean.length > 1 && clean.endsWith('/')) {
    clean = clean.slice(0, -1);
  }

  // Handle aliases
  if (clean === '' || clean === '/' || clean === '/home') return '/';
  if (clean === '/about' || clean === '/about-us') return '/about';
  if (clean === '/install-guide' || clean === '/installation-guide' || clean === '/guide' || clean === '/install') return '/install-guide';
  if (clean === '/privacy-policy' || clean === '/privacy' || clean === '/privacy-modal') return '/privacy-policy';
  if (clean === '/terms' || clean === '/terms-of-use' || clean === '/terms-of-service' || clean === '/tos') return '/terms';
  if (clean === '/contact' || clean === '/contact-us' || clean === '/support') return '/contact';

  return '/';
}

export function getInitialPath(): RoutePath {
  if (typeof window === 'undefined') return '/';

  // Support hash routing (e.g., #/about or #about) if server rewrites aren't available
  const hash = window.location.hash;
  if (hash.startsWith('#/')) {
    return normalizeRoute(hash.slice(1));
  }

  return normalizeRoute(window.location.pathname);
}
