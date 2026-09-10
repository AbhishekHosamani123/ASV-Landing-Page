import { motion } from 'framer-motion'
import { Star, TrendingUp, Users, GraduationCap, Sparkles } from 'lucide-react'
import { EASE } from './shared/Reveal'
import centerImg from '../assets/hero/center.jpg'
import left1Img from '../assets/hero/left-1.jpg'
import left2Img from '../assets/hero/left-2.jpg'
import right1Img from '../assets/hero/right-1.jpg'
import right2Img from '../assets/hero/right-2.jpg'

/**
 * Full-width blue student collage (premium EdTech aesthetic):
 * - Soft blue radial glows + faint dot grid over the clean off-white bg
 * - 5 rounded-square portrait cards: large central student + 2 left + 2 right
 *   satellites (upper + lower pairs), slight rotations, soft blue shadows
 * - Floating white glass info/stat chips with blue icon tiles
 * - Thin dashed connecting lines from satellites to the central card
 * - Small blue decorative dots/sparkles
 * Desktop: full 1200px width, ~600px tall. Tablet: 4 satellites. Mobile: 3 portraits.
 */

const PORTRAITS = [
  { src: centerImg, name: 'Graduate' },
  { src: left1Img, name: 'Student' },
  { src: left2Img, name: 'Student' },
  { src: right1Img, name: 'Student' },
  { src: right2Img, name: 'Student' },
]

const BLUE = '#081E5D'

export function HeroCollage() {
  return (
    <div
      className="relative mx-auto w-full max-w-[1200px] overflow-x-clip"
      style={{ height: 'clamp(440px, 44vw, 620px)' }}
    >
      {/* ambient blue gradient glows */}
      <div
        className="pointer-events-none absolute left-1/2 top-[46%] h-[150%] w-[130%] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            'radial-gradient(38% 44% at 30% 38%, rgba(0,153,255,0.20) 0%, rgba(0,153,255,0) 100%), radial-gradient(34% 40% at 70% 55%, rgba(0,153,255,0.15) 0%, rgba(0,153,255,0) 100%), radial-gradient(50% 55% at 50% 50%, rgba(0,153,255,0.08) 0%, rgba(0,153,255,0) 100%)',
        }}
      />
      {/* faint dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(rgba(0,153,255,0.16) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(62% 62% at 50% 50%, #000 25%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(62% 62% at 50% 50%, #000 25%, transparent 100%)',
        }}
      />

      {/* thin dashed connecting lines (desktop only) */}
      <svg className="pointer-events-none absolute inset-0 hidden h-full w-full dt:block" fill="none" aria-hidden>
        <path d="M310 118 C 400 168, 460 196, 512 252" stroke={BLUE} strokeOpacity="0.42" strokeDasharray="3 7" strokeWidth="1.5" />
        <path d="M890 110 C 800 165, 740 195, 688 250" stroke={BLUE} strokeOpacity="0.42" strokeDasharray="3 7" strokeWidth="1.5" />
        <path d="M330 520 C 420 480, 480 448, 528 416" stroke={BLUE} strokeOpacity="0.36" strokeDasharray="3 7" strokeWidth="1.5" />
        <path d="M870 520 C 780 480, 720 448, 672 416" stroke={BLUE} strokeOpacity="0.36" strokeDasharray="3 7" strokeWidth="1.5" />
      </svg>

      {/* ================= portrait cards ================= */}
      {/* central student — largest, blue ring, LIVE pill */}
      <Portrait
        src={PORTRAITS[0].src}
        alt={PORTRAITS[0].name}
        className="left-1/2 top-[46%] z-20 h-[clamp(200px,25vw,320px)] w-[clamp(160px,19.5vw,252px)] -translate-x-1/2 -translate-y-1/2"
        ring
        delay={0.35}
      >
        <span className="absolute -right-3 -top-3 flex items-center gap-1.5 rounded-full bg-blue px-2.5 py-1 text-white shadow-lg">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
          </span>
          <span className="text-[10px] font-semibold leading-none tracking-wide">LIVE</span>
        </span>
      </Portrait>

      {/* upper-left */}
      <Portrait
        src={PORTRAITS[1].src}
        alt={PORTRAITS[1].name}
        className="left-[7%] top-[2%] z-10 h-[clamp(110px,12.5vw,168px)] w-[clamp(92px,10vw,134px)] -rotate-6"
        delay={0.5}
      />
      {/* upper-right */}
      <Portrait
        src={PORTRAITS[2].src}
        alt={PORTRAITS[2].name}
        className="right-[6%] top-[3%] z-10 h-[clamp(110px,12.5vw,168px)] w-[clamp(92px,10vw,134px)] rotate-6"
        delay={0.55}
      />
      {/* lower-left */}
      <Portrait
        src={PORTRAITS[3].src}
        alt={PORTRAITS[3].name}
        className="bottom-[1%] left-[10%] z-10 hidden h-[clamp(104px,11vw,156px)] w-[clamp(86px,8.8vw,124px)] rotate-2 tb:block"
        delay={0.7}
      />
      {/* lower-right */}
      <Portrait
        src={PORTRAITS[4].src}
        alt={PORTRAITS[4].name}
        className="bottom-[1%] right-[9%] z-10 hidden h-[clamp(104px,11vw,156px)] w-[clamp(86px,8.8vw,124px)] -rotate-2 tb:block"
        delay={0.75}
      />

      {/* ================= floating glass stat chips ================= */}
      {/* 1. Top-left: ⭐ Student Progress */}
      <FloatCard className="left-[12%] dt:left-[14%] top-[12%] z-30 max-[809px]:left-[2%] max-[809px]:top-[25%]" delay={0.8}>
        <IconTile><Star className="h-[18px] w-[18px] fill-[#F5A623] text-[#F5A623]" /></IconTile>
        <div className="flex flex-col">
          <span className="text-[13px] dt:text-[14px] font-semibold leading-tight text-ink">Student Progress</span>
          <span className="text-[11px] dt:text-[12px] leading-tight text-gray-1">Skills & development tracked</span>
        </div>
      </FloatCard>

      {/* 2. Top-right: 👥 Learner Insights */}
      <FloatCard className="right-[12%] dt:right-[13%] top-[10%] z-30 max-[809px]:right-[2%] max-[809px]:top-[6%]" delay={0.9}>
        <IconTile><Users className="h-[18px] w-[18px] text-[#2D86FC]" /></IconTile>
        <div className="flex flex-col">
          <span className="text-[13px] dt:text-[14px] font-semibold leading-tight text-ink">Learner Insights</span>
          <span className="text-[11px] dt:text-[12px] leading-tight text-gray-1">Understand student strengths</span>
        </div>
      </FloatCard>

      {/* 3. Middle-left: 🎓 Employability Ready */}
      <FloatCard className="left-[14%] dt:left-[17%] top-[54%] z-40 hidden tb:flex" delay={1.0}>
        <IconTile><GraduationCap className="h-[18px] w-[18px] text-[#2D86FC]" /></IconTile>
        <div className="flex flex-col">
          <span className="text-[13px] dt:text-[14px] font-semibold leading-tight text-ink">Employability Ready</span>
          <span className="text-[11px] dt:text-[12px] leading-tight text-gray-1">Evidence-informed development</span>
        </div>
      </FloatCard>

      {/* 4. Middle-right: ↗ Career Readiness */}
      <FloatCard className="right-[14%] dt:right-[16%] top-[56%] z-40 hidden tb:flex" delay={1.05}>
        <IconTile><TrendingUp className="h-[18px] w-[18px] text-[#2D86FC]" /></IconTile>
        <div className="flex flex-col">
          <span className="text-[13px] dt:text-[14px] font-semibold leading-tight text-ink">Career Readiness</span>
          <span className="text-[11px] dt:text-[12px] leading-tight text-gray-1">Skills aligned to opportunity</span>
        </div>
      </FloatCard>

      {/* 5. Bottom-left: ◉ Explore → Transform → Evidence */}
      <FloatCard className="bottom-[2%] left-[16%] dt:left-[22%] z-40 hidden tb:flex" delay={1.1}>
        <IconTile>
          <span className="h-3.5 w-3.5 rounded-full border-2 border-[#2D86FC] flex items-center justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2D86FC]" />
          </span>
        </IconTile>
        <div className="flex flex-col">
          <span className="text-[13px] dt:text-[14px] font-semibold leading-tight text-ink">Explore → Transform → Evidence</span>
          <span className="text-[11px] dt:text-[12px] leading-tight text-gray-1">A structured student journey</span>
        </div>
      </FloatCard>

      {/* ================= decorative shapes ================= */}
      <Sparkle className="left-[30%] top-[8%]" delay={1.25} />
      <Sparkle className="right-[30%] top-[6%]" delay={1.3} size={14} />
      <Sparkle className="left-[48%] bottom-[4%]" delay={1.35} size={12} />
      <Dot className="left-[24%] top-[20%]" />
      <Dot className="right-[25%] bottom-[24%]" />
      <Dot className="left-[52%] top-[4%]" size={10} />
      <Ring className="right-[20%] top-[30%]" size={16} />
      <Ring className="left-[19%] bottom-[16%]" size={12} />
    </div>
  )
}

