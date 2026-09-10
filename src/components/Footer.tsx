import { useState } from 'react'
import { motion } from 'framer-motion'
import { EASE } from './shared/Reveal'
import asvLogo from '../assets/asv-logo.png'

const ECOSYSTEM_LINKS = [
  { label: 'Explore Readiness', href: '#audience' },
  { label: '16-Week Journey', href: '#roadmap' },
  { label: 'AERS Ecosystem', href: '#aers-ecosystem' },
  { label: 'Institutional Process', href: '#insights' },
  { label: 'Measurable Outcomes', href: '#insights' },
]

const STAKEHOLDER_LINKS = [
  { label: 'Institutions', href: '#booking' },
  { label: 'Students & Learners', href: '#booking' },
  { label: 'Employers & Recruiters', href: '#booking' },
  { label: 'Facilitators & Mentors', href: '#booking' },
]

const MORE_LINKS = [
  { label: 'About ASV', href: '#about-coach' },
  { label: 'Ecosystem Overview', href: '#aers-ecosystem' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Partner With Us', href: '#contact' },
]

export function Footer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    collegeName: '',
    designation: '',
    phone: '',
    email: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.firstName || !formData.email) return

    const subject = encodeURIComponent('We want to partner with you')
    const bodyContent = `First Name *
${formData.firstName}

Last Name *
${formData.lastName}

College / Institution Name *
${formData.collegeName}

Designation *
${formData.designation}

Phone Number *
${formData.phone}

Email Address *
${formData.email}`

    const body = encodeURIComponent(bodyContent)
    window.location.href = `mailto:ceo@asveducation.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="bg-[#080B11] text-white pt-16 pb-8 px-5 dt:px-0">
      <div className="mx-auto w-full max-w-[1240px] flex flex-col gap-14">
        {/* Main Footer Grid: Left Form + Right Nav Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 dt:gap-14">
          {/* Left Side: Partner With ASV Form */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0.001, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: EASE }}
          >
            <div className="flex items-center gap-3">
              <img
                src={asvLogo}
                alt="ASV Logo"
                className="h-9 w-auto rounded-lg bg-white/95 p-1.5 object-contain"
                loading="lazy"
              />
              <span className="font-display text-xl font-bold tracking-tight text-white">ASV Education</span>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-display text-[32px] dt:text-[40px] font-bold tracking-tight text-white leading-tight">
                Partner With <span className="text-[#2D86FC]">ASV</span>
              </h2>
              <p className="text-gray-400 text-[15px] dt:text-[16px] leading-relaxed max-w-[560px]">
                Connect with our team to bring structured employability readiness, human review and the AERS framework to your institution.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-[#2D86FC]/30 bg-[#2D86FC]/10 p-8 text-center flex flex-col items-center gap-3"
              >
                <div className="h-12 w-12 rounded-full bg-[#2D86FC]/20 flex items-center justify-center text-[#2D86FC]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Thank You for Partnering!</h3>
                <p className="text-gray-300 text-sm max-w-[420px]">
                  We have received your details. Our institutional partnerships team will reach out to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-[580px]">
                {/* Row 1: First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Enter first name"
                      className="w-full rounded-lg bg-white/95 text-ink px-3.5 py-2.5 text-sm outline-none placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#2D86FC] transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Enter last name"
                      className="w-full rounded-lg bg-white/95 text-ink px-3.5 py-2.5 text-sm outline-none placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#2D86FC] transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: College Name & Designation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider">
                      College / Institution Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.collegeName}
                      onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                      placeholder="Enter institution name"
                      className="w-full rounded-lg bg-white/95 text-ink px-3.5 py-2.5 text-sm outline-none placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#2D86FC] transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider">
                      Designation *
                    </label>
                    <select
                      required
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className="w-full rounded-lg bg-white/95 text-ink px-3.5 py-2.5 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-[#2D86FC] transition-all"
                    >
                      <option value="" disabled>Select designation</option>
                      <option value="Placement Officer">Placement Officer</option>
                      <option value="Facilitator / Trainer">Facilitator / Trainer</option>
                      <option value="Principal / Dean">Principal / Dean</option>
                      <option value="Faculty / Dept Head">Faculty / Dept Head</option>
                      <option value="Student">Student</option>
                      <option value="Employer / Recruiter">Employer / Recruiter</option>
                      <option value="Support Team">Support Team</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Phone Number & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full rounded-lg bg-white/95 text-ink px-3.5 py-2.5 text-sm outline-none placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#2D86FC] transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@institution.edu"
                      className="w-full rounded-lg bg-white/95 text-ink px-3.5 py-2.5 text-sm outline-none placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#2D86FC] transition-all"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-2 w-full rounded-lg bg-[#2D86FC] hover:bg-[#1A73E8] text-white font-semibold py-3 px-6 text-sm uppercase tracking-wider transition-colors shadow-lg shadow-[#2D86FC]/20"
                >
                  Partner With ASV
                </motion.button>

                <p className="text-[12px] text-gray-500 leading-normal">
                  * Required information. By submitting, you agree to receive communications from ASV Education regarding AERS institutional programs.
                </p>
              </form>
            )}

            {/* 4 Social / Contact Media Buttons */}
            <div className="flex items-center gap-3 pt-3">
              {/* 1. LinkedIn */}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-white/20 hover:border-[#2D86FC] hover:bg-[#2D86FC] hover:text-white flex items-center justify-center text-gray-300 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* 2. Instagram */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-white/20 hover:border-[#E1306C] hover:bg-[#E1306C] hover:text-white flex items-center justify-center text-gray-300 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
                </svg>
              </a>

              {/* 3. WhatsApp */}
              <a
                href="https://wa.me/919945149169?text=We%20want%20to%20partner%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-white/20 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center text-gray-300 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>

              {/* 4. Email */}
              <a
                href="mailto:ceo@asveducation.com"
                className="h-10 w-10 rounded-full border border-white/20 hover:border-[#2D86FC] hover:bg-[#2D86FC] hover:text-white flex items-center justify-center text-gray-300 transition-all duration-300"
                aria-label="Email"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right Side: 3 Navigation Link Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-4">
            <FooterNavColumn title="ECOSYSTEM" links={ECOSYSTEM_LINKS} />
            <FooterNavColumn title="STAKEHOLDERS" links={STAKEHOLDER_LINKS} />
            <FooterNavColumn title="MORE TO EXPLORE" links={MORE_LINKS} />
          </div>
        </div>

        {/* Bottom Legal Bar & Back to Top */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400">
          <div className="flex flex-wrap items-center gap-6">
            <a href="#home" className="hover:text-white transition-colors">SITE MAP</a>
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF USE</a>
            <a href="#aers-ecosystem" className="hover:text-white transition-colors">AERS ECOSYSTEM</a>
          </div>

          <div className="text-center text-gray-400">
            © 2026 ASV Education / AERS. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-semibold text-gray-300 hover:text-white transition-colors uppercase tracking-wider"
          >
            BACK TO TOP <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

function FooterNavColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-display text-[13px] font-bold text-white tracking-widest uppercase">
        {title}
      </span>
      <div className="flex flex-col gap-2.5">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[14px] text-gray-400 hover:text-white hover:translate-x-0.5 transition-all duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}
