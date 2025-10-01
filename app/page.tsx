'use client'

import HeroMedia from '@/components/HeroMedia'
import WaitlistForm from '@/components/WaitlistForm'

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
              Experience mindful movement in our exclusive Nordic-inspired studio
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-16 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.6s', opacity: 0 }}>
              <a 
                href="#waitlist" 
                className="bg-snow text-graphite px-40 py-20 rounded-button font-medium text-lg hover:bg-white hover:shadow-subtle hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-graphite"
                aria-label="Join the waitlist"
              >
                Join Waitlist
              </a>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-40 py-20 border-2 border-white/80 text-white rounded-button font-medium text-lg hover:bg-white/10 hover:border-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-graphite"
              >
                Learn More
              </button>
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
          <h2 className="text-center mb-16">Bliv en af de første</h2>
          <p className="text-center text-graphite/70 mb-48 max-w-xl mx-auto">
            Åbner snart i København. Skriv dig på ventelisten for at modtage eksklusiv adgang.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* Why Nordic Pilates Section */}
      <section id="about" className="container-custom py-96 md:py-96">
        <h2 className="text-center mb-16">Hvorfor Nordic Pilates</h2>
        <p className="text-center text-graphite/70 mb-64 max-w-2xl mx-auto">
          Opdag reformer Pilates i det skandinaviske design vi elsker
        </p>
        <div className="grid md:grid-cols-3 gap-48">
          <div className="text-center">
            <div className="mb-24">
              <div className="w-16 h-16 bg-ice-blue/30 rounded-full mx-auto"></div>
            </div>
            <h3 className="mb-16">Elegant skandinavisk ro</h3>
            <p className="text-graphite/70">
              Raffinerede rum designet til at skabe balance og fokus
            </p>
          </div>
          <div className="text-center">
            <div className="mb-24">
              <div className="w-16 h-16 bg-ice-blue/30 rounded-full mx-auto"></div>
            </div>
            <h3 className="mb-16">Smarte, konsistente sessioner</h3>
            <p className="text-graphite/70">
              Ekspertledet træning der passer til din hverdag
            </p>
          </div>
          <div className="text-center">
            <div className="mb-24">
              <div className="w-16 h-16 bg-ice-blue/30 rounded-full mx-auto"></div>
            </div>
            <h3 className="mb-16">Designet til hverdagen</h3>
            <p className="text-graphite/70">
              Ubesværet fremgang med hver session
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-graphite text-snow py-48">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-32 mb-32">
            <a href="/privacy" className="hover:text-ice-blue transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-ice-blue transition-colors">
              Vilkår
            </a>
            <a href="/contact" className="hover:text-ice-blue transition-colors">
              Kontakt
            </a>
            <a 
              href="https://instagram.com/nordicpilates" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-ice-blue transition-colors"
            >
              Instagram
            </a>
          </div>
          <div className="text-center text-sm text-snow/60">
            © {new Date().getFullYear()} Nordic Pilates. Alle rettigheder forbeholdes.
          </div>
        </div>
      </footer>
    </main>
  )
}
