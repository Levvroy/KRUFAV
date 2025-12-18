"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface PhotoLightboxProps {
  isOpen: boolean
  onClose: () => void
  photos: { src: string; alt: string; caption?: string }[]
  currentIndex: number
  onNavigate: (index: number) => void
}

export default function PhotoLightbox({ isOpen, onClose, photos, currentIndex, onNavigate }: PhotoLightboxProps) {
  const currentPhoto = photos[currentIndex]

  const handlePrev = () => {
    onNavigate(currentIndex > 0 ? currentIndex - 1 : photos.length - 1)
  }

  const handleNext = () => {
    onNavigate(currentIndex < photos.length - 1 ? currentIndex + 1 : 0)
  }

  return (
    <AnimatePresence>
      {isOpen && currentPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            onClick={onClose}
          >
            <X className="w-6 h-6 text-white" />
          </motion.button>

          {/* Navigation arrows */}
          {photos.length > 1 && (
            <>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrev()
                }}
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </motion.button>
            </>
          )}

          {/* Photo container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-4xl max-h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Polaroid frame */}
            <div className="bg-white p-4 pb-16 shadow-2xl">
              <div className="relative w-full aspect-square max-w-[70vh] overflow-hidden bg-gray-100">
                <Image
                  src={currentPhoto.src || "/placeholder.svg"}
                  alt={currentPhoto.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Caption */}
              {currentPhoto.caption && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute bottom-4 left-0 right-0 text-center font-sans text-lg text-gray-600"
                >
                  {currentPhoto.caption}
                </motion.p>
              )}
            </div>

            {/* Photo counter */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation()
                    onNavigate(i)
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentIndex ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
