"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/#services", label: "Services" },
  {
    label: "Ministries",
    href: "/ministries",
    children: [
      { href: "/ministries#youth", label: "Youth" },
      { href: "/ministries#worship", label: "Worship" },
      { href: "/ministries#outreach", label: "Outreach" },
      { href: "/ministries#small-groups", label: "Small Groups" },
    ],
  },
  { href: "/events", label: "Events" },
  { href: "/sermons", label: "Sermons" },
  { href: "/#contact", label: "Contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-serif font-bold text-base sm:text-xl">G</span>
          </div>
          <span className={`font-serif text-base sm:text-xl font-semibold transition-colors ${
            isScrolled ? "text-foreground" : "text-white"
          }`}>
            Green Field Victory Church
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                      isScrolled ? "text-foreground" : "text-white/90"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="glass rounded-2xl border-0">
                  {link.children.map((child) => (
                    <DropdownMenuItem key={child.href} asChild>
                      <Link
                        href={child.href}
                        className="cursor-pointer hover:bg-primary/10"
                      >
                        {child.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            asChild
            className="rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link href="/give">Give Online</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-strong mt-2 mx-3 sm:mx-4 rounded-2xl sm:rounded-3xl p-4 sm:p-6 max-h-[70vh] overflow-y-auto">
          <div className="flex flex-col gap-3 sm:gap-4">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="space-y-2">
                  <span className="text-xs sm:text-sm font-semibold text-muted-foreground">
                    {link.label}
                  </span>
                  <div className="pl-3 sm:pl-4 flex flex-col gap-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="text-sm text-foreground hover:text-primary transition-colors py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <Button
              asChild
              className="mt-3 sm:mt-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/give">Give Online</Link>
            </Button>
          </div>
        </div>
      )}
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-navbar py-3"
          : "bg-transparent py-6"
      }`}
    >
