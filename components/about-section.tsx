"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Users, BookOpen, ArrowRight } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Love",
    description: "We believe in loving God and loving others unconditionally.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building authentic relationships through fellowship and care.",
  },
  {
    icon: BookOpen,
    title: "Truth",
    description: "Grounded in Scripture, we seek to live out God's Word daily.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="about-content order-2 lg:order-1">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6 text-balance">
              A Community Built on Faith, Hope, and Love
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              For over 25 years, Grace Community Church has been a beacon of hope
              in our community. We are a diverse family of believers committed to
              worshipping God, growing in faith, and serving others with compassion.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Whether you are exploring faith for the first time or looking for a
              church home, you will find a warm welcome here. We believe that
              everyone has a place at our table.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="glass p-4 sm:p-5 rounded-2xl hover:scale-105 transition-transform"
                >
                  <value.icon className="w-6 sm:w-8 h-6 sm:h-8 text-primary mb-2 sm:mb-3" />
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="w-full sm:w-auto rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="#contact" className="flex items-center justify-center gap-2">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Image */}
          <div className="about-image relative order-1 lg:order-2">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden">
              <Image
                src="/images/community.jpg"
                alt="Our church community gathering together"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card - Repositioned for mobile */}
            <div className="absolute -bottom-4 left-2 right-2 sm:left-auto sm:right-auto sm:-bottom-6 sm:-left-6 glass-strong p-4 sm:p-6 rounded-xl sm:rounded-2xl sm:max-w-xs">
              <p className="font-serif text-base sm:text-lg italic text-foreground mb-2 sm:mb-3">
                &quot;This church changed my life. I found a real family here.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-semibold text-primary text-sm">SM</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Sarah Mitchell</p>
                  <p className="text-xs text-muted-foreground">Member since 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
