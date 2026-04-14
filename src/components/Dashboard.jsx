import { useEffect, useRef } from 'react'
import { User, Calendar, Activity } from 'lucide-react'
import './Dashboard.css'

/* ── Mini Charts ── */
function MiniBarChart() {
  const bars = [22, 35, 28, 42, 31, 38, 45]
  return (
    <svg className="mini-chart" viewBox="0 0 76 44" width="76" height="44" aria-hidden="true">
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4DA6FF" />
          <stop offset="100%" stopColor="#3DDC97" />
        </linearGradient>
      </defs>
      {bars.map((h, i) => (
        <rect
          key={i}
          className="mini-bar"
          x={i * 10 + 3}
          y={44 - h}
          width="7"
          height={h}
          rx="2"
          fill="url(#barGrad)"
          opacity="0.85"
          style={{ animationDelay: `${i * 0.08}s` }}
        />
      ))}
    </svg>
  )
}

function MiniLineChart() {
  return (
    <svg className="mini-chart" viewBox="0 0 80 44" width="80" height="44" aria-hidden="true">
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3DDC97" />
          <stop offset="100%" stopColor="#4DA6FF" />
        </linearGradient>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3DDC97" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#3DDC97" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,32 L10,24 L20,27 L30,14 L40,20 L50,9 L60,15 L70,7 L80,11 L80,44 L0,44 Z"
        fill="url(#areaGrad)"
      />
      <polyline
        className="mini-line"
        points="0,32 10,24 20,27 30,14 40,20 50,9 60,15 70,7 80,11"
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MiniArcChart() {
  const r = 18
  const circumference = 2 * Math.PI * r  // ≈ 113.1
  return (
    <svg className="mini-chart" viewBox="0 0 60 44" width="60" height="44" aria-hidden="true">
      <defs>
        <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="100%" stopColor="#ffb347" />
        </linearGradient>
      </defs>
      <circle cx="30" cy="28" r={r} fill="none" stroke="rgba(255,107,107,0.15)" strokeWidth="5" />
      <circle
        className="mini-arc"
        cx="30"
        cy="28"
        r={r}
        fill="none"
        stroke="url(#arcGrad)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={`0 ${circumference}`}
        transform="rotate(-90 30 28)"
        style={{ '--circ': circumference }}
      />
    </svg>
  )
}

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
    direction: 'left',
    chart: 'bar',
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
    direction: 'bottom',
    chart: 'line',
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
    direction: 'right',
    chart: 'arc',
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

  const handleTilt = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14
    card.style.transition = 'transform 0.06s ease, box-shadow 0.12s ease'
    card.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) translateY(-6px) scale(1.01)`
    card.style.boxShadow = '0 16px 48px rgba(61, 220, 151, 0.28)'
  }

  const handleTiltReset = (e) => {
    const card = e.currentTarget
    card.style.transition = 'transform 0.4s ease, box-shadow 0.35s ease'
    card.style.transform = ''
    card.style.boxShadow = ''
  }

  return (
    <section className="dashboard" id="dashboard" aria-label="Dashboard preview" ref={sectionRef}>
      {/* Organic blobs */}
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
              <article
                className={`dash-card dash-card--from-${card.direction}`}
                key={card.title}
                onMouseMove={handleTilt}
                onMouseLeave={handleTiltReset}
              >
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
                <div className="dash-card__chart">
                  {card.chart === 'bar' && <MiniBarChart />}
                  {card.chart === 'line' && <MiniLineChart />}
                  {card.chart === 'arc' && <MiniArcChart />}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
