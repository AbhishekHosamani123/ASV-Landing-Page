import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Badge, ButtonFilled, SectionHeading } from './shared/ui'
import { Reveal, EASE } from './shared/Reveal'
import { FAQS } from '../data/content'

/**
 * Reference FAQ:
 * - Badge "FAQ", H2 "Got questions?" (questions? teal), left-aligned block
 * - Items: white cards r10 p20 shadow, q 18px ink bold-ish, a 16px gray-1
 * - First item open by default; chevron rotates -180deg when open
 * - Only one open at a time (reference: first Default open, rest Closed)
 * - Contact card below: bg #e9f1f2 r16 p20, heading 24px/500 ink-2,
 *   desc 16px gray-2, CTA "Contact us"
 */
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="flex flex-col items-center gap-[30px] px-5 py-10 dt:gap-[60px] dt:px-0 dt:py-[80px]">
      <div className="flex w-full max-w-[800px] flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <Reveal delay={0.1}>
            <Badge>FAQ</Badge>
          </Reveal>
          <Reveal delay={0.15}>
            <SectionHeading>
              Got <span className="text-[#2D86FC]">questions?</span>
            </SectionHeading>
          </Reveal>
        </div>

        <div className="flex w-full flex-col gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={faq.q}
                className="flex flex-col gap-3 rounded-[10px] bg-white p-5 shadow-[0_6px_10px_0_rgba(0,0,0,0.1)]"
                initial={{ opacity: 0.001, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                transition={{ delay: 0.1 + i * 0.06, duration: 1.6, ease: EASE }}
              >
                <button
                  className="flex cursor-pointer items-center justify-between gap-4 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-ink font-medium"
                    style={{ fontSize: 'clamp(16px, 1.3vw, 18px)', lineHeight: 'clamp(22.4px, 1.6vw, 25.2px)', letterSpacing: '-0.02em' }}
                  >
                    {faq.q}
                  </span>
                  <motion.svg
                    viewBox="0 0 24 24"
                    className="h-[26px] w-[26px] shrink-0 text-teal"
                    fill="none"
                    animate={{ rotate: isOpen ? -180 : 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    aria-hidden
                  >
                    <use href="/icons.svg#chevron-down" />
                  </motion.svg>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p
                        className="text-gray-1 pt-1"
                        style={{ fontSize: '15px', lineHeight: '23px', letterSpacing: '-0.3px', fontWeight: 500 }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Contact help card */}
        <Reveal delay={0.2} className="w-full">
          <div className="flex w-full flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-2xl bg-sky border border-light-gray p-6">
            <div className="flex flex-col gap-1.5">
              <span
                className="font-display text-ink-2 font-bold"
                style={{ fontSize: 'clamp(20px, 2.2vw, 24px)', lineHeight: 'clamp(26px, 2.6vw, 32px)', letterSpacing: '-0.03em' }}
              >
                Want to know more?
              </span>
              <span className="text-ink font-semibold" style={{ fontSize: '16px', lineHeight: '22px' }}>
                We’re here to help.
              </span>
              <p className="text-gray-1 max-w-[500px]" style={{ fontSize: '15px', lineHeight: '22px', letterSpacing: '-0.3px' }}>
                Have a question about AERS, the student journey, or how it can work within your institution? Reach out to our team.
              </p>
            </div>
            <ButtonFilled href="#contact" className="shrink-0">
              Contact us →
            </ButtonFilled>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
