import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact Us — Parrot Astrologer',
  description: 'Get in touch with the Parrot Astrologer team. We welcome your feedback, questions, and suggestions.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-amber-900 to-amber-950">
      <div className="border-b border-amber-800/40 bg-amber-900/50">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="text-amber-300 hover:text-amber-200 text-sm transition-colors">&larr; Back to Fortune Teller</Link>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-amber-300 mb-2">Contact Us</h1>
        <p className="text-amber-400/70 mb-10 text-lg">We would love to hear from you</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6">
              <h2 className="text-xl font-bold text-amber-300 mb-4">Get in Touch</h2>
              <p className="text-amber-100/80 mb-6 leading-relaxed">Whether you have a question, feedback, a suggestion, or a technical issue — we are here to help. We typically respond within 24 to 48 hours.</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">&#9993;</span>
                  <div>
                    <p className="text-amber-300 font-semibold">Email</p>
                    <p className="text-amber-100/70">technosupportnow@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-amber-400 mt-1">&#128205;</span>
                  <div>
                    <p className="text-amber-300 font-semibold">Based in</p>
                    <p className="text-amber-100/70">South India</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6">
              <h3 className="text-lg font-bold text-amber-300 mb-3">Common Questions</h3>
              <ul className="space-y-3 text-sm text-amber-100/70">
                <li><strong>Is my fortune real?</strong> — Parrot Astrologer is for entertainment only.</li>
                <li><strong>Is the parrot a real AI?</strong> — The parrot is an animation. Fortune text uses templates.</li>
                <li><strong>Can I use this on mobile?</strong> — Yes, the site works great on all devices.</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-900/30 border border-amber-800/40 rounded-xl p-6">
            <h2 className="text-xl font-bold text-amber-300 mb-6">Send Us a Message</h2>
            <form className="space-y-5" action="https://formsubmit.co/technosupportnow@gmail.com" method="POST">
              <div>
                <label className="block text-amber-300 text-sm font-semibold mb-2">Your Name</label>
                <input type="text" name="name" required className="w-full px-4 py-3 bg-amber-950/60 border border-amber-800/50 rounded-lg text-amber-100 placeholder-amber-200/30 focus:outline-none focus:border-amber-500" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-amber-300 text-sm font-semibold mb-2">Email Address</label>
                <input type="email" name="email" required className="w-full px-4 py-3 bg-amber-950/60 border border-amber-800/50 rounded-lg text-amber-100 placeholder-amber-200/30 focus:outline-none focus:border-amber-500" placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="block text-amber-300 text-sm font-semibold mb-2">Subject</label>
                <select name="subject" className="w-full px-4 py-3 bg-amber-950/60 border border-amber-800/50 rounded-lg text-amber-100 focus:outline-none focus:border-amber-500">
                  <option value="feedback">General Feedback</option>
                  <option value="bug">Technical Issue</option>
                  <option value="suggestion">Feature Suggestion</option>
                  <option value="business">Business Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-amber-300 text-sm font-semibold mb-2">Your Message</label>
                <textarea name="message" required rows={5} className="w-full px-4 py-3 bg-amber-950/60 border border-amber-800/50 rounded-lg text-amber-100 placeholder-amber-200/30 focus:outline-none focus:border-amber-500 resize-none" placeholder="Tell us what is on your mind..." />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-amber-700 to-red-800 text-amber-100 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-red-700 transition-all shadow-lg">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
