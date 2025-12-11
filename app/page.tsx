"use client"

import { useState, useCallback } from "react"
import LoadingScreen from "@/components/loading-screen"
import MarioBackground from "@/components/mario-background"
import Scrapbook from "@/components/scrapbook"
import InteractiveMario from "@/components/interactive-mario"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showScrapbook, setShowScrapbook] = useState(false)

  const handleLoadComplete = useCallback(() => {
    setIsLoaded(true)
  }, [])

  const handleEnterScrapbook = useCallback(() => {
    setShowScrapbook(true)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden">
      <MarioBackground />

      {!showScrapbook ? (
        <LoadingScreen onLoadComplete={handleLoadComplete} onEnter={handleEnterScrapbook} isLoaded={isLoaded} />
      ) : (
        <>
          <Scrapbook />
          <InteractiveMario />
        </>
      )}
    </main>
  )
}
