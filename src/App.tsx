import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import Roles from './components/Roles'
import Pricing from './components/Pricing'
import Schools from './components/Schools'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Nav />
      <Hero />
      <Features />
      <Roles />
      <Pricing />
      <Schools />
      <Contact />
      <Footer />
    </div>
  )
}
