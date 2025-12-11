"use client"

import { motion } from "framer-motion"
import type { PageContent } from "@/lib/page-data"
import PhotoFrame from "./elements/photo-frame"
import TapeElement from "./elements/tape-element"
import ClipElement from "./elements/clip-element"
import MarioSticker from "./elements/mario-sticker"
import Doodle from "./elements/doodle"
import WashiTape from "./elements/washi-tape"

interface ScrapbookPageProps {
  pageIndex: number
  content: PageContent
}

export default function ScrapbookPage({ pageIndex, content }: ScrapbookPageProps) {
  return (
    <div className="relative w-full h-full flex rounded-lg overflow-hidden shadow-2xl select-none">
      {/* Left Page */}
      <div className="relative w-1/2 h-full overflow-hidden">
        {/* Paper background with texture */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #f5ead6 0%, #ebe0c8 50%, #e5d8bc 100%)",
          }}
        />

        {/* Paper grain texture */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Age spots scattered */}
        <div className="absolute top-[15%] left-[20%] w-12 h-12 bg-amber-800/5 rounded-full blur-xl" />
        <div className="absolute bottom-[25%] right-[30%] w-16 h-16 bg-amber-700/5 rounded-full blur-2xl" />
        <div className="absolute top-[60%] left-[10%] w-8 h-8 bg-amber-600/5 rounded-full blur-lg" />

        {/* Page fold shadow */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/20 via-black/8 to-transparent" />

        {/* Spiral binding simulation */}
        <div className="absolute right-1 top-0 bottom-0 w-4 flex flex-col justify-evenly py-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="relative">
              <div className="w-3 h-3 rounded-full bg-amber-200 border-2 border-amber-400 shadow-inner" />
              <div className="absolute top-1/2 -right-1 w-2 h-0.5 bg-gray-400 rounded-full -translate-y-1/2" />
            </div>
          ))}
        </div>

        {/* Content - using absolute positioning for messy layout */}
        <LeftPageContent content={content} pageIndex={pageIndex} />

        {/* Page number */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          <div className="w-8 h-px bg-amber-400" />
          <span className="font-sans text-sm text-amber-600">{pageIndex * 2 + 1}</span>
          <div className="w-8 h-px bg-amber-400" />
        </div>
      </div>

      {/* Book spine shadow */}
      <div className="absolute left-1/2 top-0 bottom-0 w-4 -translate-x-1/2 bg-gradient-to-r from-black/10 via-black/20 to-black/10 z-10" />

      {/* Right Page */}
      <div className="relative w-1/2 h-full overflow-hidden">
        {/* Paper background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(225deg, #f5ead6 0%, #ebe0c8 50%, #e5d8bc 100%)",
          }}
        />

        {/* Paper grain texture */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Age spots */}
        <div className="absolute top-[30%] right-[20%] w-14 h-14 bg-amber-800/5 rounded-full blur-xl" />
        <div className="absolute bottom-[20%] left-[25%] w-10 h-10 bg-amber-700/5 rounded-full blur-lg" />

        {/* Page fold shadow */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/20 via-black/8 to-transparent" />

        {/* Content */}
        <RightPageContent content={content} pageIndex={pageIndex} />

        {/* Page number */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          <div className="w-8 h-px bg-amber-400" />
          <span className="font-sans text-sm text-amber-600">{pageIndex * 2 + 2}</span>
          <div className="w-8 h-px bg-amber-400" />
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-amber-400/40 rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-amber-400/40 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-amber-400/40 rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-amber-400/40 rounded-br-lg" />
    </div>
  )
}

function LeftPageContent({ content, pageIndex }: { content: PageContent; pageIndex: number }) {
  // Random positions for messy effect based on page index
  const titleRotations = [-4, 2, -3, 5, -2, 3, -5, 4, -1, 2]
  const titleRotation = titleRotations[pageIndex % titleRotations.length]

  const useFrameless = pageIndex % 3 === 1

  return (
    <div className="absolute inset-0 p-4 pr-8">
      {/* Washi tapes scattered at different positions */}
      <WashiTape className="absolute -top-1 left-[10%] w-28 z-20" pattern="dots" rotation={-25 + pageIndex * 5} />
      <WashiTape className="absolute top-[30%] -left-6 w-24 z-20" pattern="stripes" rotation={85 + pageIndex * 3} />
      <WashiTape className="absolute bottom-[20%] left-[5%] w-20 z-20" pattern="stars" rotation={-15 - pageIndex * 2} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute z-40"
        style={{
          top: "4%",
          left: "6%",
          transform: `rotate(${titleRotation}deg)`,
        }}
      >
        <div className="bg-amber-50/80 px-3 py-1 rounded-lg shadow-sm inline-block">
          <h2 className="font-[var(--font-marker)] text-xl md:text-2xl lg:text-3xl text-amber-900 whitespace-nowrap">
            {content.leftTitle}
          </h2>
        </div>
        <Doodle type="underline" className="w-full h-3 mt-1" />
      </motion.div>

      {content.leftPhoto && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: content.leftPhoto.rotation || -5 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="absolute z-30"
          style={{
            top: "18%",
            left: useFrameless ? "5%" : "8%",
          }}
        >
          {!useFrameless && (
            <>
              <TapeElement rotation={-15} variant="washi" className="absolute -top-4 left-[20%] z-40" />
              <TapeElement rotation={12} variant="masking" className="absolute -top-3 right-[15%] z-40" />
            </>
          )}
          {useFrameless && (
            <>
              <TapeElement rotation={-12} variant="scotch" className="absolute -top-3 left-[10%] z-40" />
              <TapeElement rotation={8} variant="scotch" className="absolute -top-3 right-[10%] z-40" />
            </>
          )}
          <PhotoFrame
            src={content.leftPhoto.src}
            alt={content.leftPhoto.alt}
            variant={useFrameless ? "frameless" : content.leftPhoto.variant || "polaroid"}
            caption={useFrameless ? undefined : content.leftPhoto.caption}
            rotation={content.leftPhoto.rotation || -5}
            className={useFrameless ? "w-52 md:w-64 lg:w-72" : "w-48 h-56 md:w-56 md:h-64 lg:w-64 lg:h-76"}
          />
        </motion.div>
      )}

      {pageIndex % 2 === 0 && (
        <motion.div
          initial={{ opacity: 0, rotate: 8 }}
          animate={{ opacity: 1, rotate: 6 }}
          transition={{ delay: 0.4 }}
          className="absolute z-25"
          style={{ top: "55%", left: "45%" }}
        >
          <TapeElement rotation={-5} variant="masking" className="absolute -top-3 left-[30%] z-40" />
          <PhotoFrame
            src="/placeholder.svg?height=120&width=180"
            alt="Memory"
            variant="frameless"
            rotation={6}
            className="w-36 md:w-44 lg:w-52"
          />
        </motion.div>
      )}

      {/* Decorative polaroid in corner when no main photo */}
      {!content.leftPhoto && (
        <motion.div
          initial={{ opacity: 0, rotate: 15 }}
          animate={{ opacity: 1, rotate: 12 }}
          transition={{ delay: 0.3 }}
          className="absolute z-30"
          style={{ top: "20%", left: "10%" }}
        >
          <TapeElement rotation={-8} variant="scotch" className="absolute -top-3 left-1/3 z-40" />
          <PhotoFrame
            src="/placeholder.svg?height=200&width=200"
            alt="Memory"
            variant="polaroid"
            caption="Good times!"
            rotation={12}
            className="w-44 h-52 md:w-52 md:h-60 lg:w-60 lg:h-72"
          />
        </motion.div>
      )}

      {content.leftText && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute z-50 max-w-[85%]"
          style={{
            bottom: "8%",
            left: "5%",
            transform: `rotate(${-1 + (pageIndex % 3)}deg)`,
          }}
        >
          <div className="bg-white/90 p-3 rounded-lg shadow-md border-l-4 border-amber-400">
            {content.leftText.map((text, i) => (
              <p key={i} className="font-sans text-sm md:text-base text-amber-800 leading-relaxed mb-1">
                {text}
              </p>
            ))}
          </div>
        </motion.div>
      )}

      {content.leftList && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute z-50 max-w-[80%]"
          style={{
            bottom: "10%",
            left: "5%",
            transform: `rotate(${-0.5 + (pageIndex % 2)}deg)`,
          }}
        >
          <div className="bg-white/90 p-3 rounded-lg shadow-md">
            {content.leftList.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-start gap-2 mb-1.5"
                style={{ transform: `rotate(${i % 2 === 0 ? 0.3 : -0.3}deg)` }}
              >
                <MarioSticker type="coin" className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" />
                <span className="font-sans text-sm md:text-base text-amber-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Extra decorative photos scattered */}
      <motion.div
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: -18 }}
        transition={{ delay: 0.5 }}
        className="absolute z-15"
        style={{ top: "65%", right: "12%" }}
      >
        <div className="w-20 h-24 md:w-24 md:h-28 bg-white p-1 shadow-lg">
          <div className="w-full h-3/4 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
            <MarioSticker type={pageIndex % 2 === 0 ? "mushroom" : "star"} className="w-10 h-10" />
          </div>
          <p className="text-center text-xs font-sans text-gray-500 mt-1">Memories!</p>
        </div>
      </motion.div>

      {/* Scattered doodles */}
      <Doodle type="star" className="absolute top-[45%] right-[5%] w-10 h-10 opacity-40 z-5" />
      <Doodle type="heart" className="absolute bottom-[35%] right-[20%] w-8 h-8 opacity-30 z-5" />
      <Doodle type="circle" className="absolute top-[70%] left-[55%] w-12 h-12 opacity-25 z-5" />
      <Doodle type="arrow" className="absolute bottom-[50%] left-[65%] w-8 h-8 opacity-35 z-5" />
      <Doodle type="squiggle" className="absolute top-[12%] right-[5%] w-16 h-6 opacity-30 z-5" />

      {/* Scattered Mario stickers */}
      <MarioSticker type="flower" className="absolute top-[50%] right-[3%] w-10 h-10 z-15" />
      <MarioSticker type="block" className="absolute bottom-[30%] left-[70%] w-8 h-8 z-15" />

      {/* Paper clip decoration */}
      <ClipElement
        color={["red", "blue", "yellow", "green"][pageIndex % 4] as "red" | "blue" | "yellow" | "green"}
        className="absolute top-[3%] right-[8%] z-25"
      />
    </div>
  )
}

