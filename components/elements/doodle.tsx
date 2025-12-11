"use client"

interface DoodleProps {
  type: "underline" | "star" | "heart" | "arrow" | "circle"
  className?: string
}

export default function Doodle({ type, className = "" }: DoodleProps) {
  return (
    <div className={className}>
      <DoodleContent type={type} />
    </div>
  )
}

function DoodleContent({ type }: { type: DoodleProps["type"] }) {
  const strokeColor = "#8B4513"

  switch (type) {
    case "underline":
      return (
        <svg viewBox="0 0 100 10" className="w-full h-full">
          <path
            d="M0,5 Q25,8 50,5 T100,5"
            fill="none"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      )
    case "star":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path
            d="M12,2 L14,9 L21,9 L15,14 L17,21 L12,17 L7,21 L9,14 L3,9 L10,9 Z"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "heart":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path
            d="M12,21 C12,21 3,14 3,8 C3,4 7,2 12,6 C17,2 21,4 21,8 C21,14 12,21 12,21 Z"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )
    case "arrow":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path
            d="M5,12 L19,12 M14,7 L19,12 L14,17"
            fill="none"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case "circle":
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <circle cx="12" cy="12" r="10" fill="none" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="2,3" />
        </svg>
      )
    default:
      return null
  }
}
