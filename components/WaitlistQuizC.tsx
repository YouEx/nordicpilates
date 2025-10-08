'use client'

import { useState, FormEvent } from 'react'
import { Calendar, MapPin, Trophy } from 'lucide-react'

// VARIANT C - Modern Studio Style
// Teal #1A7A7A, Gold #C9A961, Light Gray #F5F5F5
// Professional, aspirational, clean

interface QuizData {
  goal: string
  experience: string
  name: string
  email: string
}

export default function WaitlistQuizC() {
  const [step, setStep] = useState(1)
  const [quizData, setQuizData] = useState<QuizData>({
    goal: '',
    experience: '',
    name: '',
    email: '',
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const totalSteps = 3

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validateStep = (currentStep: number): boolean => {
    const newErrors: { [key: string]: string } = {}

    if (currentStep === 1 && !quizData.goal) {
      newErrors.goal = 'Please select your goal'
    }
    if (currentStep === 2 && !quizData.experience) {
      newErrors.experience = 'Please select your experience level'
    }
    if (currentStep === 3) {
      if (!quizData.name.trim()) {
        newErrors.name = 'Please enter your name'
      }
      if (!quizData.email.trim()) {
        newErrors.email = 'Please enter your email'
      } else if (!validateEmail(quizData.email)) {
        newErrors.email = 'Please enter a valid email'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    setErrors({})
    setStep(step - 1)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!validateStep(3)) {
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: quizData.name.trim(),
          email: quizData.email.trim().toLowerCase(),
          locale: 'en',
          preferences: {
            variant: 'C',
            goal: quizData.goal,
            experience: quizData.experience,
          },
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitSuccess(true)
      } else {
        setErrors({ general: data.message || 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      setErrors({ general: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="bg-white p-14 md:p-20 rounded-none shadow-2xl text-center max-w-xl mx-auto border-t-4 border-[#C9A961]">
        <div className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full bg-gradient-to-br from-[#1A7A7A] to-[#C9A961]">
          <Trophy className="w-12 h-12 text-white" />
        </div>
        
        <h3 className="text-4xl font-light mb-6 text-[#1A7A7A] tracking-tight">You're On The List</h3>
        <p className="text-gray-600 mb-10 text-lg leading-relaxed">
          Welcome to the Nordic Pilates community. Your transformation begins now.
        </p>
        
        <div className="bg-[#F5F5F5] rounded-none p-8 mb-10 border-l-4 border-[#C9A961]">
          <p className="text-sm text-[#1A7A7A] font-medium">
            ✓ Priority access secured<br/>
            ✓ Welcome package on the way<br/>
            ✓ Founding member pricing locked in
          </p>
        </div>
        
        <p className="text-xs text-gray-400 uppercase tracking-wider">
          Copenhagen · Opening Soon
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white p-12 md:p-16 rounded-none shadow-2xl max-w-xl mx-auto border-t-4 border-[#C9A961]">
      {/* Modern Progress Bar */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-3xl font-light text-[#1A7A7A]">{step}</div>
          <div className="flex-1 h-[2px] bg-[#F5F5F5]">
            <div 
              className="h-full bg-gradient-to-r from-[#1A7A7A] to-[#C9A961] transition-all duration-700"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            ></div>
          </div>
          <div className="text-sm text-gray-400">of {totalSteps}</div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Goal */}
        {step === 1 && (
          <div className="animate-fadeIn">
            <div className="mb-10">
              <h3 className="text-3xl font-light mb-4 text-[#1A7A7A] tracking-tight">What drives you?</h3>
              <p className="text-gray-600">Define your transformation goal</p>
            </div>
            
            <div className="space-y-4">
              {[
                { value: 'Build Strength', icon: '💪' },
                { value: 'Improve Flexibility', icon: '🤸' },
                { value: 'Core Stability', icon: '⚡' },
                { value: 'Mind-Body Connection', icon: '🧠' },
                { value: 'Athletic Performance', icon: '🏆' },
              ].map(({ value, icon }) => (
                <label
                  key={value}
                  className={`flex items-center p-6 border-2 cursor-pointer transition-all min-h-[44px] group hover:scale-[1.02] ${
                    quizData.goal === value
                      ? 'border-[#C9A961] bg-[#F5F5F5] shadow-lg'
                      : 'border-gray-200 hover:border-[#1A7A7A]/30'
                  }`}
                >
                  <input
                    type="radio"
                    name="goal"
                    value={value}
                    checked={quizData.goal === value}
                    onChange={(e) => setQuizData({ ...quizData, goal: e.target.value })}
                    className="sr-only"
                    aria-label={value}
                  />
                  <span className="text-3xl mr-5">{icon}</span>
                  <span className="text-lg font-light text-[#1A7A7A]">{value}</span>
                  <div className="ml-auto">
                    <div className={`w-6 h-6 border-2 transition-all ${
                      quizData.goal === value 
                        ? 'border-[#C9A961] bg-[#C9A961]' 
                        : 'border-gray-300 group-hover:border-[#1A7A7A]'
                    }`}>
                      {quizData.goal === value && (
                        <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                </label>
              ))}
            </div>
            {errors.goal && <p className="text-red-500 text-sm mt-4" role="alert" aria-live="polite">{errors.goal}</p>}
            
            <button 
              type="button" 
              onClick={handleNext} 
              className="w-full mt-8 py-5 bg-[#1A7A7A] text-white hover:bg-[#1A7A7A]/90 transition-all text-lg font-light tracking-wide uppercase min-h-[44px]"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 2: Experience */}
        {step === 2 && (
          <div className="animate-fadeIn">
            <div className="mb-10">
              <h3 className="text-3xl font-light mb-4 text-[#1A7A7A] tracking-tight">Your experience</h3>
              <p className="text-gray-600">We'll tailor your journey accordingly</p>
            </div>
            
            <div className="space-y-4">
              {[
                { value: 'Complete Beginner', desc: 'New to Pilates' },
                { value: 'Some Experience', desc: '6 months - 1 year' },
                { value: 'Intermediate', desc: '1-3 years' },
                { value: 'Advanced', desc: '3+ years' },
              ].map(({ value, desc }) => (
                <label
                  key={value}
                  className={`flex items-start p-6 border-2 cursor-pointer transition-all min-h-[44px] group hover:scale-[1.02] ${
                    quizData.experience === value
                      ? 'border-[#C9A961] bg-[#F5F5F5] shadow-lg'
                      : 'border-gray-200 hover:border-[#1A7A7A]/30'
                  }`}
                >
                  <input
                    type="radio"
                    name="experience"
                    value={value}
                    checked={quizData.experience === value}
                    onChange={(e) => setQuizData({ ...quizData, experience: e.target.value })}
                    className="sr-only"
                    aria-label={`${value}: ${desc}`}
                  />
                  <div className="flex-1">
                    <div className="text-lg font-light text-[#1A7A7A] mb-1">{value}</div>
                    <div className="text-sm text-gray-500">{desc}</div>
                  </div>
                  <div className={`w-6 h-6 border-2 transition-all ${
                    quizData.experience === value 
                      ? 'border-[#C9A961] bg-[#C9A961]' 
                      : 'border-gray-300 group-hover:border-[#1A7A7A]'
                  }`}>
                    {quizData.experience === value && (
                      <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </label>
              ))}
            </div>
            {errors.experience && <p className="text-red-500 text-sm mt-4" role="alert" aria-live="polite">{errors.experience}</p>}
            
            <div className="flex gap-4 mt-8">
              <button 
                type="button" 
                onClick={handleBack} 
                className="flex-1 py-5 border-2 border-[#1A7A7A] text-[#1A7A7A] hover:bg-[#1A7A7A]/5 transition-all text-lg font-light uppercase"
              >
                Back
              </button>
              <button 
                type="button" 
                onClick={handleNext} 
                className="flex-1 py-5 bg-[#1A7A7A] text-white hover:bg-[#1A7A7A]/90 transition-all text-lg font-light uppercase"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Personal Info */}
        {step === 3 && (
          <div className="animate-fadeIn">
            <div className="mb-10">
              <h3 className="text-3xl font-light mb-4 text-[#1A7A7A] tracking-tight">Secure your spot</h3>
              <p className="text-gray-600">Join the founding members</p>
            </div>
            
            <div className="space-y-6 mb-8">
              <div>
                <label htmlFor="name" className="block mb-3 text-sm uppercase tracking-wider text-[#1A7A7A]">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-6 py-4 border-2 transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-200 focus:border-[#C9A961]'
                  } focus:outline-none min-h-[44px] text-lg font-light`}
                  placeholder="Enter your name"
                  value={quizData.name}
                  onChange={(e) => setQuizData({ ...quizData, name: e.target.value })}
                />
                {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block mb-3 text-sm uppercase tracking-wider text-[#1A7A7A]">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-6 py-4 border-2 transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-200 focus:border-[#C9A961]'
                  } focus:outline-none min-h-[44px] text-lg font-light`}
                  placeholder="your@email.com"
                  value={quizData.email}
                  onChange={(e) => setQuizData({ ...quizData, email: e.target.value })}
                />
                {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
              </div>
            </div>

            {errors.general && (
              <div className="mb-8 p-5 bg-red-50 border-l-4 border-red-500">
                <p className="text-red-700 text-sm">{errors.general}</p>
              </div>
            )}
            
            <div className="flex gap-4">
              <button 
                type="button" 
                onClick={handleBack} 
                className="flex-1 py-5 border-2 border-[#1A7A7A] text-[#1A7A7A] hover:bg-[#1A7A7A]/5 transition-all text-lg font-light uppercase"
              >
                Back
              </button>
              <button 
                type="submit" 
                className="flex-1 py-5 bg-[#C9A961] text-white hover:bg-[#C9A961]/90 transition-all text-lg font-light uppercase disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
