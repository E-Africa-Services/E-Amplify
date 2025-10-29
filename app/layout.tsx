import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { AuthProvider } from "@/lib/auth-context"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "E-Africa Services",
  description: "Delivering innovative digital solutions across Africa.",
  metadataBase: new URL("https://www.eafricaservices.com/amplify.app"),
  openGraph: {
    type: "website",
    url: "https://www.eafricaservices.com/amplify.app",
    title: "E-Africa Services",
    description: "Delivering innovative digital solutions across Africa.",
    images: [
      {
        url: "https://www.eafricaservices.com/amplify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "E-Africa Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Africa Services",
    description: "Delivering innovative digital solutions across Africa.",
    images: ["https://www.eafricaservices.com/amplify.app/og-image.png"],
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${poppins.variable} antialiased`}>
        <AuthProvider>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  )
}
