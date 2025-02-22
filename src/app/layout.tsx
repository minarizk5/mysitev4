import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mina Soliman',
  description: 'Personal website and portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <nav className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-lg z-50 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-white text-xl font-bold">
              Mina Soliman
            </Link>
            <div className="space-x-6">
              <Link href="/" className="text-white hover:text-gray-300">Home</Link>
              <Link href="/about" className="text-white hover:text-gray-300">About</Link>
              <Link href="/articles" className="text-white hover:text-gray-300">Articles</Link>
              <Link href="/gallery" className="text-white hover:text-gray-300">Gallery</Link>
              <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
            </div>
          </div>
        </nav>
        <main className="min-h-screen pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}
