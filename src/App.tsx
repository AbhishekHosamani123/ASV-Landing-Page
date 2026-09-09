import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { EcosystemSection } from './components/EcosystemSection'
import { BookingSection } from './components/BookingSection'
import { LearningSection } from './components/LearningSection'
import { StatsSection } from './components/StatsSection'
import { CoachSection } from './components/CoachSection'
import { ComparisonSection } from './components/ComparisonSection'
import { FeaturesSection } from './components/FeaturesSection'
import { AudienceSection } from './components/AudienceSection'
import { Testimonials } from './components/Testimonials'
import { GuaranteeSection } from './components/GuaranteeSection'
import { FAQ } from './components/FAQ'
import { SocialsSection } from './components/SocialsSection'
import { Footer } from './components/Footer'

/**
 * ASV site — section order:
 * Hero → About (ASV Approach) → AERS Ecosystem → Booking → Learn → Stats →
 * Comparison → Why choose → Audience → Testimonials → Guarantee → FAQ →
 * Socials → Footer
 */
export default function App() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <main>
        <Hero />
        <CoachSection />
        <EcosystemSection />
        <BookingSection />
        <LearningSection />
        <StatsSection />
        <ComparisonSection />
        <FeaturesSection />
        <AudienceSection />
        <Testimonials />
        <GuaranteeSection />
        <FAQ />
        <SocialsSection />
      </main>
      <Footer />
    </div>
  )
}
