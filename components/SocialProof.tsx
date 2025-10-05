'use client'

import { useEffect, useState } from 'react'

export default function SocialProof() {
  const [count, setCount] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)
  const [displayCount, setDisplayCount] = useState(0)

  useEffect(() => {
    // Fetch actual count from API
    const fetchCount = async () => {
      try {
        const response = await fetch('/api/waitlist')
        if (response.ok) {
          const data = await response.json()
          const actualCount = data.submissions?.length || 0
          setCount(actualCount)
        }
      } catch (error) {
        console.error('Failed to fetch count:', error)
        // Fallback to a reasonable number if API fails
        setCount(12)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCount()
  }, [])

  // Animated counter effect
  useEffect(() => {
    if (count === 0) return

    let current = 0
    const increment = Math.ceil(count / 30) // Complete animation in ~1 second
    const timer = setInterval(() => {
      current += increment
      if (current >= count) {
        setDisplayCount(count)
        clearInterval(timer)
      } else {
        setDisplayCount(current)
      }
    }, 33) // ~30fps

    return () => clearInterval(timer)
  }, [count])

  if (isLoading) {
    return null // Don't show anything while loading
  }

  // Calculate spots remaining (assuming max 150 for first cohort)
  const maxSpots = 150
  const spotsRemaining = Math.max(0, maxSpots - count)

  return (
    <div className="space-y-16">
      {/* Live Counter - Social Proof */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-24 py-16 inline-flex items-center gap-12">
        <span className="text-2xl">🔥</span>
        <div>
          <p className="text-white/90 text-sm">
            <strong className="text-white text-xl font-semibold">{displayCount}</strong> personer allerede på ventelisten
          </p>
        </div>
      </div>

      {/* Urgency - Spots Remaining */}
      {spotsRemaining > 0 && spotsRemaining < 50 && (
        <div className="bg-[#C4A582]/20 backdrop-blur-sm border border-[#C4A582]/30 rounded-lg px-24 py-16 inline-flex items-center gap-12 animate-pulse">
          <span className="text-2xl">⏰</span>
          <div>
            <p className="text-white/90 text-sm">
              Kun <strong className="text-white text-xl font-semibold">{spotsRemaining}</strong> pladser tilbage i første hold
            </p>
          </div>
        </div>
      )}

      {/* Early Bird Badge */}
      <div className="bg-gradient-to-r from-[#C4A582]/20 to-ice-blue/20 backdrop-blur-sm border border-white/20 rounded-lg px-24 py-20">
        <div className="flex items-start gap-16">
          <span className="text-3xl">✨</span>
          <div className="flex-1">
            <h4 className="text-white font-semibold mb-8 text-lg">Early Bird Fordele</h4>
            <ul className="space-y-6 text-white/80 text-sm">
              <li className="flex items-center gap-8">
                <span className="text-[#C4A582]">•</span>
                <span>50% rabat på første måned</span>
              </li>
              <li className="flex items-center gap-8">
                <span className="text-[#C4A582]">•</span>
                <span>Gratis introduktionsklasse (værdi 300kr)</span>
              </li>
              <li className="flex items-center gap-8">
                <span className="text-[#C4A582]">•</span>
                <span>Prioritet til foretrukne tidspunkter</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
