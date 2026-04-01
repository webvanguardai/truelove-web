'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'

const works = [
  { num: '001', title: 'Mallorca Padel Camp', type: 'Web · Identity', year: '2026', tag: 'SPORT' },
  { num: '002', title: 'BeatLabs FZE', type: 'Web · System Design', year: '2026', tag: 'TECH' },
  { num: '003', title: 'Estrela Photo', type: 'Web · Portfolio', year: '2025', tag: 'PHOTO' },
  { num: '004', title: 'Noor Clinic', type: 'Web · Brand', year: '2026', tag: 'CLINIC' },
  { num: '005', title: 'Levant & Co.', type: 'Web · Editorial', year: '2026', tag: 'F&B' },
  { num: '006', title: 'Web Vanguard', type: 'Web · Identity', year: '2026', tag: 'AGENCY' },
]

const services = [
  { letter: 'W', title: 'Web Design', desc: 'Bespoke websites that convert. Built with obsessive attention to detail and performance.' },
  { letter: 'G', title: 'Graphic Design', desc: 'Visual identity systems. Logos, print, packaging — everything that makes a brand recognisable.' },
  { letter: 'B', title: 'Brand Identity', desc: 'From naming to launch. We build brands that stand for something beyond aesthetics.' },
  { letter: 'D', title: 'Creative Direction', desc: 'Art direction, campaign concepting, and strategic vision for projects that demand more.' },
]

const tickerItems = ['WEB DESIGN', '★', 'GRAPHIC DESIGN', '★', 'BRAND IDENTITY', '★', 'CREATIVE DIRECTION', '★', 'EST. 2015', '★', 'DUBAI', '★', 'TRUELOVECREATIVE.ES', '★']

