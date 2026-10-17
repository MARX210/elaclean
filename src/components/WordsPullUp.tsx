import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  text: string
  className?: string
  showAsterisk?: boolean
  style?: React.CSSProperties
}

export function WordsPullUp({ text, className = '', showAsterisk = false, style }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const words = text.split(' ')

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : '0.25em' }}
          >
            {showAsterisk && isLast ? (
              <>
                {word.slice(0, -1)}
                <span className="relative inline-block">
                  {word.slice(-1)}
                  <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
                </span>
              </>
            ) : (
              word
            )}
          </motion.span>
        )
      })}
    </span>
  )
}

interface Segment {
  text: string
  className?: string
}

export function WordsPullUpMultiStyle({
  segments,
  className = '',
}: {
  segments: Segment[]
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const words = segments.flatMap((seg) =>
    seg.text.split(' ').filter(Boolean).map((w) => ({ word: w, className: seg.className ?? '' }))
  )

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block ${w.className}`}
          style={{ marginRight: '0.25em' }}
        >
          {w.word}
        </motion.span>
      ))}
    </span>
  )
}
