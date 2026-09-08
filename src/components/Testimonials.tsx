import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Badge, SectionHeading } from './shared/ui'
import { Reveal, EASE } from './shared/Reveal'
import { TESTIMONIALS_ROW1, TESTIMONIALS_ROW2, type Testimonial } from '../data/content'

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-ink" fill="currentColor" aria-hidden>
      <use href="/icons.svg#star" />
    </svg>
  )
}

function Stars() {
  return (
    <div className="flex gap-[2px]">
      {[...Array(5)].map((_, i) => (
        <Star key={i} />
      ))}
    </div>
  )
}

/**
 * Reference testimonial card: 339x181, white bg, r16 (from framer token), p20,
 * avatar 32px r40, name 20px/500 ink, 5 stars 16px, quote 16px gray-2.
 * Row: Framer slideshow axis-x, gap 16px (desktop) / 20px (mobile), cards 29.41% wide,
 * arrows (left/right 32px) centered below, draggable.
 */
function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="flex h-full w-full flex-col gap-4 rounded-2xl bg-white p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <img
            src={t.avatar}
            alt={t.name}
            className="h-8 w-8 rounded-full object-cover"
            loading="lazy"
          />
          <span
            className="font-body text-ink"
            style={{ fontSize: '20px', lineHeight: '25.2px', letterSpacing: '-0.4px', fontWeight: 500 }}
          >
            {t.name}
          </span>
        </div>
        <Stars />
      </div>
      <p
        className="text-gray-2"
        style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}
      >
        {t.quote}
      </p>
    </div>
  )
}

/** Left/right arrow buttons matching reference SVG arrows (40px, white chevron stroke 2) */
function ArrowBtn({ dir, onClick }: { dir: 'left' | 'right'; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="flex h-8 w-8 items-center justify-center rounded-full"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      aria-label={dir === 'left' ? 'Previous testimonials' : 'Next testimonials'}
    >
      <svg
        viewBox="0 0 40 40"
        className="h-8 w-8"
        fill="none"
        stroke="white"
        strokeWidth={2}
        aria-hidden
      >
        {dir === 'left' ? (
          <path d="M22.5 12.5 15 20l7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M17.5 12.5 25 20l-7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </motion.button>
  )
}

/**
 * Two slideshow rows like the reference (Set 1: testimonials 1-4 duplicated x4;
 * Set 2: testimonials 5-8 duplicated x4). Arrows between the two rows, centered.
 */
export function Testimonials() {
  const row1 = [...TESTIMONIALS_ROW1, ...TESTIMONIALS_ROW1, ...TESTIMONIALS_ROW1, ...TESTIMONIALS_ROW1]
  const row2 = [...TESTIMONIALS_ROW2, ...TESTIMONIALS_ROW2, ...TESTIMONIALS_ROW2, ...TESTIMONIALS_ROW2]

  const [index1, setIndex1] = useState(0)
  const [index2, setIndex2] = useState(0)

  const next = useCallback(
    (setIndex: React.Dispatch<React.SetStateAction<number>>, len: number) => {
      setIndex((i) => (i + 1) % (len / 2)) // loop through half (duplicated set)
    },
    [],
  )
  const prev = useCallback(
    (setIndex: React.Dispatch<React.SetStateAction<number>>, len: number) => {
      setIndex((i) => (i - 1 + len / 2) % (len / 2))
    },
    [],
  )

  return (
    <section id="testimonials" className="flex flex-col items-center gap-[30px] bg-cream px-5 py-10 dt:gap-[60px] dt:px-0 dt:py-[80px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <Reveal delay={0.1}>
            <Badge>Testimonials</Badge>
          </Reveal>
          <Reveal delay={0.15}>
            <SectionHeading>
              Real <span className="text-teal">people.</span> Real shifts. Real
              peace.
            </SectionHeading>
          </Reveal>
        </div>

        {/* Slideshow rows: heading 100 + gap + rows 181/190 + arrows — matches ref 691px total */}
        <div className="flex w-full flex-col gap-5">
          <SlideshowRow
            items={row1}
            index={index1}
            height={181}
            onDragEnd={(dir) =>
              dir > 0 ? next(setIndex1, row1.length) : prev(setIndex1, row1.length)
            }
          />
          <SlideshowRow
            items={row2}
            index={index2}
            height={190}
            onDragEnd={(dir) =>
              dir > 0 ? next(setIndex2, row2.length) : prev(setIndex2, row2.length)
            }
          />
        </div>

        {/* Controls: centered arrows (reference: absolute over slideshow, t=8217) */}
        <div className="relative z-10 -mt-[76px] flex items-center justify-center gap-2.5">
          <ArrowBtn dir="left" onClick={() => { prev(setIndex1, row1.length); prev(setIndex2, row2.length) }} />
          <ArrowBtn dir="right" onClick={() => { next(setIndex1, row1.length); next(setIndex2, row2.length) }} />
        </div>
      </div>
    </section>
  )
}

function SlideshowRow({
  items,
  index,
  height,
  onDragEnd,
}: {
  items: Testimonial[]
  index: number
  height: number
  onDragEnd: (direction: number) => void
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [cardW, setCardW] = useState(339)
  const [gap, setGap] = useState(16)

  useEffect(() => {
    const update = () => {
      const w = trackRef.current?.parentElement?.clientWidth ?? 1200
      const g = window.innerWidth >= 1200 ? 16 : 20
      // reference formula: width = calc(29.4118% - 14.1176px) of container
      setCardW(Math.max((w * 0.294118 - (g === 16 ? 14.1 : 48 / 3)), 200))
      setGap(g)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const x = -index * (cardW + gap)

  return (
    <div ref={trackRef} className="relative w-full overflow-hidden" style={{ height }}>
      <motion.div
        className="flex"
        style={{ gap }}
        animate={{ x }}
        transition={{ duration: 0.6, ease: EASE }}
        drag="x"
        dragConstraints={{ left: -Infinity, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(_, info) => {
          if (Math.abs(info.offset.x) > 60) {
            onDragEnd(info.offset.x < 0 ? 1 : -1)
          }
        }}
      >
        {items.map((t, i) => (
          <div key={`${t.name}-${i}`} className="shrink-0" style={{ width: cardW }}>
            <TestimonialCard t={t} />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
