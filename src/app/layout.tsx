import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://parrot-astrologer.vercel.app";

export const metadata: Metadata = {
  title: "Parrot Astrologer — Kili Josiyam | AI Fortune Telling",
  description:
    "Experience the magic of traditional Indian Parrot Astrology (Kili Josiyam) reimagined with AI. The mystic parrot picks your fortune card — get your personalized prediction now!",
  keywords: [
    "Kili Josiyam",
    "Parrot Astrology",
    "Indian Fortune Telling",
    "AI Astrology",
    "கிளி ஜோசியம்",
    "parrot fortune teller online",
    "free parrot astrology",
    "online kili josiyam",
    "Tamil astrology",
  ],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "🦜 Parrot Astrologer — Kili Josiyam",
    description:
      "The mystic parrot has a fortune for you! Experience traditional Indian Parrot Astrology with AI. Free, fun, and mystical!",
    url: SITE_URL,
    siteName: "Parrot Astrologer",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Parrot Astrologer - Kili Josiyam AI Fortune Telling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🦜 Parrot Astrologer — Kili Josiyam",
    description:
      "The mystic parrot picks your fortune card! Try free AI Parrot Astrology now.",
    images: [`${SITE_URL}/og-image.png`],
  },
    robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "Lq12C6Pnh_D50PVV3X1A-l6F8CWdYI9v7S9oxBCQYdk",
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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2529520824838951" crossOrigin="anonymous"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
