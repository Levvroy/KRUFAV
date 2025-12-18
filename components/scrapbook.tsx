"use client"

import type React from "react"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"
import ScrapbookCover from "./scrapbook-cover"
import ScrapbookPage from "./scrapbook-page"
import ScrapbookBackCover from "./scrapbook-back-cover"
import { pageContents } from "@/lib/page-data"

export default function Scrapbook() {
  const [currentPage, setCurrentPage] = useState(-1) // -1 = cover, totalPages = back cover
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDirection, setFlipDirection] = useState<"forward" | "backward">("forward")
  const [isDragging, setIsDragging] = useState(false)
  const [dragStartX, setDragStartX] = useState(0)

  const totalPages = pageContents.length

  const goToNextPage = useCallback(() => {
    if (currentPage < totalPages && !isFlipping) {
      setFlipDirection("forward")
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1)
        setIsFlipping(false)
      }, 600)
    }
  }, [currentPage, totalPages, isFlipping])

  const goToPrevPage = useCallback(() => {
    if (currentPage >= 0 && !isFlipping) {
      setFlipDirection("backward")
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1)
        setIsFlipping(false)
      }, 600)
    }
  }, [currentPage, isFlipping])

  const goToCover = useCallback(() => {
    if (!isFlipping && currentPage !== -1) {
      setFlipDirection("backward")
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(-1)
        setIsFlipping(false)
      }, 600)
    }
  }, [isFlipping, currentPage])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault()
        goToNextPage()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        goToPrevPage()
      } else if (e.key === "Home") {
        e.preventDefault()
        goToCover()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [goToNextPage, goToPrevPage, goToCover])

  // Drag to turn pages
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (isFlipping) return
    setIsDragging(true)
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    setDragStartX(clientX)
  }

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return
    setIsDragging(false)

    const clientX = "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX
    const diff = clientX - dragStartX

    if (Math.abs(diff) > 100) {
      if (diff < 0) {
        goToNextPage()
      } else {
        goToPrevPage()
      }
    }
  }

  const isBackCover = currentPage === totalPages

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 md:p-8">
      {/* Scrapbook Container */}
      <div
        className="relative w-full max-w-5xl aspect-[4/3]"
        style={{ perspective: "2000px" }}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        <AnimatePresence mode="wait">
          {currentPage === -1 ? (
            <motion.div
              key="cover"
              initial={{ rotateY: flipDirection === "forward" ? 0 : -30, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{
                rotateY: -100,
                opacity: 0,
                transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
              }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "left center",
              }}
            >
              <ScrapbookCover onOpen={goToNextPage} />
            </motion.div>
          ) : isBackCover ? (
            <motion.div
              key="back-cover"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "right center",
              }}
            >
              <ScrapbookBackCover onClose={goToCover} />
            </motion.div>
          ) : (
            <motion.div
              key={`page-${currentPage}`}
              initial={{
                rotateY: flipDirection === "forward" ? 90 : -90,
                opacity: 0,
                z: -50,
              }}
              animate={{
                rotateY: 0,
                opacity: 1,
                z: 0,
              }}
              exit={{
                rotateY: flipDirection === "forward" ? -90 : 90,
                opacity: 0,
                z: -50,
              }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="absolute inset-0"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: flipDirection === "forward" ? "left center" : "right center",
              }}
            >
              {/* Page curl shadow effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: isFlipping ? 0.3 : 0 }}
                style={{
                  background:
                    flipDirection === "forward"
                      ? "linear-gradient(to right, transparent 40%, rgba(0,0,0,0.2) 50%, transparent 60%)"
                      : "linear-gradient(to left, transparent 40%, rgba(0,0,0,0.2) 50%, transparent 60%)",
                }}
              />
              <ScrapbookPage pageIndex={currentPage} content={pageContents[currentPage]} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        {currentPage >= 0 && !isBackCover && (
          <>
            {/* Left Arrow - styled as Mario arrow block */}
            <motion.button
              onClick={goToPrevPage}
              disabled={isFlipping}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 md:-translate-x-20 p-2 md:p-3 disabled:opacity-50 disabled:cursor-not-allowed z-20"
            >
              <div className="relative w-12 h-12 md:w-14 md:h-14 bg-yellow-500 rounded-lg border-4 border-yellow-700 shadow-lg flex items-center justify-center transform transition-transform hover:border-yellow-600">
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-yellow-900" />
                {/* Block shine effect */}
                <div className="absolute top-1 left-1 w-3 h-3 bg-yellow-300 rounded-sm opacity-60" />
              </div>
            </motion.button>

            {/* Right Arrow */}
            <motion.button
              onClick={goToNextPage}
              disabled={isFlipping}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 md:translate-x-20 p-2 md:p-3 disabled:opacity-50 disabled:cursor-not-allowed z-20"
            >
              <div className="relative w-12 h-12 md:w-14 md:h-14 bg-yellow-500 rounded-lg border-4 border-yellow-700 shadow-lg flex items-center justify-center transform transition-transform hover:border-yellow-600">
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-yellow-900" />
                <div className="absolute top-1 left-1 w-3 h-3 bg-yellow-300 rounded-sm opacity-60" />
              </div>
            </motion.button>
          </>
        )}

        {/* Progress Indicator */}
        {currentPage >= 0 && !isBackCover && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-amber-100/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
          >
            <motion.button
              onClick={goToCover}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-red-500 hover:bg-red-400 rounded-full text-white shadow-md transition-colors"
            >
              <Home className="w-4 h-4" />
            </motion.button>

            <div className="flex items-center gap-1.5">
              {[...Array(totalPages)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: i === currentPage ? 1.3 : 1,
                    backgroundColor: i === currentPage ? "#ef4444" : "#fcd34d",
                  }}
                  className="w-2 h-2 rounded-full transition-colors cursor-pointer"
                  onClick={() => {
                    if (i !== currentPage && !isFlipping) {
                      setFlipDirection(i > currentPage ? "forward" : "backward")
                      setIsFlipping(true)
                      setTimeout(() => {
                        setCurrentPage(i)
                        setIsFlipping(false)
                      }, 600)
                    }
                  }}
                />
              ))}
            </div>

            <span className="font-[var(--font-pixel)] text-xs text-amber-800 min-w-[60px] text-center">
              {currentPage + 1} / {totalPages}
            </span>
          </motion.div>
        )}

        {/* Drag hint */}
        {currentPage === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-amber-700 text-sm font-sans"
          >
            <motion.span animate={{ x: [-5, 5, -5] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              Swipe or use arrow keys
            </motion.span>
          </motion.div>
        )}
      </div>
    </div>
  )
}
