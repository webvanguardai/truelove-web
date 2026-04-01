'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const projects = [
  { id: '001', client: 'Kiko Navarro', type: 'Web Design', year: '2024', tags: ['Web', 'Identity'], img: '/img/portfolios/kikonavarro.jpg' },
  { id: '002', client: 'Jessica Morari', type: 'Branding & Web', year: '2023', tags: ['Brand', 'Web'], img: '/img/portfolios/jesslnk.webp' },
  { id: '003', client: 'Javi Beat', type: 'Identity', year: '2024', tags: ['Identity'], img: '/img/portfolios/javibeat.jpg' },
  { id: '004', client: 'Estrela Photo', type: 'Portfolio', year: '2023', tags: ['Web', 'Photo'], img: '/img/portfolios/estrela.jpg' },
  { id: '005', client: 'Manuel KevSax', type: 'Web Design', year: '2024', tags: ['Web', 'Booking'], img: '/img/portfolios/manusax.webp' },
  { id: '006', client: 'Sergio Trumpet', type: 'Web Design', year: '2024', tags: ['Web', 'Portfolio'], img: '/img/portfolios/sergio.jpg' },
  { id: '007', client: 'Julio Cuba', type: 'Identity', year: '2024', tags: ['Identity', 'Web'], img: '/img/portfolios/julio.webp' },
]

const graphicWork = [
  { title: 'MAMA CALLING', sub: 'Buika × Kiko Navarro', type: 'Vinyl Cover' },
  { title: 'EL SILENCIO', sub: 'Buika × Kiko Navarro', type: 'Vinyl Cover' },
  { title: 'VARADERO', sub: 'Event Series', type: 'Flyer Design' },
]

const tickerText = ['SELECTED WORKS', '·', 'KIKO NAVARRO', '·', 'JESSICA MORARI', '·', 'JAVI BEAT', '·', 'ESTRELA PHOTO', '·', 'MANUEL KEVSAX', '·', 'JULIO CUBA', '·', 'NIBANGO', '·']

