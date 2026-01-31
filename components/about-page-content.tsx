"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Heart, BookOpen, Users, Star, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

const staff = [
  {
    name: "Pastor John Mitchell",
    role: "Lead Pastor",
    bio: "Pastor John has led Green Field Victory Church for 15 years with a passion for teaching God's Word and shepherding the congregation.",
    initials: "JM",
    email: "john@greenfieldvictorychurch.org",
  },
  {
    name: "Sarah Chen",
    role: "Associate Pastor",
    bio: "Pastor Sarah oversees discipleship and women's ministry with grace and wisdom, bringing 10 years of ministry experience.",
    initials: "SC",
    email: "sarah@greenfieldvictorychurch.org",
  },
  {
    name: "Michael Thompson",
    role: "Worship Director",
    bio: "Michael leads our worship ministry with excellence and a heart for authentic worship, guiding our music teams.",
    initials: "MT",
    email: "michael@greenfieldvictorychurch.org",
  },
  {
    name: "Rachel Williams",
    role: "Youth Pastor",
    bio: "Rachel brings energy and creativity to our youth ministry, inspiring the next generation to follow Christ.",
    initials: "RW",
    email: "rachel@greenfieldvictorychurch.org",
  },
  {
    name: "David Rodriguez",
    role: "Outreach Director",
    bio: "David coordinates our community outreach and missions efforts, connecting the church with those in need.",
    initials: "DR",
    email: "david@greenfieldvictorychurch.org",
  },
  {
    name: "Emily Foster",
    role: "Children's Director",
    bio: "Emily creates a fun, engaging environment for children to learn about Jesus and grow in their faith.",
    initials: "EF",
    email: "emily@greenfieldvictorychurch.org",
  },
]

const values = [
  {
    icon: BookOpen,
    title: "Biblical Teaching",
    description: "We are committed to teaching the Bible faithfully and applying it to everyday life.",
  },
  {
    icon: Heart,
    title: "Authentic Community",
    description: "We cultivate genuine relationships where people can be real and grow together.",
  },
  {
    icon: Users,
    title: "Servant Leadership",
    description: "We lead by serving others, following the example of Jesus Christ.",
  },
  {
    icon: Star,
    title: "Worship Excellence",
    description: "We offer our best to God in all we do, honoring Him with excellence.",
  },
  {
    icon: Target,
    title: "Outward Focus",
    description: "We exist to reach our community and the world with the love of Christ.",
  },
]

const timeline = [
  { year: "1985", event: "Green Field Victory Church founded with 25 members meeting in a living room" },
  { year: "1992", event: "Moved to our first dedicated building on Oak Street" },
  { year: "2001", event: "Launched youth ministry and community outreach programs" },
  { year: "2010", event: "Pastor John Mitchell called as Lead Pastor" },
  { year: "2015", event: "Completed building expansion to accommodate growing congregation" },
  { year: "2020", event: "Launched online services and small group network" },
  { year: "Today", event: "Continuing to grow and serve our community" },
]

export function AboutPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 bg-linear-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
              Welcome to Green Field Victory Church
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg text-pretty">
              We are a vibrant, welcoming community of believers passionate about 
              sharing the love of Christ and helping people grow in their faith.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative h-64 sm:h-80 lg:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden">
              <Image
                src="/images/community.jpg"
                alt="Green Field Victory Church community"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
                To Know Christ and Make Him Known
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                At Green Field Victory Church, our mission is simple yet profound: we exist to help 
                people experience the transforming love of Jesus Christ. We do this by 
                creating authentic community, providing biblical teaching, and serving 
                our neighbors near and far.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Whether you are exploring faith for the first time or looking to deepen 
                your relationship with God, there is a place for you here. We believe 
                that everyone matters to God, and therefore everyone matters to us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              What We Believe In
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              These core values guide everything we do as a church family.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-center hover:scale-[1.02] transition-transform"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our History
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              Our Journey of Faith
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              From humble beginnings to a thriving community, see how God has led us.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-4 sm:gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-primary-foreground font-bold text-xs sm:text-sm">{item.year}</span>
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-primary/20 mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className="text-foreground text-sm sm:text-base">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-12 sm:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Our pastoral team is dedicated to serving God and our church family 
              with humility, integrity, and love.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {staff.map((member, index) => (
              <div
                key={index}
                className="glass rounded-2xl sm:rounded-3xl p-6 text-center hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-5 rounded-full overflow-hidden bg-linear-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-primary-foreground">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <Button
                  asChild
                  variant="ghost"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  <a href={`mailto:${member.email}`} className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Contact
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Come Visit Us
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-6">
              We would love to meet you! Join us for a Sunday service and experience 
              the warmth of our church family firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/#services">Service Times</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="/#contact">Get Directions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
