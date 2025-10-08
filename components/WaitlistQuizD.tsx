'use client'

import { useState, FormEvent } from 'react'
import { Sparkles, Zap, Target } from 'lucide-react'

// VARIANT D - Minimalist Blur Style
// Deep Navy #1E1B4B, Purple #7C3AED
// Ultra-minimal, conversion-focused

interface QuizData {
  motivation: string
  email: string
  name: string
}

export default function WaitlistQuizD() {
  const [step, setStep] = useState(1)
  const [quizData, setQuizData] = useState<QuizData>({
    motivation: '',
    email: '',
    name: '',
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const totalSteps = 2

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validateStep = (currentStep: number): boolean => {
    const newErrors: { [key: string]: string } = {}

    if (currentStep === 1 && !quizData.motivation) {
      newErrors.motivation = 'Please select an option'
    }
    if (currentStep === 2) {
      if (!quizData.email.trim()) {
        newErrors.email = 'Email is required'
      } else if (!validateEmail(quizData.email)) {
        newErrors.email = 'Invalid email address'
      }
      if (!quizData.name.trim()) {
        newErrors.name = 'Name is required'
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
    
    if (!validateStep(2)) {
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
            variant: 'D',
            motivation: quizData.motivation,
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
      <div className="bg-white/95 backdrop-blur-xl p-16 md:p-20 rounded-3xl shadow-2xl text-center max-w-md mx-auto border border-white/30">
        <div className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#1E1B4B] animate-pulse">
          <Sparkles className="w-12 h-12 text-white" />
        </div>
        
        <h3 className="text-4xl font-semibold mb-6 text-[#1E1B4B]">You're in! 🎉</h3>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          Welcome to the queue. We'll notify you as soon as we launch.
        </p>
        
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-[#7C3AED]/20">
          <p className="text-sm text-[#1E1B4B] font-medium">
            🎁 Founding member perks unlocked
          </p>
        </div>
        
        <p className="text-xs text-gray-400">
          Check your inbox for next steps
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white/95 backdrop-blur-xl p-12 md:p-16 rounded-3xl shadow-2xl max-w-md mx-auto border border-white/30">
      {/* Minimal dot indicators */}
      <div className="mb-12">
        <div className="flex gap-2 justify-center">
          {[1, 2].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === step ? 'bg-[#7C3AED] scale-125' : i < step ? 'bg-[#7C3AED]/50' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Quick motivation check */}
        {step === 1 && (
          <div className="animate-fadeIn">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-semibold mb-4 text-[#1E1B4B]">Why Pilates?</h3>
              <p className="text-gray-600">Quick question to get started</p>
            </div>
            
            <div className="space-y-3">
              {[
                { value: 'Get fit', icon: Zap },
                { value: 'Feel better', icon: Sparkles },
                { value: 'Try something new', icon: Target },
              ].map(({ value, icon: Icon }) => (
                <label
                  key={value}
                  className={`flex items-center justify-between p-6 border-2 rounded-2xl cursor-pointer transition-all min-h-[44px] group ${
                    quizData.motivation === value
                      ? 'border-[#7C3AED] bg-gradient-to-r from-purple-50 to-indigo-50 shadow-lg scale-[1.02]'
                      : 'border-gray-200 hover:border-[#7C3AED]/50 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="motivation"
                    value={value}
                    checked={quizData.motivation === value}
                    onChange={(e) => setQuizData({ ...quizData, motivation: e.target.value })}
                    className="sr-only"
                    aria-label={value}
                  />
                  <div className="flex items-center gap-4">
                    <Icon className={`w-6 h-6 ${quizData.motivation === value ? 'text-[#7C3AED]' : 'text-gray-400'}`} />
                    <span className={`text-lg ${quizData.motivation === value ? 'text-[#1E1B4B] font-medium' : 'text-gray-700'}`}>
                      {value}
                    </span>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 transition-all ${
                    quizData.motivation === value 
                      ? 'border-[#7C3AED] bg-[#7C3AED]' 
                      : 'border-gray-300'
                  }`}>
                    {quizData.motivation === value && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                      </div>
                    )}
                  </div>
                </label>
              ))}
            </div>
            {errors.motivation && <p className="text-red-500 text-sm mt-4 text-center" role="alert" aria-live="polite">{errors.motivation}</p>}
            
            <button 
              type="button" 
              onClick={handleNext} 
              className="w-full mt-8 py-5 bg-[#7C3AED] text-white rounded-2xl hover:bg-[#7C3AED]/90 transition-all font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] min-h-[44px]"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 2: Contact info - streamlined */}
        {step === 2 && (
          <div className="animate-fadeIn">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-semibold mb-4 text-[#1E1B4B]">Almost there!</h3>
              <p className="text-gray-600">Enter your details to join</p>
            </div>
            
            <div className="space-y-5 mb-8">
              <div>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-6 py-5 border-2 rounded-2xl transition-all ${
                    errors.email ? 'border-red-500' : 'border-gray-200 focus:border-[#7C3AED]'
                  } focus:outline-none focus:ring-4 focus:ring-[#7C3AED]/10 min-h-[44px] text-lg placeholder:text-gray-400`}
                  placeholder="your@email.com"
                  value={quizData.email}
                  onChange={(e) => setQuizData({ ...quizData, email: e.target.value })}
                />
                {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-6 py-5 border-2 rounded-2xl transition-all ${
                    errors.name ? 'border-red-500' : 'border-gray-200 focus:border-[#7C3AED]'
                  } focus:outline-none focus:ring-4 focus:ring-[#7C3AED]/10 min-h-[44px] text-lg placeholder:text-gray-400`}
                  placeholder="Your name"
                  value={quizData.name}
                  onChange={(e) => setQuizData({ ...quizData, name: e.target.value })}
                />
                {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name}</p>}
              </div>
            </div>

            {errors.general && (
              <div className="mb-8 p-5 bg-red-50 border-l-4 border-red-500 rounded-lg">
                <p className="text-red-700 text-sm">{errors.general}</p>
              </div>
            )}
            
            <div className="flex gap-4">
              <button 
                type="button" 
                onClick={handleBack} 
                className="px-8 py-5 border-2 border-gray-300 text-gray-700 rounded-2xl hover:bg-gray-50 transition-all font-medium"
              >
                Back
              </button>
              <button 
                type="submit" 
                className="flex-1 py-5 bg-gradient-to-r from-[#7C3AED] to-[#1E1B4B] text-white rounded-2xl hover:opacity-90 transition-all font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Joining...' : 'Join the queue'}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
