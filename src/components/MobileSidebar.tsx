"use client"

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
interface MobileSidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
}

export default function MobileSidebar({ isOpen, toggleSidebar }: MobileSidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isOpen) {
        toggleSidebar()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, toggleSidebar])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  const handleNavigation = () => {
    toggleSidebar()
  }

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/articles', label: 'Articles' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={toggleSidebar}
            aria-hidden="true"
          />
          <motion.div
            ref={sidebarRef}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-0 left-0 h-full w-72 bg-slate-900/90 backdrop-blur-xl z-50"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="h-full flex flex-col p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-white">Navigation</h2>
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.path}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={item.path}
                      onClick={handleNavigation}
                      className="block w-full text-left px-4 py-3 text-white rounded-lg hover:bg-white/10 transition-colors flex items-center space-x-3"
                    >
                      <span className="text-lg">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pt-6 border-t border-white/10">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="https://minarizk5.github.io/Tetris/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-3 text-center text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors shadow-lg"
                    onClick={toggleSidebar}
                  >
                    Play Tetris
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}