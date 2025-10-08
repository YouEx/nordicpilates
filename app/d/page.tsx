'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import WaitlistQuiz from '@/components/WaitlistQuiz'
import { ArrowRight, CheckCircle, Clock, Users, Instagram, Sparkles } from 'lucide-react'

// VARIANT D - Minimalist Blur Design
// Palette: Deep Navy #1E1B4B, Purple #7C3AED, Gradient background
export default function VariantD() {
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
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Skip Navigation */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-16 focus:py-8 focus:bg-[#7C3AED] focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Variant D Label */}
      <div className="fixed top-4 left-4 z-[100] bg-[#7C3AED] text-white px-4 py-2 rounded-full text-xs font-light tracking-wide">
        Variant D
      </div>

      {/* Hero Section - Full Screen with Blur */}
      <section className="relative min-h-screen w-full flex items-center justify-center px-6 py-20" aria-label="Hero section">
        {/* Background Video with Heavy Blur */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-3xl opacity-40"
            aria-label="Background video"
          >
            <source src="/vid-d.mp4" type="video/mp4" />
          </video>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/80 via-purple-100/70 to-pink-100/80"></div>
        </div>

        {/* Center Content Card */}
        <div id="main-content" className="relative z-10 w-full max-w-2xl animate-fadeInUp" style={{ animationDelay: '0.3s', opacity: 0 }}>
          {/* Logo */}
          <div className="text-center mb-12">
            <Image 
              src="/logo-d.png" 
              alt="Nordic Pilates" 
              width={120} 
              height={40} 
              className="inline-block object-contain"
              priority
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-[#1E1B4B] mb-6 leading-tight">
            Don't miss out, join the queue
            <br />
            <span className="text-[#1E1B4B]">and get to know first</span>
          </h1>

          {/* Card */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#1E1B4B] mb-3">
                Join the waiting list
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Launch a waiting list for your new product and grow your mailing list
                whilst preparing for launch day
              </p>
            </div>

            {/* Email Form */}
            <form 
              onSubmit={(e) => {
                e.preventDefault()
                document.getElementById('waitlist-full')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="flex flex-col sm:flex-row gap-3 mb-6"
            >
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 focus:outline-none transition-all text-gray-800 placeholder:text-gray-400"
                aria-label="Email address"
                required
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-[#7C3AED] text-white rounded-xl hover:bg-[#7C3AED]/90 hover:scale-105 transition-all font-medium shadow-lg hover:shadow-xl min-h-[44px] whitespace-nowrap"
                aria-label="Subscribe to waitlist"
              >
                Subscribe
              </button>
            </form>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white" role="img" aria-label="Member avatar"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white" role="img" aria-label="Member avatar"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 border-2 border-white" role="img" aria-label="Member avatar"></div>
              </div>
              <span className="font-medium text-[#1E1B4B]">
                Join the {signupCount}+ others that have signed up
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-white" aria-labelledby="benefits-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="benefits-heading" className="text-4xl md:text-5xl font-semibold text-[#1E1B4B] mb-6">
              Why Join Early?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Be among the first to experience Nordic Pilates and enjoy exclusive founding member benefits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#7C3AED] text-white mb-6">
                <Sparkles size={28} />
              </div>
              <h3 className="text-xl font-semibold text-[#1E1B4B] mb-3">
                50% Off First 2 Months
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lock in founding member pricing at just 119kr/month for your first two months
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#7C3AED] text-white mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-semibold text-[#1E1B4B] mb-3">
                Priority Access
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get first pick of class times and be the first to try new programs
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#7C3AED] text-white mb-6">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-semibold text-[#1E1B4B] mb-3">
                Welcome Kit Included
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Receive complimentary grip socks, water bottle, and branded tote (200kr value)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Waitlist Section */}
      <section id="waitlist-full" className="py-24 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50" aria-labelledby="waitlist-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="waitlist-heading" className="text-4xl md:text-5xl font-semibold text-[#1E1B4B] mb-6">
              Complete Your Registration
            </h2>
            <p className="text-gray-600 text-lg">
              Answer a few quick questions so we can personalize your experience
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
            <WaitlistQuiz />
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-24 px-6 bg-white" aria-label="Features showcase">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image/Video */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              >
                <source src="/vid-d.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  State-of-the-Art Studio
                </h3>
                <p className="text-white/90">
                  Modern equipment in a beautiful Copenhagen space
                </p>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-[#1E1B4B] mb-6 leading-tight">
                Experience Pilates
                <br />
                <span className="text-[#7C3AED]">Like Never Before</span>
              </h2>
              
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Our studio combines cutting-edge reformer equipment with expert instruction to deliver transformative results. Whether you're a beginner or advanced practitioner, we'll meet you where you are.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#7C3AED]/10 flex items-center justify-center">
                    <Clock className="text-[#7C3AED]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E1B4B] mb-1">24/7 Access</h4>
                    <p className="text-gray-600 text-sm">Book classes or drop in anytime that fits your schedule</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#7C3AED]/10 flex items-center justify-center">
                    <Users className="text-[#7C3AED]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E1B4B] mb-1">Small Group Classes</h4>
                    <p className="text-gray-600 text-sm">Maximum 8 people per class for personalized attention</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#7C3AED]/10 flex items-center justify-center">
                    <CheckCircle className="text-[#7C3AED]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E1B4B] mb-1">All Levels Welcome</h4>
                    <p className="text-gray-600 text-sm">From gentle flow to power core, find your perfect class</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => document.getElementById('waitlist-full')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#7C3AED] text-white rounded-xl hover:bg-[#7C3AED]/90 hover:scale-105 transition-all shadow-lg hover:shadow-xl min-h-[44px]"
                aria-label="Join waitlist"
              >
                Join Waitlist
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#1E1B4B] via-[#7C3AED] to-[#1E1B4B]" aria-label="Final call to action">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
            Ready to Transform Your Body?
          </h2>
          <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
            Join {signupCount}+ early members who are waiting for Copenhagen's most exciting new Pilates studio
          </p>
          
          <button 
            onClick={() => document.getElementById('waitlist-full')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#7C3AED] rounded-xl hover:bg-white/90 hover:scale-105 transition-all shadow-2xl hover:shadow-3xl font-semibold text-lg min-h-[44px]"
            aria-label="Get started now"
          >
            Get Started Now
            <ArrowRight size={24} />
          </button>

          <p className="text-white/60 text-sm mt-6">
            No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E1B4B] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo & Tagline */}
            <div className="md:col-span-2">
              <Image 
                src="/logo-d.png" 
                alt="Nordic Pilates" 
                width={150} 
                height={50} 
                className="object-contain mb-4 brightness-0 invert"
              />
              <p className="text-white/70 text-sm leading-relaxed max-w-md">
                Don't miss out - join the queue and be the first to know when we launch in Copenhagen.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4 font-semibold">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#benefits" className="block text-white/70 hover:text-white transition-colors">Benefits</a>
                <a href="#features" className="block text-white/70 hover:text-white transition-colors">Features</a>
                <a href="#waitlist-full" className="block text-white/70 hover:text-white transition-colors">Join Waitlist</a>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-4 font-semibold">Connect</h4>
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
            <p>© {new Date().getFullYear()} Nordic Pilates. Copenhagen, Denmark. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}