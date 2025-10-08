'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import WaitlistQuizA from '@/components/WaitlistQuizA'
import { Instagram } from 'lucide-react'

// VARIANT E - Clean Studio Design with Non-Sticky Header
export default function VariantE() {
  const [signupCount, setSignupCount] = useState(0)

  useEffect(() => {
    const fetchSignupCount = async () => {
      try {
        const response = await fetch('/api/waitlist-count')
        const data = await response.json()
        setSignupCount(data.count || 0)
      } catch (error) {
        console.error('Failed to fetch signup count:', error)
      }
    }

    fetchSignupCount()
    const interval = setInterval(fetchSignupCount, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-[#E8E4DF]">
      {/* Skip to main content link for keyboard navigation */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-16 focus:py-8 focus:bg-black focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Variant E Label */}
      <div className="fixed top-4 left-4 z-[100] bg-black text-white px-4 py-2 rounded-full text-xs font-light tracking-wide">
        Variant E
      </div>

      {/* Non-Sticky Header */}
      <header className="relative z-50 px-6 md:px-8 lg:px-12 py-4 md:py-6 flex items-center justify-between bg-[#E8E4DF] max-w-[1400px] mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Image 
            src="/orange-logo.png" 
            alt="Nordic Pilates" 
            width={120} 
            height={54} 
            className="object-contain"
            priority
          />
        </div>

        {/* Right side - Early bird info */}
        <div className="flex items-center gap-4 text-sm">
          <span className="text-[#B8926A] font-light">
            <span className="font-medium">{signupCount}</span> early bird pladser tilbage
          </span>
          <button 
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2.5 bg-[#1F1D1A] text-white rounded-md hover:bg-black transition-all text-sm font-light min-h-[44px]"
            aria-label="Tilmeld venteliste"
          >
            Tilmeld venteliste
          </button>
        </div>
      </header>

      {/* Hero Section with Video */}
      <section className="px-6 md:px-8 lg:px-12 py-8 md:py-12 max-w-[1400px] mx-auto" aria-label="Hero section">
        {/* Video in Black Frame with Text Inside */}
        <div className="bg-black p-8 md:p-12 lg:p-16 rounded-lg">
          <div className="aspect-video relative overflow-hidden rounded-lg mb-8">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              aria-label="Nordic Pilates studio doors video"
            >
              <source src="/doors.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Text Inside Black Frame - White on Black */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight">
              Åbner snart i København
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/80 font-light">
              Unlimited reformer pilates til 239kr/måned
            </p>
          </div>
        </div>
      </section>

      {/* Class Schedule Section */}
      <section id="main-content" className="py-16 md:py-24 px-6 md:px-8 lg:px-12 bg-white" aria-labelledby="schedule-heading">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 id="schedule-heading" className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1F1D1A] mb-4 tracking-tight">
              Hvorfor Nordic Pilates
            </h2>
            <p className="text-[#6B6B6B] text-base md:text-lg font-light max-w-2xl">
              Choose from live or on-demand classes including Hatha, Vinyasa, Yin, and beginner-friendly flows.
            </p>
          </div>

          {/* Class Grid - 2 columns, 3 rows */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-12">
            {/* Class 01 */}
            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-sm text-[#999999] font-light">01.</span>
                <h3 className="text-2xl md:text-3xl font-serif italic text-[#1F1D1A]">Morning Energy Flow</h3>
              </div>
              <div className="pl-10">
                <p className="text-xs text-[#999999] uppercase tracking-wide mb-2">06:30 AM - 07:30 AM  |  ALL LEVELS</p>
                <p className="text-sm text-[#6B6B6B] font-light leading-relaxed">
                  Boost energy and awaken the body through dynamic Vinyasa sequences.
                </p>
              </div>
            </div>

            {/* Class 04 */}
            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-sm text-[#999999] font-light">04.</span>
                <h3 className="text-2xl md:text-3xl font-serif italic text-[#1F1D1A]">Core Strength & Balance</h3>
              </div>
              <div className="pl-10">
                <p className="text-xs text-[#999999] uppercase tracking-wide mb-2">05:30 PM - 06:30 PM  |  INTERMEDIATE</p>
                <p className="text-sm text-[#6B6B6B] font-light leading-relaxed">
                  Focused on strengthening the core and improving body balance through controlled movements.
                </p>
              </div>
            </div>

            {/* Class 02 */}
            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-sm text-[#999999] font-light">02.</span>
                <h3 className="text-2xl md:text-3xl font-serif italic text-[#1F1D1A]">Lunchtime Reset</h3>
              </div>
              <div className="pl-10">
                <p className="text-xs text-[#999999] uppercase tracking-wide mb-2">12:00 PM - 12:45 PM  |  BEGINNER-FRIENDLY</p>
                <p className="text-sm text-[#6B6B6B] font-light leading-relaxed">
                  Gentle stretches and breathwork to reduce midday tension and recharge focus.
                </p>
              </div>
            </div>

            {/* Class 05 */}
            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-sm text-[#999999] font-light">05.</span>
                <h3 className="text-2xl md:text-3xl font-serif italic text-[#1F1D1A]">Hatha for Posture & Flexibility</h3>
              </div>
              <div className="pl-10">
                <p className="text-xs text-[#999999] uppercase tracking-wide mb-2">08:00 AM - 09:00 AM  |  BEGINNER TO INTERMEDIATE</p>
                <p className="text-sm text-[#6B6B6B] font-light leading-relaxed">
                  Deep stretches and alignment techniques to enhance flexibility and posture awareness.
                </p>
              </div>
            </div>

            {/* Class 03 */}
            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-sm text-[#999999] font-light">03.</span>
                <h3 className="text-2xl md:text-3xl font-serif italic text-[#1F1D1A]">Evening Wind Down</h3>
              </div>
              <div className="pl-10">
                <p className="text-xs text-[#999999] uppercase tracking-wide mb-2">07:00 PM - 08:00 PM  |  ALL LEVELS</p>
                <p className="text-sm text-[#6B6B6B] font-light leading-relaxed">
                  Relaxing Yin yoga flow to release muscle tightness and prepare for restful sleep.
                </p>
              </div>
            </div>

            {/* Class 06 */}
            <div className="space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-sm text-[#999999] font-light">06.</span>
                <h3 className="text-2xl md:text-3xl font-serif italic text-[#1F1D1A]">Restorative Yoga & Meditation</h3>
              </div>
              <div className="pl-10">
                <p className="text-xs text-[#999999] uppercase tracking-wide mb-2">08:30 PM - 09:15 PM  |  ALL LEVELS</p>
                <p className="text-sm text-[#6B6B6B] font-light leading-relaxed">
                  Slow-paced restorative poses combined with guided meditation for deep relaxation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Preview */}
      <section className="py-16 md:py-24 px-6 md:px-8 lg:px-12 bg-[#E8E4DF]" aria-labelledby="studio-heading">
        <div className="max-w-[1400px] mx-auto">
          <h2 id="studio-heading" className="text-3xl md:text-4xl font-light text-[#1F1D1A] mb-12 text-center tracking-tight">
            Your New Studio Space
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
              <img src="/1.png" alt="Nordic Pilates studio interior" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
              <img src="/2.png" alt="Nordic Pilates reformer equipment" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 md:py-32 px-6 md:px-8 lg:px-12 bg-white" aria-labelledby="waitlist-heading">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 id="waitlist-heading" className="text-3xl md:text-4xl font-light text-[#1F1D1A] mb-6 tracking-tight">
              Join the Waitlist
            </h2>
            <p className="text-[#6B6B6B] text-lg font-light leading-relaxed">
              Få early-bird fordele og vær blandt de første til at opleve studiet.
            </p>
          </div>

          <WaitlistQuizA />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 px-6 md:px-8 lg:px-12 bg-[#E8E4DF]" aria-labelledby="pricing-heading">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 id="pricing-heading" className="text-3xl md:text-4xl font-light text-[#1F1D1A] mb-6 tracking-tight">
            Simple Pricing
          </h2>
          <p className="text-[#6B6B6B] mb-16 text-lg font-light leading-relaxed">
            Et transparent medlemskab — ubegrænsede muligheder
          </p>

          <div className="max-w-md mx-auto bg-white p-12 shadow-lg rounded-lg">
            <div className="mb-8">
              <h3 className="text-2xl font-light text-[#1F1D1A] mb-2">Unlimited</h3>
            </div>

            <div className="mb-8">
              <p className="text-5xl font-light text-[#1F1D1A] mb-2">
                239 kr
                <span className="text-lg text-[#6B6B6B]">/måned</span>
              </p>
            </div>

            <ul className="space-y-4 text-left text-[#6B6B6B] mb-8 font-light">
              <li className="flex items-start gap-3">
                <span className="text-[#1F1D1A] mt-1">✓</span>
                <span>Ubegrænsede timer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1F1D1A] mt-1">✓</span>
                <span>Book når som helst 24/7</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1F1D1A] mt-1">✓</span>
                <span>Prioriteret booking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1F1D1A] mt-1">✓</span>
                <span>Gratis velkomstpakke</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1F1D1A] mt-1">✓</span>
                <span>Opsig når som helst</span>
              </li>
            </ul>

            <div className="bg-[#E8E4DF] p-4 text-sm text-[#6B6B6B] font-light">
              <strong className="text-[#1F1D1A]">Early-bird fordel:</strong> 50% rabat i 2 måneder + gratis velkomstpakke (200kr værdi)
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F1D1A] text-white py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image 
              src="/logo-a.png" 
              alt="Nordic Pilates" 
              width={200} 
              height={90} 
              className="object-contain opacity-90 brightness-0 invert"
            />
          </div>

          <div className="mb-8">
            <p className="text-xl mb-4 font-light tracking-wide">Kontakt os</p>
            <a href="mailto:contact@nordicpilates.com" className="text-[#B8926A] hover:text-[#C4A582] transition-colors">
              contact@nordicpilates.com
            </a>
          </div>

          <div className="flex justify-center items-center gap-6 mb-8">
            <a 
              href="https://instagram.com/nordicpilatesdk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#B8926A] transition-colors"
              aria-label="Følg os på Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>

          <div className="text-sm text-[#A0A0A0] font-light">
            <p className="mb-2">Vi er et dansk firma forpligtet til at beskytte dine data under EU-regler.</p>
            <p>© {new Date().getFullYear()} Nordic Pilates. Alle rettigheder forbeholdes.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
