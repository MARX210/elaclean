import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check, FileText, MessageCircle, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { WordsPullUpMultiStyle } from './WordsPullUp'
import { WA } from '../constants'
import depois from '../assets/hero-depois.jpg'
import antes from '../assets/hero-antes.jpg'

const STEPS: { n: string; title: string; Icon: LucideIcon; items: string[] }[] = [
  {
    n: '01',
    title: 'Chame no WhatsApp.',
    Icon: MessageCircle,
    items: ['Mande fotos do estofado que quer higienizar.', 'Conte o que está incomodando.', 'Resposta direto no seu celular.'],
  },
  {
    n: '02',
    title: 'Receba o orçamento.',
    Icon: FileText,
    items: [
      'Combine o valor pelo WhatsApp.',
      'Escolha o dia e o horário que ficam bons.',
      'Sem sair de casa para decidir.',
    ],
  },
  {
    n: '03',
    title: 'Higienização na sua casa.',
    Icon: Sparkles,
    items: [
      'A equipe vai até você no horário marcado.',
      'Sofás, colchões, cadeiras, tapetes e outros estofados.',
      'Estofado limpo, sem mancha e sem cheiro de guardado.',
    ],
  },
]

function Card({ index, children, className = '' }: { index: number; children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-2xl overflow-hidden min-h-[380px] lg:min-h-0 lg:h-full ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default function Features() {
  return (
    <section
      id="como-funciona"
      className="relative min-h-screen bg-[#17100b] px-4 md:px-6 py-20 md:py-28 overflow-hidden"
    >
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-12 md:mb-16">
          <WordsPullUpMultiStyle
            className="[&>span]:text-[#EADBC4]"
            segments={[{ text: 'Do WhatsApp ao estofado limpo em 3 passos.', className: 'font-normal' }]}
          />
          <br />
          <WordsPullUpMultiStyle
            segments={[{ text: 'Resultado que dá para ver. Feito na sua casa.', className: 'font-normal text-[#8B7A6C]' }]}
          />
        </h2>

        <div
          id="resultados"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]"
        >
          <Card index={0}>
            <img
              src={depois}
              alt="Estofado de cadeira após a higienização"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17100b]/80 via-transparent to-[#17100b]/20" />
            <span className="absolute top-4 left-4 bg-primary text-[#17100b] text-xs font-medium rounded-full px-3 py-1">
              Depois
            </span>
            <div className="absolute top-4 right-4 w-16 sm:w-20 rounded-lg overflow-hidden border border-primary/40">
              <img src={antes} alt="Estofado de cadeira antes da higienização" className="w-full aspect-[4/5] object-cover" />
              <span
                className="absolute bottom-1 left-1 bg-[#17100b]/80 text-[10px] rounded-full px-2 py-0.5"
                style={{ color: '#EADBC4' }}
              >
                Antes
              </span>
            </div>
            <p className="absolute bottom-6 left-6 right-6 text-xl md:text-2xl" style={{ color: '#EADBC4' }}>
              Seu estofado como novo.
            </p>
          </Card>

          {STEPS.map(({ n, title, Icon, items }, i) => (
            <Card key={n} index={i + 1} className="bg-[#2e2118] p-5 flex flex-col">
              <span className="w-10 h-10 sm:w-12 sm:h-12 rounded bg-[#17100b]/50 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </span>
              <h3 className="mt-5 text-lg md:text-xl" style={{ color: '#EADBC4' }}>
                {title} <span className="text-[#8B7A6C] text-sm align-top">{n}</span>
              </h3>
              <ul className="mt-4 space-y-3 flex-1">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#A8978A]">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WA}
                target="_blank"
                rel="noopener"
                className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary hover:gap-2.5 transition-all"
              >
                Pedir orçamento <ArrowRight className="w-4 h-4 -rotate-45" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