export default function Home() {
  const [cursor, setCursor] = useState({ x: -100, y: -100 })
  const [cursorExpand, setCursorExpand] = useState(false)
  const [hoveredWork, setHoveredWork] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -120])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])
  const titleScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.85])

  useEffect(() => {
    const move = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div ref={containerRef} className="relative">
      {/* Custom cursor */}
      <div
        className={`cursor ${cursorExpand ? 'expand' : ''}`}
        style={{ left: cursor.x, top: cursor.y }}
      />

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-rust origin-left z-50"
        style={{ scaleX }}
      />

      {/* ── NAV ─────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 md:px-10 h-14 flex items-center justify-between mix-blend-multiply">
        <a href="#" className="font-serif font-bold text-ink text-sm tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
          TLC<span className="text-rust">★</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase" style={{ fontFamily: 'var(--font-mono)' }}>
          {['Work', 'Services', 'About', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="opacity-60 hover:opacity-100 transition-opacity"
              onMouseEnter={() => setCursorExpand(true)}
              onMouseLeave={() => setCursorExpand(false)}
            >{l}</a>
          ))}
        </div>
        <button
          className="md:hidden font-mono text-xs tracking-widest"
          style={{ fontFamily: 'var(--font-mono)' }}
          onClick={() => setMenuOpen(true)}
        >MENU</button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-5 right-6 text-cream font-mono text-xs tracking-widest"
              style={{ fontFamily: 'var(--font-mono)' }}
              onClick={() => setMenuOpen(false)}
            >CLOSE</button>
            {['Work', 'Services', 'About', 'Contact'].map((l, i) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-cream text-5xl font-serif font-black py-3 hover:text-rust transition-colors"
                style={{ fontFamily: 'var(--font-serif)' }}
              >{l}</motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-screen flex flex-col justify-end pb-16 px-6 md:px-10 overflow-hidden"
      >
        {/* Background number */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif font-black leading-none select-none pointer-events-none"
          style={{ color: 'rgba(10,10,10,0.04)', fontFamily: 'var(--font-serif)' }}
        >
          TLC
        </div>

        {/* Top-right badge */}
        <div className="absolute top-16 right-6 md:right-10 text-right">
          <div className="font-mono text-[10px] tracking-widest opacity-40 mb-1" style={{ fontFamily: 'var(--font-mono)' }}>EST.</div>
          <div className="font-serif text-5xl font-black leading-none" style={{ fontFamily: 'var(--font-serif)' }}>2015</div>
          <div className="font-mono text-[10px] tracking-widest opacity-40 mt-1" style={{ fontFamily: 'var(--font-mono)' }}>DUBAI</div>
        </div>

        {/* Main title */}
        <motion.div style={{ scale: titleScale }} className="origin-bottom-left">
          <div className="font-mono text-[11px] tracking-[0.25em] opacity-50 mb-6 uppercase" style={{ fontFamily: 'var(--font-mono)' }}>
            — Web & Graphic Design Studio
          </div>
          <h1
            className="font-serif font-black leading-[0.88] mb-8 select-none"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(4rem, 14vw, 16rem)',
            }}
          >
            TRUE<br />
            <span className="italic font-normal text-rust">LOVE</span><br />
            <span className="relative">
              CREATIVE
              <span className="absolute -right-[0.08em] top-[0.05em] text-[0.18em] font-mono not-italic font-normal opacity-40 tracking-widest align-top" style={{ fontFamily: 'var(--font-mono)' }}>™</span>
            </span>
          </h1>

          <div className="flex items-end gap-10 md:gap-16">
            <p className="font-sans text-sm md:text-base opacity-60 max-w-xs leading-relaxed">
              High-end digital experiences.<br />
              Minimalist design, premium execution.<br />
              <em>From Dubai to the world.</em>
            </p>
            <a
              href="#work"
              className="font-mono text-xs tracking-widest uppercase border border-ink px-6 py-3 hover:bg-ink hover:text-cream transition-all duration-300 flex-shrink-0"
              style={{ fontFamily: 'var(--font-mono)' }}
              onMouseEnter={() => setCursorExpand(true)}
              onMouseLeave={() => setCursorExpand(false)}
            >
              See Work ↓
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* ── TICKER ──────────────────────────────────────────────── */}
      <div className="overflow-hidden border-y border-ink py-3 bg-ink text-cream">
        <div className="marquee-inner">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="font-mono text-xs tracking-[0.2em] px-4 opacity-80" style={{ fontFamily: 'var(--font-mono)' }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── WORK ────────────────────────────────────────────────── */}
      <section id="work" className="px-6 md:px-10 py-24">
        <div className="flex items-baseline gap-6 mb-16">
          <span className="font-mono text-[11px] tracking-[0.25em] opacity-40 uppercase" style={{ fontFamily: 'var(--font-mono)' }}>02</span>
          <h2 className="font-serif text-5xl md:text-7xl font-black" style={{ fontFamily: 'var(--font-serif)' }}>Selected<br /><em className="font-normal text-rust">Works</em></h2>
        </div>

        <div className="space-y-0">
          {works.map((work, i) => (
            <motion.div
              key={work.num}
              onMouseEnter={() => { setHoveredWork(i); setCursorExpand(true) }}
              onMouseLeave={() => { setHoveredWork(null); setCursorExpand(false) }}
              className={`group border-t border-ink/20 last:border-b cursor-none transition-colors duration-200 ${hoveredWork === i ? 'bg-ink text-cream' : ''}`}
            >
              <div className="flex items-center gap-4 md:gap-8 py-5 md:py-6 px-2">
                <span className="font-mono text-[10px] opacity-30 w-8 flex-shrink-0" style={{ fontFamily: 'var(--font-mono)' }}>{work.num}</span>
                <div className="flex-1 flex items-baseline gap-4 min-w-0">
                  <h3 className="font-serif text-xl md:text-3xl font-bold truncate" style={{ fontFamily: 'var(--font-serif)' }}>{work.title}</h3>
                  <span className="font-mono text-[10px] tracking-wider opacity-40 hidden md:block flex-shrink-0" style={{ fontFamily: 'var(--font-mono)' }}>{work.type}</span>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className={`font-mono text-[9px] tracking-widest px-2 py-1 border ${hoveredWork === i ? 'border-cream/30 text-cream/60' : 'border-ink/20 opacity-40'}`} style={{ fontFamily: 'var(--font-mono)' }}>
                    {work.tag}
                  </span>
                  <span className="font-mono text-xs opacity-30 hidden md:block" style={{ fontFamily: 'var(--font-mono)' }}>{work.year}</span>
                  <span className={`text-lg transition-transform duration-300 ${hoveredWork === i ? 'translate-x-1' : ''}`}>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── STATEMENT ───────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-24 bg-ink text-cream overflow-hidden">
        <div className="relative">
          <div
            className="font-serif font-black leading-[0.85] select-none"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3rem, 9vw, 10rem)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              We craft
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              viewport={{ once: true }}
              className="italic text-rust"
            >
              high-impact
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              viewport={{ once: true }}
            >
              digital
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              viewport={{ once: true }}
            >
              experiences<span className="text-rust">.</span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 font-sans text-cream/50 text-base md:text-lg max-w-md leading-relaxed"
          >
            Every pixel has a purpose. Every decision is intentional.
            We don't make pretty things — we make things that work
            beautifully.
          </motion.p>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────── */}
      <section id="services" className="px-6 md:px-10 py-24">
        <div className="flex items-baseline gap-6 mb-16">
          <span className="font-mono text-[11px] tracking-[0.25em] opacity-40 uppercase" style={{ fontFamily: 'var(--font-mono)' }}>03</span>
          <h2 className="font-serif text-5xl md:text-7xl font-black" style={{ fontFamily: 'var(--font-serif)' }}>What we<br /><em className="font-normal text-rust">do</em></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-ink/10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setCursorExpand(true)}
              onMouseLeave={() => setCursorExpand(false)}
              className="bg-cream p-8 md:p-10 group hover:bg-ink hover:text-cream transition-colors duration-300"
            >
              <div
                className="font-serif font-black text-[6rem] leading-none opacity-10 group-hover:opacity-20 transition-opacity mb-4 select-none"
                style={{ fontFamily: 'var(--font-serif)' }}
              >{s.letter}</div>
              <h3 className="font-serif text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>{s.title}</h3>
              <p className="font-sans text-sm leading-relaxed opacity-60">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────── */}
      <section id="about" className="px-6 md:px-10 py-24 border-t border-ink/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-[11px] tracking-[0.25em] opacity-40 uppercase block mb-6" style={{ fontFamily: 'var(--font-mono)' }}>04 — About</span>
            <h2 className="font-serif text-4xl md:text-6xl font-black mb-8 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              Design with<br /><em className="text-rust font-normal">conviction.</em>
            </h2>
            <div className="space-y-4 font-sans text-sm md:text-base leading-relaxed opacity-70">
              <p>
                True Love Creative is a web and graphic design studio founded in 2015.
                We work with brands that care about how they look and how they make people feel.
              </p>
              <p>
                Based in Dubai — working globally. We've helped startups, restaurants, clinics,
                artists and agencies build digital presences that people remember.
              </p>
              <p>
                <em>We don't do average. We do work we're proud to sign.</em>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-0"
          >
            {[
              { label: 'Founded', value: '2015' },
              { label: 'Based in', value: 'Dubai, UAE' },
              { label: 'Projects delivered', value: '100+' },
              { label: 'Speciality', value: 'Web · Graphic · Brand' },
              { label: 'Languages', value: 'ES · EN · AR' },
            ].map((item, i) => (
              <div key={item.label} className="flex justify-between items-center py-4 border-b border-ink/10 last:border-0">
                <span className="font-mono text-xs tracking-widest opacity-40 uppercase" style={{ fontFamily: 'var(--font-mono)' }}>{item.label}</span>
                <span className="font-serif font-bold text-lg" style={{ fontFamily: 'var(--font-serif)' }}>{item.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────── */}
      <section id="contact" className="px-6 md:px-10 py-32 bg-ink text-cream overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="font-mono text-[11px] tracking-[0.3em] opacity-40 uppercase block mb-8" style={{ fontFamily: 'var(--font-mono)' }}>
            05 — Start a Project
          </span>
          <h2
            className="font-serif font-black leading-[0.88] mb-12 select-none"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3.5rem, 12vw, 13rem)',
            }}
          >
            Let's make<br />
            <em className="text-rust font-normal">something</em><br />
            great<span className="text-rust">.</span>
          </h2>

          <a
            href="mailto:hello@truelovecreative.es"
            className="font-mono text-sm tracking-widest uppercase border border-cream/30 px-8 py-4 hover:bg-cream hover:text-ink transition-all duration-300 inline-block"
            style={{ fontFamily: 'var(--font-mono)' }}
            onMouseEnter={() => setCursorExpand(true)}
            onMouseLeave={() => setCursorExpand(false)}
          >
            hello@truelovecreative.es →
          </a>
        </motion.div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="px-6 md:px-10 py-6 border-t border-ink flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="font-serif font-bold text-sm" style={{ fontFamily: 'var(--font-serif)' }}>
          True Love Creative<span className="text-rust">★</span>
        </span>
        <span className="font-mono text-[10px] tracking-widest opacity-40 uppercase" style={{ fontFamily: 'var(--font-mono)' }}>
          © 2015–2026 · truelovecreative.es · All rights reserved
        </span>
        <a
          href="https://instagram.com/truelovecreative"
          className="font-mono text-[10px] tracking-widest opacity-40 hover:opacity-100 uppercase transition-opacity"
          style={{ fontFamily: 'var(--font-mono)' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram ↗
        </a>
      </footer>
    </div>
  )
}
