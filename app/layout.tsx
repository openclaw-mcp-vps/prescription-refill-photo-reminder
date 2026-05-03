import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RxSnap – Photo-Based Prescription Refill Reminders',
  description: 'Snap a photo of your pill bottle, extract refill dates via OCR, and get smart SMS/email reminders before you run out.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7e5c01dd-bf22-40a5-acef-b7a3ef4841a1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
