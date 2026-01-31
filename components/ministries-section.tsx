"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Music, Heart, BookOpen, Baby, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const ministries = [
  {
    id: "youth",
    icon: Users,
    title: "Youth Ministry",
    description: "Empowering the next generation through engaging programs, mentorship, and community.",
    image: "/images/youth.jpg",
    ages: "Ages 12-18",
  },
  {
    id: "worship",
    icon: Music,
    title: "Worship Ministry",
    description: "Leading our congregation in authentic worship through music and creative arts.",
    image: "/images/worship.jpg",
    ages: "All Ages",
  },
  {
    id: "outreach",
    icon: Globe,
    title: "Community Outreach",
    description: "Serving our local community and beyond through acts of compassion and service.",
    image: "/images/community.jpg",
    ages: "All Ages",
  },
  {
    id: "small-groups",
    icon: BookOpen,
    title: "Small Groups",
    description: "Building deep connections through weekly Bible study and fellowship groups.",
    image: "/images/hero-church.jpg",
    ages: "Adults",
  },
  {
    id: "children",
    icon: Baby,
    title: "Children's Ministry",
    description: "Creating a fun, safe environment where kids can learn about God's love.",
    image: "/images/community.jpg",
    ages: "Ages 0-11",
  },
  {
    id: "care",
    icon: Heart,
    title: "Care Ministry",
    description: "Providing support, prayer, and practical help to those in need.",
    image: "/images/hero-church.jpg",
    ages: "All Ages",
  },
]

export function MinistriesSection() {
  return (
    <section id="ministries" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Get Involved
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6 text-balance">
            Our Ministries
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg text-pretty">
            There is a place for everyone at Green Field Victory Church. Discover how you can
            connect, grow, and serve through our various ministries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ministries.map((ministry) => (
            <div
              key={ministry.id}
              id={ministry.id}
              className="group glass rounded-2xl sm:rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={ministry.image || "/placeholder.svg"}
                  alt={ministry.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/90 flex items-center justify-center">
                    <ministry.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-medium px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full">
                    {ministry.ages}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                  {ministry.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                  {ministry.description}
                </p>
                <Button
                  asChild
                  variant="ghost"
                  className="p-0 h-auto text-primary hover:bg-transparent hover:text-primary/80"
                >
                  <Link href={`/ministries/${ministry.id}`} className="flex items-center gap-1">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-10 sm:mt-16 glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center">
          <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
            Ready to Serve?
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto mb-4 sm:mb-6">
            We believe that everyone has unique gifts and talents to share. Join one
            of our ministry teams and make a difference in the lives of others.
          </p>
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="#contact">Connect With Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
