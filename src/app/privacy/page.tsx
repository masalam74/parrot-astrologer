import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — Parrot Astrologer',
  description: 'Read the Privacy Policy for Parrot Astrologer. Learn how we handle your data and protect your privacy.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-amber-900 to-amber-950">
      <div className="border-b border-amber-800/40 bg-amber-900/50">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-amber-300 hover:text-amber-200 text-sm transition-colors">&larr; Back to Fortune Teller</Link>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-amber-300 mb-2">Privacy Policy</h1>
        <p className="text-amber-400/70 mb-10">Last updated: July 2026</p>
        <div className="space-y-8 text-amber-100/80 leading-relaxed">
          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">1. Introduction</h2>
            <p>Parrot Astrologer is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website. If you do not agree with these terms, please do not use the Website.</p>
          </section>
          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">2. Information We Collect</h2>
            <p className="mb-4"><strong>Information You Provide:</strong> When you use the fortune telling feature, you may enter your name, select your zodiac sign, and choose a focus area. This information is used <strong>only to generate your personalized fortune</strong> within the current browser session. We do <strong>not store, save, or transmit</strong> your name or selections to any server, database, or third party.</p>
            <p><strong>Automatically Collected Information:</strong> We may collect your IP address, browser type, operating system, and interaction data through cookies for analytics and to improve user experience.</p>
          </section>
          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To generate a personalized fortune reading during your session</li>
              <li>To analyze website traffic using Vercel Analytics</li>
              <li>To display relevant advertisements through Google AdSense</li>
              <li>To improve our website design and functionality</li>
            </ul>
          </section>
          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">4. Cookies</h2>
            <p className="mb-4">We use <strong>Essential cookies</strong> for the Website to function, <strong>Analytics cookies</strong> (Vercel Analytics) to understand visitor behavior, and <strong>Advertising cookies</strong> (Google AdSense) to display relevant ads. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-amber-300 underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.</p>
          </section>
          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">5. Third-Party Services</h2>
            <p className="mb-4"><strong>Google AdSense:</strong> We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits. <strong>Vercel Analytics:</strong> Used to understand traffic patterns. Data is aggregated and anonymized. <strong>WhatsApp:</strong> Our share feature uses the WhatsApp web API. We do not collect any information when you share.</p>
          </section>
          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">6. Data Security</h2>
            <p>We employ commercially acceptable security measures. Since we do not collect or store personal fortune data, the risk of personal data breach related to fortune readings is effectively zero.</p>
          </section>
          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">7. Children&apos;s Privacy</h2>
            <p>Our
