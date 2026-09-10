import { motion } from 'framer-motion'
import { Badge, SectionHeading } from './shared/ui'
import { Reveal, EASE } from './shared/Reveal'

const COACH_CARDS = [
  {
    title: 'About',
    icon: 'eye',
    paragraphs: [
      'ASV Education is building a collaborative employability ecosystem that connects institutions, learners and employers around one goal: measurable career readiness.',
    ],
  },
  {
    title: 'Vision',
    icon: 'target',
    paragraphs: [
      "To become India's most trusted employability ecosystem, enabling every student to graduate with measurable career readiness.",
    ],
  },
  {
    title: 'Mission',
    icon: 'shield',
    paragraphs: [
      'To empower institutions with an AI-enabled employability ecosystem that measures, develops and continuously improves career readiness.',
    ],
  },
]

/**
 * Reference coach section:
 * - Left column 440px: badge "About", H2 "The AERS Approach" (teal "Approach"),
 *   300px image r16, title 24px/500
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
                Not another course platform.{' '}
                <span className="text-[#2D86FC]">A connected employability ecosystem.</span>
              </SectionHeading>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p
                className="text-gray-2"
                style={{ fontSize: '16px', lineHeight: '24px', letterSpacing: '-0.32px' }}
              >
                ASV Education brings institutions, learners and employers around one shared purpose: better graduate employment readiness that can be understood, improved and demonstrated with evidence.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Content cards */}
        <div className="flex w-full flex-col gap-4 dt:w-[700px]">
          {COACH_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              className="relative overflow-hidden rounded-2xl bg-white border border-light-gray shadow-sm p-4"
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
