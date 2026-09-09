import { motion } from 'framer-motion'
import { Badge, SectionHeading } from './shared/ui'
import { Reveal, EASE } from './shared/Reveal'
import aboutImg from '../assets/about.png'

const COACH_IMG = aboutImg

const COACH_CARDS = [
  {
    title: 'About',
    icon: 'eye',
    paragraphs: [
      'ASV helps institutions move beyond marks, attendance and course completion by using structured assessment and verified evidence to understand employability readiness.',
      'AERS brings together the perspectives of leadership, faculty, learners, employers and support teams to create a more complete picture of graduate readiness.',
      'AERS turns insights into practical priorities and supports institutions in continuously reviewing progress and strengthening graduate readiness over time.',
    ],
  },
  {
    title: 'Vision',
    icon: 'target',
    paragraphs: [
      'To create a future where every graduate is better prepared for the changing world of work through measurable, evidence-informed employability readiness.',
    ],
  },
  {
    title: 'Mission',
    icon: 'shield',
    paragraphs: [
      'To help institutions understand employability gaps, guide meaningful learner improvement, and demonstrate career readiness through structured frameworks, technology, and verified evidence.',
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
                The ASV <span className="text-teal">Approach</span>
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
              alt="The ASV Approach"
              className="h-[300px] w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <Reveal delay={0.25} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p
                className="text-gray-2"
                style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}
              >
                From learning to demonstrated readiness
              </p>
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
