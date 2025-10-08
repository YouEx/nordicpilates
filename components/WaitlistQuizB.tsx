'use client'

import { useState, FormEvent } from 'react'
import { Mountain, Waves, Snowflake } from 'lucide-react'

// VARIANT B - Scandinavian "Quiet Strength" Style
// Beige #FEFBF3, Fjord Blue #5B7C99, Slate Gray #6B7280
// Minimal, confident, centered

interface QuizData {
  focus: string
  commitment: string
  name: string
  email: string
}

export default function WaitlistQuizB() {
  const [step, setStep] = useState(1)
  const [quizData, setQuizData] = useState<QuizData>({
    focus: '',
    commitment: '',
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

    if (currentStep === 1 && !quizData.focus) {
      newErrors.focus = 'Vælg dit fokusområde'
    }
    if (currentStep === 2 && !quizData.commitment) {
      newErrors.commitment = 'Vælg din tilgang'
    }
    if (currentStep === 3) {
      if (!quizData.name.trim()) {
        newErrors.name = 'Indtast dit navn'
      }
      if (!quizData.email.trim()) {
        newErrors.email = 'Indtast din email'
      } else if (!validateEmail(quizData.email)) {
        newErrors.email = 'Ugyldig email-adresse'
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
          locale: 'da',
          preferences: {
            variant: 'B',
            focus: quizData.focus,
            commitment: quizData.commitment,
          },
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitSuccess(true)
      } else {
        setErrors({ general: data.message || 'Noget gik galt. Prøv igen.' })
      }
    } catch (error) {
      setErrors({ general: 'Noget gik galt. Prøv igen.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="bg-[#FEFBF3] p-12 md:p-16 rounded-lg shadow-sm text-center max-w-md mx-auto border border-[#5B7C99]/10">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[#5B7C99]">
          <Mountain className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-2xl font-normal mb-4 text-[#5B7C99] tracking-tight">Velkommen til holdet</h3>
        <p className="text-[#6B7280] mb-6 leading-relaxed">
          Vi kontakter dig når studierne åbner.
        </p>
        
        <div className="bg-[#5B7C99]/5 rounded-lg p-5 mb-6 border border-[#5B7C99]/10">
          <p className="text-sm text-[#5B7C99]">
            Din plads er reserveret
          </p>
        </div>
        
        <p className="text-xs text-[#6B7280]/60">
          Ingen spam · Kun det vigtigste
        </p>
      </div>
    )
  }

  return (
    <div className="bg-[#FEFBF3] p-10 md:p-12 rounded-lg shadow-sm max-w-md mx-auto border border-[#5B7C99]/10">
      {/* Minimalist Progress */}
      <div className="mb-8">
        <div className="text-center text-sm text-[#6B7280] mb-3">
          {step} / {totalSteps}
        </div>
        <div className="w-full h-1 bg-[#E8DED0] rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#5B7C99] transition-all duration-500"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Focus */}
        {step === 1 && (
          <div className="animate-fadeIn">
            <div className="mb-8">
              <h3 className="text-2xl font-normal mb-2 text-[#5B7C99]">Dit fokus</h3>
              <p className="text-[#6B7280] text-sm">Hvad vil du opnå?</p>
            </div>
            
            <div className="space-y-3">
              {[
                { value: 'Flow', icon: Waves, desc: 'Bevægelse og balance' },
                { value: 'Foundation', icon: Mountain, desc: 'Styrke og stabilitet' },
                { value: 'Clarity', icon: Snowflake, desc: 'Ro og fokus' },
              ].map(({ value, icon: Icon, desc }) => (
                <label
                  key={value}
                  className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all min-h-[44px] ${
                    quizData.focus === value
                      ? 'border-[#5B7C99] bg-[#5B7C99]/5'
                      : 'border-[#E8DED0] hover:border-[#5B7C99]/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="focus"
                    value={value}
                    checked={quizData.focus === value}
                    onChange={(e) => setQuizData({ ...quizData, focus: e.target.value })}
                    className="sr-only"
                    aria-label={`${value}: ${desc}`}
                  />
                  <Icon className="w-5 h-5 mr-3 text-[#5B7C99]" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-[#5B7C99]">{value}</div>
                    <div className="text-xs text-[#6B7280]">{desc}</div>
                  </div>
                  <div className={`w-4 h-4 rounded-sm border-2 transition-all ${
                    quizData.focus === value 
                      ? 'border-[#5B7C99] bg-[#5B7C99]' 
                      : 'border-[#6B7280]/30'
                  }`}>
                    {quizData.focus === value && (
                      <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </label>
              ))}
            </div>
            {errors.focus && <p className="text-red-500 text-sm mt-3 text-center" role="alert" aria-live="polite">{errors.focus}</p>}
            
            <button 
              type="button" 
              onClick={handleNext} 
              className="w-full mt-6 py-3 bg-[#5B7C99] text-white rounded-lg hover:bg-[#5B7C99]/90 transition-all text-sm font-medium min-h-[44px]"
            >
              Næste
            </button>
          </div>
        )}

        {/* Step 2: Commitment */}
        {step === 2 && (
          <div className="animate-fadeIn">
            <div className="mb-8">
              <h3 className="text-2xl font-normal mb-2 text-[#5B7C99]">Din tilgang</h3>
              <p className="text-[#6B7280] text-sm">Hvor ofte vil du træne?</p>
            </div>
            
            <div className="space-y-3">
              {[
                { value: 'Steady', label: '2-3 gange/uge' },
                { value: 'Committed', label: '4-5 gange/uge' },
                { value: 'All-in', label: 'Dagligt' },
              ].map(({ value, label }) => (
                <label
                  key={value}
                  className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all min-h-[44px] ${
                    quizData.commitment === value
                      ? 'border-[#5B7C99] bg-[#5B7C99]/5'
                      : 'border-[#E8DED0] hover:border-[#5B7C99]/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="commitment"
                    value={value}
                    checked={quizData.commitment === value}
                    onChange={(e) => setQuizData({ ...quizData, commitment: e.target.value })}
                    className="sr-only"
                    aria-label={label}
                  />
                  <div>
                    <div className="text-sm font-medium text-[#5B7C99]">{value}</div>
                    <div className="text-xs text-[#6B7280]">{label}</div>
                  </div>
                  <div className={`w-4 h-4 rounded-sm border-2 transition-all ${
                    quizData.commitment === value 
                      ? 'border-[#5B7C99] bg-[#5B7C99]' 
                      : 'border-[#6B7280]/30'
                  }`}>
                    {quizData.commitment === value && (
                      <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </label>
              ))}
            </div>
            {errors.commitment && <p className="text-red-500 text-sm mt-3 text-center" role="alert" aria-live="polite">{errors.commitment}</p>}
            
            <div className="flex gap-3 mt-6">
              <button 
                type="button" 
                onClick={handleBack} 
                className="flex-1 py-3 border border-[#5B7C99]/30 text-[#5B7C99] rounded-lg hover:bg-[#5B7C99]/5 transition-all text-sm font-medium"
              >
                Tilbage
              </button>
              <button 
                type="button" 
                onClick={handleNext} 
                className="flex-1 py-3 bg-[#5B7C99] text-white rounded-lg hover:bg-[#5B7C99]/90 transition-all text-sm font-medium"
              >
                Næste
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Personal Info */}
        {step === 3 && (
          <div className="animate-fadeIn">
            <div className="mb-8">
              <h3 className="text-2xl font-normal mb-2 text-[#5B7C99]">Sidste trin</h3>
              <p className="text-[#6B7280] text-sm">Vi holder dig opdateret</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm text-[#5B7C99]">
                  Navn
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 border rounded-lg transition-colors ${
                    errors.name ? 'border-red-500' : 'border-[#E8DED0] focus:border-[#5B7C99]'
                  } focus:outline-none focus:ring-1 focus:ring-[#5B7C99] min-h-[44px] text-sm`}
                  placeholder="Dit fulde navn"
                  value={quizData.name}
                  onChange={(e) => setQuizData({ ...quizData, name: e.target.value })}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm text-[#5B7C99]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 border rounded-lg transition-colors ${
                    errors.email ? 'border-red-500' : 'border-[#E8DED0] focus:border-[#5B7C99]'
                  } focus:outline-none focus:ring-1 focus:ring-[#5B7C99] min-h-[44px] text-sm`}
                  placeholder="din@email.dk"
                  value={quizData.email}
                  onChange={(e) => setQuizData({ ...quizData, email: e.target.value })}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            {errors.general && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm">{errors.general}</p>
              </div>
            )}
            
            <div className="flex gap-3">
              <button 
                type="button" 
                onClick={handleBack} 
                className="flex-1 py-3 border border-[#5B7C99]/30 text-[#5B7C99] rounded-lg hover:bg-[#5B7C99]/5 transition-all text-sm font-medium"
              >
                Tilbage
              </button>
              <button 
                type="submit" 
                className="flex-1 py-3 bg-[#5B7C99] text-white rounded-lg hover:bg-[#5B7C99]/90 transition-all text-sm font-medium disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sender...' : 'Tilmeld'}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
