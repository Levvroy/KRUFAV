"use client"

import { motion } from "framer-motion"

interface TapeElementProps {
  rotation?: number
  variant?: "washi" | "masking" | "scotch"
  className?: string
}

export default function TapeElement({ rotation = 0, variant = "washi", className = "" }: TapeElementProps) {
  const colors = {
    washi: "bg-pink-200/70",
    masking: "bg-amber-100/80",
    scotch: "bg-yellow-100/60",
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`w-12 md:w-16 h-4 md:h-5 ${colors[variant]} shadow-sm ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        clipPath: "polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)",
      }}
    >
      {/* Tape texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)",
        }}
      />
    </motion.div>
  )
}
