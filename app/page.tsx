'use client'

import { useEffect } from 'react'
import Image from 'next/image'

const P = 'var(--playfair),Georgia,serif'
const E = 'var(--elite),"Courier New",monospace'
const F = 'var(--fell),Georgia,serif'
const INK = '#1A1208'
const RED = '#8B1A1A'
const FADE = '#7A6A4A'
const PAPER = '#F4EFE0'
const RULE = 'rgba(26,18,8,0.15)'

const projects = [
  { id: 'I', name: 'Kiko Navarro', type: 'Web Design · 2024', img: '/img/portfolios/kikonavarro.jpg', desc: 'Legendary DJ & producer. A website as iconic as his sound.' },
  { id: 'II', name: 'Jessica Morari', type: 'Branding & Web · 2023', img: '/img/portfolios/jesslnk.webp', desc: 'Coaching and wellness platform built for conversion.' },
  { id: 'III', name: 'Javi Beat', type: 'Identity · 2024', img: '/img/portfolios/javibeat.jpg', desc: 'DJ identity from Dubai. Personal brand meets residency.' },
  { id: 'IV', name: 'Estrela Photo', type: 'Portfolio · 2023', img: '/img/portfolios/estrela.jpg', desc: 'Photography studio portfolio. The photos lead. The site follows.' },
  { id: 'V', name: 'Manuel KevSax', type: 'Web Design · 2024', img: '/img/portfolios/manusax.webp', desc: 'Luxury saxophonist booking platform.' },
  { id: 'VI', name: 'Sergio Trumpet', type: 'Portfolio · 2024', img: '/img/portfolios/sergio.jpg', desc: 'Professional trumpet player. Clean, precise, memorable.' },
  { id: 'VII', name: 'Julio Cuba', type: 'Identity · 2024', img: '/img/portfolios/julio.webp', desc: 'Violinist. Artistic portfolio built to impress venues.' },
]

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('in'), i * 60)
        }
      })
    }, { threshold: 0.05 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>

      {/* ══ MASTHEAD ══════════════════════════════════════════════ */}
      <header style={{ padding: '32px 0 16px', textAlign: 'center' }}>
        {/* Top strip */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ fontFamily: E, fontSize: '9px', letterSpacing: '.2em', color: FADE }}>EST. MMXV · DUBAI, U.A.E.</span>
          <span style={{ fontFamily: E, fontSize: '9px', letterSpacing: '.15em', color: FADE }}>WEB · GRAPHIC · APP</span>
          <span style={{ fontFamily: E, fontSize: '9px', letterSpacing: '.2em', color: FADE }}>VOL. XI · FREE OF CHARGE</span>
        </div>

        <div className="rule-h2" />

        {/* Main title */}
        <div style={{ padding: '20px 0 16px' }}>
          <div style={{ fontFamily: E, fontSize: '10px', letterSpacing: '.5em', textTransform: 'uppercase', color: FADE, marginBottom: '8px' }}>
            ✦ &nbsp; The Creative Gazette &nbsp; ✦
          </div>
          <h1 className="playfair" style={{
            fontFamily: P, fontSize: 'clamp(3.5rem, 12vw, 10rem)', fontWeight: 900,
            lineHeight: .88, letterSpacing: '-.02em', color: INK
          }}>
            True Love<br /><em style={{ color: RED }}>Creative</em>
          </h1>
          <div style={{ fontFamily: F, fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', fontStyle: 'italic', color: FADE, marginTop: '8px' }}>
            "High-end digital experiences. Minimalist design, premium execution. From Dubai to the world."
          </div>
        </div>

        <div className="rule-h" />

        {/* Nav strip */}
        <nav style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(16px, 4vw, 48px)', padding: '10px 0', flexWrap: 'wrap' }}>
          {['Selected Works', 'Graphic Design', 'App Development', 'About the Studio', 'Contact Us'].map(l => (
            <a key={l} href={`#${l.split(' ')[0].toLowerCase()}`}
              style={{ fontFamily: E, fontSize: '9px', letterSpacing: '.25em', textTransform: 'uppercase', color: INK, textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = RED)}
              onMouseLeave={e => (e.currentTarget.style.color = INK)}
            >{l}</a>
          ))}
        </nav>

        <div className="rule-h" />

        {/* Date strip */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', alignItems: 'center' }}>
          <span style={{ fontFamily: E, fontSize: '8px', color: FADE, letterSpacing: '.15em' }}>
            {new Date().toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase()}
          </span>
          <span style={{ fontFamily: E, fontSize: '8px', color: RED, letterSpacing: '.2em' }}>✦ TRUELOVECREATIVE.ES ✦</span>
          <span style={{ fontFamily: E, fontSize: '8px', color: FADE, letterSpacing: '.15em' }}>PRICE: FREE</span>
        </div>
        <div className="rule-thin" />
      </header>

      {/* ══ ABOVE THE FOLD — 3 col layout ══════════════════════ */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '0', borderBottom: `1px solid ${RULE}`, padding: '24px 0' }} className="grid-3">

        {/* Left col */}
        <div style={{ padding: '0 20px 0 0', borderRight: `1px solid ${RULE}` }}>
          <div style={{ fontFamily: E, fontSize: '8px', letterSpacing: '.3em', textTransform: 'uppercase', color: FADE, marginBottom: '8px' }}>Studio</div>
          <div className="rule-thin" style={{ marginBottom: '12px' }} />
          <p className="fell reveal" style={{ fontFamily: F, fontSize: '13px', lineHeight: 1.9, color: INK }}>
            Founded in the year of our Lord <strong>2015</strong>, True Love Creative has quietly become one of the most trusted design studios operating out of <strong>Dubai, UAE.</strong>
          </p>
          <div style={{ margin: '16px 0', textAlign: 'center' }}>
            <span className="stamp">Est. 2015</span>
          </div>
          <p className="fell reveal" style={{ fontFamily: F, fontSize: '13px', lineHeight: 1.9, color: INK, marginTop: '12px' }}>
            We work with artists, startups, and brands who believe that design is not decoration — it is decision.
          </p>
          <div style={{ marginTop: '20px', padding: '12px', border: `1px solid ${RULE}`, background: 'rgba(139,26,26,0.04)' }}>
            <div style={{ fontFamily: E, fontSize: '8px', letterSpacing: '.2em', textTransform: 'uppercase', color: RED, marginBottom: '8px' }}>Services</div>
            {['Web Design', 'Graphic Design', 'App Development', 'Brand Identity', 'Creative Direction'].map(s => (
              <div key={s} style={{ fontFamily: F, fontSize: '12px', color: INK, borderBottom: `1px solid ${RULE}`, padding: '5px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {s} <span style={{ color: RED }}>→</span>
              </div>
            ))}
          </div>
        </div>

        {/* Center col — hero HP photo */}
        <div style={{ padding: '0 24px' }}>
          <div style={{ fontFamily: E, fontSize: '8px', letterSpacing: '.3em', textTransform: 'uppercase', color: FADE, marginBottom: '8px', textAlign: 'center' }}>
            Featured — Kiko Navarro
          </div>
          <div className="rule-thin" style={{ marginBottom: '12px' }} />

          {/* Harry Potter photo */}
          <div className="hp-photo" style={{ width: '100%', aspectRatio: '4/3', position: 'relative', marginBottom: '16px' }}>
            <Image src="/img/portfolios/kikonavarro.jpg" alt="Kiko Navarro" fill style={{ objectFit: 'cover' }} />
          </div>

          <p className="fell dropcap reveal" style={{ fontFamily: F, fontSize: '15px', lineHeight: 1.85, color: INK, textAlign: 'justify' }}>
            Kiko Navarro — legendary DJ, musician and producer. His new website, crafted entirely by True Love Creative, stands as testament to what digital presence ought to be: clean, powerful, and unmistakably him.
          </p>
          <div style={{ marginTop: '16px', fontFamily: E, fontSize: '9px', color: FADE, letterSpacing: '.1em', textAlign: 'right', fontStyle: 'italic' }}>
            — Web Design · Dubai, 2024
          </div>
        </div>

        {/* Right col */}
        <div style={{ padding: '0 0 0 20px', borderLeft: `1px solid ${RULE}` }}>
          <div style={{ fontFamily: E, fontSize: '8px', letterSpacing: '.3em', textTransform: 'uppercase', color: FADE, marginBottom: '8px' }}>Latest</div>
          <div className="rule-thin" style={{ marginBottom: '12px' }} />

          {/* Small HP photos */}
          {[
            { img: '/img/portfolios/jesslnk.webp', name: 'Jessica Morari', type: 'Branding & Web' },
            { img: '/img/portfolios/javibeat.jpg', name: 'Javi Beat', type: 'Identity' },
          ].map(p => (
            <div key={p.name} style={{ marginBottom: '20px' }}>
              <div className="hp-photo" style={{ width: '100%', aspectRatio: '3/2', position: 'relative', marginBottom: '8px' }}>
                <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover', filter: 'grayscale(20%)' }} />
              </div>
              <div style={{ fontFamily: P, fontSize: '14px', fontWeight: 700, color: INK }}>{p.name}</div>
              <div style={{ fontFamily: E, fontSize: '8px', letterSpacing: '.15em', textTransform: 'uppercase', color: FADE }}>{p.type}</div>
            </div>
          ))}

          <div className="rule-thin" style={{ margin: '16px 0' }} />
          <div style={{ padding: '12px', border: `3px double ${INK}`, textAlign: 'center' }}>
            <div style={{ fontFamily: P, fontSize: '18px', fontWeight: 900, fontStyle: 'italic', color: RED, lineHeight: 1.2, marginBottom: '8px' }}>
              "We don't do average."
            </div>
            <div style={{ fontFamily: E, fontSize: '8px', letterSpacing: '.2em', color: FADE }}>— The Studio Creed</div>
          </div>
        </div>
      </section>

      {/* ══ MARQUEE STRIP ══════════════════════════════════════ */}
      <div style={{ borderTop: `2px solid ${INK}`, borderBottom: `2px solid ${INK}`, padding: '8px 0', margin: '0', overflow: 'hidden', background: INK }}>
        <div className="marquee">
          {Array(3).fill(['SELECTED WORKS', '✦', 'KIKO NAVARRO', '✦', 'JESSICA MORARI', '✦', 'JAVI BEAT', '✦', 'ESTRELA PHOTO', '✦', 'MANUEL KEVSAX', '✦', 'JULIO CUBA', '✦', 'NIBANGO', '✦']).flat().map((t, i) => (
            <span key={i} style={{ fontFamily: E, fontSize: '9px', letterSpacing: '.3em', textTransform: 'uppercase', padding: '0 20px', color: i % 2 === 1 ? RED : 'rgba(244,239,224,0.5)' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ══ SELECTED WORKS ══════════════════════════════════════ */}
      <section id="selected" style={{ padding: '32px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
          <h2 className="playfair" style={{ fontFamily: P, fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-.02em', lineHeight: 1 }}>
            Selected <em style={{ color: RED }}>Works</em>
          </h2>
          <span style={{ fontFamily: E, fontSize: '9px', color: FADE, letterSpacing: '.15em' }}>Anno Domini MMXXIV</span>
        </div>
        <div className="rule-h" style={{ marginBottom: '0' }} />

        {/* Work table */}
        {projects.map(p => (
          <div key={p.id} className="work-row">
            <span className="wr-num">{p.id}</span>
            <div>
              <div className="wr-name">{p.name}</div>
              <div className="wr-type">{p.type}</div>
            </div>
            <span className="wr-arr">→</span>
          </div>
        ))}

        {/* Full HP photo grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', marginTop: '24px' }} className="grid-3">
          {[projects[3], projects[4], projects[5]].map(p => (
            <div key={p.id}>
              <div className="hp-photo" style={{ position: 'relative', aspectRatio: '4/3' }}>
                <Image src={p.img} alt={p.name} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '8px 0' }}>
                <div style={{ fontFamily: P, fontSize: '14px', fontWeight: 700, color: INK }}>{p.name}</div>
                <div style={{ fontFamily: E, fontSize: '8px', letterSpacing: '.15em', textTransform: 'uppercase', color: FADE }}>{p.type}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ GRAPHIC DESIGN ══════════════════════════════════════ */}
      <section id="graphic" style={{ padding: '32px 0', borderTop: `4px double ${INK}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }} className="grid-2">
          <div>
            <div style={{ fontFamily: E, fontSize: '8px', letterSpacing: '.3em', textTransform: 'uppercase', color: FADE, marginBottom: '8px' }}>Section III</div>
            <h2 className="playfair" style={{ fontFamily: P, fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, fontStyle: 'italic', lineHeight: 1, marginBottom: '16px' }}>
              Graphic<br /><span style={{ color: RED }}>Design</span>
            </h2>
            <div className="rule-thin" />
            <p className="fell reveal" style={{ fontFamily: F, fontSize: '14px', lineHeight: 1.9, color: INK, marginTop: '16px' }}>
              From vinyl sleeves to event flyers — our graphic work lives in the real world. Buika, Kiko Navarro, Varadero. Each piece crafted to be immediately legible and endlessly remembered.
            </p>

            {/* Graphic items as newspaper listings */}
            <div style={{ marginTop: '24px' }}>
              {[
                { cat: 'Vinyl Cover', t: 'MAMA CALLING', s: 'Buika × Kiko Navarro, 2023' },
                { cat: 'Vinyl Cover', t: 'EL SILENCIO', s: 'Buika × Kiko Navarro, 2023' },
                { cat: 'Event Flyer', t: 'VARADERO', s: 'Event Series, Dubai 2023' },
              ].map(g => (
                <div key={g.t} style={{ padding: '12px 0', borderBottom: `1px solid ${RULE}`, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div>
                    <div style={{ fontFamily: P, fontSize: '18px', fontWeight: 700, color: INK }}>{g.t}</div>
                    <div style={{ fontFamily: E, fontSize: '8px', letterSpacing: '.15em', textTransform: 'uppercase', color: FADE }}>{g.cat}</div>
                  </div>
                  <div style={{ fontFamily: F, fontSize: '12px', fontStyle: 'italic', color: FADE, textAlign: 'right', maxWidth: '150px' }}>{g.s}</div>
                </div>
              ))}
            </div>
          </div>

          {/* HP photo — big */}
          <div>
            <div style={{ fontFamily: E, fontSize: '8px', letterSpacing: '.3em', textTransform: 'uppercase', color: FADE, marginBottom: '8px' }}>Estrela Photo · Portfolio</div>
            <div className="hp-photo" style={{ position: 'relative', aspectRatio: '3/4' }}>
              <Image src="/img/portfolios/estrela.jpg" alt="Estrela Photo" fill style={{ objectFit: 'cover' }} />
            </div>
            <p style={{ fontFamily: F, fontSize: '12px', fontStyle: 'italic', color: FADE, marginTop: '8px', lineHeight: 1.6 }}>
              Photography portfolio. The images lead — the design simply gets out of the way.
            </p>
          </div>
        </div>
      </section>

      {/* ══ APP — NIBANGO ══════════════════════════════════════ */}
      <section id="app" style={{ borderTop: `4px double ${INK}`, padding: '32px 0' }}>
        <div style={{ fontFamily: E, fontSize: '8px', letterSpacing: '.3em', textTransform: 'uppercase', color: FADE, marginBottom: '8px', textAlign: 'center' }}>Section IV · App Development</div>
        <div className="rule-thin" style={{ marginBottom: '24px' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }} className="grid-2">
          <div>
            <h2 className="playfair reveal" style={{ fontFamily: P, fontSize: 'clamp(3rem, 9vw, 9rem)', fontWeight: 900, fontStyle: 'italic', lineHeight: .85, letterSpacing: '-.03em', marginBottom: '24px' }}>
              NIB<span style={{ color: RED }}>AN</span>GO
            </h2>
            <div style={{ fontFamily: E, fontSize: '9px', letterSpacing: '.2em', textTransform: 'uppercase', color: RED, marginBottom: '16px' }}>
              Live · iOS · Android · Web · Zero Commission
            </div>
            <div className="cols-2">
              <p className="fell dropcap" style={{ fontFamily: F, fontSize: '14px', lineHeight: 1.85, color: INK, textAlign: 'justify' }}>
                The marketplace that actually works. Six categories, four pricing models, real-time chat, and absolutely zero commission on any transaction.
                Built for the real economy — for people who buy, sell, bid, and donate without needing a middleman to take his cut.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px', marginTop: '24px', padding: '16px', border: `1px solid ${RULE}` }}>
              {[['6','Categories'],['4','Pricing Models'],['3','Platforms'],['0%','Commission']].map(([n,l]) => (
                <div key={l} style={{ textAlign: 'center', borderRight: `1px solid ${RULE}`, paddingRight: '8px' }}>
                  <div style={{ fontFamily: P, fontSize: '2.5rem', fontWeight: 900, color: RED, lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: E, fontSize: '7px', letterSpacing: '.15em', textTransform: 'uppercase', color: FADE, marginTop: '4px' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="hp-photo" style={{ position: 'relative', aspectRatio: '9/16' }}>
              <Image src="/img/portfolios/nibango-mockup-1.png" alt="Nibango" fill style={{ objectFit: 'contain', background: '#0a0a0a' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOME AGENT ══════════════════════════════════════════ */}
      <section style={{ borderTop: `4px double ${INK}`, padding: '32px 0' }}>
        <div style={{ background: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(139,26,26,0.03) 10px, rgba(139,26,26,0.03) 20px)`, border: `1px solid ${RULE}`, padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px' }}>
            <div style={{ flex: '1', minWidth: '280px' }}>
              <span className="stamp" style={{ marginBottom: '16px', display: 'inline-block' }}>★ For Sale</span>
              <h3 className="playfair" style={{ fontFamily: P, fontSize: 'clamp(2rem, 5vw, 4.5rem)', fontWeight: 900, lineHeight: .88, marginTop: '12px', marginBottom: '16px' }}>
                HOME <em style={{ color: RED }}>AGENT</em>
              </h3>
              <p className="fell" style={{ fontFamily: F, fontSize: '14px', lineHeight: 1.85, color: INK, maxWidth: '440px' }}>
                A fully-designed real estate portfolio platform — listings, proforma calculator, lead capture. Built, tested, and ready for acquisition. No development required.
              </p>
              <a href="mailto:info@truelovecreative.es?subject=Home Agent"
                style={{ display: 'inline-block', marginTop: '20px', fontFamily: E, fontSize: '10px', letterSpacing: '.25em', textTransform: 'uppercase', background: INK, color: PAPER, padding: '12px 24px', textDecoration: 'none', transition: 'background .15s' }}
                onMouseEnter={e => (e.currentTarget.style.background = RED)}
                onMouseLeave={e => (e.currentTarget.style.background = INK)}
              >Acquire Now →</a>
            </div>
            <div style={{ position: 'relative', width: 'min(100%, 320px)', aspectRatio: '4/3', flexShrink: 0 }}>
              <Image src="/img/portfolios/homeagent.png" alt="Home Agent" fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT ══════════════════════════════════════════════ */}
      <section id="about" style={{ borderTop: `4px double ${INK}`, padding: '32px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2px 1fr', gap: '32px', alignItems: 'start' }} className="grid-2" id="about-grid">
          <div>
            <div style={{ fontFamily: E, fontSize: '8px', letterSpacing: '.3em', textTransform: 'uppercase', color: FADE, marginBottom: '8px' }}>About the Studio</div>
            <div className="rule-thin" style={{ marginBottom: '16px' }} />
            <h2 className="playfair" style={{ fontFamily: P, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, lineHeight: .9, marginBottom: '24px' }}>
              Design with<br /><em style={{ color: RED }}>conviction.</em>
            </h2>
            <div className="cols-2">
              <p className="fell dropcap" style={{ fontFamily: F, fontSize: '14px', lineHeight: 1.85, textAlign: 'justify', color: INK }}>
                True Love Creative was founded in 2015. Not in a WeWork, not in a coffee shop — in a room with too many screens and an obsession with getting things right.
                We have since worked with musicians, therapists, photographers, app developers and restaurateurs across Europe and the Middle East.
                Each project is treated as if it were the only one.
              </p>
            </div>
          </div>
          <div style={{ background: RULE, alignSelf: 'stretch' }} className="hide-mobile" />
          <div>
            <div style={{ fontFamily: E, fontSize: '8px', letterSpacing: '.3em', textTransform: 'uppercase', color: FADE, marginBottom: '8px' }}>Studio Facts</div>
            <div className="rule-thin" style={{ marginBottom: '0' }} />
            {[['Founded','2015'],['Headquarters','Dubai, UAE'],['Clients','Musicians · Brands · Startups'],['Services','Web · Graphic · App'],['Languages','ES · EN · AR'],['Email','info@truelovecreative.es'],['Phone','+971 58 532 4519']].map(([l,v]) => (
              <div key={l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '10px 0', borderBottom: `1px solid ${RULE}` }}>
                <span style={{ fontFamily: E, fontSize: '8px', letterSpacing: '.2em', textTransform: 'uppercase', color: FADE }}>{l}</span>
                <span style={{ fontFamily: F, fontSize: '13px', fontStyle: 'italic', color: INK, textAlign: 'right', maxWidth: '200px' }}>{v}</span>
              </div>
            ))}
            <div style={{ marginTop: '24px', padding: '16px', border: `1px solid ${RULE}`, background: `rgba(139,26,26,0.03)` }}>
              <div style={{ fontFamily: P, fontSize: '1.1rem', fontWeight: 700, fontStyle: 'italic', color: INK, lineHeight: 1.5 }}>
                "We don't do average.<br />We do work we're proud to sign."
              </div>
              <div style={{ fontFamily: E, fontSize: '8px', color: FADE, marginTop: '8px', letterSpacing: '.15em' }}>— True Love Creative, Est. 2015</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══════════════════════════════════════════ */}
      <section id="contact" style={{ borderTop: `4px double ${INK}`, padding: '32px 0 48px', textAlign: 'center' }}>
        <div style={{ fontFamily: E, fontSize: '9px', letterSpacing: '.4em', textTransform: 'uppercase', color: FADE, marginBottom: '16px' }}>
          ✦ &nbsp; Commissions Open &nbsp; ✦
        </div>
        <h2 className="playfair" style={{ fontFamily: P, fontSize: 'clamp(3.5rem, 13vw, 13rem)', fontWeight: 900, fontStyle: 'italic', lineHeight: .82, color: INK, letterSpacing: '-.03em', marginBottom: '32px' }}>
          Let's make<br />something<br /><span style={{ color: RED }}>great.</span>
        </h2>
        <div className="rule-thin" style={{ maxWidth: '400px', margin: '0 auto 32px' }} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <a href="mailto:info@truelovecreative.es"
            style={{ fontFamily: P, fontSize: 'clamp(1rem, 2.5vw, 1.6rem)', fontWeight: 700, fontStyle: 'italic', color: INK, textDecoration: 'none', transition: 'color .15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = RED)}
            onMouseLeave={e => (e.currentTarget.style.color = INK)}
          >info@truelovecreative.es</a>
          <span style={{ fontFamily: F, fontSize: '14px', fontStyle: 'italic', color: FADE }}>+971 58 532 4519 · Dubai, UAE</span>
          <a href="mailto:info@truelovecreative.es"
            style={{ marginTop: '16px', fontFamily: E, fontSize: '10px', letterSpacing: '.25em', textTransform: 'uppercase', background: INK, color: PAPER, padding: '16px 40px', textDecoration: 'none', transition: 'background .15s' }}
            onMouseEnter={e => (e.currentTarget.style.background = RED)}
            onMouseLeave={e => (e.currentTarget.style.background = INK)}
          >Send Enquiry →</a>
        </div>
      </section>

      {/* ══ FOOTER ══════════════════════════════════════════════ */}
      <footer style={{ borderTop: `2px solid ${INK}`, padding: '16px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
        <span style={{ fontFamily: P, fontSize: '14px', fontWeight: 900, fontStyle: 'italic', color: INK }}>True Love Creative</span>
        <span style={{ fontFamily: E, fontSize: '8px', letterSpacing: '.2em', textTransform: 'uppercase', color: FADE }}>© 2015–2026 · All Rights Reserved · Dubai, UAE</span>
        <span style={{ fontFamily: E, fontSize: '8px', letterSpacing: '.15em', color: FADE }}>TRUELOVECREATIVE.ES</span>
      </footer>

    </div>
  )
}
