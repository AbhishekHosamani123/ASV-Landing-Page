import { motion } from 'framer-motion'
import { EASE } from './shared/Reveal'
import asvLogo from '../assets/asv-logo.png'

const PAGES = ['Home', 'Waitlist', 'Contact', 'Privacy Policy', 'Terms & Conditions', '404']
const NAV = ['Masterclass booking', 'About me', 'Learn', 'Testimonials', 'FAQ']
const CONNECT = ['Instagram', 'YouTube', 'Twitter', 'Linkedin']

/**
 * Reference footer: bg #0b282e, pad 60px 100px, gap 40px.
 * Waitlist: centered column — logo 36px, H2 46px white, desc 16px #c9dde1,
 * white form pill 450x65 r16 p8 shadow: input cream r12 + subscribe teal r12.
 * Columns: Pages (x312) / Navigation (x632) / Connect (x952) — 200px gaps, pad 40 top.
 * Bottom: centered row of 3 links + "Created by Muthu V" with 41px avatar.
 */
export function Footer() {
  return (
    <footer className="bg-ink-2 px-5 pb-10 pt-[60px] dt:px-0 dt:pb-[53px] dt:pt-[60px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10">
        {/* Waitlist — centered column (ref: 291px = header 200 + gap 26 + form 65) */}
        <motion.div
          className="flex flex-col items-center gap-[26px]"
          initial={{ opacity: 0.001, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 2, ease: EASE }}
        >
          <div className="flex w-full max-w-[440px] flex-col items-center gap-6">
            <img src={asvLogo} alt="ASV logo" className="h-[60px] w-auto rounded-2xl bg-cream/90 p-2 object-contain" loading="lazy" />
            <div className="flex flex-col items-center gap-4 text-center">
              <h2
                className="font-display text-white"
                style={{ fontSize: 'clamp(34px, 4.6vw, 46px)', lineHeight: 'clamp(41px, 4.8vw, 55px)', letterSpacing: '-0.05em', fontWeight: 400 }}
              >
                Join the wait-list
              </h2>
              <p className="text-gray-3" style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}>
                Be first to access the program, unlock launch bonuses, and
                reserve your spot before doors open.
              </p>
            </div>
          </div>
          <WaitlistForm />
        </motion.div>

        {/* Link columns — ref: 800px centered container, 3 columns of 160px, space-between */}
        <div className="mx-auto flex w-full max-w-[800px] flex-wrap justify-between gap-x-[160px] gap-y-10 py-10">
          <FooterColumn title="Pages" links={PAGES} />
          <FooterColumn title="Navigation" links={NAV} />
          <FooterColumn title="Connect" links={CONNECT} />
        </div>

        {/* Bottom row — ref: links row centered (gap 30) + 60px + credit, pb-60 */}
        <div className="flex flex-col items-center justify-between gap-6 pb-[60px]">
          <div className="flex flex-wrap items-center justify-center gap-[30px]">
            {['Get Template', 'Made in Framer', 'More Templates'].map((l) => (
              <a
                key={l}
                href="#"
                className="text-gray-3 transition-colors duration-300 hover:text-white"
                style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}
              >
                {l}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-gray-3" style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}>
                Created by
              </span>
              <a
                href="#"
                className="text-gray-3 transition-colors duration-300 hover:text-white"
                style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}
              >
                Muthu V
              </a>
            </div>
            <img
              src="https://framerusercontent.com/images/lyrswYFtSrGUMlFtg6u6p606EZI.jpg?width=200&height=200"
              alt="Muthu V profile"
              className="h-10 w-10 rounded-md object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

function WaitlistForm() {
  return (
    <form
      className="flex h-[65px] w-full max-w-[450px] items-center gap-2 rounded-2xl bg-white p-2 shadow-[0_6px_10px_0_rgba(0,0,0,0.1)]"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="h-full flex-1 rounded-xl bg-cream px-4 text-ink outline-none placeholder:text-ink"
        style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}
      />
      <motion.button
        type="submit"
        className="flex h-full w-[98px] items-center justify-center rounded-xl bg-teal text-white transition-colors duration-300 hover:bg-teal-2"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}
      >
        Subscribe
      </motion.button>
    </form>
  )
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="flex w-[160px] flex-col gap-4">
      <span
        className="font-body text-white"
        style={{ fontSize: '20px', lineHeight: '28px', letterSpacing: '-0.4px', fontWeight: 500 }}
      >
        {title}
      </span>
      <div className="flex flex-col gap-2">
        {links.map((l) => (
          <a
            key={l}
            href="#"
            className="w-fit py-0.5 text-gray-3 transition-all duration-300 hover:translate-x-1 hover:text-white"
            style={{ fontSize: '16px', lineHeight: '22.4px', letterSpacing: '-0.32px' }}
          >
            {l}
          </a>
        ))}
      </div>
    </div>
  )
}
