import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — Parrot Astrologer',
  description: 'Read the Privacy Policy for Parrot Astrologer. Learn how we handle your data and protect your privacy when using our Kili Josiyam website.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-amber-900 to-amber-950">
      <div className="border-b border-amber-800/40 bg-amber-900/50">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-amber-300 hover:text-amber-200 text-sm transition-colors">
            &larr; Back to Fortune Teller
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-amber-300 mb-2">Privacy Policy</h1>
        <p className="text-amber-400/70 mb-10">Last updated: July 2026</p>

        <div className="space-y-8 text-amber-100/80 leading-relaxed">
          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">1. Introduction</h2>
            <p>Parrot Astrologer (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website parrot-astrologer.vercel.app (the &quot;Website&quot;). Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Website.</p>
          </section>

          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">2. Information We Collect</h2>
            <p className="mb-4"><strong>Information You Provide:</strong> When you use the fortune telling feature, you may enter your name, select your zodiac sign, and choose a focus area. This information is used <strong>only to generate your personalized fortune</strong> within the current browser session. We do <strong>not store, save, or transmit</strong> your name or selections to any server, database, or third party.</p>
            <p><strong>Automatically Collected Information:</strong> We may collect certain information automatically, including your IP address, browser type, operating system, referring URLs, and information about how you interact with the Website. This information is collected through cookies and similar technologies and is used for analytics and to improve the user experience.</p>
          </section>

          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To generate a personalized fortune reading during your session</li>
              <li>To analyze website traffic and usage patterns using Vercel Analytics</li>
              <li>To display relevant advertisements through Google AdSense</li>
              <li>To improve our website design, content, and functionality</li>
              <li>To ensure the security and integrity of our Website</li>
            </ul>
          </section>

          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="mb-4">We use cookies and similar tracking technologies to track activity on our Website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Website.</p>
            <p>We use the following types of cookies: <strong>Essential cookies</strong> required for the Website to function properly, <strong>Analytics cookies</strong> (Vercel Analytics) to understand how visitors interact with our Website, and <strong>Advertising cookies</strong> (Google AdSense) to display relevant advertisements.</p>
          </section>

          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">5. Third-Party Services</h2>
            <p className="mb-4"><strong>Google AdSense:</strong> We use Google AdSense to display advertisements on our Website. Google may use cookies to serve ads based on your prior visits to our Website or other websites. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-amber-300 underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.</p>
            <p className="mb-4"><strong>Vercel Analytics:</strong> We use Vercel Analytics to understand website traffic and user behavior. This data is aggregated and anonymized.</p>
            <p><strong>WhatsApp:</strong> Our share feature uses the WhatsApp web API (wa.me). We do not collect any information when you use this feature.</p>
          </section>

          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">6. Data Security</h2>
            <p>The security of your information is important to us. We employ commercially acceptable security measures to protect your information. However, no method of transmission over the Internet is 100% secure. Since we do not collect or store personal fortune data, the risk of personal data breach related to fortune readings is effectively zero.</p>
          </section>

          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">7. Children&apos;s Privacy</h2>
            <p>Our Website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you believe your child has provided us with personal information, please contact us through our <Link href="/contact" className="text-amber-300 underline hover:text-amber-200">Contact Page</Link>.</p>
          </section>

          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">8. Your Rights</h2>
            <p>Depending on your location, you may have the right to access, correct, delete, or restrict the processing of your personal data. Since we do not store personal fortune data, most of these rights are inherently satisfied. To exercise any of these rights, please contact us through our <Link href="/contact" className="text-amber-300 underline hover:text-amber-200">Contact Page</Link>.</p>
          </section>

          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">9. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.</p>
          </section>

          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us through our <Link href="/contact" className="text-amber-300 underline hover:text-amber-200">Contact Page</Link>.</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
