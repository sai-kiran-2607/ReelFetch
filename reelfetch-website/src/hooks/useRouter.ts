import { useContext, useEffect } from 'react';
import { RouterContext } from '../context/routerCore';

export function useRouter() {
  return useContext(RouterContext);
}

const PRODUCTION_ORIGIN = 'https://reel-fetch-henna.vercel.app';

/**
 * Hook to dynamically update document title, canonical link, and OpenGraph/Twitter meta descriptions for SEO.
 */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Canonical Link
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
    const canonicalHref = `${PRODUCTION_ORIGIN}${currentPath === '/' ? '/' : currentPath}`;
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalHref);

    // OpenGraph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalHref);

    // Twitter
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', description);
  }, [title, description]);
}
