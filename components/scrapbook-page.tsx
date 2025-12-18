// ===================================================================
// SCRAPBOOK PAGE COMPONENT - FIXED VERSION
// Renders individual double-page spreads with messy, realistic layout
// ===================================================================

"use client"

import { motion } from "framer-motion"

// Simplified interfaces
interface PhotoData {
  src: string
  alt: string
  caption?: string
  variant?: "polaroid" | "vintage" | "filmstrip" | "taped" | "frameless"
  rotation?: number
  link?: string
}

interface StickerData {
  type: "mushroom" | "star" | "coin" | "flower" | "block" | "pipe"
  position: string
  size: string
}

interface PageContent {
  leftTitle: string
  rightTitle: string
  leftPhoto?: PhotoData
  leftPhotos?: PhotoData[]
  leftText?: string[]
  rightPhoto?: PhotoData
  rightPhotos?: PhotoData[]
  rightText?: string[]
  rightTextSections?: Array<{ title: string; content: string }>
  stickers?: StickerData[]
  instagramPosts?: string[]
  centerPhoto?: PhotoData
}

interface ScrapbookPageProps {
  pageIndex: number
  content: PageContent
}

// Simple component replacements
const PhotoFrame = ({ src, alt, variant, caption, rotation, className, link }: any) => {
  const imageContent = (
    <div className={`relative ${className}`} style={{ transform: `rotate(${rotation || 0}deg)` }}>
      <div className={`bg-white p-2 shadow-xl ${variant === "frameless" ? "p-0" : ""}`}>
        <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />
        {caption && variant !== "frameless" && (
          <p className="text-center mt-2 font-[var(--font-caveat)] text-sm">{caption}</p>
        )}
      </div>
    </div>
  )

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:scale-105 transition-transform"
      >
        {imageContent}
      </a>
    )
  }

  return imageContent
}

const TapeElement = ({ rotation, variant, className }: any) => (
  <div
    className={`w-16 h-6 ${className}`}
    style={{
      transform: `rotate(${rotation}deg)`,
      background: variant === "washi" ? "rgba(255,200,100,0.6)" : "rgba(200,200,200,0.5)",
    }}
  />
)

const ClipElement = ({ color, className }: any) => (
  <div
    className={`w-6 h-8 rounded-full ${className}`}
    style={{ background: color === "red" ? "#ef4444" : color === "blue" ? "#3b82f6" : "#eab308" }}
  />
)

const MarioSticker = ({ type, className }: any) => (
  <div className={`rounded-full bg-yellow-400 flex items-center justify-center ${className}`}>
    <span className="text-2xl">⭐</span>
  </div>
)

const Doodle = ({ type, className }: any) => (
  <div className={`${className}`}>
    {type === "underline" && <div className="w-full h-1 bg-amber-400 rounded" />}
    {type === "arrow" && <div className="text-amber-600">→</div>}
    {type === "star" && <div className="text-amber-400">✦</div>}
    {type === "heart" && <div className="text-red-400">♥</div>}
    {type === "circle" && <div className="w-full h-full border-2 border-amber-400 rounded-full" />}
  </div>
)

const WashiTape = ({ className, pattern, rotation }: any) => (
  <div
    className={`h-6 bg-gradient-to-r from-pink-300 to-purple-300 opacity-60 ${className}`}
    style={{ transform: `rotate(${rotation}deg)` }}
  />
)

