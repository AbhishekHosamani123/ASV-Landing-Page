import { useRef, useState, useEffect } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import {
  Search,
  BookOpen,
  FileText,
  TrendingUp,
  Users,
  BarChart3,
  ShieldCheck,
} from 'lucide-react'
import { SectionHeading } from './shared/ui'

interface RoadmapStep {
  number: string
  title: string
  desc: string
  icon: typeof Search
  isGold?: boolean
}

const ROADMAP_STEPS: RoadmapStep[] = [
  {
    number: '01',
    title: 'Assess & Personalise',
    desc: 'Baseline, profile and individual priorities.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Learn & Practise',
    desc: 'Short lessons, notes, activities and quizzes.',
    icon: BookOpen,
  },
  {
    number: '03',
    title: 'Guided Review',
    desc: 'Weekly facilitator-led review from the start of the learning journey.',
    icon: FileText,
  },
  {
    number: '04',
    title: 'Demonstrate',
    desc: 'Resume, recording, project, reflection or other authentic evidence.',
    icon: TrendingUp,
  },
  {
    number: '05',
    title: 'Human Review',
    desc: 'Rubric-based review for relevance, clarity, impact and structure.',
    icon: Users,
    isGold: true,
  },
  {
    number: '06',
    title: 'Improve & Progress',
    desc: 'Feedback, resubmission and traceable improvement over time.',
    icon: BarChart3,
  },
]

