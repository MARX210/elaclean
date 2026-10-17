import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { animate, useInView } from 'framer-motion'

function CountUp({ to, dec = 0 }: { to: number; dec?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (inView) {
      const controls = animate(0, to, { duration: 1.8, ease: 'easeOut', onUpdate: setValue })
      return () => controls.stop()
    }
  }, [inView, to])

  return <span ref={ref}>{value.toFixed(dec).replace('.', ',')}</span>
}

export default function Stats() {
  const items: [ReactNode, string][] = [
    [<CountUp key="a" to={4.8} dec={1} />, 'nota no Google'],
    [<CountUp key="b" to={16} />, 'avaliações de clientes'],
    ['Na sua casa', 'com horário marcado'],
    ['8h às 18h', 'seg a sex · sáb até 12h'],
  ]

  return (
    <section className="bg-[#17100b] px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 border-y border-white/10">
        {items.map(([value, label], i) => (
          <div
            key={i}
            className="py-10 md:py-14 px-4 md:px-8 border-white/10 lg:border-l first:border-l-0 text-center lg:text-left"
          >
            <div className="text-4xl md:text-6xl font-medium tracking-tight" style={{ color: '#EADBC4' }}>
              {value}
            </div>
            <div className="mt-2 text-xs md:text-sm text-[#8B7A6C]">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
