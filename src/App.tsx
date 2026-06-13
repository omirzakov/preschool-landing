import { useReveal } from './lib/useReveal'
import Nav from './components/Nav'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Roles from './components/Roles'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Schools from './components/Schools'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useReveal()

  return (
    <div className="min-h-screen bg-bg">
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Roles />
        <Benefits />
        <Testimonials />
        <Schools />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