export default function ScrapbookPage({ pageIndex, content }: ScrapbookPageProps) {
  const isFinalPage = pageIndex === 4

  return (
    <div className="relative w-full h-full flex rounded-lg overflow-hidden shadow-2xl select-none">
      {/* LEFT PAGE */}
      <div className="relative w-1/2 h-full overflow-hidden bg-[#f4e8d0] border-r-2 border-[#b8a789]">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #f5ead6 0%, #ebe0c8 50%, #e5d8bc 100%)" }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="absolute top-[15%] left-[20%] w-12 h-12 bg-amber-800/5 rounded-full blur-xl" />
        <div className="absolute bottom-[25%] right-[30%] w-16 h-16 bg-amber-700/5 rounded-full blur-2xl" />

        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/20 via-black/8 to-transparent" />

        <div className="absolute right-1 top-0 bottom-0 w-4 flex flex-col justify-evenly py-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="relative">
              <div className="w-3 h-3 rounded-full bg-amber-200 border-2 border-amber-400 shadow-inner" />
              <div className="absolute top-1/2 -right-1 w-2 h-0.5 bg-gray-400 rounded-full -translate-y-1/2" />
            </div>
          ))}
        </div>

        <LeftPageContent content={content} pageIndex={pageIndex} isFinalPage={isFinalPage} />

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          <div className="w-8 h-px bg-amber-400" />
          <span className="font-sans text-sm text-amber-600">{pageIndex * 2 + 1}</span>
          <div className="w-8 h-px bg-amber-400" />
        </div>
      </div>

      <div className="absolute left-1/2 top-0 bottom-0 w-4 -translate-x-1/2 bg-gradient-to-r from-black/10 via-black/20 to-black/10 z-10" />

      {/* RIGHT PAGE */}
      <div className="relative w-1/2 h-full overflow-hidden bg-[#f4e8d0]">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(225deg, #f5ead6 0%, #ebe0c8 50%, #e5d8bc 100%)" }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="absolute top-[30%] right-[20%] w-14 h-14 bg-amber-800/5 rounded-full blur-xl" />
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/20 via-black/8 to-transparent" />

        <RightPageContent content={content} pageIndex={pageIndex} isFinalPage={isFinalPage} />

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          <div className="w-8 h-px bg-amber-400" />
          <span className="font-sans text-sm text-amber-600">{pageIndex * 2 + 2}</span>
          <div className="w-8 h-px bg-amber-400" />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-amber-400/40 rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-amber-400/40 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-amber-400/40 rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-amber-400/40 rounded-br-lg" />
    </div>
  )
}

// ===================================================================
// LEFT PAGE CONTENT RENDERER
// Handles all content positioning and decoration for left pages
// ===================================================================

