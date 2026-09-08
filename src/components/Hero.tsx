import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { Badge, ButtonFilled, ButtonOutline } from './shared/ui'
import { EASE } from './shared/Reveal'
import { HeroCollage } from './HeroCollage'

/**
 * Hero — graduate-employment version.
 * Typography identical to the site's design system:
 * - Badge pill (cream bg, teal dot)
 * - H1 Bricolage Grotesque 56px/500, ls -0.06em, teal accent span (2-line break)
 * - Subheadline Inter Display 20px/500 gray, 600px max
 * - Filled + Outline CTAs
 * Below CTAs: full-width blue student collage (HeroCollage).
 */
export function Hero() {
  return (
    <header className="relative flex flex-col items-center px-5 pb-10 pt-[80px] dt:px-0 dt:pb-[80px] dt:pt-[80px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-10 dt:gap-[60px]">
        {/* Text content — centered in upper portion */}
        <div className="flex w-full flex-col items-center gap-6 pt-5 dt:pt-[60px]">
          <div className="flex w-full flex-col items-center gap-4">
            <motion.div
              initial={{ opacity: 0.001, y: 80, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.1, duration: 2, ease: EASE }}
            >
              <Badge>3 hours AI Masterclass</Badge>
            </motion.div>

            <motion.h1
              className="w-full text-center font-display text-ink-2"
              style={{
                fontSize: 'clamp(36px, 4.3vw, 56px)',
                lineHeight: 'clamp(41px, 4.28vw, 61.6px)',
                letterSpacing: '-0.06em',
                fontWeight: 500,
              }}
              initial={{ opacity: 0.001, y: 80, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 2, ease: EASE }}
            >
              Prepare Graduates for a{' '}
              <span className="text-teal">Changing World of Work</span>
            </motion.h1>

            <motion.p
              className="max-w-[600px] text-center text-gray-1"
              style={{ fontSize: '20px', lineHeight: '28px', letterSpacing: '-0.4px', fontWeight: 500 }}
              initial={{ opacity: 0.001, y: 80, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 2, ease: EASE }}
            >
              A focused, evidence-informed approach to help institutions
              understand and strengthen graduate employment readiness.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0.001, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 2, ease: EASE }}
          >
            <ButtonFilled href="#booking">Book now</ButtonFilled>
            <ButtonOutline
              icon={
                <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-teal/10">
                  <Play className="h-3 w-3 fill-teal text-teal" />
                </span>
              }
            >
              Watch the intro
            </ButtonOutline>
          </motion.div>
        </div>

        {/* Full-width blue student collage — occupies the lower half */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0.001, y: 80, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 2, ease: EASE }}
        >
          <HeroCollage />
        </motion.div>
      </div>
    </header>
  )
}
