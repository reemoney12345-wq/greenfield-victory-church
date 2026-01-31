import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutPageContent } from "@/components/about-page-content"

export const metadata: Metadata = {
  title: "About Us | Grace Community Church",
  description: "Learn about Grace Community Church - our mission, values, history, and leadership team.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <AboutPageContent />
      <Footer />
    </main>
  )
}
