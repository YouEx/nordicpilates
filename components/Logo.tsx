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
      <Image
        src="/nordic-pilates.png"
        alt="Nordic Pilates"
        width={width}
        height={height}
        priority
        className="object-contain"
      />
    </div>
  )
}
