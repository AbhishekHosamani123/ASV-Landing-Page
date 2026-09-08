import { motion } from 'framer-motion'

interface ButtonFilledProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
  width?: string
}

/**
 * "Filled" button from the reference (Framer Button component):
 * bg rgb(30,114,128), radius 30px, padding 12px 24px, text 16px/400 white.
 * NO arrow icon. Hover: the inner text strip contains two stacked copies of
 * the label and slides up 22px ("roll" effect) — measured on the live site:
 * justify-content flips flex-start -> flex-end, copies swap.
 */
export function ButtonFilled({ children, onClick, href, className = '', width }: ButtonFilledProps) {
  const label = String(children)

  // Roll strip: static copy defines width; absolute copy below slides up on hover
  const roll = (
    <span className="relative block h-[22px] overflow-hidden">
      <span
        className="block whitespace-nowrap text-white"
        style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}
      >
        {label}
      </span>
      <span
        aria-hidden
        className="roll-text absolute left-0 top-[22px] block whitespace-nowrap text-white"
        style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}
      >
        {label}
      </span>
    </span>
  )

  const cls = `group relative inline-flex h-[46px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-[30px] bg-teal px-6 py-3 transition-colors duration-300 hover:bg-teal-2 ${className}`
  const style = width ? { width } : undefined

  if (href) {
    return (
      <motion.a href={href} className={cls} style={style} whileTap={{ scale: 0.96 }}>
        {roll}
      </motion.a>
    )
  }
  return (
    <motion.button onClick={onClick} className={cls} style={style} whileTap={{ scale: 0.96 }}>
      {roll}
    </motion.button>
  )
}

interface ButtonOutlineProps {
  children: React.ReactNode
  onClick?: () => void
  icon?: React.ReactNode
  className?: string
}

/**
 * "Outline" button from the reference:
 * transparent bg, radius 30px, padding 12px 24px, text teal,
 * 22px play-circle svg icon on the left. Same roll hover on text.
 */
export function ButtonOutline({ children, onClick, icon, className = '' }: ButtonOutlineProps) {
  const label = String(children)
  return (
    <motion.button
      onClick={onClick}
      className={`group inline-flex h-[46px] cursor-pointer items-center gap-2.5 rounded-[30px] px-6 py-3 ${className}`}
      whileTap={{ scale: 0.96 }}
    >
      {icon}
      <span className="relative flex h-[22px] items-center overflow-hidden">
        <span
          className="block text-teal"
          style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}
        >
          {label}
        </span>
      </span>
    </motion.button>
  )
}

/**
 * "Default" pill badge from the reference:
 * bg rgb(244,239,225), radius 30px, padding 6px 12px, gap 8px,
 * 7px teal dot + 14px text rgb(11,11,11)
 */
export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-[30px] bg-cream-2 px-3 py-1.5">
      <span className="relative flex h-[7px] w-[7px]">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
        <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-teal" />
      </span>
      <span
        className="font-normal whitespace-nowrap text-ink"
        style={{ fontSize: '14px', lineHeight: '16.8px', letterSpacing: '-0.7px' }}
      >
        {children}
      </span>
    </div>
  )
}

/**
 * Section heading in reference style:
 * Bricolage Grotesque 46px/400 (34px mobile), lh 55px, ls -2.3px
 */
export function SectionHeading({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={`font-display tracking-[-0.05em] text-ink-2 ${className}`}
      style={{
        fontSize: 'clamp(34px, 4.6vw, 46px)',
        lineHeight: 'clamp(41px, 4.8vw, 55px)',
        fontWeight: 400,
      }}
    >
      {children}
    </h2>
  )
}
