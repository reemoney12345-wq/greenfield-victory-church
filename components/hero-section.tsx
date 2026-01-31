"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP animations will be added in the animation component
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-church.jpg"
          alt="Grace Community Church interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-44 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className="hero-badge inline-flex items-center gap-2 glass px-3 sm:px-5 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-white">
              Join us Sunday at 9:00 AM & 11:00 AM
            </span>
          </div>

          {/* Heading */}
          <h1
            className="hero-title font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6"
          >
            <span className="text-balance">A Place Where Faith</span>
            <br />
            <span className="text-primary">Comes Alive</span>
          </h1>

          {/* Subtitle */}
          <p
            className="hero-subtitle text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 sm:mb-10 px-2 text-pretty"
          >
            Welcome to Grace Community Church. We are a community of believers
            passionate about sharing the love of Christ and growing together in faith.
          </p>

          {/* CTA Buttons */}
          <div
            className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="#services" className="flex items-center justify-center gap-2">
                Plan Your Visit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
            >
              <Link href="#sermons" className="flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                Watch Sermons
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
          <span className="text-white/60 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container mx-auto px-3 sm:px-6">
          <div className="glass-strong rounded-t-2xl sm:rounded-t-3xl p-4 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {[
                { value: "25+", label: "Years of Ministry" },
                { value: "2,000+", label: "Church Family" },
                { value: "50+", label: "Weekly Programs" },
                { value: "100%", label: "Welcome Guaranteed" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/70 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
