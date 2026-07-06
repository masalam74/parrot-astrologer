'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ====== DATA ======

const ZODIAC_SIGNS = [
  'Aries \u2648', 'Taurus \u2649', 'Gemini \u264A', 'Cancer \u264B',
  'Leo \u264C', 'Virgo \u264D', 'Libra \u264E', 'Scorpio \u264F',
  'Sagittarius \u2650', 'Capricorn \u2651', 'Aquarius \u2652', 'Pisces \u2653',
];

const FOCUS_AREAS = ['Love', 'Career', 'Family Gossip', 'General Future'];

const DEITY_CARDS = [
  { name: 'Lakshmi', emoji: '\uD83C\uDF35', energy: 'abundance and prosperity' },
  { name: 'Shiva', emoji: '\uD83D\uDD31', energy: 'transformation and inner power' },
  { name: 'Ganesha', emoji: '\uD83D\uDC18', energy: 'new beginnings and wisdom' },
  { name: 'Krishna', emoji: '\uD83E\uDE88', energy: 'divine love and joy' },
  { name: 'Saraswati', emoji: '\uD83C\uDFB5', energy: 'knowledge and creativity' },
  { name: 'Durga', emoji: '\uD83D\uDCA0', energy: 'courage and protection' },
];

const FORTUNE_TEMPLATES: Record<string, string[]> = {
  Love: [
    'Ah, look here my child! The mystic {deity} has blessed your path with radiant {energy}. {name}, as a {zodiac}, your heart chakra is ablaze! Someone from your past carries a secret longing for you. The stars whisper: be bold, be vulnerable. Venus dances in your 7th house this fortnight. A handwritten letter will change everything. Trust the parrot, {name}!',
    'Oho {name}! The great {deity} card reveals deep {energy} flowing toward you! Your {zodiac} moon is glowing like a temple lamp. A surprise encounter near water will set your heart racing. The parrot sees two paths merging into one beautiful destiny. Open your doors, {name} \u2014 love is already knocking!',
  ],
  Career: [
    'Arrey {name}, the {deity} has chosen you! Such powerful {energy} surrounds your {zodiac} chart! The parrot found the card of destiny \u2014 your career is about to take a spectacular turn. A promotion or new opportunity comes within 14 days. Jupiter is sitting in your 10th house, my child. Speak up in that meeting. Your boss has been watching you!',
    'See here {name}, the sacred {deity} shines with {energy} upon your {zodiac} stars! The cards never lie \u2014 a financial breakthrough is closer than you think. Someone senior will offer you guidance. Accept it with humility. The parrot pecked three times at your fortune card \u2014 that means triple success ahead!',
  ],
  'Family Gossip': [
    'Ha ha {name}! The clever {deity} brings juicy {energy} to your {zodiac} household! The parrot heard everything \u2014 a family reunion is brewing. That aunt who stopped calling? She will call this week with big news! Also, someone in your family is hiding a happy secret. The parrot guarantees: laughter and sweets are coming your way, {name}!',
    'Listen carefully {name}! The mystical {deity} reveals {energy} in your family stars! As a {zodiac}, your 4th house is lit up like Diwali. A long-lost relative will return with gifts. That cousin you argued with? They are ready to make peace. The parrot sees a feast in your future \u2014 literally and figuratively!',
  ],
  'General Future': [
    'Ah {name}, my child! The divine {deity} has answered! Your {zodiac} chart is blessed with {energy}. The next 30 days bring unexpected travel, a sum of money you forgot about, and a compliment that will make your week. The parrot has spoken \u2014 your luck is turning! Carry a green cloth in your wallet for extra blessings!',
    'Wonderful {name}! The great {deity} card appeared with magnificent {energy}! Your {zodiac} stars are aligning like a perfect rangoli. Health improves, finances stabilize, and a friend from far away sends good news. The parrot selected this card especially for you \u2014 that is rare! You are entering your golden phase, {name}!',
  ],
};

// ====== FRONT-FACING TALKING PARROT IN CAGE ======

