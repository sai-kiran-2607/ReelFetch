/**
 * ReelFetch Official Web App Configuration
 * 
 * Central configuration file for application metadata and the Android APK download URL.
 * 
 * APK DOWNLOAD BEHAVIOR:
 * - VITE_APK_DOWNLOAD_URL is the single central configuration value.
 * - When set (or using the official release default), all download buttons
 *   initiate a direct download of the real APK.
 * - When unset, all download buttons are gracefully disabled and display
 *   a friendly "Download coming soon" message.
 * - App version: v1.0.0 (verified from mobile app.json).
 * - File size: 108.3 MB (verified from live GitHub release asset).
 */

export interface ReelFetchConfig {
  appName: string;
  subtitle: string;
  tagline: string;
  version: string;
  verifiedFileSize: string | null;
  apkDownloadUrl: string;
  packageName: string;
  targetOs: string;
  minAndroidVersion: string;
  supportEmail: string;
  lastUpdated: string;
}

export const APP_CONFIG: ReelFetchConfig = {
  appName: 'ReelFetch',
  subtitle: 'Instagram Reels Saver',
  tagline: 'Save Reels. Watch Anytime.',
  version: '1.0.0', // Verified from mobile app.json
  verifiedFileSize: '108.3 MB', // Verified from live GitHub Release asset headers (113,558,466 bytes)
  apkDownloadUrl:
    (import.meta.env.VITE_APK_DOWNLOAD_URL as string)?.trim() ||
    'https://github.com/sai-kiran-2607/app-hosting/releases/download/v1.0.0/ReelFetch.apk',
  packageName: 'com.instatubesaver.app',
  targetOs: 'Android',
  minAndroidVersion: 'Android 8.0+ (Oreo or higher)',
  supportEmail: 'contact@reelfetch.app',
  lastUpdated: 'October 2026',
};

/**
 * Returns true if a valid, non-empty APK download URL is configured.
 */
export function isApkConfigured(): boolean {
  const url = APP_CONFIG.apkDownloadUrl;
  return Boolean(
    url &&
    url !== '' &&
    url !== '#' &&
    !url.startsWith('javascript:')
  );
}
