'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import WaitlistQuizB from '@/components/WaitlistQuizB'
import { Instagram, ChevronRight } from 'lucide-react'

// VARIANT B - Scandinavian "Quiet Strength"
// Palette: Warm beige #E8DED0, Soft sand #F5EFE7, Fjord blue #5B7C99, Slate gray #6B7280
export default function VariantB() {
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
    <main className="min-h-screen bg-[#FEFBF3]">
      {/* Variant B Label */}
      <div className="fixed top-4 left-4 z-[100] bg-[#5B7C99] text-white px-4 py-2 rounded-full text-xs font-light tracking-wide">
        Variant B
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center py-20 px-8">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="mb-8">
              <Image 
                src="/logo-b.png" 
                alt="Nordic Pilates" 
                width={200} 
                height={90} 
                className="object-contain"
              />
            </div>

            <div>
              <p className="text-[#5B7C99] text-sm tracking-[0.2em] uppercase mb-4 font-light">
                Opening Soon in Copenhagen
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#2D3748] mb-6 leading-[1.1] font-light">
                Quiet<br/>Strength.
              </h1>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-8 max-w-lg">
                Scandinavian simplicity meets mindful movement. Reformer Pilates designed for the modern Nordic lifestyle.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-[#5B7C99] text-white rounded-full hover:bg-[#5B7C99]/90 transition-all text-sm tracking-wide flex items-center gap-2"
              >
                Join Waitlist
                <ChevronRight size={16} />
              </button>
              <span className="text-[#6B7280] text-sm">
                {signupCount}+ early members
              </span>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E8DED0]">
              <div>
                <p className="text-2xl font-light text-[#2D3748] mb-1">24/7</p>
                <p className="text-xs text-[#6B7280] uppercase tracking-wider">Access</p>
              </div>
              <div>
                <p className="text-2xl font-light text-[#2D3748] mb-1">239kr</p>
                <p className="text-xs text-[#6B7280] uppercase tracking-wider">Per Month</p>
              </div>
              <div>
                <p className="text-2xl font-light text-[#2D3748] mb-1">∞</p>
                <p className="text-xs text-[#6B7280] uppercase tracking-wider">Classes</p>
              </div>
            </div>
          </div>

          {/* Right - Video in rounded square */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/vid-b.mp4" type="video/mp4" />
              </video>
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#5B7C99]/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-8 bg-[#F5EFE7]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#5B7C99] text-sm tracking-[0.2em] uppercase mb-6 font-light">
            Our Philosophy
          </p>
          <h2 className="text-4xl md:text-5xl text-[#2D3748] mb-8 font-light leading-tight">
            Strength Through Stillness
          </h2>
          <p className="text-[#6B7280] text-lg leading-relaxed max-w-2xl mx-auto mb-16">
            In a world that moves too fast, we believe in the power of controlled movement, 
            intentional breath, and quiet determination. Nordic Pilates is where Scandinavian 
            minimalism meets transformative practice.
          </p>

          {/* Three pillars */}
          <div className="grid md:grid-cols-3 gap-12 mt-20">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#5B7C99]/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌊</span>
              </div>
              <h3 className="text-xl text-[#2D3748] font-light">Flow</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Movements that mirror the rhythm of Nordic waters—steady, powerful, graceful.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#5B7C99]/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏔️</span>
              </div>
              <h3 className="text-xl text-[#2D3748] font-light">Foundation</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Build core strength as solid as the mountains that define our landscape.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#5B7C99]/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">❄️</span>
              </div>
              <h3 className="text-xl text-[#2D3748] font-light">Clarity</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Find mental focus sharp as the crisp Nordic air, calm as winter stillness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-32 px-8 bg-[#FEFBF3]">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-[#5B7C99] text-sm tracking-[0.2em] uppercase mb-6 font-light">
            Join the Movement
          </p>
          <h2 className="text-4xl md:text-5xl text-[#2D3748] mb-6 font-light">
            Reserve Your Spot
          </h2>
          <p className="text-[#6B7280] text-lg leading-relaxed">
            Be among the first to experience Nordic Pilates. Early members receive 50% off for 2 months.
          </p>
        </div>

        <WaitlistQuizB />
      </section>

      {/* Class Preview */}
      <section className="py-32 px-8 bg-[#E8DED0]/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#5B7C99] text-sm tracking-[0.2em] uppercase mb-6 font-light">
              What to Expect
            </p>
            <h2 className="text-4xl md:text-5xl text-[#2D3748] mb-6 font-light">
              Your Practice
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] relative">
                <img src="/1.png" alt="Nordic Flow" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="text-xs text-[#5B7C99] uppercase tracking-wider mb-3">Foundation</div>
                <h3 className="text-xl text-[#2D3748] mb-3 font-light">Nordic Flow</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  Gentle sequences for beginners. Build awareness, control, and confidence.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] relative">
                <img src="/2.png" alt="Core Strength" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="text-xs text-[#5B7C99] uppercase tracking-wider mb-3">Intermediate</div>
                <h3 className="text-xl text-[#2D3748] mb-3 font-light">Core Strength</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  Challenge your stability and power. Sculpt, strengthen, transform.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] relative">
                <img src="/3.png" alt="Power Flow" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="text-xs text-[#5B7C99] uppercase tracking-wider mb-3">Advanced</div>
                <h3 className="text-xl text-[#2D3748] mb-3 font-light">Power Flow</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  Dynamic sequences that demand focus, strength, and endurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 px-8 bg-[#FEFBF3]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#5B7C99] text-sm tracking-[0.2em] uppercase mb-6 font-light">
              Simple Pricing
            </p>
            <h2 className="text-4xl md:text-5xl text-[#2D3748] mb-6 font-light">
              One Membership
            </h2>
            <p className="text-[#6B7280] text-lg leading-relaxed">
              Everything you need. Nothing you don't.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-lg border border-[#E8DED0]">
            <div className="flex items-baseline justify-center gap-2 mb-8">
              <span className="text-6xl font-light text-[#2D3748]">239</span>
              <span className="text-2xl text-[#6B7280]">kr</span>
              <span className="text-[#6B7280]">/month</span>
            </div>

            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3 text-[#6B7280]">
                <span className="text-[#5B7C99]">✓</span>
                <span>Unlimited classes, all levels</span>
              </li>
              <li className="flex items-center gap-3 text-[#6B7280]">
                <span className="text-[#5B7C99]">✓</span>
                <span>24/7 studio access</span>
              </li>
              <li className="flex items-center gap-3 text-[#6B7280]">
                <span className="text-[#5B7C99]">✓</span>
                <span>Priority booking</span>
              </li>
              <li className="flex items-center gap-3 text-[#6B7280]">
                <span className="text-[#5B7C99]">✓</span>
                <span>Scandinavian-designed studio</span>
              </li>
              <li className="flex items-center gap-3 text-[#6B7280]">
                <span className="text-[#5B7C99]">✓</span>
                <span>Cancel anytime</span>
              </li>
            </ul>

            <div className="bg-[#F5EFE7] rounded-2xl p-6 text-center">
              <p className="text-[#2D3748] font-medium mb-2">Early Member Benefit</p>
              <p className="text-[#6B7280] text-sm">
                50% off for 2 months + complimentary welcome kit (200kr value)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D3748] text-white py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Logo & Tagline */}
            <div className="col-span-2">
              <Image 
                src="/logo-b.png" 
                alt="Nordic Pilates" 
                width={180} 
                height={80} 
                className="object-contain mb-6 brightness-0 invert"
              />
              <p className="text-white/70 text-sm mb-6 max-w-md leading-relaxed">
                Quiet Strength. Scandinavian simplicity meets mindful movement in the heart of Copenhagen.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4">Connect</h4>
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
