'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGamepad } from '@fortawesome/free-solid-svg-icons';
import MobileSidebar from '../components/MobileSidebar';

export default function Navigation() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-glass-dark shadow-lg' : 'bg-glass'
        } backdrop-blur-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-white text-2xl font-bold">
                Mina Soliman
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {['Home', 'About', 'Articles', 'Gallery', 'Contact'].map(
                (item) => (
                  <Link
                    key={item}
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-white relative py-2 px-1 overflow-hidden group"
                  >
                    <span className="relative z-10 font-medium transition-colors duration-300 group-hover:text-primary-400">
                      {item}
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-accent-light transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                    <span className="absolute inset-0 w-full h-full bg-white/5 scale-0 rounded-lg transition-transform duration-300 group-hover:scale-100 opacity-0 group-hover:opacity-100"></span>
                  </Link>
                )
              )}
              <a
                href="https://minarizk5.github.io/Tetris/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gradient-to-r from-purple-600 to-primary-600 hover:from-purple-700 hover:to-primary-700 px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2"
              >
                <span>Play Tetris</span>
                <FontAwesomeIcon icon={faGamepad} className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleSidebar}
                className="text-white hover:text-primary-400 transition-colors duration-300"
                aria-label="Open menu"
                aria-expanded={sidebarOpen}
                aria-controls="mobile-sidebar"
              >
                <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-glass-light to-transparent opacity-10" />
      </nav>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}