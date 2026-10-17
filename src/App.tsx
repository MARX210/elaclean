import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Features from './components/Features'
import BeforeAfter from './components/BeforeAfter'
import Stats from './components/Stats'
import Faq from './components/Faq'
import Contact from './components/Contact'
import { WA } from './constants'
import { MessageCircle } from 'lucide-react'

export default function App() {
  return (
    <main className="bg-[#17100b] text-primary">
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Features />
      <BeforeAfter />
      <Stats />
      <Faq />
      <Contact />
      <a
        href={WA}
        target="_blank"
        rel="noopener"
        aria-label="Chamar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary text-[#17100b] font-medium pl-4 pr-5 py-3 shadow-2xl hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-5 h-5" /> WhatsApp
      </a>
    </main>
  )
}
