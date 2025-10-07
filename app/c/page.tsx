'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import WaitlistQuiz from '@/components/WaitlistQuiz'
import { Calendar, ArrowRight, Instagram, MapPin } from 'lucide-react'

// VARIANT C - Modern Studio Design
// Palette: Teal #1A7A7A, Gold #C9A961, Light Gray #F5F5F5
export default function VariantC() {
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
    <main className="min-h-screen bg-white">
      {/* Skip Navigation */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-16 focus:py-8 focus:bg-[#1A7A7A] focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Variant C Label */}
      <div className="fixed top-4 left-4 z-[100] bg-[#1A7A7A] text-white px-4 py-2 rounded-full text-xs font-light tracking-wide">
        Variant C
      </div>

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <Image 
            src="/logo-c.png" 
            alt="Studio Logo" 
            width={120} 
            height={40} 
            className="object-contain"
            priority
          />
          
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#about" className="hover:text-[#1A7A7A] transition-colors">About Us</a>
            <a href="#course" className="hover:text-[#1A7A7A] transition-colors">Course</a>
            <a href="#testimonial" className="hover:text-[#1A7A7A] transition-colors">Testimonial</a>
            <a href="#contact" className="hover:text-[#1A7A7A] transition-colors">Contact</a>
          </div>

          <button 
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2.5 bg-[#1A7A7A] text-white rounded hover:bg-[#1A7A7A]/90 hover:scale-105 transition-all text-sm font-medium min-h-[44px]"
            aria-label="Contact us"
          >
            Contact Us
          </button>
        </div>
      </nav>

      {/* Hero Section - Split Screen */}
      <section className="relative min-h-screen w-full pt-20" aria-label="Hero section">
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-5rem)]">
          {/* Left - Content */}
          <div id="main-content" className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 bg-white">
            <div className="max-w-xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-800 mb-6 leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s', opacity: 0 }}>
                Change happens
                <br />
                <span className="text-[#1A7A7A] font-normal">through movement</span>
                <br />
                <span className="text-gray-600">and</span> <span className="text-[#1A7A7A] font-normal">movement heals</span>
              </h1>
              
              <p className="text-[#C9A961] text-lg mb-2 font-medium animate-fadeIn" style={{ animationDelay: '0.4s', opacity: 0 }}>
                Nordic Pilates Studio trainer
              </p>
              
              <p className="text-gray-500 mb-8 max-w-md leading-relaxed animate-fadeIn" style={{ animationDelay: '0.5s', opacity: 0 }}>
                Discover transformative Pilates in the heart of Copenhagen. Expert guidance, modern equipment, and a welcoming community.
              </p>

              <button 
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A961] text-white rounded hover:bg-[#C9A961]/90 hover:scale-105 transition-all shadow-md hover:shadow-lg min-h-[44px] animate-fadeInUp"
                style={{ animationDelay: '0.6s', opacity: 0 }}
                aria-label="Schedule now"
              >
                <Calendar size={20} />
                Schedule Now
              </button>
            </div>
          </div>

          {/* Right - Video */}
          <div className="relative h-[50vh] lg:h-auto bg-gray-100">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              aria-label="Pilates studio training video"
            >
              <source src="/vid-c.mp4" type="video/mp4" />
            </video>
            {/* Grid overlay effect */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(to right, transparent 0%, transparent 49.5%, rgba(0,0,0,0.1) 49.5%, rgba(0,0,0,0.1) 50.5%, transparent 50.5%, transparent 100%),
                                  linear-gradient(to bottom, transparent 0%, transparent 49.5%, rgba(0,0,0,0.1) 49.5%, rgba(0,0,0,0.1) 50.5%, transparent 50.5%, transparent 100%)`,
                backgroundSize: '33.333% 33.333%'
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-24 px-8 bg-gray-50" aria-label="Features">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 1 */}
            <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="aspect-[4/3] relative overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                >
                  <source src="/vid-c.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-4 left-4 bg-[#C9A961] text-white w-12 h-12 rounded-full flex items-center justify-center" role="img" aria-label="Instagram">
                  <Instagram size={20} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Expert Instruction</h3>
                <p className="text-gray-500 text-sm">Certified trainers guide every session</p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/1.png" 
                  alt="Pilates training session" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-[#C9A961] text-white w-12 h-12 rounded-full flex items-center justify-center" role="img" aria-label="Location">
                  <MapPin size={20} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Central Copenhagen</h3>
                <p className="text-gray-500 text-sm">Conveniently located in the city center</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Begin Journey Section */}
      <section className="py-24 px-8 bg-white" aria-labelledby="journey-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Video */}
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg group">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              >
                <source src="/vid-c.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Right - Content */}
            <div>
              <h2 id="journey-heading" className="text-4xl md:text-5xl font-light text-gray-800 mb-6 leading-tight">
                Begin Your Pilates
                <br />
                <span className="text-[#1A7A7A]">Journey with Us Today!</span>
              </h2>
              
              <p className="text-[#C9A961] text-xl font-medium mb-4">
                {signupCount}+ early members
              </p>
              
              <p className="text-gray-500 mb-8 leading-relaxed max-w-lg">
                Transform your body and mind through mindful movement. Our expert instructors and modern studio create the perfect environment for your Pilates journey.
              </p>

              <button 
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A961] text-white rounded hover:bg-[#C9A961]/90 hover:scale-105 transition-all shadow-md hover:shadow-lg min-h-[44px]"
                aria-label="See more about our journey"
              >
                See more
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24 px-8 bg-gray-50" aria-labelledby="waitlist-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="waitlist-heading" className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Join the <span className="text-[#1A7A7A]">Waitlist</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Be the first to know when we open in Copenhagen
            </p>
          </div>

          <WaitlistQuiz />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A7A7A] text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Logo & Tagline */}
            <div>
              <Image 
                src="/logo-c.png" 
                alt="Studio Logo" 
                width={150} 
                height={50} 
                className="object-contain mb-4 brightness-0 invert"
              />
              <p className="text-white/70 text-sm leading-relaxed">
                Change happens through movement and movement heals.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4 font-medium">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#about" className="block text-white/70 hover:text-white transition-colors">About Us</a>
                <a href="#course" className="block text-white/70 hover:text-white transition-colors">Course</a>
                <a href="#testimonial" className="block text-white/70 hover:text-white transition-colors">Testimonial</a>
                <a href="#contact" className="block text-white/70 hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4 font-medium">Connect</h4>
              <div className="space-y-3">
                <a 
                  href="https://instagram.com/nordicpilatesdk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Instagram size={16} />
                  <span>@nordicpilatesdk</span>
                </a>
                <a 
                  href="mailto:hello@nordicpilates.com" 
                  className="text-white/70 hover:text-white transition-colors text-sm block"
                >
                  hello@nordicpilates.com
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-xs">
            <p>© {new Date().getFullYear()} Nordic Pilates. Copenhagen, Denmark.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
