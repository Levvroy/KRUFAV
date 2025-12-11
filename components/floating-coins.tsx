"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Coin {
  id: number
  x: number
  y: number
  collected: boolean
}

interface FloatingCoinsProps {
  onCollect?: (total: number) => void
}

export default function FloatingCoins({ onCollect }: FloatingCoinsProps) {
  const [coins, setCoins] = useState<Coin[]>([])
  const [totalCollected, setTotalCollected] = useState(0)
  const [showScore, setShowScore] = useState<{ x: number; y: number } | null>(null)

  useEffect(() => {
    // Generate random coins
    const initialCoins: Coin[] = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: 10 + Math.random() * 80,
      y: 15 + Math.random() * 60,
      collected: false,
    }))
    setCoins(initialCoins)
  }, [])

  const collectCoin = (coinId: number, x: number, y: number) => {
    setCoins((prev) => prev.map((coin) => (coin.id === coinId ? { ...coin, collected: true } : coin)))
    setTotalCollected((prev) => {
      const newTotal = prev + 1
      onCollect?.(newTotal)
      return newTotal
    })
    setShowScore({ x, y })
    setTimeout(() => setShowScore(null), 500)
  }

  return (
    <>
      {coins.map((coin) => (
        <AnimatePresence key={coin.id}>
          {!coin.collected && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -8, 0],
                rotateY: [0, 180, 360],
              }}
              exit={{ opacity: 0, scale: 2, y: -30 }}
              transition={{
                y: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                rotateY: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              }}
              className="fixed z-20 cursor-pointer"
              style={{ left: `${coin.x}%`, top: `${coin.y}%` }}
              onClick={(e) => collectCoin(coin.id, e.clientX, e.clientY)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
            >
              <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-yellow-500 shadow-lg flex items-center justify-center">
                <div className="w-3 h-5 border-2 border-yellow-600 rounded-sm bg-yellow-300" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      ))}

      {/* Score popup */}
      <AnimatePresence>
        {showScore && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: -40 }}
            exit={{ opacity: 0 }}
            className="fixed z-50 pointer-events-none font-[var(--font-pixel)] text-yellow-400 text-lg"
            style={{ left: showScore.x, top: showScore.y }}
          >
            +100
          </motion.div>
        )}
      </AnimatePresence>

      {/* Coin counter */}
      {totalCollected > 0 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed top-4 left-4 z-40 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-full"
        >
          <motion.div
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-6 h-6"
          >
            <div className="w-full h-full bg-yellow-400 rounded-full border-2 border-yellow-500 flex items-center justify-center">
              <div className="w-2 h-3 border border-yellow-600 rounded-sm bg-yellow-300" />
            </div>
          </motion.div>
          <span className="font-[var(--font-pixel)] text-white text-sm">x{totalCollected}</span>
        </motion.div>
      )}
    </>
  )
}
