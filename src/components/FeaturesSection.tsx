import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from './shared/ui'
import { Reveal, EASE } from './shared/Reveal'
import { WHY_FEATURES } from '../data/content'

export function FeaturesSection() {
  const [active, setActive] = useState(0)

  // Scroll spy to detect active card with robust thresholding & last-card handling
  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight
      const triggerLine = vh * 0.45
      let activeIdx = 0

      for (let i = 0; i < WHY_FEATURES.length; i++) {
        const el = document.getElementById(`feature-card-${i}`)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= triggerLine) {
            activeIdx = i
          }
        }
      }

      // Check last card (Evolve): if user reaches it or it's prominently in view
      const lastIdx = WHY_FEATURES.length - 1
      const lastEl = document.getElementById(`feature-card-${lastIdx}`)
      if (lastEl) {
        const lastRect = lastEl.getBoundingClientRect()
        if (lastRect.top <= vh * 0.65 && lastRect.bottom > 100) {
          activeIdx = lastIdx
        }
      }

      setActive(activeIdx)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToCard = (index: number) => {
    setActive(index)
    const element = document.getElementById(`feature-card-${index}`)
    if (element) {
      const yOffset = -120
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section id="why-choose" className="flex flex-col items-center gap-[30px] px-5 py-10 dt:gap-[60px] dt:px-0 dt:py-[80px]">
      <div className="flex w-full max-w-[1200px] flex-col gap-[30px] dt:flex-row dt:gap-[50px]">
        {/* Left: sticky header + interactive pop-up small cards */}
        <div className="flex w-full flex-col gap-6 dt:sticky dt:top-[120px] dt:w-[480px] dt:self-start">
          <div className="flex flex-col gap-4">
            <Reveal delay={0.1}>
              <SectionHeading>
                See the complete picture. <br />
                <span className="text-[#2D86FC]">Then improve it</span>
              </SectionHeading>
            </Reveal>
            <Reveal delay={0.15}>
              <p
                className="max-w-[480px] text-gray-1 text-base leading-[23px] tracking-[-0.32px]"
              >
                AERS works with institutions, not on institutions. The process is collaborative, contextual and designed to convert evidence into practical action.
              </p>
            </Reveal>
          </div>

          {/* 4 Small Cards */}
          <div className="flex flex-col gap-3.5 pt-3">
            {WHY_FEATURES.map((f, i) => {
              const isCurrent = active === i
              const stepNum = String(i + 1).padStart(2, '0')

              return (
                <motion.button
                  key={f.title}
                  onClick={() => scrollToCard(i)}
                  animate={{
                    scale: isCurrent ? 1.04 : 1,
                    x: isCurrent ? 10 : 0,
                    backgroundColor: isCurrent ? '#FFFFFF' : 'rgba(244, 247, 251, 0.7)',
                    borderColor: isCurrent ? '#2D86FC' : 'rgba(226, 232, 240, 0.85)',
                    boxShadow: isCurrent
                      ? '0 12px 30px -4px rgba(45, 134, 252, 0.22), 0 4px 10px -2px rgba(0, 0, 0, 0.05)'
                      : '0 1px 3px rgba(0, 0, 0, 0.03)',
                  }}
                  transition={{ type: 'spring', stiffness: 450, damping: 28 }}
                  className={`group relative flex h-[64px] items-center justify-between rounded-2xl px-5 py-3 text-left border transition-all cursor-pointer overflow-hidden ${
                    isCurrent ? 'ring-2 ring-[#2D86FC]/30' : 'hover:bg-white/90 hover:border-gray-300'
                  }`}
                  whileHover={{ scale: isCurrent ? 1.04 : 1.015 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Left accent highlight bar when active */}
                  {isCurrent && (
                    <motion.div
                      layoutId="active-bar"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2D86FC] rounded-r-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center gap-4 pl-1">
                    {/* Step number badge */}
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold transition-all duration-300 ${
                        isCurrent
                          ? 'bg-[#2D86FC] text-white shadow-sm shadow-[#2D86FC]/40'
                          : 'bg-gray-200/70 text-gray-500 group-hover:bg-gray-300/80 group-hover:text-ink'
                      }`}
                    >
                      {stepNum}
                    </span>

                    <div className="flex flex-col">
                      <span
                        className={`text-[16px] transition-colors duration-300 ${
                          isCurrent ? 'text-ink font-bold' : 'text-gray-2 font-medium group-hover:text-ink'
                        }`}
                        style={{ lineHeight: '22px', letterSpacing: '-0.32px' }}
                      >
                        {f.title}
                      </span>
                    </div>
                  </div>

                  {/* Right indicator: active arrow or pulsing dot */}
                  <div className="flex items-center gap-2">
                    {isCurrent ? (
                      <motion.div
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-1.5 text-[#2D86FC] font-bold text-sm"
                      >
                        <span>Active</span>
                        <span className="text-base font-extrabold">→</span>
                      </motion.div>
                    ) : (
                      <span className="h-2 w-2 rounded-full bg-gray-300 group-hover:bg-gray-400 transition-colors" />
                    )}
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Right: 4 Feature Cards */}
        <div className="flex w-full flex-col gap-[70px] dt:w-[620px]">
          {WHY_FEATURES.map((f, i) => {
            const isCurrent = active === i
            const stepNum = String(i + 1).padStart(2, '0')

            return (
              <motion.div
                key={f.title}
                id={`feature-card-${i}`}
                className="flex w-full flex-col gap-6 scroll-mt-[130px]"
                initial={{ opacity: 0.001, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '0px 0px -15% 0px' }}
                transition={{ delay: 0.1, duration: 0.8, ease: EASE }}
              >
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide uppercase transition-colors duration-300 ${
                        isCurrent
                          ? 'bg-[#2D86FC]/10 text-[#2D86FC]'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      Step {stepNum}
                    </span>
                  </div>

                  <h3
                    className={`font-body transition-colors duration-300 ${
                      isCurrent ? 'text-ink font-bold' : 'text-gray-1 font-semibold'
                    }`}
                    style={{ fontSize: '26px', lineHeight: '33px', letterSpacing: '-0.96px' }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="text-gray-1 text-base leading-[23px] tracking-[-0.32px]"
                  >
                    {f.desc}
                  </p>
                </div>

                <motion.div
                  className={`overflow-hidden rounded-2xl border transition-all duration-500 shadow-sm ${
                    isCurrent
                      ? 'border-[#2D86FC]/40 shadow-xl shadow-blue-500/5'
                      : 'border-light-gray'
                  }`}
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <img
                    src={f.img}
                    alt={f.title}
                    className={`w-full object-cover transition-all duration-500 ${
                      isCurrent ? 'opacity-100 brightness-100' : 'opacity-90 brightness-[0.98]'
                    }`}
                    style={{ height: 'clamp(210px, 28vw, 380px)' }}
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

