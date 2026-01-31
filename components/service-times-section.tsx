"use client"

import { Clock, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    day: "Sunday",
    times: [
      { name: "Early Morning Worship", time: "9:00 AM" },
      { name: "Main Service", time: "11:00 AM" },
      { name: "Evening Service", time: "6:00 PM" },
    ],
  },
  {
    day: "Wednesday",
    times: [
      { name: "Bible Study", time: "7:00 PM" },
      { name: "Youth Group", time: "7:00 PM" },
    ],
  },
  {
    day: "Saturday",
    times: [
      { name: "Prayer Meeting", time: "8:00 AM" },
    ],
  },
]

export function ServiceTimesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Join Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6 text-balance">
            Service Times & Location
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg text-pretty">
            We would love to have you join us for worship. Here is when and where
            you can find us throughout the week.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Service Times Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="glass p-4 sm:p-6 rounded-2xl sm:rounded-3xl hover:scale-105 transition-transform"
                >
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                    <h3 className="font-semibold text-lg sm:text-xl text-foreground">
                      {service.day}
                    </h3>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {service.times.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center gap-2">
                        <span className="text-muted-foreground text-xs sm:text-sm">
                          {item.name}
                        </span>
                        <span className="font-medium text-foreground text-xs sm:text-sm bg-primary/10 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location Card */}
          <div className="glass p-6 sm:p-8 rounded-2xl sm:rounded-3xl">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              Find Us Here
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm sm:text-base">Address</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    123 Faith Avenue
                    <br />
                    Springfield, ST 12345
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm sm:text-base">Phone</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm sm:text-base">Email</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    hello@greenfieldvictorychurch.org
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <Button
                asChild
                className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="mt-10 sm:mt-16 glass-strong p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                What to Expect
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Your first visit can feel intimidating, but we are here to make it
                easy. Our services last about 75 minutes and include contemporary
                worship music, a relevant message from Scripture, and opportunities
                to connect with others.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { label: "Dress Code", value: "Come as you are" },
                { label: "Parking", value: "Free & plentiful" },
                { label: "Kids Program", value: "Ages 0-12" },
                { label: "Coffee", value: "Always fresh" },
              ].map((item, index) => (
                <div key={index} className="text-center p-3 sm:p-4 bg-background/50 rounded-xl sm:rounded-2xl">
                  <p className="text-lg sm:text-2xl font-serif font-bold text-primary">
                    {item.value}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
