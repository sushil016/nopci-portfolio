import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import BackToTop from "@/components/common/BackToTop";
import ChatBubble from "@/components/common/ChatBubble";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Oneko from "@/components/common/Oneko";
import { ThemeProvider } from "@/components/common/ThemeProviders";
import { siteConfig } from "@/config/Meta";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ViewTransitions>
            <Navbar />
            {children}
            <Footer />
            {/* <ChatBubble /> */}
            <BackToTop />
            <Oneko />
          </ViewTransitions>
        </ThemeProvider>
      </body>
    </html>
  );
}
