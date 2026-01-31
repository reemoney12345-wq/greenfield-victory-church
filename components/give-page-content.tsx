"use client"

import { useState } from "react"
import { Heart, CreditCard, Building2, ArrowRight, Check, Shield, Clock, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const presetAmounts = [25, 50, 100, 250, 500, 1000]

const givingOptions = [
  {
    icon: Heart,
    title: "One-Time Gift",
    description: "Make a single contribution to support our mission and ministries.",
  },
  {
    icon: CreditCard,
    title: "Recurring Giving",
    description: "Set up automatic weekly or monthly donations for consistent support.",
  },
  {
    icon: Building2,
    title: "Building Fund",
    description: "Contribute to our facility expansion and improvement projects.",
  },
]

const impactItems = [
  { text: "Support weekly worship services", stat: "500+ people each Sunday" },
  { text: "Fund youth and children programs", stat: "150+ young people" },
  { text: "Enable community outreach initiatives", stat: "1,000+ meals served" },
  { text: "Maintain our facilities", stat: "30,000 sq ft campus" },
  { text: "Support missionary work globally", stat: "5 partner organizations" },
]

const faqs = [
  {
    question: "Is my donation tax-deductible?",
    answer: "Yes! Green Field Victory Church is a registered 501(c)(3) nonprofit organization. You will receive a giving statement for your records.",
  },
  {
    question: "Can I set up recurring donations?",
    answer: "Absolutely! You can set up automatic weekly or monthly giving through our secure online platform.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and ACH bank transfers through our secure Stripe payment system.",
  },
  {
    question: "How is my donation used?",
    answer: "Your gifts support our worship services, ministries, community outreach, facility maintenance, and staff. We maintain full financial transparency.",
  },
]

export function GivePageContent() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100)
  const [customAmount, setCustomAmount] = useState("")
  const [frequency, setFrequency] = useState("One-Time")

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 bg-linear-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Support Our Mission
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
              Give Generously, Impact Lives
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg text-pretty">
              Your generous giving enables us to share the love of Christ, serve 
              our community, and make a lasting impact. Every gift, no matter the 
              size, makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Main Giving Section */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left Content */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Your Gift Makes a Difference
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
                When you give to Green Field Victory Church, you are investing in changed lives. 
                Your generosity supports worship, discipleship, outreach, and so much more.
              </p>

              {/* Impact List */}
              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                  Your Gift Helps Us:
                </h3>
                {impactItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 glass p-4 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-medium">{item.text}</p>
                      <p className="text-muted-foreground text-xs">{item.stat}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Giving Options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
            <div className="glass-strong p-6 sm:p-8 rounded-2xl sm:rounded-3xl">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-6">
                Make a Donation
              </h3>

              {/* Amount Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-3">
                  Select Amount
                </label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount)
                        setCustomAmount("")
                      }}
                      className={`py-3 px-4 rounded-xl font-medium text-sm sm:text-base transition-all ${
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
                    className="pl-8 rounded-xl bg-background/50 border-border focus:border-primary"
                  />
                </div>
              </div>

              {/* Frequency */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-3">
                  Giving Frequency
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["One-Time", "Weekly", "Monthly"].map((freq) => (
                    <button
                      key={freq}
                      onClick={() => setFrequency(freq)}
                      className={`py-3 px-4 rounded-xl font-medium text-sm sm:text-base transition-all ${
                        frequency === freq
                          ? "bg-primary text-primary-foreground"
                          : "bg-background/50 text-foreground hover:bg-primary/10"
                      }`}
                    >
                      {freq}
                    </button>
                  ))}
                </div>
              </div>

              {/* Designation */}
              <div className="mb-8">
                <label htmlFor="designation" className="block text-sm font-medium text-foreground mb-3">
                  Designate Your Gift
                </label>
                <select id="designation" aria-label="Designation" className="w-full py-3 px-4 rounded-xl bg-background/50 border border-border text-foreground text-sm sm:text-base focus:border-primary focus:outline-none">
                  <option>General Fund</option>
                  <option>Building Fund</option>
                  <option>Missions</option>
                  <option>Youth Ministry</option>
                  <option>Children&apos;s Ministry</option>
                  <option>Community Outreach</option>
                  <option>Benevolence Fund</option>
                </select>
              </div>

              {/* Submit */}
              <Button className="w-full rounded-full py-6 bg-primary hover:bg-primary/90 text-primary-foreground text-lg">
                Give ${selectedAmount || customAmount || "0"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              {/* Security Note */}
              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>Secure donation powered by Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 sm:py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-2xl text-center">
              <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Secure & Encrypted</h3>
              <p className="text-muted-foreground text-sm">
                Your financial information is protected with bank-level encryption.
              </p>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Easy & Convenient</h3>
              <p className="text-muted-foreground text-sm">
                Give anytime, anywhere. Set up recurring gifts in minutes.
              </p>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <Globe className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Tax Deductible</h3>
              <p className="text-muted-foreground text-sm">
                Green Field Victory Church is a 501(c)(3). You will receive a giving statement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Have questions about giving? We have answers.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="glass p-5 sm:p-6 rounded-2xl">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-12 sm:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Other Ways to Give
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8">
              In addition to online giving, you can also give by check, stock transfer, 
              or planned giving. Contact our office to learn more about these options.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="p-4 rounded-xl bg-background/50">
                <h3 className="font-semibold text-foreground mb-1">By Check</h3>
                <p className="text-muted-foreground text-sm">Mail to our church office</p>
              </div>
              <div className="p-4 rounded-xl bg-background/50">
                <h3 className="font-semibold text-foreground mb-1">Stock Transfer</h3>
                <p className="text-muted-foreground text-sm">Contact our finance team</p>
              </div>
              <div className="p-4 rounded-xl bg-background/50">
                <h3 className="font-semibold text-foreground mb-1">Planned Giving</h3>
                <p className="text-muted-foreground text-sm">Legacy and estate gifts</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
