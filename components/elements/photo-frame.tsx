"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface PhotoFrameProps {
  src: string
  alt: string
  variant?: "polaroid" | "vintage" | "filmstrip" | "taped" | "frameless"
  caption?: string
  rotation?: number
  className?: string
}

export default function PhotoFrame({
  src,
  alt,
  variant = "polaroid",
  caption,
  rotation = 0,
  className = "",
}: PhotoFrameProps) {
  const [isHovered, setIsHovered] = useState(false)

  const baseStyles = "relative overflow-hidden transition-all duration-300 cursor-pointer"

  const variants = {
    polaroid: "bg-white p-3 md:p-4 pb-12 md:pb-16 shadow-xl rounded-sm",
    vintage: "bg-amber-100 p-2 md:p-3 border-4 md:border-6 border-amber-200 shadow-lg",
    filmstrip: "bg-gray-900 p-2 md:p-3 border-y-4 md:border-y-6 border-gray-800 shadow-lg",
    taped: "bg-white p-2 md:p-3 shadow-md rounded-sm",
    frameless: "rounded-lg shadow-xl overflow-hidden",
  }

  const photoHeight = variant === "frameless" ? "h-full" : "h-[75%]"

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: 1.08,
        rotate: rotation + 2,
        zIndex: 50,
        boxShadow: "0 25px 50px rgba(0,0,0,0.35)",
      }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        aspectRatio: variant === "frameless" ? "3/2" : undefined,
      }}
    >
      {/* Photo */}
      <div className={`relative w-full ${photoHeight} overflow-hidden bg-gray-200`}>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300"
          style={{
            filter: variant === "vintage" ? "sepia(30%) contrast(90%)" : "none",
            transform: isHovered ? "scale(1.08)" : "scale(1)",
          }}
        />

        {/* Vintage overlay */}
        {variant === "vintage" && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-transparent" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />
          </>
        )}

        {variant === "frameless" && <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.15)]" />}

        {/* Hover shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: isHovered ? "100%" : "-100%", opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Caption */}
      {caption && variant === "polaroid" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-3 md:bottom-4 left-0 right-0 text-center font-sans text-base md:text-lg text-gray-600"
        >
          {caption}
        </motion.p>
      )}

      {caption && variant === "frameless" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 md:p-3"
        >
          <p className="text-center font-sans text-sm md:text-base text-white drop-shadow-md">{caption}</p>
        </motion.div>
      )}

      {/* Film strip holes */}
      {variant === "filmstrip" && (
        <>
          <div className="absolute top-0 left-0 right-0 flex justify-around py-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2.5 md:w-3 h-1.5 md:h-2 bg-gray-700 rounded-sm" />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-around py-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2.5 md:w-3 h-1.5 md:h-2 bg-gray-700 rounded-sm" />
            ))}
          </div>
        </>
      )}

      {/* Corner wear for vintage */}
      {variant === "vintage" && (
        <>
          <div className="absolute top-0 left-0 w-5 h-5 bg-gradient-to-br from-amber-300/50 to-transparent" />
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-gradient-to-tl from-amber-400/30 to-transparent" />
        </>
      )}
    </motion.div>
  )
}
