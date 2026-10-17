import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { WordsPullUpMultiStyle } from './WordsPullUp'
import { MAPS, WA } from '../constants'
import logo from '../assets/logo.png'

interface Review {
  quote: string
  who: string
  url?: string | null
}

const FALLBACK: Review[] = [
  { quote: '“Excelente trabalho e valor, super recomendo!”', who: 'Hilda V.' },
  { quote: '“Excelente atendimento e o serviço impecável!”', who: 'Renan G.' },
  { quote: '“Me surpreendi com o resultado, qualidade no serviço…”', who: 'Maria Helena T.' },
]

const HOURS = [
  ['Segunda a sexta', '8h às 18h'],
  ['Sábado', '8h às 12h'],
  ['Domingo', 'Fechado'],
]

export default function Contact() {
  const [reviews, setReviews] = useState<Review[]>(FALLBACK)
  const [rating, setRating] = useState('4,8')
  const [count, setCount] = useState(16)

  useEffect(() => {
    fetch('/api/reviews')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => {
        if (d.rating) setRating(Number(d.rating).toFixed(1).replace('.', ','))
        if (d.count) setCount(d.count)
        const live: Review[] = (d.reviews || [])
          .filter((v: { rating: number; text: string }) => v.rating >= 4 && v.text)
          .slice(0, 3)
          .map((v: { text: string; when?: string; author: string; authorUrl?: string }) => ({
            quote: `“${v.text.length > 160 ? v.text.slice(0, 157) + '…' : v.text}”`,
            who: v.when ? `${v.author} · ${v.when}` : v.author,
            url: v.authorUrl,
          }))
        if (live.length) setReviews(live)
      })
      .catch(() => {})
  }, [])

  return (
    <section id="avaliacoes" className="bg-[#17100b] px-4 md:px-6 pb-10 md:pb-16">
      <div className="mx-auto max-w-6xl grid gap-3 md:grid-cols-2">
        <div className="rounded-2xl p-6 md:p-10" style={{ backgroundColor: '#21170f' }}>
          <p className="text-primary text-[10px] sm:text-xs mb-4">Avaliações no Google</p>
          <div className="flex items-end gap-3">
            <span className="text-6xl md:text-7xl leading-none" style={{ color: '#EADBC4' }}>{rating}</span>
            <div className="pb-1">
              <div className="flex gap-0.5 text-primary">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-[#8B7A6C] text-xs mt-1">{count} avaliações</p>
            </div>
          </div>
          <ul className="mt-6 space-y-4">
            {reviews.map((r) => (
              <li key={r.who} className="border-t border-white/10 pt-4">
                <p className="text-sm md:text-base text-primary/90">{r.quote}</p>
                <p className="text-xs text-[#8B7A6C] mt-1">
                  {r.url ? (
                    <a href={r.url} target="_blank" rel="noopener" className="underline">{r.who}</a>
                  ) : (
                    r.who
                  )}{' '}
                  · Google
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div id="contato" className="rounded-2xl p-6 md:p-10 flex flex-col" style={{ backgroundColor: '#2e2118' }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl leading-[0.95]" style={{ color: '#EADBC4' }}>
            <WordsPullUpMultiStyle
              className="!justify-start"
              segments={[
                { text: 'Todos os seus estofados', className: 'font-normal' },
                { text: 'limpos esta semana.', className: 'italic font-serif' },
              ]}
            />
          </h2>
          <p className="mt-4 text-sm text-[#A8978A]">
            Francisco Beltrão, PR e região. Sofá, colchão, cadeira, tapete e outros estofados. Mande uma foto no WhatsApp e
            peça seu orçamento.
          </p>
          <ul className="mt-6 text-sm">
            {HOURS.map(([day, time]) => (
              <li key={day} className="flex justify-between border-t border-white/10 py-2.5">
                <span className="text-[#A8978A]">{day}</span>
                <span className="text-primary">{time}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href={WA}
              target="_blank"
              rel="noopener"
              whileHover={{ scale: 1.02 }}
              className="group inline-flex items-center gap-2 hover:gap-3 transition-all bg-primary rounded-full pl-5 pr-1.5 py-1.5 text-[#17100b] font-medium text-sm sm:text-base"
            >
              Chamar no WhatsApp
              <span className="bg-[#17100b] rounded-full w-9 h-9 flex items-center justify-center transition-transform group-hover:scale-110">
                <ArrowRight className="w-4 h-4" style={{ color: '#EADBC4' }} />
              </span>
            </motion.a>
            <a href={MAPS} target="_blank" rel="noopener" className="text-sm text-primary underline underline-offset-4">
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>

      <footer className="mx-auto max-w-6xl mt-8 pb-4 text-center text-xs text-[#8B7A6C] space-y-1">
        <img src={logo} alt="ElaClean Higienização de Estofados" className="mx-auto w-40 mb-3" />
        <p>Francisco Beltrão, PR e região · WhatsApp (46) 99982-0653</p>
        <p>
          Instagram:{' '}
          <a
            className="underline"
            href="https://www.instagram.com/elaclean.higienizacao.fb/"
            target="_blank"
            rel="noopener"
          >
            @elaclean.higienizacao.fb
          </a>
        </p>
        <p className="pt-5 mt-5 border-t border-white/10 text-[11px] tracking-[0.2em] uppercase text-[#8B7A6C]">
          Desenvolvido por <span className="text-primary">MV_NEXUS</span>{' '}
          <span className="mx-1.5 text-[#C69C6D]">|</span> Desenvolvedor Web
        </p>
      </footer>
    </section>
  )
}
