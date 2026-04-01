'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const projects = [
  { id: '01', name: 'Kiko Navarro', type: 'Web Design · 2024', img: '/img/portfolios/kikonavarro.jpg' },
  { id: '02', name: 'Jessica Morari', type: 'Branding & Web · 2023', img: '/img/portfolios/jesslnk.webp' },
  { id: '03', name: 'Javi Beat', type: 'Identity · 2024', img: '/img/portfolios/javibeat.jpg' },
  { id: '04', name: 'Estrela Photo', type: 'Portfolio · 2023', img: '/img/portfolios/estrela.jpg' },
  { id: '05', name: 'Manuel KevSax', type: 'Web Design · 2024', img: '/img/portfolios/manusax.webp' },
  { id: '06', name: 'Sergio Trumpet', type: 'Portfolio · 2024', img: '/img/portfolios/sergio.jpg' },
  { id: '07', name: 'Julio Cuba', type: 'Identity · 2024', img: '/img/portfolios/julio.webp' },
]

const graphic = [
  { cat: 'Vinyl Cover', t: 'MAMA CALLING', s: 'Buika × Kiko Navarro' },
  { cat: 'Vinyl Cover', t: 'EL SILENCIO', s: 'Buika × Kiko Navarro' },
  { cat: 'Flyer Design', t: 'VARADERO', s: 'Event Series 2023' },
]

