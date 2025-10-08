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
      {/* 
        DESIGN SYSTEM
        - Container max-width: 1400px
        - Horizontal padding: px-8 md:px-12 lg:px-16 (32px → 48px → 64px)
        - Section vertical spacing: py-20 md:py-28 lg:py-32 (80px → 112px → 128px)
        - Content vertical spacing: mb-16 md:mb-20 lg:mb-24 (64px → 80px → 96px)
        - Card/Panel padding: p-12 md:p-16 lg:p-20 (48px → 64px → 80px)
        - Element spacing: gap-8 md:gap-12 lg:gap-16 (32px → 48px → 64px)
      */}
      
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
      <header className="relative z-50 px-8 md:px-12 lg:px-16 py-6 md:py-8 flex items-center justify-between bg-[#E8E4DF]">
        <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between">
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
        </div>
      </header>

      {/* Hero Section with Video */}
      <section className="px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20" aria-label="Hero section">
        <div className="max-w-[1400px] mx-auto">
          {/* Video in Black Frame with Text Inside */}
          <div className="bg-black p-12 md:p-16 lg:p-20 rounded-lg">
            <div className="aspect-video relative overflow-hidden rounded-lg mb-12 md:mb-16">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
                Åbner snart i København
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/80 font-light">
                Unlimited reformer pilates til 239kr/måned
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Nordic Pilates Section */}
      <section id="main-content" className="py-20 md:py-28 lg:py-32 px-8 md:px-12 lg:px-16 bg-[#E8E4DF]" aria-labelledby="why-heading">
        <div className="max-w-[1400px] mx-auto">
          {/* White panel with padding */}
          <div className="bg-white rounded-lg p-12 md:p-16 lg:p-20">
            {/* Header */}
            <div className="mb-16 md:mb-20 lg:mb-24">
              <h2 id="why-heading" className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1F1D1A] mb-6 tracking-tight">
                Hvorfor Nordic Pilates
              </h2>
              <p className="text-[#6B6B6B] text-base md:text-lg font-light max-w-2xl">
                Unlimited medlemskab til 239kr/måned – ingen skjulte gebyrer eller dyre klippekort
              </p>
            </div>

          {/* Features Grid - 2 columns, 3 rows */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-x-16 lg:gap-x-24 md:gap-y-16 lg:gap-y-20">
            {/* Feature 01 - Billigere Pilates */}
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <svg className="w-14 h-14 text-[#B8926A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xl md:text-2xl font-light text-[#1F1D1A] mb-4">Billigere Pilates</h3>
                <p className="text-base text-[#6B6B6B] font-light leading-relaxed mb-4">
                  Unlimited medlemskab til 239kr/måned – ingen skjulte gebyrer eller dyre klippekort
                </p>
                <p className="text-sm text-[#999999] italic leading-relaxed">
                  "Fantastisk for begyndere! Nordic Flow-klasserne er perfekte for at lære det grundlæggende."
                </p>
              </div>
            </div>

            {/* Feature 04 - Ekspert instruktører */}
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <svg className="w-14 h-14 text-[#B8926A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xl md:text-2xl font-light text-[#1F1D1A] mb-4">Ekspert instruktører</h3>
                <p className="text-base text-[#6B6B6B] font-light leading-relaxed mb-4">
                  Video-vejledning fra certificerede Pilates instruktører + studioguide ved bookede klasser
                </p>
                <p className="text-sm text-[#999999] italic leading-relaxed">
                  "Bedste intro til reformer Pilates jeg har prøvet. Instruktørerne er tydelige og hjælpsomme."
                </p>
              </div>
            </div>

            {/* Feature 02 - 24/7 Fleksibilitet */}
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <svg className="w-14 h-14 text-[#B8926A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xl md:text-2xl font-light text-[#1F1D1A] mb-4">24/7 Fleksibilitet</h3>
                <p className="text-base text-[#6B6B6B] font-light leading-relaxed mb-4">
                  Træn når det passer dig – morgen, middag, aften eller nat
                </p>
                <p className="text-sm text-[#999999] italic leading-relaxed">
                  "Elsker at jeg kan træne kl. 7 om morgenen før arbejde. Appen gør det nemt at booke."
                </p>
              </div>
            </div>

            {/* Feature 05 - Book nemt via app */}
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <svg className="w-14 h-14 text-[#B8926A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xl md:text-2xl font-light text-[#1F1D1A] mb-4">Book nemt via app</h3>
                <p className="text-base text-[#6B6B6B] font-light leading-relaxed mb-4">
                  Book dine sessions og hold styr på din udvikling direkte fra din mobil – smart adgangskontrol inkluderet
                </p>
                <p className="text-sm text-[#999999] italic leading-relaxed">
                  "Appen gør det super nemt at se min fremgang og booke nye sessions."
                </p>
              </div>
            </div>

            {/* Feature 03 - Perfekt for alle niveauer */}
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <svg className="w-14 h-14 text-[#B8926A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xl md:text-2xl font-light text-[#1F1D1A] mb-4">Perfekt for alle niveauer</h3>
                <p className="text-base text-[#6B6B6B] font-light leading-relaxed mb-4">
                  Fra begynder til øvet – vi har klasser der passer præcis dit niveau og dine mål
                </p>
                <p className="text-sm text-[#999999] italic leading-relaxed">
                  "Kom som komplet begynder og føler mig allerede meget stærkere efter kun 3 uger."
                </p>
              </div>
            </div>

            {/* Feature 06 - Community */}
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <svg className="w-14 h-14 text-[#B8926A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xl md:text-2xl font-light text-[#1F1D1A] mb-4">Inspirerende community</h3>
                <p className="text-base text-[#6B6B6B] font-light leading-relaxed mb-4">
                  Bliv del af et støttende fællesskab der motiverer hinanden til at nå nye mål
                </p>
                <p className="text-sm text-[#999999] italic leading-relaxed">
                  "Elsker energien i studiet. Alle er venlige og det føles som et rigtig godt fællesskab."
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Find Your Pilates Variant Section */}
      <section className="py-20 md:py-28 lg:py-32 px-8 md:px-12 lg:px-16 bg-white" aria-labelledby="variants-heading">
        <div className="max-w-[1400px] mx-auto">
          {/* Header with tags */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12 mb-16 md:mb-20 lg:mb-24">
            <div className="flex-1">
              <h2 id="variants-heading" className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1F1D1A] mb-4 tracking-tight">
                Find din foretrukne variant af Pilates
              </h2>
              <p className="text-base text-[#999999] font-light leading-relaxed max-w-xl">
                Our certified coaches bring years of experience to guide you with mindfulness, safety, and personalized care.
              </p>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#B8926A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                <span className="text-[#6B6B6B] italic font-light">Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#B8926A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-[#6B6B6B] italic font-light">Personalized</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#B8926A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-[#6B6B6B] italic font-light">Experienced</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#B8926A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-[#6B6B6B] italic font-light">Holistic</span>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12 md:gap-16 lg:gap-20">
            {/* Left - Class Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Card 1 - Nordic Flow */}
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
                <div className="aspect-[3/4] relative">
                  <img src="/1.png" alt="Nordic Flow Pilates class" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                
                {/* Card content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-light text-[#1F1D1A] text-lg">Nordic Flow</h3>
                      <span className="text-xl">🔥</span>
                    </div>
                    <p className="text-xs text-[#6B6B6B] font-light leading-relaxed">
                      Rolige sekvenser med fokus på teknik og åndedræt
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Power Core */}
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
                <div className="aspect-[3/4] relative">
                  <img src="/2.png" alt="Power Core Pilates class" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                
                {/* Card content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-light text-[#1F1D1A] text-lg">Power Core</h3>
                      <div className="flex gap-0.5">
                        <span className="text-xl">🔥</span>
                        <span className="text-xl">🔥</span>
                      </div>
                    </div>
                    <p className="text-xs text-[#6B6B6B] font-light leading-relaxed">
                      Stabilitet, styrke og holding – byg en stærk kerne
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Sweat 30 */}
              <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
                <div className="aspect-[3/4] relative">
                  <img src="/3.png" alt="Sweat 30 Pilates class" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
                
                {/* Card content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-light text-[#1F1D1A] text-lg">Sweat 30</h3>
                      <div className="flex gap-0.5">
                        <span className="text-xl">🔥</span>
                        <span className="text-xl">🔥</span>
                        <span className="text-xl">🔥</span>
                      </div>
                    </div>
                    <p className="text-xs text-[#6B6B6B] font-light leading-relaxed">
                      Tempo og puls på 30 minutter – effektiv træning
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Instructor Info */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-serif italic text-[#1F1D1A] mb-6">
                Maya Tanaka
              </h3>
              
              <p className="text-xs text-[#B8926A] uppercase tracking-wider mb-4 font-light">
                VINYASA FLOW & BREATHWORK
              </p>
              
              <p className="text-base text-[#6B6B6B] font-light leading-relaxed">
                Maya blends dynamic movement with mindful breathwork to create a deeply immersive yoga experience. Her sessions are known for their calming energy and fluid transitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 md:py-28 lg:py-32 px-8 md:px-12 lg:px-16 bg-white" aria-labelledby="waitlist-heading">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20 lg:mb-24">
            <h2 id="waitlist-heading" className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1F1D1A] mb-6 tracking-tight">
              Join the Waitlist
            </h2>
            <p className="text-[#6B6B6B] text-base md:text-lg font-light leading-relaxed">
              Få early-bird fordele og vær blandt de første til at opleve studiet.
            </p>
          </div>

          <WaitlistQuizA />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-28 lg:py-32 px-8 md:px-12 lg:px-16 bg-[#E8E4DF]" aria-labelledby="pricing-heading">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 id="pricing-heading" className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1F1D1A] mb-6 tracking-tight">
            Simple Pricing
          </h2>
          <p className="text-[#6B6B6B] mb-16 md:mb-20 text-base md:text-lg font-light leading-relaxed">
            Et transparent medlemskab — ubegrænsede muligheder
          </p>

          <div className="max-w-md mx-auto bg-white p-12 md:p-16 shadow-lg rounded-lg">
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
      <footer className="bg-[#1F1D1A] text-white py-20 md:py-24 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1400px] mx-auto text-center">
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
