import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'

const FAQS = [
  ['O que vocês higienizam?', 'Sofás, colchões, cadeiras e tapetes. Para outro tipo de estofado, mande uma foto no WhatsApp.'],
  ['Como funciona o orçamento?', 'Você envia fotos do estofado pelo WhatsApp e recebe o valor.'],
  [
    'Quais são os dias e horários de atendimento?',
    'Segunda a sexta, das 8h às 18h, e sábado, das 8h às 12h. Domingo fechado.',
  ],
  ['Vocês atendem fora de Francisco Beltrão?', 'Atendemos Francisco Beltrão e região.'],
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-[#17100b] px-4 md:px-6 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary text-[10px] sm:text-xs mb-4">Perguntas frequentes</p>
        <h2 className="text-4xl md:text-6xl leading-[0.95] mb-10" style={{ color: '#EADBC4' }}>
          Tire suas dúvidas <span className="italic font-serif">antes de chamar.</span>
        </h2>

        {FAQS.map(([q, a], i) => (
          <div key={q} className="border-t border-white/10 last:border-b">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-6 text-left"
            >
              <span className="text-lg md:text-2xl" style={{ color: '#EADBC4' }}>{q}</span>
              <motion.span
                animate={{ rotate: open === i ? 45 : 0 }}
                className="shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-primary"
              >
                <Plus className="w-5 h-5" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden text-[#A8978A] md:text-lg pr-14"
                >
                  <span className="block pb-6">{a}</span>
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}
