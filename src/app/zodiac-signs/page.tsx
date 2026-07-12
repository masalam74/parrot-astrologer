import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '12 Zodiac Signs (Rashis) Guide — Parrot Astrologer',
  description: 'Complete guide to the 12 zodiac signs (Rashis) in Indian astrology. Learn about Mesha, Rishabha, Mithuna and all 12 signs with dates, elements, and ruling planets.',
};

const signs = [
  { name: 'Mesha', en: 'Aries', symbol: '&#x2648;', dates: 'Mar 21 – Apr 19', element: 'Fire', planet: 'Mars', desc: 'Bold, ambitious, and energetic. Mesha natives are natural leaders who love taking initiative. They are courageous, confident, and always ready for a new challenge. Their fiery nature makes them passionate and determined in everything they pursue.' },
  { name: 'Rishabha', en: 'Taurus', symbol: '&#x2649;', dates: 'Apr 20 – May 20', element: 'Earth', planet: 'Venus', desc: 'Reliable, patient, and devoted. Rishabha natives value stability and comfort. They are known for their practical approach to life, strong work ethic, and deep appreciation for beauty, art, and fine things.' },
  { name: 'Mithuna', en: 'Gemini', symbol: '&#x264A;', dates: 'May 21 – Jun 20', element: 'Air', planet: 'Mercury', desc: 'Versatile, curious, and expressive. Mithuna natives are excellent communicators who thrive on variety and intellectual stimulation. They are adaptable, quick-witted, and always eager to learn something new.' },
  { name: 'Karka', en: 'Cancer', symbol: '&#x264B;', dates: 'Jun 21 – Jul 22', element: 'Water', planet: 'Moon', desc: 'Intuitive, emotional, and nurturing. Karka natives are deeply connected to family and home. They possess strong protective instincts and are known for their empathy, loyalty, and ability to understand others\' feelings.' },
  { name: 'Simha', en: 'Leo', symbol: '&#x264C;', dates: 'Jul 23 – Aug 22', element: 'Fire', planet: 'Sun', desc: 'Charismatic, generous, and confident. Simha natives naturally draw people towards them with their warmth and magnetism. They are creative, dramatic, and born leaders who love being in the spotlight.' },
  { name: 'Kanya', en: 'Virgo', symbol: '&#x264D;', dates: 'Aug 23 – Sep 22', element: 'Earth', planet: 'Mercury', desc: 'Analytical, practical, and hardworking. Kanya natives have an eye for detail and a deep desire for perfection. They are methodical, reliable, and always willing to help others with their problem-solving abilities.' },
  { name: 'Tula', en: 'Libra', symbol: '&#x264E;', dates: 'Sep 23 – Oct 22', element: 'Air', planet: 'Venus', desc: 'Diplomatic, harmonious, and fair-minded. Tula natives seek balance and justice in all aspects of life. They are charming, cooperative, and have a natural talent for bringing people together and resolving conflicts.' },
  { name: 'Vrischika', en: 'Scorpio', symbol: '&#x264F;', dates: 'Oct 23 – Nov 21', element: 'Water', planet: 'Mars', desc: 'Passionate, resourceful, and mysterious. Vrischika natives are known for their intensity and depth of character. They are fiercely loyal, determined, and possess an incredible ability to transform themselves and overcome challenges.' },
  { name: 'Dhanu', en: 'Sagittarius', symbol: '&#x2650;', dates: 'Nov 22 – Dec 21', element: 'Fire', planet: 'Jupiter', desc: 'Adventurous, optimistic, and freedom-loving. Dhanu natives have an insatiable thirst for knowledge and experience. They are philosophical, honest, and always looking toward the horizon for the next great adventure.' },
  { name: 'Makara', en: 'Capricorn', symbol: '&#x2651;', dates: 'Dec 22 – Jan 19', element: 'Earth', planet: 'Saturn', desc: 'Disciplined, ambitious, and responsible. Makara natives are known for their patience and determination. They set high goals and work steadily towards them, earning respect through their dedication and wisdom.' },
  { name: 'Kumbha', en: 'Aquarius', symbol: '&#x2652;', dates: 'Jan 20 – Feb 18', element: 'Air', planet: 'Saturn', desc: 'Innovative, humanitarian, and independent. Kumbha natives think outside the box and are always ahead of their time. They value freedom, equality, and are driven by a desire to make the world a better place.' },
  { name: 'Meena', en: 'Pisces', symbol: '&#x2653;', dates: 'Feb 19 – Mar 20', element: 'Water', planet: 'Jupiter', desc: 'Compassionate, artistic, and intuitive. Meena natives are deeply connected to the spiritual and emotional realms. They are imaginative, gentle, and possess a natural empathy that makes them wonderful friends and healers.' },
];

const elementColors: Record<string, string> = {
  Fire: 'bg-red-900/40 border-red-700/50 text-red-300',
  Earth: 'bg-green-900/40 border-green-700/50 text-green-300',
  Air: 'bg-sky-900/40 border-sky-700/50 text-sky-300',
  Water: 'bg-blue-900/40 border-blue-700/50 text-blue-300',
};

export default function ZodiacSignsPage() {
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
        <h1 className="text-4xl font-bold text-amber-300 mb-2">12 Zodiac Signs (Rashis)</h1>
        <p className="text-amber-400/70 mb-4">Complete guide to the twelve zodiac signs in Indian astrology</p>
        <p className="text-amber-100/60 mb-12 max-w-2xl">In Vedic astrology (Jyotisha), your Rashi is determined by the position of the Moon at the time of your birth. Each sign carries unique energy, traits, and cosmic influence that shape your personality and destiny.</p>

        <div className="grid md:grid-cols-2 gap-5">
          {signs.map((sign) => (
            <div key={sign.en} className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 hover:border-amber-600/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl" dangerouslySetInnerHTML={{ __html: sign.symbol }} />
                <div>
                  <h2 className="text-xl font-bold text-amber-300">{sign.name} ({sign.en})</h2>
                  <p className="text-amber-400/60 text-sm">{sign.dates}</p>
                </div>
              </div>
              <div className="flex gap-2 mb-3">
                <span className={`text-xs px-2 py-1 rounded-full border ${elementColors[sign.element]}`}>
                  {sign.element}
                </span>
                <span className="text-xs px-2 py-1 rounded-full border border-amber-700/50 bg-amber-900/40 text-amber-300">
                  {sign.planet}
                </span>
              </div>
              <p className="text-amber-100/70 text-sm leading-relaxed">{sign.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