export default function Home() {
  const curRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)
  const imgEl = useRef<HTMLImageElement>(null)
  const [activeImg, setActiveImg] = useState('')

  useEffect(() => {
    let raf: number
    let mx = -200, my = -200

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      raf = requestAnimationFrame(() => {
        if (curRef.current) {
          curRef.current.style.left = mx + 'px'
          curRef.current.style.top = my + 'px'
        }
        if (imgRef.current) {
          imgRef.current.style.left = mx + 'px'
          imgRef.current.style.top = my + 'px'
        }
      })
    }
    window.addEventListener('mousemove', onMove)

    // Reveal observer
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll('.clip-inner').forEach(el => el.classList.add('in'))
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.reveal-block').forEach(el => obs.observe(el))

    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); obs.disconnect() }
  }, [])

  useEffect(() => {
    if (imgRef.current) {
      if (activeImg) {
        imgRef.current.classList.add('show')
      } else {
        imgRef.current.classList.remove('show')
      }
    }
  }, [activeImg])

  const F = (n: string) => 'var(--font-syne), Syne, system-ui, sans-serif'

  return (
    <>
      {/* Cursor */}
      <div id="cur" ref={curRef} />

      {/* Image follower */}
      <div id="img-follow" ref={imgRef}>
        {activeImg && (
          // eslint-disable-next-line @next/next/no-img-element
          <img ref={imgEl} src={activeImg} alt="" />
        )}
      </div>

      {/* ── NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 48px', height: '56px',
        borderBottom: '1px solid rgba(239,239,239,0.06)',
        background: 'rgba(8,8,8,0.9)',
        backdropFilter: 'blur(12px)',
      }}>
        <a href="#" style={{ fontFamily: F(''), fontSize: '13px', fontWeight: 800, letterSpacing: '-.01em', color: '#EFEFEF', textDecoration: 'none' }}>
          TLC<span style={{ color: '#FF3B00' }}>.</span>
        </a>
        <div style={{ display: 'flex', gap: '40px' }}>
          {['Work', 'Graphic', 'App', 'About', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(239,239,239,0.35)', textDecoration: 'none', transition: 'color .15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FF3B00')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(239,239,239,0.35)')}
            >{l}</a>
          ))}
        </div>
        <a href="mailto:info@truelovecreative.es" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.15em', textTransform: 'uppercase', color: '#FF3B00', textDecoration: 'none', border: '1px solid #FF3B00', padding: '8px 20px', transition: 'all .15s' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#FF3B00'; e.currentTarget.style.color = '#080808' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#FF3B00' }}
        >Let's Talk</a>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 48px 56px', paddingTop: '56px', position: 'relative', overflow: 'hidden' }}>

        {/* Huge background number */}
        <div style={{
          position: 'absolute', bottom: '-8%', right: '-3%',
          fontSize: 'clamp(200px, 35vw, 600px)', fontFamily: F(''), fontWeight: 800,
          lineHeight: 1, color: 'rgba(239,239,239,0.025)', letterSpacing: '-.05em',
          pointerEvents: 'none', userSelect: 'none',
        }}>15</div>

        {/* Tag */}
        <div style={{ marginBottom: '32px' }}>
          <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.35em', textTransform: 'uppercase', color: 'rgba(239,239,239,0.25)' }}>
            Est. 2015 · Dubai, UAE · Web & Graphic Design Studio
          </span>
        </div>

        {/* Main headline */}
        <div className="reveal-block">
          <div className="clip-wrap" style={{ marginBottom: '-8px' }}>
            <div className="clip-inner" style={{ fontFamily: F(''), fontSize: 'clamp(5rem, 15vw, 20rem)', fontWeight: 800, lineHeight: .85, letterSpacing: '-.04em', color: '#EFEFEF' }}>
              TRUE
            </div>
          </div>
          <div className="clip-wrap" style={{ marginBottom: '-8px' }}>
            <div className="clip-inner" style={{ transitionDelay: '.08s', fontFamily: F(''), fontSize: 'clamp(5rem, 15vw, 20rem)', fontWeight: 800, lineHeight: .85, letterSpacing: '-.04em', color: '#FF3B00' }}>
              LOVE
            </div>
          </div>
          <div className="clip-wrap">
            <div className="clip-inner" style={{ transitionDelay: '.16s', fontFamily: F(''), fontSize: 'clamp(5rem, 15vw, 20rem)', fontWeight: 800, lineHeight: .85, letterSpacing: '-.04em', color: '#EFEFEF' }}>
              CREATIVE
            </div>
          </div>
        </div>

        <div style={{ marginTop: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(239,239,239,0.08)', paddingTop: '28px' }}>
          <p style={{ fontFamily: F(''), fontSize: '14px', fontWeight: 400, color: 'rgba(239,239,239,0.4)', maxWidth: '280px', lineHeight: 1.8 }}>
            High-end digital experiences.<br />Minimalist design, premium execution.<br />From Dubai to the world.
          </p>
          <a href="#work" style={{ fontFamily: F(''), fontSize: '11px', fontWeight: 700, letterSpacing: '.25em', textTransform: 'uppercase', color: 'rgba(239,239,239,0.3)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px', transition: 'color .2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#FF3B00')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(239,239,239,0.3)')}
          >
            Selected Works <span style={{ fontSize: '22px' }}>↓</span>
          </a>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div style={{ borderTop: '1px solid rgba(239,239,239,0.06)', borderBottom: '1px solid rgba(239,239,239,0.06)', padding: '14px 0', overflow: 'hidden' }}>
        <div className="run">
          {Array(4).fill(['KIKO NAVARRO', '✦', 'JESSICA MORARI', '✦', 'JAVI BEAT', '✦', 'ESTRELA PHOTO', '✦', 'MANUEL KEVSAX', '✦', 'JULIO CUBA', '✦', 'NIBANGO', '✦']).flat().map((t, i) => (
            <span key={i} style={{ fontFamily: F(''), fontSize: '10px', fontWeight: 700, letterSpacing: '.3em', textTransform: 'uppercase', padding: '0 24px', color: i % 2 === 1 ? '#FF3B00' : 'rgba(239,239,239,0.2)' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── WORK ── */}
      <section id="work" style={{ padding: '96px 0 0' }}>
        <div style={{ padding: '0 48px', marginBottom: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div className="reveal-block">
            <div className="clip-wrap">
              <div className="clip-inner" style={{ fontFamily: F(''), fontSize: 'clamp(2.5rem, 6vw, 7rem)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1 }}>
                SELECTED<br /><span style={{ color: '#FF3B00' }}>WORKS</span>
              </div>
            </div>
          </div>
          <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.2em', color: 'rgba(239,239,239,0.15)', textTransform: 'uppercase' }}>07 projects</span>
        </div>

        <div style={{ borderTop: '1px solid rgba(239,239,239,0.07)' }}>
          {projects.map((p, i) => (
            <div key={p.id} className="wi"
              onMouseEnter={() => setActiveImg(p.img)}
              onMouseLeave={() => setActiveImg('')}
            >
              <span className="wi-num">{p.id}</span>
              <div>
                <div className="wi-name">{p.name}</div>
                <div className="wi-type">{p.type}</div>
              </div>
              <span className="wi-arr">→</span>
            </div>
          ))}
          <div style={{ height: '1px', background: 'rgba(239,239,239,0.07)', margin: '0 48px' }} />
        </div>
      </section>

      {/* ── STATEMENT ── */}
      <section style={{ padding: '120px 48px', overflow: 'hidden' }}>
        <div className="reveal-block">
          {['We make', 'things that', 'work', 'beautifully.'].map((line, i) => (
            <div key={line} className="clip-wrap" style={{ overflow: 'hidden' }}>
              <div className="clip-inner" style={{
                transitionDelay: `${i * .1}s`,
                fontFamily: F(''), fontWeight: 800,
                fontSize: 'clamp(3rem, 9vw, 11rem)',
                lineHeight: .88, letterSpacing: '-.04em',
                color: i === 2 ? '#FF3B00' : '#EFEFEF',
              }}>{line}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '64px', display: 'flex', justifyContent: 'flex-end' }}>
          <p style={{ fontFamily: F(''), fontSize: '13px', fontWeight: 400, color: 'rgba(239,239,239,0.35)', maxWidth: '300px', lineHeight: 1.9 }}>
            Every pixel has a purpose. Every decision is intentional. We don't make pretty things — we make things that work beautifully.
          </p>
        </div>
      </section>

      {/* ── GRAPHIC ── */}
      <section id="graphic" style={{ padding: '0 48px 96px' }}>
        <div style={{ marginBottom: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div style={{ fontFamily: F(''), fontSize: 'clamp(2.5rem, 6vw, 7rem)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1 }}>
            GRAPHIC<br /><span style={{ color: '#FF3B00' }}>DESIGN</span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(239,239,239,0.06)' }}>
          {graphic.map(g => (
            <div key={g.t} className="gc">
              <div className="gc-cat">{g.cat}</div>
              <div className="gc-t">{g.t}</div>
              <div className="gc-s">{g.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── APP ── */}
      <section id="app" style={{ padding: '96px 48px', borderTop: '1px solid rgba(239,239,239,0.06)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: F(''), fontSize: '9px', fontWeight: 700, letterSpacing: '.35em', textTransform: 'uppercase', color: '#FF3B00', marginBottom: '24px' }}>App Development · Live on iOS · Android · Web</div>
          <h2 style={{ fontFamily: F(''), fontSize: 'clamp(5rem, 10vw, 13rem)', fontWeight: 800, letterSpacing: '-.04em', lineHeight: .85, color: '#EFEFEF', marginBottom: '32px' }}>
            NIB<span style={{ color: '#FF3B00' }}>AN</span>GO
          </h2>
          <p style={{ fontFamily: F(''), fontSize: '14px', fontWeight: 400, color: 'rgba(239,239,239,0.4)', lineHeight: 1.9, maxWidth: '360px', marginBottom: '48px' }}>
            The marketplace that actually works. Buy. Sell. Bid. Donate. 6 sections, 4 pricing models, real-time chat, zero commissions.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', borderTop: '1px solid rgba(239,239,239,0.08)', paddingTop: '32px' }}>
            {[['6','Categories'],['4','Pricing'],['3','Platforms'],['0%','Commission']].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily: F(''), fontSize: '2.8rem', fontWeight: 800, color: '#EFEFEF', lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: F(''), fontSize: '8px', fontWeight: 600, color: 'rgba(239,239,239,0.2)', textTransform: 'uppercase', letterSpacing: '.15em', marginTop: '8px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative', height: '480px' }}>
          <Image src="/img/portfolios/nibango-mockup-2.png" alt="Nibango" fill style={{ objectFit: 'contain' }} />
        </div>
      </section>

      {/* ── HOME AGENT ── */}
      <section style={{ padding: '96px 48px', borderTop: '1px solid rgba(239,239,239,0.06)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', background: 'rgba(239,239,239,0.02)' }}>
        <div>
          <div style={{ display: 'inline-block', background: '#FF3B00', padding: '6px 16px', marginBottom: '32px' }}>
            <span style={{ fontFamily: F(''), fontSize: '9px', fontWeight: 700, letterSpacing: '.3em', textTransform: 'uppercase', color: '#080808' }}>★ Available for Acquisition</span>
          </div>
          <h2 style={{ fontFamily: F(''), fontSize: 'clamp(3rem, 6vw, 8rem)', fontWeight: 800, letterSpacing: '-.04em', lineHeight: .85, marginBottom: '32px' }}>
            HOME<br /><span style={{ color: '#FF3B00' }}>AGENT</span>
          </h2>
          <p style={{ fontFamily: F(''), fontSize: '14px', fontWeight: 400, color: 'rgba(239,239,239,0.4)', lineHeight: 1.9, maxWidth: '360px', marginBottom: '40px' }}>
            A fully-designed real estate portfolio platform. Listings, proforma calculator, lead capture — built and ready.
          </p>
          <a href="mailto:info@truelovecreative.es?subject=Home Agent"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontFamily: F(''), fontSize: '11px', fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', border: '1px solid rgba(239,239,239,0.2)', padding: '16px 28px', textDecoration: 'none', color: '#EFEFEF', transition: 'all .15s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#FF3B00'; e.currentTarget.style.color = '#080808'; e.currentTarget.style.borderColor = '#FF3B00' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#EFEFEF'; e.currentTarget.style.borderColor = 'rgba(239,239,239,0.2)' }}
          >Acquire this project →</a>
        </div>
        <div style={{ position: 'relative', height: '400px' }}>
          <Image src="/img/portfolios/homeagent.png" alt="Home Agent" fill style={{ objectFit: 'contain', objectPosition: 'center' }} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: '96px 48px', borderTop: '1px solid rgba(239,239,239,0.06)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '120px' }}>
          <div>
            <h2 style={{ fontFamily: F(''), fontSize: 'clamp(3rem, 6vw, 8rem)', fontWeight: 800, letterSpacing: '-.04em', lineHeight: .85, marginBottom: '48px' }}>
              DESIGN<br />WITH<br /><span style={{ color: '#FF3B00' }}>GUTS.</span>
            </h2>
            <div style={{ fontFamily: F(''), fontSize: '14px', fontWeight: 400, color: 'rgba(239,239,239,0.45)', lineHeight: 1.9 }}>
              <p style={{ marginBottom: '20px' }}>True Love Creative is a web and graphic design studio founded in 2015. We work with brands that care about how they look and how they make people feel.</p>
              <p style={{ marginBottom: '20px' }}>Based in Dubai — working globally. Artists, startups, clinics, agencies. We've helped all of them build digital presences that people remember.</p>
              <p style={{ color: '#EFEFEF', fontWeight: 600 }}>We don't do average. We do work we're proud to sign.</p>
            </div>
          </div>
          <div style={{ paddingTop: '64px' }}>
            {[['Founded','2015'],['Base','Dubai, UAE'],['Services','Web · Graphic · App'],['Languages','ES · EN · AR'],['Email','info@truelovecreative.es'],['Phone','+971 58 532 4519']].map(([l,v]) => (
              <div key={l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '18px 0', borderBottom: '1px solid rgba(239,239,239,0.06)' }}>
                <span style={{ fontFamily: F(''), fontSize: '9px', fontWeight: 600, letterSpacing: '.25em', textTransform: 'uppercase', color: 'rgba(239,239,239,0.25)' }}>{l}</span>
                <span style={{ fontFamily: F(''), fontSize: '14px', fontWeight: 700, textAlign: 'right' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: '120px 48px', borderTop: '1px solid rgba(239,239,239,0.06)' }}>
        <h2 style={{ fontFamily: F(''), fontSize: 'clamp(4rem, 14vw, 18rem)', fontWeight: 800, letterSpacing: '-.04em', lineHeight: .82, marginBottom: '80px' }}>
          LET'S<br />MAKE<br /><span style={{ color: '#FF3B00' }}>GREAT</span><br />THINGS.
        </h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(239,239,239,0.08)', paddingTop: '48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="mailto:info@truelovecreative.es" style={{ fontFamily: F(''), fontSize: '15px', fontWeight: 600, color: 'rgba(239,239,239,0.5)', textDecoration: 'none', transition: 'color .2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FF3B00')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(239,239,239,0.5)')}
            >info@truelovecreative.es ↗</a>
            <span style={{ fontFamily: F(''), fontSize: '12px', fontWeight: 500, color: 'rgba(239,239,239,0.25)' }}>+971 58 532 4519 · Dubai, UAE</span>
          </div>
          <a href="mailto:info@truelovecreative.es"
            style={{ fontFamily: F(''), fontSize: '11px', fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', background: '#FF3B00', padding: '18px 36px', textDecoration: 'none', color: '#080808', transition: 'all .15s', flexShrink: 0 }}
            onMouseEnter={e => { e.currentTarget.style.background = '#EFEFEF' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#FF3B00' }}
          >Start a project →</a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid rgba(239,239,239,0.06)', padding: '24px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: F(''), fontSize: '12px', fontWeight: 800, letterSpacing: '-.01em' }}>TLC<span style={{ color: '#FF3B00' }}>.</span></span>
        <span style={{ fontFamily: F(''), fontSize: '9px', fontWeight: 600, color: 'rgba(239,239,239,0.2)', letterSpacing: '.2em', textTransform: 'uppercase' }}>© 2015–2026 True Love Creative</span>
        <span style={{ fontFamily: F(''), fontSize: '9px', fontWeight: 600, color: 'rgba(239,239,239,0.2)', letterSpacing: '.2em', textTransform: 'uppercase' }}>Dubai, UAE</span>
      </footer>
    </>
  )
}
