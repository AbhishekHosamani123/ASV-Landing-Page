import { motion, type Variants } from 'framer-motion'

/**
 * Reference appear animation, extracted from zono.framer.ai:
 * initial: opacity 0.001, scale 0.9, y 80 (30 on mobile)
 * animate: opacity 1, scale 1, y 0
 * transition: duration 2s, ease [0.16, 1, 0.3, 1], delay varies (0.1-0.4 stagger)
 */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export const fadeUp: Variants = {
  hidden: { opacity: 0.001, scale: 0.9, y: 80 },
  visible: (delay: number = 0.1) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay, duration: 2, ease: EASE, type: 'tween' },
  }),
}

interface RevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  y?: number
  once?: boolean
}

/** Scroll-triggered reveal matching Framer's appear settings */
export function Reveal({ children, delay = 0.1, className, y = 80 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.001, scale: 0.9, y }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ delay, duration: 2, ease: EASE, type: 'tween' }}
    >
      {children}
    </motion.div>
  )
}