export function TransformJourneySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const desktopPathRef = useRef<SVGPathElement>(null)
  const mobilePathRef = useRef<SVGPathElement>(null)

  // Arrow position & orientation states
  const [desktopArrow, setDesktopArrow] = useState({ x: 190, y: 75, angle: 0 })
  const [mobileArrow, setMobileArrow] = useState({ x: 36, y: 40, angle: 90 })
  const [activeStepIndex, setActiveStepIndex] = useState(0)

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Synchronize arrow along the SVG curve
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // Clamp progress between 0 and 1
    const progress = Math.min(Math.max(latest, 0), 1)

    // Calculate Active Step index (0 to 5)
    // 0% -> 01, ~20% -> 02, ~40% -> 03, ~60% -> 04, ~80% -> 05, 100% -> 06
    if (progress < 0.12) {
      setActiveStepIndex(0)
    } else if (progress < 0.32) {
      setActiveStepIndex(1)
    } else if (progress < 0.52) {
      setActiveStepIndex(2)
    } else if (progress < 0.72) {
      setActiveStepIndex(3)
    } else if (progress < 0.90) {
      setActiveStepIndex(4)
    } else {
      setActiveStepIndex(5)
    }

    // Update Desktop Path Arrow Position & Tangent Angle
    if (desktopPathRef.current) {
      const path = desktopPathRef.current
      const totalLen = path.getTotalLength()
      const currentDist = progress * totalLen
      const pt = path.getPointAtLength(currentDist)

      // Calculate tangent angle by sampling slightly ahead and behind
      const delta = 1.5
      const pPrev = path.getPointAtLength(Math.max(0, currentDist - delta))
      const pNext = path.getPointAtLength(Math.min(totalLen, currentDist + delta))
      const angleDeg = (Math.atan2(pNext.y - pPrev.y, pNext.x - pPrev.x) * 180) / Math.PI

      setDesktopArrow({ x: pt.x, y: pt.y, angle: angleDeg })
    }

    // Update Mobile Path Arrow Position
    if (mobilePathRef.current) {
      const path = mobilePathRef.current
      const totalLen = path.getTotalLength()
      const currentDist = progress * totalLen
      const pt = path.getPointAtLength(currentDist)
      setMobileArrow({ x: pt.x, y: pt.y, angle: 90 })
    }
  })

  // Initial calculation on mount
  useEffect(() => {
    if (desktopPathRef.current) {
      const pt = desktopPathRef.current.getPointAtLength(0)
      setDesktopArrow({ x: pt.x, y: pt.y, angle: -12 })
    }
    if (mobilePathRef.current) {
      const pt = mobilePathRef.current.getPointAtLength(0)
      setMobileArrow({ x: pt.x, y: pt.y, angle: 90 })
    }
  }, [])

  const topRow = ROADMAP_STEPS.slice(0, 3) // 01, 02, 03
  const step4 = ROADMAP_STEPS[3] // 04
  const step5 = ROADMAP_STEPS[4] // 05 (Gold)
  const step6 = ROADMAP_STEPS[5] // 06

  return (
    <section
      ref={containerRef}
      id="transform-journey"
      className="relative bg-white h-[220vh] tb:h-[240vh]"
    >
      {/* Sticky viewport container so user drives the arrow journey smoothly while scrolling */}
      <div className="sticky top-0 flex h-screen w-full flex-col justify-between overflow-hidden px-4 py-6 sm:py-8 dt:px-0">
        {/* Atmospheric background glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[1140px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 50%, rgba(45, 134, 252, 0.04) 0%, rgba(240, 248, 255, 0.4) 60%, transparent 100%)',
          }}
        />

        {/* Decorative corner dot patterns */}
        <div
          className="pointer-events-none absolute left-6 top-8 h-24 w-24 opacity-25"
          style={{
            backgroundImage: 'radial-gradient(#2D86FC 1.5px, transparent 1.5px)',
            backgroundSize: '14px 14px',
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-6 bottom-12 h-28 w-28 opacity-25"
          style={{
            backgroundImage: 'radial-gradient(#2D86FC 1.5px, transparent 1.5px)',
            backgroundSize: '14px 14px',
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto flex w-full max-w-[1200px] flex-1 flex-col items-center justify-between gap-4 dt:gap-6">
          {/* ============ Header Area ============ */}
          <div className="flex flex-col items-center gap-2.5 text-center shrink-0 pt-2">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 shadow-sm border border-slate-200/90">
              <span className="h-2 w-2 rounded-full bg-[#00809D] animate-pulse" />
              <span className="text-[11.5px] font-bold tracking-widest text-[#081E5D] uppercase">
                16-WEEK TRANSFORM JOURNEY
              </span>
            </div>

            {/* Heading */}
            <SectionHeading className="text-center font-display text-ink-2">
              From baseline to{' '}
              <span className="text-[#00809D]">evidence-backed readiness.</span>
            </SectionHeading>

            {/* Subtitle */}
            <p
              className="max-w-[760px] text-center text-gray-1"
              style={{
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '-0.25px',
                fontWeight: 450,
              }}
            >
              One module at a time: learn, practise, review, improve and demonstrate before moving forward.
            </p>
          </div>

          {/* ============ Desktop & Tablet Roadmap (>= 810px) ============ */}
          <div className="relative hidden w-full tb:block my-auto max-w-[1140px]">
            {/* Decorative Flank Elements */}
            <div className="pointer-events-none absolute -left-3 top-[14%] hidden dt:block" aria-hidden="true">
              <DecoTree className="h-22 w-auto" />
              <DecoPebble className="mt-2 h-4 w-auto ml-3 opacity-70" />
            </div>
            <div className="pointer-events-none absolute -left-5 bottom-[18%] hidden dt:block" aria-hidden="true">
              <DecoPebble className="h-4.5 w-auto opacity-75" />
            </div>
            <div className="pointer-events-none absolute -right-3 bottom-[12%] hidden dt:block" aria-hidden="true">
              <DecoTree className="h-22 w-auto scale-x-[-1]" />
              <DecoPebble className="mt-2 h-4 w-auto ml-1 opacity-70" />
            </div>

            {/* SVG Connecting Dashed Curve + Scroll Driven Animated Paper Plane Arrow */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
              viewBox="0 0 1140 540"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* Invisible exact path used for coordinate calculations */}
              <path
                ref={desktopPathRef}
                d="M 190 75 C 300 48, 450 102, 570 75 C 690 48, 840 102, 950 75 C 1075 95, 1075 335, 950 355 C 840 328, 690 382, 570 355 C 450 328, 300 382, 190 355"
                stroke="transparent"
                fill="none"
              />

              {/* Top Wave: 01 (190, 75) -> 02 (570, 75) -> 03 (950, 75) */}
              <path
                d="M 190 75 C 300 48, 450 102, 570 75 C 690 48, 840 102, 950 75"
                stroke="#A5C7E8"
                strokeWidth="2.5"
                strokeDasharray="7 7"
                strokeLinecap="round"
              />

              {/* Right Loop Turn: 03 (950, 75) curves down and right into 04 (950, 355) */}
              <path
                d="M 950 75 C 1075 95, 1075 335, 950 355"
                stroke="#A5C7E8"
                strokeWidth="2.5"
                strokeDasharray="7 7"
                strokeLinecap="round"
              />

              {/* Bottom Wave: 04 (950, 355) -> 05 (570, 355) -> 06 (190, 355) */}
              <path
                d="M 950 355 C 840 328, 690 382, 570 355 C 450 328, 300 382, 190 355"
                stroke="#A5C7E8"
                strokeWidth="2.5"
                strokeDasharray="7 7"
                strokeLinecap="round"
              />

              {/* Waypoint Dots */}
              <circle cx="380" cy="75" r="4.5" fill="#2D86FC" opacity="0.85" />
              <circle cx="760" cy="75" r="4.5" fill="#2D86FC" opacity="0.85" />
              <circle cx="1045" cy="215" r="5" fill="#00809D" opacity="0.9" />
              <circle cx="760" cy="355" r="4.5" fill="#D4A017" opacity="0.85" />
              <circle cx="380" cy="355" r="4.5" fill="#2D86FC" opacity="0.85" />

              {/* Animated Paper Plane Navigation Arrow */}
              <g
                transform={`translate(${desktopArrow.x}, ${desktopArrow.y}) rotate(${desktopArrow.angle})`}
                style={{
                  filter: 'drop-shadow(0 4px 10px rgba(37, 99, 235, 0.45))',
                  transition: 'transform 0.05s ease-out',
                }}
              >
                {/* 3D Paper Plane Vector matching reference */}
                <g transform="translate(-18, -14) scale(0.95)">
                  {/* Left Wing (Light Cyan/Blue Top) */}
                  <polygon points="0,14 36,14 10,4" fill="#38BDF8" />
                  {/* Right Wing (Royal Blue Main) */}
                  <polygon points="0,14 36,14 10,24" fill="#2563EB" />
                  {/* Center Body / Bottom Keel */}
                  <polygon points="10,14 36,14 14,19" fill="#1D4ED8" />
                  {/* Center Fold Highlight */}
                  <polygon points="0,14 36,14 12,14" fill="#93C5FD" opacity="0.85" />
                  {/* Back Underside Shadow */}
                  <polygon points="6,14 14,19 10,14" fill="#0F3D66" opacity="0.5" />
                </g>
              </g>
            </svg>

            {/* Roadmap 3D Pedestal Nodes */}
            <div className="relative z-10 flex flex-col gap-18 dt:gap-20">
              {/* Top Row: 01, 02, 03 */}
              <div className="grid grid-cols-3 gap-8">
                {topRow.map((step, i) => (
                  <PedestalNode
                    key={step.number}
                    step={step}
                    isActive={activeStepIndex === i}
                  />
                ))}
              </div>

              {/* Bottom Row: 06 (left), 05 (center - GOLD), 04 (right) */}
              <div className="grid grid-cols-3 gap-8">
                <PedestalNode step={step6} isActive={activeStepIndex === 5} />
                <PedestalNode step={step5} isActive={activeStepIndex === 4} />
                <PedestalNode step={step4} isActive={activeStepIndex === 3} />
              </div>
            </div>
          </div>

          {/* ============ Mobile Vertical Journey (< 810px) ============ */}
          <div className="relative flex w-full flex-col gap-5 tb:hidden my-auto max-h-[60vh] overflow-y-auto pr-1">
            {/* SVG Vertical Track for Mobile with Animated Arrow */}
            <svg
              className="pointer-events-none absolute bottom-4 left-9 top-4 h-[92%] w-6 overflow-visible"
              aria-hidden="true"
            >
              <path
                ref={mobilePathRef}
                d="M 12 10 L 12 580"
                stroke="#A5C7E8"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />
              {/* Mobile Paper Plane */}
              <g
                transform={`translate(12, ${mobileArrow.y}) rotate(90)`}
                style={{
                  filter: 'drop-shadow(0 3px 8px rgba(37, 99, 235, 0.45))',
                }}
              >
                <g transform="translate(-16, -12) scale(0.8)">
                  <polygon points="0,14 36,14 10,4" fill="#38BDF8" />
                  <polygon points="0,14 36,14 10,24" fill="#2563EB" />
                  <polygon points="10,14 36,14 14,19" fill="#1D4ED8" />
                </g>
              </g>
            </svg>

            {ROADMAP_STEPS.map((step, i) => {
              const isActive = activeStepIndex === i
              return (
                <div key={step.number} className="relative z-10 flex items-start gap-4">
                  {/* Left Pedestal Disc */}
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className={`relative flex h-14 w-14 items-center justify-center rounded-2xl shadow-md border transition-all ${
                        step.isGold
                          ? 'bg-gradient-to-b from-[#F59E0B] to-[#B45309] border-[#FDE68A] text-white'
                          : 'bg-gradient-to-b from-[#1D4ED8] to-[#081E5D] border-[#60A5FA]/30 text-white'
                      } ${isActive ? 'scale-105 ring-4 ring-[#2D86FC]/30' : ''}`}
                    >
                      <div className="flex flex-col items-center">
                        <step.icon className="h-4.5 w-4.5 mb-0.5 text-white/95" strokeWidth={2} />
                        <span className="text-[12px] font-extrabold tracking-tight">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Text Card */}
                  <div
                    className={`flex flex-1 flex-col gap-1 rounded-2xl p-3.5 border transition-all ${
                      step.isGold
                        ? 'border-[#FDE68A] bg-[#FEFDF5]'
                        : 'border-slate-200/80 bg-white'
                    } ${isActive ? 'shadow-md border-[#2D86FC]/50' : 'shadow-sm'}`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[12px] font-bold ${
                          step.isGold
                            ? 'bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]'
                            : 'bg-[#EBF5FB] text-[#081E5D] border border-[#D0E6F7]'
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                    <p className="text-[13px] leading-[19px] text-gray-2 mt-0.5">
                      {step.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ============ Bottom Trust Information Bar ============ */}
          <div className="w-full shrink-0 pb-2">
            <div
              className="flex w-full flex-col items-center justify-between gap-3 rounded-full border border-[#D0E6F7] bg-[#EBF5FB] px-6 py-3.5 shadow-sm dt:flex-row dt:gap-8 dt:px-8 dt:py-4"
            >
              {/* Left Message */}
              <div className="flex items-center gap-3 text-center dt:text-left">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#2D86FC]/15 text-[#00809D]">
                  <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <p className="font-display text-[14.5px] font-semibold text-[#081E5D]">
                  Every readiness claim should be traceable to evidence.
                </p>
              </div>

              {/* Vertical Divider */}
              <div className="hidden h-5 w-px bg-[#BCE0FD] dt:block" aria-hidden="true" />

              {/* Right Message */}
              <div className="flex items-center gap-3 text-center dt:text-left">
                <p className="text-[14px] font-medium text-gray-2">
                  Technology supports the process; authorised human judgement remains central.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Individual 3D Isometric Pedestal Step Node with Scroll-Driven Active Highlights */
function PedestalNode({
  step,
  isActive,
}: {
  step: RoadmapStep
  isActive: boolean
}) {
  const isGold = step.isGold

  return (
    <div
      className={`group relative flex flex-col items-center text-center transition-all duration-300 ${
        isActive ? 'scale-105' : 'opacity-90 hover:opacity-100'
      }`}
    >
      {/* 3D Pedestal Stage Container */}
      <div className="relative flex flex-col items-center">
        {/* Floating Top White Circular Icon Badge */}
        <div
          className={`relative z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_8px_20px_rgba(0,0,0,0.14)] border transition-all duration-300 ${
            isGold
              ? 'border-amber-200 text-[#D97706]'
              : 'border-slate-100 text-[#081E5D]'
          } ${isActive ? (isGold ? 'ring-4 ring-amber-400/40' : 'ring-4 ring-blue-400/35') : ''}`}
        >
          <step.icon className="h-6 w-6" strokeWidth={1.9} />
        </div>

        {/* 3D Cylindrical Pedestal (100% Solid & Gapless Overlapped Structure) */}
        <div className="relative -mt-5 w-[114px] h-[58px] flex items-center justify-center">
          {/* Base Ambient Cast Shadow */}
          <div
            className={`absolute -bottom-2 h-7 w-[126px] rounded-[50%] blur-md transition-all duration-300 ${
              isGold
                ? isActive
                  ? 'bg-amber-500/45 w-[138px] h-8'
                  : 'bg-amber-900/25'
                : isActive
                ? 'bg-blue-600/35 w-[138px] h-8'
                : 'bg-slate-900/20'
            }`}
          />

          {/* Cylinder Lower Solid Body (starts from inside top cap, rounded bottom) */}
          <div
            className={`absolute inset-x-0 bottom-0 top-[12px] rounded-b-[24px] shadow-[0_12px_24px_rgba(0,0,0,0.22)] transition-all duration-300 ${
              isGold
                ? 'bg-gradient-to-b from-[#F59E0B] via-[#D97706] to-[#92400E] text-white shadow-amber-950/30'
                : 'bg-gradient-to-b from-[#1D4ED8] via-[#1E40AF] to-[#081E5D] text-white shadow-blue-950/30'
            }`}
          />

          {/* Top Ellipse Cap (seamlessly covers top rim) */}
          <div
            className={`absolute inset-x-0 top-0 h-[28px] rounded-[50%] shadow-inner transition-colors duration-300 ${
              isGold
                ? 'bg-gradient-to-b from-[#FDE047] via-[#FBBF24] to-[#F59E0B] border-t border-amber-200/50'
                : 'bg-gradient-to-b from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] border-t border-blue-300/40'
            }`}
          />

          {/* Number on front face */}
          <span className="relative z-10 font-display text-[21px] font-extrabold tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] pt-3.5">
            {step.number}
          </span>
        </div>
      </div>

      {/* Rounded Pill Title Badge */}
      <div className="mt-4">
        <span
          className={`inline-block rounded-full px-4 py-1 text-[14.5px] font-bold tracking-tight shadow-sm transition-all ${
            isGold
              ? 'bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]'
              : 'bg-[#EBF5FB] text-[#081E5D] border border-[#D0E6F7]'
          } ${isActive ? (isGold ? 'bg-[#FDE68A] ring-2 ring-amber-400/50' : 'bg-[#DDF0FC] ring-2 ring-blue-400/50') : ''}`}
        >
          {step.title}
        </span>
      </div>

      {/* Supporting Description */}
      <p
        className="mt-2 max-w-[230px] text-[13px] leading-[19px] text-[#4B5563]"
        style={{ letterSpacing: '-0.2px' }}
      >
        {step.desc}
      </p>
    </div>
  )
}

/** Vector Decorative Stylized Tree */
function DecoTree({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 70" fill="none" className={className} aria-hidden="true">
      <path d="M24 45 V 65" stroke="#0F3D66" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="24" cy="30" rx="18" ry="26" fill="#00809D" />
      <ellipse cx="20" cy="27" rx="12" ry="20" fill="#009FB7" opacity="0.6" />
      <path d="M24 40 L 20 34" stroke="#0F3D66" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M24 44 L 28 38" stroke="#0F3D66" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

/** Vector Decorative Stylized Pebble */
function DecoPebble({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 18" fill="none" className={className} aria-hidden="true">
      <ellipse cx="16" cy="9" rx="14" ry="7" fill="#CBD5E1" />
      <ellipse cx="13" cy="7" rx="9" ry="4" fill="#E2E8F0" />
    </svg>
  )
}
