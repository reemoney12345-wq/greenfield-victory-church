"use client"

import Image from "next/image"
import Link from "next/link"
import { Play, Clock, Calendar, ArrowRight, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredSermon = {
  title: "Finding Peace in the Storm",
  speaker: "Pastor John Mitchell",
  date: "Jan 26, 2026",
  duration: "42 min",
  series: "Hope Renewed",
  image: "/images/worship.jpg",
}

export function SermonsPreview() {
  return (
    <section id="sermons" className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Watch & Listen
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6 text-balance">
            Recent Sermons
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg text-pretty">
            Missed a Sunday? Catch up on our latest messages or revisit your
            favorites. Our sermons are available to watch and listen anytime.
          </p>
        </div>

        {/* Featured Sermon */}
        <div className="mb-8 sm:mb-12">
          <div className="glass-strong rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-48 sm:h-64 lg:h-auto lg:min-h-[300px]">
                <Image
                  src={featuredSermon.image || "/placeholder.svg"}
                  alt={featuredSermon.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-colors group">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground ml-0.5 sm:ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
              <div className="p-5 sm:p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full w-fit mb-3 sm:mb-4">
                  Latest Message
                </span>
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-3">
                  {featuredSermon.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4">{featuredSermon.speaker}</p>
                <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    {featuredSermon.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    {featuredSermon.duration}
                  </div>
                  <div className="px-2 sm:px-3 py-0.5 bg-secondary rounded-full text-secondary-foreground">
                    {featuredSermon.series}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button asChild className="w-full sm:w-auto rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/sermons">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Now
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full sm:w-auto rounded-full border-border hover:bg-secondary bg-transparent">
                    <Link href="/sermons">
                      <Headphones className="w-4 h-4 mr-2" />
                      Listen
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Link href="/sermons" className="flex items-center justify-center gap-2">
              Browse All Sermons
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
