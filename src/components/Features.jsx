import { useEffect, useRef } from 'react'
import { Shield, Heart, Smartphone, Brain } from 'lucide-react'
import './Features.css'

const features = [
  {
    icon: Shield,
    color: 'var(--color-mint-green)',
    bgColor: 'rgba(61,220,151,0.12)',
    title: 'Enterprise Security',
    description:
      'HIPAA-compliant data handling, end-to-end encryption, and role-based access ensure patient data remains private and protected.',
    animClass: 'feat-icon--rotate',
    feat: 'security',
    badge: 'HIPAA Compliant',
  },
  {
    icon: Heart,
    color: 'var(--color-coral)',
    bgColor: 'rgba(255,107,107,0.12)',
    title: 'Compassionate Care',
    description:
      'Human-centred design keeps clinicians and patients at the heart of every feature — technology that serves people, not the other way around.',
    animClass: 'feat-icon--pulse',
    feat: 'care',
    badge: 'Patient-First',
  },
  {
    icon: Smartphone,
    color: 'var(--color-sky-blue)',
    bgColor: 'rgba(77,166,255,0.12)',
    title: 'Telehealth Ready',
    description:
      'Connect patients and providers from anywhere. Full-featured video consultations, remote monitoring, and messaging built in.',
    animClass: 'feat-icon--glow',
    feat: 'telehealth',
    badge: 'Always Available',
  },
  {
    icon: Brain,
    color: 'url(#brainGrad)',
    bgColor: 'rgba(77,166,255,0.08)',
    title: 'AI-Powered Insights',
    description:
      'From predictive risk scoring to treatment recommendations, our models surface what matters most — right when clinicians need it.',
    animClass: 'feat-icon--neural',
    feat: 'ai',
    badge: 'AI-Powered',
    gradient: true,
  },
]

export default function Features() {
  const sectionRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feat-card')
            cards.forEach((card, i) => {
              setTimeout(() => card.classList.add('visible'), i * 130)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e) => {
    if (!glowRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    glowRef.current.style.opacity = '1'
    glowRef.current.style.left = `${e.clientX - rect.left}px`
    glowRef.current.style.top = `${e.clientY - rect.top}px`
  }

  const handleMouseLeave = () => {
    if (glowRef.current) glowRef.current.style.opacity = '0'
  }

  return (
    <section
      className="features"
      id="features"
      aria-label="Features"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Cursor glow trail */}
      <div className="features__glow-trail" ref={glowRef} aria-hidden="true" />

      {/* Wave divider from dashboard section */}
      <div className="features__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3DDC97" />
              <stop offset="100%" stopColor="#FF6B6B" />
            </linearGradient>
          </defs>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="url(#waveGrad)" />
        </svg>
      </div>

      <div className="features__inner">
        <span className="section-badge">Why VitalCare AI</span>
        <h2 className="section-heading">
          Built for the future of<br />
          <span className="text-gradient">healthcare.</span>
        </h2>
        <p className="section-sub">
          Four pillars that define everything we build — security, empathy,
          accessibility, and intelligence.
        </p>

        <div className="feat-grid">
          {features.map((feat) => {
            const Icon = feat.icon
            return (
              <article className="feat-card" key={feat.title} data-feat={feat.feat}>
                {/* SVG gradient definition for Brain icon */}
                {feat.gradient && (
                  <svg width="0" height="0" style={{ position: 'absolute' }}>
                    <defs>
                      <linearGradient id="brainGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#4DA6FF" />
                        <stop offset="100%" stopColor="#3DDC97" />
                      </linearGradient>
                    </defs>
                  </svg>
                )}
                <div
                  className={`feat-card__icon ${feat.animClass}`}
                  style={{ '--feat-color': feat.color, background: feat.bgColor }}
                  aria-hidden="true"
                >
                  <Icon
                    size={30}
                    strokeWidth={1.75}
                    stroke={feat.gradient ? 'url(#brainGrad)' : feat.color}
                  />
                  {/* Microcopy badge tooltip */}
                  <span className="feat-badge" aria-hidden="true">{feat.badge}</span>
                </div>
                <h3
                  className="feat-card__title"
                  style={{ color: feat.gradient ? 'var(--color-sky-blue)' : feat.color }}
                >
                  {feat.title}
                </h3>
                <p className="feat-card__desc">{feat.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
