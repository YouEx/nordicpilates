import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond, Open_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nordic Pilates — Opening Soon in Copenhagen',
  description: 'Elegant Scandinavian reformer Pilates. Join the waitlist to be notified when we open in Copenhagen.',
  openGraph: {
    title: 'Nordic Pilates — Opening Soon in Copenhagen',
    description: 'Elegant Scandinavian reformer Pilates. Join the waitlist to be notified when we open in Copenhagen.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da" className={`${inter.variable} ${cormorant.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
