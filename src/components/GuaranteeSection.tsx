import { motion } from 'framer-motion'
import { Badge, ButtonFilled } from './shared/ui'
import { SectionHeading } from './shared/ui'
import { Reveal, EASE } from './shared/Reveal'
import graduatesImg from '../assets/graduates.png'

/**
 * Reference guarantee section: white bg, pad 80px 100px.
 * H2 "A risk-free decision" (risk-free teal). Left: image 500x333 r16.
 * Right: "I Promise You" 24px/500, two paragraphs 16px gray-1, CTA "Book now".
 */
export function GuaranteeSection() {
  return (
    <section className="flex flex-col items-center gap-[30px] bg-white px-5 py-10 dt:gap-[60px] dt:px-0 dt:py-[80px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <Reveal delay={0.1}>
            <Badge>Evolve</Badge>
          </Reveal>
          <Reveal delay={0.15}>
            <SectionHeading>
              <span className="text-[#2D86FC]">Evolve</span> with progress
            </SectionHeading>
          </Reveal>
        </div>

        <div className="flex w-full max-w-[1040px] flex-col items-center gap-8 dt:flex-row dt:gap-[40px]">
          <motion.div
            className="w-full overflow-hidden rounded-2xl"
            initial={{ opacity: 0.001, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ delay: 0.2, duration: 2, ease: EASE }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={graduatesImg}
              alt="Graduate Journey"
              className="w-full object-cover"
              style={{ height: 'clamp(223px, 30vw, 333px)' }}
              loading="lazy"
            />
          </motion.div>

          <div className="flex w-full flex-col gap-2.5">
            <motion.h3
              className="font-body text-ink"
              style={{ fontSize: '24px', lineHeight: '31.2px', letterSpacing: '-0.96px', fontWeight: 500 }}
              initial={{ opacity: 0.001, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 2, ease: EASE }}
            >
              A system that keeps evolving
            </motion.h3>
            <motion.p
              className="text-gray-1"
              style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}
              initial={{ opacity: 0.001, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 2, ease: EASE }}
            >
              Review progress, learn from what works, and continuously strengthen the system to create better outcomes over time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0.001, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 2, ease: EASE }}
              className="pt-2"
            >
              <ButtonFilled href="#booking">Explore AERS</ButtonFilled>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
