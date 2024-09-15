import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zen Login',
  description: 'A minimalist login page with a zen theme',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
            {children}
        </Providers>
        </body>
    </html>
  )
}

// MADE BY MILLOSAURS; AKA SHARAN SHRIVATSAV :)
