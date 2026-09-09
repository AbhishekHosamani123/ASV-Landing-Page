import { motion } from 'framer-motion'
import {
  BarChart3,
  Lightbulb,
  Target,
  TrendingUp,
  BookOpen,
  FileCheck,
  CheckCircle2,
  Briefcase,
  Sparkles,
  Users,
} from 'lucide-react'
import { Badge, ButtonFilled, SectionHeading } from './shared/ui'
import { Reveal, EASE } from './shared/Reveal'
import { SESSIONS, type SessionItem } from '../data/content'

function PointIcon({ type }: { type: string }) {
  const cls = 'h-5 w-5 shrink-0 text-ink'
  switch (type) {
    case 'assessment':
    case 'readiness':
      return <BarChart3 className={cls} strokeWidth={1.8} />
    case 'insights':
      return <Lightbulb className={cls} strokeWidth={1.8} />
    case 'skills':
      return <BookOpen className={cls} strokeWidth={1.8} />
    case 'improvement':
    case 'capabilities':
      return <Target className={cls} strokeWidth={1.8} />
    case 'outcomes':
      return <TrendingUp className={cls} strokeWidth={1.8} />
    case 'evidence':
      return <FileCheck className={cls} strokeWidth={1.8} />
    case 'expectations':
      return <Briefcase className={cls} strokeWidth={1.8} />
    case 'exposure':
      return <Sparkles className={cls} strokeWidth={1.8} />
    case 'talent':
      return <Users className={cls} strokeWidth={1.8} />
    default:
      return <CheckCircle2 className={cls} strokeWidth={1.8} />
  }
}

function SessionCard({ session, delay }: { session: SessionItem; delay: number }) {
  const rows = [
    session.date && { label: 'Date', value: session.date, icon: 'calendar' },
    session.time && { label: 'Time', value: session.time, icon: 'clock' },
    session.duration && { label: 'Duration', value: session.duration, icon: 'send' },
    session.platform && { label: 'Platform', value: session.platform, icon: 'video-cam' },
  ].filter(Boolean) as { label: string; value: string; icon: string }[]

  return (
    <motion.div
      className="flex h-full w-full flex-col gap-6 rounded-3xl bg-white p-7 shadow-[0_6px_10px_0_rgba(0,0,0,0.1)] dt:p-8"
      initial={{ opacity: 0.001, y: 80, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ delay, duration: 2, ease: EASE }}
      whileHover={{ y: -4 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        {session.icon && (
          <img
            src={session.icon}
            alt={session.title}
            className="h-14 w-14 rounded-[10px] object-cover"
            loading="lazy"
          />
        )}
        <div className="flex flex-col gap-1">
          <h3
            className="font-display text-ink-2"
            style={{ fontSize: '24px', lineHeight: '30px', letterSpacing: '-0.6px', fontWeight: 600 }}
          >
            {session.title}
          </h3>
          <p className="text-gray-2" style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}>
            {session.desc}
          </p>
        </div>
      </div>

      {/* Points with normal black icons (Card style) */}
      {session.points && session.points.length > 0 ? (
        <div className="my-auto flex flex-col gap-4">
          {session.points.map((pt, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <span className="pt-0.5">
                <PointIcon type={pt.iconType} />
              </span>
              <span
                className="text-ink"
                style={{ fontSize: '18px', lineHeight: '25.2px', letterSpacing: '-0.36px' }}
              >
                {pt.text}
              </span>
            </div>
          ))}
        </div>
      ) : (
        /* Detail rows fallback */
        <div className="my-auto flex flex-col gap-5">
          {rows.map((row) => (
            <div key={row.label} className="flex flex-col gap-1.5">
              <span className="text-gray-1" style={{ fontSize: '15px', lineHeight: '21px', letterSpacing: '-0.3px' }}>
                {row.label}
              </span>
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-ink" fill="currentColor" aria-hidden>
                  <use href={`/icons.svg#${row.icon}`} />
                </svg>
                <span
                  className="text-ink"
                  style={{ fontSize: '17px', lineHeight: '24px', letterSpacing: '-0.34px' }}
                >
                  {row.value}
                </span>
              </span>
            </div>
          ))}
        </div>
      )}

      {/* CTA row */}
      <div className="mt-auto flex items-center justify-between gap-3 pt-2">
        {session.price ? (
          <>
            <span
              className="shrink-0 font-body text-teal"
              style={{ fontSize: 'clamp(24px, 2vw, 32px)', lineHeight: 'clamp(32px, 2.6vw, 42px)', letterSpacing: '-0.04em', fontWeight: 500 }}
            >
              {session.price}
            </span>
            <ButtonFilled className="w-full max-w-[210px]">{session.cta}</ButtonFilled>
          </>
        ) : (
          <ButtonFilled className="w-full">{session.cta}</ButtonFilled>
        )}
      </div>
    </motion.div>
  )
}

/**
 * Booking / Stakeholders section: pad 80px 100px, gap 60px.
 * Header: badge "Stakeholders", H2, desc.
 * Cards row: 3 equal-width cards in one row on desktop, generous gap.
 */
export function BookingSection() {
  return (
    <section id="booking" className="flex flex-col items-center gap-[30px] px-5 py-10 dt:gap-[60px] dt:px-0 dt:py-[80px]">
      <div className="flex w-full max-w-[1240px] flex-col items-center gap-[40px]">
        <div className="flex flex-col items-center gap-6">
          <Reveal delay={0.1}>
            <Badge>Stakeholders</Badge>
          </Reveal>
          <Reveal delay={0.15} className="flex flex-col items-center gap-4">
            <SectionHeading>
              One Purpose. <span className="text-teal">Three Connected Stakeholders.</span>
            </SectionHeading>
            <p
              className="max-w-[620px] text-center text-gray-1"
              style={{ fontSize: '20px', lineHeight: '28px', letterSpacing: '-0.4px', fontWeight: 500 }}
            >
              Discover how institutions, learners and employers work together to
              strengthen graduate employability readiness.
            </p>
          </Reveal>
        </div>

        <div className="grid w-full grid-cols-1 items-stretch gap-7 dt:grid-cols-3 dt:gap-8">
          {SESSIONS.map((s, i) => (
            <div key={s.title} className="flex w-full">
              <SessionCard session={s} delay={0.2 + i * 0.1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
