"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Music, Heart, BookOpen, Baby, Globe, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const ministries = [
  {
    id: "youth",
    icon: Users,
    title: "Youth Ministry",
    description: "Empowering the next generation through engaging programs, mentorship, and community. Our youth ministry creates a space where teenagers can explore their faith, build lasting friendships, and discover their God-given purpose.",
    image: "/images/youth.jpg",
    ages: "Ages 12-18",
    meetingTime: "Wednesdays at 7:00 PM",
    leader: "Rachel Williams",
    activities: ["Weekly youth group", "Small group discussions", "Annual retreats", "Mission trips", "Sports nights"],
  },
  {
    id: "worship",
    icon: Music,
    title: "Worship Ministry",
    description: "Leading our congregation in authentic worship through music and creative arts. Our worship team is dedicated to creating an atmosphere where people can encounter God through music, whether through contemporary songs or timeless hymns.",
    image: "/images/worship.jpg",
    ages: "All Ages",
    meetingTime: "Sundays (Rehearsal: Thursdays)",
    leader: "Michael Thompson",
    activities: ["Sunday worship teams", "Choir", "Special event worship", "Worship nights", "Music training"],
  },
  {
    id: "outreach",
    icon: Globe,
    title: "Community Outreach",
    description: "Serving our local community and beyond through acts of compassion and service. We believe in being the hands and feet of Jesus, meeting practical needs while sharing the hope of the Gospel.",
    image: "/images/community.jpg",
    ages: "All Ages",
    meetingTime: "Monthly outreach events",
    leader: "David Rodriguez",
    activities: ["Food pantry", "Homeless ministry", "Prison ministry", "International missions", "Community service days"],
  },
  {
    id: "small-groups",
    icon: BookOpen,
    title: "Small Groups",
    description: "Building deep connections through weekly Bible study and fellowship groups. Small groups are the heart of our community, where life-changing relationships are formed and spiritual growth happens.",
    image: "/images/hero-church.jpg",
    ages: "Adults",
    meetingTime: "Various days & times",
    leader: "Pastor Sarah Chen",
    activities: ["Bible studies", "Book studies", "Life groups", "Men's & women's groups", "Couples groups"],
  },
  {
    id: "children",
    icon: Baby,
    title: "Children's Ministry",
    description: "Creating a fun, safe environment where kids can learn about God's love. Our children's ministry uses age-appropriate teaching, engaging activities, and caring volunteers to help kids grow in their faith.",
    image: "/images/community.jpg",
    ages: "Ages 0-11",
    meetingTime: "Sundays during services",
    leader: "Emily Foster",
    activities: ["Sunday school", "VBS", "Kids worship", "Awana", "Family events"],
  },
  {
    id: "care",
    icon: Heart,
    title: "Care Ministry",
    description: "Providing support, prayer, and practical help to those in need. Our care ministry walks alongside people through life's challenges, offering hope, encouragement, and tangible assistance.",
    image: "/images/hero-church.jpg",
    ages: "All Ages",
    meetingTime: "As needed",
    leader: "Pastor John Mitchell",
    activities: ["Hospital visits", "Grief support", "Prayer ministry", "Meal trains", "Benevolence support"],
  },
]

export function MinistriesPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 bg-linear-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Get Involved
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
              Our Ministries
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg text-pretty">
              There is a place for everyone at Green Field Victory Church. Discover how you can 
              connect, grow, and serve through our various ministries.
            </p>
          </div>
        </div>
      </section>

      {/* Ministries List */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 space-y-12 sm:space-y-20">
          {ministries.map((ministry, index) => (
            <div
              key={ministry.id}
              id={ministry.id}
              className="scroll-mt-32"
            >
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}>
                {/* Image */}
                <div className="relative h-64 sm:h-80 lg:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden">
                  <Image
                    src={ministry.image || "/placeholder.svg"}
                    alt={ministry.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary flex items-center justify-center">
                      <ministry.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full">
                      {ministry.ages}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    {ministry.title}
                  </h2>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                    {ministry.description}
                  </p>

                  {/* Details */}
                  <div className="glass p-4 sm:p-6 rounded-2xl mb-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <span className="text-sm font-medium text-foreground">When:</span>
                        <span className="text-sm text-muted-foreground ml-2">{ministry.meetingTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <span className="text-sm font-medium text-foreground">Leader:</span>
                        <span className="text-sm text-muted-foreground ml-2">{ministry.leader}</span>
                      </div>
                    </div>
                  </div>

                  {/* Activities */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-foreground mb-3">What We Do:</h3>
                    <div className="flex flex-wrap gap-2">
                      {ministry.activities.map((activity, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 text-xs sm:text-sm bg-primary/10 text-primary rounded-full"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full sm:w-auto rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Link href="/#contact" className="flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      Get Connected
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Serve?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-6">
              We believe that everyone has unique gifts and talents to share. Join one 
              of our ministry teams and make a difference in the lives of others.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/#contact">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="/about">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
