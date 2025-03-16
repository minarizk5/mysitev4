'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faGamepad, faHome, faUser, faNewspaper, faImages, faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface MobileSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function MobileSidebar({ isOpen, toggleSidebar }: MobileSidebarProps) {
  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Close sidebar when pressing escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        toggleSidebar();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, toggleSidebar]);

  // Map of navigation items with their icons
  const navItems = [
    { name: 'Home', icon: faHome, path: '/' },
    { name: 'About', icon: faUser, path: '/about' },
    { name: 'Articles', icon: faNewspaper, path: '/articles' },
    { name: 'Gallery', icon: faImages, path: '/gallery' },
    { name: 'Contact', icon: faEnvelope, path: '/contact' },
  ];

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        onClick={toggleSidebar}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-glass-dark shadow-xl backdrop-blur-lg text-white z-50 transform transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6 flex justify-between items-center border-b border-white/10">
          <Link href="/" className="text-white text-xl font-bold" onClick={toggleSidebar}>
            Mina Soliman
          </Link>
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-primary-400 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
            aria-label="Close menu"
          >
            <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={toggleSidebar}
              className="text-white flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-200 group"
            >
              <FontAwesomeIcon 
                icon={item.icon} 
                className="w-5 h-5 text-primary-400 group-hover:text-accent-light transition-colors duration-200" 
              />
              <span className="relative font-medium transition-colors duration-300 group-hover:text-primary-400">
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-accent-light transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </Link>
          ))}

          <div className="pt-4 mt-4 border-t border-white/10">
            <a
              href="https://minarizk5.github.io/Tetris/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gradient-to-r from-purple-600 to-primary-600 hover:from-purple-700 hover:to-primary-700 px-5 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-glow-sm hover:shadow-glow-md"
              onClick={toggleSidebar}
            >
              <span>Play Tetris</span>
              <FontAwesomeIcon icon={faGamepad} className="w-5 h-5" />
            </a>
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 w-full p-4 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Mina Soliman
        </div>
      </div>
    </>
  );
}