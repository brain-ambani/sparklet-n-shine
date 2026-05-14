import React from 'react'

interface LogoProps {
  className?: string
  light?: boolean
  layout?: 'horizontal' | 'stacked'
}

export function Logo({ className = "", light = false, layout = 'horizontal' }: LogoProps) {
  const primaryColor = light ? "#ffffff" : "#1e3a8a" // white or blue-900
  const accentColor = "#eab308" // yellow-500
  
  const Icon = (
    <svg viewBox="0 0 100 60" className="h-full w-auto drop-shadow-sm" style={{ minWidth: '60px' }}>
      {/* Chimney */}
      <rect x="25" y="20" width="7" height="15" fill={primaryColor} />
      <rect x="23" y="17" width="11" height="4" fill={primaryColor} />
      
      {/* Roof (Chevron) */}
      <path d="M 8 45 L 50 15 L 92 45 L 98 40 L 50 6 L 2 40 Z" fill={primaryColor} />
      
      {/* Window (4 squares) */}
      <rect x="44" y="27" width="5" height="5" fill={primaryColor} />
      <rect x="51" y="27" width="5" height="5" fill={primaryColor} />
      <rect x="44" y="34" width="5" height="5" fill={primaryColor} />
      <rect x="51" y="34" width="5" height="5" fill={primaryColor} />
      
      {/* Gold Stars */}
      {/* Top Right (Large) */}
      <path d="M 68 0 Q 70 8 78 10 Q 70 12 68 20 Q 66 12 58 10 Q 66 8 68 0 Z" fill={accentColor} />
      {/* Top Left (Small) */}
      <path d="M 33 5 Q 34 9 38 10 Q 34 11 33 15 Q 32 11 28 10 Q 32 9 33 5 Z" fill={accentColor} />
      {/* Right (Small) */}
      <path d="M 85 20 Q 86 24 90 25 Q 86 26 85 30 Q 84 26 80 25 Q 84 24 85 20 Z" fill={accentColor} />
    </svg>
  )

  if (layout === 'horizontal') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="h-8 md:h-10">{Icon}</div>
        <div className="flex flex-col justify-center">
          <span className={`text-lg md:text-xl font-bold tracking-widest leading-none ${light ? 'text-white' : 'text-[#1e3a8a]'}`} style={{ fontFamily: "Georgia, serif" }}>SPARKLET</span>
          <span className="text-[9px] md:text-[11px] font-bold tracking-widest leading-none text-yellow-500 mt-1" style={{ fontFamily: "Georgia, serif" }}>&amp; SHINE CO.</span>
        </div>
      </div>
    )
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="h-16 md:h-20 mb-3">{Icon}</div>
      <div className="flex flex-col items-center">
        <span className={`text-2xl md:text-3xl font-bold tracking-widest ${light ? 'text-white' : 'text-[#1e3a8a]'}`} style={{ fontFamily: "Georgia, serif" }}>SPARKLET</span>
        <span className="text-[11px] md:text-sm font-bold tracking-widest text-yellow-500 mt-1" style={{ fontFamily: "Georgia, serif" }}>&amp; SHINE CO.</span>
        <div className="mt-2 h-[2px] w-full bg-yellow-500"></div>
      </div>
    </div>
  )
}
