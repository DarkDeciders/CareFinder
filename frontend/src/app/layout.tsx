import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import FloatingChatbot from "@/components/chatbot/FloatingChatbot";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "CareFinder - Trusted Care Services in Sri Lanka",
  description: "Connect with verified caregivers for childcare and elderly care services. Safe, reliable, and professional care solutions for your family in Sri Lanka.",
  keywords: "caregivers, childcare, elderly care, babysitters, nannies, Sri Lanka, verified care",
  authors: [{ name: "CareFinder Team" }],
  creator: "CareFinder",
  publisher: "CareFinder",
  openGraph: {
    title: "CareFinder - Trusted Care Services in Sri Lanka",
    description: "Connect with verified caregivers for childcare and elderly care services.",
    url: "https://carefinder.lk",
    siteName: "CareFinder",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CareFinder - Trusted Care Services in Sri Lanka",
    description: "Connect with verified caregivers for childcare and elderly care services.",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased text-gray-900 dark:text-white transition-colors duration-300 relative`}>
        <div className="relative min-h-screen">
          {/* Global Background Image Layer */}
          <div className="fixed inset-0 w-full h-full global-bg opacity-80 dark:opacity-60 z-0"></div>
          {/* Background Color Overlay */}
          <div className="fixed inset-0 w-full h-full bg-white/30 dark:bg-gray-950/40 z-0"></div>
          <div className="relative z-10">
            <LanguageProvider>
              {children}
              {/* Global Floating Chatbot */}
              <FloatingChatbot />
            </LanguageProvider>
          </div>
        </div>
      </body>
    </html>
  );
}