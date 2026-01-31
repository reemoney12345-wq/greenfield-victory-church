"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function GSAPAnimations() {
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (hasAnimated.current) return
    hasAnimated.current = true

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Hero animations
    const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } })

    heroTimeline
      .from(".hero-badge", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
      })
      .from(
        ".hero-title",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.4"
      )
      .from(
        ".hero-subtitle",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.6"
      )
      .from(
        ".hero-cta",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.4"
      )

    // Scroll-triggered animations for sections
    const sections = gsap.utils.toArray<HTMLElement>("section")

    sections.forEach((section) => {
      // Animate section headers
      const headers = section.querySelectorAll("h2, .text-primary")
      if (headers.length > 0) {
        gsap.from(headers, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // Animate cards and glass elements
      const cards = section.querySelectorAll(".glass, .glass-strong")
      if (cards.length > 0) {
        gsap.from(cards, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // Animate images
      const images = section.querySelectorAll("img")
      if (images.length > 0) {
        gsap.from(images, {
          scale: 0.95,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
      }
    })

    // About section special animation
    gsap.from(".about-content", {
      x: -50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#about",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    })

    gsap.from(".about-image", {
      x: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#about",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    })

    // Stats counter animation
    const statNumbers = document.querySelectorAll("[data-stat]")
    statNumbers.forEach((stat) => {
      const value = stat.getAttribute("data-stat")
      if (value) {
        gsap.from(stat, {
          textContent: 0,
          duration: 2,
          ease: "power1.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })
      }
    })

    // Parallax effect for hero background
    gsap.to(".hero-bg", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-bg",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })

    // Floating animation for glass cards on hover
    const glassCards = document.querySelectorAll(".glass")
    glassCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -5,
          duration: 0.3,
          ease: "power2.out",
        })
      })
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        })
      })
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return null
}
