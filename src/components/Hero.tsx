import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Star } from 'lucide-react'
import { WordsPullUp } from './WordsPullUp'
import { WA } from '../constants'
import logo from '../assets/logo.png'
import bg from '../assets/prova-depois.jpg'

const NAV = [
  ['Como funciona', '#como-funciona'],
  ['Resultados', '#resultados'],
  ['Avaliações', '#avaliacoes'],
  ['Horários', '#contato'],
  ['Orçamento', WA],
]

export default function Hero() {
  return (
    <section className="h-screen p-4 md:p-6 bg-[#17100b]">
      <div className="relative h-full w-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-[#21170f]">
        <motion.img
          src={bg}
          alt="Cadeiras de jantar com estofado limpo após a higienização"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: 'easeOut' }}
        />
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#17100b]/30 via-transparent to-[#17100b]/60" />

        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-[#17100b] rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 max-w-full">
          <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 text-[10px] sm:text-xs md:text-sm whitespace-nowrap">
            {NAV.map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="transition-colors"
                  style={{ color: 'rgba(234, 219, 196, 0.8)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#EADBC4')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(234, 219, 196, 0.8)')}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute -right-24 top-10 w-[420px] h-[420px] rounded-full bg-[#C69C6D]/25 blur-[110px] pointer-events-none" />

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden md:flex absolute z-20 top-24 right-8 items-center gap-3 rounded-2xl bg-[#17100b]/50 backdrop-blur-md border border-white/15 px-5 py-4"
        >
          <span className="text-4xl font-medium" style={{ color: '#EADBC4' }}>4,8</span>
          <span>
            <span className="flex gap-0.5 text-primary">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </span>
            <span className="text-xs text-primary/70">16 avaliações no Google</span>
          </span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden md:flex absolute z-20 top-48 right-24 items-center gap-2 rounded-2xl bg-[#17100b]/50 backdrop-blur-md border border-white/15 px-5 py-3 text-sm text-primary"
        >
          <MapPin className="w-4 h-4 text-[#C69C6D]" /> Atendimento na sua casa
        </motion.div>

        <img
          src={logo}
          alt="ElaClean Higienização de Estofados"
          className="absolute z-20 top-14 left-5 w-32 md:top-6 md:left-8 md:w-44 drop-shadow-lg"
        />

        <div className="absolute bottom-0 left-0 right-0 z-10 px-4 md:px-8 pb-4 md:pb-6">
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-12 md:col-span-8">
              <h1
                className="font-medium leading-[0.85] tracking-[-0.07em] text-[20vw] sm:text-[19vw] md:text-[17vw] lg:text-[15vw] xl:text-[14vw]"
                style={{ color: '#EADBC4' }}
              >
                <WordsPullUp text="ElaClean" showAsterisk />
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4 flex flex-col gap-5 pb-4 md:pb-8">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-primary/70 text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
              >
                Higienização de todos os estofados, de sofás e colchões a cadeiras e tapetes, direto na sua casa, com horário
                marcado, em Francisco Beltrão, PR e região.
              </motion.p>
              <motion.a
                href={WA}
                target="_blank"
                rel="noopener"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group self-start inline-flex items-center gap-2 hover:gap-3 transition-all bg-primary rounded-full pl-5 pr-1.5 py-1.5 text-[#17100b] font-medium text-sm sm:text-base"
              >
                Pedir orçamento
                <span className="bg-[#17100b] rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform group-hover:scale-110">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#EADBC4' }} />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
