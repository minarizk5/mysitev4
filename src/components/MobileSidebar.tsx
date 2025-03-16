import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faGamepad } from '@fortawesome/free-solid-svg-icons';

interface MobileSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function MobileSidebar({ isOpen, toggleSidebar }: MobileSidebarProps) {
  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-glass backdrop-blur-lg text-white z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Menu</h2>
        <button
          onClick={toggleSidebar}
          className="text-white hover:text-primary-400 transition-colors duration-300"
          aria-label="Close menu"
        >
          <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
        </button>
      </div>
      <nav className="flex flex-col p-4 space-y-2">
        {['Home', 'About', 'Articles', 'Gallery', 'Contact'].map((item) => (
          <Link
            key={item}
            href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
            onClick={toggleSidebar}
            className="text-white relative py-2 px-4 overflow-hidden group"
          >
            <span className="relative z-10 font-medium transition-colors duration-300 group-hover:text-primary-400">
              {item}
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-accent-light transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            <span className="absolute inset-0 w-full h-full bg-white/5 scale-0 rounded-lg transition-transform duration-300 group-hover:scale-100 opacity-0 group-hover:opacity-100"></span>
          </Link>
        ))}
        <a
          href="https://minarizk5.github.io/Tetris/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gradient-to-r from-purple-600 to-primary-600 hover:from-purple-700 hover:to-primary-700 px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 mt-4"
          onClick={toggleSidebar}
        >
          <span>Play Tetris</span>
          <FontAwesomeIcon icon={faGamepad} className="w-5 h-5" />
        </a>
      </nav>
    </div>
  );
}