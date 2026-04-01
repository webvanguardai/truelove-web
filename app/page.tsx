'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// ── DATA ──────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: '001',
    client: 'Kiko Navarro',
    type: 'Web Design',
    year: '2024',
    desc: 'Legendary DJ & Producer personal website.',
    img: '/img/portfolios/kikonavarro.jpg',
    tags: ['Web', 'Identity'],
  },
  {
    id: '002',
    client: 'Jessica Morari',
    type: 'Branding & Web',
    year: '2023',
    desc: 'Coaching and wellness platform.',
    img: '/img/portfolios/jesslnk.webp',
    tags: ['Brand', 'Web'],
  },
  {
    id: '003',
    client: 'Javi Beat',
    type: 'Identity',
    year: '2024',
    desc: 'Personal brand & DJ identity.',
    img: '/img/portfolios/javibeat.jpg',
    tags: ['Identity'],
  },
  {
    id: '004',
    client: 'Estrela Photo',
    type: 'Portfolio',
    year: '2023',
    desc: 'Photography studio portfolio.',
    img: '/img/portfolios/estrela.jpg',
    tags: ['Web', 'Photo'],
  },
  {
    id: '005',
    client: 'Manuel KevSax',
    type: 'Web Design',
    year: '2024',
    desc: 'Luxury saxophonist personal brand and booking platform.',
    img: '/img/portfolios/manusax.webp',
    tags: ['Web', 'Booking'],
  },
  {
    id: '006',
    client: 'Sergio Trumpet',
    type: 'Web Design',
    year: '2024',
    desc: 'Professional trumpet player portfolio.',
    img: '/img/portfolios/sergio.jpg',
    tags: ['Web', 'Portfolio'],
  },
  {
    id: '007',
    client: 'Julio Cuba',
    type: 'Identity',
    year: '2024',
    desc: 'Violinist performance and artistic portfolio.',
    img: '/img/portfolios/julio.webp',
    tags: ['Identity', 'Web'],
  },
]

