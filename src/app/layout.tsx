import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ToastProvider } from "@/components/ui/toast";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} antialiased`}
      >
        <ToastProvider>
          <Header />
          <main style={{ paddingTop: 48 }}>
            {children}
          </main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
