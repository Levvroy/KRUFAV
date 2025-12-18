"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"

interface LoadingScreenProps {
  onLoadComplete: () => void
  onEnter: () => void
  isLoaded: boolean
}

export default function LoadingScreen({ onLoadComplete, onEnter, isLoaded }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [muted, setMuted] = useState(true)
  const [marioPosition, setMarioPosition] = useState(0)
  const [coinsCollected, setCoinsCollected] = useState(0)
  const [showCoinPop, setShowCoinPop] = useState(false)
  const hasCalledComplete = useRef(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        // Collect a coin every 10%
        if (prev > 0 && prev % 10 === 0 && prev !== 100) {
          setCoinsCollected((c) => c + 1)
          setShowCoinPop(true)
          setTimeout(() => setShowCoinPop(false), 300)
        }
        return prev + 1
      })
    }, 40)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100 && !hasCalledComplete.current) {
      hasCalledComplete.current = true
      onLoadComplete()
    }
  }, [progress, onLoadComplete])

  useEffect(() => {
    setMarioPosition((progress / 100) * 85)
  }, [progress])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated sky gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(180deg, #87CEEB 0%, #98D8EA 50%, #90EE90 100%)",
            "linear-gradient(180deg, #7EC8E3 0%, #87CEEB 50%, #8FBC8F 100%)",
            "linear-gradient(180deg, #87CEEB 0%, #98D8EA 50%, #90EE90 100%)",
          ],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Parallax Clouds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ x: -200 }}
            animate={{ x: "110vw" }}
            transition={{
              duration: 15 + i * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 2,
            }}
            style={{ top: `${8 + (i % 3) * 12}%`, opacity: 0.9 - i * 0.1 }}
          >
            <Cloud scale={0.6 + (i % 3) * 0.3} />
          </motion.div>
        ))}
      </div>

      {/* Hills in background */}
      <div className="absolute bottom-24 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20">
          <path d="M0,120 Q180,40 360,80 T720,60 T1080,90 T1440,70 L1440,120 Z" fill="#228B22" opacity="0.5" />
          <path d="M0,120 Q240,60 480,90 T960,50 T1440,80 L1440,120 Z" fill="#2E8B2E" opacity="0.7" />
        </svg>
      </div>

      {/* Ground with animated blocks */}
      <div className="absolute bottom-0 left-0 right-0 h-24">
        <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-green-500 to-green-600" />
        <div className="absolute top-6 left-0 right-0 h-18 bg-amber-700 flex overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.02 }}
              className="w-12 h-12 md:w-16 md:h-16 border border-amber-800 bg-amber-600 flex-shrink-0 relative"
            >
              <div className="absolute inset-1 border border-amber-500/30 rounded-sm" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Question Blocks */}
      <div className="absolute bottom-36 left-1/4 flex gap-2">
        {[...Array(3)].map((_, i) => (
          <QuestionBlock key={i} delay={i * 0.15} hit={progress > (i + 1) * 30} />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8 px-4">
        {/* Title with 3D effect */}
        <motion.div
          initial={{ y: -80, opacity: 0, rotateX: 45 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        >
          <h1
            className="font-[var(--font-pixel)] text-2xl md:text-4xl lg:text-5xl text-white text-center"
            style={{
              textShadow: "3px 3px 0 #E52521, 6px 6px 0 #000, -1px -1px 0 #FFD700",
            }}
          >
            Kru Favorit???
          </h1>
        </motion.div>

        {/* Mario Running Track */}
        <div className="relative w-72 md:w-96 h-16 md:h-20">
          {/* Track ground */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-green-600 rounded-full" />

          {/* Mario */}
          <motion.div
            className="absolute bottom-2"
            style={{ left: `${marioPosition}%` }}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 0.25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <MarioSprite running={progress < 100} />
          </motion.div>

          {/* Coin indicator */}
          <div className="absolute right-0 bottom-4 flex items-center gap-2">
            <motion.div
              animate={{ rotateY: [0, 180, 360] }}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-6 h-6"
            >
              <Coin />
            </motion.div>
            <motion.span
              key={coinsCollected}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              className="font-[var(--font-pixel)] text-yellow-300 text-sm drop-shadow-[2px_2px_0_#000]"
            >
              x{coinsCollected}
            </motion.span>

            {/* Coin pop animation */}
            <AnimatePresence>
              {showCoinPop && (
                <motion.div
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: -30, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-4 left-0 font-[var(--font-pixel)] text-yellow-300 text-xs"
                >
                  +100
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="w-80 md:w-[420px]">
          {/* Main pipe loading bar */}
          <div className="relative">
            {/* Pipe top rim - left */}
            <div className="absolute -left-3 top-0 bottom-0 w-6 z-10">
              <div className="h-full w-full bg-green-500 rounded-l-lg border-2 border-green-700 relative">
                <div className="absolute top-0 left-1 bottom-0 w-2 bg-green-400 rounded-l-lg opacity-60" />
              </div>
            </div>

            {/* Pipe top rim - right */}
            <div className="absolute -right-3 top-0 bottom-0 w-6 z-10">
              <div className="h-full w-full bg-green-500 rounded-r-lg border-2 border-green-700 relative">
                <div className="absolute top-0 right-1 bottom-0 w-2 bg-green-800 rounded-r-lg opacity-40" />
              </div>
            </div>

            {/* Pipe body (the loading bar) */}
            <div className="relative h-12 md:h-14 bg-green-700 border-y-4 border-green-800 overflow-hidden shadow-[inset_0_4px_8px_rgba(0,0,0,0.4)]">
              {/* Inner pipe darkness */}
              <div className="absolute inset-0 bg-gradient-to-b from-green-900 via-green-800 to-green-900" />

              {/* Progress fill - lava/fire effect */}
              <motion.div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${progress}%` }}>
                {/* Fire/lava base */}
                <div className="h-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 relative">
                  {/* Animated fire glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-400 to-orange-500"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                  />

                  {/* Fire bubbles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full bg-yellow-300"
                        style={{
                          left: `${10 + i * 12}%`,
                          bottom: "20%",
                        }}
                        animate={{
                          y: [-5, -15, -5],
                          opacity: [0.8, 1, 0.8],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 0.6 + i * 0.1,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />

                  {/* Top highlight */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-yellow-300/60 to-transparent" />
                </div>

                {/* Fire tip with particles */}
                <motion.div
                  className="absolute right-0 top-0 bottom-0 w-8"
                  animate={{ x: [0, 2, 0] }}
                  transition={{ duration: 0.2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {/* Fire particles shooting up */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                      style={{ right: i * 3, top: "30%" }}
                      animate={{
                        y: [-10, -25, -10],
                        x: [0, i % 2 === 0 ? 5 : -5, 0],
                        opacity: [1, 0.5, 1],
                        scale: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 0.4,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.08,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>

              {/* Power stars floating in the bar */}
              {progress > 25 && (
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2"
                  style={{ left: "20%" }}
                  animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <PowerStar size={20} />
                </motion.div>
              )}
              {progress > 50 && (
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2"
                  style={{ left: "45%" }}
                  animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                >
                  <PowerStar size={20} />
                </motion.div>
              )}
              {progress > 75 && (
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2"
                  style={{ left: "70%" }}
                  animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                >
                  <PowerStar size={20} />
                </motion.div>
              )}

              {/* Pipe rivets/bolts */}
              <div className="absolute top-1 left-4 w-2 h-2 bg-green-600 rounded-full border border-green-800" />
              <div className="absolute bottom-1 left-4 w-2 h-2 bg-green-600 rounded-full border border-green-800" />
              <div className="absolute top-1 right-4 w-2 h-2 bg-green-600 rounded-full border border-green-800" />
              <div className="absolute bottom-1 right-4 w-2 h-2 bg-green-600 rounded-full border border-green-800" />
            </div>
          </div>

          {/* Progress percentage with coin style */}
          <div className="mt-3 flex items-center justify-center gap-3">
            <motion.div
              animate={{ rotateY: [0, 180, 360] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Coin />
            </motion.div>
            <div className="bg-black/60 px-4 py-1.5 rounded-full border-2 border-yellow-500">
              <span className="font-[var(--font-pixel)] text-yellow-400 text-lg md:text-xl drop-shadow-[2px_2px_0_#000]">
                {progress}%
              </span>
            </div>
            <motion.div
              animate={{ rotateY: [0, 180, 360] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 0.5 }}
            >
              <Coin />
            </motion.div>
          </div>

          {/* Loading text with power-up animation */}
          <motion.div
            className="mt-2 flex items-center justify-center gap-2"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            {progress < 100 ? (
              <>
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                  className="font-[var(--font-pixel)] text-sm text-white drop-shadow-[2px_2px_0_#000]"
                >
                  L
                </motion.span>
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, delay: 0.1 }}
                  className="font-[var(--font-pixel)] text-sm text-white drop-shadow-[2px_2px_0_#000]"
                >
                  o
                </motion.span>
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                  className="font-[var(--font-pixel)] text-sm text-white drop-shadow-[2px_2px_0_#000]"
                >
                  a
                </motion.span>
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
                  className="font-[var(--font-pixel)] text-sm text-white drop-shadow-[2px_2px_0_#000]"
                >
                  d
                </motion.span>
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                  className="font-[var(--font-pixel)] text-sm text-white drop-shadow-[2px_2px_0_#000]"
                >
                  i
                </motion.span>
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                  className="font-[var(--font-pixel)] text-sm text-white drop-shadow-[2px_2px_0_#000]"
                >
                  n
                </motion.span>
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
                  className="font-[var(--font-pixel)] text-sm text-white drop-shadow-[2px_2px_0_#000]"
                >
                  g
                </motion.span>
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                  className="font-[var(--font-pixel)] text-sm text-yellow-400 drop-shadow-[2px_2px_0_#000]"
                >
                  ...
                </motion.span>
              </>
            ) : (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                className="font-[var(--font-pixel)] text-lg text-yellow-400 drop-shadow-[2px_2px_0_#000]"
              >
                READY!
              </motion.span>
            )}
          </motion.div>
        </div>

        {/* Enter Button */}
        <AnimatePresence>
          {isLoaded && (
            <motion.button
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={onEnter}
              className="mt-2 px-8 py-4 bg-gradient-to-b from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white font-[var(--font-pixel)] text-sm md:text-base rounded-lg border-b-4 border-red-800 hover:border-red-700 shadow-xl transition-all relative overflow-hidden"
            >
              {/* Button shine */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
              />
              <span className="relative">Enter Scrapbook</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Sound Toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setMuted(!muted)}
        className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors shadow-lg"
      >
        {muted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
      </motion.button>

      {/* Decorative pipes */}
      <motion.div
        className="absolute bottom-24 left-[8%]"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
      >
        <Pipe />
      </motion.div>
      <motion.div
        className="absolute bottom-24 right-[12%]"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
      >
        <Pipe size="large" />
      </motion.div>
    </div>
  )
}

function Cloud({ scale = 1 }: { scale?: number }) {
  return (
    <svg width={120 * scale} height={70 * scale} viewBox="0 0 120 70" fill="white">
      <ellipse cx="35" cy="45" rx="30" ry="20" />
      <ellipse cx="60" cy="35" rx="35" ry="25" />
      <ellipse cx="90" cy="45" rx="25" ry="18" />
      <ellipse cx="55" cy="22" rx="25" ry="18" />
      <ellipse cx="80" cy="28" rx="20" ry="14" />
    </svg>
  )
}

function QuestionBlock({ delay = 0, hit = false }: { delay?: number; hit?: boolean }) {
  return (
    <motion.div
      animate={hit ? { y: [0, -15, 0] } : { y: [0, -4, 0] }}
      transition={
        hit ? { duration: 0.2 } : { duration: 0.6, delay, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2.5 }
      }
      className="relative"
    >
      <div
        className={`w-10 h-10 md:w-12 md:h-12 ${hit ? "bg-amber-800" : "bg-yellow-500"} border-4 ${hit ? "border-amber-900" : "border-yellow-700"} rounded-sm flex items-center justify-center shadow-lg transition-colors`}
      >
        {!hit && (
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            className="font-[var(--font-pixel)] text-yellow-900 text-lg font-bold"
          >
            ?
          </motion.span>
        )}
        {/* Block shine */}
        <div className="absolute top-1 left-1 w-2 h-2 bg-yellow-300 rounded-sm opacity-60" />
      </div>

      {/* Coin pop when hit */}
      <AnimatePresence>
        {hit && (
          <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: -40, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute -top-2 left-1/2 -translate-x-1/2"
          >
            <Coin />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function MarioSprite({ running = true }: { running?: boolean }) {
  return (
    <motion.div className="relative w-10 h-14 md:w-12 md:h-16" animate={running ? { scaleX: [1, 1, 1] } : {}}>
      {/* Hat */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-4 bg-red-600 rounded-t-full shadow-md" />
      {/* Hat brim */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-red-600 rounded-full" />
      {/* Face */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-7 h-5 bg-amber-200 rounded-md" />
      {/* Eyes */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 flex gap-1">
        <div className="w-1.5 h-1.5 bg-black rounded-full" />
        <div className="w-1.5 h-1.5 bg-black rounded-full" />
      </div>
      {/* Mustache */}
      <div className="absolute top-7 left-1/2 -translate-x-1/2 w-5 h-1.5 bg-amber-900 rounded-full" />
      {/* Body (shirt) */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-8 h-4 bg-red-600 rounded-t-md" />
      {/* Overalls */}
      <div className="absolute top-11 left-1/2 -translate-x-1/2 w-7 h-3 bg-blue-700 rounded-b-md" />
      {/* Buttons */}
      <div className="absolute top-11.5 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-1 h-1 bg-yellow-400 rounded-full" />
        <div className="w-1 h-1 bg-yellow-400 rounded-full" />
      </div>
    </motion.div>
  )
}

function Coin() {
  return (
    <div className="w-6 h-6 bg-yellow-400 rounded-full border-2 border-yellow-500 shadow-md flex items-center justify-center">
      <div className="w-2.5 h-4 border-2 border-yellow-600 rounded-sm bg-yellow-300" />
    </div>
  )
}

function PowerStar({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="drop-shadow-[0_0_4px_rgba(255,215,0,0.8)]">
      <polygon
        points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9"
        fill="#FFD700"
        stroke="#FFA500"
        strokeWidth="1"
      />
      <polygon points="12,5 14,10 19,10 15,13 16.5,19 12,15 7.5,19 9,13 5,10 10,10" fill="#FFEC8B" opacity="0.6" />
    </svg>
  )
}

function Pipe({ size = "medium" }: { size?: "medium" | "large" }) {
  const height = size === "large" ? 60 : 40

  return (
    <div className="relative">
      {/* Pipe top rim */}
      <div className="w-14 md:w-16 h-5 md:h-6 bg-green-500 rounded-t-lg border-2 border-green-700 relative">
        <div className="absolute top-0 left-1 bottom-0 w-3 bg-green-400 rounded-tl-lg opacity-60" />
      </div>
      {/* Pipe body */}
      <div className="w-12 md:w-14 mx-auto bg-green-600 border-x-2 border-green-700 relative" style={{ height }}>
        <div className="absolute top-0 left-0 bottom-0 w-2 bg-green-400 opacity-40" />
        <div className="absolute top-0 right-0 bottom-0 w-2 bg-green-800 opacity-40" />
      </div>
    </div>
  )
}
