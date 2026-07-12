import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hindu Deities in Fortune Telling Cards — Parrot Astrologer',
  description: 'Explore how Hindu gods and goddesses like Lakshmi, Shiva, Ganesha, Krishna, Saraswati, and Durga appear on Kili Josiyam fortune cards and what they signify.',
};

const deities = [
  {
    name: 'Goddess Lakshmi',
    meaning: 'Wealth and Prosperity',
    card: 'When the parrot picks a Lakshmi card, it is considered one of the most auspicious selections. Lakshmi, the consort of Lord Vishnu, is the supreme goddess of wealth, fortune, and prosperity in Hinduism. A Lakshmi card typically predicts financial gains, business success, or the arrival of abundance in the seeker\'s life. It may also indicate harmony in the household and overall well-being. In traditional Kili Josiyam, practitioners often elaborate on the Lakshmi card by discussing the four types of wealth — material wealth, knowledge wealth, love wealth, and spiritual wealth — suggesting which area the fortune pertains to.',
  },
  {
    name: 'Lord Shiva',
    meaning: 'Transformation and Power',
    card: 'A Shiva card carries deep spiritual significance. As the destroyer and transformer in the Hindu trinity, Lord Shiva represents the power of change, meditation, and inner strength. When this card appears, it often signals a period of transformation in the seeker\'s life — the end of one chapter and the beginning of another. It may suggest that current difficulties will soon give way to new opportunities. The Shiva card can also indicate spiritual growth, encouraging the seeker to look inward through meditation or self-reflection. In some interpretations, it warns against attachment to material things and points toward a path of detachment and wisdom.',
  },
  {
    name: 'Lord Ganesha',
    meaning: 'Removal of Obstacles',
    card: 'The Ganesha card is universally welcomed in Kili Josiyam readings. Lord Ganesha, the elephant-headed god, is revered as Vighnaharta — the remover of obstacles. When the parrot selects a Ganesha card, it typically means that hurdles blocking the seeker\'s progress will soon be cleared. This could relate to career challenges, relationship issues, legal matters, or any personal struggle. The card often carries an implicit blessing for new beginnings, making it especially favorable for those considering starting a business, getting married, or embarking on a new venture. Practitioners may advise the seeker to pray to Ganesha before undertaking important tasks.',
  },
  {
    name: 'Lord Krishna',
    meaning: 'Love and Divine Guidance',
    card: 'A Krishna card is rich with meaning related to love, joy, and divine intervention. Lord Krishna is perhaps the most beloved deity in Hinduism, known for his playful nature, divine wisdom (as expressed in the Bhagavad Gita), and his role as the ultimate guide and protector. When this card appears, it often predicts positive developments in love and relationships. For unmarried seekers, it may foretell romance or marriage. For those in relationships, it suggests deeper bonding and understanding. The Krishna card can also signify that divine help is on the way — that the universe is conspiring to help the seeker, much like Krishna guided Arjuna on the battlefield.',
  },
  {
    name: 'Goddess Saraswati',
    meaning: 'Knowledge and Learning',
    card: 'The Saraswati card is particularly significant for students, teachers, artists, and anyone engaged in intellectual or creative pursuits. Goddess Saraswati is the patron deity of knowledge, music, arts, and wisdom in Hinduism. When the parrot picks this card, it often indicates academic success, creative breakthroughs, or the acquisition of new skills. It may suggest that the seeker is about to receive important knowledge or that their hard work in studies or creative projects will soon bear fruit. The card can also encourage the seeker to pursue education or artistic endeavors, suggesting that intellectual growth is the key to their current life questions.',
  },
  {
    name: 'Goddess Durga',
    meaning: 'Strength and Victory',
    card: 'A Durga card is a powerful omen of strength, courage, and eventual victory. Goddess Durga, the warrior goddess who defeated the buffalo demon Mahishasura, represents feminine power, protection, and the triumph of good over evil. When this card appears in a reading, it often signals that the seeker is about to overcome significant challenges. It may relate to conflicts at work, legal battles, health struggles, or personal adversities. The card reassures the seeker that they have the inner strength to prevail, much like Durga fought a nine-day battle and emerged victorious. It can also indicate that the seeker should stand their ground and not give up in the face of difficulties.',
  },
];

export default function HinduDeitiesPage() {
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
          <span className="text-xs px-2 py-1 rounded-full border bg-purple-900/40 border-purple-700/50 text-purple-300">Culture</span>
          <span className="text-amber-400/50 text-sm">July 2025</span>
          <span className="text-amber-400/50 text-sm">6 min read</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-amber-300 mb-8">Hindu Deities in Fortune Telling Cards: What Each God and Goddess Signifies</h1>

        <div className="space-y-6 text-amber-100/80 leading-relaxed">
          <p>
            One of the most captivating aspects of Kili Josiyam is the beautiful imagery on its fortune cards. Unlike a simple tarot deck, Kili Josiyam cards are deeply rooted in Hindu iconography, featuring vivid illustrations of gods and goddesses from the Hindu pantheon. Each deity carries specific symbolic meaning, and their appearance on a fortune card is believed to carry divine messages for the seeker. Understanding these deities and their significance adds a rich layer of meaning to the parrot astrology experience.
          </p>
          <p>
            The use of Hindu deities on fortune cards is not random. In the Hindu worldview, gods and goddesses are not distant, abstract figures but active, present forces who communicate with devotees through various mediums. A parrot selecting a card bearing the image of Lakshmi or Ganesha is seen as a form of divine communication — the cosmos speaking through the natural instincts of a bird. Below, we explore six of the most commonly depicted deities on Kili Josiyam cards and what their presence signifies.
          </p>

          {deities.map((d) => (
            <div key={d.name} className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6">
              <h2 className="text-xl font-bold text-amber-300 mb-2">{d.name}</h2>
              <p className="text-amber-400/60 text-sm mb-3 italic">{d.meaning}</p>
              <p>{d.card}</p>
            </div>
          ))}

          <h2 className="text-2xl font-bold text-amber-300 mt-10 mb-4">Other Common Card Symbols</h2>
          <p>
            Beyond the major deities, Kili Josiyam cards may also feature other symbolic images. A throne card often represents authority, promotion, or respect in society. A marriage procession card (called &quot;Kalyana&quot; card) predicts wedding bells or harmonious relationships. A temple card suggests spiritual growth, pilgrimage, or divine blessings. A tree card may signify growth, stability, and rootedness. A sword or weapon card could indicate conflict but also the strength to overcome it. Each of these symbols draws from the vast visual vocabulary of Hindu and South Indian cultural traditions, making every card reading a miniature journey through mythology and meaning.
          </p>
          <p>
            It is worth noting that interpretations can vary between different Kili Josiyam families and regions. What one practitioner reads as a sign of financial gain, another might interpret as spiritual wealth. This variability is part of what makes Kili Josiyam a living, breathing tradition rather than a rigid system. The human element of interpretation ensures that each reading is unique, personal, and responsive to the seeker&apos;s specific situation and questions.
          </p>

          <div className="mt-10 p-6 bg-amber-900/30 border border-amber-800/40 rounded-xl">
            <p className="text-amber-200/60 text-sm">
              <strong className="text-amber-300">Disclaimer:</strong> This article is for educational and cultural purposes only. The descriptions of deity symbolism are based on traditional interpretations and should not be taken as religious doctrine. Digital parrot astrology fortune cards are intended for entertainment.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
