"use client"

export default function AtomIcon() {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      {/* Outer orbit */}
      <div className="absolute inset-0 border-2 border-white rounded-full animate-spin-slow opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Middle orbit */}
      <div className="absolute inset-2 border border-white rounded-full transform rotate-45 animate-spin-reverse opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Inner orbit */}
      <div className="absolute inset-2 border border-white rounded-full transform -rotate-45 animate-spin-slow opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Nucleus - Green center */}
      <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-lime-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse group-hover:bg-lime-300 group-hover:scale-125 transition-all duration-300"></div>
    </div>
  )
}
