'use client'

import { useEffect, useRef, useState } from 'react'

export default function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasVideo, setHasVideo] = useState(false)
  const [hasImage, setHasImage] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let mounted = true

    async function checkMedia() {
      try {
        // Check for video first
        const videoResponse = await fetch('/studio.mp4', { method: 'HEAD' })
        if (mounted && videoResponse.ok) {
          setHasVideo(true)
          setIsLoading(false)
          return
        }

        // Check for bg.png (new background image)
        const bgResponse = await fetch('/bg.png', { method: 'HEAD' })
        if (mounted && bgResponse.ok) {
          setHasImage(true)
          setIsLoading(false)
          return
        }

        // Fallback to studio.jpg
        const imageResponse = await fetch('/studio.jpg', { method: 'HEAD' })
        if (mounted && imageResponse.ok) {
          setHasImage(true)
        }
      } catch (error) {
        console.log('No media files found, using gradient fallback')
      } finally {
        if (mounted) {
          setIsLoading(false)
        }
      }
    }

    checkMedia()

    return () => {
      mounted = false
    }
  }, [])

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrollY(scrollPosition)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Play video when loaded
  useEffect(() => {
    if (hasVideo && videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay prevented:', err)
      })
    }
  }, [hasVideo])

  // Calculate parallax transform (slower scroll = 0.5x speed)
  const parallaxOffset = scrollY * 0.5

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {hasVideo && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: `translate3d(0, ${parallaxOffset}px, 0)`,
            willChange: 'transform'
          }}
          onLoadedData={() => console.log('Video loaded successfully')}
          onError={(e) => {
            console.error('Video failed to load:', e)
            setHasVideo(false)
            setIsLoading(false)
          }}
        >
          <source src="/studio.mp4" type="video/mp4" />
        </video>
      )}
      
      {!hasVideo && hasImage && (
        <div 
          className="absolute inset-0 w-full h-[120vh] bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/bg.png)',
            transform: `translate3d(0, ${parallaxOffset}px, 0)`,
            willChange: 'transform'
          }}
        />
      )}
      
      {!hasVideo && !hasImage && !isLoading && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-graphite via-graphite/95 to-graphite/90"
          style={{
            transform: `translate3d(0, ${parallaxOffset}px, 0)`,
            willChange: 'transform'
          }}
        >
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1),transparent_50%)]"></div>
          
          {/* Developer helper message (only in dev mode) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="absolute bottom-32 left-1/2 -translate-x-1/2 text-white/40 text-sm text-center px-24">
              <p>💡 Add <code className="bg-white/10 px-8 py-4 rounded">public/bg.png</code> or <code className="bg-white/10 px-8 py-4 rounded">public/studio.mp4</code></p>
              <p className="text-xs mt-8">Background image not found</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
