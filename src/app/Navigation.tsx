"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-lg z-50 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-xl font-bold">
            Mina Soliman
          </Link>
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="hidden lg:flex space-x-6">
            <Link href="/" className="text-white hover:text-gray-300">Home</Link>
            <Link href="/about" className="text-white hover:text-gray-300">About</Link>
            <Link href="/articles" className="text-white hover:text-gray-300">Articles</Link>
            <Link href="/gallery" className="text-white hover:text-gray-300">Gallery</Link>
            <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
            <Link 
              href="https://minarizk5.github.io/Tetris/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white bg-purple-600 hover:bg-purple-700 px-4 py-1 rounded-full transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Play Tetris</span>
              <i className="fas fa-gamepad"></i>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out z-50 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
        <div className="p-4">
          <div className="flex justify-end items-center mb-8">
            <button
              className="text-white text-2xl"
              onClick={() => setIsSidebarOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-white hover:text-gray-300" onClick={() => setIsSidebarOpen(false)}>Home</Link>
            <Link href="/about" className="text-white hover:text-gray-300" onClick={() => setIsSidebarOpen(false)}>About</Link>
            <Link href="/articles" className="text-white hover:text-gray-300" onClick={() => setIsSidebarOpen(false)}>Articles</Link>
            <Link href="/gallery" className="text-white hover:text-gray-300" onClick={() => setIsSidebarOpen(false)}>Gallery</Link>
            <Link href="/contact" className="text-white hover:text-gray-300" onClick={() => setIsSidebarOpen(false)}>Contact</Link>
            <Link 
              href="https://minarizk5.github.io/Tetris/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full transition-colors duration-200 flex items-center space-x-2 w-fit"
              onClick={() => setIsSidebarOpen(false)}
            >
              <span>Play Tetris</span>
              <i className="fas fa-gamepad"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}