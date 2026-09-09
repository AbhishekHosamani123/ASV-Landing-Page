import { motion } from 'framer-motion'
import { Landmark, GraduationCap, Briefcase, Award } from 'lucide-react'
import { Reveal, EASE } from './shared/Reveal'
import asvLogo from '../assets/logos/asv-logo.png'
import aersLogo from '../assets/logos/aers-logo.png'

/**
 * AERS Ecosystem — wide premium composition, immediately after the hero.
 * Reference is the visual source of truth: very light blue atmospheric
 * background, soft blue glow behind the ecosystem, large cards, generous
 * whitespace, thin blue connectors, gradient accent headline, restrained
 * handwritten annotations and dotted decorations around (not inside) cards.
 *
 * ASV Education (large horizontal card)
 *   ↓
 * AERS — Flagship Programme (large dark horizontal card)
 *   ↓ thin blue fan-out connectors
 * Institutions · Learners · Employers (3 large equal cards side-by-side)
 *   ↓ converge
 * SHARED OUTCOME (large wide gold-accent card)
 */

const GOLD = '#D4A017'
const BLUE = '#081E5D'
const TEAL = '#081E5D'

/* ---------- Connector lines ---------- */

/** Fan-out: AERS card bottom → three stakeholder card tops. Desktop only. */
function FanOutLines() {
  return (
    <svg
      className="pointer-events-none mx-auto hidden h-[110px] w-full dt:block"
      viewBox="0 0 1200 110"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      <defs>
        <marker id="eco-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 1 8 5 0 9" stroke={BLUE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </marker>
      </defs>
      <path d="M600 6 C 600 48, 188 52, 188 100" stroke={BLUE} strokeOpacity="0.5" strokeDasharray="2 7" strokeWidth="1.6" markerEnd="url(#eco-arrow)" />
      <path d="M600 6 L 600 100" stroke={BLUE} strokeOpacity="0.5" strokeDasharray="2 7" strokeWidth="1.6" markerEnd="url(#eco-arrow)" />
      <path d="M600 6 C 600 48, 1012 52, 1012 100" stroke={BLUE} strokeOpacity="0.5" strokeDasharray="2 7" strokeWidth="1.6" markerEnd="url(#eco-arrow)" />
    </svg>
  )
}

/** Converge: three stakeholder cards → shared outcome. Desktop only. */
function ConvergeLines() {
  return (
    <svg
      className="pointer-events-none mx-auto hidden h-[110px] w-full dt:block"
      viewBox="0 0 1200 110"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      <defs>
        <marker id="eco-arrow-gold" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 1 8 5 0 9" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </marker>
      </defs>
      <path d="M188 6 C 188 48, 600 52, 600 100" stroke={GOLD} strokeOpacity="0.55" strokeDasharray="2 7" strokeWidth="1.6" markerEnd="url(#eco-arrow-gold)" />
      <path d="M600 6 L 600 100" stroke={GOLD} strokeOpacity="0.55" strokeDasharray="2 7" strokeWidth="1.6" markerEnd="url(#eco-arrow-gold)" />
      <path d="M1012 6 C 1012 48, 600 52, 600 100" stroke={GOLD} strokeOpacity="0.55" strokeDasharray="2 7" strokeWidth="1.6" markerEnd="url(#eco-arrow-gold)" />
    </svg>
  )
}

/** Centered soft vertical line between ASV and AERS. Desktop only. */
function StemLine() {
  return (
    <motion.span
      className="pointer-events-none mx-auto hidden h-[76px] w-[2px] rounded-full dt:block"
      style={{ background: 'linear-gradient(to bottom, rgba(0,153,255,0.6), rgba(30,114,128,0.6))' }}
      initial={{ opacity: 0.001, scaleY: 0.4 }}
      whileInView={{ opacity: 1, scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.35, duration: 1.2, ease: EASE }}
      aria-hidden
    />
  )
}

/* ---------- Decorations around the ecosystem (never inside cards) ---------- */

/** Handwritten annotation in connector-band whitespace. */
function Annotation({ children, className = '', rotate = -4 }: { children: string; className?: string; rotate?: number }) {
  return (
    <motion.span
      className={`pointer-events-none absolute hidden select-none lg:block ${className}`}
      style={{ fontFamily: "'Caveat', cursive", fontSize: '21px', lineHeight: '26px', color: '#2D86FC', transform: `rotate(${rotate}deg)` }}
      initial={{ opacity: 0.001, y: 10 }}
      whileInView={{ opacity: 0.9, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.7, duration: 1.6, ease: EASE }}
      aria-hidden
    >
      {children}
    </motion.span>
  )
}

/** Dashed decorative ring. */
function DottedRing({ className = '', size = 44 }: { className?: string; size?: number }) {
  return (
    <span
      className={`pointer-events-none absolute hidden rounded-full border lg:block ${className}`}
      style={{ width: size, height: size, borderStyle: 'dashed', borderColor: 'rgba(0,153,255,0.35)', borderWidth: 1.5 }}
      aria-hidden
    />
  )
}

/** Small decorative dot. */
function DecoDot({ className = '', size = 7 }: { className?: string; size?: number }) {
  return (
    <span
      className={`pointer-events-none absolute hidden rounded-full lg:block ${className}`}
      style={{ width: size, height: size, backgroundColor: BLUE, opacity: 0.4 }}
      aria-hidden
    />
  )
}

/** Curved decorative arrow (thin, low opacity) flanking the ecosystem. */
function CurveArrow({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      className={`pointer-events-none absolute hidden h-16 w-20 lg:block ${className}`}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      viewBox="0 0 80 64"
      fill="none"
      aria-hidden
    >
      <path d="M6 8 C 30 44, 58 52, 74 46" stroke={BLUE} strokeOpacity="0.35" strokeWidth="1.6" strokeDasharray="3 6" strokeLinecap="round" />
      <path d="M66 38 74 46 63 52" stroke={BLUE} strokeOpacity="0.35" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ---------- Section ---------- */

export function EcosystemSection() {
  return (
    <section id="aers-ecosystem" className="relative overflow-hidden px-5 pb-24 pt-20 dt:px-0 dt:pb-[140px] dt:pt-[120px]">
      {/* Caveat handwriting font for annotations */}
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600&display=swap" rel="stylesheet" />

      {/* ===== atmospheric light-blue background ===== */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(240,248,255,0) 0%, rgba(233,244,252,0.75) 22%, rgba(236,246,252,0.75) 78%, rgba(240,248,255,0) 100%)',
        }}
      />
      {/* soft blue glow centered behind the ecosystem */}
      <div
        className="pointer-events-none absolute left-1/2 top-[46%] h-[92%] w-[124%] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            'radial-gradient(42% 46% at 50% 50%, rgba(0,153,255,0.13) 0%, rgba(0,153,255,0) 68%), radial-gradient(26% 34% at 50% 32%, rgba(30,114,128,0.10) 0%, rgba(30,114,128,0) 100%)',
        }}
      />
      {/* subtle dot pattern across the band */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(rgba(0,153,255,0.14) 1.2px, transparent 1.2px)`,
          backgroundSize: '30px 30px',
          maskImage: 'radial-gradient(78% 74% at 50% 48%, #000 18%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(78% 74% at 50% 48%, #000 18%, transparent 100%)',
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center">
        {/* ============ Eyebrow ============ */}
        <Reveal delay={0.1}>
          <span className="inline-flex items-center gap-2 rounded-[30px] border border-blue/15 bg-white/80 px-4 py-2 shadow-[0_6px_18px_rgba(0,80,160,0.10)] backdrop-blur-sm">
            <span className="relative flex h-[7px] w-[7px]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue opacity-60" />
              <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-blue" />
            </span>
            <span
              className="whitespace-nowrap text-ink"
              style={{ fontSize: '13px', lineHeight: '16.8px', letterSpacing: '0.14em', fontWeight: 600 }}
            >
              THE AERS ECOSYSTEM
            </span>
          </span>
        </Reveal>

        {/* ============ Headline — two lines, gradient accent on line 2 ============ */}
        <Reveal delay={0.15} className="mt-8">
          <h2
            className="text-center font-display tracking-[-0.05em] text-ink-2"
            style={{ fontSize: 'clamp(38px, 5.4vw, 64px)', lineHeight: 'clamp(46px, 6vw, 74px)', fontWeight: 500 }}
          >
            A Connected Ecosystem for
            <br />
            <span
              style={{
                background: 'linear-gradient(100deg, #2D86FC 8%, #081E5D 92%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                fontWeight: 600,
              }}
            >
              Greater Graduate Readiness
            </span>
          </h2>
        </Reveal>

        {/* ============ Supporting paragraph ============ */}
        <Reveal delay={0.2} className="mt-6">
          <p
            className="max-w-[620px] text-center text-gray-1"
            style={{ fontSize: '18px', lineHeight: '27px', letterSpacing: '-0.36px', fontWeight: 500 }}
          >
            ASV Education designs the framework, AERS delivers it, and three
            stakeholder groups turn it into measurable readiness.
          </p>
        </Reveal>

        {/* ============ Level 1 — ASV Education (large horizontal card) ============ */}
        <Reveal delay={0.25} className="mt-16 w-full dt:mt-[90px]">
          <motion.div
            className="flex w-full flex-col items-start gap-7 rounded-[32px] border border-blue/10 bg-white p-8 shadow-[0_24px_64px_rgba(0,80,160,0.13)] tb:flex-row tb:items-center tb:gap-10 tb:p-11"
            initial={{ opacity: 0.001, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ delay: 0.25, duration: 2, ease: EASE }}
            whileHover={{ y: -4 }}
          >
            <img src={asvLogo} alt="ASV Education logo" className="h-[86px] w-auto shrink-0 object-contain" />
            <span className="hidden h-16 w-px bg-blue/10 tb:block" aria-hidden />
            <p
              className="max-w-[520px] text-gray-1"
              style={{ fontSize: '19px', lineHeight: '28px', letterSpacing: '-0.38px', fontWeight: 500 }}
            >
              Designs the employability framework and ecosystem
            </p>
            <span
              className="ml-auto hidden shrink-0 items-center gap-2.5 rounded-full border border-blue/15 bg-blue/[0.06] px-5 py-2.5 tb:flex"
            >
              <span className="h-2 w-2 rounded-full bg-blue" />
              <span className="text-ink" style={{ fontSize: '13px', lineHeight: '17px', letterSpacing: '0.1em', fontWeight: 600 }}>
                LEVEL 01 — DESIGN
              </span>
            </span>
          </motion.div>
        </Reveal>

        {/* connector band with side annotations */}
        <div className="relative hidden w-full dt:block">
          <StemLine />
          <Annotation className="left-[2%] top-1/2 -translate-y-1/2" rotate={-5}>
            the framework designer
          </Annotation>
          <DottedRing className="right-[2%] top-1/2 -translate-y-1/2" size={42} />
          <CurveArrow className="right-[7%] top-1/2 -translate-y-1/2" flip />
        </div>

        {/* ============ Level 2 — AERS Flagship Programme (large card) ============ */}
        <Reveal delay={0.35} className="w-full">
          <motion.div
            className="relative flex w-full flex-col items-start gap-7 overflow-hidden rounded-[32px] bg-navy p-8 shadow-[0_24px_64px_rgba(15,61,102,0.25)] tb:flex-row tb:items-center tb:gap-10 tb:p-11"
            initial={{ opacity: 0.001, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ delay: 0.35, duration: 2, ease: EASE }}
            whileHover={{ y: -4 }}
          >
            <img src={aersLogo} alt="AERS — Flagship Programme logo" className="relative h-[86px] w-auto shrink-0 object-contain brightness-0 invert" />
            <span className="relative hidden h-16 w-px bg-white/20 tb:block" aria-hidden />
            <p className="relative max-w-[520px] text-white/90" style={{ fontSize: '19px', lineHeight: '28px', letterSpacing: '-0.38px', fontWeight: 500 }}>
              Applies the framework through <span className="text-[#2D86FC] font-semibold">Explore</span> and{' '}
              <span className="text-[#2D86FC] font-semibold">Transform</span>
            </p>
            <span className="relative ml-auto hidden shrink-0 items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 tb:flex">
              <span className="h-2 w-2 rounded-full bg-teal" />
              <span className="text-white" style={{ fontSize: '13px', lineHeight: '17px', letterSpacing: '0.1em', fontWeight: 600 }}>
                LEVEL 02 — DELIVER
              </span>
            </span>
          </motion.div>
        </Reveal>

        {/* fan-out band with side decorations */}
        <div className="relative w-full">
          <FanOutLines />
          <Annotation className="right-[1%] top-1/2 -translate-y-1/2" rotate={3}>
            explore → transform
          </Annotation>
          <DecoDot className="left-[2%] top-1/2 -translate-y-1/2" size={7} />
          <DottedRing className="left-[5%] top-1/2 -translate-y-1/2" size={34} />
        </div>

        {/* ============ Level 3 — three large stakeholder cards ============ */}
        <div className="grid w-full grid-cols-1 gap-7 tb:grid-cols-3 dt:gap-9">
          {[
            { icon: Landmark, title: 'Institutions', desc: 'Provide context and enable implementation' },
            { icon: GraduationCap, title: 'Learners', desc: 'Build skills and submit verified evidence' },
            { icon: Briefcase, title: 'Employers', desc: 'Contribute workplace expectations and exposure' },
          ].map((row, i) => (
            <motion.div
              key={row.title}
              id={row.title.toLowerCase()}
              className="scroll-mt-28 flex min-h-[240px] flex-col items-start gap-6 rounded-[30px] border border-blue/10 bg-white p-8 shadow-[0_18px_48px_rgba(0,80,160,0.10)]"
              initial={{ opacity: 0.001, y: 70, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ delay: 0.5 + i * 0.14, duration: 2, ease: EASE }}
              whileHover={{ y: -5 }}
            >
              <span
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                style={{ background: 'linear-gradient(135deg, rgba(0,153,255,0.12) 0%, rgba(30,114,128,0.16) 100%)' }}
              >
                <row.icon className="h-7 w-7" style={{ color: TEAL }} strokeWidth={1.7} />
              </span>
              <div className="flex flex-col gap-2.5">
                <span
                  className="font-display text-ink-2"
                  style={{ fontSize: 'clamp(22px, 2vw, 25px)', lineHeight: 'clamp(29px, 2.4vw, 32px)', letterSpacing: '-0.03em', fontWeight: 600 }}
                >
                  {row.title}
                </span>
                <span className="text-gray-1" style={{ fontSize: '16px', lineHeight: '24px', letterSpacing: '-0.32px' }}>
                  {row.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* converge band */}
        <div className="relative w-full">
          <ConvergeLines />
          <Annotation className="left-[1%] top-1/2 -translate-y-1/2" rotate={-3}>
            what everyone gains
          </Annotation>
          <DecoDot className="right-[3%] top-1/2 -translate-y-1/2" size={6} />
          <CurveArrow className="left-[6%] top-1/2 -translate-y-1/2" />
        </div>

        {/* ============ Level 4 — SHARED OUTCOME (Gold accent card) ============ */}
        <Reveal delay={0.85} className="w-full">
          <motion.div
            className="relative flex w-full flex-col items-center gap-5 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#D4A017] to-[#B8860B] px-9 py-10 text-center shadow-[0_24px_60px_rgba(212,160,23,0.30)] tb:flex-row tb:justify-center tb:gap-7 tb:py-12 text-white"
            initial={{ opacity: 0.001, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ delay: 0.85, duration: 2, ease: EASE }}
            whileHover={{ y: -4 }}
          >
            <span
              className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20"
            >
              <Award className="h-7 w-7 text-white" strokeWidth={1.8} />
            </span>
            <span
              className="relative font-display text-white"
              style={{ fontSize: 'clamp(20px, 2.2vw, 25px)', lineHeight: 'clamp(27px, 2.6vw, 33px)', letterSpacing: '0.08em', fontWeight: 700 }}
            >
              SHARED OUTCOME
            </span>
            <span className="relative hidden h-7 w-px bg-white/30 tb:block" aria-hidden />
            <span className="relative text-white/95" style={{ fontSize: '18px', lineHeight: '26px', letterSpacing: '-0.36px', fontWeight: 500 }}>
              Measurable improvement and evidence-backed readiness
            </span>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
