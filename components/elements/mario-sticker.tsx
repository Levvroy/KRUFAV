"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface MarioStickerProps {
  type: "mushroom" | "star" | "coin" | "flower" | "block" | "pipe" | "goomba" | "shell"
  className?: string
}

export default function MarioSticker({ type, className = "" }: MarioStickerProps) {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <motion.div
      whileHover={{
        scale: 1.25,
        rotate: [0, -10, 10, -5, 5, 0],
        transition: { rotate: { duration: 0.5 } },
      }}
      whileTap={{ scale: 0.85 }}
      animate={isClicked ? { y: [0, -20, 0], transition: { duration: 0.3 } } : {}}
      onClick={() => {
        setIsClicked(true)
        setTimeout(() => setIsClicked(false), 300)
      }}
      className={`relative cursor-pointer ${className}`}
      style={{ filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.3))" }}
    >
      <StickerContent type={type} />

      {/* Click sparkle effect */}
      {isClicked && (
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-full h-full bg-yellow-300 rounded-full" />
        </motion.div>
      )}
    </motion.div>
  )
}

function StickerContent({ type }: { type: MarioStickerProps["type"] }) {
  switch (type) {
    case "mushroom":
      return (
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <ellipse cx="20" cy="30" rx="10" ry="7" fill="#F5DEB3" />
          <ellipse cx="20" cy="18" rx="14" ry="12" fill="#E52521" />
          <circle cx="13" cy="16" r="4" fill="white" />
          <circle cx="27" cy="16" r="4" fill="white" />
          <circle cx="20" cy="22" r="3" fill="white" />
          <ellipse cx="16" cy="32" rx="1.5" ry="2.5" fill="#2D1B0E" />
          <ellipse cx="24" cy="32" rx="1.5" ry="2.5" fill="#2D1B0E" />
        </svg>
      )
    case "star":
      return (
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <polygon
            points="20,3 24,14 36,14 26,22 30,34 20,27 10,34 14,22 4,14 16,14"
            fill="#FFD700"
            stroke="#DAA520"
            strokeWidth="1.5"
          />
          <ellipse cx="14" cy="17" rx="2" ry="2.5" fill="#2D1B0E" />
          <ellipse cx="26" cy="17" rx="2" ry="2.5" fill="#2D1B0E" />
          <path d="M16,22 Q20,25 24,22" fill="none" stroke="#2D1B0E" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case "coin":
      return (
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <circle cx="20" cy="20" r="15" fill="#FFD700" stroke="#DAA520" strokeWidth="2" />
          <circle cx="20" cy="20" r="11" fill="none" stroke="#FFA500" strokeWidth="1" />
          <ellipse cx="20" cy="20" rx="6" ry="10" fill="none" stroke="#DAA520" strokeWidth="2" />
          <ellipse cx="16" cy="20" rx="1" ry="8" fill="#FFA500" opacity="0.5" />
        </svg>
      )
    case "flower":
      return (
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <circle cx="20" cy="8" r="5" fill="#FF6B35" />
          <circle cx="30" cy="14" r="5" fill="#FF6B35" />
          <circle cx="28" cy="26" r="5" fill="#FF6B35" />
          <circle cx="12" cy="26" r="5" fill="#FF6B35" />
          <circle cx="10" cy="14" r="5" fill="#FF6B35" />
          <circle cx="20" cy="18" r="7" fill="#FFD700" stroke="#FFA500" strokeWidth="1" />
          <circle cx="17" cy="16" r="1.5" fill="#2D1B0E" />
          <circle cx="23" cy="16" r="1.5" fill="#2D1B0E" />
          <path d="M17,21 Q20,23 23,21" fill="none" stroke="#2D1B0E" strokeWidth="1" strokeLinecap="round" />
        </svg>
      )
    case "block":
      return (
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <rect x="4" y="4" width="32" height="32" rx="4" fill="#FFB347" stroke="#CC8800" strokeWidth="2" />
          <rect x="6" y="6" width="8" height="8" rx="1" fill="#FFCC80" opacity="0.6" />
          <text
            x="20"
            y="28"
            textAnchor="middle"
            fontSize="18"
            fontWeight="bold"
            fill="#8B4513"
            fontFamily="sans-serif"
          >
            ?
          </text>
        </svg>
      )
    case "pipe":
      return (
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <rect x="6" y="4" width="28" height="8" rx="2" fill="#22C55E" stroke="#15803D" strokeWidth="1.5" />
          <rect x="8" y="12" width="24" height="24" fill="#16A34A" stroke="#15803D" strokeWidth="1.5" />
          <rect x="6" y="4" width="6" height="8" fill="#4ADE80" opacity="0.5" />
          <rect x="8" y="12" width="5" height="24" fill="#4ADE80" opacity="0.3" />
        </svg>
      )
    case "goomba":
      return (
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <ellipse cx="20" cy="18" rx="14" ry="12" fill="#8B4513" />
          <ellipse cx="20" cy="32" rx="8" ry="6" fill="#D2691E" />
          <ellipse cx="12" cy="34" rx="4" ry="3" fill="#8B4513" />
          <ellipse cx="28" cy="34" rx="4" ry="3" fill="#8B4513" />
          <ellipse cx="14" cy="16" rx="4" ry="5" fill="white" />
          <ellipse cx="26" cy="16" rx="4" ry="5" fill="white" />
          <circle cx="15" cy="17" r="2" fill="#2D1B0E" />
          <circle cx="27" cy="17" r="2" fill="#2D1B0E" />
          <ellipse cx="20" cy="24" rx="3" ry="2" fill="#2D1B0E" />
        </svg>
      )
    case "shell":
      return (
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <ellipse cx="20" cy="24" rx="16" ry="12" fill="#22C55E" stroke="#15803D" strokeWidth="1.5" />
          <ellipse cx="20" cy="28" rx="14" ry="6" fill="#16A34A" />
          <path d="M8,20 Q20,8 32,20" fill="none" stroke="#15803D" strokeWidth="2" />
          <circle cx="14" cy="20" r="3" fill="#4ADE80" />
          <circle cx="26" cy="20" r="3" fill="#4ADE80" />
          <circle cx="20" cy="16" r="2.5" fill="#4ADE80" />
        </svg>
      )
    default:
      return null
  }
}
