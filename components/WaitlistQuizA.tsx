'use client'

import { useState, FormEvent } from 'react'
import { Heart, Sparkles, Zap } from 'lucide-react'

// VARIANT A - Elegant Wellness Style
// Cream #FEFBF0, Dark Blue-Gray #445D68
// Soft, serene, holistic aesthetic

interface QuizData {
  intention: string
  frequency: string
  name: string
  email: string
}

export default function WaitlistQuizA() {
  const [step, setStep] = useState(1)
  const [quizData, setQuizData] = useState<QuizData>({
    intention: '',
    frequency: '',
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

    if (currentStep === 1 && !quizData.intention) {
      newErrors.intention = 'Please choose your intention'
    }
    if (currentStep === 2 && !quizData.frequency) {
      newErrors.frequency = 'Please select your desired frequency'
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
            variant: 'A',
            intention: quizData.intention,
            frequency: quizData.frequency,
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
      <div className="relative bg-[#FEFBF0] p-12 md:p-16 rounded-3xl shadow-xl text-center max-w-lg mx-auto border border-[#445D68]/10">
        <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-gradient-to-br from-[#445D68] to-[#5D7D88]">
          <Heart className="w-10 h-10 text-white fill-white" />
        </div>
        
        <h3 className="text-3xl font-light mb-4 text-[#445D68]">Welcome to Your Journey</h3>
        <p className="text-[#7D7D7D] mb-8 text-lg font-light leading-relaxed">
          Your path to wellness begins now. We'll reach out with your personalized welcome.
        </p>
        
        <div className="bg-white rounded-2xl p-6 mb-8">
          <p className="text-sm text-[#445D68] font-light">
            ✨ A complimentary wellness guide is on its way to your inbox
          </p>
        </div>
        
        <p className="text-xs text-[#7D7D7D]/60 font-light">
          Your information is sacred to us · Unsubscribe anytime
        </p>
      </div>
    )
  }

  return (
    <div className="bg-[#FEFBF0] p-10 md:p-14 rounded-3xl shadow-xl max-w-lg mx-auto border border-[#445D68]/10">
      {/* Elegant Progress Indicator */}
      <div className="mb-10">
        <div className="flex gap-2 justify-center">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === step ? 'w-12 bg-[#445D68]' : i < step ? 'w-8 bg-[#445D68]/40' : 'w-8 bg-[#445D68]/10'
              }`}
            />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Intention */}
        {step === 1 && (
          <div className="animate-fadeIn">
            <div className="text-center mb-10">
              <Sparkles className="w-8 h-8 text-[#445D68] mx-auto mb-4" />
              <h3 className="text-3xl font-light mb-3 text-[#445D68]">Your Intention</h3>
              <p className="text-[#7D7D7D] font-light">What calls you to Pilates?</p>
            </div>
            
            <div className="space-y-3">
              {[
                { value: 'Mindful Movement', icon: '🧘‍♀️', desc: 'Connect body & breath' },
                { value: 'Inner Strength', icon: '💪', desc: 'Build from your core' },
                { value: 'Flexibility & Flow', icon: '🌊', desc: 'Move with grace' },
                { value: 'Holistic Wellness', icon: '✨', desc: 'Balance mind, body, spirit' },
              ].map(({ value, icon, desc }) => (
                <label
                  key={value}
                  className={`flex items-center p-5 border rounded-2xl cursor-pointer transition-all min-h-[44px] group ${
                    quizData.intention === value
                      ? 'border-[#445D68] bg-[#445D68]/5 shadow-md'
                      : 'border-[#445D68]/10 hover:border-[#445D68]/30 hover:bg-[#445D68]/5'
                  }`}
                >
                  <input
                    type="radio"
                    name="intention"
                    value={value}
                    checked={quizData.intention === value}
                    onChange={(e) => setQuizData({ ...quizData, intention: e.target.value })}
                    className="sr-only"
                    aria-label={`${value}: ${desc}`}
                  />
                  <span className="text-2xl mr-4">{icon}</span>
                  <div className="flex-1">
                    <div className="text-sm font-normal text-[#445D68]">{value}</div>
                    <div className="text-xs text-[#7D7D7D] font-light">{desc}</div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 transition-all ${
                    quizData.intention === value 
                      ? 'border-[#445D68] bg-[#445D68]' 
                      : 'border-[#445D68]/20'
                  }`}>
                    {quizData.intention === value && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                    )}
                  </div>
                </label>
              ))}
            </div>
            {errors.intention && <p className="text-red-500 text-sm mt-3 text-center font-light" role="alert" aria-live="polite">{errors.intention}</p>}
            
            <button 
              type="button" 
              onClick={handleNext} 
              className="w-full mt-8 py-4 bg-[#445D68] text-white rounded-full hover:bg-[#445D68]/90 transition-all font-light text-lg hover:shadow-lg min-h-[44px]"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 2: Frequency */}
        {step === 2 && (
          <div className="animate-fadeIn">
            <div className="text-center mb-10">
              <Zap className="w-8 h-8 text-[#445D68] mx-auto mb-4" />
              <h3 className="text-3xl font-light mb-3 text-[#445D68]">Your Rhythm</h3>
              <p className="text-[#7D7D7D] font-light">How often would you like to practice?</p>
            </div>
            
            <div className="space-y-3">
              {[
                { value: '2-3 times/week', subtitle: 'Build a foundation' },
                { value: '4-5 times/week', subtitle: 'Deepen your practice' },
                { value: 'Daily practice', subtitle: 'Transform your life' },
                { value: 'Flexible schedule', subtitle: 'Listen to your body' },
              ].map(({ value, subtitle }) => (
                <label
                  key={value}
                  className={`flex items-center justify-between p-5 border rounded-2xl cursor-pointer transition-all min-h-[44px] ${
                    quizData.frequency === value
                      ? 'border-[#445D68] bg-[#445D68]/5 shadow-md'
                      : 'border-[#445D68]/10 hover:border-[#445D68]/30 hover:bg-[#445D68]/5'
                  }`}
                >
                  <input
                    type="radio"
                    name="frequency"
                    value={value}
                    checked={quizData.frequency === value}
                    onChange={(e) => setQuizData({ ...quizData, frequency: e.target.value })}
                    className="sr-only"
                    aria-label={`${value}: ${subtitle}`}
                  />
                  <div>
                    <div className="text-sm font-normal text-[#445D68]">{value}</div>
                    <div className="text-xs text-[#7D7D7D] font-light">{subtitle}</div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 transition-all ${
                    quizData.frequency === value 
                      ? 'border-[#445D68] bg-[#445D68]' 
                      : 'border-[#445D68]/20'
                  }`}>
                    {quizData.frequency === value && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                    )}
                  </div>
                </label>
              ))}
            </div>
            {errors.frequency && <p className="text-red-500 text-sm mt-3 text-center font-light" role="alert" aria-live="polite">{errors.frequency}</p>}
            
            <div className="flex gap-3 mt-8">
              <button 
                type="button" 
                onClick={handleBack} 
                className="flex-1 py-4 border border-[#445D68]/20 text-[#445D68] rounded-full hover:bg-[#445D68]/5 transition-all font-light"
              >
                Back
              </button>
              <button 
                type="button" 
                onClick={handleNext} 
                className="flex-1 py-4 bg-[#445D68] text-white rounded-full hover:bg-[#445D68]/90 transition-all font-light hover:shadow-lg"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Personal Info */}
        {step === 3 && (
          <div className="animate-fadeIn">
            <div className="text-center mb-10">
              <Heart className="w-8 h-8 text-[#445D68] mx-auto mb-4" />
              <h3 className="text-3xl font-light mb-3 text-[#445D68]">Begin Your Journey</h3>
              <p className="text-[#7D7D7D] font-light">We'll be in touch soon</p>
            </div>
            
            <div className="space-y-5 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-light text-sm text-[#445D68]">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-5 py-4 border rounded-2xl transition-colors font-light ${
                    errors.name ? 'border-red-500' : 'border-[#445D68]/20 focus:border-[#445D68]'
                  } focus:outline-none focus:ring-2 focus:ring-[#445D68]/20 min-h-[44px]`}
                  placeholder="Enter your full name"
                  value={quizData.name}
                  onChange={(e) => setQuizData({ ...quizData, name: e.target.value })}
                />
                {errors.name && <p className="text-red-500 text-xs mt-2 font-light">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-light text-sm text-[#445D68]">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-5 py-4 border rounded-2xl transition-colors font-light ${
                    errors.email ? 'border-red-500' : 'border-[#445D68]/20 focus:border-[#445D68]'
                  } focus:outline-none focus:ring-2 focus:ring-[#445D68]/20 min-h-[44px]`}
                  placeholder="your@email.com"
                  value={quizData.email}
                  onChange={(e) => setQuizData({ ...quizData, email: e.target.value })}
                />
                {errors.email && <p className="text-red-500 text-xs mt-2 font-light">{errors.email}</p>}
              </div>
            </div>

            {errors.general && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl">
                <p className="text-red-700 text-sm font-light">{errors.general}</p>
              </div>
            )}
            
            <div className="flex gap-3">
              <button 
                type="button" 
                onClick={handleBack} 
                className="flex-1 py-4 border border-[#445D68]/20 text-[#445D68] rounded-full hover:bg-[#445D68]/5 transition-all font-light"
              >
                Back
              </button>
              <button 
                type="submit" 
                className="flex-1 py-4 bg-[#445D68] text-white rounded-full hover:bg-[#445D68]/90 transition-all font-light hover:shadow-lg disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Join the Journey'}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
