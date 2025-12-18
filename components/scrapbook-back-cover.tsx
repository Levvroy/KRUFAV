"use client"

import { motion } from "framer-motion"
import MarioSticker from "./elements/mario-sticker"

interface ScrapbookBackCoverProps {
  onClose: () => void
}

export default function ScrapbookBackCover({ onClose }: ScrapbookBackCoverProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full h-full cursor-pointer rounded-l-lg overflow-hidden"
      style={{
        background: "linear-gradient(225deg, #8B4513 0%, #A0522D 30%, #8B4513 70%, #654321 100%)",
        boxShadow: "-10px 10px 30px rgba(0,0,0,0.4), inset 5px 0 15px rgba(0,0,0,0.2)",
      }}
      onClick={onClose}
    >
      {/* Leather texture overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Spine */}
      <div className="absolute right-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-l from-amber-900 via-amber-800 to-amber-900 border-l-2 border-amber-950">
        <div className="absolute inset-y-4 left-1/2 -translate-x-1/2 w-1 bg-amber-950 rounded-full opacity-50" />
      </div>

      {/* Main content */}
      <div className="absolute inset-0 right-8 md:right-12 p-6 md:p-10 flex flex-col items-center justify-center gap-6">
        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-amber-400 opacity-60" />
        <div className="absolute top-4 right-12 w-8 h-8 border-r-4 border-t-4 border-amber-400 opacity-60" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-amber-400 opacity-60" />
        <div className="absolute bottom-4 right-12 w-8 h-8 border-r-4 border-b-4 border-amber-400 opacity-60" />

        {/* Thank you message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-[var(--font-marker)] text-3xl md:text-4xl text-amber-200 text-center"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
        >
          The End
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center space-y-4"
        >
          <p className="font-sans text-lg md:text-xl text-amber-300">Semangat TAnya kak hanan :D</p>
          <p className="font-sans text-base text-amber-400 italic">Every page holds a piece of our journey.</p>
        </motion.div>

        {/* Mario stickers */}
        <div className="flex items-center gap-4 mt-4">
          <MarioSticker type="star" className="w-12 h-12 md:w-16 md:h-16" />
          <MarioSticker type="mushroom" className="w-10 h-10 md:w-14 md:h-14" />
          <MarioSticker type="flower" className="w-12 h-12 md:w-16 md:h-16" />
        </div>

        {/* Game over style text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-10"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="font-[var(--font-pixel)] text-xs text-amber-300"
          >
            Click to return to cover
          </motion.p>
        </motion.div>

        {/* Signature area */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-20 right-16 text-right"
        >
          <p className="font-sans text-sm text-amber-400">Made with love</p>
          <p className="font-[var(--font-marker)] text-lg text-amber-300">- Lewi (19625126) & Kafka (19625121)</p>
        </motion.div>
      </div>

      {/* Decorative pipe */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-4 left-8"
      >
        <MarioSticker type="pipe" className="w-16 h-20" />
      </motion.div>
    </motion.div>
  )
}
