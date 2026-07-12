import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How It Works — Parrot Astrologer',
  description: 'Learn how Kili Josiyam (Parrot Astrology) works — from the traditional temple practice to our digital AI-powered parrot fortune telling experience.',
};

export default function HowItWorksPage() {
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
        <h1 className="text-4xl font-bold text-amber-300 mb-2">How It Works</h1>
        <p className="text-amber-400/70 mb-12">From ancient temples to your screen — the magic of Kili Josiyam explained</p>

        {/* Traditional vs Digital */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">Traditional Kili Josiyam</h2>
            <ul className="space-y-3 text-amber-100/80">
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">&#x1F3E9;</span>
                <span>Practitioner sits outside a temple with a trained parrot in a cage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">&#x1F4DC;</span>
                <span>Spread of 27 fortune cards arranged before the parrot on the ground</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">&#x1F999;</span>
                <span>Parrot is released and picks one card with its beak</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">&#x1F4D6;</span>
                <span>Practitioner reads the fortune from the selected card and interprets it</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">&#x1F331;</span>
                <span>Found across South India, especially Tamil Nadu temple towns</span>
              </li>
            </ul>
          </div>
          <div className="bg-amber-900/30 border border-amber-700/50 rounded-xl p-6 ring-1 ring-amber-500/30">
            <h2 className="text-2xl font-bold text-amber-300 mb-4">Our Digital Version</h2>
            <ul className="space-y-3 text-amber-100/80">
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">&#x1F4F1;</span>
                <span>Visit our website anytime from your phone, tablet, or computer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">&#x2728;</span>
                <span>Beautiful fortune cards displayed digitally with animations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">&#x1F427;</span>
                <span>Our animated parrot picks a card for you with a fun interaction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">&#x1F4DD;</span>
                <span>Your personalized fortune is generated and displayed instantly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-1">&#x1F310;</span>
                <span>Available worldwide — no temple visit needed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Step by Step */}
        <h2 className="text-3xl font-bold text-amber-300 mb-8">How to Get Your Fortune in 6 Simple Steps</h2>
        <div className="space-y-6 mb-16">
          {[
            { step: 1, title: 'Enter Your Name', desc: 'Type your name to personalize the fortune reading. This adds a personal touch to your experience.' },
            { step: 2, title: 'Select Your Zodiac Sign', desc: 'Choose your Rashi (zodiac sign) based on your birth date. Each sign carries unique cosmic energy.' },
            { step: 3, title: 'Pick a Focus Area', desc: 'Select what you want guidance on — Love, Career, Health, Finance, or General fortune.' },
            { step: 4, title: 'Watch the Parrot Choose', desc: 'Our animated parrot will flutter through the fortune cards and pick one specially for you!' },
            { step: 5, title: 'Reveal Your Fortune', desc: 'Your personalized fortune card is revealed with beautiful animations and detailed interpretation.' },
            { step: 6, title: 'Share with Friends', desc: 'Share your fortune on WhatsApp or social media and let others try their luck too!' },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-5 bg-amber-900/20 border border-amber-800/30 rounded-xl p-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-lg">
                {item.step}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-300 mb-1">{item.title}</h3>
                <p className="text-amber-100/70">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-3xl font-bold text-amber-300 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: 'Is the parrot fortune real?', a: 'Our digital parrot astrology is a fun, entertainment-based experience inspired by the traditional Kili Josiyam practice. The fortunes are generated using algorithms and are meant for enjoyment, not as real predictions.' },
            { q: 'Can I get my fortune more than once?', a: 'Absolutely! You can come back anytime and get a new fortune. Each time you try, the parrot may pick a different card for you with a fresh reading.' },
            { q: 'What do the zodiac signs mean?', a: 'In Indian astrology (Jyotisha), the 12 Rashis (zodiac signs) are based on the position of the Moon at your birth. Each sign has unique characteristics that influence the fortune reading.' },
            { q: 'Is this free to use?', a: 'Yes, Parrot Astrologer is completely free! Enjoy as many fortune readings as you like at no cost.' },
            { q: 'How is this different from real Kili Josiyam?', a: 'Traditional Kili Josiyam involves a live trained parrot at a temple. Our digital version recreates this experience online with animations and randomized fortune cards. The cultural spirit is the same, but the delivery is modern and accessible from anywhere.' },
          ].map((item, i) => (
            <div key={i} className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-amber-300 mb-2">{item.q}</h3>
              <p className="text-amber-100/70 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
