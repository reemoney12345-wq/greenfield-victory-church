"use client"

import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const upcomingEvents = [
  {
    title: "Family Movie Night",
    date: "Feb 7, 2026",
    time: "6:00 PM",
    location: "Fellowship Hall",
    category: "Family",
    featured: true,
  },
  {
    title: "Women's Bible Study",
    date: "Feb 10, 2026",
    time: "10:00 AM",
    location: "Room 201",
    category: "Study",
    featured: false,
  },
  {
    title: "Youth Winter Retreat",
    date: "Feb 14-16, 2026",
    time: "All Day",
    location: "Camp Grace",
    category: "Youth",
    featured: true,
  },
  {
    title: "Community Outreach",
    date: "Feb 21, 2026",
    time: "9:00 AM",
    location: "Downtown Center",
    category: "Outreach",
    featured: false,
  },
  {
    title: "Marriage Enrichment Workshop",
    date: "Feb 28, 2026",
    time: "6:30 PM",
    location: "Main Sanctuary",
    category: "Adults",
    featured: false,
  },
]

export function EventsSection() {
  return (
    <section id="events" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Upcoming Events
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 sm:mt-4 text-balance">
              Join Us at Our Events
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto rounded-full px-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Link href="/events" className="flex items-center justify-center gap-2">
              View All Events
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className={`group glass p-4 sm:p-6 rounded-2xl sm:rounded-3xl hover:scale-[1.02] transition-all duration-300 ${
                event.featured ? "sm:col-span-2 lg:col-span-1 ring-2 ring-primary/20" : ""
              }`}
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-xs font-medium px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full">
                  {event.category}
                </span>
                {event.featured && (
                  <span className="text-xs font-medium px-2 sm:px-3 py-1 bg-accent text-accent-foreground rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Event Title */}
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                {event.title}
              </h3>

              {/* Event Details */}
              <div className="space-y-2 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Action */}
              <Button
                asChild
                variant="ghost"
                className="w-full rounded-full hover:bg-primary/10 text-primary"
              >
                <Link href={`/events/${index}`}>
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
