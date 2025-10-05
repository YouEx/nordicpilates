'use client'

import { useState, useEffect } from 'react'
import HeroMedia from '@/components/HeroMedia'
import WaitlistQuiz from '@/components/WaitlistQuiz'
import SocialProof from '@/components/SocialProof'
import Logo from '@/components/Logo'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show header when scrolled past 80% of viewport height
      setIsScrolled(window.scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Sticky Header - appears on scroll */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-fog/30 shadow-sm transition-transform duration-300 ${
          isScrolled ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container-custom py-16 flex items-center justify-between">
          <Logo size="sm" />
          <nav className="flex items-center gap-12">
            <span className="hidden md:inline text-sm text-graphite/60">
              <span className="font-semibold text-coral">112/150</span> pladser tilbage
            </span>
            <Button 
              size="sm"
              asChild
            >
              <a href="#waitlist">Få Early-Bird Plads</a>
            </Button>
          </nav>
        </div>
      </header>
      {/* Full-Screen Hero Splash */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Video/Image - Automatically detects and loads media */}
        <HeroMedia />
        
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-[1]"></div>

        {/* Logo in top-left corner */}
        <div className="absolute top-24 left-24 md:top-32 md:left-32 lg:top-40 lg:left-40 z-20 animate-fadeIn" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <Logo size="lg" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full min-h-screen flex flex-col items-center justify-center px-24 md:px-48 text-center">
          <div className="max-w-4xl">
            {/* Main Headline - Clear outcome */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-light mb-32 leading-tight animate-fadeInUp" style={{ animationDelay: '0.3s', opacity: 0 }}>
              Reformer Pilates på Østerbro, åbner januar 2026.<br/>
              <span className="text-2xl md:text-3xl lg:text-4xl text-white/90 block mt-16">
                Fleksible tider før og efter arbejde.
              </span>
            </h1>

            {/* Progress indicator */}
            <div className="mb-40 animate-fadeInUp" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-24 py-12 border border-white/20">
                <p className="text-white/90 text-sm font-medium mb-8">
                  <span className="text-coral text-lg font-semibold">112 af 150</span> early-bird pladser tilbage
                </p>
                <div className="w-64 md:w-80 h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-coral rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
            
            {/* Single Primary CTA */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.5s', opacity: 0 }}>
              <Button size="xl" asChild className="shadow-lg hover:shadow-xl">
                <a href="#waitlist" aria-label="Få din early bird plads">
                  Få Early-Bird Plads
                </a>
              </Button>
              <p className="text-white/70 text-sm mt-16">
                50% rabat første måned + gratis introklasse
              </p>
            </div>
            
            {/* Location hint */}
            <div className="flex flex-wrap justify-center items-center gap-x-24 gap-y-12 mt-48 text-white/80 text-sm animate-fadeInUp" style={{ animationDelay: '0.6s', opacity: 0 }}>
              <div className="flex items-center gap-8">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Østerbro, København</span>
              </div>
              <div className="flex items-center gap-8">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span>Januar 2026</span>
              </div>
              <div className="flex items-center gap-8">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span>Maks 8 per hold</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 animate-bounce">
            <svg 
              className="w-8 h-8 text-white/60" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section id="waitlist" className="bg-cream py-80">
        <div className="container-custom max-w-3xl">
          <h2 className="text-center mb-24">Tilmeld ventelisten</h2>
          <p className="text-center text-graphite/70 mb-32 max-w-2xl mx-auto">
            Få early-bird plads, introfordele og først besked om åbning.
          </p>
          
          {/* Early Bird Benefits Banner */}
          <div className="bg-gradient-to-br from-ice-blue/20 to-[#C4A582]/10 border border-[#C4A582]/20 rounded-lg p-32 mb-40">
            <div className="flex items-start gap-16 mb-20">
              <span className="text-4xl">✨</span>
              <div className="flex-1">
                <h3 className="text-graphite font-semibold mb-20 text-xl">Early Bird Fordele</h3>
                <ul className="space-y-12 text-graphite/80">
                  <li className="flex items-center gap-12">
                    <svg className="w-6 h-6 text-[#C4A582] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>50% rabat</strong> på første måned</span>
                  </li>
                  <li className="flex items-center gap-12">
                    <svg className="w-6 h-6 text-[#C4A582] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Gratis introduktionsklasse</strong> (værdi 300kr)</span>
                  </li>
                  <li className="flex items-center gap-12">
                    <svg className="w-6 h-6 text-[#C4A582] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Prioritet</strong> til foretrukne tidspunkter</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-graphite/60 text-center">
              Kun tilgængeligt for de første 150 der tilmelder sig
            </p>
          </div>

          <WaitlistQuiz />
        </div>
      </section>

      {/* Why Nordic Pilates Section */}
      <section id="about" className="container-custom py-80">
        <h2 className="text-center mb-24">Hvorfor Nordic Pilates</h2>
        <p className="text-center text-graphite/70 mb-48 max-w-2xl mx-auto">
          Opdag reformer Pilates i det skandinaviske design vi elsker
        </p>
        <div className="grid md:grid-cols-3 gap-32 mb-64">
          <div className="text-center">
            <div className="mb-20">
              <svg className="w-16 h-16 mx-auto text-[#C4A582]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mb-12">Fleksible tider</h3>
            <p className="text-graphite/70">
              Klasser kører løbende hele dagen – fra tidlig morgen til sen aften
            </p>
          </div>
          <div className="text-center">
            <div className="mb-20">
              <svg className="w-16 h-16 mx-auto text-[#C4A582]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="mb-12">Guidet & trygt</h3>
            <p className="text-graphite/70">
              Tydelig on-screen instruktion fra eksperter + hjælpsom studioguide
            </p>
          </div>
          <div className="text-center">
            <div className="mb-20">
              <svg className="w-16 h-16 mx-auto text-[#C4A582]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="mb-12">For alle niveauer</h3>
            <p className="text-graphite/70">
              Begynder, let øvet og udfordrende formater – vælg det der passer dig
            </p>
          </div>
        </div>

        {/* Social Proof - Testimonials */}
        <div className="max-w-4xl mx-auto mb-64">
          <h3 className="text-center text-xl font-medium mb-32 text-navy">Hvad medlemmer siger</h3>
          <div className="grid md:grid-cols-3 gap-24">
            <div className="bg-white p-24 rounded-lg border border-fog/30">
              <div className="flex items-center gap-4 mb-12">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="text-coral">⭐️</span>
                ))}
              </div>
              <p className="text-graphite/80 text-sm mb-16 leading-relaxed">
                "Bedste intro til reformer Pilates jeg har prøvet. Instruktørerne er tydelige og studioguiden var super hjælpsom."
              </p>
              <p className="text-graphite/60 text-xs">— Anna, 32, København</p>
            </div>
            
            <div className="bg-white p-24 rounded-lg border border-fog/30">
              <div className="flex items-center gap-4 mb-12">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="text-coral">⭐️</span>
                ))}
              </div>
              <p className="text-graphite/80 text-sm mb-16 leading-relaxed">
                "Elsker at jeg kan træne kl. 7 om morgenen før arbejde. Appen gør det nemt at booke og aflyse."
              </p>
              <p className="text-graphite/60 text-xs">— Marcus, 28, København</p>
            </div>
            
            <div className="bg-white p-24 rounded-lg border border-fog/30">
              <div className="flex items-center gap-4 mb-12">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="text-coral">⭐️</span>
                ))}
              </div>
              <p className="text-graphite/80 text-sm mb-16 leading-relaxed">
                "Fantastisk for begyndere! Jeg var nervøs i starten, men Nordic Flow-klasserne er perfekte for at lære det grundlæggende."
              </p>
              <p className="text-graphite/60 text-xs">— Sofia, 35, København</p>
            </div>
          </div>
        </div>

        {/* Safety & Trust Section */}
        <div className="bg-navy/5 border border-navy/10 rounded-lg p-40 max-w-4xl mx-auto mb-64">
          <h3 className="text-center text-xl font-medium mb-32 text-navy">Sådan sikrer vi tryg træning</h3>
          <div className="grid md:grid-cols-2 gap-24">
            <div className="flex items-start gap-16">
              <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium mb-8">Certificeret studioguide</h4>
                <p className="text-sm text-graphite/70">
                  Altid til stede for at hjælpe med form, stillinger og sikkerhed
                </p>
              </div>
            </div>

            <div className="flex items-start gap-16">
              <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium mb-8">Maksimalt 8 personer</h4>
                <p className="text-sm text-graphite/70">
                  Små hold sikrer personlig opmærksomhed og plads til alle
                </p>
              </div>
            </div>

            <div className="flex items-start gap-16">
              <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium mb-8">Ekspert-guidning på skærm</h4>
                <p className="text-sm text-graphite/70">
                  Professionelle instruktører guider dig gennem hver øvelse
                </p>
              </div>
            </div>

            <div className="flex items-start gap-16">
              <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium mb-8">Hyppig rengøring</h4>
                <p className="text-sm text-graphite/70">
                  Reformere rengøres mellem hver session for optimal hygiejne
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Early Bird Incentive */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-ice-blue/10 to-[#C4A582]/5 border border-[#C4A582]/20 rounded-lg p-40 text-center">
          <h3 className="mb-20 text-xl">Kom med fra start og få:</h3>
          <ul className="space-y-12 text-left max-w-xl mx-auto mb-24">
            <li className="flex items-start gap-12">
              <svg className="w-5 h-5 text-[#C4A582] flex-shrink-0 mt-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-graphite/80">Early-bird adgang til de bedste tider</span>
            </li>
            <li className="flex items-start gap-12">
              <svg className="w-5 h-5 text-[#C4A582] flex-shrink-0 mt-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-graphite/80">Invitationer til åbnings-events</span>
            </li>
            <li className="flex items-start gap-12">
              <svg className="w-5 h-5 text-[#C4A582] flex-shrink-0 mt-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-graphite/80">Introfordele (begrænset antal)</span>
            </li>
          </ul>
          <Button size="lg" asChild className="mt-8">
            <a href="#waitlist">
              Få plads på ventelisten
            </a>
          </Button>
        </div>
      </section>
      
      {/* Program Samples */}
      <section className="bg-warm-gray py-80">
        <div className="container-custom">
          <h2 className="text-center mb-24">Vælg dit format</h2>
          <p className="text-center text-graphite/70 mb-48 max-w-2xl mx-auto">
            Vi tilbyder forskellige formater, så du kan finde det der passer til dig
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-24 mb-40">
            <div className="bg-white p-24 rounded-lg border border-fog/30 hover:border-[#C4A582]/30 hover:shadow-subtle transition-all">
              <div className="inline-block bg-ice-blue/20 text-graphite text-xs font-medium px-12 py-6 rounded-full mb-16">
                Begynder
              </div>
              <h3 className="mb-12 text-lg">Nordic Flow</h3>
              <p className="text-graphite/70 text-sm">
                Rolige sekvenser med fokus på teknik og åndedræt
              </p>
            </div>
            <div className="bg-white p-24 rounded-lg border border-fog/30 hover:border-[#C4A582]/30 hover:shadow-subtle transition-all">
              <div className="inline-block bg-[#C4A582]/20 text-graphite text-xs font-medium px-12 py-6 rounded-full mb-16">
                Let øvet
              </div>
              <h3 className="mb-12 text-lg">Power Core</h3>
              <p className="text-graphite/70 text-sm">
                Stabilitet, styrke og holdning – byg en stærk kerne
              </p>
            </div>
            <div className="bg-white p-24 rounded-lg border border-fog/30 hover:border-[#C4A582]/30 hover:shadow-subtle transition-all">
              <div className="inline-block bg-ice-blue/20 text-graphite text-xs font-medium px-12 py-6 rounded-full mb-16">
                Alle niveauer
              </div>
              <h3 className="mb-12 text-lg">Stretch & Restore</h3>
              <p className="text-graphite/70 text-sm">
                Dybe stræk, mobilitet og åndedræt for genopretning
              </p>
            </div>
            <div className="bg-white p-24 rounded-lg border border-fog/30 hover:border-[#C4A582]/30 hover:shadow-subtle transition-all">
              <div className="inline-block bg-[#C4A582]/20 text-graphite text-xs font-medium px-12 py-6 rounded-full mb-16">
                Udfordrende
              </div>
              <h3 className="mb-12 text-lg">Sweat 30</h3>
              <p className="text-graphite/70 text-sm">
                Tempo og puls på 30 minutter – effektiv træning
              </p>
            </div>
          </div>
          <div className="text-center">
            <Button size="lg" asChild>
              <a href="#waitlist">
                Kom i gang
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Pricing Expectation Section */}
      <section className="bg-warm-gray py-80">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-24">Priser & Medlemskaber</h2>
          <p className="text-center text-graphite/70 mb-48 max-w-2xl mx-auto">
            Fleksible priser der passer til dit liv
          </p>
          
          <div className="grid md:grid-cols-2 gap-24 mb-48">
            <div className="bg-white p-32 rounded-lg border border-fog/30">
              <h3 className="text-xl font-medium mb-16 text-navy">Fleks Medlemskab</h3>
              <p className="text-3xl font-light mb-16">
                <span className="text-navy">599-799 kr</span>
                <span className="text-sm text-graphite/60">/måned</span>
              </p>
              <ul className="space-y-12 text-sm text-graphite/80 mb-24">
                <li className="flex items-start gap-8">
                  <span className="text-coral mt-2">✓</span>
                  <span>Book klasser når det passer dig</span>
                </li>
                <li className="flex items-start gap-8">
                  <span className="text-coral mt-2">✓</span>
                  <span>Aflys gratis op til 12 timer før</span>
                </li>
                <li className="flex items-start gap-8">
                  <span className="text-coral mt-2">✓</span>
                  <span>Adgang til alle niveauer</span>
                </li>
              </ul>
              <p className="text-xs text-graphite/60">
                Early-bird: <strong>50% rabat første måned</strong>
              </p>
            </div>

            <div className="bg-white p-32 rounded-lg border-2 border-coral/30 relative">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-coral text-white text-xs font-medium px-16 py-6 rounded-full">
                MEST POPULÆR
              </div>
              <h3 className="text-xl font-medium mb-16 text-navy">Unlimited</h3>
              <p className="text-3xl font-light mb-16">
                <span className="text-navy">999 kr</span>
                <span className="text-sm text-graphite/60">/måned</span>
              </p>
              <ul className="space-y-12 text-sm text-graphite/80 mb-24">
                <li className="flex items-start gap-8">
                  <span className="text-coral mt-2">✓</span>
                  <span>Ubegrænsede klasser</span>
                </li>
                <li className="flex items-start gap-8">
                  <span className="text-coral mt-2">✓</span>
                  <span>Prioritet-booking til populære tider</span>
                </li>
                <li className="flex items-start gap-8">
                  <span className="text-coral mt-2">✓</span>
                  <span>Gratis strømper & drikkeflaske</span>
                </li>
                <li className="flex items-start gap-8">
                  <span className="text-coral mt-2">✓</span>
                  <span>Aflys gratis op til 12 timer før</span>
                </li>
              </ul>
              <p className="text-xs text-graphite/60">
                Early-bird: <strong>50% rabat første måned + gratis introklasse</strong>
              </p>
            </div>
          </div>

          <div className="bg-navy/5 border border-navy/10 rounded-lg p-24 text-center">
            <p className="text-sm text-graphite/80">
              💡 <strong>Risk-free:</strong> Aflys gratis op til 12 timer før hver session. Ingen binding første måned.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container-custom py-80">
        <h2 className="text-center mb-24">Ofte stillede spørgsmål</h2>
        <p className="text-center text-graphite/70 mb-48 max-w-2xl mx-auto">
          Alt du behøver at vide om Nordic Pilates
        </p>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Er det begynder-venligt?</AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed">
                  Ja, absolut! Vi har specialdesignede Nordic Flow-klasser for begyndere med tydelig guidning i hvert trin. Du behøver ingen erfaring – vores introklasse (gratis for early-birds) lærer dig alt det grundlæggende. Maksimalt 8 personer per hold betyder, at der er fokus på dig.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Hvordan fungerer instruktionen?</AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed">
                  Hver klasse guides af professionelle instruktører vist på skærme i studiet – vi har betalt nogle af verdens bedste Pilates-eksperter. Derudover er der altid en certificeret studioguide til stede, der kan hjælpe med form, stillinger og spørgsmål. Det er det bedste fra begge verdener: ekspert-guidning kombineret med personlig støtte.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Hvad koster det præcist?</AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed mb-12">
                  Vi tilbyder to medlemskaber:
                </p>
                <ul className="space-y-8 ml-16">
                  <li><strong>Fleks (599-799 kr/md):</strong> Book klasser når det passer dig, med fleksible priser baseret på tidspunkt.</li>
                  <li><strong>Unlimited (999 kr/md):</strong> Ubegrænsede klasser + prioritet-booking til populære tider.</li>
                </ul>
                <p className="mt-12 text-sm text-coral font-medium">
                  Early-bird fordel: 50% rabat første måned + gratis introklasse (værdi 300 kr).
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Hvad skal jeg have med?</AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed">
                  Tætsiddende tøj (leggings/sports-BH) og skridsikre strømper. Det er vigtigt at du kan bevæge dig frit, og at strømperne giver godt greb på reformeren. Strømper kan købes i studiet (50 kr), hvis du ikke har nogle. Vi har omklædningsrum med låseskabe.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>Kan jeg aflyse eller ændre booking?</AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed">
                  Ja, helt gratis op til 12 timer før sessionen via vores app. Vi forstår, at livet sker. Hvis du aflyser mindre end 12 timer før (eller ikke møder op), trækkes klassen fra dit kontingent. Det er fair over for andre medlemmer på ventelisten.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger>Er det sikkert under graviditet eller postpartum?</AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed">
                  Pilates kan være fantastisk for både gravide og postpartum-genoptræning, <strong>men du skal altid tale med din læge eller jordemoder først</strong>. Vi har specialdesignede klasser (Stretch & Restore) der er gravid-venlige, og vores instruktører kan modificere øvelser. Vores studioguide vil bede om lægebekræftelse ved første besøg.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-64">
        <div className="container-custom">
          {/* Social & Links */}
          <div className="flex flex-wrap justify-center items-center gap-32 mb-32">
            <a 
              href="https://instagram.com/nordicpilatesdk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-8 hover:text-coral transition-colors"
              aria-label="Følg os på Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@nordicpilatesdk</span>
            </a>
            <span className="text-snow/30">•</span>
            <a href="/privacy" className="hover:text-coral transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-coral transition-colors">
              Vilkår
            </a>
            <a href="/contact" className="hover:text-coral transition-colors">
              Kontakt
            </a>
          </div>
          
          {/* Privacy Statement */}
          <div className="text-center text-sm text-snow/50 mb-24 max-w-xl mx-auto">
            Vi passer godt på dine data. Ingen spam – kun relevante opdateringer om Nordic Pilates.
          </div>
          
          {/* Copyright */}
          <div className="text-center text-sm text-snow/60">
            © {new Date().getFullYear()} Nordic Pilates. Alle rettigheder forbeholdes.
          </div>
        </div>
      </footer>
    </main>
  )
}
