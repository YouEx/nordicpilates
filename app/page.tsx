'use client'

import HeroMedia from '@/components/HeroMedia'
import WaitlistForm from '@/components/WaitlistForm'
import SocialProof from '@/components/SocialProof'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Full-Screen Hero Splash */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Video/Image - Automatically detects and loads media */}
        <HeroMedia />
        
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-[1]"></div>

        {/* Logo in top-left corner - consistent square design */}
        <div className="absolute top-24 left-24 md:top-32 md:left-32 lg:top-40 lg:left-40 z-20 animate-fadeIn" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <div className="border-[3px] border-[#C4A582] aspect-square flex items-center justify-center p-16 md:p-20 lg:p-24 w-[140px] md:w-[180px] lg:w-[220px]">
            <h1 className="text-[#C4A582] text-center">
              <span className="block text-2xl md:text-3xl lg:text-4xl font-light italic tracking-wide leading-none">nordic</span>
              <span className="block text-base md:text-xl lg:text-2xl uppercase tracking-[0.3em] font-light mt-2 md:mt-3 leading-none">PILATES</span>
            </h1>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full min-h-screen flex flex-col items-center justify-center px-24 md:px-48 text-center">
          <div className="max-w-4xl">
            {/* Tagline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-48 leading-relaxed max-w-2xl mx-auto animate-fadeInUp font-light" style={{ animationDelay: '0.4s', opacity: 0 }}>
              Nordic Pilates gør reformer-træning enkel, fleksibel og overkommelig. Klasser kører fra tidlig morgen til sen aften – så du kan prioritere dig selv, uden at omrokere hele dagen.
            </p>

            {/* Social Proof & Urgency */}
            <div className="mb-48 flex flex-col items-center animate-fadeInUp" style={{ animationDelay: '0.5s', opacity: 0 }}>
              <SocialProof />
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-16 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.6s', opacity: 0 }}>
              <Button size="xl" asChild>
                <a href="#waitlist" aria-label="Tilmeld dig ventelisten for early bird fordele">
                  Tilmeld ventelisten →
                </a>
              </Button>
              <Button 
                size="xl"
                variant="outline" 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white/80 text-white hover:bg-white/10 hover:border-white hover:text-white"
                aria-label="Scroll til mere information"
              >
                Læs mere
              </Button>
            </div>
            
            {/* Trust Micro-Badges */}
            <div className="flex flex-wrap justify-center items-center gap-x-32 gap-y-12 mt-32 text-white/80 text-sm animate-fadeInUp" style={{ animationDelay: '0.7s', opacity: 0 }}>
              <div className="flex items-center gap-8">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Åbner snart i København</span>
              </div>
              <div className="flex items-center gap-8">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span>Små hold • Begynder-venligt</span>
              </div>
              <div className="flex items-center gap-8">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span>Fleksibel booking i appen</span>
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
      <section id="waitlist" className="bg-porcelain py-96">
        <div className="container-custom max-w-2xl">
          <h2 className="text-center mb-16">Tilmeld ventelisten</h2>
          <p className="text-center text-graphite/70 mb-24 max-w-xl mx-auto">
            Få early-bird plads, introfordele og først besked om åbning.
          </p>
          
          {/* Early Bird Benefits Banner */}
          <div className="bg-gradient-to-br from-ice-blue/20 to-[#C4A582]/10 border border-[#C4A582]/20 rounded-lg p-32 mb-48">
            <div className="flex items-start gap-16 mb-24">
              <span className="text-4xl">✨</span>
              <div className="flex-1">
                <h3 className="text-graphite font-semibold mb-16 text-xl">Early Bird Fordele</h3>
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

          <WaitlistForm />
        </div>
      </section>

      {/* Why Nordic Pilates Section */}
      <section id="about" className="container-custom py-96 md:py-96">
        <h2 className="text-center mb-16">Hvorfor Nordic Pilates</h2>
        <p className="text-center text-graphite/70 mb-64 max-w-2xl mx-auto">
          Opdag reformer Pilates i det skandinaviske design vi elsker
        </p>
        <div className="grid md:grid-cols-3 gap-48 mb-96">
          <div className="text-center">
            <div className="mb-24">
              <svg className="w-16 h-16 mx-auto text-[#C4A582]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mb-16">Fleksible tider</h3>
            <p className="text-graphite/70">
              Klasser kører løbende hele dagen – fra tidlig morgen til sen aften
            </p>
          </div>
          <div className="text-center">
            <div className="mb-24">
              <svg className="w-16 h-16 mx-auto text-[#C4A582]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="mb-16">Guidet & trygt</h3>
            <p className="text-graphite/70">
              Tydelig on-screen instruktion fra eksperter + hjælpsom studioguide
            </p>
          </div>
          <div className="text-center">
            <div className="mb-24">
              <svg className="w-16 h-16 mx-auto text-[#C4A582]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="mb-16">For alle niveauer</h3>
            <p className="text-graphite/70">
              Begynder, let øvet og udfordrende formater – vælg det der passer dig
            </p>
          </div>
        </div>
        
        {/* Early Bird Incentive */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-ice-blue/10 to-[#C4A582]/5 border border-[#C4A582]/20 rounded-lg p-48 text-center">
          <h3 className="mb-24 text-2xl">Kom med fra start og få:</h3>
          <ul className="space-y-16 text-left max-w-xl mx-auto mb-32">
            <li className="flex items-start gap-12">
              <svg className="w-6 h-6 text-[#C4A582] flex-shrink-0 mt-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-graphite/80">Early-bird adgang til de bedste tider</span>
            </li>
            <li className="flex items-start gap-12">
              <svg className="w-6 h-6 text-[#C4A582] flex-shrink-0 mt-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-graphite/80">Invitationer til åbnings-events</span>
            </li>
            <li className="flex items-start gap-12">
              <svg className="w-6 h-6 text-[#C4A582] flex-shrink-0 mt-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-graphite/80">Introfordele (begrænset antal)</span>
            </li>
          </ul>
          <p className="text-sm text-graphite/60 mb-32">
            Pladserne fordeles efter ventelisten. Tilmeld dig nu →
          </p>
          <Button size="lg" asChild>
            <a href="#waitlist">
              Få plads på ventelisten →
            </a>
          </Button>
        </div>
      </section>
      
      {/* Program Samples */}
      <section className="bg-porcelain py-96">
        <div className="container-custom">
          <h2 className="text-center mb-16">Vælg dit format</h2>
          <p className="text-center text-graphite/70 mb-64 max-w-2xl mx-auto">
            Vi tilbyder forskellige formater, så du kan finde det der passer til dig
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-32 mb-48">
            <div className="bg-white p-32 rounded-lg border border-fog/30 hover:border-[#C4A582]/30 hover:shadow-subtle transition-all">
              <div className="inline-block bg-ice-blue/20 text-graphite text-xs font-medium px-12 py-6 rounded-full mb-16">
                Begynder
              </div>
              <h3 className="mb-12 text-lg">Nordic Flow</h3>
              <p className="text-graphite/70 text-sm">
                Rolige sekvenser med fokus på teknik og åndedræt
              </p>
            </div>
            <div className="bg-white p-32 rounded-lg border border-fog/30 hover:border-[#C4A582]/30 hover:shadow-subtle transition-all">
              <div className="inline-block bg-[#C4A582]/20 text-graphite text-xs font-medium px-12 py-6 rounded-full mb-16">
                Let øvet
              </div>
              <h3 className="mb-12 text-lg">Power Core</h3>
              <p className="text-graphite/70 text-sm">
                Stabilitet, styrke og holdning – byg en stærk kerne
              </p>
            </div>
            <div className="bg-white p-32 rounded-lg border border-fog/30 hover:border-[#C4A582]/30 hover:shadow-subtle transition-all">
              <div className="inline-block bg-ice-blue/20 text-graphite text-xs font-medium px-12 py-6 rounded-full mb-16">
                Alle niveauer
              </div>
              <h3 className="mb-12 text-lg">Stretch & Restore</h3>
              <p className="text-graphite/70 text-sm">
                Dybe stræk, mobilitet og åndedræt for genopretning
              </p>
            </div>
            <div className="bg-white p-32 rounded-lg border border-fog/30 hover:border-[#C4A582]/30 hover:shadow-subtle transition-all">
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
            <Button asChild>
              <a href="#waitlist">
                Få plads på ventelisten →
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="container-custom py-96">
        <h2 className="text-center mb-16">Ofte stillede spørgsmål</h2>
        <p className="text-center text-graphite/70 mb-64 max-w-2xl mx-auto">
          Alt du behøver at vide om Nordic Pilates
        </p>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Er det begynder-venligt?</AccordionTrigger>
              <AccordionContent>
                Ja. Vi har introhold og tydelig guidning i alle klasser. Du behøver ingen erfaring for at komme i gang.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Er der instruktør?</AccordionTrigger>
              <AccordionContent>
                Vi har betalt nogle af verdens dygtigste og mest anerkendte pilates-instruktører for at lave guidede sessions, som vises på alle skærmene i rummet. Derudover er der altid en hjælpsom studioguide til stede.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Hvad koster det?</AccordionTrigger>
              <AccordionContent>
                Fra 30kr til 60kr i timen, alt efter tid på dagen. Vi tilbyder fleksible priser, så du kan træne når det passer dig.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Hvad skal jeg have med?</AccordionTrigger>
              <AccordionContent>
                Tætsiddende tøj og skridsikre strømper. Strømperne kan købes i studiet, hvis du ikke har nogle.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>Kan jeg aflyse?</AccordionTrigger>
              <AccordionContent>
                Ja, det er gratis at aflyse via app'en op til en time før hver session. Vi forstår, at livet sker.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger>Er det sikkert under graviditet?</AccordionTrigger>
              <AccordionContent>
                Mange har glæde af skånsom pilates, men tal altid med din læge eller jordemoder først, og vælg vores gravid-venlige hold.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-graphite text-snow py-48">
        <div className="container-custom">
          {/* Social & Links */}
          <div className="flex flex-wrap justify-center items-center gap-32 mb-32">
            <a 
              href="https://instagram.com/nordicpilatesdk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-8 hover:text-ice-blue transition-colors"
              aria-label="Følg os på Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@nordicpilatesdk</span>
            </a>
            <span className="text-snow/30">•</span>
            <a href="/privacy" className="hover:text-ice-blue transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-ice-blue transition-colors">
              Vilkår
            </a>
            <a href="/contact" className="hover:text-ice-blue transition-colors">
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
