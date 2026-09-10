import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { Reveal, EASE } from './shared/Reveal'
import { SectionHeading } from './shared/ui'
import asvLogo from '../assets/logos/asv-logo.png'
import aersLogo from '../assets/logos/aers-logo.png'

/**
 * ASV Ecosystem:
 * ASV Education (large horizontal card)
 *   ↓
 * AERS — Flagship Programme (large white horizontal card with navy border)
 *   ↓
 * SHARED OUTCOME (large wide gold-accent card)
 */

const BLUE = '#081E5D'

/* ---------- Connector lines ---------- */

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

/** Connector between AERS and Shared Outcome with gold transition. Desktop only. */
function OutcomeStemLine() {
  return (
    <motion.span
      className="pointer-events-none mx-auto hidden h-[76px] w-[2px] rounded-full dt:block"
      style={{ background: 'linear-gradient(to bottom, #0F3D66, #D4A017)' }}
      initial={{ opacity: 0.001, scaleY: 0.4 }}
      whileInView={{ opacity: 1, scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.45, duration: 1.2, ease: EASE }}
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
    <section id="aers-ecosystem" className="relative overflow-hidden px-5 pb-12 pt-20 dt:px-0 dt:pb-[60px] dt:pt-[120px]">
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
              style={{ fontSize: '13px', lineHeight: '16.8px', letterSpacing: '0.04em', fontWeight: 600 }}
            >
              The ASV Employability Ecosystem
            </span>
          </span>
        </Reveal>

        {/* ============ Headline ============ */}
        <Reveal delay={0.15} className="mt-8 text-center">
          <SectionHeading className="text-center">
            One connected system for{' '}
            <span className="text-[#2D86FC]">measurable graduate readiness.</span>
          </SectionHeading>
        </Reveal>

        {/* ============ Supporting paragraph ============ */}
        <Reveal delay={0.2} className="mt-6">
          <p
            className="max-w-[620px] text-center text-gray-1"
            style={{ fontSize: '18px', lineHeight: '27px', letterSpacing: '-0.36px', fontWeight: 500 }}
          >
            ASV creates the employability ecosystem. AERS applies it. Institutions,
            learners and employers turn it into measurable readiness.
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
            <div className="flex flex-col gap-1 max-w-[540px]">
              <span className="text-[#2D86FC] text-[13px] font-semibold tracking-wider uppercase tb:hidden">
                LEVEL 01 — ECOSYSTEM
              </span>
              <h3 className="font-display text-ink-2 text-[20px] tb:text-[22px] font-semibold">ASV Education</h3>
              <p
                className="text-gray-1"
                style={{ fontSize: '16px', lineHeight: '25px', letterSpacing: '-0.38px', fontWeight: 450 }}
              >
                Defines the employability philosophy, framework, evidence principles and stakeholder ecosystem.
              </p>
            </div>
            <span
              className="ml-auto hidden shrink-0 items-center gap-2.5 rounded-full border border-blue/15 bg-blue/[0.06] px-5 py-2.5 tb:flex"
            >
              <span className="h-2 w-2 rounded-full bg-blue" />
              <span className="text-ink" style={{ fontSize: '13px', lineHeight: '17px', letterSpacing: '0.1em', fontWeight: 600 }}>
                LEVEL 01 — ECOSYSTEM
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

        {/* ============ Level 2 — AERS Flagship Programme (white card with navy border) ============ */}
        <Reveal delay={0.35} className="w-full">
          <motion.div
            className="relative flex w-full flex-col items-start gap-7 overflow-hidden rounded-[32px] border-2 border-navy bg-white p-8 shadow-[0_24px_64px_rgba(15,61,102,0.12)] tb:flex-row tb:items-center tb:gap-10 tb:p-11"
            initial={{ opacity: 0.001, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ delay: 0.35, duration: 2, ease: EASE }}
            whileHover={{ y: -4 }}
          >
            <img src={aersLogo} alt="AERS logo" className="relative h-[86px] w-auto shrink-0 object-contain" />
            <span className="relative hidden h-16 w-px bg-navy/15 tb:block" aria-hidden />
            <div className="relative flex flex-col gap-1 max-w-[540px]">
              <span className="text-[#2D86FC] text-[13px] font-semibold tracking-wider uppercase tb:hidden">
                LEVEL 02 — FLAGSHIP SYSTEM
              </span>
              <h3 className="font-display text-ink-2 text-[20px] tb:text-[22px] font-semibold">AERS</h3>
              <p
                className="text-gray-1"
                style={{ fontSize: '16px', lineHeight: '25px', letterSpacing: '-0.38px', fontWeight: 450 }}
              >
                Applies the framework through Explore, personalised development, structured Transform delivery, evidence and continuous improvement.
              </p>
            </div>
            <span className="relative ml-auto hidden shrink-0 items-center gap-2.5 rounded-full border border-navy/15 bg-navy/[0.06] px-5 py-2.5 tb:flex">
              <span className="h-2 w-2 rounded-full bg-navy" />
              <span className="text-ink" style={{ fontSize: '13px', lineHeight: '17px', letterSpacing: '0.1em', fontWeight: 600 }}>
                LEVEL 02 — FLAGSHIP SYSTEM
              </span>
            </span>
          </motion.div>
        </Reveal>

        {/* connector band between AERS and Shared Outcome */}
        <div className="relative hidden w-full dt:block">
          <OutcomeStemLine />
          <Annotation className="right-[2%] top-1/2 -translate-y-1/2" rotate={3}>
            explore → transform → outcome
          </Annotation>
          <DecoDot className="left-[2%] top-1/2 -translate-y-1/2" size={7} />
          <DottedRing className="left-[5%] top-1/2 -translate-y-1/2" size={34} />
          <CurveArrow className="right-[7%] top-1/2 -translate-y-1/2" />
        </div>

        {/* ============ Level 3 — SHARED OUTCOME (White card with Gold border) ============ */}
        <Reveal delay={0.5} className="w-full">
          <motion.div
            className="relative flex w-full flex-col items-center gap-5 overflow-hidden rounded-[32px] bg-white border-2 border-[#D4A017] px-9 py-10 text-center shadow-[0_20px_50px_rgba(212,160,23,0.12)] tb:flex-row tb:justify-center tb:gap-7 tb:py-11"
            initial={{ opacity: 0.001, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ delay: 0.5, duration: 2, ease: EASE }}
            whileHover={{ y: -4 }}
          >
            <span
              className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#D4A017]/10 border border-[#D4A017]/20"
            >
              <Award className="h-7 w-7 text-[#D4A017]" strokeWidth={1.8} />
            </span>
            <span
              className="relative font-display text-[#B8860B]"
              style={{ fontSize: 'clamp(19px, 2vw, 23px)', lineHeight: 'clamp(26px, 2.4vw, 31px)', letterSpacing: '0.08em', fontWeight: 700 }}
            >
              SHARED OUTCOME
            </span>
            <span className="relative hidden h-7 w-px bg-[#D4A017]/30 tb:block" aria-hidden />
            <span className="relative text-ink-2" style={{ fontSize: '18px', lineHeight: '26px', letterSpacing: '-0.36px', fontWeight: 500 }}>
              Measurable improvement and evidence-backed employment readiness.
            </span>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
