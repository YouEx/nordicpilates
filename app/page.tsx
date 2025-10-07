'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import HeroMedia from '@/components/HeroMedia'
import WaitlistQuiz from '@/components/WaitlistQuiz'
import SocialProof from '@/components/SocialProof'
import Logo from '@/components/Logo'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { MapPin, Calendar, Users, ChevronDown, CheckCircle, Clock, Shield, TrendingUp, User, UserCheck, Monitor, Sparkles, Instagram, Gift, Zap, Heart, Baby, HelpCircle, CreditCard, ShoppingBag, AlertCircle, Infinity } from 'lucide-react'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [signupCount, setSignupCount] = useState(0)
  const totalSpots = 100

  useEffect(() => {
    const handleScroll = () => {
      // Show header when scrolled past 80% of viewport height
      setIsScrolled(window.scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Fetch signup count from backend
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
    // Refresh count every 30 seconds
    const interval = setInterval(fetchSignupCount, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Sticky Header - appears on scroll */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 h-[100px] bg-white border-b border-fog/30 shadow-sm transition-transform duration-300 ${
          isScrolled ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container-custom h-full flex items-center justify-between">
          <div className="flex items-center">
            <Logo size="sm" />
          </div>
          <nav className="flex items-center gap-12">
            <span className="hidden md:inline text-sm text-graphite/60">
              <span className="font-semibold text-coral">{totalSpots - signupCount}</span> early bird pladser tilbage
            </span>
            <button 
              className="h-9 px-24 bg-navy text-white text-xs font-medium rounded-lg hover:bg-navy/90 transition-colors"
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Tilmeld venteliste
            </button>
          </nav>
        </div>
      </header>
      {/* Full-Screen Hero Splash */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Video/Image - Automatically detects and loads media */}
        <HeroMedia />
        
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black z-[1]"></div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full min-h-screen flex flex-col items-center justify-start px-24 md:px-48 text-center pt-80 md:pt-120">
          <div className="max-w-4xl">
            {/* Logo centered */}
            <div className="animate-fadeIn flex justify-center" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <Image 
                src="/nordicwhite.png" 
                alt="Nordic Pilates" 
                width={400} 
                height={266} 
                priority 
                className="object-contain"
              />
            </div>
            
            {/* Main Headline - Clear outcome */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-light mb-32 leading-tight animate-fadeInUp" style={{ animationDelay: '0.3s', opacity: 0 }}>
              Åbner snart i København<br/>
              <span className="text-white/90 block mt-16 font-openSans" style={{ marginBottom: '280px', fontSize: '2rem' }}>
                Vi tilbyder drop-in 24/7 reformer pilates fra 39kr/t
              </span>
            </h1>
            
            {/* Single Primary CTA */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.5s', opacity: 0 }}>
              <Button size="xl" asChild className="bg-black text-coral border-2 border-coral hover:bg-black/90 shadow-lg hover:shadow-xl font-sans">
                <a href="#waitlist" aria-label="Tilmeld venteliste">
                  Tilmeld venteliste
                </a>
              </Button>
              <p className="text-white/70 text-sm mt-16">
                50% rabat i to måneder + gratis strømper og drikkeflaske
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Waitlist Form Section */}
      <section id="waitlist" className="bg-black py-80">
        <div className="container-custom max-w-3xl">
          <h2 className="text-center mb-24 text-white">Tilmeld ventelisten</h2>
          <p className="text-center text-white/70 mb-32 max-w-2xl mx-auto">
            Få early-bird plads, introfordele og først besked om åbning.
          </p>

          <WaitlistQuiz />
        </div>
      </section>

      {/* Why Nordic Pilates Section */}
      <section id="about" className="container-custom py-80">
        <h2 className="text-center mb-24">Hvorfor Nordic Pilates</h2>
        <p className="text-center text-graphite/70 mb-48 max-w-2xl mx-auto">
          Et nyt koncept der gør reformer Pilates mere tilgængeligt for alle
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-32 mb-64">
          <div className="text-center">
            <div className="mb-20">
              <CreditCard size={48} className="mx-auto text-[#C4A582]" />
            </div>
            <h3 className="mb-12">Billigere Pilates</h3>
            <p className="text-graphite/70 mb-16">
              Fra 39kr/time med drop-in – ingen dyre abonnementer eller medlemskaber
            </p>
            <p className="text-sm text-graphite/60 italic">
              “Fantastisk for begyndere! Nordic Flow-klasserne er perfekte for at lære det grundlæggende.”
            </p>
          </div>
          <div className="text-center">
            <div className="mb-20">
              <Clock size={48} className="mx-auto text-[#C4A582]" />
            </div>
            <h3 className="mb-12">24/7 Fleksibilitet</h3>
            <p className="text-graphite/70 mb-16">
              Træn når det passer dig – morgen, middag, aften eller nat
            </p>
            <p className="text-sm text-graphite/60 italic">
              “Elsker at jeg kan træne kl. 7 om morgenen før arbejde. Appen gør det nemt at booke.”
            </p>
          </div>
          <div className="text-center">
            <div className="mb-20">
              <Monitor size={48} className="mx-auto text-[#C4A582]" />
            </div>
            <h3 className="mb-12">Ekspert instruktører</h3>
            <p className="text-graphite/70 mb-16">
              On-screen vejledning fra certificerede Pilates instruktører – ingen studio-guide
            </p>
            <p className="text-sm text-graphite/60 italic">
              “Bedste intro til reformer Pilates jeg har prøvet. Instruktørerne er tydelige og hjælpsomme.”
            </p>
          </div>
          <div className="text-center">
            <div className="mb-20">
              <Sparkles size={48} className="mx-auto text-[#C4A582]" />
            </div>
            <h3 className="mb-12">Nem app</h3>
            <p className="text-graphite/70 mb-16">
              Book dine sessions og hold styr på din udvikling direkte fra din mobil
            </p>
            <p className="text-sm text-graphite/60 italic">
              “Appen gør det super nemt at se min fremgang og booke nye sessions.”
            </p>
          </div>
        </div>


      </section>
      
      {/* Program Samples */}
      <section className="bg-warm-gray py-80">
        <div className="container-custom">
          <h2 className="text-center mb-24">Vælg dit format</h2>
          <p className="text-center text-graphite/70 mb-48 max-w-2xl mx-auto">
            Vi tilbyder forskellige formater, så du kan finde det der passer til dig
          </p>
          <div className="grid md:grid-cols-3 gap-32 mb-40">
            <div className="bg-white rounded-lg border border-fog/30 hover:border-[#C4A582]/30 hover:shadow-subtle transition-all overflow-hidden">
              <div className="aspect-[4/3] relative">
                <img src="/1.png" alt="Nordic Flow" className="w-full h-full object-cover" />
              </div>
              <div className="p-24">
                <div className="inline-block bg-ice-blue/20 text-graphite text-xs font-medium px-12 py-6 rounded-full mb-16">
                  🔥
                </div>
                <h3 className="mb-12 text-lg">Nordic Flow</h3>
                <p className="text-graphite/70 text-sm">
                  Rolige sekvenser med fokus på teknik og åndedræt
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-fog/30 hover:border-[#C4A582]/30 hover:shadow-subtle transition-all overflow-hidden">
              <div className="aspect-[4/3] relative">
                <img src="/2.png" alt="Power Core" className="w-full h-full object-cover" />
              </div>
              <div className="p-24">
                <div className="inline-block bg-[#C4A582]/20 text-graphite text-xs font-medium px-12 py-6 rounded-full mb-16">
                  🔥🔥
                </div>
                <h3 className="mb-12 text-lg">Power Core</h3>
                <p className="text-graphite/70 text-sm">
                  Stabilitet, styrke og holdning – byg en stærk kerne
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-fog/30 hover:border-[#C4A582]/30 hover:shadow-subtle transition-all overflow-hidden">
              <div className="aspect-[4/3] relative">
                <img src="/3.png" alt="Sweat 30" className="w-full h-full object-cover" />
              </div>
              <div className="p-24">
                <div className="inline-block bg-[#C4A582]/20 text-graphite text-xs font-medium px-12 py-6 rounded-full mb-16">
                  🔥🔥🔥
                </div>
                <h3 className="mb-12 text-lg">Sweat 30</h3>
                <p className="text-graphite/70 text-sm">
                  Tempo og puls på 30 minutter – effektiv træning
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button size="lg" asChild>
              <a href="#waitlist">
                Tilmeld venteliste
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Pricing Expectation Section */}
      <section className="bg-warm-gray py-80">
        <div className="container-custom max-w-3xl">
          <h2 className="text-center mb-24">Unlimited Medlemskab</h2>
          <p className="text-center text-graphite/70 mb-48 max-w-2xl mx-auto">
            Én simpel pris - ubegrænsede muligheder
          </p>
          
          <div className="max-w-xl mx-auto mb-48">
            <div className="bg-white p-40 rounded-lg border-2 border-coral/30 relative">
              <h3 className="text-2xl font-medium mb-16 text-navy flex items-center gap-8 justify-center">
                <Infinity size={48} className="text-coral" />
                Unlimited
              </h3>
              <p className="text-5xl font-light mb-32 text-center">
                <span className="text-navy">239 kr</span>
                <span className="text-lg text-graphite/60">/måned</span>
              </p>
              <ul className="space-y-16 text-base text-graphite/80 mb-32">
                <li className="flex items-start gap-12">
                  <Infinity size={48} className="text-coral mt-1 flex-shrink-0" />
                  <span>Ubegrænsede klasser</span>
                </li>
                <li className="flex items-start gap-12">
                  <Clock size={48} className="text-coral mt-1 flex-shrink-0" />
                  <span>Book når det passer dig</span>
                </li>
                <li className="flex items-start gap-12">
                  <Clock size={48} className="text-coral mt-1 flex-shrink-0" />
                  <span>Prioritet-booking til populære tider</span>
                </li>
                <li className="flex items-start gap-12">
                  <Gift size={48} className="text-coral mt-1 flex-shrink-0" />
                  <span>Gratis strømper & drikkeflaske</span>
                </li>
                <li className="flex items-start gap-12">
                  <Shield size={48} className="text-coral mt-1 flex-shrink-0" />
                  <span>Aflys gratis op til 2 timer før</span>
                </li>
                <li className="flex items-start gap-12">
                  <TrendingUp size={48} className="text-coral mt-1 flex-shrink-0" />
                  <span>Adgang til alle niveauer</span>
                </li>
              </ul>
              <p className="text-sm text-center text-graphite/60 bg-coral/5 p-16 rounded-lg">
                <strong>Early-bird fordel:</strong> 50% rabat i to måneder + gratis strømper og drikkeflaske (værdi 200kr)
              </p>
            </div>
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
              <AccordionTrigger>
                <div className="flex items-center gap-12">
                  <Heart size={48} className="text-coral flex-shrink-0" />
                  <span>Er det begynder-venligt?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed">
                  Ja, absolut! Vi har specialdesignede Nordic Flow-klasser for begyndere med tydelig guidning i hvert trin. Du behøver ingen erfaring. Maksimalt 8 personer per hold betyder, at der er fokus på dig.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-12">
                  <Monitor size={48} className="text-coral flex-shrink-0" />
                  <span>Hvordan fungerer instruktionen?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed">
                  Hver klasse guides af professionelle instruktører vist på skærme i studiet – vi har betalt nogle af verdens bedste Pilates-eksperter. Derudover er der altid en certificeret studioguide til stede, der kan hjælpe med form, stillinger og spørgsmål. Det er det bedste fra begge verdener: ekspert-guidning kombineret med personlig støtte.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-12">
                  <CreditCard size={48} className="text-coral flex-shrink-0" />
                  <span>Hvad koster det præcist?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed mb-12">
                  Vi tilbyder ét simpelt Unlimited medlemskab til <strong>239 kr/måned</strong> med ubegrænsede klasser, prioritet-booking, og gratis strømper & drikkeflaske.
                </p>
                <p className="mt-12 text-sm text-coral font-medium">
                  Early-bird fordel: 50% rabat i to måneder + gratis strømper og drikkeflaske (værdi 200 kr).
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center gap-12">
                  <ShoppingBag size={48} className="text-coral flex-shrink-0" />
                  <span>Hvad skal jeg have med?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed">
                  Tætsiddende tøj (leggings/sports-BH) og skridsikre strømper. Det er vigtigt at du kan bevæge dig frit, og at strømperne giver godt greb på reformeren. Strømper kan købes i studiet (50 kr), hvis du ikke har nogle. Vi har omklædningsrum med låseskabe.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>
                <div className="flex items-center gap-12">
                  <AlertCircle size={48} className="text-coral flex-shrink-0" />
                  <span>Kan jeg aflyse eller ændre booking?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed">
                  Ja, helt gratis op til 2 timer før sessionen via vores app. Vi forstår, at livet sker. Hvis du aflyser mindre end 2 timer før (eller ikke møder op), trækkes klassen fra dit kontingent. Det er fair over for andre medlemmer på ventelisten.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger>
                <div className="flex items-center gap-12">
                  <Baby size={48} className="text-coral flex-shrink-0" />
                  <span>Er det sikkert under graviditet eller postpartum?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed">
                  Pilates kan være fantastisk for både gravide og postpartum-genoptræning, <strong>men du skal altid tale med din læge eller jordemoder først</strong>. Vores instruktører kan modificere øvelser til dit niveau. Vores studioguide vil bede om lægebekræftelse ved første besøg.
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
              <Instagram size={48} />
              <span>@nordicpilatesdk</span>
            </a>
          </div>
          
          {/* Privacy Statement */}
          <div className="text-center text-sm text-snow/50 mb-24 max-w-xl mx-auto">
            Vi er en dansk virksomhed, og vi passer godt på dine data i henhold til EU lovgivning.
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
