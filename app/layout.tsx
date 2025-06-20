import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sporting" })

export const metadata: Metadata = {
  title: "DEVLOP.ME - Developer Portfolio",
  description:
    "Trusted Partner for Your Website Development - Building the worlds best marketing websites for over a decade.",
  keywords: "web development, portfolio, marketing websites, strategy, design, development, williamrey",
  authors: [{ name: "William Rey" }],
  openGraph: {
    title: "DEVLOP.ME - Developer Portfolio",
    description: "Trusted Partner for Your Website Development",
    type: "website",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${grotesk.variable}`}>{children}</body>
    </html>
  )
}
