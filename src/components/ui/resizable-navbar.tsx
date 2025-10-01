"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { 
  IconMenu2, 
  IconX, 
  IconChevronDown,
  IconHome,
  IconInfoCircle,
  IconPhone,
  IconMail
} from "@tabler/icons-react"

// Phone Banner Component
const PhoneBanner = () => {
  return (
    <div className="bg-blue-900 text-white py-2 px-2 xs:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-1 xs:space-x-2">
            <IconPhone className="w-3 h-3 xs:w-4 xs:h-4 flex-shrink-0" />
            <span className="text-xs xs:text-sm font-medium">
              <span className="hidden xs:inline">Call today! </span>
              <span className="xs:hidden">Call: </span>
              <a 
                href="tel:972-469-1102" 
                className="ml-1 font-bold hover:underline touch-manipulation"
              >
                972-469-1102
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface NavItem {
  label: string
  href: string
  icon?: React.ReactNode
  children?: NavItem[]
  external?: boolean
}

interface ResizableNavbarProps {
  items: NavItem[]
  logo?: React.ReactNode
  className?: string
  showQuoteButton?: boolean
  showCallButton?: boolean
}

export function ResizableNavbar({ items, logo, className = "", showQuoteButton = true, showCallButton = true }: ResizableNavbarProps) {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <PhoneBanner />
      <motion.nav
        className={`transition-all duration-300 ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50" 
            : "bg-transparent"
        } ${className}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {logo && React.isValidElement(logo) 
              ? React.cloneElement(logo, { isScrolled } as any)
              : logo
            }
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {items.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                          isScrolled 
                            ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50" 
                            : "text-white hover:text-blue-200 hover:bg-white/10"
                        }`}
                      >
                        {item.icon && <span className="mr-2">{item.icon}</span>}
                        {item.label}
                        <IconChevronDown 
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`} 
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1"
                          >
                            {item.children.map((child) => (
                              <a
                                key={child.label}
                                href={child.href}
                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                              >
                                {child.icon && <span className="mr-2">{child.icon}</span>}
                                {child.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.a
                      href={item.href}
                      target={item.external ? '_blank' : '_self'}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        isScrolled 
                          ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50" 
                          : "text-white hover:text-blue-200 hover:bg-white/10"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.icon && <span className="mr-2">{item.icon}</span>}
                      {item.label}
                    </motion.a>
                  )}
                </div>
              ))}
              
              {/* Action Buttons Container */}
              <div className="flex items-center space-x-3 ml-6">
                {showCallButton && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="default" 
                      className="bg-green-600 hover:bg-green-700 text-white flex items-center"
                      onClick={() => window.open('tel:+1234567890', '_self')}
                    >
                      <IconPhone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  </motion.div>
                )}
                {showQuoteButton && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline" 
                      onClick={() => navigate('/estimate')}
                      className={`transition-all duration-200 ${
                        isScrolled 
                          ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground" 
                          : "border-white text-white hover:bg-white hover:text-gray-900"
                      }`}
                    >
                      Free Quote
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-3 rounded-md transition-all duration-200 min-h-[44px] min-w-[44px] touch-manipulation ${
                isScrolled 
                  ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50" 
                  : "text-white hover:text-blue-200 hover:bg-white/10"
              }`}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <IconX className="h-6 w-6" />
                ) : (
                  <IconMenu2 className="h-6 w-6" />
                )}
              </motion.div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {items.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="flex items-center justify-between w-full px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 min-h-[48px] touch-manipulation"
                      >
                        <div className="flex items-center">
                          {item.icon && <span className="mr-3">{item.icon}</span>}
                          {item.label}
                        </div>
                        <IconChevronDown 
                          className={`h-5 w-5 transition-transform duration-200 ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`} 
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 space-y-1"
                          >
                            {item.children.map((child) => (
                              <motion.a
                                key={child.label}
                                href={child.href}
                                className="flex items-center px-4 py-3 rounded-md text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-150 min-h-[44px] touch-manipulation"
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsOpen(false)}
                              >
                                {child.icon && <span className="mr-3">{child.icon}</span>}
                                {child.label}
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.a
                      href={item.href}
                      target={item.external ? '_blank' : '_self'}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 min-h-[48px] touch-manipulation"
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon && <span className="mr-3">{item.icon}</span>}
                      {item.label}
                    </motion.a>
                  )}
                </div>
              ))}
              
              {/* Mobile Action Buttons */}
              <div className="pt-4 space-y-3 px-2">
                {showCallButton && (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      variant="default" 
                      className="bg-green-600 hover:bg-green-700 text-white w-full flex items-center justify-center py-3 text-base font-medium min-h-[48px] touch-manipulation"
                      onClick={() => window.open('tel:+1234567890', '_self')}
                    >
                      <IconPhone className="h-5 w-5 mr-2" />
                      Call Now
                    </Button>
                  </motion.div>
                )}
                {showQuoteButton && (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      variant="outline" 
                      onClick={() => navigate('/estimate')}
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full py-3 text-base font-medium min-h-[48px] touch-manipulation"
                    >
                      Free Quote
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </div>
  )
}

export default ResizableNavbar