function CagedParrot({ talking = true }: { talking?: boolean }) {
  return (
    <div className="relative mx-auto" style={{ width: '140px', height: '170px' }}>
      <svg viewBox="0 0 200 240" className="w-full h-full drop-shadow-lg" aria-label="Caged parrot astrologer">
        {/* ---- CAGE ---- */}
        <path d="M30,190 Q30,18 100,12 Q170,18 170,190" fill="none" stroke="#d4a017" strokeWidth="2.5" opacity="0.9" />
        <path d="M36,190 Q36,28 100,22 Q164,28 164,190" fill="none" stroke="#d4a017" strokeWidth="1" opacity="0.35" />
        {/* Vertical bars */}
        <line x1="48" y1="42" x2="48" y2="190" stroke="#b8860b" strokeWidth="1.5" opacity="0.45" />
        <line x1="65" y1="25" x2="65" y2="190" stroke="#b8860b" strokeWidth="1.5" opacity="0.45" />
        <line x1="82" y1="16" x2="82" y2="190" stroke="#b8860b" strokeWidth="1.5" opacity="0.45" />
        <line x1="118" y1="16" x2="118" y2="190" stroke="#b8860b" strokeWidth="1.5" opacity="0.45" />
        <line x1="135" y1="25" x2="135" y2="190" stroke="#b8860b" strokeWidth="1.5" opacity="0.45" />
        <line x1="152" y1="42" x2="152" y2="190" stroke="#b8860b" strokeWidth="1.5" opacity="0.45" />
        {/* Horizontal bars */}
        <line x1="34" y1="55" x2="166" y2="55" stroke="#b8860b" strokeWidth="1" opacity="0.25" />
        <line x1="32" y1="85" x2="168" y2="85" stroke="#b8860b" strokeWidth="1" opacity="0.25" />
        <line x1="32" y1="115" x2="168" y2="115" stroke="#b8860b" strokeWidth="1" opacity="0.25" />
        <line x1="32" y1="150" x2="168" y2="150" stroke="#b8860b" strokeWidth="1" opacity="0.25" />
        {/* Cage base */}
        <rect x="18" y="188" width="164" height="9" rx="3" fill="#8b5e14" />
        <rect x="18" y="197" width="164" height="5" rx="2" fill="#6b4510" />
        {/* Stand */}
        <rect x="93" y="202" width="14" height="22" rx="2" fill="#6b4510" />
        <ellipse cx="100" cy="227" rx="30" ry="6" fill="#8b5e14" />
        {/* Perch */}
        <line x1="50" y1="155" x2="150" y2="155" stroke="#a0522d" strokeWidth="3.5" strokeLinecap="round" />

        {/* ---- FRONT-FACING PARROT ---- */}
        {/* Tail feathers (behind body, peeking below) */}
        <path d="M85,155 Q80,175 72,185" stroke="#247a30" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M100,158 Q100,180 95,192" stroke="#1d6328" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M115,155 Q120,175 128,185" stroke="#247a30" strokeWidth="3" fill="none" strokeLinecap="round" />

        {/* Body - front view (wider, rounder) */}
        <ellipse cx="100" cy="125" rx="30" ry="35" fill="#2d8c3c" />
        <ellipse cx="100" cy="125" rx="26" ry="31" fill="#3da84e" />
        {/* Belly */}
        <ellipse cx="100" cy="132" rx="16" ry="20" fill="#4db85e" opacity="0.35" />

        {/* Left Wing */}
        <ellipse cx="65" cy="120" rx="16" ry="25" fill="#247a30" transform="rotate(10, 65, 120)" />
        <ellipse cx="65" cy="120" rx="12" ry="20" fill="#2d8c3c" transform="rotate(10, 65, 120)" />
        {/* Right Wing */}
        <ellipse cx="135" cy="120" rx="16" ry="25" fill="#247a30" transform="rotate(-10, 135, 120)" />
        <ellipse cx="135" cy="120" rx="12" ry="20" fill="#2d8c3c" transform="rotate(-10, 135, 120)" />

        {/* Neck */}
        <ellipse cx="100" cy="92" rx="14" ry="10" fill="#3da84e" />

        {/* Head - front view (round, facing viewer) */}
        <circle cx="100" cy="72" r="22" fill="#3da84e" />
        {/* Head lighter patch */}
        <circle cx="100" cy="74" r="16" fill="#45b855" opacity="0.3" />

        {/* Left Eye */}
        <circle cx="89" cy="68" r="6" fill="white" />
        <circle cx="89" cy="68" r="3.5" fill="#1a1a1a" />
        <circle cx="87.5" cy="66.5" r="1.2" fill="white" />
        {/* Right Eye */}
        <circle cx="111" cy="68" r="6" fill="white" />
        <circle cx="111" cy="68" r="3.5" fill="#1a1a1a" />
        <circle cx="109.5" cy="66.5" r="1.2" fill="white" />

        {/* Cheek blushes */}
        <circle cx="82" cy="76" r="4" fill="#e8768a" opacity="0.2" />
        <circle cx="118" cy="76" r="4" fill="#e8768a" opacity="0.2" />

        {/* Eye stripe (like real green parakeets) */}
        <line x1="82" y1="64" x2="76" y2="62" stroke="#1a5c24" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="118" y1="64" x2="124" y2="62" stroke="#1a5c24" strokeWidth="1.5" strokeLinecap="round" />

        {/* BEAK - front view (pointing down, with talking animation) */}
        <g>
          {/* Upper beak */}
          <path d="M93,82 L100,96 L107,82 Z" fill="#f4a623" />
          {/* Lower beak - animated open/close */}
          <path d="M95,86 L100,98 L105,86 Z" fill="#e8951a">
            {talking && (
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 0,4; 0,0; 0,3; 0,0; 0,5; 0,0"
                dur="1.8s"
                repeatCount="indefinite"
              />
            )}
          </path>
          {/* Nostrils */}
          <circle cx="98" cy="84" r="1" fill="#c47a10" opacity="0.6" />
          <circle cx="102" cy="84" r="1" fill="#c47a10" opacity="0.6" />
        </g>

        {/* Head crest */}
        <path d="M92,52 Q96,36 100,50" fill="#f4a623" strokeWidth="1.5" />
        <path d="M97,50 Q100,38 103,50" fill="#e8951a" strokeWidth="1" />
        <path d="M100,52 Q104,40 108,52" fill="#f4a623" strokeWidth="1.5" />

        {/* Feet gripping perch */}
        <line x1="88" y1="158" x2="84" y2="153" stroke="#e8951a" strokeWidth="2" strokeLinecap="round" />
        <line x1="84" y1="153" x2="78" y2="153" stroke="#e8951a" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="84" y1="153" x2="86" y2="156" stroke="#e8951a" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="112" y1="158" x2="116" y2="153" stroke="#e8951a" strokeWidth="2" strokeLinecap="round" />
        <line x1="116" y1="153" x2="122" y2="153" stroke="#e8951a" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="116" y1="153" x2="114" y2="156" stroke="#e8951a" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// ====== FLYING PARROT (no cage, with wing flaps) ======

function FlyingParrot() {
  return (
    <svg viewBox="0 0 120 130" className="w-24 h-24 drop-shadow-xl" aria-label="Flying parrot">
      {/* Body */}
      <ellipse cx="60" cy="70" rx="18" ry="22" fill="#3da84e" />
      <ellipse cx="60" cy="73" rx="10" ry="14" fill="#4db85e" opacity="0.3" />
      {/* Head */}
      <circle cx="60" cy="42" r="15" fill="#3da84e" />
      {/* Eyes */}
      <circle cx="53" cy="39" r="4" fill="white" />
      <circle cx="53" cy="39" r="2.5" fill="#1a1a1a" />
      <circle cx="52" cy="38" r="0.8" fill="white" />
      <circle cx="67" cy="39" r="4" fill="white" />
      <circle cx="67" cy="39" r="2.5" fill="#1a1a1a" />
      <circle cx="66" cy="38" r="0.8" fill="white" />
      {/* Beak (open, like carrying something) */}
      <path d="M55,49 L60,58 L65,49 Z" fill="#f4a623" />
      <path d="M56,51 L60,60 L64,51 Z" fill="#e8951a" opacity="0.8" />
      {/* Crest */}
      <path d="M55,29 Q58,20 61,28" fill="#f4a623" strokeWidth="1.5" />
      <path d="M59,28 Q62,22 65,28" fill="#e8951a" strokeWidth="1" />
      {/* LEFT WING - flapping up */}
      <path d="M38,55 Q15,30 20,15 Q30,25 42,50" fill="#247a30" opacity="0.9">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="-15,38,55; 15,38,55; -15,38,55"
          dur="0.3s"
          repeatCount="indefinite"
        />
      </path>
      {/* RIGHT WING - flapping up */}
      <path d="M82,55 Q105,30 100,15 Q90,25 78,50" fill="#247a30" opacity="0.9">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="15,82,55; -15,82,55; 15,82,55"
          dur="0.3s"
          repeatCount="indefinite"
        />
      </path>
      {/* Tail */}
      <path d="M55,90 Q48,105 50,118" stroke="#1d6328" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M60,92 Q60,108 58,122" stroke="#247a30" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M65,90 Q72,105 70,118" stroke="#1d6328" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Cheek blush */}
      <circle cx="48" cy="44" r="2.5" fill="#e8768a" opacity="0.2" />
      <circle cx="72" cy="44" r="2.5" fill="#e8768a" opacity="0.2" />
    </svg>
  );
}

// ====== CARD DECK ======

function CardDeck({ shaking = false }: { shaking?: boolean }) {
  const layers = [
    { offset: 0, rotate: -2, scale: 1 },
    { offset: -2, rotate: 1, scale: 0.98 },
    { offset: -4, rotate: -1.5, scale: 0.96 },
    { offset: -6, rotate: 2, scale: 0.94 },
    { offset: -8, rotate: -0.5, scale: 0.92 },
  ];

  return (
    <div className="card-3d-stack relative" style={{ width: '100px', height: '130px' }}>
      {layers.map((layer, i) => (
        <div
          key={i}
          className={`card-layer ${shaking ? 'animate-deck-shake' : ''}`}
          style={{
            left: '10px',
            top: `${layer.offset}px`,
            transform: `rotate(${layer.rotate}deg) scale(${layer.scale})`,
            zIndex: i,
          }}
        >
          <div className="absolute inset-2 rounded-md border border-yellow-600/40 flex items-center justify-center">
            <span className="text-yellow-500/40 text-xs font-bold select-none">\u0909</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// ====== NATIVE AD SLOT ======
function AdSlot({ label }: { label: string }) {
  return (
    <div
      className="rounded-xl border-2 border-dashed border-amber-300/30 bg-amber-50/50 flex flex-col items-center justify-center p-3 text-center"
      style={{ minHeight: '250px' }}
      aria-label="Advertisement"
    >
      <div className="w-10 h-10 rounded-full bg-amber-200/50 flex items-center justify-center mb-2">
        <svg className="w-5 h-5 text-amber-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      </div>
      <p className="text-[10px] text-amber-500/40 font-mono leading-tight">Ad Placement</p>
      <p className="text-[9px] text-amber-400/25 mt-0.5 font-mono">{label}</p>
    </div>
  );
}

// ====== SHARE TRIGGER ======
function ShareTrigger({ text }: { text: string }) {
  const shareUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
  useEffect(() => {
    (window as unknown as Record<string, string>).__kiliShareUrl = shareUrl;
    return () => { delete (window as unknown as Record<string, string>).__kiliShareUrl; };
  }, [shareUrl]);
  return null;
}

// ====== MAIN PAGE ======

type GamePhase = 'idle' | 'flying' | 'picking' | 'throwing' | 'fortune';

export default function Home() {
  const [name, setName] = useState('');
  const [zodiac, setZodiac] = useState('');
  const [focus, setFocus] = useState('');
  const [phase, setPhase] = useState<GamePhase>('idle');
  const [selectedDeity, setSelectedDeity] = useState<typeof DEITY_CARDS[0] | null>(null);
  const [fortune, setFortune] = useState('');
  const [formError, setFormError] = useState('');

  const isAnimating = phase !== 'idle' && phase !== 'fortune';

  const generateFortune = useCallback(
    (deity: typeof DEITY_CARDS[0], seekerName: string, seekerZodiac: string, seekerFocus: string) => {
      const templates = FORTUNE_TEMPLATES[seekerFocus] || FORTUNE_TEMPLATES['General Future'];
      const template = templates[Math.floor(Math.random() * templates.length)];
      return template
        .replace(/{deity}/g, deity.name)
        .replace(/{energy}/g, deity.energy)
        .replace(/{name}/g, seekerName)
        .replace(/{zodiac}/g, seekerZodiac);
    },
    []
  );

  const handleAskParrot = () => {
    if (!name.trim()) { setFormError('Please enter your name, seeker!'); return; }
    if (!zodiac) { setFormError('Choose your zodiac sign!'); return; }
    if (!focus) { setFormError('Select a life focus area!'); return; }
    setFormError('');

    // Phase 1: Parrot flies from cage to deck
    setPhase('flying');

    // Phase 2: Parrot picks card (deck shakes)
    setTimeout(() => setPhase('picking'), 1800);

    // Phase 3: Card thrown at user
    setTimeout(() => {
      const deity = DEITY_CARDS[Math.floor(Math.random() * DEITY_CARDS.length)];
      setSelectedDeity(deity);
      setFortune(generateFortune(deity, name.trim(), zodiac, focus));
      setPhase('throwing');
    }, 3500);

    // Phase 4: Show fortune
    setTimeout(() => setPhase('fortune'), 5000);
  };

  const handleShare = () => {
    const shareUrl = (window as unknown as Record<string, string>).__kiliShareUrl;
    if (shareUrl) window.open(shareUrl, '_blank');
  };

  const shareText = selectedDeity
    ? `\uD83D\uDC99 *Parrot Astrologer - Kili Josiyam* \uD83D\uDC99\n\n\uD83D\uDD39 *Seeker:* ${name.trim()}\n\uD83D\uDD39 *Zodiac:* ${zodiac}\n\uD83D\uDD39 *Focus:* ${focus}\n\uD83D\uDD39 *Deity Card:* ${selectedDeity.emoji} ${selectedDeity.name}\n\n\uD83D\uDCDD *Your Fortune:*\n${fortune}\n\n\uD83E\uDD8A Try it yourself!`
    : '';

  const handleRetry = () => {
    setPhase('idle');
    setSelectedDeity(null);
    setFortune('');
    setFormError('');
  };

  return (
    <div className="min-h-screen flex flex-col parchment-bg">
      {/* Decorative top border */}
      <div className="h-2 bg-gradient-to-r from-red-900 via-amber-500 to-red-900" />

      {/* Header */}
      <header className="relative bg-gradient-to-b from-red-900 via-red-800 to-amber-900 text-center py-5 px-4 shadow-lg">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffd700' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-100 tracking-wide" style={{ fontFamily: 'serif', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            Parrot Astrologer
          </h1>
          <p className="text-amber-300/80 text-sm mt-1 italic">
            Sacred Kili Josiyam from the Streets of South India
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center px-4 py-6 gap-6">
        {/* Canvas area */}
        <div className="w-full max-w-lg relative">
          <div
            className="relative rounded-2xl p-6 overflow-hidden mystic-border shadow-xl"
            style={{
              background: 'linear-gradient(180deg, #3d1c0a 0%, #5a2d0e 40%, #7a3b15 100%)',
              minHeight: '240px',
            }}
          >
            {/* Mat texture */}
            <div className="absolute inset-0 opacity-20 rounded-2xl" style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(255,200,100,0.08) 8px, rgba(255,200,100,0.08) 9px), repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(255,200,100,0.05) 8px, rgba(255,200,100,0.05) 9px)`,
            }} />

            {/* Corner decorations */}
            <svg className="absolute top-1 left-1 w-6 h-6 text-amber-500/25" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            <svg className="absolute top-1 right-1 w-6 h-6 text-amber-500/25" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            <svg className="absolute bottom-1 left-1 w-6 h-6 text-amber-500/25 -scale-x-100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            <svg className="absolute bottom-1 right-1 w-6 h-6 text-amber-500/25 -scale-x-100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>

            {/* === SCENE LAYOUT === */}
            <div className="relative flex items-end justify-between min-h-[200px]">

              {/* Left: Cage with parrot (fades when parrot flies) */}
              <AnimatePresence>
                {phase !== 'flying' && phase !== 'picking' ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <CagedParrot talking={phase === 'idle'} />
                  </motion.div>
                ) : (
                  /* Cage stays visible but parrot is "gone" */
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0.3 }}
                    className="relative z-0"
                  >
                    <CagedParrot talking={false} />
                    {/* "Empty cage" overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-amber-300/40 text-xs italic">cage is empty...</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Right: Card Deck */}
              <motion.div
                animate={
                  phase === 'throwing' || phase === 'fortune'
                    ? { scale: 0.6, opacity: 0.3 }
                    : {}
                }
                transition={{ duration: 0.4 }}
                className="z-0 self-center"
              >
                <CardDeck shaking={phase === 'picking'} />
              </motion.div>
            </div>

            {/* === FLYING PARROT === */}
            <AnimatePresence>
              {(phase === 'flying' || phase === 'picking') && (
                <motion.div
                  className="absolute z-30"
                  initial={{ left: '15%', top: '20%', scale: 0.6, opacity: 0, rotate: -10 }}
                  animate={
                    phase === 'flying'
                      ? { left: '60%', top: '5%', scale: 1, opacity: 1, rotate: 5 }
                      : { left: '62%', top: '30%', scale: 0.9, opacity: 1, rotate: 0 }
                  }
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={
                    phase === 'flying'
                      ? { duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }
                      : { duration: 0.5, ease: 'easeOut' }
                  }
                >
                  <FlyingParrot />
                  {/* Motion trail / speed lines */}
                  {phase === 'flying' && (
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-40">
                      <div className="w-3 h-0.5 bg-amber-300 rounded" />
                      <div className="w-5 h-0.5 bg-amber-300 rounded" />
                      <div className="w-3 h-0.5 bg-amber-300 rounded" />
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* === THROWN CARD (flies at user) === */}
            <AnimatePresence>
              {phase === 'throwing' && selectedDeity && (
                <motion.div
                  className="absolute z-40 left-1/2 top-1/2"
                  initial={{
                    x: '50%', y: '50%',
                    scale: 0.3, opacity: 0,
                    rotateY: 180,
                  }}
                  animate={{
                    x: '-50%', y: '-50%',
                    scale: [0.3, 1.3, 1.1, 1],
                    opacity: [0, 1, 1, 1],
                    rotateY: [180, 90, 0, 0],
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                >
                  <div className="card-revealed rounded-2xl p-5 text-center shadow-2xl min-w-[180px]">
                    <div className="text-5xl mb-2">{selectedDeity.emoji}</div>
                    <h3 className="text-xl font-bold text-red-800" style={{ fontFamily: 'serif' }}>
                      {selectedDeity.name}
                    </h3>
                    <p className="text-xs text-amber-800/60 mt-1 capitalize">{selectedDeity.energy}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Status text */}
            <AnimatePresence>
              {phase === 'flying' && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="text-center text-amber-400/80 text-sm italic mt-3 relative z-30">
                  The parrot takes flight...
                </motion.p>
              )}
              {phase === 'picking' && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="text-center text-amber-400/80 text-sm italic mt-3 relative z-30">
                  The parrot picks your card with its beak...
                </motion.p>
              )}
              {phase === 'throwing' && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="text-center text-amber-400/80 text-sm italic mt-3 relative z-30">
                  Here comes your destiny!
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Input Form (idle) */}
        <AnimatePresence>
          {phase === 'idle' && (
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, height: 0, overflow: 'hidden' }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md space-y-4"
            >
              <div className="parchment-bg parchment-texture rounded-2xl p-5 mystic-border shadow-lg space-y-4">
                <h2 className="text-center text-lg font-bold text-red-900" style={{ fontFamily: 'serif' }}>
                  Seek Your Fortune
                </h2>
                {formError && (
                  <div className="bg-red-100 border border-red-300 text-red-800 text-sm rounded-lg px-3 py-2 text-center">{formError}</div>
                )}
                <div>
                  <label htmlFor="seeker-name" className="block text-sm font-semibold text-amber-900 mb-1.5">Seeker&apos;s Name</label>
                  <input id="seeker-name" type="text" value={name} onChange={(e) => { setName(e.target.value); setFormError(''); }}
                    placeholder="Enter your name..." disabled={isAnimating}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-amber-300/50 bg-white/80 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all text-sm" />
                </div>
                <div>
                  <label htmlFor="zodiac-select" className="block text-sm font-semibold text-amber-900 mb-1.5">Zodiac Sign</label>
                  <select id="zodiac-select" value={zodiac} onChange={(e) => { setZodiac(e.target.value); setFormError(''); }}
                    disabled={isAnimating}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-amber-300/50 bg-white/80 text-stone-800 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all text-sm appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23924' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}>
                    <option value="">-- Choose your sign --</option>
                    {ZODIAC_SIGNS.map((sign) => (<option key={sign} value={sign}>{sign}</option>))}
                  </select>
                </div>
                <div>
                  <label htmlFor="focus-select" className="block text-sm font-semibold text-amber-900 mb-1.5">Life Focus Area</label>
                  <select id="focus-select" value={focus} onChange={(e) => { setFocus(e.target.value); setFormError(''); }}
                    disabled={isAnimating}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-amber-300/50 bg-white/80 text-stone-800 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all text-sm appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23924' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}>
                    <option value="">-- What do you seek? --</option>
                    {FOCUS_AREAS.map((area) => (<option key={area} value={area}>{area}</option>))}
                  </select>
                </div>
                <button onClick={handleAskParrot}
                  className="w-full py-3.5 bg-gradient-to-r from-red-800 via-red-700 to-amber-700 hover:from-red-700 hover:via-red-600 hover:to-amber-600 text-amber-100 font-bold text-base rounded-xl shadow-lg shadow-red-900/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] animate-pulse-border cursor-pointer"
                  style={{ fontFamily: 'serif' }}>
                  Ask the Mystic Parrot \u2728
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fortune display with native ad slots */}
        <AnimatePresence>
          {phase === 'fortune' && selectedDeity && (
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-full flex flex-col lg:flex-row items-start justify-center gap-4 lg:gap-6 px-0 lg:px-4"
            >
              {/* Left Ad Slot (desktop) */}
              <div className="hidden lg:block w-[160px] xl:w-[200px] flex-shrink-0">
                <AdSlot label="ad-slot-left-fortune" />
              </div>

              {/* Center: Fortune */}
              <div className="w-full max-w-md mx-auto lg:mx-0 space-y-5">
                <div className="card-revealed rounded-2xl p-6 text-center">
                  <div className="text-6xl mb-3">{selectedDeity.emoji}</div>
                  <h2 className="text-2xl font-bold text-red-800 mb-1" style={{ fontFamily: 'serif' }}>{selectedDeity.name}</h2>
                  <p className="text-sm text-amber-800/70 italic capitalize">{selectedDeity.energy}</p>
                </div>
                <div className="parchment-bg parchment-texture rounded-2xl p-6 mystic-border shadow-xl">
                  <div className="text-center mb-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-amber-800/50 font-medium">The Mystic Parrot Speaks</span>
                  </div>
                  <p className="text-base leading-relaxed text-stone-700 font-serif italic">&ldquo;{fortune}&rdquo;</p>
                  <div className="mt-4 pt-3 border-t border-amber-800/15 flex items-center justify-between text-xs text-amber-800/40">
                    <span>{name.trim()} &middot; {zodiac}</span>
                    <span>Parrot Astrologer</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button onClick={handleShare}
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] hover:bg-[#1da851] text-white font-bold rounded-xl shadow-lg shadow-green-900/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Share on WhatsApp
                  </button>
                  <button onClick={handleRetry}
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-amber-800 hover:bg-amber-700 font-bold rounded-xl shadow-lg shadow-amber-900/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    style={{ color: '#fdf6e3' }}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Try Again
                  </button>
                </div>
                {/* Mobile Ad Slot */}
                <div className="lg:hidden"><AdSlot label="ad-slot-mobile-fortune" /></div>
                <ShareTrigger text={shareText} />
              </div>

              {/* Right Ad Slot (desktop) */}
              <div className="hidden lg:block w-[160px] xl:w-[200px] flex-shrink-0">
                <AdSlot label="ad-slot-right-fortune" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-auto text-center py-4 px-4 bg-red-900/10 border-t border-amber-800/10">
        <p className="text-xs text-amber-800/40">
          Parrot Astrologer &mdash; For entertainment purposes only. The parrot knows all, but takes no responsibility.
        </p>
      </footer>
    </div>
  );
}