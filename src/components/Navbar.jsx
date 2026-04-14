import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <a href="#" className="navbar__logo" aria-label="VitalCare AI home">
        <span className="navbar__logo-v" aria-hidden="true">♥</span>
        <span className="navbar__logo-text">
          <span className="navbar__logo-vital">Vital</span>
          <span className="navbar__logo-care">Care</span>
          <span className="navbar__logo-ai"> AI</span>
        </span>
      </a>

      <ul className="navbar__links" role="list">
        <li><a href="#dashboard" className="navbar__link">Platform</a></li>
        <li><a href="#features" className="navbar__link">Features</a></li>
        <li><a href="#" className="navbar__link">About</a></li>
      </ul>

      <button className="navbar__cta" aria-label="Request a demo">
        Request Demo
      </button>
    </nav>
  )
}
