"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, ArrowRight, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const allEvents = [
  {
    title: "Family Movie Night",
    date: "Feb 7, 2026",
    time: "6:00 PM",
    location: "Fellowship Hall",
    category: "Family",
    description: "Join us for a fun evening with popcorn, snacks, and a family-friendly movie. All ages welcome!",
    featured: true,
  },
  {
    title: "Women's Bible Study",
    date: "Feb 10, 2026",
    time: "10:00 AM",
    location: "Room 201",
    category: "Study",
    description: "A weekly gathering for women to study Scripture, share, and grow in faith together.",
    featured: false,
  },
  {
    title: "Youth Winter Retreat",
    date: "Feb 14-16, 2026",
    time: "All Day",
    location: "Camp Grace",
    category: "Youth",
    description: "An unforgettable weekend for teens filled with games, worship, and spiritual growth.",
    featured: true,
  },
  {
    title: "Community Outreach",
    date: "Feb 21, 2026",
    time: "9:00 AM",
    location: "Downtown Center",
    category: "Outreach",
    description: "Serve our neighbors by distributing food and supplies to those in need.",
    featured: false,
  },
  {
    title: "Marriage Enrichment Workshop",
    date: "Feb 28, 2026",
    time: "6:30 PM",
    location: "Main Sanctuary",
    category: "Adults",
    description: "Strengthen your marriage with practical tools and biblical wisdom.",
    featured: false,
  },
  {
    title: "Men's Breakfast",
    date: "Mar 7, 2026",
    time: "8:00 AM",
    location: "Fellowship Hall",
    category: "Adults",
    description: "Fellowship and encouragement over a hearty breakfast. Guest speaker this month!",
    featured: false,
  },
  {
    title: "Kids Praise Night",
    date: "Mar 14, 2026",
    time: "5:30 PM",
    location: "Children's Wing",
    category: "Children",
    description: "A fun-filled evening of worship, games, and activities designed just for kids.",
    featured: true,
  },
  {
    title: "Easter Celebration",
    date: "Apr 5, 2026",
    time: "9:00 AM & 11:00 AM",
    location: "Main Sanctuary",
    category: "Worship",
    description: "Celebrate the resurrection of Christ with special music and message.",
    featured: true,
  },
]

const categories = ["All", "Family", "Study", "Youth", "Outreach", "Adults", "Children", "Worship"]

export function EventsPageContent() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredEvents = selectedCategory === "All" 
    ? allEvents 
    : allEvents.filter(event => event.category === selectedCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 bg-linear-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Events Calendar
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
              Upcoming Events
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg text-pretty">
              Join us at our upcoming events. From family gatherings to Bible studies, 
              there is something for everyone at Green Field Victory Church.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Filter */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Filter by category</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-primary/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredEvents.map((event, index) => (
              <div
                key={index}
                className={`group glass p-5 sm:p-6 rounded-2xl sm:rounded-3xl hover:scale-[1.02] transition-all duration-300 ${
                  event.featured ? "ring-2 ring-primary/20" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {event.category}
                  </span>
                  {event.featured && (
                    <span className="text-xs font-medium px-3 py-1 bg-accent text-accent-foreground rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {event.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Register Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No events found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Want to Host an Event?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-6">
              Have an idea for a church event or ministry gathering? We would love to help 
              you make it happen. Contact us to learn more about hosting events at Green Field Victory Church.
            </p>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
