"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Clock, Calendar, Headphones, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const sermons = [
  {
    title: "Finding Peace in the Storm",
    speaker: "Pastor John Mitchell",
    date: "Jan 26, 2026",
    duration: "42 min",
    series: "Hope Renewed",
    image: "/images/worship.jpg",
  },
  {
    title: "The Power of Gratitude",
    speaker: "Pastor Sarah Chen",
    date: "Jan 19, 2026",
    duration: "38 min",
    series: "Hope Renewed",
    image: "/images/community.jpg",
  },
  {
    title: "Walking by Faith",
    speaker: "Pastor John Mitchell",
    date: "Jan 12, 2026",
    duration: "45 min",
    series: "Faith Journey",
    image: "/images/hero-church.jpg",
  },
  {
    title: "Love Your Neighbor",
    speaker: "Pastor Sarah Chen",
    date: "Jan 5, 2026",
    duration: "40 min",
    series: "Faith Journey",
    image: "/images/youth.jpg",
  },
  {
    title: "New Year, New Purpose",
    speaker: "Pastor John Mitchell",
    date: "Dec 29, 2025",
    duration: "35 min",
    series: "New Beginnings",
    image: "/images/worship.jpg",
  },
  {
    title: "The Gift of Christmas",
    speaker: "Pastor John Mitchell",
    date: "Dec 25, 2025",
    duration: "50 min",
    series: "Christmas Special",
    image: "/images/community.jpg",
  },
  {
    title: "Preparing for His Coming",
    speaker: "Pastor Sarah Chen",
    date: "Dec 22, 2025",
    duration: "38 min",
    series: "Advent",
    image: "/images/hero-church.jpg",
  },
  {
    title: "Hope in the Darkness",
    speaker: "Pastor John Mitchell",
    date: "Dec 15, 2025",
    duration: "42 min",
    series: "Advent",
    image: "/images/youth.jpg",
  },
]

const series = ["All Series", "Hope Renewed", "Faith Journey", "New Beginnings", "Christmas Special", "Advent"]
const speakers = ["All Speakers", "Pastor John Mitchell", "Pastor Sarah Chen"]

export function SermonsPageContent() {
  const [selectedSeries, setSelectedSeries] = useState("All Series")
  const [selectedSpeaker, setSelectedSpeaker] = useState("All Speakers")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredSermons = sermons.filter(sermon => {
    const matchesSeries = selectedSeries === "All Series" || sermon.series === selectedSeries
    const matchesSpeaker = selectedSpeaker === "All Speakers" || sermon.speaker === selectedSpeaker
    const matchesSearch = sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         sermon.speaker.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSeries && matchesSpeaker && matchesSearch
  })

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 bg-linear-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Watch & Listen
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
              Sermon Library
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg text-pretty">
              Explore our collection of sermons. Watch, listen, and be encouraged 
              by God&apos;s Word no matter where you are.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Sermon */}
      <section className="py-8 sm:py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="glass-strong rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-56 sm:h-72 lg:h-auto lg:min-h-[350px]">
                <Image
                  src={sermons[0].image || "/placeholder.svg"}
                  alt={sermons[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-colors group">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
              <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full w-fit mb-4">
                  Latest Message
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                  {sermons[0].title}
                </h2>
                <p className="text-muted-foreground mb-4">{sermons[0].speaker}</p>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {sermons[0].date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {sermons[0].duration}
                  </div>
                  <div className="px-3 py-0.5 bg-secondary rounded-full text-secondary-foreground">
                    {sermons[0].series}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="w-full sm:w-auto rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Now
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto rounded-full border-border hover:bg-secondary bg-transparent">
                    <Headphones className="w-4 h-4 mr-2" />
                    Listen
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Filters */}
          <div className="mb-8 sm:mb-12 space-y-4">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search sermons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full bg-background border-border"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Filter:</span>
              </div>
              <select
                id="series-filter"
                aria-label="Filter by series"
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
                className="px-4 py-2 rounded-full text-sm bg-background border border-border text-foreground"
              >
                {series.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <select
                id="speaker-filter"
                aria-label="Filter by speaker"
                value={selectedSpeaker}
                onChange={(e) => setSelectedSpeaker(e.target.value)}
                className="px-4 py-2 rounded-full text-sm bg-background border border-border text-foreground"
              >
                {speakers.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Sermons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredSermons.map((sermon, index) => (
              <div
                key={index}
                className="glass rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform"
              >
                <div className="relative h-40 sm:h-44">
                  <Image
                    src={sermon.image || "/placeholder.svg"}
                    alt={sermon.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                    </button>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <span className="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                    {sermon.series}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground mt-3 mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {sermon.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {sermon.speaker}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {sermon.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {sermon.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredSermons.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No sermons found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Podcast CTA */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Subscribe to Our Podcast
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg mb-6">
                  Never miss a message! Subscribe to our podcast and get sermons 
                  delivered directly to your favorite podcast app.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Apple Podcasts
                  </Button>
                  <Button variant="outline" className="rounded-full border-border hover:bg-secondary bg-transparent">
                    Spotify
                  </Button>
                  <Button variant="outline" className="rounded-full border-border hover:bg-secondary bg-transparent">
                    YouTube
                  </Button>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="w-48 h-48 rounded-3xl bg-primary/10 flex items-center justify-center">
                  <Headphones className="w-24 h-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
