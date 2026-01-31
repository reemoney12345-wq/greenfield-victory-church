import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EventsPageContent } from "@/components/events-page-content"

export const metadata: Metadata = {
  title: "Events | Green Field Victory Church",
  description: "Join us at our upcoming events. From family gatherings to Bible studies, there is something for everyone at Green Field Victory Church.",
}

export default function EventsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <EventsPageContent />
      <Footer />
    </main>
  )
}
