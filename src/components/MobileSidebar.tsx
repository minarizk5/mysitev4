"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faGamepad } from '@fortawesome/free-solid-svg-icons'

interface MobileSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function MobileSidebar({ isOpen, toggleSidebar }: MobileSidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isOpen) {
        toggleSidebar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);

  // Prevent body scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div 
      ref={sidebarRef}
      id="mobile-sidebar"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className={`fixed top-0 right-0 h-full w-64 bg-glass backdrop-blur-lg z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-glass-light via-glass to-glass-dark opacity-50"></div>
      <div className="relative z-10 h-full flex flex-col p-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold bg-clip-text bg-gradient-to-r from-primary-400 to-accent-light text-transparent">Menu</h2>
          <button 
            onClick={toggleSidebar}
            className="text-white hover:text-primary-400 transition-colors duration-300"
            aria-label="Close menu"
            aria-expanded={isOpen}
            role="button"
          >
            <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="flex flex-col space-y-4">
          <Link 
            href="/" 
            className="text-white relative py-2 overflow-hidden group"
            onClick={toggleSidebar}
          >
            <span className="relative z-10 font-medium transition-colors duration-300 group-hover:text-primary-400">Home</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-accent-light transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          
          <Link 
            href="/about" 
            className="text-white relative py-2 overflow-hidden group"
            onClick={toggleSidebar}
          >
            <span className="relative z-10 font-medium transition-colors duration-300 group-hover:text-primary-400">About</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-accent-light transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          
          <Link 
            href="/articles" 
            className="text-white relative py-2 overflow-hidden group"
            onClick={toggleSidebar}
          >
            <span className="relative z-10 font-medium transition-colors duration-300 group-hover:text-primary-400">Articles</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-accent-light transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          
          <Link 
            href="/gallery" 
            className="text-white relative py-2 overflow-hidden group"
            onClick={toggleSidebar}
          >
            <span className="relative z-10 font-medium transition-colors duration-300 group-hover:text-primary-400">Gallery</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-accent-light transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          
          <Link 
            href="/contact" 
            className="text-white relative py-2 overflow-hidden group"
            onClick={toggleSidebar}
          >
            <span className="relative z-10 font-medium transition-colors duration-300 group-hover:text-primary-400">Contact</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-accent-light transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </nav>
        
        <div className="mt-auto pt-6 border-t border-white/10">
          <Link 
            href="https://minarizk5.github.io/Tetris/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white bg-gradient-to-r from-purple-600 to-primary-600 hover:from-purple-700 hover:to-primary-700 px-4 py-2 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40 hover:translate-y-[-2px] w-full"
            onClick={toggleSidebar}
          >
            <span>Play Tetris</span>
            <FontAwesomeIcon icon={faGamepad} className="w-5 h-5 animate-pulse-soft" />
          </Link>
        </div>
      </div>
    </div>
  )
}