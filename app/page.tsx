import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServiceTimesSection } from "@/components/service-times-section"
import { EventsPreview } from "@/components/events-preview"
import { SermonsPreview } from "@/components/sermons-preview"
import { MinistriesPreview } from "@/components/ministries-preview"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { GSAPAnimations } from "@/components/gsap-animations"

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <GSAPAnimations />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServiceTimesSection />
      <EventsPreview />
      <SermonsPreview />
      <MinistriesPreview />
      <ContactSection />
      <Footer />
    </main>
  )
}
