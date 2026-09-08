import { motion } from 'framer-motion'
import { SectionHeading } from './shared/ui'
import { Reveal, EASE } from './shared/Reveal'
import { LEARN_ITEMS } from '../data/content'

/**
 * Reference learn section (breakpoint-dependent layout):
 * - Desktop (≥1200): grid 4 cols of 285px, gap 20px.
 *   Tiles 1&3: 461px tall image tiles (p20, title top, desc bottom,
 *   absolute image + cream gradient mask 200px at bottom).
 *   Tiles 2&4: 260px tall, bg #e9f1f2 / #e7f3e7, pattern strip 80px top,
 *   pushed down 40% (peeking layout), title+desc centered.
 * - Tablet (810–1199): grid 2 cols of 439px, ALL tiles uniform 517px tall
 *   (pattern tiles expand to full height, no offset).
 * - Mobile (≤809): single column, 400px image tiles, 260px pattern tiles.
 */
export function LearningSection() {
  return (
    <section id="learn" className="flex flex-col items-center gap-[30px] px-5 py-10 dt:gap-[60px] dt:px-0 dt:py-[80px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <Reveal delay={0.1}>
            <SectionHeading>What you will learn.</SectionHeading>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className="max-w-[700px] text-center text-gray-1"
              style={{ fontSize: '20px', lineHeight: '28px', letterSpacing: '-0.4px', fontWeight: 500 }}
            >
              This masterclass is packed with actionable strategies, including.
            </p>
          </Reveal>
        </div>

        <div className="grid w-full max-w-[1200px] grid-cols-1 gap-5 tb:grid-cols-2 dt:grid-cols-4">
          {LEARN_ITEMS.map((item, i) => {
            const isPattern = item.variant === 'pattern'
            return (
              <motion.div
                key={item.title}
                className={`relative flex flex-col overflow-hidden rounded-2xl p-5 ${
                  isPattern
                    ? 'min-h-[260px] dt:min-h-[260px] dt:translate-y-[40%] tb:min-h-[517px]'
                    : 'min-h-[400px] dt:min-h-[461px] tb:min-h-[517px]'
                }`}
                style={isPattern ? { backgroundColor: item.bg } : undefined}
                initial={{ opacity: 0.001, y: 80, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                transition={{ delay: 0.1 + i * 0.1, duration: 2, ease: EASE }}
                whileHover={{ scale: 1.02 }}
              >
                {item.variant === 'image' && item.img && (
                  <>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full rounded-2xl object-cover"
                      loading="lazy"
                    />
                    {/* cream fade mask at bottom, like reference */}
                    <div
                      className="absolute inset-x-[-2px] bottom-0 h-[200px]"
                      style={{
                        background: 'linear-gradient(to top, #faf7ef 0%, rgba(250,247,239,0) 100%)',
                      }}
                    />
                  </>
                )}
                {isPattern && (
                  <div
                    className="absolute inset-x-0 top-0 h-20"
                    style={{
                      backgroundImage:
                        'url(https://framerusercontent.com/images/hriGduPi4GM1P5kXGIlR7ND5U8.png?width=4700&height=2580)',
                      backgroundSize: '235px auto',
                      backgroundRepeat: 'repeat',
                      backgroundPosition: 'center',
                    }}
                  />
                )}
                <h3
                  className="relative z-10 font-display text-ink-2"
                  style={{
                    fontSize: 'clamp(22px, 2vw, 24px)',
                    lineHeight: 'clamp(29px, 2.4vw, 31.2px)',
                    letterSpacing: '-0.96px',
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="relative z-10 mt-auto pt-4 text-gray-2"
                  style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}
                >
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
