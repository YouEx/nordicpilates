'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import HeroMedia from '@/components/HeroMedia'
import WaitlistQuiz from '@/components/WaitlistQuiz'
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
    <main className="min-h-screen bg-[#F5F1EB]">
      {/* Variant A Label */}
      <div className="fixed top-4 left-4 z-[100] bg-[#8B7355] text-white px-4 py-2 rounded-full text-xs font-light tracking-wide">
        Variant A
      </div>

      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#F5F1EB]/95 backdrop-blur-sm py-6">
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center">
            <Image 
              src="/nordic.png" 
              alt="Nordic Pilates" 
              width={180} 
              height={80} 
              className="object-contain"
            />
          </div>
          <button 
            className="px-6 py-2 bg-[#3D3D3D] text-[#F5F1EB] text-sm rounded-full hover:bg-[#2D2D2D] transition-colors font-light tracking-wide"
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Waitlist
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
        <HeroMedia />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#F5F1EB]/80 z-[1]"></div>

        <div className="relative z-10 text-center px-8 max-w-4xl">
          {/* Logo */}
          <div className="mb-12 flex justify-center">
            <Image 
              src="/nordic.png" 
              alt="Nordic Pilates" 
              width={400} 
              height={180} 
              className="object-contain"
            />
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#3D3D3D] mb-8 leading-[1.1] tracking-tight">
            BALANCE <span className="italic font-light">// Calm //</span> RECONNECT
          </h1>
          
          <p className="text-[#5D5D5D] text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Discover yoga-inspired classes, reformer Pilates, and functional movement for your journey. Opening soon in Copenhagen.
          </p>

          <button 
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-[#3D3D3D] text-[#F5F1EB] rounded-full hover:bg-[#2D2D2D] transition-all text-sm tracking-wide font-light"
          >
            Start Your Journey
          </button>

          {/* Trusted badge */}
          <div className="mt-12 flex items-center justify-center gap-3 text-sm text-[#5D5D5D]">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#C4A582] border-2 border-[#F5F1EB]"></div>
              <div className="w-8 h-8 rounded-full bg-[#8B7355] border-2 border-[#F5F1EB]"></div>
              <div className="w-8 h-8 rounded-full bg-[#A89080] border-2 border-[#F5F1EB]"></div>
            </div>
            <span className="font-light">Loved by {signupCount}+ early members</span>
          </div>
        </div>
      </section>

      {/* Holistic Approach Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
              <img src="/1.png" alt="Holistic Approach" className="w-full h-full object-cover" />
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-[#3D3D3D] mb-6 tracking-tight">
                Holistic Approach
              </h2>
              <p className="text-[#5D5D5D] mb-12 text-lg font-light leading-relaxed">
                We believe in the power of Pilates to transform your physical, mental, and emotional health.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-xl italic text-[#3D3D3D] mb-2">Mindful Movement</h3>
                  <p className="text-[#7D7D7D] font-light">
                    Improve flexibility, posture and strength through guided sequences.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl italic text-[#3D3D3D] mb-2">Breath Awareness</h3>
                  <p className="text-[#7D7D7D] font-light">
                    Learn to regulate stress and improve focus with controlled breathing.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl italic text-[#3D3D3D] mb-2">Community Support</h3>
                  <p className="text-[#7D7D7D] font-light">
                    Join a welcoming community that motivates and uplifts each other.
                  </p>
                </div>
              </div>

              <button 
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-12 px-8 py-3 bg-[#3D3D3D] text-[#F5F1EB] rounded-full hover:bg-[#2D2D2D] transition-all text-sm tracking-wide font-light"
              >
                Get Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-32 px-8 bg-[#F5F1EB]">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#3D3D3D] mb-6 tracking-tight">
            Join the Waitlist
          </h2>
          <p className="text-[#5D5D5D] text-lg font-light leading-relaxed">
            Get early-bird access, introductory benefits, and be first to know when we open.
          </p>
        </div>

        <WaitlistQuiz />
      </section>

      {/* Meet Instructors Preview */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[#3D3D3D] mb-6 tracking-tight">
            Meet Our Instructors
          </h2>
          <p className="text-[#5D5D5D] mb-16 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Our certified teachers bring years of experience to guide you with mindfulness, grace, and personalized care.
          </p>

          {/* Instructor Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group">
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden mb-4">
                <img src="/1.png" alt="Instructor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-serif text-xl text-[#3D3D3D] mb-1">Maya Tanaka</h3>
              <p className="text-[#7D7D7D] text-sm font-light">VINYASA FLOW & BREATHWORK</p>
            </div>
            <div className="group">
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden mb-4">
                <img src="/2.png" alt="Instructor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-serif text-xl text-[#3D3D3D] mb-1">Sofia Jensen</h3>
              <p className="text-[#7D7D7D] text-sm font-light">REFORMER PILATES & CORE</p>
            </div>
            <div className="group">
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden mb-4">
                <img src="/3.png" alt="Instructor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-serif text-xl text-[#3D3D3D] mb-1">Emma Larsen</h3>
              <p className="text-[#7D7D7D] text-sm font-light">GENTLE YOGA & MEDITATION</p>
            </div>
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
      <section className="relative py-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[21/9] relative rounded-3xl overflow-hidden">
            <img src="/3.png" alt="Mountain yoga" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
              <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 tracking-tight">
                One Decision Can Change <br />Your <span className="inline-flex items-center gap-2"><User className="inline" size={32} /></span> Life
              </h2>
              <p className="text-white/90 mb-8 text-lg font-light max-w-xl">
                Join thousands who have transformed their well-being. Try your first class free.
              </p>
              <button 
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-white text-[#3D3D3D] rounded-full hover:bg-[#F5F1EB] transition-all text-sm tracking-wide font-medium"
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
      <section className="py-32 px-8 bg-[#F5F1EB]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[#3D3D3D] mb-6 tracking-tight">
            Simple Pricing
          </h2>
          <p className="text-[#5D5D5D] mb-16 text-lg font-light leading-relaxed">
            One transparent price — unlimited possibilities
          </p>

          <div className="max-w-md mx-auto bg-white rounded-3xl p-12 shadow-lg">
            <div className="mb-8">
              <Sparkles size={32} className="mx-auto text-[#8B7355] mb-4" />
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
                <span className="text-[#8B7355] mt-1">✓</span>
                <span>Unlimited classes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8B7355] mt-1">✓</span>
                <span>Book anytime 24/7</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8B7355] mt-1">✓</span>
                <span>Priority booking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8B7355] mt-1">✓</span>
                <span>Free welcome kit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8B7355] mt-1">✓</span>
                <span>Cancel anytime</span>
              </li>
            </ul>

            <div className="bg-[#F5F1EB] rounded-xl p-4 text-sm text-[#5D5D5D] font-light">
              <strong className="text-[#8B7355]">Early-bird benefit:</strong> 50% off for 2 months + free welcome kit (200kr value)
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3D3D3D] text-[#F5F1EB] py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image 
              src="/nordicwhite.png" 
              alt="Nordic Pilates" 
              width={250} 
              height={110} 
              className="object-contain opacity-90"
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