function RightPageContent({ content, pageIndex }: { content: PageContent; pageIndex: number }) {
  const titleRotations = [3, -4, 2, -3, 5, -2, 4, -5, 1, -3]
  const titleRotation = titleRotations[pageIndex % titleRotations.length]

  const useFramelessRight = pageIndex % 3 === 2

  return (
    <div className="absolute inset-0 p-4 pl-8">
      {/* Washi tapes scattered */}
      <WashiTape className="absolute -top-1 right-[15%] w-26 z-20" pattern="stars" rotation={20 - pageIndex * 4} />
      <WashiTape className="absolute top-[45%] -right-6 w-22 z-20" pattern="dots" rotation={-80 + pageIndex * 3} />
      <WashiTape
        className="absolute bottom-[15%] right-[10%] w-24 z-20"
        pattern="stripes"
        rotation={18 + pageIndex * 2}
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="absolute z-40"
        style={{
          top: "4%",
          left: "10%",
          transform: `rotate(${titleRotation}deg)`,
        }}
      >
        <Doodle type="arrow" className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-6" />
        <div className="bg-amber-50/80 px-3 py-1 rounded-lg shadow-sm inline-block">
          <h2 className="font-[var(--font-marker)] text-xl md:text-2xl lg:text-3xl text-amber-900 whitespace-nowrap">
            {content.rightTitle}
          </h2>
        </div>
      </motion.div>

      {content.rightPhotos && content.rightPhotos.length > 0 && (
        <div className="absolute z-30" style={{ top: "15%", left: "8%" }}>
          {content.rightPhotos.map((photo, i) => {
            const positions = [
              { top: 0, left: 0, rotate: -8 },
              { top: 10, left: 130, rotate: 6 },
              { top: 100, left: 50, rotate: -4 },
            ]
            const pos = positions[i % positions.length]
            const isFrameless = useFramelessRight && i === 0

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                className="absolute"
                style={{
                  top: pos.top,
                  left: pos.left,
                  zIndex: 30 + i,
                }}
              >
                {!isFrameless &&
                  (i % 2 === 0 ? (
                    <ClipElement
                      color={["red", "blue", "yellow", "green"][i % 4] as "red" | "blue" | "yellow" | "green"}
                      className="absolute -top-5 left-1/2 -translate-x-1/2 z-40"
                    />
                  ) : (
                    <TapeElement rotation={5 + i * 4} variant="scotch" className="absolute -top-3 right-[20%] z-40" />
                  ))}
                {isFrameless && (
                  <>
                    <TapeElement rotation={-8} variant="masking" className="absolute -top-3 left-[15%] z-40" />
                    <TapeElement rotation={10} variant="masking" className="absolute -top-3 right-[15%] z-40" />
                  </>
                )}
                <PhotoFrame
                  src={photo.src}
                  alt={photo.alt}
                  variant={isFrameless ? "frameless" : photo.variant || "vintage"}
                  caption={isFrameless ? undefined : photo.caption}
                  rotation={pos.rotate}
                  className={isFrameless ? "w-44 md:w-52 lg:w-60" : "w-36 h-40 md:w-44 md:h-48 lg:w-48 lg:h-56"}
                />
              </motion.div>
            )
          })}
        </div>
      )}

      {(!content.rightPhotos || content.rightPhotos.length === 0) && !content.messageBox && (
        <motion.div
          initial={{ opacity: 0, rotate: 8 }}
          animate={{ opacity: 1, rotate: 6 }}
          transition={{ delay: 0.3 }}
          className="absolute z-30"
          style={{ top: "18%", left: "15%" }}
        >
          <TapeElement rotation={-10} variant="washi" className="absolute -top-4 left-[25%] z-40" />
          <TapeElement rotation={15} variant="masking" className="absolute -top-3 right-[20%] z-40" />
          <PhotoFrame
            src="/placeholder.svg?height=200&width=200"
            alt="Memory"
            variant="vintage"
            caption="Great times!"
            rotation={6}
            className="w-48 h-56 md:w-56 md:h-64 lg:w-64 lg:h-76"
          />
        </motion.div>
      )}

      {pageIndex % 2 === 1 && (
        <motion.div
          initial={{ opacity: 0, rotate: -6 }}
          animate={{ opacity: 1, rotate: -4 }}
          transition={{ delay: 0.5 }}
          className="absolute z-20"
          style={{ top: "50%", right: "5%" }}
        >
          <TapeElement rotation={3} variant="scotch" className="absolute -top-3 left-[20%] z-40" />
          <PhotoFrame
            src="/placeholder.svg?height=100&width=150"
            alt="Fun moment"
            variant="frameless"
            rotation={-4}
            className="w-32 md:w-40 lg:w-48"
          />
        </motion.div>
      )}

      {content.rightText && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute z-50 max-w-[85%]"
          style={{
            bottom: "8%",
            left: "8%",
            transform: `rotate(${0.5 + (pageIndex % 3)}deg)`,
          }}
        >
          <div className="bg-white/90 p-3 rounded-lg shadow-md border-l-4 border-yellow-400">
            {content.rightText.map((text, i) => (
              <p
                key={i}
                className="font-sans text-sm md:text-base text-amber-800 leading-relaxed mb-1"
                style={{ transform: `rotate(${i % 2 === 0 ? -0.2 : 0.3}deg)` }}
              >
                {text}
              </p>
            ))}
          </div>
        </motion.div>
      )}

      {content.rightList && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45 }}
          className="absolute z-50 max-w-[75%]"
          style={{
            bottom: "8%",
            right: "8%",
            transform: `rotate(${1 - (pageIndex % 2)}deg)`,
          }}
        >
          <div className="bg-white/90 p-3 rounded-lg shadow-md">
            {content.rightList.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 + i * 0.1 }}
                className="flex items-start gap-2 mb-1.5"
              >
                <MarioSticker type="star" className="w-5 h-5 md:w-6 md:h-6 mt-0.5 flex-shrink-0" />
                <span className="font-sans text-sm md:text-base text-amber-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {content.messageBox && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute z-50"
          style={{
            bottom: "6%",
            left: "10%",
            transform: `rotate(${-2 + (pageIndex % 4)}deg)`,
          }}
        >
          <TapeElement rotation={-8} variant="washi" className="absolute -top-4 left-[15%] z-30" />
          <TapeElement rotation={5} variant="washi" className="absolute -top-3 right-[20%] z-30" />
          <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-3 md:p-4 shadow-lg max-w-[240px] md:max-w-[300px]">
            <div className="absolute -top-4 left-4 bg-amber-300 px-2 py-1 rounded text-xs font-[var(--font-marker)] text-amber-800 shadow-sm">
              {content.messageBox.label}
            </div>
            <p className="font-sans text-sm md:text-base text-amber-800 italic leading-relaxed pt-2">
              {content.messageBox.text}
            </p>
          </div>
        </motion.div>
      )}

      {/* Extra decorative mini polaroid */}
      <motion.div
        initial={{ opacity: 0, rotate: 25 }}
        animate={{ opacity: 1, rotate: 22 }}
        transition={{ delay: 0.6 }}
        className="absolute z-10"
        style={{ top: "55%", right: "3%" }}
      >
        <div className="w-18 h-22 md:w-22 md:h-26 bg-white p-1 shadow-lg">
          <div className="w-full h-3/4 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            <MarioSticker type={pageIndex % 2 === 0 ? "pipe" : "flower"} className="w-8 h-8" />
          </div>
          <p className="text-center text-xs font-sans text-gray-500 mt-1">Fun!</p>
        </div>
      </motion.div>

      {/* Scattered doodles */}
      <Doodle type="heart" className="absolute top-[35%] left-[60%] w-8 h-8 opacity-35 z-5" />
      <Doodle type="star" className="absolute bottom-[40%] right-[15%] w-10 h-10 opacity-40 z-5" />
      <Doodle type="circle" className="absolute top-[75%] right-[40%] w-14 h-14 opacity-20 z-5" />
      <Doodle type="arrow" className="absolute top-[10%] right-[35%] w-7 h-7 opacity-30 z-5" />
      <Doodle type="squiggle" className="absolute bottom-[25%] left-[50%] w-14 h-5 opacity-25 z-5" />

      {/* Mario stickers scattered */}
      <MarioSticker type="mushroom" className="absolute top-[40%] right-[25%] w-9 h-9 z-15" />
      <MarioSticker type="coin" className="absolute bottom-[35%] left-[65%] w-7 h-7 z-15" />

      {/* Paper clip */}
      <ClipElement
        color={["green", "red", "blue", "yellow"][(pageIndex + 1) % 4] as "red" | "blue" | "yellow" | "green"}
        className="absolute top-[2%] left-[55%] z-25"
      />
    </div>
  )
}
