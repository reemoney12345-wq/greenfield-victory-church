import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MinistriesPageContent } from "@/components/ministries-page-content"

export const metadata: Metadata = {
  title: "Ministries | Green Field Victory Church",
  description: "Discover how you can connect, grow, and serve through our various ministries at Green Field Victory Church.",
}

export default function MinistriesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <MinistriesPageContent />
      <Footer />
    </main>
  )
}