function LeftPageContent({
  content,
  pageIndex,
  isFinalPage,
}: { content: PageContent; pageIndex: number; isFinalPage: boolean }) {
  const titleRotations = [-4, 2, -3, 5, -2]
  const titleRotation = titleRotations[pageIndex % titleRotations.length]

  const isPage1 = pageIndex === 0
  const isPage3 = pageIndex === 1
  const isPage5 = pageIndex === 2
  const isPage7 = pageIndex === 3

  if (isFinalPage) {
    return (
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center"
        >
          <h1 className="font-[var(--font-marker)] text-5xl md:text-6xl lg:text-7xl text-amber-900 mb-4">
            Coming Soon
          </h1>
          <Doodle type="underline" className="w-full h-6" />
        </motion.div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 p-4 pr-8">
      <WashiTape className="absolute -top-1 left-[10%] w-28 z-20" pattern="dots" rotation={-25 + pageIndex * 5} />
      <WashiTape className="absolute top-[30%] -left-6 w-24 z-20" pattern="stripes" rotation={85 + pageIndex * 3} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute z-40"
        style={{ top: "4%", left: "6%", transform: `rotate(${titleRotation}deg)` }}
      >
        <div className="bg-amber-50/80 px-3 py-1 rounded-lg shadow-sm inline-block">
          <h2 className="font-[var(--font-marker)] text-xl md:text-2xl lg:text-3xl text-amber-900 whitespace-nowrap">
            {content.leftTitle}
          </h2>
        </div>
        <Doodle type="underline" className="w-full h-3 mt-1" />
      </motion.div>

      {/* PAGE 1: Profile */}
      {isPage1 && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="absolute z-30"
            style={{ top: "18%", left: "8%" }}
          >
            <TapeElement rotation={-15} variant="washi" className="absolute -top-4 left-[20%] z-40" />
            <TapeElement rotation={12} variant="masking" className="absolute -top-3 right-[15%] z-40" />
            <PhotoFrame
              src={content.leftPhoto?.src || "/placeholder.svg"}
              alt={content.leftPhoto?.alt || "Profile"}
              variant={content.leftPhoto?.variant || "polaroid"}
              caption={content.leftPhoto?.caption}
              rotation={content.leftPhoto?.rotation || -3}
              className="w-64 h-72 md:w-72 md:h-80 lg:w-80 lg:h-[22rem]"
            />
          </motion.div>

          {content.leftText && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute z-50"
              style={{ bottom: "8%", left: "6%", right: "10%", transform: "rotate(-1deg)" }}
            >
              <div className="bg-white/95 p-6 md:p-7 lg:p-8 rounded-lg shadow-lg border-l-4 border-red-400">
                {content.leftText.map((text, i) => (
                  <p
                    key={i}
                    className="font-[var(--font-caveat)] text-xl md:text-2xl lg:text-3xl text-amber-900 leading-relaxed"
                    style={{ marginTop: i > 0 ? "0.75rem" : 0 }}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </motion.div>
          )}
        </>
      )}

      {/* PAGE 3: Activities - FIXED with 1 photo 1:1 */}
      {isPage3 && (
        <>
          {content.leftText && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute z-50"
              style={{ top: "16%", left: "5%", right: "8%", bottom: "45%" }}
            >
              <div className="bg-white/95 p-4 md:p-5 lg:p-6 rounded-lg shadow-lg border-l-4 border-blue-400 h-full overflow-auto">
                {content.leftText.map((text, i) => (
                  <p
                    key={i}
                    className="font-[var(--font-caveat)] text-lg md:text-xl lg:text-2xl text-amber-900 leading-relaxed"
                    style={{ marginTop: i > 0 ? "0.75rem" : 0 }}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </motion.div>
          )}

          {content.leftPhotos && content.leftPhotos[0] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute z-40"
              style={{ bottom: "12%", left: "50%", transform: "translateX(-50%)" }}
            >
              <TapeElement rotation={-10} variant="washi" className="absolute -top-4 left-[20%] z-50" />
              <TapeElement rotation={12} variant="masking" className="absolute -top-4 right-[20%] z-50" />
              <PhotoFrame
                src={content.leftPhotos[0].src}
                alt={content.leftPhotos[0].alt}
                variant={content.leftPhotos[0].variant || "polaroid"}
                caption={content.leftPhotos[0].caption}
                rotation={content.leftPhotos[0].rotation || -2}
                className="w-48 h-48 md:w-56 md:h-56 lg:w-60 lg:h-60"
              />
            </motion.div>
          )}
        </>
      )}

      {/* PAGE 5: Instagram - FIXED 4:5 ratio, frameless clickable photos */}
      {isPage5 && content.leftPhotos && (
        <div className="absolute inset-0 p-8 z-30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute"
            style={{ top: "12%", right: "10%" }}
          >
            <PhotoFrame
              src={content.leftPhotos[0]?.src || "/placeholder.svg?height=440&width=352&query=Instagram post"}
              alt={content.leftPhotos[0]?.alt || "Instagram Post 1"}
              variant="frameless"
              rotation={2}
              link={content.leftPhotos[0]?.link}
              className="w-[220px] h-[275px]"
            />
            <TapeElement rotation={-5} variant="washi" className="absolute -top-3 left-1/4 z-40" />
          </motion.div>

          {content.leftPhotos[1] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="absolute"
              style={{ bottom: "12%", left: "10%" }}
            >
              <PhotoFrame
                src={content.leftPhotos[1]?.src || "/placeholder.svg?height=440&width=352&query=Instagram post"}
                alt={content.leftPhotos[1]?.alt || "Instagram Post 2"}
                variant="frameless"
                rotation={-2}
                link={content.leftPhotos[1]?.link}
                className="w-[220px] h-[275px]"
              />
              <TapeElement rotation={8} variant="washi" className="absolute -top-3 left-1/4 z-40" />
            </motion.div>
          )}

          {content.leftText && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
              <p className="font-[var(--font-caveat)] text-2xl md:text-3xl lg:text-4xl text-gray-700 italic text-center">
                {content.leftText[0]}
              </p>
            </motion.div>
          )}
        </div>
      )}

      {/* PAGE 7: Favorite places - FIXED with 2 photos positioned neatly but slightly messy for realism */}
      {isPage7 && (
        <>
          {content.leftText && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute z-50"
              style={{ top: "16%", left: "6%", right: "10%" }}
            >
              <div className="bg-white/95 p-4 md:p-5 lg:p-6 rounded-lg shadow-lg border-l-4 border-purple-400">
                {content.leftText.map((text, i) => (
                  <p
                    key={i}
                    className="font-[var(--font-caveat)] text-xl md:text-2xl lg:text-3xl text-amber-900 leading-relaxed"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </motion.div>
          )}

          {content.leftPhotos && (
            <div className="absolute z-30" style={{ top: "38%", left: "0", right: "0", bottom: "8%" }}>
              {content.leftPhotos.slice(0, 2).map((photo, i) => {
                const positions = [
                  { top: "8%", left: "12%", rotate: -4, size: "w-40 h-48 md:w-44 md:h-52" },
                  { top: "10%", right: "8%", rotate: 3, size: "w-40 h-48 md:w-44 md:h-52" },
                ]
                const pos = positions[i]

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.12, type: "spring" }}
                    className="absolute"
                    style={{
                      top: pos.top,
                      left: pos.left,
                      right: pos.right,
                      zIndex: 30 + i,
                    }}
                  >
                    <TapeElement
                      rotation={i % 2 === 0 ? -10 : 10}
                      variant="masking"
                      className="absolute -top-3 left-[20%] z-40"
                    />
                    <PhotoFrame
                      src={photo.src}
                      alt={photo.alt}
                      variant={photo.variant || "polaroid"}
                      rotation={photo.rotation || pos.rotate}
                      className={pos.size}
                    />
                  </motion.div>
                )
              })}
            </div>
          )}
        </>
      )}

      {!isPage3 && !isPage5 && !isPage7 && (
        <>
          <Doodle type="star" className="absolute top-[45%] right-[5%] w-10 h-10 opacity-40 z-5" />
          <Doodle type="heart" className="absolute bottom-[35%] right-[20%] w-8 h-8 opacity-30 z-5" />
        </>
      )}

      <ClipElement
        color={["red", "blue", "yellow", "green"][pageIndex % 4] as any}
        className="absolute top-[3%] right-[8%] z-25"
      />
    </div>
  )
}

