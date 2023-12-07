import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YM Arcade',
  description: 'Arcade Site by Yeong Meng',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  )
}
