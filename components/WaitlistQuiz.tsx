'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/button'

interface QuizData {
  location: string
  level: string
  timePreference: string
  goal: string
  name: string
  email: string
  consent: boolean
}

export default function WaitlistQuiz() {
  const [step, setStep] = useState(1)
  const [quizData, setQuizData] = useState<QuizData>({
    location: '',
    level: '',
    timePreference: '',
    goal: '',
    name: '',
    email: '',
    consent: false,
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const totalSteps = 5

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validateStep = (currentStep: number): boolean => {
    const newErrors: { [key: string]: string } = {}

    if (currentStep === 1 && !quizData.location) {
      newErrors.location = 'Vælg venligst en lokation'
    }
    if (currentStep === 2 && !quizData.level) {
      newErrors.level = 'Vælg venligst dit niveau'
    }
    if (currentStep === 3 && !quizData.timePreference) {
      newErrors.timePreference = 'Vælg venligst dit foretrukne tidspunkt'
    }
    if (currentStep === 4 && !quizData.goal) {
      newErrors.goal = 'Vælg venligst dit mål'
    }
    if (currentStep === 5) {
      if (!quizData.name.trim()) {
        newErrors.name = 'Indtast venligst dit navn'
      }
      if (!quizData.email.trim()) {
        newErrors.email = 'Indtast venligst din email'
      } else if (!validateEmail(quizData.email)) {
        newErrors.email = 'Indtast en gyldig email-adresse'
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
    
    if (!validateStep(5)) {
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
            location: quizData.location,
            level: quizData.level,
            timePreference: quizData.timePreference,
            goal: quizData.goal,
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

  const getRecommendation = () => {
    const recommendations: { [key: string]: string } = {
      'Begynder-Styrke': 'Nordic Flow 2×/uge om morgenen',
      'Begynder-Mobilitet': 'Stretch & Restore 2×/uge',
      'Let øvet-Styrke': 'Power Core 3×/uge',
      'Let øvet-Mobilitet': 'Nordic Flow + Stretch & Restore kombineret',
      'Udfordrende-Styrke': 'Power Core + Sweat 30 veksling',
      'Udfordrende-Mobilitet': 'Power Core 2×/uge + Stretch & Restore 1×/uge',
    }
    
    const key = `${quizData.level}-${quizData.goal.split(' ')[0]}`
    return recommendations[key] || 'Nordic Flow 2×/uge'
  }

  const getPersonalizedMessage = () => {
    const level = quizData.level.toLowerCase()
    const timePreference = quizData.timePreference.split('/')[0].toLowerCase()
    const pilatesType = quizData.goal.toLowerCase()
    
    let message = `Som ${level} der foretrækker at træne ${timePreference}, `
    
    if (pilatesType.includes('klassisk')) {
      message += 'vil du elske vores autentiske reformer setup med professionel on-screen vejledning.'
    } else if (pilatesType.includes('dynamisk')) {
      message += 'får du den perfekte blanding af cardio og styrke i vores intensive klasser.'
    } else if (pilatesType.includes('slow')) {
      message += 'kan du nyde den kontrollerede træning i dit eget tempo uden pres.'
    } else {
      message += 'får du gentle træning der passer til dine behov med fokus på sikkerhed.'
    }
    
    return message + ' Med 24/7 adgang og priser fra 39kr/time får du fleksibilitet uden det høje prisskilt.'
  }

  if (submitSuccess) {
    return (
      <div className="relative bg-white p-40 md:p-56 rounded-lg shadow-lg text-center max-w-2xl mx-auto overflow-hidden">
        {/* Animated gradient shader background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-coral via-[#C4A582] to-navy animate-gradient-shift"></div>
        </div>
        
        {/* Success icon with pulse animation */}
        <div className="relative">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-24 rounded-full bg-gradient-to-br from-coral to-[#C4A582] animate-scale-pulse">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        
        <h3 className="text-2xl font-medium mb-16 text-navy relative">Du er på listen!</h3>
        <p className="text-graphite/70 mb-32 text-lg relative">
          Vi kontakter dig når vi åbner, og du får din personlige plan med til introklassen.
        </p>
        <div className="bg-coral/10 border border-coral/20 rounded-lg p-24 mb-32 relative">
          <p className="text-sm text-graphite/80">
            <strong>Din anbefaling:</strong> {getRecommendation()}
          </p>
        </div>
        <p className="text-sm text-graphite/60 relative">
          Vi passer på dine data og sender kun relevante opdateringer.
        </p>
        
        <style jsx>{`
          @keyframes gradient-shift {
            0%, 100% {
              background-position: 0% 50%;
              transform: scale(1);
            }
            25% {
              background-position: 100% 50%;
              transform: scale(1.05);
            }
            50% {
              background-position: 100% 100%;
              transform: scale(1);
            }
            75% {
              background-position: 0% 100%;
              transform: scale(1.05);
            }
          }
          
          @keyframes scale-pulse {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(232, 116, 97, 0.4);
            }
            50% {
              transform: scale(1.05);
              box-shadow: 0 0 0 10px rgba(232, 116, 97, 0);
            }
          }
          
          .animate-gradient-shift {
            background-size: 400% 400%;
            animation: gradient-shift 8s ease infinite;
          }
          
          .animate-scale-pulse {
            animation: scale-pulse 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="bg-white p-32 md:p-48 rounded-lg shadow-lg max-w-xl mx-auto">
      {/* Progress bar */}
      <div className="mb-32">
        <div className="flex justify-between items-center mb-12">
          <p className="text-sm text-graphite/60">Trin {step} af {totalSteps}</p>
        </div>
        <div className="w-full h-2 bg-warm-gray rounded-full overflow-hidden">
          <div 
            className="h-full bg-coral transition-all duration-300 ease-out"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Location */}
        {step === 1 && (
          <div className="animate-fadeIn">
            <fieldset>
              <legend className="text-2xl font-medium mb-16 text-navy">Hvor vil du helst træne?</legend>
              <p className="text-graphite/70 mb-32">Vi åbner på Østerbro først, men vil gerne høre dine præferencer.</p>
              
              <div className="space-y-8" role="radiogroup" aria-labelledby="location-label">
                {['Østerbro', 'Frederiksberg', 'Vesterbro', 'Nørrebro', 'Andet'].map((loc) => (
                  <label
                    key={loc}
                    className={`flex items-center p-16 border-2 rounded-lg cursor-pointer transition-all min-h-[44px] ${
                      quizData.location === loc
                        ? 'border-coral bg-coral/5'
                        : 'border-fog hover:border-coral/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="location"
                      value={loc}
                      checked={quizData.location === loc}
                      onChange={(e) => setQuizData({ ...quizData, location: e.target.value })}
                      className="mr-12"
                      aria-label={`Vælg ${loc} som lokation`}
                    />
                    <span className="text-sm">{loc}</span>
                  </label>
                ))}
              </div>
              {errors.location && <p className="text-red-500 text-sm mt-12" role="alert" aria-live="polite">{errors.location}</p>}
            </fieldset>
            
            <Button 
              type="button" 
              onClick={handleNext} 
              className="w-full mt-32"
              size="lg"
            >
              Fortsæt
            </Button>
          </div>
        )}

        {/* Step 2: Level */}
        {step === 2 && (
          <div className="animate-fadeIn">
            <fieldset>
              <legend className="text-2xl font-medium mb-16 text-navy">Hvilket niveau passer til dig?</legend>
              <p className="text-graphite/70 mb-32">Vælg det niveau der føles mest komfortabelt.</p>
              
              <div className="space-y-8" role="radiogroup" aria-labelledby="level-label">
                {[
                  { value: 'Begynder', desc: 'Aldrig prøvet Pilates før' },
                  { value: 'Let øvet', desc: 'Har prøvet det et par gange' },
                  { value: 'Udfordrende', desc: 'Træner jævnligt' },
                ].map(({ value, desc }) => (
                  <label
                    key={value}
                    className={`flex items-start p-16 border-2 rounded-lg cursor-pointer transition-all min-h-[44px] ${
                      quizData.level === value
                        ? 'border-coral bg-coral/5'
                        : 'border-fog hover:border-coral/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="level"
                      value={value}
                      checked={quizData.level === value}
                      onChange={(e) => setQuizData({ ...quizData, level: e.target.value })}
                      className="mr-12 mt-2"
                      aria-label={`${value}: ${desc}`}
                    />
                    <div>
                      <div className="text-sm font-medium">{value}</div>
                      <div className="text-xs text-graphite/60">{desc}</div>
                    </div>
                  </label>
                ))}
              </div>
              {errors.level && <p className="text-red-500 text-sm mt-12" role="alert" aria-live="polite">{errors.level}</p>}
            </fieldset>
            
            <div className="flex gap-12 mt-32">
              <Button type="button" onClick={handleBack} variant="outline" className="flex-1">
                Tilbage
              </Button>
              <Button type="button" onClick={handleNext} className="flex-1">
                Fortsæt
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Time Preference */}
        {step === 3 && (
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-medium mb-16 text-navy">Hvornår træner du helst?</h3>
            <p className="text-graphite/70 mb-32">Vi tilbyder klasser hele dagen.</p>
            
            <div className="space-y-8">
              {[
                { value: 'Morgen/Formiddag (06-12)', icon: '🌅' },
                { value: 'Frokost/Eftermiddag (12-17)', icon: '📅' },
                { value: 'Aften/Nat (17+)', icon: '🌙' },
              ].map(({ value, icon }) => (
                <label
                  key={value}
                  className={`flex items-center p-16 border-2 rounded-lg cursor-pointer transition-all ${
                    quizData.timePreference === value
                      ? 'border-coral bg-coral/5'
                      : 'border-fog hover:border-coral/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="timePreference"
                    value={value}
                    checked={quizData.timePreference === value}
                    onChange={(e) => setQuizData({ ...quizData, timePreference: e.target.value })}
                    className="mr-12"
                  />
                  <span className="mr-8 text-xl">{icon}</span>
                  <span className="text-sm">{value}</span>
                </label>
              ))}
            </div>
            {errors.timePreference && <p className="text-red-500 text-sm mt-12">{errors.timePreference}</p>}
            
            <div className="flex gap-12 mt-32">
              <Button type="button" onClick={handleBack} variant="outline" className="flex-1">
                Tilbage
              </Button>
              <Button type="button" onClick={handleNext} className="flex-1">
                Fortsæt
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Pilates Type Preference */}
        {step === 4 && (
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-medium mb-16 text-navy">Hvilken type Pilates foretrækker du?</h3>
            <p className="text-graphite/70 mb-32">Vælg det der passer bedst til dig.</p>
            
            <div className="space-y-8">
              {[
                { value: 'Klassisk Reformer', icon: '🏋️' },
                { value: 'Dynamisk & Cardio', icon: '🔥' },
                { value: 'Slow & Kontrolleret', icon: '🧘' },
                { value: 'Rehabilitering & Gentle', icon: '🌿' },
              ].map(({ value, icon }) => (
                <label
                  key={value}
                  className={`flex items-center p-16 border-2 rounded-lg cursor-pointer transition-all ${
                    quizData.goal === value
                      ? 'border-coral bg-coral/5'
                      : 'border-fog hover:border-coral/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="goal"
                    value={value}
                    checked={quizData.goal === value}
                    onChange={(e) => setQuizData({ ...quizData, goal: e.target.value })}
                    className="mr-12"
                  />
                  <span className="mr-8 text-xl">{icon}</span>
                  <span className="text-sm">{value}</span>
                </label>
              ))}
            </div>
            {errors.goal && <p className="text-red-500 text-sm mt-12">{errors.goal}</p>}
            
            <div className="flex gap-12 mt-32">
              <Button type="button" onClick={handleBack} variant="outline" className="flex-1">
                Tilbage
              </Button>
              <Button type="button" onClick={handleNext} className="flex-1">
                Fortsæt
              </Button>
            </div>
          </div>
        )}

        {/* Step 5: Personal Info & Recommendation */}
        {step === 5 && (
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-medium mb-16 text-navy">Hvorfor Nordic Pilates er perfekt til dig</h3>
            
            {/* Personalized message */}
            <div className="bg-coral/10 border border-coral/20 rounded-lg p-24 mb-32">
              <p className="text-graphite/80 leading-relaxed">{getPersonalizedMessage()}</p>
            </div>
            
            {/* Contact info */}
            <div className="space-y-16 mb-24">
              <div>
                <label htmlFor="name" className="block mb-8 font-medium text-sm">
                  Dit navn
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full h-12 px-16 border-2 rounded-lg transition-colors ${
                    errors.name ? 'border-red-500' : 'border-fog focus:border-coral'
                  } focus:outline-none`}
                  value={quizData.name}
                  onChange={(e) => setQuizData({ ...quizData, name: e.target.value })}
                />
                {errors.name && <p className="text-red-500 text-sm mt-8">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block mb-8 font-medium text-sm">
                  Din email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full h-12 px-16 border-2 rounded-lg transition-colors ${
                    errors.email ? 'border-red-500' : 'border-fog focus:border-coral'
                  } focus:outline-none`}
                  value={quizData.email}
                  onChange={(e) => setQuizData({ ...quizData, email: e.target.value })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-8">{errors.email}</p>}
              </div>
            </div>

            {errors.general && (
              <div className="mb-24 p-16 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm">{errors.general}</p>
              </div>
            )}
            
            <div className="flex gap-12">
              <Button type="button" onClick={handleBack} variant="outline" className="flex-1">
                Tilbage
              </Button>
              <Button 
                type="submit" 
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sender...' : 'Tilmeld'}
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
