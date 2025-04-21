'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const pathname = usePathname();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLoggedIn=false;
   // Replace with actual authentication logic

  const services = [
    { name: 'Telegram Bots', href: '/pages/services/telegram' },
    { name: 'WhatsApp Automation', href: '/pages/services/whatsapp' },
    { name: 'Discord Integration', href: '/pages/services/discord' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/pages/services' },
    { name: 'About', href: '/pages/about' },
    { name: 'Pricing', href: '/pages/pricing' },
    { name: 'Contact', href: '/pages/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.h1 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent"
            >
              MyBotHub
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.name === 'Services' ? (
                  <div
                    onMouseEnter={() => setShowServices(true)}
                    onMouseLeave={() => setShowServices(false)}
                    className="relative"
                  >
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      className={`flex items-center space-x-1 ${
                        pathname.startsWith('/pages/services') 
                          ? 'text-amber-600 font-semibold' 
                          : 'text-gray-700 hover:text-amber-600'
                      } transition-colors`}
                    >
                      <span>{link.name}</span>
                      <ChevronDownIcon className="h-4 w-4 transition-transform" />
                    </motion.button>

                    <AnimatePresence>
                      {showServices && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100"
                        >
                          {services.map((service, index) => (
                            <motion.div
                              key={service.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1, type: 'spring' }}
                            >
                              <Link
                                href={service.href}
                                className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {service.name}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                      href={link.href}
                      className={`${
                        pathname === link.href
                          ? 'text-amber-600 font-semibold'
                          : 'text-gray-700 hover:text-amber-600'
                      } transition-colors`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/pages/Dashboard"
                  className="px-4 py-2 text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                >
                  Dashboard
                </Link>
              </motion.div>
            ) : (
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/auth/login"
                  className="bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 px-6 py-2 rounded-lg hover:shadow-lg transition-all block"
                >
                  Login
                </Link>
              </motion.div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Mobile menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-white border-t border-gray-100 shadow-lg z-50"
          >
            <div className="px-4 pt-4 pb-8 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-100">
                  {link.name === 'Services' ? (
                    <div className="relative">
                      <button
                        onClick={() => setShowServices(!showServices)}
                        className="flex justify-between items-center w-full py-3 text-gray-600"
                        aria-expanded={showServices}
                      >
                        <span>Services</span>
                        <ChevronDownIcon
                          className={`h-5 w-5 transition-transform ${
                            showServices ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {showServices && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block py-2 text-gray-600 hover:text-amber-600 transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block py-3 text-gray-600 hover:text-amber-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 space-y-4">
                {isLoggedIn ? (
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/pages/dashboard"
                      className="block w-full text-center py-2 text-amber-600 border border-amber-600 rounded-lg hover:bg-amber-50"
                      onClick={() => setIsOpen(false)}
                    >
                      Dashboard
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/auth/login"
                      className="block w-full text-center py-2 bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 rounded-lg hover:shadow-md transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;