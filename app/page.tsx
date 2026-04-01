'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const S = {
  cream: '#F0EAE0',
  ink: '#0A0A0A',
  rust: '#C23B18',
  mist: '#E4DDD4',
}

const projects = [
  { id: '01', client: 'Kiko Navarro', type: 'Web Design', year: '2024', img: '/img/portfolios/kikonavarro.jpg', desc: 'Legendary DJ & Producer.' },
  { id: '02', client: 'Jessica Morari', type: 'Branding & Web', year: '2023', img: '/img/portfolios/jesslnk.webp', desc: 'Coaching and wellness platform.' },
  { id: '03', client: 'Javi Beat', type: 'Identity', year: '2024', img: '/img/portfolios/javibeat.jpg', desc: 'Personal brand & DJ identity.' },
  { id: '04', client: 'Estrela Photo', type: 'Portfolio', year: '2023', img: '/img/portfolios/estrela.jpg', desc: 'Photography studio portfolio.' },
  { id: '05', client: 'Manuel KevSax', type: 'Web Design', year: '2024', img: '/img/portfolios/manusax.webp', desc: 'Luxury saxophonist booking platform.' },
  { id: '06', client: 'Sergio Trumpet', type: 'Portfolio', year: '2024', img: '/img/portfolios/sergio.jpg', desc: 'Professional trumpet player.' },
  { id: '07', client: 'Julio Cuba', type: 'Identity', year: '2024', img: '/img/portfolios/julio.webp', desc: 'Violinist performance portfolio.' },
]

