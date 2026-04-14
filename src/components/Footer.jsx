import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo-v" aria-hidden="true">♥</span>
          <span className="footer__logo-text">VitalCare AI</span>
        </div>
        <p className="footer__tagline">
          Empowering healthier lives through intelligent care.
        </p>
        <p className="footer__copy">© {new Date().getFullYear()} VitalCare AI. All rights reserved.</p>
      </div>
    </footer>
  )
}
