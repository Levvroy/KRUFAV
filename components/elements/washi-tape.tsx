"use client"

import { motion } from "framer-motion"

interface WashiTapeProps {
  pattern?: "dots" | "stripes" | "hearts" | "stars"
  color?: "pink" | "blue" | "green" | "yellow"
  rotation?: number
  className?: string
}

export default function WashiTape({ pattern = "dots", color = "pink", rotation = 0, className = "" }: WashiTapeProps) {
  const colors = {
    pink: { bg: "bg-pink-200", pattern: "bg-pink-400" },
    blue: { bg: "bg-blue-200", pattern: "bg-blue-400" },
    green: { bg: "bg-green-200", pattern: "bg-green-400" },
    yellow: { bg: "bg-yellow-200", pattern: "bg-yellow-400" },
  }

  const selectedColor = colors[color]

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`h-6 ${selectedColor.bg} opacity-70 overflow-hidden ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        clipPath: "polygon(0% 0%, 100% 0%, 98% 100%, 2% 100%)",
      }}
    >
      {/* Pattern overlay */}
      <div className="absolute inset-0 flex items-center justify-around">
        {pattern === "dots" &&
          [...Array(8)].map((_, i) => (
            <div key={i} className={`w-2 h-2 ${selectedColor.pattern} rounded-full opacity-60`} />
          ))}
        {pattern === "stripes" &&
          [...Array(12)].map((_, i) => <div key={i} className={`w-1 h-full ${selectedColor.pattern} opacity-40`} />)}
        {pattern === "hearts" &&
          [...Array(5)].map((_, i) => (
            <span key={i} className="text-xs opacity-50">
              ♥
            </span>
          ))}
        {pattern === "stars" &&
          [...Array(6)].map((_, i) => (
            <span key={i} className="text-xs opacity-50">
              ★
            </span>
          ))}
      </div>

      {/* Torn edge effect */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 5px)",
        }}
      />
    </motion.div>
  )
}
