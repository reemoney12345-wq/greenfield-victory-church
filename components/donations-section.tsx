"use client"

import { useState } from "react"
import { Heart, CreditCard, Building2, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const presetAmounts = [25, 50, 100, 250, 500]

const givingOptions = [
  {
    icon: Heart,
    title: "One-Time Gift",
    description: "Make a single contribution to support our mission.",
  },
  {
    icon: CreditCard,
    title: "Recurring Giving",
    description: "Set up automatic weekly or monthly donations.",
  },
  {
    icon: Building2,
    title: "Building Fund",
    description: "Contribute to our facility expansion project.",
  },
]

const impactItems = [
  "Support weekly worship services",
  "Fund youth and children programs",
  "Enable community outreach initiatives",
  "Maintain our facilities",
  "Support missionary work globally",
]

export function DonationsSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100)
  const [customAmount, setCustomAmount] = useState("")

  return (
    <section id="donate" className="py-16 sm:py-24 bg-linear-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Support Our Mission
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6 text-balance">
              Give Generously, Impact Lives
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Your generous giving enables us to share the love of Christ, serve
              our community, and make a lasting impact. Every gift, no matter
              the size, makes a difference.
            </p>

            {/* Impact List */}
            <div className="mb-6 sm:mb-8">
              <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                Your Gift Helps Us:
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {impactItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Giving Options - Hidden on mobile to save space */}
            <div className="hidden sm:grid sm:grid-cols-3 gap-4">
              {givingOptions.map((option, index) => (
                <div
                  key={index}
                  className="glass p-4 rounded-2xl text-center hover:scale-105 transition-transform cursor-pointer"
                >
                  <option.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground text-sm mb-1">
                    {option.title}
                  </h4>
                  <p className="text-muted-foreground text-xs">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Donation Form */}
          <div className="glass-strong p-5 sm:p-8 rounded-2xl sm:rounded-3xl">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              Make a Donation
            </h3>

            {/* Amount Selection */}
            <div className="mb-5 sm:mb-6">
              <label className="block text-sm font-medium text-foreground mb-2 sm:mb-3">
                Select Amount
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 mb-3 sm:mb-4">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount)
                      setCustomAmount("")
                    }}
                    className={`py-2.5 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transition-all ${
                      selectedAmount === amount
                        ? "bg-primary text-primary-foreground"
                        : "bg-background/50 text-foreground hover:bg-primary/10"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                  $
                </span>
                <Input
                  type="number"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(null)
                  }}
                  className="pl-8 rounded-lg sm:rounded-xl bg-background/50 border-border focus:border-primary"
                />
              </div>
            </div>

            {/* Frequency */}
            <div className="mb-5 sm:mb-6">
              <label className="block text-sm font-medium text-foreground mb-2 sm:mb-3">
                Giving Frequency
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {["One-Time", "Weekly", "Monthly"].map((freq) => (
                  <button
                    key={freq}
                    className="py-2.5 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl font-medium text-xs sm:text-base bg-background/50 text-foreground hover:bg-primary/10 transition-all first:bg-primary first:text-primary-foreground"
                  >
                    {freq}
                  </button>
                ))}
              </div>
            </div>

            {/* Designation */}
            <div className="mb-6 sm:mb-8">
              <label htmlFor="designation" className="block text-sm font-medium text-foreground mb-2 sm:mb-3">
                Designate Your Gift
              </label>
              <select id="designation" aria-label="Designation" className="w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-background/50 border border-border text-foreground text-sm sm:text-base focus:border-primary focus:outline-none">
                <option>General Fund</option>
                <option>Building Fund</option>
                <option>Missions</option>
                <option>Youth Ministry</option>
                <option>Community Outreach</option>
              </select>
            </div>

            {/* Submit */}
            <Button className="w-full rounded-full py-5 sm:py-6 bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg">
              Give ${selectedAmount || customAmount || "0"}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-3 sm:mt-4">
              Secure donation powered by Stripe. Green Field Victory Church is a 501(c)(3)
              nonprofit organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
