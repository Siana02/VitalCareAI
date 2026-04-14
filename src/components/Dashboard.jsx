import { useEffect, useRef } from 'react'
import { User, Calendar, Activity } from 'lucide-react'
import './Dashboard.css'

const cards = [
  {
    icon: User,
    iconColor: 'var(--color-sky-blue)',
    title: 'Patient Analytics',
    description:
      'Real-time insights into patient health trends, vitals, and history — all in one place.',
    stat: '2,847 patients',
    statLabel: 'active today',
    animClass: 'icon-pulse',
  },
  {
    icon: Calendar,
    iconColor: 'var(--color-mint-green)',
    title: 'Appointment Scheduling',
    description:
      'AI-optimised scheduling reduces no-shows and maximises care availability across clinics.',
    stat: '98%',
    statLabel: 'booking accuracy',
    animClass: 'icon-flip',
  },
  {
    icon: Activity,
    iconColor: 'var(--color-coral)',
    title: 'Predictive Diagnostics',
    description:
      'Early detection algorithms flag risks before they escalate, empowering proactive care.',
    stat: '94%',
    statLabel: 'diagnostic precision',
    animClass: 'icon-shimmer',
  },
]

export default function Dashboard() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardEls = entry.target.querySelectorAll('.dash-card')
            cardEls.forEach((card, i) => {
              setTimeout(() => card.classList.add('visible'), i * 150)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="dashboard" id="dashboard" aria-label="Dashboard preview" ref={sectionRef}>
      {/* Decorative organic blobs */}
      <div className="dashboard__blob dashboard__blob--1" aria-hidden="true" />
      <div className="dashboard__blob dashboard__blob--2" aria-hidden="true" />

      <div className="dashboard__inner">
        <span className="section-badge">Platform Preview</span>
        <h2 className="section-heading">
          Healthcare intelligence,<br />made <span className="text-gradient">beautifully simple.</span>
        </h2>
        <p className="section-sub">
          Three core modules, one unified platform — giving every stakeholder the
          clarity they need to deliver exceptional care.
        </p>

        <div className="dash-cards">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <article className="dash-card" key={card.title}>
                <div
                  className={`dash-card__icon-wrap ${card.animClass}`}
                  style={{ '--icon-color': card.iconColor }}
                  aria-hidden="true"
                >
                  <Icon size={32} strokeWidth={1.75} color={card.iconColor} />
                </div>
                <h3 className="dash-card__title">{card.title}</h3>
                <p className="dash-card__desc">{card.description}</p>
                <div className="dash-card__stat">
                  <span className="dash-card__stat-num" style={{ color: card.iconColor }}>
                    {card.stat}
                  </span>
                  <span className="dash-card__stat-label">{card.statLabel}</span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
