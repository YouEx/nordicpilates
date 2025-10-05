'use client'

import { useState, FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  consent: boolean
}

interface FormErrors {
  name?: string
  email?: string
  consent?: string
  general?: string
}

export default function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    consent: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [isDuplicate, setIsDuplicate] = useState(false)

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Venligst indtast dit navn'
    } else if (formData.name.trim().length > 80) {
      newErrors.name = 'Navnet er for langt (max 80 tegn)'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Venligst indtast din email'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Venligst indtast en gyldig email-adresse'
    }

    if (!formData.consent) {
      newErrors.consent = 'Du skal give samtykke for at fortsætte'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setErrors({})
    setIsDuplicate(false)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          locale: 'da',
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({ name: '', email: '', consent: false })
      } else if (response.status === 409) {
        setIsDuplicate(true)
      } else {
        setErrors({ general: data.message || 'Noget gik galt. Prøv igen om lidt.' })
      }
    } catch (error) {
      setErrors({ general: 'Noget gik galt. Prøv igen om lidt.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="bg-white p-48 rounded-default shadow-subtle text-center">
        <div className="text-5xl mb-24">✓</div>
        <h3 className="mb-16">Tak for din tilmelding!</h3>
        <p className="text-graphite/70 mb-24">
          Du er nu på ventelisten og vil blive kontaktet, når vi åbner.
        </p>
        <p className="text-sm text-graphite/60">
          Vi passer på dine data og sender dig kun relevante opdateringer.
        </p>
      </div>
    )
  }

  if (isDuplicate) {
    return (
      <div className="bg-white p-48 rounded-default shadow-subtle text-center">
        <div className="text-5xl mb-24">👋</div>
        <h3 className="mb-16">Du er allerede på listen!</h3>
        <p className="text-graphite/70 mb-24">
          Vi har allerede din tilmelding og kontakter dig snart.
        </p>
        <button
          onClick={() => setIsDuplicate(false)}
          className="text-graphite/60 hover:text-graphite transition-colors text-sm"
        >
          ← Tilbage til formularen
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-32 md:p-48 rounded-default shadow-subtle">
      <div className="mb-32">
        <label htmlFor="name" className="block mb-8 font-medium">
          Navn
        </label>
        <input
          type="text"
          id="name"
          className={`input-field ${errors.name ? 'border-red-500' : ''}`}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-sm mt-8" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div className="mb-32">
        <label htmlFor="email" className="block mb-8 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          className={`input-field ${errors.email ? 'border-red-500' : ''}`}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-sm mt-8" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div className="mb-32">
        <label className="flex items-start gap-16 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-4 flex-shrink-0"
            style={{ width: '20px', height: '20px' }}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? 'consent-error' : undefined}
          />
          <span className="text-sm leading-relaxed">
            Jeg giver samtykke til at modtage nyheder fra Nordic Pilates.{' '}
            <a href="/privacy" className="underline hover:text-ice-blue transition-colors">
              Læs vores privatlivspolitik
            </a>
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="text-red-500 text-sm mt-8" role="alert">
            {errors.consent}
          </p>
        )}
      </div>

      {errors.general && (
        <div className="mb-24 p-16 bg-red-50 border border-red-200 rounded-default" role="alert">
          <p className="text-red-700 text-sm">{errors.general}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full"
      >
        {isSubmitting ? 'Tilmelder...' : 'Tilmeld mig ventelisten'}
      </button>

      <p className="text-xs text-graphite/50 text-center mt-24">
        Vi passer på dine data og sender kun relevante opdateringer.
      </p>
    </form>
  )
}
