"use client"

import Link from "next/link"
import { Facebook, Instagram, Youtube, Twitter, Mail, MapPin, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const footerLinks = {
  about: [
    { label: "Our Story", href: "/about" },
    { label: "Leadership", href: "/about" },
    { label: "Beliefs", href: "/about" },
    { label: "Visit Us", href: "/#contact" },
  ],
  connect: [
    { label: "Services", href: "/#services" },
    { label: "Events", href: "/events" },
    { label: "Small Groups", href: "/ministries#small-groups" },
    { label: "Contact", href: "/#contact" },
  ],
  ministries: [
    { label: "Youth", href: "/ministries#youth" },
    { label: "Worship", href: "/ministries#worship" },
    { label: "Outreach", href: "/ministries#outreach" },
    { label: "Children", href: "/ministries#children" },
  ],
  resources: [
    { label: "Sermons", href: "/sermons" },
    { label: "Give Online", href: "/give" },
    { label: "Prayer Request", href: "/#contact" },
    { label: "Newsletter", href: "/#contact" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="glass-strong rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 bg-primary/10 border-primary/20">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="text-center md:text-left">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-background mb-2">
                  Stay Connected
                </h3>
                <p className="text-background/70 text-sm sm:text-base">
                  Subscribe to our newsletter for updates, devotionals, and event
                  announcements.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-full bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-primary"
                />
                <Button
                  type="submit"
                  className="rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg sm:text-xl">
                  G
                </span>
              </div>
              <span className="font-serif text-lg sm:text-xl font-semibold text-background">
                Green Field Victory Church
              </span>
            </Link>
            <p className="text-background/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              A community of believers passionate about sharing the love of
              Christ and growing together in faith.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-background/70">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>123 Faith Avenue, Springfield, ST 12345</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-background/70">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                (555) 123-4567
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-background/70">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                hello@greenfieldvictorychurch.org
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-background mb-3 sm:mb-4 text-sm sm:text-base">About</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-3 sm:mb-4 text-sm sm:text-base">Connect</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-3 sm:mb-4 text-sm sm:text-base">Ministries</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.ministries.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-3 sm:mb-4 text-sm sm:text-base">Resources</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-background/50 text-center sm:text-left">
              {new Date().getFullYear()} Green Field Victory Church. All rights
              reserved.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
