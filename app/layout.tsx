import type React from "react"
import type { Metadata, Viewport } from "next"
import { Caveat, Permanent_Marker, Press_Start_2P } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
})

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marker",
})

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
})

export const metadata: Metadata = {
  title: "KRUFAV | Kak Hanan",
  description: "Halaman apresiasi kru terbaik.",
  icons: {
    icon: "/favicon.ico", // Cara ganti icon tab (favicon)
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#E52521",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} ${permanentMarker.variable} ${pressStart.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