// ===================================================================
// RIGHT PAGE CONTENT RENDERER
// Handles all content positioning and decoration for right pages
// ===================================================================

function RightPageContent({
  content,
  pageIndex,
  isFinalPage,
}: { content: PageContent; pageIndex: number; isFinalPage: boolean }) {
  const titleRotations = [3, -4, 2, -3, 5]
  const titleRotation = titleRotations[pageIndex % titleRotations.length]

  const isPage2 = pageIndex === 0
  const isPage4 = pageIndex === 1
  const isPage6 = pageIndex === 2
  const isPage8 = pageIndex === 3

  if (isFinalPage) {
    return (
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          className="text-center"
        >
          <h1 className="font-[var(--font-marker)] text-5xl md:text-6xl lg:text-7xl text-amber-900 mb-4">Never End</h1>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 p-4 pl-8">
      <WashiTape className="absolute -top-1 right-[15%] w-26 z-20" pattern="stars" rotation={20 - pageIndex * 4} />
      <WashiTape className="absolute top-[45%] -right-6 w-22 z-20" pattern="dots" rotation={-80 + pageIndex * 3} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="absolute z-40"
        style={{ top: "4%", left: "10%", transform: `rotate(${titleRotation}deg)` }}
      >
        <Doodle type="arrow" className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-6" />
        <div className="bg-amber-50/80 px-3 py-1 rounded-lg shadow-sm inline-block">
          <h2 className="font-[var(--font-marker)] text-xl md:text-2xl lg:text-3xl text-amber-900 whitespace-nowrap">
            {content.rightTitle}
          </h2>
        </div>
      </motion.div>

      {/* PAGE 2: Journey - FIXED with 1 photo 1:1 */}
      {isPage2 && content.rightTextSections && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute z-50"
            style={{ top: "16%", left: "8%", right: "8%", maxHeight: "50%" }}
          >
            <div className="flex flex-col gap-4">
              {content.rightTextSections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="bg-white/95 p-4 md:p-5 rounded-lg shadow-lg border-r-4 border-blue-400"
                >
                  <h3 className="font-[var(--font-marker)] text-base md:text-lg lg:text-xl text-amber-800 mb-2">
                    {section.title}
                  </h3>
                  <p className="font-[var(--font-caveat)] text-lg md:text-xl lg:text-2xl text-amber-900 leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {content.rightPhotos && content.rightPhotos[0] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute z-40"
              style={{ bottom: "10%", left: "50%", transform: "translateX(-50%)" }}
            >
              <TapeElement rotation={-10} variant="washi" className="absolute -top-4 left-[20%] z-50" />
              <TapeElement rotation={12} variant="masking" className="absolute -top-4 right-[20%] z-50" />
              <PhotoFrame
                src={content.rightPhotos[0].src}
                alt={content.rightPhotos[0].alt}
                variant={content.rightPhotos[0].variant || "polaroid"}
                caption={content.rightPhotos[0].caption}
                rotation={content.rightPhotos[0].rotation || 2}
                className="w-48 h-48 md:w-56 md:h-56 lg:w-60 lg:h-60"
              />
            </motion.div>
          )}
        </>
      )}

      {/* PAGE 4: Memorable - Updated to 16:9 photo without thank you message on right */}
      {isPage4 && content.rightTextSections && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute z-50"
            style={{ top: "16%", left: "8%", right: "8%", maxHeight: "38%" }}
          >
            <div className="flex flex-col gap-4">
              {content.rightTextSections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="bg-white/95 p-4 md:p-5 rounded-lg shadow-lg border-l-4 border-green-400"
                >
                  <h3 className="font-[var(--font-marker)] text-base md:text-lg lg:text-xl text-amber-800 mb-2">
                    {section.title}
                  </h3>
                  <p className="font-[var(--font-caveat)] text-lg md:text-xl lg:text-2xl text-amber-900 leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {content.rightPhotos && content.rightPhotos[0] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute z-40"
              style={{ bottom: "10%", left: "50%", transform: "translateX(-50%)" }}
            >
              <TapeElement rotation={8} variant="masking" className="absolute -top-4 left-[15%] z-50" />
              <TapeElement rotation={-12} variant="washi" className="absolute -top-4 right-[15%] z-50" />
              <PhotoFrame
                src={content.rightPhotos[0].src}
                alt={content.rightPhotos[0].alt}
                variant={content.rightPhotos[0].variant || "polaroid"}
                caption={content.rightPhotos[0].caption}
                rotation={content.rightPhotos[0].rotation || -3}
                className="w-72 h-40 md:w-80 md:h-44 lg:w-96 lg:h-52"
              />
            </motion.div>
          )}
        </>
      )}

      {/* PAGE 6: Favorite food - Updated to use Polaroid frames positioned realistically like a scrapbook */}
      {isPage6 && (
        <>
          {content.rightText && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute z-50"
              style={{ top: "16%", left: "8%", right: "8%" }}
            >
              <div className="bg-white/95 p-4 md:p-5 lg:p-6 rounded-lg shadow-lg border-r-4 border-orange-400">
                {content.rightText.map((text, i) => (
                  <p
                    key={i}
                    className="font-[var(--font-caveat)] text-xl md:text-2xl lg:text-3xl text-amber-900 leading-relaxed"
                    style={{ marginTop: i > 0 ? "0.5rem" : 0 }}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </motion.div>
          )}

          {content.rightPhotos && (
            <div className="absolute z-40" style={{ top: "48%", left: "0%", right: "0%" }}>
              {content.rightPhotos.slice(0, 2).map((photo, i) => {
                const positions = [
                  { left: "15%", rotate: -5 },
                  { right: "10%", rotate: 4 },
                ]
                const pos = positions[i]

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
                    className="absolute"
                    style={{
                      left: pos.left,
                      right: pos.right,
                      zIndex: 40 + i,
                    }}
                  >
                    <TapeElement
                      rotation={i % 2 === 0 ? -8 : 10}
                      variant="washi"
                      className="absolute -top-4 left-[25%] z-50"
                    />
                    <PhotoFrame
                      src={photo.src}
                      alt={photo.alt}
                      variant="polaroid"
                      rotation={pos.rotate}
                      className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40"
                    />
                  </motion.div>
                )
              })}
            </div>
          )}
        </>
      )}

      {/* PAGE 8: Message - Footer moved to left side */}
      {content.centerPhoto && isPage8 && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="absolute z-40 flex items-center justify-center"
            style={{ top: 0, left: 0, right: 0, bottom: "15%" }}
          >
            <div className="relative">
              <TapeElement rotation={-12} variant="washi" className="absolute -top-4 left-[15%] z-50" />
              <TapeElement rotation={15} variant="masking" className="absolute -top-4 right-[15%] z-50" />

              <PhotoFrame
                src={content.centerPhoto.src}
                alt={content.centerPhoto.alt}
                variant={content.centerPhoto.variant || "polaroid"}
                caption={content.centerPhoto.caption}
                rotation={content.centerPhoto.rotation || 0}
                className="w-80 h-[180px] md:w-[480px] md:h-[270px]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-4 left-4 z-50"
            style={{ maxWidth: "45%" }}
          >
          </motion.div>
        </>
      )}

      {!isPage2 && !isPage4 && !isPage6 && !isPage8 && (
        <>
          <Doodle type="heart" className="absolute top-[38%] left-[5%] w-10 h-10 opacity-35 z-5" />
          <Doodle type="star" className="absolute bottom-[42%] right-[8%] w-9 h-9 opacity-40 z-5" />
        </>
      )}

      <ClipElement
        color={["yellow", "green", "red", "blue"][pageIndex % 4] as any}
        className="absolute top-[3%] left-[10%] z-25"
      />

      {content.stickers &&
        content.stickers.map((sticker, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
            className={`absolute ${sticker.position} z-20`}
          >
            <MarioSticker type={sticker.type} className={sticker.size} />
          </motion.div>
        ))}
    </div>
  )
}
