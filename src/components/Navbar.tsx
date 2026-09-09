import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { EASE } from './shared/Reveal'
import asvLogo from '../assets/asv-logo.png'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About ASV', href: '#about-coach' },
  { label: 'AERS', href: '#aers-ecosystem' },
  { label: 'Institutions', href: '#institutions' },
  { label: 'Employers', href: '#employers' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

/**
 * Centered rounded-rectangle navbar:
 * - Join waitlist button is flush with the header's top edge, bottom edge, and right curve,
 *   sharing the exact same height and pill curve so it sits seamlessly on the header rectangle.
 * - Left: Logo
 * - Center: Centered navigation links
 * - Right: Flush overlapping "Join waitlist" button
 */
export function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex flex-col items-center px-4 sm:px-6 pointer-events-none">
      <motion.nav
        className={`pointer-events-auto w-full max-w-[1200px] bg-white/95 backdrop-blur-md border border-light-gray shadow-[0_8px_30px_rgba(15,61,102,0.06)] transition-all duration-300 ${
          mobileMenuOpen ? 'rounded-3xl sm:rounded-[36px]' : 'rounded-full'
        }`}
        initial={{ y: -30, opacity: 0.001 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
      >
        <div className="flex h-[54px] sm:h-[58px] items-center justify-between pl-4 sm:pl-6 pr-0">
          {/* Logo on the left */}
          <motion.a
            href="#home"
            className="flex items-center py-1 shrink-0"
            initial={{ opacity: 0.001, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 1.5, ease: EASE }}
          >
            <img
              src={asvLogo}
              alt="ASV"
              className="h-[30px] sm:h-[34px] w-auto object-contain"
            />
          </motion.a>

          {/* Centered Navigation Links */}
          <motion.div
            className="hidden items-center justify-center gap-3 lg:gap-5 dt:gap-7 lg:flex flex-1 mx-2 dt:mx-4"
            initial={{ opacity: 0.001, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.5, ease: EASE }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative py-1"
                onMouseEnter={() => setHovered(link.label)}
                onMouseLeave={() => setHovered(null)}
              >
                <span
                  className="relative z-10 block text-ink text-[14px] dt:text-[15px] font-medium transition-colors duration-300 group-hover:text-[#2D86FC] whitespace-nowrap"
                  style={{ lineHeight: '22px', letterSpacing: '-0.25px' }}
                >
                  {link.label}
                </span>
                {/* Underline slide */}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-teal transition-all duration-300 ${
                    hovered === link.label ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            ))}
          </motion.div>

          {/* Right Action: Join waitlist Button flush with top/bottom/right edges */}
          <div className="flex items-center h-full gap-2 shrink-0">
            <motion.a
              href="#booking"
              className="group relative inline-flex h-full items-center justify-center rounded-full bg-teal px-6 sm:px-8 text-white transition-colors duration-300 hover:bg-teal-2 shadow-sm font-medium -my-[1px] -mr-[1px]"
              initial={{ opacity: 0.001, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1.5, ease: EASE }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span
                className="text-white text-[14px] sm:text-[15px] font-medium whitespace-nowrap"
                style={{ lineHeight: '20px', letterSpacing: '-0.25px' }}
              >
                Join waitlist
              </span>
            </motion.a>

            {/* Mobile hamburger button */}
            <button
              type="button"
              className="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 p-1.5 text-ink shadow-sm lg:hidden hover:bg-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu inside floating card */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="border-t border-ink/8 px-6 pb-6 pt-3 lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-3 py-2 text-[16px] font-medium text-ink transition-colors hover:bg-teal/10 hover:text-[#2D86FC]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
