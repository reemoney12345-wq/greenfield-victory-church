import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SermonsPageContent } from "@/components/sermons-page-content"

export const metadata: Metadata = {
  title: "Sermons | Grace Community Church",
  description: "Watch and listen to sermons from Grace Community Church. Access our full library of messages.",
}

export default function SermonsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <SermonsPageContent />
      <Footer />
    </main>
  )
}
