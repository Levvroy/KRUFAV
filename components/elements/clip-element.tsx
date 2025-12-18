"use client"

import { motion } from "framer-motion"

interface ClipElementProps {
  color?: "red" | "blue" | "yellow" | "green"
  className?: string
}

export default function ClipElement({ color = "red", className = "" }: ClipElementProps) {
  const colors = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
    green: "bg-green-500",
  }

  return (
    <motion.div whileHover={{ y: -2 }} className={`relative ${className}`}>
      {/* Clip body */}
      <div className={`w-6 h-8 ${colors[color]} rounded-t-full shadow-md`}>
        {/* Inner clip */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-5 bg-white/30 rounded-t-full" />
      </div>
      {/* Clip shadow */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/20 rounded-full blur-sm" />
    </motion.div>
  )
}
