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
    <section className="flex flex-col items-center gap-[30px] px-5 pb-10 pt-4 dt:gap-[50px] dt:px-0 dt:pb-[80px] dt:pt-[40px]">
      <div className="flex w-full max-w-[1000px] flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <Reveal delay={0.1} className="w-full text-center">
            <SectionHeading
              style={{
                fontSize: 'clamp(36px, 5vw, 50px)',
                lineHeight: 'clamp(43px, 5.4vw, 58px)',
              }}
            >
              Understand First{' '}
              <span className="text-[#2D86FC]">Improve with Evidence</span>
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className="max-w-[620px] text-center text-gray-1"
              style={{ fontSize: '18px', lineHeight: '27px', letterSpacing: '-0.36px', fontWeight: 500 }}
            >
              AERS connects institutional understanding with learner development. It begins by seeing readiness clearly, then turns priorities into a structured 16-week learner journey with evidence, human review and measurable progress.
            </p>
          </Reveal>
        </div>

        <div className="flex w-full max-w-[960px] flex-col gap-[30px] dt:flex-row">
          {/* Fit card */}
          <motion.div
            className="flex w-full flex-col gap-[26px] rounded-[26px] bg-white border border-light-gray shadow-sm p-[26px] dt:w-1/2"
            initial={{ opacity: 0.001, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ delay: 0.2, duration: 2, ease: EASE }}
          >
            <div className="flex flex-col gap-1.5">
              <span className="text-[#2D86FC] font-display text-[22px] font-semibold tracking-tight">
                Explore
              </span>
              <h3
                className="max-w-[413px] font-body text-ink-2"
                style={{ fontSize: 'clamp(20px, 2vw, 24px)', lineHeight: 'clamp(28px, 2.4vw, 31.2px)', letterSpacing: '-0.96px', fontWeight: 500 }}
              >
                Understand where readiness stands.
              </h3>
              <p
                className="text-gray-1"
                style={{ fontSize: '15px', lineHeight: '22px', letterSpacing: '-0.3px' }}
              >
                Assess learner and institutional context, identify strengths and gaps, and create an evidence-informed starting point.
              </p>
            </div>
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

          {/* Transform card */}
          <motion.div
            className="flex w-full flex-col gap-[26px] rounded-[26px] bg-white border border-light-gray shadow-sm p-[26px] dt:w-1/2"
            initial={{ opacity: 0.001, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ delay: 0.25, duration: 2, ease: EASE }}
          >
            <div className="flex flex-col gap-1.5">
              <span className="text-[#2D86FC] font-display text-[22px] font-semibold tracking-tight">
                Transform
              </span>
              <h3
                className="max-w-[413px] font-body text-ink-2"
                style={{ fontSize: 'clamp(20px, 2vw, 24px)', lineHeight: 'clamp(28px, 2.4vw, 31.2px)', letterSpacing: '-0.96px', fontWeight: 500 }}
              >
                Turn insight into demonstrated capability.
              </h3>
              <p
                className="text-gray-1"
                style={{ fontSize: '15px', lineHeight: '22px', letterSpacing: '-0.3px' }}
              >
                A 16-week structured learner journey combining personalised learning, practical work, weekly guided review and evidence-based improvement.
              </p>
            </div>
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
        </div>
      </div>
    </section>
  )
}
