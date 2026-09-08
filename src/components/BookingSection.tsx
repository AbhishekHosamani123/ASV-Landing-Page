import { motion } from 'framer-motion'
import { Badge, ButtonFilled, SectionHeading } from './shared/ui'
import { Reveal, EASE } from './shared/Reveal'
import { SESSIONS } from '../data/content'

/**
 * Reference session card: 455px wide, white bg, radius 24px, p30, shadow
 * rgba(0,0,0,0.1) 0 6px 10px, gap 24px.
 * Header: 56px icon r10 + title 24px/500 ink-2 + desc 16px gray-2
 * Rows: label 16px gray-1 + value 18px ink with icon (calendar/clock/send/video)
 * CTA row: price 36px/500 teal + filled button 322px wide
 */
function SessionCard({ session, delay }: { session: (typeof SESSIONS)[number]; delay: number }) {
  const rows = [
    { label: 'Date', value: session.date, icon: 'calendar' },
    { label: 'Time', value: session.time, icon: 'clock' },
    { label: 'Duration', value: session.duration, icon: 'send' },
    { label: 'Platform', value: session.platform, icon: 'video-cam' },
  ]
  return (
    <motion.div
      className="flex h-full w-full flex-col gap-6 rounded-3xl bg-white p-[30px] shadow-[0_6px_10px_0_rgba(0,0,0,0.1)]"
      initial={{ opacity: 0.001, y: 80, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ delay, duration: 2, ease: EASE }}
      whileHover={{ y: -4 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <img
          src={session.icon}
          alt={session.title}
          className="h-14 w-14 rounded-[10px] object-cover"
          loading="lazy"
        />
        <div className="flex flex-col gap-1">
          <h3
            className="font-body text-ink-2"
            style={{ fontSize: '24px', lineHeight: '31.2px', letterSpacing: '-0.96px', fontWeight: 500 }}
          >
            {session.title}
          </h3>
          <p className="text-gray-2" style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}>
            {session.desc}
          </p>
        </div>
      </div>

      {/* Detail rows: label 22 + gap 8 + value 25 = 56 each, gap 24 between */}
      <div className="flex flex-col gap-6">
        {rows.map((row) => (
          <div key={row.label} className="flex flex-col gap-2">
            <span className="text-gray-1" style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}>
              {row.label}
            </span>
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 text-ink" fill="currentColor" aria-hidden>
                <use href={`/icons.svg#${row.icon}`} />
              </svg>
              <span
                className="text-ink"
                style={{ fontSize: '18px', lineHeight: '25.2px', letterSpacing: '-0.36px' }}
              >
                {row.value}
              </span>
            </span>
          </div>
        ))}
      </div>

      {/* CTA — price 36px desktop / 24px mobile (ref); button 322px desktop / 220px mobile */}
      <div className="mt-auto flex items-center justify-between gap-5 pt-1">
        <span
          className="font-body text-teal"
          style={{ fontSize: 'clamp(24px, 2.5vw, 36px)', lineHeight: 'clamp(33.6px, 3.4vw, 50.4px)', letterSpacing: '-0.04em', fontWeight: 500 }}
        >
          {session.price}
        </span>
        <ButtonFilled className="tb:w-[220px] dt:w-[322px]">{session.cta}</ButtonFilled>
      </div>
    </motion.div>
  )
}

/**
 * Booking section: pad 80px 100px, gap 60px.
 * Header: badge "Book Masterclass", H2 with teal "schedule", desc 20px.
 * Cards row: two 455px cards, gap 30px, centered.
 */
export function BookingSection() {
  return (
    <section id="booking" className="flex flex-col items-center gap-[30px] px-5 py-10 dt:gap-[60px] dt:px-0 dt:py-[80px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-[40px]">
        <div className="flex flex-col items-center gap-6">
          <Reveal delay={0.1}>
            <Badge>Book Masterclass</Badge>
          </Reveal>
          <Reveal delay={0.15} className="flex flex-col items-center gap-4">
            <SectionHeading>
              Masterclass <span className="text-teal">schedule</span> & details
            </SectionHeading>
            <p
              className="max-w-[500px] text-center text-gray-1"
              style={{ fontSize: '20px', lineHeight: '28px', letterSpacing: '-0.4px', fontWeight: 500 }}
            >
              Choose the session that works best for you. Same content, same
              value just pick your time.
            </p>
          </Reveal>
        </div>

        <div className="flex w-full max-w-[940px] flex-col items-stretch gap-5 dt:flex-row dt:gap-[30px]">
          {SESSIONS.map((s, i) => (
            <div key={s.title} className="flex w-full dt:w-[455px]">
              <SessionCard session={s} delay={0.2 + i * 0.1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
