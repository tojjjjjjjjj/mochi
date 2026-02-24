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
  title: "Mochi — Feed your AI superpowers",
  description:
    "A curated marketplace of taste-tested AI skills and prompts. No malware, no garbage, no bullshit.",
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
