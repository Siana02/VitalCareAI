import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Dashboard from './components/Dashboard'
import Features from './components/Features'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Dashboard />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
