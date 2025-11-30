import React from 'react'

export default function Hero(){
  return (
    <section className="hero" aria-label="Introduction">
      <div className="left">
        <h1>Compassionate behavioral health care, close to home.</h1>
        <p>We offer evidence-based therapy, counseling and psychiatric care in a safe, respectful environment.</p>
        <div style={{display:'flex',gap:12,alignItems:'center',marginTop:14}}>
          <a href="/services" className="cta">Explore Services</a>
          <a href="tel:+911234567890" style={{padding:'10px 14px',borderRadius:10,background:'transparent',border:'1px solid rgba(15,23,42,0.06)'}}>Call Us</a>
        </div>
      </div>

      <div className="card" role="img" aria-label="Illustration">
        <h3 style={{marginTop:0}}>Why choose us?</h3>
        <ul style={{marginTop:8}}>
          <li>Multidisciplinary team of clinicians</li>
          <li>Patient-centered care plans</li>
          <li>Confidential & evidence-based therapies</li>
        </ul>
      </div>
    </section>
  )
}
