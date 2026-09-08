import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
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
 * ZONO clone — section order mirrors zono.framer.ai:
 * Hero → Booking → Learn → Stats → Coach → Comparison → Why choose →
 * Audience → Testimonials → Guarantee → FAQ → Socials → Footer
 */
export default function App() {
  return (
    <div className="min-h-screen bg-cream font-body">
      <Navbar />
      <main>
        <Hero />
        <BookingSection />
        <LearningSection />
        <StatsSection />
        <CoachSection />
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
