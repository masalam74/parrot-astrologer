import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kili Josiyam vs Western Astrology: Key Differences — Parrot Astrologer',
  description: 'How does South Indian parrot astrology compare to Western zodiac astrology? Explore the key differences in methods, zodiac systems, cultural context, and practitioner traditions.',
};

const comparisons = [
  {
    aspect: 'Method of Divination',
    east: 'In Kili Josiyam, a trained parrot physically picks a fortune card from a spread of 27 cards. The selection is believed to be guided by divine will acting through the bird\'s natural instinct. The practitioner then interprets the card based on its imagery and the seeker\'s questions. The experience is highly interactive, personal, and happens in real-time.',
    west: 'Western astrology relies on mathematical calculations based on the positions of celestial bodies (Sun, Moon, and planets) at the time and place of a person\'s birth. An astrologer creates a birth chart (also called a natal chart or horoscope) and interprets the planetary placements, aspects, and transits to provide insights about personality, relationships, and life events.',
  },
  {
    aspect: 'Zodiac System',
    east: 'Kili Josiyam is connected to the Vedic system of 27 Nakshatras (lunar mansions) rather than the 12-sign zodiac. The 27 fortune cards correspond to these lunar constellations. The zodiac sign (Rashi) in Vedic astrology is determined by the Moon\'s position, not the Sun\'s, which gives it a more emotional and intuitive character.',
    west: 'Western astrology uses the tropical zodiac of 12 signs (Aries through Pisces), which is based on the Sun\'s apparent path through the ecliptic. The signs are fixed to the seasons rather than the actual positions of the stars. Your Western "star sign" is determined by where the Sun was at your birth.',
  },
  {
    aspect: 'Role of the Practitioner',
    east: 'The Kili Josiyam practitioner (Kili Josiyam Karar) plays a crucial role as an interpreter. While the parrot selects the card, the practitioner brings the reading to life through elaboration, storytelling, and personalization based on the seeker\'s questions. The practitioner often comes from a family that has practiced this art for generations, and their interpretive skills are considered an inherited gift.',
    west: 'Western astrologers serve as analysts and counselors. They study complex charts, calculate planetary aspects and transits, and provide detailed written or spoken interpretations. Modern Western astrology places significant emphasis on psychological analysis, drawing on frameworks from depth psychology pioneered by figures like Carl Jung.',
  },
  {
    aspect: 'Cultural Context',
    east: 'Kili Josiyam is deeply embedded in South Indian Hindu culture. It is typically practiced at or near Hindu temples, often as part of a pilgrimage experience. The practice draws on Hindu mythology, with fortune cards featuring deities like Lakshmi, Ganesha, and Shiva. It is a communal, outdoor experience that blends spirituality, entertainment, and social interaction.',
    west: 'Western astrology has its roots in ancient Babylonian, Greek, and Roman traditions. It has evolved into a largely secular practice in the modern West, found in newspapers, magazines, apps, and online platforms. It emphasizes individual identity and self-understanding, often divorced from any specific religious or temple context.',
  },
  {
    aspect: 'Experience Format',
    east: 'A Kili Josiyam session is brief, spontaneous, and theatrical. You approach the fortune teller, the parrot picks a card within seconds, and you receive an immediate, personalized reading. The entire experience takes just a few minutes but leaves a lasting impression. There is an element of suspense and surprise that makes it feel like a magical moment.',
    west: 'A Western astrology reading is typically a longer, more in-depth consultation lasting 30 minutes to an hour or more. The astrologer presents your birth chart, explains the significance of various planetary positions, and discusses how current transits may be affecting your life. It is a reflective, analytical experience rather than a theatrical one.',
  },
  {
    aspect: 'Tools and Artifacts',
    east: 'The primary tools are the trained parrot, a set of 27 hand-painted fortune cards featuring Hindu deities and symbols, and a small cage. The visual artistry of the cards is a significant part of the tradition, with each card being a miniature work of South Indian religious art.',
    west: 'Western astrology uses ephemeris tables, star charts, computer software for chart calculation, and increasingly, mobile apps and AI-powered platforms. The primary artifact is the birth chart or horoscope wheel — a circular diagram showing planetary positions at the time of birth.',
  },
];

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-amber-900 to-amber-950">
      <div className="border-b border-amber-800/40 bg-amber-900/50">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <Link href="/blog" className="text-amber-300 hover:text-amber-200 text-sm transition-colors">
            &larr; Back to Blog
          </Link>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs px-2 py-1 rounded-full border bg-sky-900/40 border-sky-700/50 text-sky-300">Comparison</span>
          <span className="text-amber-400/50 text-sm">July 2025</span>
          <span className="text-amber-400/50 text-sm">6 min read</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-amber-300 mb-8">Kili Josiyam vs Western Astrology: What Makes Them Different?</h1>

        <div className="space-y-6 text-amber-100/80 leading-relaxed">
          <p>
            If you have grown up reading your horoscope in the newspaper, you might wonder how Kili Josiyam — the South Indian parrot astrology tradition — compares to the Western zodiac system you are familiar with. While both practices aim to offer insight into your life and future, they come from completely different worlds. They differ in their methods, their cultural roots, the tools they use, and the kind of experience they provide. Let us explore the key differences between these two fascinating traditions.
          </p>

          {comparisons.map((c) => (
            <div key={c.aspect} className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6">
              <h2 className="text-xl font-bold text-amber-300 mb-4">{c.aspect}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-amber-400 mb-1 uppercase tracking-wide">Kili Josiyam (South Indian)</h3>
                  <p>{c.east}</p>
                </div>
                <div className="border-t border-amber-800/30 pt-4">
                  <h3 className="text-sm font-semibold text-amber-400 mb-1 uppercase tracking-wide">Western Astrology</h3>
                  <p>{c.west}</p>
                </div>
              </div>
            </div>
          ))}

          <h2 className="text-2xl font-bold text-amber-300 mt-10 mb-4">Which One is Right for You?</h2>
          <p>
            The beauty is that you do not have to choose! Many people enjoy both traditions for different reasons. Western astrology offers deep, analytical insights into your personality and life patterns through detailed chart analysis. It is like having a personal map of your psychological landscape. Kili Josiyam, on the other hand, offers a delightful, surprising, and culturally rich experience that connects you to centuries of South Indian tradition. It is like receiving a personalized message from the cosmos in the most unexpected way — through the beak of a colorful parrot.
          </p>
          <p>
            In today&apos;s interconnected world, exploring multiple divination traditions from different cultures enriches our understanding of how humans across time and geography have sought to find meaning in the stars and the mysteries of existence. Whether you check your daily horoscope over morning coffee or visit a temple to have a parrot pick your fortune card, you are participating in a universal human impulse — the desire to understand what the future holds and to find guidance in the unknown.
          </p>

          <div className="mt-10 p-6 bg-amber-900/30 border border-amber-800/40 rounded-xl">
            <p className="text-amber-200/60 text-sm">
              <strong className="text-amber-300">Disclaimer:</strong> This article is for educational and cultural comparison purposes only. Both Kili Josiyam and Western astrology are traditional practices. Digital parrot astrology is intended for entertainment and should not be used as professional advice.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