const graphicWork = [
  { title: 'MAMA CALLING', sub: 'Buika × Kiko Navarro', type: 'Vinyl Cover' },
  { title: 'EL SILENCIO', sub: 'Buika × Kiko Navarro', type: 'Vinyl Cover' },
  { title: 'VARADERO', sub: 'Event Series', type: 'Flyer Design' },
]

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function Home() {
  const [active, setActive] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [time, setTime] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const tick = () => {
      const d = new Date(new Date().toLocaleString('en', { timeZone: 'Asia/Dubai' }))
      setTime(`${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`)
    }
    tick(); const i = setInterval(tick, 10000); return () => clearInterval(i)
  }, [])

  return (
    <div ref={containerRef}>

      {/* ── PROGRESS ── */}
      <motion.div className="fixed top-0 left-0 h-[1.5px] bg-rust z-50 origin-left" style={{ scaleX: scrollYProgress, transformOrigin: 'left' }} />

      {/* ── NAV ── */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-10 h-12 flex items-center justify-between">
        <a href="#" className="font-mono text-xs tracking-[0.2em] text-ink/70 hover:text-rust transition-colors">
          TLC<span className="text-rust blink">_</span>
        </a>
        <div className="flex items-center gap-6">
          <span className="font-mono text-[10px] text-ink/30 hidden md:block">{time} DXB</span>
          <nav className="hidden md:flex gap-6">
            {['Work', 'Services', 'About', 'Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className="font-mono text-[10px] tracking-widest uppercase text-ink/50 hover:text-rust transition-colors">
                {l}
              </a>
            ))}
          </nav>
          <button onClick={() => setMenuOpen(true)} className="md:hidden font-mono text-[10px] tracking-widest uppercase text-ink/50">
            ≡
          </button>
        </div>
      </header>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink flex flex-col items-center justify-center gap-8">
            <button onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-6 font-mono text-[10px] tracking-widest text-cream/40">CLOSE</button>
            {['Work', 'Services', 'About', 'Contact'].map((l, i) => (
              <motion.a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                className="font-serif text-6xl italic text-cream hover:text-rust transition-colors">
                {l}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO ── */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT — giant type */}
        <div className="flex flex-col justify-end pb-12 px-6 md:px-10 pt-24 relative">
          {/* Top-left badge */}
          <div className="absolute top-14 left-6 md:left-10 font-mono text-[9px] tracking-[0.3em] text-ink/30 uppercase">
            Est. 2015 · Dubai, UAE
          </div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}
          >
            <div className="font-mono text-[9px] tracking-[0.3em] text-rust uppercase mb-6">
              Web & Graphic Design Studio
            </div>

            <h1 className="font-serif leading-[0.82] select-none"
              style={{ fontSize: 'clamp(5.5rem, 16vw, 18rem)' }}>
              <motion.span className="block" initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
                TRUE
              </motion.span>
              <motion.span className="block italic text-rust" initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
                LOVE
              </motion.span>
              <motion.span className="block" initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}>
                CRE<span className="text-rust">.</span>
              </motion.span>
            </h1>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-8 flex items-center gap-6">
              <p className="font-sans text-xs text-ink/50 max-w-[220px] leading-relaxed">
                High-end digital experiences. Minimalist design, premium execution.
                From Dubai to the world.
              </p>
              <a href="#work"
                className="flex-shrink-0 w-10 h-10 border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-cream transition-all duration-300 font-mono text-sm">
                ↓
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT — featured image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.1, delay: 0.3 }}
          className="relative bg-sand overflow-hidden min-h-[50vh] md:min-h-full"
        >
          <Image src="/img/portfolios/kikonavarro.jpg" alt="Kiko Navarro — True Love Creative" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          <div className="absolute inset-0 bg-ink/10" />
          <div className="absolute bottom-6 left-6 font-mono text-[9px] text-cream/70 tracking-widest uppercase">
            Featured — Kiko Navarro / 2024
          </div>
        </motion.div>
      </section>

      {/* ── TICKER ── */}
      <div className="border-y border-ink/10 py-3 overflow-hidden bg-ink/[0.02]">
        <div className="ticker">
          {Array(3).fill(['SELECTED WORKS', '·', 'KIKO NAVARRO', '·', 'JESSICA MORARI', '·', 'JAVI BEAT', '·', 'ESTRELA PHOTO', '·', 'MANUEL KEVSAX', '·', 'JULIO CUBA', '·', 'NIBANGO', '·']).flat().map((t, i) => (
            <span key={i} className="font-mono text-[9px] tracking-[0.3em] text-ink/30 px-5 uppercase">{t}</span>
          ))}
        </div>
      </div>

      {/* ── SELECTED WORKS ── */}
      <section id="work" className="py-24">
        <div className="px-6 md:px-10 mb-14 flex items-baseline justify-between">
          <div>
            <span className="font-mono text-[9px] tracking-[0.3em] text-ink/30 uppercase block mb-2">02 — Selected Works</span>
            <h2 className="font-serif text-4xl md:text-6xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Projects<span className="text-rust italic">.</span>
            </h2>
          </div>
          <span className="font-mono text-[9px] text-ink/20 tracking-widest hidden md:block">({projects.length} works)</span>
        </div>

        <div className="divide-y divide-ink/8">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              onHoverStart={() => setActive(i)}
              onHoverEnd={() => setActive(null)}
              className="group relative px-6 md:px-10"
            >
              {/* Hover background */}
              <motion.div
                className="absolute inset-0 bg-ink pointer-events-none"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: active === i ? 1 : 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                style={{ originY: 0 }}
              />

              <div className="relative py-5 md:py-6 flex items-center gap-4 md:gap-8">
                {/* Number */}
                <span className={`font-mono text-[10px] w-8 flex-shrink-0 transition-colors duration-200 ${active === i ? 'text-cream/30' : 'text-ink/20'}`}>
                  {p.id}
                </span>

                {/* Thumbnail */}
                <div className={`relative w-10 h-10 md:w-14 md:h-14 overflow-hidden flex-shrink-0 transition-all duration-300 ${active === i ? 'w-16 h-16 md:w-20 md:h-20' : ''}`}>
                  <Image src={p.img} alt={p.client} fill className={`object-cover transition-all duration-500 ${active === i ? 'grayscale-0 scale-105' : 'grayscale'}`} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className={`font-serif text-xl md:text-3xl font-semibold leading-tight transition-colors duration-200 ${active === i ? 'text-cream' : 'text-ink'}`}
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {p.client}
                  </h3>
                  <p className={`font-mono text-[9px] tracking-widest uppercase mt-0.5 transition-colors duration-200 ${active === i ? 'text-cream/40' : 'text-ink/30'}`}>
                    {p.type} · {p.year}
                  </p>
                </div>

                {/* Tags */}
                <div className="hidden md:flex gap-2 flex-shrink-0">
                  {p.tags.map(tag => (
                    <span key={tag} className={`font-mono text-[8px] tracking-widest uppercase px-2 py-1 border transition-colors duration-200 ${active === i ? 'border-cream/20 text-cream/40' : 'border-ink/10 text-ink/30'}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <span className={`font-mono text-base transition-all duration-300 flex-shrink-0 ${active === i ? 'text-rust translate-x-1' : 'text-ink/20'}`}>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── GRAPHIC DESIGN ── */}
      <section className="px-6 md:px-10 py-24 border-t border-ink/8">
        <div className="mb-14">
          <span className="font-mono text-[9px] tracking-[0.3em] text-ink/30 uppercase block mb-2">03 — Graphic</span>
          <h2 className="font-serif text-4xl md:text-6xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Graphic<br /><em className="text-rust">Design</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-ink/8">
          {graphicWork.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-cream p-8 group hover:bg-ink transition-colors duration-300 cursor-crosshair"
            >
              <div className="font-mono text-[8px] tracking-widest uppercase text-ink/30 group-hover:text-cream/30 mb-4 transition-colors">{g.type}</div>
              <h3 className="font-serif text-3xl md:text-4xl font-semibold text-ink group-hover:text-cream transition-colors mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>{g.title}</h3>
              <p className="font-mono text-[9px] text-ink/40 group-hover:text-cream/40 transition-colors tracking-wider">{g.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── NIBANGO ── */}
      <section className="px-6 md:px-10 py-24 bg-ink text-cream border-t border-cream/5">
        <div className="max-w-5xl">
          <span className="font-mono text-[9px] tracking-[0.3em] text-cream/20 uppercase block mb-6">04 — App Development</span>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="font-mono text-[9px] tracking-widest text-rust uppercase mb-4">Live on iOS · Android · Web</div>
              <h2 className="font-serif text-6xl md:text-8xl font-semibold mb-6 leading-[0.9]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                nibango<span className="text-rust">.</span>
              </h2>
              <p className="font-sans text-sm text-cream/50 leading-relaxed mb-8 max-w-sm">
                The marketplace that actually works.<br />
                Buy. Sell. Bid. Donate. 6 sections, 4 pricing models, real-time chat, zero commissions.
              </p>
              <div className="grid grid-cols-4 gap-4">
                {[['6','Categories'],['4','Pricing Models'],['3','Platforms'],['0%','Commission']].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-serif text-2xl font-semibold text-cream"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}>{n}</div>
                    <div className="font-mono text-[8px] text-cream/30 uppercase tracking-wider leading-tight mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image src="/img/portfolios/nibango-mockup-1.png" alt="Nibango" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="px-6 md:px-10 py-24 border-t border-ink/8">
        <div className="mb-14">
          <span className="font-mono text-[9px] tracking-[0.3em] text-ink/30 uppercase block mb-2">05 — Services</span>
          <h2 className="font-serif text-4xl md:text-6xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            What we<br /><em className="text-rust">do</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { n: '01', t: 'Web Design', d: 'Bespoke websites built with obsessive attention to detail. Performance, aesthetics, conversion.' },
            { n: '02', t: 'Graphic Design', d: 'Visual identity systems. Logos, print, packaging — everything that makes a brand recognisable.' },
            { n: '03', t: 'App Development', d: 'From concept to live app. iOS, Android, Web. We build things that work in the real world.' },
          ].map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
            >
              <div className="font-mono text-[9px] text-ink/20 mb-6 tracking-widest">{s.n}</div>
              <div className="w-8 h-px bg-rust mb-6" />
              <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>{s.t}</h3>
              <p className="font-sans text-xs text-ink/50 leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── HOME AGENT ── */}
      <section className="px-6 md:px-10 py-24 bg-mist border-t border-ink/8">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 font-mono text-[8px] tracking-widest uppercase bg-rust text-cream px-3 py-1.5 mb-6">
              ★ Available for Acquisition
            </div>
            <span className="font-mono text-[9px] tracking-[0.3em] text-ink/30 uppercase block mb-3">Digital Product</span>
            <h2 className="font-serif text-4xl md:text-6xl font-semibold mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Home<br />Agent<span className="text-rust">.</span>
            </h2>
            <p className="font-sans text-sm text-ink/60 leading-relaxed mb-8 max-w-sm">
              A fully-designed personal real estate portfolio platform. Listings, proforma calculator, lead capture — built and ready. No development needed.
            </p>
            <div className="space-y-2 mb-10">
              {['Responsive & mobile-first', 'Proforma calculator included', 'Lead capture forms', 'White-label ready'].map(f => (
                <div key={f} className="flex items-center gap-3 font-mono text-[9px] text-ink/50 tracking-wider">
                  <span className="text-rust">—</span> {f}
                </div>
              ))}
            </div>
            <a href="mailto:info@truelovecreative.es?subject=Home Agent Acquisition"
              className="inline-flex items-center gap-3 font-mono text-[10px] tracking-widest uppercase border border-ink px-6 py-3 hover:bg-ink hover:text-cream transition-all duration-300">
              Acquire this project →
            </a>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-96">
            <Image src="/img/portfolios/homeagent.png" alt="Home Agent" fill className="object-contain object-left" />
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="px-6 md:px-10 py-24 border-t border-ink/8">
        <div className="grid md:grid-cols-2 gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-[9px] tracking-[0.3em] text-ink/30 uppercase block mb-6">06 — About</span>
            <h2 className="font-serif text-5xl md:text-7xl font-semibold leading-[0.88] mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Design with<br /><em className="text-rust">conviction.</em>
            </h2>
            <div className="space-y-4 font-sans text-sm text-ink/60 leading-relaxed max-w-md">
              <p>True Love Creative is a web and graphic design studio founded in 2015. We work with brands that care about how they look and how they make people feel.</p>
              <p>Based in Dubai — working globally. Artists, startups, clinics, agencies. We've helped all of them build digital presences that people remember.</p>
              <p className="italic text-ink/80">We don't do average. We do work we're proud to sign.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[['Founded', '2015'],['Based in', 'Dubai, UAE'],['Speciality', 'Web · Graphic · App'],['Languages', 'ES · EN · AR'],['Contact', 'info@truelovecreative.es']].map(([l, v]) => (
              <div key={l} className="flex justify-between items-center py-4 border-b border-ink/8 last:border-0">
                <span className="font-mono text-[9px] tracking-widest uppercase text-ink/30">{l}</span>
                <span className="font-serif text-lg font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{v}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="bg-ink text-cream px-6 md:px-10 py-32 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-[9px] tracking-[0.3em] text-cream/20 uppercase block mb-10">07 — Start a Project</span>

          <h2 className="font-serif font-semibold leading-[0.85] mb-14 select-none"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(4rem, 14vw, 14rem)' }}>
            Let's make<br />
            <em className="text-rust">something</em><br />
            great<span className="text-rust">.</span>
          </h2>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div className="space-y-2">
              <a href="mailto:info@truelovecreative.es"
                className="block font-mono text-sm md:text-base text-cream/60 hover:text-rust transition-colors tracking-wide">
                info@truelovecreative.es ↗
              </a>
              <a href="tel:+971585324519"
                className="block font-mono text-sm text-cream/30 hover:text-cream/60 transition-colors tracking-wide">
                +971 58 532 4519
              </a>
              <p className="font-mono text-[10px] text-cream/20 tracking-widest uppercase pt-2">Dubai, UAE</p>
            </div>
            <a href="mailto:info@truelovecreative.es"
              className="font-mono text-[10px] tracking-widest uppercase border border-cream/20 px-8 py-4 hover:bg-cream hover:text-ink transition-all duration-300 flex-shrink-0">
              Start a project →
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-6 md:px-10 py-6 bg-ink border-t border-cream/5 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="font-serif text-sm text-cream/50" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          True Love Creative
        </span>
        <span className="font-mono text-[9px] text-cream/20 tracking-widest uppercase">
          © 2015–2026 · truelovecreative.es
        </span>
        <span className="font-mono text-[9px] text-cream/20 tracking-widest uppercase">
          Est. Dubai, UAE
        </span>
      </footer>

    </div>
  )
}
