import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { WordsPullUpMultiStyle } from './WordsPullUp'

const PARAGRAPH =
  'Comida, bebida, marca de pet, poeira, suor e ácaros se acumulam no tecido de qualquer estofado: sofás, colchões, cadeiras, tapetes e mais. Você manda fotos pelo WhatsApp, recebe o orçamento, e no horário marcado a equipe vai até a sua casa e higieniza o estofado.'

const PAINS = [
  ['Mancha que não sai', 'Comida, bebida, marca de pet. Você passa o pano e a mancha volta.'],
  ['Rinite e alergia a ácaros', 'Poeira, suor e ácaros se acumulam no tecido e podem piorar alergias.'],
  ['Cheiro de umidade', 'Aquele cheiro de guardado que o aspirador e o spray não tiram.'],
]

function AnimatedLetter({
  char,
  index,
  total,
  progress,
}: {
  char: string
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const charProgress = index / total
  const opacity = useTransform(progress, [charProgress - 0.1, charProgress + 0.05], [0.2, 1])
  return <motion.span style={{ opacity }}>{char}</motion.span>
}

export default function About() {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })
  const chars = PARAGRAPH.split('')

  return (
    <section className="bg-[#17100b] px-4 md:px-6 py-10 md:py-16">
      <div
        className="mx-auto max-w-6xl rounded-2xl md:rounded-[2rem] py-20 md:py-32 px-6 text-center flex flex-col items-center"
        style={{ backgroundColor: '#21170f' }}
      >
        <span className="text-primary text-[10px] sm:text-xs mb-6">Higienização de estofados</span>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9]"
          style={{ color: '#EADBC4' }}
        >
          <WordsPullUpMultiStyle
            segments={[
              { text: 'Estofados limpos,', className: 'font-normal' },
              { text: 'direto na sua casa.', className: 'italic font-serif' },
              { text: 'Mancha, ácaros e cheiro de umidade fora do seu dia a dia.', className: 'font-normal' },
            ]}
          />
        </h2>

        <p ref={ref} className="mt-10 md:mt-14 max-w-2xl text-[#E4D3B8] text-xs sm:text-sm md:text-base">
          {chars.map((c, i) => (
            <AnimatedLetter key={i} char={c} index={i} total={chars.length} progress={scrollYProgress} />
          ))}
        </p>

        <div className="mt-14 md:mt-20 grid md:grid-cols-3 gap-3 w-full text-left">
          {PAINS.map(([title, text]) => (
            <div key={title} className="rounded-2xl bg-[#2e2118] p-6 hover:-translate-y-1 transition-transform">
              <h3 className="text-xl" style={{ color: '#EADBC4' }}>{title}</h3>
              <p className="mt-2 text-sm text-[#A8978A]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
