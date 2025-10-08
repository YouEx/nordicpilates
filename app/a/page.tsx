'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import WaitlistQuizA from '@/components/WaitlistQuizA'
import { Clock, Heart, Sparkles, Instagram, User } from 'lucide-react'

// VARIANT A - Elegant Wellness Design
export default function VariantA() {
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
    <main className="min-h-screen bg-[#FEFBF0]">
      {/* Skip to main content link for keyboard navigation */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-16 focus:py-8 focus:bg-[#445D68] focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Variant A Label */}
      <div className="fixed top-4 left-4 z-[100] bg-[#445D68] text-white px-4 py-2 rounded-full text-xs font-light tracking-wide">
        Variant A
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center" aria-label="Hero section">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="Nordic Pilates studio atmosphere background video"
        >
          <source src="/bg-a.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#FEFBF0]/80 z-[1]"></div>

        <div className="relative z-10 text-center px-8 max-w-4xl">
          {/* Logo */}
          <div className="mb-12 flex justify-center animate-fadeIn" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <Image 
              src="/logo-a.png" 
              alt="Nordic Pilates" 
              width={400} 
              height={180} 
              className="object-contain"
              priority
            />
          </div>
          
          <p className="text-[#5D5D5D] text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.4s', opacity: 0 }}>
            Discover yoga-inspired classes, reformer Pilates, and functional movement for your journey. Opening soon in Copenhagen.
          </p>

          <button 
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-[#445D68] text-white rounded-full hover:bg-[#445D68]/90 hover:scale-105 transition-all text-sm tracking-wide font-light shadow-md hover:shadow-lg animate-fadeInUp min-h-[44px]"
            style={{ animationDelay: '0.6s', opacity: 0 }}
            aria-label="Join waitlist"
          >
            Start Your Journey
          </button>

          {/* Trusted badge */}
          <div className="mt-12 flex items-center justify-center gap-3 text-sm text-[#5D5D5D] animate-fadeIn" style={{ animationDelay: '0.8s', opacity: 0 }} aria-label={`Trusted by ${signupCount} early members`}>
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#445D68] border-2 border-[#FEFBF0]" role="img" aria-label="Member avatar"></div>
              <div className="w-8 h-8 rounded-full bg-[#8B7355] border-2 border-[#FEFBF0]" role="img" aria-label="Member avatar"></div>
              <div className="w-8 h-8 rounded-full bg-[#A89080] border-2 border-[#FEFBF0]" role="img" aria-label="Member avatar"></div>
            </div>
            <span className="font-light">Loved by {signupCount}+ early members</span>
          </div>
        </div>
      </section>

      {/* Holistic Approach Section */}
      <section id="main-content" className="py-32 px-8 bg-white" aria-labelledby="holistic-heading">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
              <img src="/1.png" alt="Holistic Approach" className="w-full h-full object-cover" />
            </div>

            {/* Right - Content */}
            <div>
              <h2 id="holistic-heading" className="font-serif text-4xl md:text-5xl text-[#3D3D3D] mb-6 tracking-tight">
                Holistic Approach
              </h2>
              <p className="text-[#5D5D5D] mb-12 text-lg font-light leading-relaxed">
                We believe in the power of Pilates to transform your physical, mental, and emotional health.
              </p>

              <div className="space-y-8">
                <div className="group hover:translate-x-2 transition-transform duration-300">
                  <h3 className="font-serif text-xl italic text-[#3D3D3D] mb-2">Mindful Movement</h3>
                  <p className="text-[#7D7D7D] font-light">
                    Improve flexibility, posture and strength through guided sequences.
                  </p>
                </div>
                <div className="group hover:translate-x-2 transition-transform duration-300">
                  <h3 className="font-serif text-xl italic text-[#3D3D3D] mb-2">Breath Awareness</h3>
                  <p className="text-[#7D7D7D] font-light">
                    Learn to regulate stress and improve focus with controlled breathing.
                  </p>
                </div>
                <div className="group hover:translate-x-2 transition-transform duration-300">
                  <h3 className="font-serif text-xl italic text-[#3D3D3D] mb-2">Community Support</h3>
                  <p className="text-[#7D7D7D] font-light">
                    Join a welcoming community that motivates and uplifts each other.
                  </p>
                </div>
              </div>

              <button 
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-12 px-8 py-3 bg-[#445D68] text-white rounded-full hover:bg-[#445D68]/90 hover:scale-105 transition-all text-sm tracking-wide font-light shadow-md hover:shadow-lg min-h-[44px]"
                aria-label="Join waitlist"
              >
                Get Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-32 px-8 bg-[#FEFBF0]" aria-labelledby="waitlist-heading">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 id="waitlist-heading" className="font-serif text-4xl md:text-5xl text-[#3D3D3D] mb-6 tracking-tight">
            Join the Waitlist
          </h2>
          <p className="text-[#5D5D5D] text-lg font-light leading-relaxed">
            Get early-bird access, introductory benefits, and be first to know when we open.
          </p>
        </div>

        <WaitlistQuizA />
      </section>

      {/* Meet Instructors Preview */}
      <section className="py-32 px-8 bg-white" aria-labelledby="instructors-heading">
        <div className="max-w-6xl mx-auto text-center">
          <h2 id="instructors-heading" className="font-serif text-4xl md:text-5xl text-[#3D3D3D] mb-6 tracking-tight">
            Meet Our Instructors
          </h2>
          <p className="text-[#5D5D5D] mb-16 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Our certified teachers bring years of experience to guide you with mindfulness, grace, and personalized care.
          </p>

          {/* Instructor Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <article className="group cursor-pointer">
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <img src="/1.png" alt="Maya Tanaka - Vinyasa Flow & Breathwork instructor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-serif text-xl text-[#3D3D3D] mb-1">Maya Tanaka</h3>
              <p className="text-[#7D7D7D] text-sm font-light">VINYASA FLOW & BREATHWORK</p>
            </article>
            <article className="group cursor-pointer">
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <img src="/2.png" alt="Sofia Jensen - Reformer Pilates & Core instructor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-serif text-xl text-[#3D3D3D] mb-1">Sofia Jensen</h3>
              <p className="text-[#7D7D7D] text-sm font-light">REFORMER PILATES & CORE</p>
            </article>
            <article className="group cursor-pointer">
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <img src="/3.png" alt="Emma Larsen - Gentle Yoga & Meditation instructor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-serif text-xl text-[#3D3D3D] mb-1">Emma Larsen</h3>
              <p className="text-[#7D7D7D] text-sm font-light">GENTLE YOGA & MEDITATION</p>
            </article>
          </div>

          {/* Qualities */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-[#7D7D7D] font-light">
            <span>★ Certified</span>
            <span>★ Personalized</span>
            <span>★ Experienced</span>
            <span>★ Holistic</span>
          </div>
        </div>
      </section>

      {/* Life-Changing CTA Section */}
      <section className="relative py-32 px-8 overflow-hidden" aria-label="Call to action">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[21/9] relative rounded-3xl overflow-hidden shadow-2xl group">
            <img src="/3.png" alt="Person practicing yoga in mountain landscape" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
              <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 tracking-tight">
                One Decision Can Change <br />Your <span className="inline-flex items-center gap-2"><User className="inline" size={32} aria-hidden="true" /></span> Life
              </h2>
              <p className="text-white/90 mb-8 text-lg font-light max-w-xl">
                Join thousands who have transformed their well-being. Try your first class free.
              </p>
              <button 
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-white text-[#445D68] rounded-full hover:bg-[#FEFBF0] hover:scale-105 transition-all text-sm tracking-wide font-medium shadow-lg hover:shadow-xl min-h-[44px]"
                aria-label="Start your journey - join waitlist"
              >
                Start Your Journey
              </button>
            </div>
          </div>

          {/* Bottom scroll text */}
          <div className="mt-16 text-center">
            <p className="text-[#5D5D5D] font-serif text-3xl italic">
              YOUR <span className="italic font-light">journey</span> // START YOUR <span className="italic font-light">journey</span>
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-8 bg-[#FEFBF0]" aria-labelledby="pricing-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="pricing-heading" className="font-serif text-4xl md:text-5xl text-[#3D3D3D] mb-6 tracking-tight">
            Simple Pricing
          </h2>
          <p className="text-[#5D5D5D] mb-16 text-lg font-light leading-relaxed">
            One transparent price — unlimited possibilities
          </p>

          <div className="max-w-md mx-auto bg-white rounded-3xl p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-8">
              <Sparkles size={32} className="mx-auto text-[#445D68] mb-4" aria-hidden="true" />
              <h3 className="font-serif text-2xl text-[#3D3D3D] mb-2">Unlimited</h3>
            </div>

            <div className="mb-8">
              <p className="text-5xl font-light text-[#3D3D3D] mb-2">
                239 kr
                <span className="text-lg text-[#7D7D7D]">/month</span>
              </p>
            </div>

            <ul className="space-y-4 text-left text-[#5D5D5D] mb-8 font-light">
              <li className="flex items-start gap-3">
                <span className="text-[#445D68] mt-1">✓</span>
                <span>Unlimited classes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#445D68] mt-1">✓</span>
                <span>Book anytime 24/7</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#445D68] mt-1">✓</span>
                <span>Priority booking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#445D68] mt-1">✓</span>
                <span>Free welcome kit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#445D68] mt-1">✓</span>
                <span>Cancel anytime</span>
              </li>
            </ul>

            <div className="bg-[#FEFBF0] rounded-xl p-4 text-sm text-[#5D5D5D] font-light">
              <strong className="text-[#445D68]">Early-bird benefit:</strong> 50% off for 2 months + free welcome kit (200kr value)
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#445D68] text-white py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image 
              src="/logo-a.png" 
              alt="Nordic Pilates" 
              width={250} 
              height={110} 
              className="object-contain opacity-90 brightness-0 invert"
            />
          </div>

          <div className="mb-8">
            <p className="font-serif text-2xl mb-4 tracking-wide">Get in touch with us</p>
            <a href="mailto:contact@nordicpilates.com" className="text-[#C4A582] hover:text-[#8B7355] transition-colors">
              contact@nordicpilates.com
            </a>
          </div>

          <div className="flex justify-center items-center gap-6 mb-8">
            <a 
              href="https://instagram.com/nordicpilatesdk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#C4A582] transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>

          <div className="text-sm text-[#A0A0A0] font-light">
            <p className="mb-2">We are a Danish company committed to protecting your data under EU regulations.</p>
            <p>© {new Date().getFullYear()} Nordic Pilates. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
