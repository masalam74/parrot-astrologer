import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Us — Parrot Astrologer | Kili Josiyam',
  description: 'Learn about Parrot Astrologer, the digital revival of the ancient South Indian Kili Josiyam tradition.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-amber-900 to-amber-950">
      <div className="border-b border-amber-800/40 bg-amber-900/50">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-amber-300 hover:text-amber-200 text-sm transition-colors">&larr; Back to Fortune Teller</Link>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-amber-300 mb-2">About Parrot Astrologer</h1>
        <p className="text-amber-400/70 mb-10 text-lg">Preserving a South Indian tradition for the digital generation</p>
        <div className="space-y-8 text-amber-100/80 leading-relaxed">
          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">Our Story</h2>
            <p className="mb-4">Parrot Astrologer was born from a deep nostalgia for the vibrant street culture of South India. For generations, Kili Josiyam (parrot astrology) has been a beloved fixture outside temples, at bustling markets, and along dusty village roads. The sight of a bright green parrot carefully selecting a fortune card from a deck has brought joy, wonder, and hope to millions of people across Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh.</p>
            <p>As urbanization and modernization swept across India, these street-side fortune tellers began to disappear. We realized that an entire generation was growing up without ever experiencing the magic of Kili Josiyam. That is why we created Parrot Astrologer — to bring this cherished tradition into the digital age while honoring its cultural roots and spiritual significance.</p>
          </section>
          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">Our Mission</h2>
            <p className="mb-4">Our mission is to preserve and celebrate the ancient art of Kili Josiyam by making it accessible to anyone with an internet connection. We are not claiming to predict the future or offer genuine astrological guidance. Instead, we aim to recreate the experience — the anticipation, the colorful visuals, the personalized fortune, and the warm cultural feeling that millions of Indians associate with this tradition.</p>
            <p>Every element of our website has been designed with cultural authenticity in mind. The caged parrot, the deck of fortune cards, the references to Hindu deities, and the warm terracotta-and-gold color palette are all inspired by the real-world Kili Josiyam experience.</p>
          </section>
          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">Important Disclaimer</h2>
            <p className="text-amber-200/60">Parrot Astrologer is an <strong>entertainment website</strong>. The fortunes generated are for fun and should not be considered real astrological, medical, legal, or financial advice. If you are facing serious life decisions, please consult qualified professionals. The references to Hindu deities are made with the utmost respect and are part of the cultural storytelling tradition.</p>
          </section>
          <section className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">Cultural Respect</h2>
            <p>We are deeply committed to representing South Indian culture with respect and authenticity. Kili Josiyam is not just a fortune-telling method — it is a living cultural practice that has been passed down through generations of families. The fortune tellers, known as &quot;Kili Josiyam Karar&quot; in Tamil, have historically been respected members of their communities, often belonging to families that have practiced this art for centuries. We honor their legacy through this digital tribute.</p>
          </section>
        </div>
        <div className="mt-10 text-center">
          <Link href="/" className="inline-block bg-gradient-to-r from-amber-700 to-red-800 text-amber-100 px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-red-700 transition-all shadow-lg">Try Your Fortune Now</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
