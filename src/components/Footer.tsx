import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-16 border-t-2 border-amber-800/30 bg-gradient-to-b from-amber-950/90 to-amber-950 text-amber-100/80">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-amber-300 mb-3">Parrot Astrologer</h3>
            <p className="text-sm leading-relaxed">Experience the magic of traditional South Indian Parrot Astrology reimagined for the digital age. Free, fun, and mystical fortune telling.</p>
          </div>
          <div>
            <h4 className="text-amber-300 font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-amber-300 transition-colors">Get Your Fortune</Link></li>
              <li><Link href="/how-it-works" className="hover:text-amber-300 transition-colors">How It Works</Link></li>
              <li><Link href="/zodiac-signs" className="hover:text-amber-300 transition-colors">Zodiac Signs Guide</Link></li>
              <li><Link href="/blog" className="hover:text-amber-300 transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-amber-300 font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-amber-300 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-amber-300 transition-colors">Terms of Service</Link></li>
              <li><Link href="/about" className="hover:text-amber-300 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-amber-300 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-amber-300 font-semibold mb-3">Disclaimer</h4>
            <p className="text-xs leading-relaxed text-amber-200/50">This site is for entertainment purposes only. Parrot Astrologer does not provide real astrological, medical, legal, or financial advice.</p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-amber-800/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-200/40">
          <p>&copy; 2026 Parrot Astrologer. All rights reserved.</p>
          <p>Made with devotion to South Indian traditions</p>
        </div>
      </div>
    </footer>
  );
}
