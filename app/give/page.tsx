import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GivePageContent } from "@/components/give-page-content"

export const metadata: Metadata = {
  title: "Give | Green Field Victory Church",
  description: "Support the mission of Green Field Victory Church through your generous giving. Give online securely.",
}

export default function GivePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <GivePageContent />
      <Footer />
    </main>
  )
}
