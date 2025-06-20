"use client"

import { useState } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "@/hooks/useTheme"
import Button from "@/components/ui/Button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme, mounted } = useTheme()

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Blog", href: "#blog" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  if (!mounted) return null

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold text-black dark:text-white transition-colors duration-300">
            DEVLOP.ME
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 font-medium text-base lg:text-lg"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/20 dark:bg-gray-800/50 text-black dark:text-white hover:bg-white/30 dark:hover:bg-gray-700/50 transition-colors duration-200"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>

            {/* Start Project Button - Desktop */}
            <Button
              variant="secondary"
              className="hidden md:flex items-center space-x-2 bg-white dark:bg-gray-800 border-2 border-black dark:border-white text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 px-4 lg:px-6 py-2 lg:py-3 font-medium text-sm lg:text-base"
            >
              <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Start Project</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/20 dark:bg-gray-800/50 text-black dark:text-white"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg mt-2 animate-fadeInDown">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 font-medium text-lg"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="secondary"
                className="mt-4 bg-white dark:bg-gray-800 border-2 border-black dark:border-white text-black dark:text-white"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span>Start Project</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
