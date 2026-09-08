import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeading } from './shared/ui'
import { Reveal, EASE } from './shared/Reveal'
import { STATS } from '../data/content'

/**
 * Count-up number that only triggers when visible.
 * The reference renders static text but with Framer scroll appear;
 * we add a smooth count-up matching the 2s appear duration.
 */
function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      // ease out matching [0.16,1,0.3,1]
      const eased = 1 - Math.pow(1 - p, 4)
      setDisplay(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref}>
      {display.toLocaleString('en-US')}
      {suffix}
    </span>
  )
}

/**
 * Stats section: pad 80px 100px.
 * Cards: 285px, bg cream-2, r16, p20, gap 16px, icon 64px,
 * number 36px/500 ink, label 16px gray-2.
 */
export function StatsSection() {
  return (
    <section className="flex flex-col items-center gap-[30px] px-5 py-10 dt:gap-[60px] dt:px-0 dt:py-[80px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <Reveal delay={0.1}>
            <SectionHeading>
              Our impact is <span className="text-teal">growing</span> every month
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className="max-w-[600px] text-gray-1"
              style={{ fontSize: '20px', lineHeight: '28px', letterSpacing: '-0.4px', fontWeight: 500 }}
            >
              We continuously refine our systems to help more coaches launch,
              grow, and scale with AI.
            </p>
          </Reveal>
        </div>

        <div className="grid w-full max-w-[1200px] grid-cols-2 gap-5 dt:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col justify-start gap-4 rounded-2xl bg-cream-2 p-5 pt-7 dt:h-[213px] tb:h-[213px]"
              initial={{ opacity: 0.001, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ delay: 0.1 + i * 0.1, duration: 2, ease: EASE }}
              whileHover={{ y: -4 }}
            >
              <img src={stat.icon} alt="" className="h-16 w-16" loading="lazy" />
              <div className="flex flex-col gap-1">
                <span
                  className="font-body text-ink"
                  style={{ fontSize: '36px', lineHeight: '50.4px', letterSpacing: '-1.44px', fontWeight: 500 }}
                >
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-gray-2" style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}>
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
