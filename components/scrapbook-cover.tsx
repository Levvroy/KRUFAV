"use client"

import { motion } from "framer-motion"
import MarioSticker from "./elements/mario-sticker"
import TapeElement from "./elements/tape-element"
import WashiTape from "./elements/washi-tape"
import Doodle from "./elements/doodle"
import ClipElement from "./elements/clip-element"

interface ScrapbookCoverProps {
  onOpen: () => void
}

export default function ScrapbookCover({ onOpen }: ScrapbookCoverProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={onOpen}
      className="relative w-full h-full cursor-pointer rounded-r-lg overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #8B4513 0%, #A0522D 30%, #8B4513 70%, #654321 100%)",
        boxShadow: "10px 10px 30px rgba(0,0,0,0.4), inset -5px 0 15px rgba(0,0,0,0.2)",
      }}
    >
      {/* Leather texture overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Spine */}
      <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 border-r-2 border-amber-950">
        <div className="absolute inset-y-4 left-1/2 -translate-x-1/2 w-1 bg-amber-950 rounded-full opacity-50" />
      </div>

      {/* Main cover content */}
      <div className="absolute inset-0 left-8 md:left-12 p-4 md:p-8 flex flex-col items-center justify-center">
        <WashiTape className="absolute top-4 left-[5%] w-32 md:w-44" pattern="stars" rotation={-20} />
        <WashiTape className="absolute top-[15%] -right-8 w-28 md:w-40" pattern="dots" rotation={-80} />
        <WashiTape className="absolute bottom-[25%] -left-6 w-24 md:w-32" pattern="stripes" rotation={85} />
        <WashiTape className="absolute bottom-8 right-[10%] w-26 md:w-36" pattern="stars" rotation={12} />
        <WashiTape className="absolute top-[40%] -right-4 w-20 md:w-28" pattern="dots" rotation={-70} />

        <motion.div
          className="absolute top-6 right-[15%] w-14 h-16 md:w-18 md:h-22 bg-white p-1 shadow-md z-20"
          style={{ transform: "rotate(8deg)" }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-full h-full border-2 border-dashed border-gray-300 bg-gradient-to-br from-red-100 to-red-200 flex flex-col items-center justify-center p-1">
            <MarioSticker type="mushroom" className="w-6 h-6 md:w-8 md:h-8" />
            <span className="text-[8px] md:text-[10px] font-bold text-red-800 mt-1">LFM 2025</span>
          </div>
          {/* Perforated edges */}
          <div className="absolute -top-1 left-0 right-0 flex justify-around">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-amber-800 rounded-full" />
            ))}
          </div>
          <div className="absolute -bottom-1 left-0 right-0 flex justify-around">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-amber-800 rounded-full" />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="absolute top-[12%] left-[8%] w-24 md:w-32 bg-white shadow-lg z-15"
          style={{ transform: "rotate(-12deg)" }}
          whileHover={{ rotate: -8, scale: 1.05 }}
        >
          <div className="relative p-2 bg-[repeating-linear-gradient(transparent,transparent_23px,#91cbff_24px)]">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-red-300" />
            <p className="font-sans text-[10px] md:text-xs text-gray-600 pl-3 leading-relaxed">Best year ever!</p>
          </div>
          <TapeElement rotation={-5} variant="scotch" className="absolute -top-2 left-1/3 z-20" />
        </motion.div>

        <motion.div
          className="absolute top-[8%] left-[35%] bg-amber-100 px-4 py-1.5 rounded shadow-lg border-2 border-amber-300 z-20"
          style={{ transform: "rotate(-6deg)" }}
          animate={{ rotate: [-6, -4, -6] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          <span className="font-[var(--font-marker)] text-sm md:text-base text-amber-800">MEMORIES</span>
        </motion.div>

        <motion.div
          className="absolute top-[22%] right-[8%] bg-red-500 w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg flex items-center justify-center z-20"
          style={{ transform: "rotate(15deg)" }}
          whileHover={{ scale: 1.1, rotate: 20 }}
        >
          <div className="bg-red-400 w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-dashed border-white flex items-center justify-center">
            <span className="font-[var(--font-pixel)] text-xs md:text-sm text-white font-bold">2025</span>
          </div>
        </motion.div>

        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-amber-400 opacity-60" />
        <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-amber-400 opacity-60" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-amber-400 opacity-60" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-amber-400 opacity-60" />

        {/* Center Content - Main Title */}
        <div className="flex flex-col items-center justify-start z-10 space-y-4 pt-32"> {/* 1 & 2: Tambah pt-32 dan ubah ke justify-start */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 150 }}
          className="font-[var(--font-marker)] text-6xl md:text-8xl lg:text-9xl text-amber-200 text-center drop-shadow-[2px_2px_0_#000] z-10 font-bold leading-none"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5), -1px -1px 0 rgba(255,255,255,0.1)" }}
        >
          KRU FAVORIT
        </motion.h1>

        <Doodle type="underline" className="w-48 md:w-64 h-3 mt-2 opacity-60" />

        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 100 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-2xl md:text-4xl text-amber-300 text-center italic mt-2"
        >
            Kak Hanan
        </motion.p>
        </div>

        <motion.div
          className="absolute top-[30%] left-[5%] w-16 h-20 md:w-20 md:h-24 bg-white p-1 shadow-lg z-5"
          style={{ transform: "rotate(-18deg)" }}
          whileHover={{ scale: 1.15, rotate: -12, zIndex: 30 }}
        >
          <div className="w-full h-3/4 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            <MarioSticker type="star" className="w-8 h-8" />
          </div>
          <p className="text-center text-[8px] font-sans text-gray-500 mt-0.5">Fun!</p>
          <TapeElement rotation={8} variant="scotch" className="absolute -top-2 left-1/4 z-10" />
        </motion.div>

        <motion.div
          className="absolute bottom-[35%] right-[5%] w-14 h-18 md:w-18 md:h-22 bg-white p-1 shadow-lg z-5"
          style={{ transform: "rotate(15deg)" }}
          whileHover={{ scale: 1.15, rotate: 10, zIndex: 30 }}
        >
          <div className="w-full h-3/4 bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center">
            <MarioSticker type="pipe" className="w-6 h-6" />
          </div>
          <p className="text-center text-[8px] font-sans text-gray-500 mt-0.5">Yay!</p>
        </motion.div>

        <motion.div
          className="absolute bottom-[18%] left-[12%] w-16 h-20 md:w-20 md:h-24 bg-white p-1 shadow-lg z-5"
          style={{ transform: "rotate(22deg)" }}
          whileHover={{ scale: 1.15, rotate: 18, zIndex: 30 }}
        >
          <div className="w-full h-3/4 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
            <MarioSticker type="flower" className="w-8 h-8" />
          </div>
          <p className="text-center text-[8px] font-sans text-gray-500 mt-0.5">Nice!</p>
          <ClipElement color="yellow" className="absolute -top-4 left-1/2 -translate-x-1/2 z-10" />
        </motion.div>

        <MarioSticker type="mushroom" className="absolute top-[45%] right-[3%] w-10 h-10 md:w-14 md:h-14 z-15" />
        <MarioSticker type="star" className="absolute bottom-[30%] left-[3%] w-10 h-10 md:w-14 md:h-14 z-15" />
        <MarioSticker type="coin" className="absolute top-[55%] left-[2%] w-8 h-8 md:w-10 md:h-10 z-15" />
        <MarioSticker type="block" className="absolute top-[18%] left-[55%] w-8 h-8 md:w-10 md:h-10 z-15" />
        <MarioSticker type="coin" className="absolute bottom-[45%] right-[25%] w-6 h-6 md:w-8 md:h-8 z-15" />
        <MarioSticker type="flower" className="absolute bottom-[12%] right-[30%] w-8 h-8 md:w-10 md:h-10 z-15" />

        <ClipElement color="red" className="absolute top-[35%] right-[12%] z-20" />
        <ClipElement color="blue" className="absolute bottom-[40%] left-[25%] z-20" />
        <ClipElement color="green" className="absolute top-[60%] right-[35%] z-20" />

        <Doodle type="star" className="absolute top-[65%] right-[8%] w-8 h-8 md:w-10 md:h-10 opacity-40" />
        <Doodle type="heart" className="absolute bottom-[55%] left-[8%] w-6 h-6 md:w-8 md:h-8 opacity-35" />
        <Doodle type="circle" className="absolute top-[28%] right-[40%] w-10 h-10 opacity-25" />
        <Doodle type="squiggle" className="absolute bottom-[22%] right-[15%] w-16 h-5 opacity-30" />
        <Doodle type="arrow" className="absolute top-[72%] left-[40%] w-8 h-8 opacity-35" />
        <Doodle type="star" className="absolute bottom-[8%] left-[45%] w-6 h-6 opacity-30" />

        <motion.div
          className="absolute top-[58%] left-[6%] w-12 h-20 md:w-14 md:h-24 bg-gradient-to-b from-red-400 to-red-500 rounded-t-lg shadow-lg z-10"
          style={{ transform: "rotate(-25deg)" }}
          whileHover={{ rotate: -20, scale: 1.1 }}
        >
          <div className="absolute top-2 left-0 right-0 border-t border-dashed border-white/50" />
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-red-600 flex items-center justify-center">
            <span className="text-[8px] text-white font-bold">ADMIT ONE</span>
          </div>
          <div className="flex flex-col items-center justify-center h-full pb-6">
            <span className="text-white text-[10px] font-bold">LFM</span>
            <span className="text-white text-[8px]">★★★</span>
          </div>
        </motion.div>

        {/* Open instruction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-6 md:bottom-8 z-20"
        >
          <motion.p
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="font-[var(--font-pixel)] text-xs text-amber-300"
          >
            Click to Open
          </motion.p>
        </motion.div>
      </div>

      {/* Question mark block decoration */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 right-8 md:right-12 z-20"
      >
        <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-500 border-3 border-yellow-700 rounded-sm flex items-center justify-center shadow-lg">
          <span className="font-[var(--font-pixel)] text-yellow-900 text-lg font-bold">?</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
