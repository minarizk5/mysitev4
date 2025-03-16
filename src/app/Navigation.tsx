"use client"

import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faGamepad } from '@fortawesome/free-solid-svg-icons'

export default function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect for navigation with debounce for better performance
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrolled(window.scrollY > 20);
      }, 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);
  
  // Close sidebar when clicking outside on mobile
  const closeSidebar = useCallback(() => {
    if (isSidebarOpen) setIsSidebarOpen(false);
  }, [isSidebarOpen])

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full bg-glass backdrop-blur-lg z-50 p-4 transition-all duration-300 ${scrolled ? 'shadow-md bg-glass-dark' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-glass-light to-transparent opacity-10"></div>
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-xl font-bold font-heading relative group overflow-hidden">
            <span className="relative z-10 bg-clip-text bg-gradient-to-r from-primary-400 to-accent-light text-transparent">Mina Soliman</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-accent-light transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <button
            className="lg:hidden text-white text-2xl"
            onClick={(e) => {
              e.stopPropagation();
              setIsSidebarOpen(!isSidebarOpen);
            }}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-white relative py-2 px-1 overflow-hidden group">
              <span className="relative z-10 font-medium transition-colors duration-300 group-hover:text-primary-400">Home</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-accent-light transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              <span className="absolute inset-0 w-full h-full bg-white/5 scale-0 rounded-lg transition-transform duration-300 group-hover:scale-100 opacity-0 group-hover:opacity-100"></span>
            </Link>
            <Link href="/about" className="text-white relative py-2 px-1 overflow-hidden group">
              <span className="relative z-10 font-medium transition-colors duration-300 group-hover:text-primary-400">About</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-accent-light transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              <span className="absolute inset-0 w-full h-full bg-white/5 scale-0 rounded-lg transition-transform duration-300 group-hover:scale-100 opacity-0 group-hover:opacity-100"></span>
            </Link>
            <Link href="/articles" className="text-white relative py-2 px-1 overflow-hidden group">
              <span className="relative z-10 font-medium transition-colors duration-300 group-hover:text-primary-400">Articles</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-accent-light transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              <span className="absolute inset-0 w-full h-full bg-white/5 scale-0 rounded-lg transition-transform duration-300 group-hover:scale-100 opacity-0 group-hover:opacity-100"></span>
            </Link>
            <Link href="/gallery" className="text-white relative py-2 px-1 overflow-hidden group">
              <span className="relative z-10 font-medium transition-colors duration-300 group-hover:text-primary-400">Gallery</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-accent-light transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              <span className="absolute inset-0 w-full h-full bg-white/5 scale-0 rounded-lg transition-transform duration-300 group-hover:scale-100 opacity-0 group-hover:opacity-100"></span>
            </Link>
            <Link href="/contact" className="text-white relative py-2 px-1 overflow-hidden group">
              <span className="relative z-10 font-medium transition-colors duration-300 group-hover:text-primary-400">Contact</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-accent-light transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              <span className="absolute inset-0 w-full h-full bg-white/5 scale-0 rounded-lg transition-transform duration-300 group-hover:scale-100 opacity-0 group-hover:opacity-100"></span>
            </Link>
            <Link 
              href="https://minarizk5.github.io/Tetris/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white bg-gradient-to-r from-purple-600 to-primary-600 hover:from-purple-700 hover:to-primary-700 px-4 py-1 rounded-full transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40 hover:translate-y-[-2px]"
            >
              <span>Play Tetris</span>
              <FontAwesomeIcon icon={faGamepad} className="w-6 h-6 animate-pulse-soft" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}
      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-glass-dark backdrop-blur-xl transform transition-all duration-300 ease-in-out z-50 ${isSidebarOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} lg:hidden border-l border-white/10 shadow-xl`}>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-transparent opacity-50 pointer-events-none"></div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold font-heading bg-clip-text bg-gradient-to-r from-primary-400 to-accent-light text-transparent">Mina Soliman</span>
            <button
              className="text-white text-xl w-10 h-10 rounded-full bg-glass-light backdrop-blur-sm flex items-center justify-center hover:bg-white/10 transition-all duration-200"
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
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
              <FontAwesomeIcon icon={faGamepad} className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}