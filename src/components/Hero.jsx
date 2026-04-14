import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const btnRef = useRef(null)

  useEffect(() => {
    const els = [headlineRef.current, subRef.current, btnRef.current]
    els.forEach((el, i) => {
      if (!el) return
      el.style.animationDelay = `${i * 0.25}s`
      el.classList.add('animate-in')
    })
  }, [])

  return (
    <section className="hero" aria-label="Hero section">
      {/* Decorative medical icon overlay */}
      <div className="hero__bg-icons" aria-hidden="true">
        <svg className="hero__bg-svg" viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Heartbeat line */}
          <polyline
            points="50,300 150,300 200,200 250,400 300,250 350,320 400,300 500,300"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Pill shape top right */}
          <rect x="700" y="80" width="120" height="50" rx="25"
            fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
          {/* Cross / plus */}
          <g opacity="0.1" stroke="rgba(255,255,255,0.18)" strokeWidth="3" strokeLinecap="round">
            <line x1="820" y1="400" x2="820" y2="480" />
            <line x1="780" y1="440" x2="860" y2="440" />
          </g>
          {/* Small circle */}
          <circle cx="80" cy="500" r="40" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
          <circle cx="600" cy="50" r="25" fill="rgba(255,255,255,0.06)" />
        </svg>
      </div>

      <div className="hero__content">
        {/* Logo */}
        <div className="hero__logo" aria-label="VitalCare AI logo">
          <span className="hero__logo-v" aria-hidden="true">♥</span>
          <span className="hero__logo-text">ital<span className="hero__logo-care">Care</span> AI</span>
        </div>

        {/* Headline */}
        <h1 className="hero__headline hero__anim" ref={headlineRef}>
          Empowering healthier lives<br />
          <span className="hero__headline-accent">through intelligent care.</span>
        </h1>

        {/* Subheadline */}
        <p className="hero__sub hero__anim" ref={subRef}>
          VitalCare AI blends cutting-edge machine learning with compassionate
          healthcare — giving patients, caregivers, and providers the insights
          they need to act with confidence.
        </p>

        {/* CTA Buttons */}
        <div className="hero__buttons hero__anim" ref={btnRef}>
          <button className="btn btn--primary" aria-label="Get started with VitalCare AI">
            Get Started
          </button>
          <button className="btn btn--secondary" aria-label="Learn more about VitalCare AI">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
