import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from './shared/ui'
import { Reveal, EASE } from './shared/Reveal'
import { WHY_FEATURES } from '../data/content'

/**
 * Reference "Why choose" section:
 * - Two-column layout: left sticky header (H2 46px with teal "Zono masterclass",
 *   desc 20px, 4 menu pills 550x54 bg cream-2/60 r8 p16), right features list.
 * - Menu pills: text 16px gray-2, active state has full cream-2 bg + check icon
 * - Right: feature cards with title 24px/500 ink, desc 16px gray-1, image 550x367 r16
 * - On mobile: stacked; menus full width
 * The reference uses appear variants; the menus highlight on hover.
 */
export function FeaturesSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="why-choose" className="flex flex-col items-center gap-[30px] px-5 py-10 dt:gap-[60px] dt:px-0 dt:py-[80px]">
      <div className="flex w-full max-w-[1200px] flex-col gap-[30px] dt:flex-row dt:gap-[40px]">
        {/* Left: header + menus */}
        <div className="flex w-full flex-col gap-6 dt:sticky dt:top-[120px] dt:w-[550px] dt:self-start">
          <div className="flex flex-col gap-4">
            <Reveal delay={0.1}>
              <SectionHeading>
                Why choose this <br />
                <span className="text-teal">Zono masterclass</span>
              </SectionHeading>
            </Reveal>
            <Reveal delay={0.15}>
              <p
                className="max-w-[550px] text-gray-1"
                style={{ fontSize: '20px', lineHeight: '28px', letterSpacing: '-0.4px', fontWeight: 500 }}
              >
                This isn’t just another online course. It’s a transformation.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-4">
            {WHY_FEATURES.map((f, i) => (
              <motion.button
                key={f.title}
                onClick={() => setActive(i)}
                className="flex h-[54px] items-center rounded-lg bg-cream-2/60 px-4 py-4 text-left transition-colors duration-300 hover:bg-cream-2"
                initial={{ opacity: 0.001, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                transition={{ delay: 0.1 + i * 0.08, duration: 2, ease: EASE }}
                whileTap={{ scale: 0.98 }}
              >
                {/* word-by-word entrance like the reference (spans stagger in) */}
                <span className="flex items-center">
                  {f.title.split(' ').map((word, wi) => (
                    <motion.span
                      key={`${f.title}-${wi}`}
                      className="inline-block text-gray-2"
                      style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}
                      initial={{ opacity: 0.001, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                      transition={{ delay: 0.15 + i * 0.08 + wi * 0.05, duration: 1.2, ease: EASE }}
                    >
                      {wi > 0 ? ' ' : ''}{word}
                    </motion.span>
                  ))}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Right: features — reference: 550px wide, gap 50px between, each card
            title 31 + desc 45 + img 367 (or 22 for one-liners) + gap 24 */}
        <div className="flex w-full flex-col gap-[50px] dt:w-[550px]">
          {WHY_FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              className="flex w-full flex-col gap-6"
              initial={{ opacity: 0.001, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ delay: 0.15 + i * 0.08, duration: 2, ease: EASE }}
            >
              <motion.div
                key={`${f.title}-content`}
                className="flex flex-col gap-6"
                initial={{ opacity: 0.001, y: 10 }}
                animate={{ opacity: active === i ? 1 : 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <h3
                  className={`font-body transition-colors duration-300 ${active === i ? 'text-ink' : 'text-gray-1'}`}
                  style={{ fontSize: '24px', lineHeight: '31.2px', letterSpacing: '-0.96px', fontWeight: 500 }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-gray-1"
                  style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}
                >
                  {f.desc}
                </p>
              </motion.div>
              <motion.div
                className="overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.5, ease: EASE }}
                onClick={() => setActive(i)}
                style={{ cursor: 'pointer' }}
              >
                <motion.img
                  src={f.img}
                  alt={f.title}
                  className={`w-full object-cover transition-opacity duration-500 ${
                    active === i ? 'opacity-100' : 'opacity-90'
                  }`}
                  style={{ height: 'clamp(197px, 26vw, 367px)' }}
                  animate={{ scale: [0.98, 1] }}
                  transition={{ duration: 0.5, ease: EASE }}
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
