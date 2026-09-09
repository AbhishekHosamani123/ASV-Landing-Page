import { motion } from 'framer-motion'
import { Badge, ButtonFilled, SectionHeading } from './shared/ui'
import { Reveal, EASE } from './shared/Reveal'

const SOCIAL_CARDS = [
  {
    count: '15.2K',
    label: 'SUBSCRIBERS',
    title: 'YouTube',
    desc: 'Grow your coaching skills with quick AI tutorials and practical videos.',
    cta: 'Subscribe',
    heart: true,
  },
  {
    count: '33K',
    label: 'FOLLOWERS',
    title: 'Instagram',
    desc: 'Get daily insights, reels, and community highlights to inspire your growth.',
    cta: 'Follow me',
    heart: false,
  },
]

/**
 * Reference socials section:
 * - Badge "Community", H2 "Stay in the loop" (the loop teal)
 * - Card grid 3 cols gap 30: cards 400px white r24 p24 shadow
 * - Card: pattern top 80px, count+label row (heart icon 70px), title 24px/500 ink-2,
 *   desc 16px gray-2, CTA filled
 */
export function SocialsSection() {
  return (
    <section id="contact" className="flex flex-col items-center gap-[30px] px-5 py-10 dt:gap-[60px] dt:px-0 dt:py-[80px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <Reveal delay={0.1}>
            <Badge>Community</Badge>
          </Reveal>
          <Reveal delay={0.15}>
            <SectionHeading>
              Stay in <span className="text-[#2D86FC]">the loop</span>
            </SectionHeading>
          </Reveal>
        </div>

        <div className="grid w-full max-w-[1200px] grid-cols-1 gap-5 tb:grid-cols-2 dt:grid-cols-3">
          {SOCIAL_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              className="relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl bg-white p-6 shadow-[0_6px_10px_0_rgba(0,0,0,0.1)]"
              initial={{ opacity: 0.001, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ delay: 0.15 + i * 0.1, duration: 2, ease: EASE }}
              whileHover={{ y: -4 }}
            >
              {/* top pattern strip */}
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
              <div className="relative mt-10 flex items-center justify-between">
                <span
                  className="text-gray-1"
                  style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}
                >
                  {card.count} {card.label}
                </span>
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-teal-2" fill="currentColor" aria-hidden>
                  <use href={`/icons.svg#${card.heart ? 'heart' : 'heart'}`} />
                </svg>
              </div>
              <div className="flex flex-col gap-4">
                <span
                  className="font-body text-ink-2"
                  style={{ fontSize: '24px', lineHeight: '31.2px', letterSpacing: '-0.96px', fontWeight: 500 }}
                >
                  {card.title}
                </span>
                <span className="text-gray-2" style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}>
                  {card.desc}
                </span>
              </div>
              <div className="mt-auto">
                <ButtonFilled>{card.cta}</ButtonFilled>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
