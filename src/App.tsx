import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { EcosystemSection } from './components/EcosystemSection'
import { BookingSection } from './components/BookingSection'
import { LearningSection } from './components/LearningSection'
import { CoachSection } from './components/CoachSection'
import { ComparisonSection } from './components/ComparisonSection'
import { FeaturesSection } from './components/FeaturesSection'
import { AudienceSection } from './components/AudienceSection'
import { TransformJourneySection } from './components/TransformJourneySection'
import { GuaranteeSection } from './components/GuaranteeSection'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

/**
 * ASV site — section order:
 * Hero → About → What Changes → AERS Ecosystem → Understand First (AudienceSection) →
 * 16-Week Transform Journey → Booking → Comparison → Features (See the complete picture) →
 * Guarantee → FAQ → Footer
 */
export default function App() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <main>
        <Hero />
        <CoachSection />
        <LearningSection />
        <EcosystemSection />
        <AudienceSection />
        <TransformJourneySection />
        <BookingSection />
        <ComparisonSection />
        <FeaturesSection />
        <GuaranteeSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
