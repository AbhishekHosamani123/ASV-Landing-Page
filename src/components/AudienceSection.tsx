import { motion } from 'framer-motion'
import { SectionHeading } from './shared/ui'
import { Reveal, EASE } from './shared/Reveal'
import { FIT_ITEMS, NOT_FIT_ITEMS } from '../data/content'

/**
 * Reference "Who this masterclass" section:
 * - H2: "Who this masterclass is (and Isn't) for" — "this masterclass" in teal
 * - Two cards 465px, r26, p26, gap 26: left white bg, right cream-2/60 bg
 * - Card title 24px/500 ink-2 (2 lines), items 16px gray-2 with circle icons
 * - Fit: circle-check teal icon; Not fit: circle-minus gray icon
 */
export function AudienceSection() {
  return (
    <section className="flex flex-col items-center gap-[30px] px-5 py-10 dt:gap-[60px] dt:px-0 dt:py-[80px]">
      <div className="flex w-full max-w-[1000px] flex-col items-center gap-10">
        <Reveal delay={0.1} className="w-full text-center">
          <SectionHeading>
            Who <span className="text-[#2D86FC]">this masterclass</span> is (and Isn’t) for
          </SectionHeading>
        </Reveal>

        <div className="flex w-full max-w-[960px] flex-col gap-[30px] dt:flex-row">
          {/* Fit card */}
          <motion.div
            className="flex w-full flex-col gap-[26px] rounded-[26px] bg-white border border-light-gray shadow-sm p-[26px] dt:w-1/2"
            initial={{ opacity: 0.001, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ delay: 0.2, duration: 2, ease: EASE }}
          >
            <h3
              className="max-w-[413px] font-body text-ink-2"
              style={{ fontSize: 'clamp(20px, 2vw, 24px)', lineHeight: 'clamp(28px, 2.4vw, 31.2px)', letterSpacing: '-0.96px', fontWeight: 500 }}
            >
              This masterclass could be a great fit for you if you:
            </h3>
            <div className="flex flex-col gap-[18px]">
              {FIT_ITEMS.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0.001, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 1.6, ease: EASE }}
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-teal" fill="none" aria-hidden>
                    <use href="/icons.svg#circle-check" />
                  </svg>
                  <span
                    className="text-gray-2"
                    style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Not fit card */}
          <motion.div
            className="flex w-full flex-col gap-[26px] rounded-[26px] bg-white border border-light-gray shadow-sm p-[26px] dt:w-1/2"
            initial={{ opacity: 0.001, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ delay: 0.25, duration: 2, ease: EASE }}
          >
            <h3
              className="max-w-[413px] font-body text-ink-2"
              style={{ fontSize: 'clamp(20px, 2vw, 24px)', lineHeight: 'clamp(28px, 2.4vw, 31.2px)', letterSpacing: '-0.96px', fontWeight: 500 }}
            >
              This masterclass might not be a good fit for you if you:
            </h3>
            <div className="flex flex-col gap-[18px]">
              {NOT_FIT_ITEMS.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0.001, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                  transition={{ delay: 0.35 + i * 0.08, duration: 1.6, ease: EASE }}
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-gray-1" fill="none" aria-hidden>
                    <use href="/icons.svg#circle-minus" />
                  </svg>
                  <span
                    className="text-gray-2"
                    style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
