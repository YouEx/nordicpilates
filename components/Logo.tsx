import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizes = {
  sm: { width: 120, height: 80 },
  md: { width: 160, height: 107 },
  lg: { width: 200, height: 133 },
  xl: { width: 280, height: 187 },
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const { width, height } = sizes[size]
  
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {/* SVG Logo inline for better control */}
      <svg
        viewBox="0 0 440 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-label="Nordic Pilates"
      >
        {/* "nordic" in coral handwritten style */}
        <text
          x="60"
          y="130"
          fontFamily="'Brush Script MT', cursive"
          fontSize="100"
          fill="#E87461"
          style={{ fontStyle: 'italic', fontWeight: 400 }}
        >
          nordic
        </text>
        
        {/* "PILATES" in navy bold caps */}
        <text
          x="60"
          y="230"
          fontFamily="'Arial Black', sans-serif"
          fontSize="80"
          fill="#1B2942"
          fontWeight="900"
          letterSpacing="8"
        >
          PILATES
        </text>
        
        {/* Coral underline */}
        <path
          d="M 70 260 Q 220 270, 370 260"
          stroke="#E87461"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  )
}
