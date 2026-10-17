import { useRef, useState } from 'react'
import { ChevronsLeftRight } from 'lucide-react'
import { WordsPullUpMultiStyle } from './WordsPullUp'
import chairsBefore from '../assets/prova-antes.jpg'
import chairsAfter from '../assets/prova-depois.jpg'
import seatBefore from '../assets/hero-antes.jpg'
import seatAfter from '../assets/hero-depois.jpg'

function Compare({ before, after, alt, ratio }: { before: string; after: string; alt: string; ratio: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(50)
  const move = (x: number) => {
    const r = ref.current!.getBoundingClientRect()
    setPos(Math.min(100, Math.max(0, ((x - r.left) / r.width) * 100)))
  }

  return (
    <div
      ref={ref}
      className={`relative ${ratio} rounded-3xl overflow-hidden cursor-ew-resize select-none`}
      style={{ touchAction: 'pan-y' }}
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId)
        move(e.clientX)
      }}
      onPointerMove={(e) => {
        if (e.buttons) move(e.clientX)
      }}
    >
      <img src={after} alt={`${alt} depois`} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      <img
        src={before}
        alt={`${alt} antes`}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        draggable={false}
      />
      <span
        className="absolute top-4 left-4 bg-[#17100b]/70 backdrop-blur text-xs rounded-full px-3 py-1"
        style={{ color: '#EADBC4' }}
      >
        Antes
      </span>
      <span className="absolute top-4 right-4 bg-primary text-[#17100b] text-xs font-medium rounded-full px-3 py-1">
        Depois
      </span>
      <div className="absolute inset-y-0 w-0.5 bg-primary" style={{ left: `${pos}%` }}>
        <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 w-12 h-12 rounded-full bg-primary text-[#17100b] flex items-center justify-center shadow-xl">
          <ChevronsLeftRight className="w-6 h-6" />
        </span>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  return (
    <section id="resultados" className="bg-[#17100b] px-4 md:px-6 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary text-[10px] sm:text-xs mb-4 text-center">Antes e depois</p>
        <h2
          className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-center mb-4"
          style={{ color: '#EADBC4' }}
        >
          <WordsPullUpMultiStyle
            segments={[
              { text: 'Resultado que', className: 'font-normal' },
              { text: 'dá para ver.', className: 'italic font-serif' },
            ]}
          />
        </h2>
        <p className="text-center text-[#8B7A6C] text-sm md:text-base mb-12">
          Arraste para comparar. Trabalhos feitos pela ElaClean.
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          <Compare before={chairsBefore} after={chairsAfter} alt="Cadeiras de jantar" ratio="aspect-square" />
          <Compare before={seatBefore} after={seatAfter} alt="Assento de cadeira" ratio="aspect-square" />
        </div>
      </div>
    </section>
  )
}
