import type React from "react"
import type { Metadata } from "next"
import { Inter, Anton } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Tocaa.ai",
  description: "200 MÚSICAS PRA TOCAR NO PIANO - Aprenda piano do zero com videoaulas passo a passo",
  openGraph: {
    title: "Tocaa.ai",
    description: "200 MÚSICAS PRA TOCAR NO PIANO - Aprenda piano do zero com videoaulas passo a passo",
    images: ["/og-image.jpg"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${anton.variable}`}>

      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