/* ---------- building blocks ---------- */

function Portrait({
  src,
  alt,
  className,
  ring,
  delay,
  children,
}: {
  src: string
  alt: string
  className: string
  ring?: boolean
  delay: number
  children?: React.ReactNode
}) {
  return (
    <motion.figure
      className={`absolute overflow-hidden rounded-[22px] bg-white shadow-[0_20px_48px_rgba(0,60,130,0.18)] ${className}`}
      initial={{ opacity: 0.001, y: 60, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 1.6, ease: EASE }}
      whileHover={{ scale: 1.03 }}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      {ring && (
        <span
          className="pointer-events-none absolute inset-0 rounded-[22px]"
          style={{ boxShadow: `inset 0 0 0 3px rgba(0,153,255,0.9)` }}
        />
      )}
      {children}
    </motion.figure>
  )
}

function FloatCard({ className, delay, children }: { className: string; delay: number; children: React.ReactNode }) {
  return (
    <motion.div
      className={`absolute flex items-center gap-2.5 rounded-2xl bg-white/90 px-3 py-2.5 shadow-[0_16px_38px_rgba(0,80,160,0.16)] backdrop-blur-md ${className}`}
      initial={{ opacity: 0.001, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 1.4, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

function IconTile({ children }: { children: React.ReactNode }) {
  return <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue/15">{children}</span>
}

function Sparkle({ className, delay, size = 18 }: { className: string; delay: number; size?: number }) {
  return (
    <motion.span
      className={`pointer-events-none absolute text-blue/60 ${className}`}
      initial={{ opacity: 0.001, scale: 0.4 }}
      animate={{ opacity: [0.001, 1, 0.5], rotate: 360 }}
      transition={{ delay, duration: 2.4, ease: EASE, repeat: Infinity, repeatDelay: 3 }}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <Sparkles style={{ width: size, height: size }} />
    </motion.span>
  )
}

function Dot({ className, size = 7 }: { className: string; size?: number }) {
  return (
    <span
      className={`pointer-events-none absolute rounded-full bg-blue/40 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    />
  )
}

function Ring({ className, size = 14 }: { className: string; size?: number }) {
  return (
    <span
      className={`pointer-events-none absolute rounded-full border-2 border-blue/40 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    />
  )
}
