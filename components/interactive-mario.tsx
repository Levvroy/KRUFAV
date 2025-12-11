"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface InteractiveMarioProps {
  className?: string
}

export default function InteractiveMario({ className = "" }: InteractiveMarioProps) {
  const [position, setPosition] = useState({ x: 20, y: 80 })
  const [isJumping, setIsJumping] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const [showSpeech, setShowSpeech] = useState(false)
  const [speechText, setSpeechText] = useState("")

  const speeches = ["Let's-a go!", "Mama mia!", "Here we go!", "Yahoo!", "It's-a me!", "Wahoo!"]

  const handleClick = () => {
    setIsJumping(true)
    setSpeechText(speeches[Math.floor(Math.random() * speeches.length)])
    setShowSpeech(true)
    setTimeout(() => setIsJumping(false), 500)
    setTimeout(() => setShowSpeech(false), 2000)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newX = prev.x + (direction === "right" ? 2 : -2)
        if (newX > 85) {
          setDirection("left")
          return { ...prev, x: 85 }
        }
        if (newX < 5) {
          setDirection("right")
          return { ...prev, x: 5 }
        }
        return { ...prev, x: newX }
      })
    }, 100)

    return () => clearInterval(interval)
  }, [direction])

  return (
    <motion.div
      className={`fixed z-30 cursor-pointer ${className}`}
      style={{ left: `${position.x}%`, bottom: `${position.y}px` }}
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      animate={isJumping ? { y: [0, -40, 0] } : { y: [0, -3, 0] }}
      transition={isJumping ? { duration: 0.5 } : { duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
    >
      {/* Speech bubble */}
      <AnimatePresence>
        {showSpeech && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.8 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
          >
            <div className="bg-white px-3 py-1.5 rounded-lg shadow-lg border-2 border-gray-200 relative">
              <span className="font-[var(--font-pixel)] text-xs text-gray-800">{speechText}</span>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mario character */}
      <div className="w-12 h-16" style={{ transform: direction === "left" ? "scaleX(-1)" : "scaleX(1)" }}>
        <svg viewBox="0 0 40 52" className="w-full h-full">
          {/* Hat */}
          <ellipse cx="20" cy="6" rx="10" ry="5" fill="#E52521" />
          <rect x="8" y="5" width="24" height="8" rx="2" fill="#E52521" />
          <rect x="6" y="11" width="28" height="3" rx="1" fill="#E52521" />

          {/* Face */}
          <ellipse cx="20" cy="20" rx="10" ry="9" fill="#FFD8B0" />

          {/* Eyes */}
          <ellipse cx="15" cy="18" rx="2.5" ry="3" fill="white" />
          <ellipse cx="25" cy="18" rx="2.5" ry="3" fill="white" />
          <circle cx="16" cy="18" r="1.5" fill="#000" />
          <circle cx="26" cy="18" r="1.5" fill="#000" />

          {/* Nose */}
          <ellipse cx="20" cy="22" rx="4" ry="3" fill="#FFD8B0" />

          {/* Mustache */}
          <path d="M10,26 Q15,28 20,25 Q25,28 30,26" fill="#4A2C0A" />
          <ellipse cx="12" cy="26" rx="3" ry="2" fill="#4A2C0A" />
          <ellipse cx="28" cy="26" rx="3" ry="2" fill="#4A2C0A" />

          {/* Sideburns */}
          <rect x="8" y="16" width="3" height="8" fill="#4A2C0A" rx="1" />
          <rect x="29" y="16" width="3" height="8" fill="#4A2C0A" rx="1" />

          {/* Body/Shirt */}
          <rect x="10" y="28" width="20" height="10" fill="#E52521" rx="2" />

          {/* Overalls */}
          <rect x="8" y="36" width="24" height="12" fill="#2563EB" rx="2" />
          <rect x="14" y="32" width="4" height="8" fill="#2563EB" />
          <rect x="22" y="32" width="4" height="8" fill="#2563EB" />

          {/* Overall buttons */}
          <circle cx="16" cy="38" r="2" fill="#FFD700" />
          <circle cx="24" cy="38" r="2" fill="#FFD700" />

          {/* Shoes */}
          <ellipse cx="12" cy="50" rx="6" ry="3" fill="#4A2C0A" />
          <ellipse cx="28" cy="50" rx="6" ry="3" fill="#4A2C0A" />
        </svg>
      </div>
    </motion.div>
  )
}
