'use client'

import { useEffect } from 'react'
import Image from 'next/image'

/* ── Palette shortcuts ─────────────────────────────────── */
const K = '#111008'    // ink
const R = '#C0281A'    // red
const P = '#F0EAD8'    // paper
const G = '#8A7F6E'    // grey
const RU = 'rgba(17,16,8,0.12)' // rule

/* ── Font shortcuts ──────────────────────────────────── */
const PF = 'var(--playfair),"Playfair Display",Georgia,serif'
const EL = 'var(--elite),"Special Elite","Courier New",monospace'
const FL = 'var(--fell),"IM Fell English",Georgia,serif'

/* ── Data ────────────────────────────────────────────── */
const works = [
  { n:'I',   name:'Kiko Navarro',   type:'Web Design · 2024',     img:'/img/portfolios/kikonavarro.jpg',  tag:'Music' },
  { n:'II',  name:'Jessica Morari', type:'Branding & Web · 2023', img:'/img/portfolios/jesslnk.webp',    tag:'Wellness' },
  { n:'III', name:'Javi Beat',      type:'Identity · 2024',       img:'/img/portfolios/javibeat.jpg',     tag:'Music' },
  { n:'IV',  name:'Estrela Photo',  type:'Portfolio · 2023',      img:'/img/portfolios/estrela.jpg',      tag:'Photography' },
  { n:'V',   name:'Manuel KevSax',  type:'Web Design · 2024',     img:'/img/portfolios/manusax.webp',    tag:'Music' },
  { n:'VI',  name:'Sergio Trumpet', type:'Portfolio · 2024',      img:'/img/portfolios/sergio.jpg',       tag:'Music' },
  { n:'VII', name:'Julio Cuba',     type:'Identity · 2024',       img:'/img/portfolios/julio.webp',       tag:'Music' },
]

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries =>
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.rv').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const today = new Date().toLocaleDateString('en-GB', { weekday:'long', day:'numeric', month:'long', year:'numeric' }).toUpperCase()

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(16px,4vw,48px)' }}>

      {/* ══ MASTHEAD ═══════════════════════════════════════ */}
      <header style={{ padding: '28px 0 0' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px', flexWrap:'wrap', gap:'6px' }}>
          <span className="el" style={{ fontFamily:EL, fontSize:'8px', letterSpacing:'.25em', color:G }}>EST. MMXV · DUBAI, U.A.E.</span>
          <span className="el" style={{ fontFamily:EL, fontSize:'8px', letterSpacing:'.25em', color:G, textTransform:'uppercase' }}>Web · Graphic · App</span>
          <span className="el" style={{ fontFamily:EL, fontSize:'8px', letterSpacing:'.25em', color:G }}>truelovecreative.es</span>
        </div>
        <hr className="double" />
        <div style={{ textAlign:'center', padding:'clamp(14px,4vw,32px) 0 clamp(10px,3vw,24px)' }}>
          <div className="el" style={{ fontFamily:EL, fontSize:'9px', letterSpacing:'.5em', color:G, marginBottom:'12px' }}>✦  THE CREATIVE GAZETTE  ✦</div>
          <h1 className="pf" style={{ fontFamily:PF, fontSize:'clamp(3rem,11vw,9.5rem)', fontWeight:900, lineHeight:.85, letterSpacing:'-.02em', color:K }}>
            True Love<br />
            <em style={{ color:R, fontWeight:400 }}>Creative</em>
          </h1>
          <p className="fl" style={{ fontFamily:FL, fontSize:'clamp(.9rem,1.8vw,1.15rem)', fontStyle:'italic', color:G, marginTop:'12px' }}>
            "High-end digital experiences. Minimalist design, premium execution. From Dubai to the world."
          </p>
        </div>
        <hr className="thick" />
        <nav style={{ display:'flex', justifyContent:'center', gap:'clamp(12px,4vw,40px)', padding:'9px 0', flexWrap:'wrap', borderBottom:`1px solid ${RU}` }}>
          {['Works','Graphic','App','About','Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="el" style={{ fontFamily:EL, fontSize:'8px', letterSpacing:'.3em', textTransform:'uppercase', color:K, textDecoration:'none' }}
              onMouseEnter={e=>(e.currentTarget.style.color=R)} onMouseLeave={e=>(e.currentTarget.style.color=K)}>{l}</a>
          ))}
        </nav>
        <div style={{ display:'flex', justifyContent:'space-between', padding:'5px 0', flexWrap:'wrap', gap:'4px' }}>
          <span className="el" style={{ fontFamily:EL, fontSize:'7px', color:G, letterSpacing:'.1em' }}>{today}</span>
          <span className="el" style={{ fontFamily:EL, fontSize:'7px', color:R, letterSpacing:'.2em' }}>✦ ISSUE MMXXVI ✦</span>
          <span className="el" style={{ fontFamily:EL, fontSize:'7px', color:G, letterSpacing:'.1em' }}>PRICE: FREE</span>
        </div>
        <hr className="thin" />
      </header>

      {/* ══ FRONT PAGE ══════════════════════════════════════ */}
      <section style={{ display:'grid', gridTemplateColumns:'clamp(160px,22%,260px) 1fr clamp(140px,20%,220px)', gap:'0', padding:'24px 0 0' }} className="col-sm-1">

        {/* Left col */}
        <div style={{ paddingRight:'20px', borderRight:`1px solid ${RU}` }}>
          <div className="el" style={{ fontFamily:EL, fontSize:'8px', letterSpacing:'.3em', textTransform:'uppercase', color:G, marginBottom:'8px' }}>Studio</div>
          <hr className="thin" style={{ marginBottom:'12px' }} />
          <p className="fl rv" style={{ fontFamily:FL, fontSize:'13px', lineHeight:1.9, color:K }}>
            Founded in <strong>2015</strong> with a single conviction — that design should be <em>felt</em>, not just seen.
            We are a small, obsessive studio operating out of <strong>Dubai</strong> and working globally.
          </p>
          <div style={{ margin:'18px 0', padding:'12px', border:`1px solid ${RU}`, background:`rgba(192,40,26,0.04)` }}>
            <div className="el" style={{ fontFamily:EL, fontSize:'7px', letterSpacing:'.3em', textTransform:'uppercase', color:R, marginBottom:'8px' }}>Services</div>
            {['Web Design','Graphic Design','App Development','Brand Identity'].map(s=>(
              <div key={s} style={{ fontFamily:FL, fontSize:'12px', color:K, borderBottom:`1px solid ${RU}`, padding:'5px 0', display:'flex', justifyContent:'space-between' }}>
                {s}<span style={{ color:R }}>→</span>
              </div>
            ))}
          </div>
          <p className="fl rv" style={{ fontFamily:FL, fontSize:'13px', lineHeight:1.9, color:K }}>
            Each project is treated as if it were the only one.
          </p>
          <div style={{ marginTop:'20px', textAlign:'center' }}>
            <div style={{ display:'inline-block', border:`2px solid ${R}`, padding:'6px 14px', transform:'rotate(-3deg)', fontFamily:EL, fontSize:'8px', letterSpacing:'.3em', textTransform:'uppercase', color:R }}>Est. 2015</div>
          </div>
        </div>

        {/* Centre — hero HP photo */}
        <div style={{ padding:'0 clamp(12px,2.5vw,28px)' }}>
          <div className="el" style={{ fontFamily:EL, fontSize:'8px', letterSpacing:'.2em', textTransform:'uppercase', color:G, marginBottom:'8px', textAlign:'center' }}>Featured — Kiko Navarro</div>
          <hr className="thin" style={{ marginBottom:'14px' }} />
          <div className="hp" style={{ width:'100%', aspectRatio:'4/3', position:'relative' }}>
            <img src="/img/portfolios/kikonavarro.jpg" alt="Kiko Navarro" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
          </div>
          <p className="fl dc rv" style={{ fontFamily:FL, fontSize:'clamp(13px,1.6vw,16px)', lineHeight:1.9, color:K, textAlign:'justify', marginTop:'16px' }}>
            Kiko Navarro — DJ, producer, musician. A legend who needed a website as iconic as his sound. We stripped everything unnecessary and let the music lead.
          </p>
          <div style={{ fontFamily:EL, fontSize:'8px', color:G, letterSpacing:'.12em', textAlign:'right', marginTop:'8px', fontStyle:'italic' }}>— Web Design · Dubai, 2024</div>
        </div>

        {/* Right col */}
        <div style={{ paddingLeft:'20px', borderLeft:`1px solid ${RU}` }} className="hide-sm">
          <div className="el" style={{ fontFamily:EL, fontSize:'8px', letterSpacing:'.3em', textTransform:'uppercase', color:G, marginBottom:'8px' }}>Latest</div>
          <hr className="thin" style={{ marginBottom:'14px' }} />
          {[works[1], works[2]].map(w=>(
            <div key={w.n} style={{ marginBottom:'20px' }}>
              <div className="hp" style={{ position:'relative', aspectRatio:'3/2' }}>
                <img src={w.img} alt={w.name} style={{ width:'100%', height:'100%', objectFit:'cover', filter:'grayscale(15%)' }} />
              </div>
              <div className="pf" style={{ fontFamily:PF, fontSize:'15px', fontWeight:700, color:K, marginTop:'8px' }}>{w.name}</div>
              <div className="el" style={{ fontFamily:EL, fontSize:'7px', letterSpacing:'.15em', textTransform:'uppercase', color:G }}>{w.type}</div>
            </div>
          ))}
          <hr className="thin" />
          <div style={{ marginTop:'16px', padding:'14px', border:`2px double ${K}`, textAlign:'center' }}>
            <div className="pf" style={{ fontFamily:PF, fontSize:'1.1rem', fontWeight:700, fontStyle:'italic', color:R, lineHeight:1.3 }}>"We don't do average."</div>
            <div className="el" style={{ fontFamily:EL, fontSize:'7px', letterSpacing:'.2em', color:G, marginTop:'8px' }}>— The Studio Creed</div>
          </div>
        </div>
      </section>

      {/* ══ MARQUEE ═════════════════════════════════════════ */}
      <div style={{ margin:'24px -48px', background:K, padding:'9px 0', overflow:'hidden' }}>
        <div className="mq">
          {Array(4).fill(['KIKO NAVARRO','·','JESSICA MORARI','·','JAVI BEAT','·','ESTRELA PHOTO','·','MANUEL KEVSAX','·','JULIO CUBA','·','NIBANGO','·']).flat().map((t,i)=>(
            <span key={i} className="el" style={{ fontFamily:EL, fontSize:'8px', letterSpacing:'.35em', textTransform:'uppercase', padding:'0 18px', color: t==='·' ? R : 'rgba(240,234,216,0.45)' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ══ WORKS ═══════════════════════════════════════════ */}
      <section id="works" style={{ padding:'32px 0' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:'8px' }}>
          <h2 className="pf" style={{ fontFamily:PF, fontSize:'clamp(2rem,5vw,4.5rem)', fontWeight:900, lineHeight:1, letterSpacing:'-.02em' }}>
            Selected <em style={{ color:R }}>Works</em>
          </h2>
          <span className="el" style={{ fontFamily:EL, fontSize:'8px', color:G, letterSpacing:'.15em' }}>VII Projects</span>
        </div>
        <hr className="thick" />

        {works.map(w=>(
          <div key={w.n} className="wr">
            <span className="wi" style={{ fontFamily:EL, fontSize:'10px', color:G }}>{w.n}</span>
            <div>
              <div className="wn">{w.name}</div>
              <div className="wt">{w.type}</div>
            </div>
            <span className="wa">→</span>
          </div>
        ))}

        {/* Photo strip */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'2px', marginTop:'28px' }} className="col-sm-1">
          {[works[3], works[4], works[5], works[6]].map(w=>(
            <div key={w.n}>
              <div className="hp" style={{ position:'relative', aspectRatio:'1/1' }}>
                <img src={w.img} alt={w.name} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
              </div>
              <div className="pf" style={{ fontFamily:PF, fontSize:'13px', fontWeight:700, color:K, marginTop:'6px' }}>{w.name}</div>
              <div className="el" style={{ fontFamily:EL, fontSize:'7px', letterSpacing:'.15em', textTransform:'uppercase', color:G }}>{w.type}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ GRAPHIC ═════════════════════════════════════════ */}
      <section id="graphic" style={{ padding:'32px 0', borderTop:`4px double ${K}` }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'clamp(20px,4vw,48px)', alignItems:'start' }} className="col-sm-1">
          <div>
            <h2 className="pf rv" style={{ fontFamily:PF, fontSize:'clamp(2rem,5vw,4.5rem)', fontWeight:900, fontStyle:'italic', lineHeight:.9, marginBottom:'20px' }}>
              Graphic<br /><span style={{ color:R }}>Design</span>
            </h2>
            <p className="fl dc rv" style={{ fontFamily:FL, fontSize:'14px', lineHeight:1.9, color:K }}>
              From vinyl sleeves to event flyers — our graphic work lives in the physical world. Crafted to be immediately legible and endlessly remembered.
            </p>
            <div style={{ marginTop:'24px' }}>
              {[
                { cat:'Vinyl Cover', t:'MAMA CALLING',  s:'Buika × Kiko Navarro' },
                { cat:'Vinyl Cover', t:'EL SILENCIO',   s:'Buika × Kiko Navarro' },
                { cat:'Flyer',       t:'VARADERO',      s:'Event Series · Dubai 2023' },
              ].map(g=>(
                <div key={g.t} style={{ padding:'12px 0', borderBottom:`1px solid ${RU}`, display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
                  <div>
                    <div className="pf" style={{ fontFamily:PF, fontSize:'clamp(1.2rem,2.5vw,1.8rem)', fontWeight:700, color:K }}>{g.t}</div>
                    <div className="el" style={{ fontFamily:EL, fontSize:'7px', letterSpacing:'.2em', textTransform:'uppercase', color:G }}>{g.cat}</div>
                  </div>
                  <div className="fl" style={{ fontFamily:FL, fontSize:'12px', fontStyle:'italic', color:G, textAlign:'right', maxWidth:'140px' }}>{g.s}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="el" style={{ fontFamily:EL, fontSize:'7px', letterSpacing:'.25em', textTransform:'uppercase', color:G, marginBottom:'8px' }}>Estrela Photo — Portfolio</div>
            <div className="hp" style={{ position:'relative', aspectRatio:'3/4' }}>
              <img src="/img/portfolios/estrela.jpg" alt="Estrela Photo" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
            </div>
            <p className="fl" style={{ fontFamily:FL, fontSize:'12px', fontStyle:'italic', color:G, marginTop:'8px', lineHeight:1.6 }}>
              Photography portfolio — the images lead, the design follows.
            </p>
          </div>
        </div>
      </section>

      {/* ══ NIBANGO ══════════════════════════════════════════ */}
      <section id="app" style={{ borderTop:`4px double ${K}`, padding:'32px 0' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:'clamp(20px,4vw,48px)', alignItems:'center' }} className="col-sm-1">
          <div>
            <div className="el" style={{ fontFamily:EL, fontSize:'8px', letterSpacing:'.3em', textTransform:'uppercase', color:R, marginBottom:'12px' }}>App Development · Live · iOS · Android · Web</div>
            <h2 className="pf rv" style={{ fontFamily:PF, fontSize:'clamp(4rem,10vw,10rem)', fontWeight:900, fontStyle:'italic', lineHeight:.82, letterSpacing:'-.03em', marginBottom:'24px' }}>
              Nib<span style={{ color:R }}>an</span>go
            </h2>
            <p className="fl dc rv" style={{ fontFamily:FL, fontSize:'14px', lineHeight:1.9, color:K }}>
              The marketplace that actually works. Six categories, four pricing models, real-time chat — and zero commission on any transaction.
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'12px', marginTop:'28px', padding:'16px', border:`1px solid ${RU}` }}>
              {[['6','Categories'],['4','Pricing'],['3','Platforms'],['0%','Commission']].map(([n,l])=>(
                <div key={l} style={{ textAlign:'center', borderRight:`1px solid ${RU}`, paddingRight:'8px' }}>
                  <div className="pf" style={{ fontFamily:PF, fontSize:'2.2rem', fontWeight:900, color:R, lineHeight:1 }}>{n}</div>
                  <div className="el" style={{ fontFamily:EL, fontSize:'7px', letterSpacing:'.1em', textTransform:'uppercase', color:G, marginTop:'4px' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hp" style={{ position:'relative', aspectRatio:'9/16', background:'#0a0a0a' }}>
            <img src="/img/portfolios/nibango-mockup-1.png" alt="Nibango" style={{ width:'100%', height:'100%', objectFit:'contain' }} />
          </div>
        </div>
      </section>

      {/* ══ HOME AGENT ═══════════════════════════════════════ */}
      <section style={{ borderTop:`4px double ${K}`, padding:'32px 0' }}>
        <div style={{ background:`repeating-linear-gradient(45deg,transparent,transparent 12px,rgba(192,40,26,0.025) 12px,rgba(192,40,26,0.025) 24px)`, border:`1px solid ${RU}`, padding:'clamp(16px,3vw,32px)' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr auto', gap:'32px', alignItems:'center' }} className="col-sm-1">
            <div>
              <div style={{ display:'inline-block', background:R, padding:'5px 14px', marginBottom:'20px', fontFamily:EL, fontSize:'8px', letterSpacing:'.3em', textTransform:'uppercase', color:P }}>★ Available for Acquisition</div>
              <h3 className="pf" style={{ fontFamily:PF, fontSize:'clamp(2rem,5vw,5rem)', fontWeight:900, lineHeight:.88, marginBottom:'16px' }}>
                Home <em style={{ color:R }}>Agent</em>
              </h3>
              <p className="fl" style={{ fontFamily:FL, fontSize:'14px', lineHeight:1.85, color:K, maxWidth:'480px', marginBottom:'20px' }}>
                A fully-designed real estate portfolio platform — listings, proforma calculator, lead capture. Built and ready. No development required.
              </p>
              <a href="mailto:info@truelovecreative.es?subject=Home Agent"
                style={{ display:'inline-block', fontFamily:EL, fontSize:'9px', letterSpacing:'.25em', textTransform:'uppercase', background:K, color:P, padding:'12px 24px', textDecoration:'none', transition:'background .15s' }}
                onMouseEnter={e=>(e.currentTarget.style.background=R)} onMouseLeave={e=>(e.currentTarget.style.background=K)}
              >Acquire Now →</a>
            </div>
            <div style={{ position:'relative', width:'clamp(160px,25vw,260px)', aspectRatio:'4/3', flexShrink:0 }}>
              <img src="/img/portfolios/homeagent.png" alt="Home Agent" style={{ width:'100%', height:'100%', objectFit:'contain' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT ════════════════════════════════════════════ */}
      <section id="about" style={{ borderTop:`4px double ${K}`, padding:'32px 0' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1px 1fr', gap:'clamp(16px,3vw,40px)', alignItems:'start' }} className="col-sm-1">
          <div>
            <h2 className="pf" style={{ fontFamily:PF, fontSize:'clamp(2rem,4.5vw,4rem)', fontWeight:900, lineHeight:.88, marginBottom:'24px' }}>
              Design with<br /><em style={{ color:R }}>conviction.</em>
            </h2>
            <p className="fl dc rv" style={{ fontFamily:FL, fontSize:'14px', lineHeight:1.9, color:K, textAlign:'justify' }}>
              True Love Creative was founded in 2015 — not in a WeWork, not in a coffee shop.
              In a room with too many screens and an obsession with getting things right.
              We have since worked with musicians, therapists, photographers, app developers and restaurateurs across Europe and the Middle East.
              Each project is treated as if it were the only one.
            </p>
            <div style={{ marginTop:'20px', padding:'16px', border:`1px solid ${RU}`, background:`rgba(192,40,26,0.03)` }}>
              <div className="pf" style={{ fontFamily:PF, fontSize:'1.1rem', fontWeight:700, fontStyle:'italic', color:R, lineHeight:1.4 }}>
                "We don't do average.<br />We do work we're proud to sign."
              </div>
            </div>
          </div>
          <div style={{ background:RU, alignSelf:'stretch' }} className="hide-sm" />
          <div>
            {[['Founded','2015'],['Base','Dubai, UAE'],['Clients','Musicians · Brands · Startups'],['Services','Web · Graphic · App'],['Languages','ES · EN · AR'],['Email','info@truelovecreative.es'],['Phone','+971 58 532 4519']].map(([l,v])=>(
              <div key={l} style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', padding:'11px 0', borderBottom:`1px solid ${RU}` }}>
                <span className="el" style={{ fontFamily:EL, fontSize:'7px', letterSpacing:'.2em', textTransform:'uppercase', color:G }}>{l}</span>
                <span className="fl" style={{ fontFamily:FL, fontSize:'13px', fontStyle:'italic', color:K, textAlign:'right', maxWidth:'210px' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══════════════════════════════════════════ */}
      <section id="contact" style={{ borderTop:`4px double ${K}`, padding:'48px 0 56px', textAlign:'center' }}>
        <div className="el" style={{ fontFamily:EL, fontSize:'9px', letterSpacing:'.5em', textTransform:'uppercase', color:G, marginBottom:'20px' }}>✦  Commissions Open  ✦</div>
        <h2 className="pf rv" style={{ fontFamily:PF, fontSize:'clamp(3.5rem,13vw,13rem)', fontWeight:900, fontStyle:'italic', lineHeight:.82, letterSpacing:'-.03em', color:K, marginBottom:'32px' }}>
          Let's make<br />something<br /><span style={{ color:R }}>great.</span>
        </h2>
        <hr className="thin" style={{ maxWidth:'360px', margin:'0 auto 28px' }} />
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'10px' }}>
          <a href="mailto:info@truelovecreative.es" className="pf" style={{ fontFamily:PF, fontSize:'clamp(1.1rem,2.5vw,1.6rem)', fontWeight:700, fontStyle:'italic', color:K, textDecoration:'none', transition:'color .15s' }}
            onMouseEnter={e=>(e.currentTarget.style.color=R)} onMouseLeave={e=>(e.currentTarget.style.color=K)}>
            info@truelovecreative.es
          </a>
          <span className="fl" style={{ fontFamily:FL, fontSize:'14px', fontStyle:'italic', color:G }}>+971 58 532 4519 · Dubai, UAE</span>
          <a href="mailto:info@truelovecreative.es"
            style={{ marginTop:'16px', fontFamily:EL, fontSize:'9px', letterSpacing:'.25em', textTransform:'uppercase', background:K, color:P, padding:'15px 40px', textDecoration:'none', transition:'background .15s' }}
            onMouseEnter={e=>(e.currentTarget.style.background=R)} onMouseLeave={e=>(e.currentTarget.style.background=K)}>
            Send Enquiry →
          </a>
        </div>
      </section>

      {/* ══ FOOTER ══════════════════════════════════════════ */}
      <footer style={{ borderTop:`2px solid ${K}`, padding:'14px 0', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'8px' }}>
        <span className="pf" style={{ fontFamily:PF, fontSize:'14px', fontWeight:900, fontStyle:'italic', color:K }}>True Love Creative</span>
        <span className="el" style={{ fontFamily:EL, fontSize:'7px', letterSpacing:'.2em', textTransform:'uppercase', color:G }}>© 2015–2026 · All Rights Reserved · Dubai, UAE</span>
        <span className="el" style={{ fontFamily:EL, fontSize:'7px', letterSpacing:'.15em', color:G }}>truelovecreative.es</span>
      </footer>

    </div>
  )
}
