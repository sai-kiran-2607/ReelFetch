# ReelFetch — Official Landing Website

> **Save Reels. Watch Anytime.**  
> The official, modern landing page for **ReelFetch (Instagram Reels Saver)** for Android.

---

## 🌟 Overview

This repository contains the standalone official landing website for **ReelFetch**, built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. It is kept completely separate from the React Native / Expo mobile application repository (`Insta_Tube`).

### Verified Mobile App Capabilities
The information, workflows, and specifications presented on this landing site strictly mirror verified features implemented in the ReelFetch mobile app codebase:
- **Share Sheet & Direct Link Input**: Accepts public Instagram Reel links (`instagram.com/reel/...` and `/p/...`) via Android share intent or clipboard paste.
- **Multiple Format Quality Options**: Supports HD (1080p MP4), SD (720p MP4), and pure MP3 Audio extraction.
- **Device-Local & Gallery Export**: Downloads to `Internal Storage/ReelFetch` and automatically registers media with the Android MediaStore / Photo Gallery.
- **Download History & Offline Player**: Dedicated downloads management screen with disk-presence verification, internal video playback, and easy sharing.
- **Zero-Login & Privacy-First**: 100% on-device operations. Never asks for Instagram credentials, session tokens, or personal data.

---

## 🎨 Brand Design System

- **App Name**: ReelFetch
- **Subtitle**: Instagram Reels Saver
- **Tagline**: Save Reels. Watch Anytime.
- **Colors**:
  - Primary Purple: `#7138F5`
  - Deep Purple: `#4C1DCE`
  - Accent Pink: `#F044C8`
  - Light Purple Tint: `#F5F0FF`
  - Background: `#FFFFFF` with subtle radial purple/pink gradients
  - Text Primary: `#17152A`
  - Text Secondary: `#68708A`

---

## 📦 Tech Stack

- **Framework**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Plus Jakarta Sans (Google Fonts)

---

## ⚙️ Central APK Download Configuration (`VITE_APK_DOWNLOAD_URL`)

The website utilizes a single central configuration value named **`VITE_APK_DOWNLOAD_URL`** (defined in `src/config/appConfig.ts` and loaded from environment variables).

### Behavior Matrix
| `VITE_APK_DOWNLOAD_URL` State | Button Status | Button Text | Action On Click |
| :--- | :--- | :--- | :--- |
| **Not Set / Empty** | **Disabled** (`aria-disabled="true"`) | **Download coming soon** | Non-clickable; displays a friendly release pending message. |
| **Configured (Valid URL)** | **Active** | **Download for Android (APK)** | Directly downloads the real APK file on desktop and mobile browsers. |

> [!IMPORTANT]
> - Website visitors are **never asked to enter a URL**.
> - **No fake or placeholder URLs** are ever invented or served.

---

## 🔄 How to Update the APK URL for a New Release

Whenever a new APK release is built and published:

### Option 1: Using `.env` (Local & Build Environments)
1. In the `reelfetch-website` directory, copy `.env.example` to `.env` (if not already created):
   ```bash
   cp .env.example .env
   ```
2. Set `VITE_APK_DOWNLOAD_URL` to your hosted APK URL:
   ```env
   VITE_APK_DOWNLOAD_URL=https://github.com/your-org/reelfetch/releases/download/v1.0.0/ReelFetch-v1.0.0.apk
   ```
3. To update the displayed app version, edit `src/config/appConfig.ts`:
   ```ts
   version: '1.0.1', // update to match the new APK build
   ```
4. Rebuild the website:
   ```bash
   npm run build
   ```

### Option 2: Placing the APK in `public/` (Self-Hosted)
1. Copy the built `.apk` file into `reelfetch-website/public/releases/ReelFetch-v1.0.0.apk`.
2. In `.env`:
   ```env
   VITE_APK_DOWNLOAD_URL=/releases/ReelFetch-v1.0.0.apk
   ```

### Option 3: Production Hosting Platforms (Vercel, Netlify, Cloudflare)
1. Navigate to your hosting dashboard's **Environment Variables** settings.
2. Add a new variable:
   - **Key**: `VITE_APK_DOWNLOAD_URL`
   - **Value**: `https://your-storage-bucket.com/apks/ReelFetch-v1.0.0.apk`
3. Trigger a redeploy. Vite will automatically bake the updated URL into the static build.

---

## 📱 Short Android Installation Guide

When visitors download the APK file directly to their Android phone, they can install it in 3 steps:

1. **Download APK**: Tap **Download for Android** to save `ReelFetch-v1.0.0.apk`.
2. **Allow Unknown Apps**: Open the file from your Notifications or Files app. When Android prompts *"For your security, your phone is not allowed to install unknown apps from this source"*, tap **Settings** and toggle on **"Allow from this source"**.
3. **Install & Save Reels**: Tap **Install**. Open ReelFetch, grant gallery storage permission when saving your first Reel, and enjoy offline video access!

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm`

### Installation & Preview
1. Navigate to the website directory:
   ```bash
   cd reelfetch-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/` to preview.

4. Build production bundle:
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```
reelfetch-website/
├── public/
│   ├── favicon.png               # Official ReelFetch app icon (favicon)
│   ├── logo.png                  # High-res ReelFetch emblem
│   └── robots.txt                # Search crawler configuration
├── src/
│   ├── components/
│   │   ├── hero/
│   │   │   ├── Hero.tsx          # Main hero with verified headline, CTA & status
│   │   │   └── MobileMockup.tsx  # Interactive Android smartphone mockup
│   │   ├── features/
│   │   │   └── Features.tsx      # Verified app feature breakdown
│   │   ├── howItWorks/
│   │   │   └── HowItWorks.tsx    # 3-step Reel saving workflow guide
│   │   ├── download/
│   │   │   └── DownloadSection.tsx  # Download CTA & short APK sideload guide
│   │   ├── faq/
│   │   │   └── FaqSection.tsx    # Accordion FAQ (Install, Permissions, etc.)
│   │   ├── legal/
│   │   │   └── PrivacyModal.tsx  # Device-local privacy policy modal
│   │   └── layout/
│   │       ├── Navbar.tsx        # Responsive sticky navbar with mobile menu
│   │       └── Footer.tsx        # Footer with legal non-affiliation notice
│   ├── config/
│   │   └── appConfig.ts          # Centralized configuration & version metadata
│   ├── types/
│   │   └── index.ts              # TypeScript interfaces
│   ├── App.tsx                   # Main layout container
│   ├── main.tsx                  # Vite root entry
│   └── index.css                 # Design system & Tailwind directives
├── .env.example                  # Environment configuration template
├── tailwind.config.js            # Tailwind theme tokens & animations
├── package.json
└── tsconfig.json
```

---

## ⚖️ Legal Disclaimer

ReelFetch is an independent Android utility application. ReelFetch is **not affiliated with, associated with, authorized, endorsed by, or in any way officially connected with Instagram, Meta Platforms, Inc.**, or any of their subsidiaries or affiliates. "Instagram" and the Instagram logo are registered trademarks of Meta Platforms, Inc.
