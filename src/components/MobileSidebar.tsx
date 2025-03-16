'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Articles', path: '/articles' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Simple overlay */}
      {isOpen && (
        <div 
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/50 z-40"
          aria-hidden="true"
        />
      )}

      {/* Simple sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <Link href="/" className="text-white text-xl font-bold" onClick={toggleSidebar}>
            Mina Soliman
          </Link>
          <button
            onClick={toggleSidebar}
            className="text-white p-2"
            aria-label="Close menu"
          >
            <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col p-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={toggleSidebar}
              className="text-white py-2 px-3 hover:bg-gray-700 rounded my-1"
            >
              {item.name}
            </Link>
          ))}
          
          <a
            href="https://minarizk5.github.io/Tetris/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 pt-4 border-t border-gray-700 text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded text-center"
            onClick={toggleSidebar}
          >
            Play Tetris
          </a>
        </nav>

        <div className="absolute bottom-0 left-0 w-full p-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Mina Soliman
        </div>
      </div>
    </>
  );
}