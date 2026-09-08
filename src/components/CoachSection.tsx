import { motion } from 'framer-motion'
import { Badge, SectionHeading } from './shared/ui'
import { Reveal, EASE } from './shared/Reveal'

const COACH_IMG = 'https://framerusercontent.com/images/YT9cg8bCskx6fVuxTaD02II4QOM.png?scale-down-to=1024'

const COACH_CARDS = [
  {
    title: 'About coach',
    icon: 'eye',
    paragraphs: [
      'Rahul is a full-time business coach who built his coaching business from scratch without social media fame, paid ads, or a tech team.',
      'Through real-world experience, experimentation, and smart systems, he cracked a repeatable way to grow a coaching business using AI.',
      'Today, he mentors coaches to build structured, scalable businesses that don’t rely on hustle or guesswork.',
    ],
  },
  {
    title: 'Vision',
    icon: 'target',
    paragraphs: [
      'To create a future where knowledge-driven professionals can build successful coaching businesses using intelligent systems, not complexity unlocking sustainable growth at any stage.',
    ],
  },
  {
    title: 'Mission',
    icon: 'shield',
    paragraphs: [
      'To equip coaches with practical, AI-powered frameworks that simplify business setup, client acquisition, and scaling without requiring a large audience or technical expertise.',
    ],
  },
]

/**
 * Reference coach section:
 * - Left column 440px: badge "About", H2 "Meet your coach" (teal "coach"),
 *   300px image r16, name 24px/500, role 16px gray-2
 * - Right column 700px: 3 white cards r16 p16 with pattern left strip,
 *   heading row (icon 40px bg sky r8 + title 20px/500) + paragraphs 16px gray-2
 */
export function CoachSection() {
  return (
    <section id="about-coach" className="flex flex-col items-center gap-[30px] px-5 py-10 dt:gap-[60px] dt:px-0 dt:py-[80px]">
      <div className="flex w-full max-w-[1200px] flex-col gap-[30px] dt:flex-row dt:gap-[60px]">
        {/* Bio column */}
        <div className="flex w-full flex-col gap-6 dt:w-[440px]">
          <div className="flex flex-col gap-4">
            <Reveal delay={0.1}>
              <Badge>About</Badge>
            </Reveal>
            <Reveal delay={0.15}>
              <SectionHeading>
                Meet your <span className="text-teal">coach</span>
              </SectionHeading>
            </Reveal>
          </div>

          <motion.div
            className="w-[300px] overflow-hidden rounded-2xl"
            initial={{ opacity: 0.001, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ delay: 0.2, duration: 2, ease: EASE }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={COACH_IMG}
              alt="Rahul - AI Coach"
              className="h-[300px] w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <Reveal delay={0.25} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span
                className="font-body text-ink"
                style={{ fontSize: '24px', lineHeight: '31.2px', letterSpacing: '-0.96px', fontWeight: 500 }}
              >
                Rahul
              </span>
              <span className="text-gray-2" style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}>
                Ai Coach & Founder of Zono
              </span>
            </div>
          </Reveal>
        </div>

        {/* Content cards */}
        <div className="flex w-full flex-col gap-4 dt:w-[700px]">
          {COACH_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              className="relative overflow-hidden rounded-2xl bg-white p-4"
              initial={{ opacity: 0.001, y: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ delay: 0.15 + i * 0.1, duration: 2, ease: EASE }}
            >
              {/* left pattern strip like reference */}
              <div
                className="absolute inset-y-0 left-0 w-[120px]"
                style={{
                  backgroundImage:
                    'url(https://framerusercontent.com/images/hriGduPi4GM1P5kXGIlR7ND5U8.png?width=4700&height=2580)',
                  backgroundSize: '235px auto',
                  backgroundRepeat: 'repeat',
                  backgroundPosition: 'left top',
                  opacity: 0.6,
                }}
              />
              <div className="relative flex flex-col gap-6">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky p-2">
                    <CoachIcon id={card.icon} />
                  </span>
                  <span
                    className="text-ink"
                    style={{ fontSize: '20px', lineHeight: '28px', letterSpacing: '-0.4px', fontWeight: 500 }}
                  >
                    {card.title}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  {card.paragraphs.map((p) => (
                    <p
                      key={p.slice(0, 20)}
                      className="text-gray-2"
                      style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Inline icons matching reference framer icon set (eye, target, rocket) */
function CoachIcon({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full text-teal-2" fill="none" aria-hidden>
      <use href={`/icons.svg#${id}`} />
    </svg>
  )
}
