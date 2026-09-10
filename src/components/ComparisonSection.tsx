import { motion } from 'framer-motion'
import { SectionHeading } from './shared/ui'
import { Reveal, EASE } from './shared/Reveal'
import { ZONO_FEATURES, OTHER_FEATURES } from '../data/content'
import aersLogo from '../assets/aers-official-logo.png'

/**
 * Reference comparison section (measured on live site):
 * - Two columns 392px each, justify-between in 814px container
 * - LEFT: ASV logo (168x31) + gap 16 + 5 rows of 57px (bg #ecf6f8, p16,
 *   first row r12 top, last r12 bottom, 16px gaps) — chat-bubble icon teal + text 18px ink
 * - RIGHT: "Other AI coaches" title 24px/500 gray-1 + gap 16 + 5 rows of 57px
 *   (bg #fafafa, p16, same radius treatment) — bubble-x icon + text 18px gray-2
 * - Row inner: icon 24px + gap 8 + text (inset 16+24+8 = 48px)
 */
export function ComparisonSection() {
  return (
    <section className="flex flex-col items-center gap-[30px] px-5 py-10 dt:gap-[60px] dt:px-0 dt:py-[80px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <Reveal delay={0.1}>
            <SectionHeading>
              What makes <span className="text-[#2D86FC]">AERS</span> different?
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className="max-w-[600px] text-center text-gray-1"
              style={{ fontSize: '20px', lineHeight: '28px', letterSpacing: '-0.4px', fontWeight: 500 }}
            >
              Build the skills, confidence, and evidence employers look for.
            </p>
          </Reveal>
        </div>

        <div className="flex w-full max-w-[880px] flex-col gap-8 dt:flex-row dt:justify-between dt:gap-[30px]">
          {/* ASV column */}
          <motion.div
            className="flex w-full shrink-0 flex-col gap-4 dt:w-[420px]"
            initial={{ opacity: 0.001, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ delay: 0.2, duration: 2, ease: EASE }}
          >
            <div className="flex h-[44px] items-center gap-3">
              <img src={aersLogo} alt="AERS" className="h-[36px] w-auto object-contain" loading="lazy" />
              <span
                className="font-body text-ink-2"
                style={{ fontSize: '20px', lineHeight: '26px', letterSpacing: '-0.5px', fontWeight: 500 }}
              >
                AERS
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {ZONO_FEATURES.map((f, i) => (
                <motion.div
                  key={f}
                  className={`flex min-h-[64px] items-center gap-3 bg-sky px-4 py-3.5 ${
                    i === 0 ? 'rounded-t-xl' : i === ZONO_FEATURES.length - 1 ? 'rounded-b-xl' : ''
                  }`}
                  initial={{ opacity: 0.001, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 2, ease: EASE }}
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 text-teal" fill="none" aria-hidden>
                    <use href="/icons.svg#chat-bubble" />
                  </svg>
                  <span
                    className="text-ink"
                    style={{ fontSize: '16px', lineHeight: '23px', letterSpacing: '-0.3px', fontWeight: 500 }}
                  >
                    {f}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Others column */}
          <motion.div
            className="flex w-full shrink-0 flex-col gap-4 dt:w-[420px]"
            initial={{ opacity: 0.001, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ delay: 0.25, duration: 2, ease: EASE }}
          >
            <div className="flex h-[44px] items-center">
              <span
                className="font-body text-gray-1"
                style={{ fontSize: '20px', lineHeight: '26px', letterSpacing: '-0.5px', fontWeight: 500 }}
              >
                Traditional placement preparation
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {OTHER_FEATURES.map((f, i) => (
                <motion.div
                  key={f}
                  className={`flex min-h-[64px] items-center gap-3 bg-[#fafafa] px-4 py-3.5 ${
                    i === 0 ? 'rounded-t-xl' : i === OTHER_FEATURES.length - 1 ? 'rounded-b-xl' : ''
                  }`}
                  initial={{ opacity: 0.001, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                  transition={{ delay: 0.35 + i * 0.08, duration: 2, ease: EASE }}
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 text-gray-1" fill="none" aria-hidden>
                    <use href="/icons.svg#chat-bubble-x" />
                  </svg>
                  <span
                    className="text-gray-2"
                    style={{ fontSize: '16px', lineHeight: '23px', letterSpacing: '-0.3px' }}
                  >
                    {f}
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
