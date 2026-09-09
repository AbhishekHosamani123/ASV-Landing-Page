import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { EASE } from './shared/Reveal'
import asvLogo from '../assets/asv-logo.png'

const NAV_LINKS = [
  { label: 'About', href: '#about-coach' },
  { label: 'Why Us', href: '#why-choose' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Learn', href: '#learn' },
]

/**
 * Reference navbar: fixed top, full width, height 80px,
 * inner container 1200px with logo (ASV, hidden on load, fades in),
 * links 18px Inter Display rgb(11,11,11), CTA button teal.
 * Link hover: color -> teal + slight slide animation (Framer default).
 */
export function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <motion.nav
      className="fixed top-0 left-0 z-50 w-full"
      initial={{ y: 0 }}
      style={{ background: 'transparent' }}
    >
      <div className="mx-auto flex h-[80px] max-w-[1200px] items-center justify-between px-5 dt:px-0">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center py-1"
          initial={{ opacity: 0.001, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 2, ease: EASE }}
        >
          <img
            src={asvLogo}
            alt="ASV"
            className="h-[40px] w-auto object-contain"
          />
        </motion.a>

        {/* Links */}
        <motion.div
          className="hidden items-center gap-5 tb:flex"
          initial={{ opacity: 0.001, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 2, ease: EASE }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative py-0.5"
              onMouseEnter={() => setHovered(link.label)}
              onMouseLeave={() => setHovered(null)}
            >
              <span
                className="relative z-10 block text-ink transition-colors duration-300 group-hover:text-teal"
                style={{ fontSize: '18px', lineHeight: '25.2px', letterSpacing: '-0.36px' }}
              >
                {link.label}
              </span>
              {/* underline slide (Framer text link effect) */}
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] bg-teal transition-all duration-300 ${
                  hovered === link.label ? 'w-full' : 'w-0'
                }`}
              />
            </a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.a
          href="#booking"
          className="group relative inline-flex h-[46px] items-center justify-center overflow-hidden rounded-[30px] bg-teal px-6 py-3 transition-colors duration-300 hover:bg-teal-2"
          initial={{ opacity: 0.001, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 2, ease: EASE }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <span
            className="text-white"
            style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}
          >
            Join waitlist
          </span>
        </motion.a>
      </div>
    </motion.nav>
  )
}

/** Mobile menu is not present in reference at 390px — nav keeps logo + CTA, links hide. */
export function MobileMenu() {
  const [open, setOpen] = useState(false)
  useEffect(() => () => setOpen(false), [])
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 bg-cream"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
