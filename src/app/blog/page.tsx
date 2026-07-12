import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — Parrot Astrologer | Kili Josiyam Articles',
  description: 'Read fascinating articles about Kili Josiyam, parrot astrology history, Hindu deities in fortune telling, and comparisons with Western astrology.',
};

const posts = [
  {
    slug: 'what-is-kili-josiyam',
    title: 'What is Kili Josiyam? Understanding Parrot Astrology',
    excerpt: 'Discover the ancient South Indian fortune-telling tradition where a trained parrot picks your destiny card. Learn the meaning, process, and cultural significance of Kili Josiyam.',
    date: 'July 2025',
    readTime: '5 min read',
    tag: 'Beginner',
  },
  {
    slug: 'history-of-parrot-astrology-in-india',
    title: 'History of Parrot Astrology in India',
    excerpt: 'From ancient temple courtyards to modern digital screens — trace the fascinating 500-year journey of parrot astrology through Indian history, culture, and tradition.',
    date: 'July 2025',
    readTime: '7 min read',
    tag: 'History',
  },
  {
    slug: 'hindu-deities-in-fortune-telling',
    title: 'Hindu Deities in Fortune Telling Cards',
    excerpt: 'Explore how gods and goddesses like Lakshmi, Shiva, Ganesha, and Saraswati appear on traditional fortune cards and what their presence signifies for your reading.',
    date: 'July 2025',
    readTime: '6 min read',
    tag: 'Culture',
  },
  {
    slug: 'kili-josiyam-vs-western-astrology',
    title: 'Kili Josiyam vs Western Astrology: Key Differences',
    excerpt: 'How does South Indian parrot astrology compare to Western zodiac signs? We explore the methods, beliefs, zodiac systems, and cultural contexts of both traditions.',
    date: 'July 2025',
    readTime: '6 min read',
    tag: 'Comparison',
  },
];

const tagColors: Record<string, string> = {
  Beginner: 'bg-green-900/40 border-green-700/50 text-green-300',
  History: 'bg-amber-900/40 border-amber-700/50 text-amber-300',
  Culture: 'bg-purple-900/40 border-purple-700/50 text-purple-300',
  Comparison: 'bg-sky-900/40 border-sky-700/50 text-sky-300',
};

export default function BlogPage() {
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
        <h1 className="text-4xl font-bold text-amber-300 mb-2">Blog</h1>
        <p className="text-amber-400/70 mb-12">Stories, history, and insights about Kili Josiyam and Indian fortune telling</p>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-amber-900/30 border border-amber-800/40 rounded-xl p-6 md:p-8 hover:border-amber-600/50 transition-all hover:bg-amber-900/40"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className={`text-xs px-2 py-1 rounded-full border ${tagColors[post.tag]}`}>
                  {post.tag}
                </span>
                <span className="text-amber-400/50 text-sm">{post.date}</span>
                <span className="text-amber-400/50 text-sm">{post.readTime}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-amber-200 mb-3">{post.title}</h2>
              <p className="text-amber-100/60 leading-relaxed">{post.excerpt}</p>
              <span className="inline-block mt-4 text-amber-400 text-sm hover:text-amber-300 transition-colors">
                Read article &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
