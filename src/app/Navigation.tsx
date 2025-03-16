"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 shadow-2xl' : 'bg-transparent'} backdrop-blur-xl backdrop-saturate-150`}>
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <Link href="/" className="text-white text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:bg-gradient-to-l hover:from-pink-400 hover:via-purple-400 hover:to-cyan-400 transition-all duration-500 hover:scale-105 hover:-translate-y-1 transform-gpu">
            Mina Soliman
          </Link>
          <button
            className="lg:hidden text-white text-2xl hover:text-purple-400 transition-colors duration-300"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="hidden lg:flex space-x-8">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Articles', '/articles'],
              ['Gallery', '/gallery'],
              ['Contact', '/contact']
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="relative text-white hover:text-purple-400 transition-colors duration-300 py-2 group"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 group-hover:w-full transition-all duration-500 transform-gpu origin-left rounded-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-2xl backdrop-saturate-150 transform transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] z-50 ${isSidebarOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} lg:hidden shadow-2xl`}
      >
        <div className="p-6">
          <button
            className="text-white text-2xl mb-8 hover:text-purple-400 transition-colors duration-300"
            onClick={() => setIsSidebarOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="flex flex-col space-y-6">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Articles', '/articles'],
              ['Gallery', '/gallery'],
              ['Contact', '/contact']
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-white hover:text-purple-400 transition-colors duration-300 transform hover:translate-x-2"
                onClick={() => setIsSidebarOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}