export default function Home() {
  const [hov, setHov] = useState<number | null>(null)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('work')

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id || 'work') })
    }, { threshold: 0.3 })
    document.querySelectorAll('section[id]').forEach(el => obs.observe(el))

    return () => { window.removeEventListener('scroll', onScroll); obs.disconnect() }
  }, [])

  const navItems = [
    { label: 'Work', id: 'work' },
    { label: 'Graphic', id: 'graphic' },
    { label: 'App', id: 'app' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: S.cream, color: S.ink }}>

      {/* ── SIDEBAR ── */}
      <aside style={{
        position: 'fixed', top: 0, left: 0, bottom: 0,
        width: '72px',
        borderRight: `1px solid rgba(10,10,10,0.1)`,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'space-between',
        padding: '32px 0',
        zIndex: 100,
        background: S.cream,
      }}>
        {/* Studio name — vertical */}
        <a href="#" style={{ textDecoration: 'none' }}>
          <div style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '9px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: S.ink,
            lineHeight: 1,
          }}>
            True Love Creative
          </div>
        </a>

        {/* Nav — vertical */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '28px', alignItems: 'center' }}>
          {navItems.map(n => (
            <a key={n.id} href={`#${n.id}`}
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                transform: 'rotate(180deg)',
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '8px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: activeSection === n.id ? S.rust : 'rgba(10,10,10,0.3)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = S.rust)}
              onMouseLeave={e => (e.currentTarget.style.color = activeSection === n.id ? S.rust : 'rgba(10,10,10,0.3)')}
            >{n.label}</a>
          ))}
        </nav>

        {/* Bottom — year */}
        <div style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '8px',
          color: 'rgba(10,10,10,0.2)',
          letterSpacing: '0.15em',
        }}>2026</div>
      </aside>

      {/* ── MAIN ── */}
      <main style={{ marginLeft: '72px', flex: 1, overflow: 'hidden' }}>

        {/* ── HERO ── */}
        <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 60px 60px', position: 'relative', overflow: 'hidden' }}>

          {/* Ghost letters behind */}
          <div style={{
            position: 'absolute',
            top: '50%', left: '-2%',
            transform: 'translateY(-50%)',
            fontFamily: 'var(--font-serif), Georgia, serif',
            fontSize: 'clamp(180px, 30vw, 400px)',
            fontWeight: 700,
            color: 'rgba(10,10,10,0.04)',
            lineHeight: 1,
            pointerEvents: 'none',
            userSelect: 'none',
            whiteSpace: 'nowrap',
          }}>TLC</div>

          {/* Top-right tag */}
          <div style={{ position: 'absolute', top: '36px', right: '60px', textAlign: 'right' }}>
            <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(10,10,10,0.3)', textTransform: 'uppercase' }}>Est. 2015 · Dubai</div>
          </div>

          {/* Main type */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '10px', letterSpacing: '0.35em', color: S.rust, textTransform: 'uppercase', marginBottom: '20px' }}>
              — Web & Graphic Design Studio
            </div>

            <h1 style={{
              fontFamily: 'var(--font-serif), Georgia, serif',
              fontSize: 'clamp(5rem, 16vw, 18rem)',
              fontWeight: 700,
              lineHeight: 0.82,
              letterSpacing: '-0.02em',
            }}>
              <span style={{ display: 'block' }}>TRUE</span>
              <span style={{ display: 'block', color: S.rust, fontStyle: 'italic', fontWeight: 400 }}>LOVE</span>
              <span style={{ display: 'block' }}>CREATIVE</span>
            </h1>

            <div style={{ marginTop: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: `1px solid rgba(10,10,10,0.12)`, paddingTop: '24px' }}>
              <p style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif', fontSize: '13px', color: 'rgba(10,10,10,0.5)', maxWidth: '300px', lineHeight: 1.8 }}>
                High-end digital experiences.<br />
                Minimalist design, premium execution.<br />
                <em>From Dubai to the world.</em>
              </p>
              <a href="#work" style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase',
                color: S.ink, textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: '12px',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = S.rust)}
                onMouseLeave={e => (e.currentTarget.style.color = S.ink)}
              >
                Selected Works <span style={{ fontSize: '20px' }}>↓</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── WORK ── */}
        <section id="work">
          {/* Section header */}
          <div style={{ padding: '80px 60px 0', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderTop: `1px solid rgba(10,10,10,0.08)` }}>
            <div style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 'clamp(3rem, 6vw, 7rem)', fontWeight: 700, lineHeight: 1 }}>
              Selected<br /><em style={{ color: S.rust, fontWeight: 400 }}>Works<span style={{ color: S.ink }}>.</span></em>
            </div>
            <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '9px', color: 'rgba(10,10,10,0.2)', letterSpacing: '0.2em' }}>07 projects</div>
          </div>

          {/* Project list */}
          <div style={{ marginTop: '48px' }}>
            {projects.map((p, i) => (
              <div key={p.id}
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr auto',
                  alignItems: 'center',
                  gap: '32px',
                  padding: '24px 60px',
                  borderTop: `1px solid rgba(10,10,10,${hov === i ? '0' : '0.08'})`,
                  background: hov === i ? S.ink : 'transparent',
                  transition: 'background 0.2s ease',
                  cursor: 'crosshair',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Number */}
                <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '10px', color: hov === i ? 'rgba(240,234,224,0.2)' : 'rgba(10,10,10,0.2)', letterSpacing: '0.1em' }}>{p.id}</span>

                {/* Client + type */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                  {/* Thumbnail — appears on hover */}
                  <div style={{
                    width: hov === i ? '72px' : '0px',
                    height: '52px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    transition: 'width 0.3s ease',
                    position: 'relative',
                  }}>
                    <Image src={p.img} alt={p.client} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-serif), Georgia, serif',
                      fontSize: 'clamp(1.4rem, 3vw, 3rem)',
                      fontWeight: 600,
                      color: hov === i ? S.cream : S.ink,
                      lineHeight: 1.1,
                      transition: 'color 0.2s',
                    }}>{p.client}</div>
                    <div style={{
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase',
                      color: hov === i ? 'rgba(240,234,224,0.35)' : 'rgba(10,10,10,0.3)',
                      marginTop: '4px',
                      transition: 'color 0.2s',
                    }}>{p.type} · {p.year}</div>
                  </div>
                </div>

                {/* Arrow */}
                <span style={{
                  fontFamily: 'var(--font-sans), system-ui, sans-serif',
                  fontSize: '20px',
                  color: hov === i ? S.rust : 'rgba(10,10,10,0.15)',
                  transform: hov === i ? 'translateX(4px)' : 'none',
                  transition: 'all 0.2s ease',
                }}>→</span>
              </div>
            ))}
            <div style={{ height: '1px', background: 'rgba(10,10,10,0.08)', margin: '0 60px' }} />
          </div>
        </section>

        {/* ── STATEMENT ── */}
        <section style={{ padding: '120px 60px', background: S.ink, overflow: 'hidden' }}>
          <div style={{
            fontFamily: 'var(--font-serif), Georgia, serif',
            fontSize: 'clamp(3rem, 8vw, 10rem)',
            fontWeight: 700,
            lineHeight: 0.88,
            color: S.cream,
          }}>
            <div>We craft</div>
            <div style={{ color: S.rust, fontStyle: 'italic', fontWeight: 400 }}>high-impact</div>
            <div>digital</div>
            <div>experiences<span style={{ color: S.rust }}>.</span></div>
          </div>
          <div style={{ marginTop: '64px', display: 'flex', justifyContent: 'flex-end' }}>
            <p style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif', fontSize: '13px', color: 'rgba(240,234,224,0.45)', maxWidth: '320px', lineHeight: 1.9 }}>
              Every pixel has a purpose. Every decision is intentional. We don't make pretty things — we make things that work beautifully.
            </p>
          </div>
        </section>

        {/* ── GRAPHIC DESIGN ── */}
        <section id="graphic" style={{ padding: '120px 60px', borderTop: `1px solid rgba(10,10,10,0.08)` }}>
          <div style={{ marginBottom: '64px' }}>
            <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(10,10,10,0.3)', textTransform: 'uppercase', marginBottom: '12px' }}>Graphic Design</div>
            <div style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 'clamp(3rem, 6vw, 7rem)', fontWeight: 700, lineHeight: 1 }}>
              Print &<br /><em style={{ color: S.rust, fontWeight: 400 }}>Identity</em>
            </div>
          </div>

          {/* Large featured items */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2px', background: 'rgba(10,10,10,0.06)' }}>
            {[
              { title: 'MAMA CALLING', sub: 'Buika × Kiko Navarro', type: 'Vinyl Cover' },
              { title: 'EL SILENCIO', sub: 'Buika × Kiko Navarro', type: 'Vinyl Cover' },
              { title: 'VARADERO', sub: 'Event Series · 2023', type: 'Flyer Design' },
            ].map((g, i) => (
              <div key={g.title}
                style={{
                  background: i === 0 ? S.ink : S.mist,
                  padding: i === 0 ? '64px' : '48px',
                  gridColumn: i === 0 ? '1 / 2' : 'auto',
                  transition: 'background 0.3s',
                  cursor: 'crosshair',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = i === 0 ? '#1a1a1a' : S.ink)}
                onMouseLeave={e => (e.currentTarget.style.background = i === 0 ? S.ink : S.mist)}
              >
                <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '8px', letterSpacing: '0.25em', textTransform: 'uppercase', color: i === 0 ? 'rgba(240,234,224,0.3)' : 'rgba(10,10,10,0.3)', marginBottom: '32px' }}>{g.type}</div>
                <div style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: i === 0 ? 'clamp(2.5rem, 5vw, 6rem)' : 'clamp(1.8rem, 3vw, 3.5rem)', fontWeight: 700, lineHeight: 0.9, color: i === 0 ? S.cream : S.ink, marginBottom: '16px' }}>{g.title}</div>
                <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '10px', color: i === 0 ? 'rgba(240,234,224,0.4)' : 'rgba(10,10,10,0.4)', letterSpacing: '0.1em' }}>{g.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── NIBANGO ── */}
        <section id="app" style={{ background: S.ink, color: S.cream, padding: '120px 60px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(240,234,224,0.2)', textTransform: 'uppercase', marginBottom: '24px' }}>App Development</div>
              <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '9px', letterSpacing: '0.2em', color: S.rust, textTransform: 'uppercase', marginBottom: '20px' }}>Live · iOS · Android · Web</div>
              <h2 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 'clamp(5rem, 10vw, 12rem)', fontWeight: 700, lineHeight: 0.88, color: S.cream, marginBottom: '32px' }}>
                nib<em style={{ color: S.rust }}>an</em>go<span style={{ color: S.rust }}>.</span>
              </h2>
              <p style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif', fontSize: '13px', color: 'rgba(240,234,224,0.45)', lineHeight: 1.9, maxWidth: '340px', marginBottom: '48px' }}>
                The marketplace that actually works. Buy. Sell. Bid. Donate. 6 sections, 4 pricing models, real-time chat, zero commissions.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', borderTop: '1px solid rgba(240,234,224,0.08)', paddingTop: '32px' }}>
                {[['6','Categories'],['4','Pricing'],['3','Platforms'],['0%','Commission']].map(([n,l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: '2.5rem', fontWeight: 700, color: S.cream, lineHeight: 1 }}>{n}</div>
                    <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '8px', color: 'rgba(240,234,224,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '8px', lineHeight: 1.4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative', height: '480px' }}>
              <Image src="/img/portfolios/nibango-mockup-2.png" alt="Nibango" fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </section>

        {/* ── HOME AGENT ── */}
        <section style={{ padding: '120px 60px', background: S.mist, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-block', background: S.rust, padding: '6px 16px', marginBottom: '32px' }}>
              <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '8px', letterSpacing: '0.25em', textTransform: 'uppercase', color: S.cream }}>★ Available for Acquisition</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 'clamp(3rem, 6vw, 8rem)', fontWeight: 700, lineHeight: 0.88, marginBottom: '32px' }}>
              Home<br />Agent<span style={{ color: S.rust }}>.</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif', fontSize: '13px', color: 'rgba(10,10,10,0.55)', lineHeight: 1.9, maxWidth: '360px', marginBottom: '40px' }}>
              A fully-designed real estate portfolio platform. Listings, proforma calculator, lead capture — built and ready. No development needed.
            </p>
            {['Responsive & mobile-first','Proforma calculator included','Lead capture forms','White-label ready'].map(f => (
              <div key={f} style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '9px', color: 'rgba(10,10,10,0.45)', letterSpacing: '0.1em', marginBottom: '10px', display: 'flex', gap: '12px' }}>
                <span style={{ color: S.rust }}>—</span>{f}
              </div>
            ))}
            <a href="mailto:info@truelovecreative.es?subject=Home Agent"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginTop: '40px', fontFamily: 'var(--font-mono), monospace', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', border: `1px solid ${S.ink}`, padding: '16px 28px', textDecoration: 'none', color: S.ink, transition: 'background 0.2s, color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = S.ink; e.currentTarget.style.color = S.cream }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = S.ink }}
            >Acquire this project →</a>
          </div>
          <div style={{ position: 'relative', height: '440px' }}>
            <Image src="/img/portfolios/homeagent.png" alt="Home Agent" fill style={{ objectFit: 'contain', objectPosition: 'center' }} />
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" style={{ padding: '120px 60px', borderTop: `1px solid rgba(10,10,10,0.08)` }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '120px' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(10,10,10,0.3)', textTransform: 'uppercase', marginBottom: '32px' }}>About the Studio</div>
              <h2 style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 6rem)', fontWeight: 700, lineHeight: 0.9, marginBottom: '48px' }}>
                Design with<br /><em style={{ color: S.rust, fontWeight: 400 }}>conviction.</em>
              </h2>
              <div style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif', fontSize: '14px', color: 'rgba(10,10,10,0.6)', lineHeight: 1.9 }}>
                <p style={{ marginBottom: '20px' }}>True Love Creative is a web and graphic design studio founded in 2015. We work with brands that care about how they look and how they make people feel.</p>
                <p style={{ marginBottom: '20px' }}>Based in Dubai — working globally. Artists, startups, clinics, agencies. We've helped all of them build digital presences that people remember.</p>
                <p style={{ fontStyle: 'italic', color: S.ink }}>We don't do average. We do work we're proud to sign.</p>
              </div>
            </div>
            <div style={{ paddingTop: '80px' }}>
              {[['Founded','2015'],['Base','Dubai, UAE'],['Speciality','Web · Graphic · App'],['Languages','ES · EN · AR'],['Email','info@truelovecreative.es'],['Phone','+971 58 532 4519']].map(([l,v], i) => (
                <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0', borderBottom: `1px solid rgba(10,10,10,0.08)` }}>
                  <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(10,10,10,0.3)' }}>{l}</span>
                  <span style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: '1.1rem', fontWeight: 600, textAlign: 'right' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" style={{ background: S.ink, color: S.cream, padding: '120px 60px', borderTop: `1px solid rgba(240,234,224,0.06)` }}>
          <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(240,234,224,0.2)', textTransform: 'uppercase', marginBottom: '64px' }}>
            Start a Project
          </div>
          <h2 style={{
            fontFamily: 'var(--font-serif), Georgia, serif',
            fontSize: 'clamp(4rem, 13vw, 15rem)',
            fontWeight: 700,
            lineHeight: 0.83,
            color: S.cream,
            marginBottom: '80px',
            letterSpacing: '-0.02em',
          }}>
            Let's<br />make<br /><em style={{ color: S.rust, fontWeight: 400 }}>something</em><br />great<span style={{ color: S.rust }}>.</span>
          </h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(240,234,224,0.08)', paddingTop: '48px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="mailto:info@truelovecreative.es"
                style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '14px', color: 'rgba(240,234,224,0.6)', textDecoration: 'none', letterSpacing: '0.05em', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = S.rust)}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,234,224,0.6)')}
              >info@truelovecreative.es ↗</a>
              <a href="tel:+971585324519"
                style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '12px', color: 'rgba(240,234,224,0.3)', textDecoration: 'none' }}>
                +971 58 532 4519
              </a>
            </div>
            <a href="mailto:info@truelovecreative.es"
              style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', border: '1px solid rgba(240,234,224,0.2)', padding: '18px 36px', textDecoration: 'none', color: S.cream, transition: 'all 0.2s', flexShrink: 0 }}
              onMouseEnter={e => { e.currentTarget.style.background = S.cream; e.currentTarget.style.color = S.ink }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = S.cream }}
            >Start a project →</a>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ background: S.ink, borderTop: '1px solid rgba(240,234,224,0.06)', padding: '24px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-serif), Georgia, serif', fontSize: '13px', color: 'rgba(240,234,224,0.4)', fontWeight: 600 }}>True Love Creative</span>
          <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '9px', color: 'rgba(240,234,224,0.2)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>© 2015–2026</span>
          <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '9px', color: 'rgba(240,234,224,0.2)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Dubai, UAE</span>
        </footer>

      </main>
    </div>
  )
}
