import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const HEADLINE = 'Empowering healthier lives\nthrough intelligent care.'

function useTypewriter(text, speed = 45) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i += 1
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(id)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])

  return { displayed, done }
}

export default function Hero() {
  const subRef = useRef(null)
  const btnRef = useRef(null)
  const { displayed, done } = useTypewriter(HEADLINE, 45)

  useEffect(() => {
    if (!done) return
    const els = [subRef.current, btnRef.current]
    els.forEach((el, i) => {
      if (!el) return
      el.style.animationDelay = `${i * 0.3}s`
      el.classList.add('animate-in')
    })
  }, [done])

  const handleRipple = (e) => {
    const btn = e.currentTarget
    const rect = btn.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const circle = document.createElement('span')
    circle.className = 'ripple-effect'
    circle.style.cssText = `width:${size}px;height:${size}px;left:${
      e.clientX - rect.left - size / 2
    }px;top:${e.clientY - rect.top - size / 2}px`
    btn.appendChild(circle)
    setTimeout(() => circle.remove(), 600)
  }

  const lines = displayed.split('\n')

  return (
    <section className="hero" aria-label="Hero section">
      {/* Floating particle layer */}
      <div className="hero__particles" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="hero__particle"
            style={{
              width: `${2 + (i % 4) * 1.5}px`,
              height: `${2 + (i % 4) * 1.5}px`,
              left: `${(i * 4.7 + 2) % 96}%`,
              top: `${(i * 6.3 + 5) % 85}%`,
              animationDuration: `${6 + (i % 5) * 1.2}s`,
              animationDelay: `${-(i * 0.4)}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative medical SVG overlay */}
      <div className="hero__bg-icons" aria-hidden="true">
        <svg className="hero__bg-svg" viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Animated ECG heartbeat line */}
          <polyline
            className="hero__ecg"
            points="50,300 150,300 200,200 250,400 300,250 350,320 400,300 500,300"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Pill shape */}
          <rect x="700" y="80" width="120" height="50" rx="25"
            fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
          {/* Cross / plus */}
          <g opacity="0.1" stroke="rgba(255,255,255,0.18)" strokeWidth="3" strokeLinecap="round">
            <line x1="820" y1="400" x2="820" y2="480" />
            <line x1="780" y1="440" x2="860" y2="440" />
          </g>
          {/* Circles */}
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

        {/* Headline — typewriter */}
        <h1 className="hero__headline" aria-label={HEADLINE.replaceAll('\n', ' ')}>
          {lines[0]}
          {lines.length > 1 && (
            <>
              <br />
              <span className="hero__headline-accent">{lines[1]}</span>
            </>
          )}
          {!done && <span className="hero__cursor" aria-hidden="true">|</span>}
        </h1>

        {/* Subheadline */}
        <p className="hero__sub hero__anim" ref={subRef}>
          VitalCare AI blends cutting-edge machine learning with compassionate
          healthcare — giving patients, caregivers, and providers the insights
          they need to act with confidence.
        </p>

        {/* CTA Buttons */}
        <div className="hero__buttons hero__anim" ref={btnRef}>
          <button
            className="btn btn--primary"
            aria-label="Get started with VitalCare AI"
            onClick={handleRipple}
          >
            Get Started
          </button>
          <button
            className="btn btn--secondary"
            aria-label="Learn more about VitalCare AI"
            onClick={handleRipple}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Bottom wave divider — transitions into dashboard */}
      <div className="hero__wave-bottom" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,20 C360,70 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F9FAFB" />
        </svg>
      </div>
    </section>
  )
}
