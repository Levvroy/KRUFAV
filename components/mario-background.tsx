"use client"

import { motion } from "framer-motion"

export default function MarioBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-300 to-sky-200" />

      {/* Parallax clouds */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-80"
            initial={{ x: -300 }}
            animate={{ x: "110vw" }}
            transition={{
              duration: 30 + i * 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 4,
            }}
            style={{
              top: `${5 + (i % 4) * 20}%`,
              scale: 0.5 + (i % 3) * 0.3,
            }}
          >
            <Cloud variant={i % 3} />
          </motion.div>
        ))}
      </div>

      {/* Distant hills */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 200" className="w-full h-32 md:h-48">
          <path d="M0,200 Q180,100 360,150 T720,120 T1080,160 T1440,140 L1440,200 Z" fill="#22c55e" opacity="0.6" />
          <path d="M0,200 Q240,120 480,160 T960,130 T1440,170 L1440,200 Z" fill="#16a34a" opacity="0.8" />
        </svg>
      </div>

      {/* Ground with blocks */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-amber-700">
        <div className="absolute top-0 left-0 right-0 h-4 bg-green-600" />
        <div className="flex">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="w-16 h-16 border border-amber-800 bg-amber-600 flex-shrink-0" />
          ))}
        </div>
      </div>

      {/* Floating coins */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${15 + i * 18}%`,
            top: `${20 + (i % 3) * 15}%`,
          }}
          animate={{
            y: [0, -10, 0],
            scaleX: [1, 0.2, 1],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-yellow-500 shadow-lg opacity-60" />
        </motion.div>
      ))}

      {/* Decorative pipes */}
      <motion.div
        className="absolute bottom-16 left-[10%]"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Pipe />
      </motion.div>
      <motion.div
        className="absolute bottom-16 right-[15%]"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <Pipe size="large" />
      </motion.div>
    </div>
  )
}

function Cloud({ variant = 0 }: { variant?: number }) {
  const sizes = [
    { w: 120, h: 70 },
    { w: 90, h: 55 },
    { w: 150, h: 85 },
  ]
  const { w, h } = sizes[variant]

  return (
    <svg width={w} height={h} viewBox="0 0 120 70" fill="white">
      <ellipse cx="35" cy="45" rx="30" ry="22" />
      <ellipse cx="60" cy="38" rx="35" ry="28" />
      <ellipse cx="90" cy="48" rx="25" ry="18" />
      <ellipse cx="55" cy="25" rx="25" ry="20" />
      <ellipse cx="80" cy="30" rx="20" ry="16" />
    </svg>
  )
}

function Pipe({ size = "medium" }: { size?: "medium" | "large" }) {
  const height = size === "large" ? 80 : 50

  return (
    <div className="relative">
      {/* Pipe top rim */}
      <div
        className="w-16 h-6 bg-green-500 rounded-t-lg border-2 border-green-700"
        style={{ boxShadow: "inset 4px 0 0 #22c55e, inset -4px 0 0 #15803d" }}
      />
      {/* Pipe body */}
      <div
        className="w-14 mx-auto bg-green-600 border-x-2 border-green-700"
        style={{
          height,
          boxShadow: "inset 4px 0 0 #22c55e, inset -4px 0 0 #15803d",
        }}
      />
    </div>
  )
}
