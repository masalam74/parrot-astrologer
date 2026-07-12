import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service — Parrot Astrologer',
  description: 'Read the Terms of Service for Parrot Astrologer. Understand your rights and responsibilities when using our website.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-amber-900 to-amber-950">
      <div className="border-b border-amber-800/40 bg-amber-900/50">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-amber-300 hover:text-amber-200 text-sm transition-colors">&larr; Back to Fortune Teller</Link>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-amber-300 mb-2">Terms of Service</h1>
        <p className="text-amber-400/70 mb-10">Last updated: July 2026</p>
        <div className="space-y-8 text-amber-100/80 leading-relaxed">
          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using Parrot Astrologer, you agree to be bound by these Terms of Service. If you do not agree, please do not use the Website. We reserve the right to modify these Terms at any time, and your continued use constitutes acceptance.</p>
          </section>
          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">2. Entertainment Purpose Only</h2>
            <p className="mb-4">Parrot Astrologer is an <strong>entertainment website</strong>. The fortunes and predictions are created using randomized templates and are <strong>not based on real astrological science or supernatural abilities</strong>. The content is for amusement and cultural enjoyment only.</p>
            <p>You acknowledge that the fortunes should not be used as a substitute for professional advice, including medical, legal, financial, or relationship counseling.</p>
          </section>
          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">3. User Conduct</h2>
            <p className="mb-4">When using Parrot Astrologer, you agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the Website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the Website</li>
              <li>Use automated tools or bots to overwhelm our servers</li>
              <li>Reproduce or commercially exploit the content without permission</li>
              <li>Misrepresent the fortunes as genuine astrological predictions</li>
            </ul>
          </section>
          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">4. Intellectual Property</h2>
            <p>All content on Parrot Astrologer, including text, graphics, logos, animations, and designs, is protected by applicable intellectual property laws. The parrot illustration, fortune card designs, and cultural elements are original creative works inspired by the Kili Josiyam tradition.</p>
          </section>
          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">5. User Submitted Content</h2>
            <p>When you use the fortune telling feature, your name is used solely to personalize the reading and is not saved to any database or shared with third parties.</p>
          </section>
          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">6. Third-Party Services</h2>
            <p>The Website may contain links to third-party websites. We are not responsible for the content or privacy practices of any third-party websites.</p>
          </section>
          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">7. Limitation of Liability</h2>
            <p>Parrot Astrologer shall not be liable for any indirect, incidental, or consequential damages resulting from your access to or use of the Website, including any decisions made based on the entertainment content provided.</p>
          </section>
          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">8. Governing Law</h2>
            <p>These Terms shall be governed by the laws of India. Any disputes shall be resolved in the courts of India.</p>
          </section>
          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">9. Contact</h2>
            <p>If you have questions about these Terms, please contact us through our <Link href="/contact" className="text-amber-300 underline hover:text-amber-200">Contact Page</Link>.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