export default function Home() {
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll progress
    const onScroll = () => {
      const el = document.documentElement
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
      if (progressRef.current) progressRef.current.style.width = pct + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Fade up observer
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el))

    return () => { window.removeEventListener('scroll', onScroll); obs.disconnect() }
  }, [])

  return (
    <>
      {/* Progress bar */}
      <div id="progress-bar" ref={progressRef} />

      {/* ── NAV ── */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px', background: 'transparent',
      }}>
        <a href="#" className="mono" style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(17,17,17,0.6)', textDecoration: 'none' }}>
          TLC<span className="cursor-blink" style={{ color: '#B8390E' }}>_</span>
        </a>
        <nav style={{ display: 'flex', gap: '32px' }}>
          {['Work', 'Services', 'About', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="mono"
              style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.4)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#B8390E')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(17,17,17,0.4)')}
            >{l}</a>
          ))}
        </nav>
      </header>

      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {/* Left */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '100px 40px 48px', position: 'relative' }}>
          <span className="mono" style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(17,17,17,0.25)', textTransform: 'uppercase', position: 'absolute', top: '56px', left: '40px' }}>
            Est. 2015 · Dubai, UAE
          </span>

          <div className="mono" style={{ fontSize: '9px', letterSpacing: '0.3em', color: '#B8390E', textTransform: 'uppercase', marginBottom: '24px' }}>
            Web & Graphic Design Studio
          </div>

          <h1 className="serif" style={{ fontSize: 'clamp(5rem, 14vw, 16rem)', lineHeight: '0.84', fontWeight: 600 }}>
            <span style={{ display: 'block' }}>TRUE</span>
            <span style={{ display: 'block', fontStyle: 'italic', color: '#B8390E' }}>LOVE</span>
            <span style={{ display: 'block' }}>CRE<span style={{ color: '#B8390E' }}>.</span></span>
          </h1>

          <div style={{ marginTop: '32px', display: 'flex', alignItems: 'flex-end', gap: '32px' }}>
            <p style={{ fontSize: '12px', color: 'rgba(17,17,17,0.5)', maxWidth: '220px', lineHeight: 1.7, fontFamily: 'var(--font-sans)' }}>
              High-end digital experiences.<br />
              Minimalist design, premium execution.<br />
              <em>From Dubai to the world.</em>
            </p>
            <a href="#work" style={{
              flexShrink: 0, width: '44px', height: '44px',
              border: '1px solid rgba(17,17,17,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '18px', textDecoration: 'none', color: '#111',
              transition: 'background 0.2s, color 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#111'; e.currentTarget.style.color = '#F2EDE4' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#111' }}
            >↓</a>
          </div>
        </div>

        {/* Right — featured image */}
        <div style={{ position: 'relative', background: '#D9C9B0', overflow: 'hidden' }}>
          <Image src="/img/portfolios/kikonavarro.jpg" alt="Kiko Navarro" fill
            style={{ objectFit: 'cover', filter: 'grayscale(100%)', transition: 'filter 0.7s ease' }}
            onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0%)')}
            onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.filter = 'grayscale(100%)')}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(17,17,17,0.08)' }} />
          <div className="mono" style={{ position: 'absolute', bottom: '24px', left: '24px', fontSize: '9px', color: 'rgba(242,237,228,0.6)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Featured — Kiko Navarro / 2024
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div style={{ borderTop: '1px solid #111', borderBottom: '1px solid #111', padding: '12px 0', overflow: 'hidden', background: '#111' }}>
        <div className="ticker-inner">
          {[...tickerText, ...tickerText, ...tickerText].map((t, i) => (
            <span key={i} className="mono" style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(242,237,228,0.35)', padding: '0 20px', textTransform: 'uppercase' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── SELECTED WORKS ── */}
      <section id="work" style={{ padding: '80px 0' }}>
        <div style={{ padding: '0 40px', marginBottom: '48px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <div>
            <div className="mono" style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(17,17,17,0.3)', textTransform: 'uppercase', marginBottom: '8px' }}>02 — Selected Works</div>
            <h2 className="serif" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', fontWeight: 600 }}>
              Projects<span style={{ color: '#B8390E', fontStyle: 'italic' }}>.</span>
            </h2>
          </div>
          <span className="mono" style={{ fontSize: '9px', color: 'rgba(17,17,17,0.2)', letterSpacing: '0.2em' }}>({projects.length} works)</span>
        </div>

        <div style={{ borderTop: '1px solid rgba(17,17,17,0.08)' }}>
          {projects.map((p) => (
            <div key={p.id} className="work-row" style={{ padding: '0 40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '20px 0' }}>
                <span className="row-num mono" style={{ fontSize: '10px', width: '32px', flexShrink: 0, color: 'rgba(17,17,17,0.2)' }}>{p.id}</span>
                <div style={{ position: 'relative', width: '52px', height: '52px', flexShrink: 0, overflow: 'hidden' }}>
                  <Image src={p.img} alt={p.client} fill style={{ objectFit: 'cover', filter: 'grayscale(100%)' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="row-title serif" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2.2rem)', fontWeight: 600, color: '#111', lineHeight: 1.1 }}>{p.client}</div>
                  <div className="row-type mono" style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.3)', marginTop: '4px' }}>{p.type} · {p.year}</div>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                  {p.tags.map(t => (
                    <span key={t} className="row-tag mono" style={{ fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '4px 8px', border: '1px solid rgba(17,17,17,0.12)', color: 'rgba(17,17,17,0.3)' }}>{t}</span>
                  ))}
                </div>
                <span className="row-arrow" style={{ fontSize: '16px', color: 'rgba(17,17,17,0.2)', flexShrink: 0 }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GRAPHIC DESIGN ── */}
      <section style={{ padding: '80px 40px', borderTop: '1px solid rgba(17,17,17,0.08)' }}>
        <div style={{ marginBottom: '48px' }}>
          <div className="mono" style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(17,17,17,0.3)', textTransform: 'uppercase', marginBottom: '8px' }}>03 — Graphic</div>
          <h2 className="serif" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', fontWeight: 600 }}>
            Graphic<br /><em style={{ color: '#B8390E' }}>Design</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(17,17,17,0.08)' }}>
          {graphicWork.map((g) => (
            <div key={g.title} className="graphic-card" style={{ background: '#F2EDE4', padding: '48px 40px' }}>
              <div className="gc-type mono" style={{ fontSize: '8px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.3)', marginBottom: '16px' }}>{g.type}</div>
              <div className="gc-title serif" style={{ fontSize: 'clamp(1.8rem, 3vw, 3.5rem)', fontWeight: 600, color: '#111', lineHeight: 1 }}>{g.title}</div>
              <div className="gc-sub mono" style={{ fontSize: '9px', color: 'rgba(17,17,17,0.4)', marginTop: '8px', letterSpacing: '0.1em' }}>{g.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── NIBANGO ── */}
      <section style={{ padding: '80px 40px', background: '#111111', color: '#F2EDE4', borderTop: '1px solid rgba(242,237,228,0.05)' }}>
        <div style={{ maxWidth: '960px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <div className="mono" style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(242,237,228,0.2)', textTransform: 'uppercase', marginBottom: '24px' }}>04 — App Development</div>
            <div className="mono" style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#B8390E', textTransform: 'uppercase', marginBottom: '16px' }}>Live on iOS · Android · Web</div>
            <h2 className="serif" style={{ fontSize: 'clamp(4rem, 8vw, 9rem)', fontWeight: 600, lineHeight: 0.9, color: '#F2EDE4', marginBottom: '24px' }}>
              nibango<span style={{ color: '#B8390E' }}>.</span>
            </h2>
            <p style={{ fontSize: '13px', color: 'rgba(242,237,228,0.5)', lineHeight: 1.8, maxWidth: '340px', marginBottom: '32px', fontFamily: 'var(--font-sans)' }}>
              The marketplace that actually works. Buy. Sell. Bid. Donate. 6 sections, 4 pricing models, real-time chat, zero commissions.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
              {[['6','Categories'],['4','Pricing'],['3','Platforms'],['0%','Commission']].map(([n,l]) => (
                <div key={l}>
                  <div className="serif" style={{ fontSize: '2.2rem', fontWeight: 600, color: '#F2EDE4', lineHeight: 1 }}>{n}</div>
                  <div className="mono" style={{ fontSize: '8px', color: 'rgba(242,237,228,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '6px', lineHeight: 1.3 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative', height: '360px' }}>
            <Image src="/img/portfolios/nibango-mockup-1.png" alt="Nibango" fill style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: '80px 40px', borderTop: '1px solid rgba(17,17,17,0.08)' }}>
        <div style={{ marginBottom: '48px' }}>
          <div className="mono" style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(17,17,17,0.3)', textTransform: 'uppercase', marginBottom: '8px' }}>05 — Services</div>
          <h2 className="serif" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', fontWeight: 600 }}>
            What we<br /><em style={{ color: '#B8390E' }}>do</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '64px' }}>
          {[
            { n: '01', t: 'Web Design', d: 'Bespoke websites built with obsessive attention to detail. Performance, aesthetics, conversion.' },
            { n: '02', t: 'Graphic Design', d: 'Visual identity systems. Logos, print, packaging — everything that makes a brand recognisable.' },
            { n: '03', t: 'App Development', d: 'From concept to live app. iOS, Android, Web. We build things that work in the real world.' },
          ].map(s => (
            <div key={s.n} className="fade-up">
              <div className="mono" style={{ fontSize: '9px', color: 'rgba(17,17,17,0.2)', marginBottom: '24px', letterSpacing: '0.2em' }}>{s.n}</div>
              <span className="svc-rule" />
              <h3 className="serif" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)', fontWeight: 600, marginBottom: '16px' }}>{s.t}</h3>
              <p style={{ fontSize: '12px', color: 'rgba(17,17,17,0.5)', lineHeight: 1.8, fontFamily: 'var(--font-sans)' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOME AGENT ── */}
      <section style={{ padding: '80px 40px', background: '#E8E2D9', borderTop: '1px solid rgba(17,17,17,0.08)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
        <div className="fade-up">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#B8390E', color: '#F2EDE4', padding: '6px 14px', marginBottom: '24px' }}>
            <span className="mono" style={{ fontSize: '8px', letterSpacing: '0.25em', textTransform: 'uppercase' }}>★ Available for Acquisition</span>
          </div>
          <div className="mono" style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(17,17,17,0.3)', textTransform: 'uppercase', marginBottom: '8px' }}>Digital Product</div>
          <h2 className="serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 6rem)', fontWeight: 600, lineHeight: 0.9, marginBottom: '24px' }}>
            Home<br />Agent<span style={{ color: '#B8390E' }}>.</span>
          </h2>
          <p style={{ fontSize: '13px', color: 'rgba(17,17,17,0.6)', lineHeight: 1.8, maxWidth: '360px', marginBottom: '32px', fontFamily: 'var(--font-sans)' }}>
            A fully-designed personal real estate portfolio platform. Listings, proforma calculator, lead capture — built and ready.
          </p>
          {['Responsive & mobile-first', 'Proforma calculator included', 'Lead capture forms', 'White-label ready'].map(f => (
            <div key={f} className="mono" style={{ fontSize: '9px', color: 'rgba(17,17,17,0.5)', letterSpacing: '0.1em', marginBottom: '10px', display: 'flex', gap: '12px' }}>
              <span style={{ color: '#B8390E' }}>—</span> {f}
            </div>
          ))}
          <a href="mailto:info@truelovecreative.es?subject=Home Agent Acquisition"
            className="mono"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginTop: '32px', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', border: '1px solid #111', padding: '14px 24px', textDecoration: 'none', color: '#111', transition: 'background 0.2s, color 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#111'; e.currentTarget.style.color = '#F2EDE4' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#111' }}
          >Acquire this project →</a>
        </div>
        <div style={{ position: 'relative', height: '400px' }}>
          <Image src="/img/portfolios/homeagent.png" alt="Home Agent" fill style={{ objectFit: 'contain', objectPosition: 'left' }} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: '80px 40px', borderTop: '1px solid rgba(17,17,17,0.08)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'end' }}>
        <div className="fade-up">
          <div className="mono" style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(17,17,17,0.3)', textTransform: 'uppercase', marginBottom: '24px' }}>06 — About</div>
          <h2 className="serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 6rem)', fontWeight: 600, lineHeight: 0.9, marginBottom: '32px' }}>
            Design with<br /><em style={{ color: '#B8390E' }}>conviction.</em>
          </h2>
          <div style={{ fontSize: '13px', color: 'rgba(17,17,17,0.6)', lineHeight: 1.9, maxWidth: '400px', fontFamily: 'var(--font-sans)' }}>
            <p style={{ marginBottom: '16px' }}>True Love Creative is a web and graphic design studio founded in 2015. We work with brands that care about how they look and how they make people feel.</p>
            <p style={{ marginBottom: '16px' }}>Based in Dubai — working globally. Artists, startups, clinics, agencies. We've helped all of them build digital presences that people remember.</p>
            <p style={{ fontStyle: 'italic', color: 'rgba(17,17,17,0.8)' }}>We don't do average. We do work we're proud to sign.</p>
          </div>
        </div>
        <div className="fade-up">
          {[['Founded','2015'],['Based in','Dubai, UAE'],['Speciality','Web · Graphic · App'],['Languages','ES · EN · AR'],['Contact','info@truelovecreative.es']].map(([l,v]) => (
            <div key={l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid rgba(17,17,17,0.08)' }}>
              <span className="mono" style={{ fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(17,17,17,0.3)' }}>{l}</span>
              <span className="serif" style={{ fontSize: '1.2rem', fontWeight: 600 }}>{v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ background: '#111111', color: '#F2EDE4', padding: '100px 40px', overflow: 'hidden' }}>
        <div className="mono" style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(242,237,228,0.2)', textTransform: 'uppercase', marginBottom: '48px' }}>07 — Start a Project</div>
        <h2 className="serif" style={{ fontSize: 'clamp(4rem, 13vw, 14rem)', fontWeight: 600, lineHeight: 0.85, marginBottom: '64px', color: '#F2EDE4' }}>
          Let's make<br />
          <em style={{ color: '#B8390E' }}>something</em><br />
          great<span style={{ color: '#B8390E' }}>.</span>
        </h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '32px' }}>
          <div>
            <a href="mailto:info@truelovecreative.es" className="mono"
              style={{ display: 'block', fontSize: '14px', color: 'rgba(242,237,228,0.6)', textDecoration: 'none', letterSpacing: '0.05em', marginBottom: '8px', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#B8390E')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(242,237,228,0.6)')}
            >info@truelovecreative.es ↗</a>
            <a href="tel:+971585324519" className="mono"
              style={{ display: 'block', fontSize: '12px', color: 'rgba(242,237,228,0.3)', textDecoration: 'none', letterSpacing: '0.05em', marginBottom: '8px' }}>
              +971 58 532 4519
            </a>
            <div className="mono" style={{ fontSize: '9px', color: 'rgba(242,237,228,0.2)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>Dubai, UAE</div>
          </div>
          <a href="mailto:info@truelovecreative.es" className="mono"
            style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', border: '1px solid rgba(242,237,228,0.2)', padding: '16px 32px', textDecoration: 'none', color: '#F2EDE4', transition: 'background 0.2s, color 0.2s', flexShrink: 0 }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F2EDE4'; e.currentTarget.style.color = '#111' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#F2EDE4' }}
          >Start a project →</a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#111111', borderTop: '1px solid rgba(242,237,228,0.05)', padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="serif" style={{ fontSize: '14px', color: 'rgba(242,237,228,0.5)', fontWeight: 600 }}>True Love Creative</span>
        <span className="mono" style={{ fontSize: '9px', color: 'rgba(242,237,228,0.2)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>© 2015–2026 · truelovecreative.es</span>
        <span className="mono" style={{ fontSize: '9px', color: 'rgba(242,237,228,0.2)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Dubai, UAE</span>
      </footer>
    </>
  )
}
