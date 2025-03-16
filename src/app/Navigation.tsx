"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faBars } from '@fortawesome/free-solid-svg-icons'
import MobileSidebar from '@/components/MobileSidebar'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
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
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full bg-glass backdrop-blur-lg z-50 p-4 transition-all duration-300 ${scrolled ? 'shadow-md bg-glass-dark' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-glass-light to-transparent opacity-10"></div>
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-xl font-bold font-heading relative group overflow-hidden">
            <span className="relative z-10 bg-clip-text bg-gradient-to-r from-primary-400 to-accent-light text-transparent">Mina Soliman</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-accent-light transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
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
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleSidebar}
            className="md:hidden text-white hover:text-primary-400 transition-colors duration-300"
            aria-label="Open menu"
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
        </div>
      </nav>
      
      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  )
}