import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import { ToastProvider } from "@/components/ui/toast";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import MobileTabBar from "@/components/layout/mobile-tab-bar";
import { LunchboxProvider } from "@/lib/use-lunchbox";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: 'Mochi — Feed your AI superpowers',
    template: '%s | Mochi',
  },
  description: 'A curated marketplace of taste-tested AI skills and prompts. No malware, no garbage, no bullshit.',
  metadataBase: new URL('https://mochi.market'),
  openGraph: {
    title: 'Mochi — Feed your AI superpowers',
    description: 'A curated marketplace of taste-tested AI skills and prompts. No malware, no garbage, no bullshit.',
    url: 'https://mochi.market',
    siteName: 'Mochi',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mochi — Feed your AI superpowers',
    description: 'A curated marketplace of taste-tested AI skills and prompts.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=localStorage.getItem('mochi-dark-mode');if(d==='true'||(d===null&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${instrumentSerif.variable} antialiased`}
      >
        <ToastProvider>
          <LunchboxProvider>
            <Header />
            <main role="main">
              {children}
            </main>
            <Footer />
            <MobileTabBar />
          </LunchboxProvider>
        </ToastProvider>
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
