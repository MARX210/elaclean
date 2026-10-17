import { motion } from 'framer-motion'
import { Armchair, ArrowUpRight, BedDouble, Sofa } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { WordsPullUpMultiStyle } from './WordsPullUp'
import { WA } from '../constants'
import fallback from '../assets/prova-depois.jpg'

const imgs = import.meta.glob('../assets/servicos/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const pick = (name: string) => Object.entries(imgs).find(([p]) => p.includes('/' + name + '.'))?.[1]

const SERVICES: { Icon: LucideIcon; t: string; img?: string; d: string }[] = [
  { Icon: Sofa, t: 'Sofás', img: pick('sofas'), d: 'Tire manchas, poeira e ácaros acumulados no tecido.' },
  {
    Icon: BedDouble,
    t: 'Colchões',
    img: pick('colchoes'),
    d: 'Higienização para dormir em uma cama limpa e sem cheiro de guardado.',
  },
  {
    Icon: Armchair,
    t: 'Cadeiras',
    img: pick('cadeiras') ?? fallback,
    d: 'Assentos de sala de jantar de volta ao aspecto limpo.',
  },
]

export default function Services() {
  return (
    <section className="relative bg-[#17100b] px-4 md:px-6 py-20 md:py-32 overflow-hidden">
      <div className="absolute -left-40 top-1/3 w-[500px] h-[500px] rounded-full bg-[#C69C6D]/10 blur-[120px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <p className="text-primary text-[10px] sm:text-xs mb-4">O que higienizamos</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] max-w-4xl" style={{ color: '#EADBC4' }}>
          <WordsPullUpMultiStyle
            className="!justify-start"
            segments={[
              { text: 'Qualquer estofado da sua casa,', className: 'font-normal' },
              { text: 'limpo de verdade.', className: 'italic font-serif' },
            ]}
          />
        </h2>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SERVICES.map(({ Icon, t, d, img }, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl bg-[#21170f] border border-white/10 hover:border-[#C69C6D]/60 transition-colors p-7 min-h-[300px] lg:min-h-[460px] flex flex-col overflow-hidden"
            >
              {img && (
                <>
                  <img
                    src={img}
                    alt={`${t} higienizados`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17100b] via-[#17100b]/50 to-[#17100b]/10" />
                </>
              )}
              <span className="absolute -top-4 right-4 text-[9rem] font-bold leading-none text-white/[0.03] select-none">
                0{i + 1}
              </span>
              <span className="relative w-14 h-14 rounded-2xl bg-[#2e2118] group-hover:bg-[#C69C6D] transition-colors flex items-center justify-center">
                <Icon className="w-7 h-7 text-primary group-hover:text-[#17100b] transition-colors" />
              </span>
              <h3 className="relative mt-auto text-3xl" style={{ color: '#EADBC4' }}>{t}</h3>
              <p className="relative mt-3 text-sm text-[#A8978A]">{d}</p>
            </motion.div>
          ))}
        </div>

        <a
          href={WA}
          target="_blank"
          rel="noopener"
          className="group mt-3 flex items-center justify-between rounded-3xl bg-primary text-[#17100b] px-7 py-6 md:py-8 hover:bg-[#C69C6D] transition-colors"
        >
          <span className="text-xl md:text-3xl font-medium">Outro tipo de estofado? Mande uma foto no WhatsApp.</span>
          <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:rotate-12 shrink-0" />
        </a>
      </div>
    </section>
  )
}
