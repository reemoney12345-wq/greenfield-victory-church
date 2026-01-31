"use client"

import Image from "next/image"
import { Mail } from "lucide-react"

const staff = [
  {
    name: "Pastor John Mitchell",
    role: "Lead Pastor",
    bio: "Pastor John has led Green Field Victory Church for 15 years with a passion for teaching God's Word.",
    initials: "JM",
  },
  {
    name: "Sarah Chen",
    role: "Associate Pastor",
    bio: "Pastor Sarah oversees discipleship and women's ministry with grace and wisdom.",
    initials: "SC",
  },
  {
    name: "Michael Thompson",
    role: "Worship Director",
    bio: "Michael leads our worship ministry with excellence and a heart for authentic worship.",
    initials: "MT",
  },
  {
    name: "Rachel Williams",
    role: "Youth Pastor",
    bio: "Rachel brings energy and creativity to our youth ministry, inspiring the next generation.",
    initials: "RW",
  },
]

export function StaffSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Meet Our Leadership
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Our pastoral team is dedicated to serving God and our church family
            with humility, integrity, and love.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staff.map((member, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-6 text-center hover:scale-105 transition-transform duration-300"
            >
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-linear-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-4xl font-serif font-bold text-primary-foreground">
                  {member.initials}
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
              <button className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                Contact
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
