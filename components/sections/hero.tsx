import { HeroDetails } from './heroDetails'

export function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">

      {/* Soft Purple Base */}
      <div className="absolute inset-0 bg-[#f3e8ff]/50" />

      {/* Blue Glow (Top Left) */}
      <div className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-blue-300 opacity-30 blur-[120px]" />

      {/* Purple Glow (Center Right) */}
      <div className="absolute -right-[5%] top-[20%] h-[600px] w-[600px] rounded-full bg-purple-400 opacity-40 blur-[140px]" />

      {/* Content — sits above glows without needing isolate */}
      <div className="relative z-10">
        <HeroDetails />
      </div>
    </div>
  )
}