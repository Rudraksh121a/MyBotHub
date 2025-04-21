'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const pathname = usePathname();

  // TODO: Replace with your real auth check (e.g. context or token)
  const isAuthenticated = true;

  const telegramServices = [
    { name: 'Group Management Bots', href: '/services/telegram/group-management' },
    { name: 'Channel Broadcast Tools', href: '/services/telegram/channel-tools' },
    { name: 'Telegram Payment Integration', href: '/services/telegram/payments' },
    { name: 'AI Chat Automation', href: '/services/telegram/ai-chat' },
    { name: 'Telegram CRM Solutions', href: '/services/telegram/crm' },
    { name: 'Telegram Analytics Dashboard', href: '/services/telegram/analytics' },
    { name: 'Telegram Notification Systems', href: '/services/telegram/notifications' },
    { name: 'Telegram Mini Apps', href: '/services/telegram/mini-apps' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Telegram Services', href: '/services/telegram' },
    { name: 'Documentation', href: '/pages/services/telegram/pages/docs' },
    { name: 'Pricing', href: '/pages/pricing' },
    { name: 'Contact', href: '/pages/contact' },
  ];

  const isActive = (href: string) =>
    href === '/'
      ? pathname === href
      : pathname === href || pathname.startsWith(href + '/');

  return (
    <nav className="relative sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              MyBotHub
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) =>
              link.name === 'Telegram Services' ? (
                <div
                  key={link.name}
                  onMouseEnter={() => setShowServices(true)}
                  onMouseLeave={() => setShowServices(false)}
                  className="relative"
                >
                  <button
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition ${
                      isActive(link.href)
                        ? 'text-teal-600 bg-teal-50 font-semibold'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDownIcon className="h-4 w-4" />
                  </button>

                  <AnimatePresence>
                    {showServices && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200"
                      >
                        {telegramServices.map((svc) => (
                          <Link
                            key={svc.name}
                            href={svc.href}
                            className={`block px-4 py-2 text-gray-700 hover:bg-gray-50 transition ${
                              pathname === svc.href ? 'bg-teal-50' : ''
                            }`}
                          >
                            {svc.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg transition ${
                    isActive(link.href)
                      ? 'text-teal-600 bg-teal-50 font-semibold'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}

            {/* Auth Links */}
            {isAuthenticated ? (
              <Link
                href="/pages/Dashboard"
                className="px-4 py-2 text-teal-600 hover:bg-teal-50 rounded-lg transition"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/auth/login"
                className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) =>
                link.name === 'Telegram Services' ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setShowServices(!showServices)}
                      className={`flex justify-between items-center w-full py-2 px-2 rounded-lg transition ${
                        showServices ? 'bg-gray-50' : 'text-gray-600'
                      }`}
                    >
                      <span className={isActive(link.href) ? 'text-teal-600 font-semibold' : ''}>
                        {link.name}
                      </span>
                      <ChevronDownIcon
                        className={`h-5 w-5 transform transition ${
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
                          {telegramServices.map((svc) => (
                            <Link
                              key={svc.name}
                              href={svc.href}
                              className={`block py-2 px-2 rounded-lg transition ${
                                pathname === svc.href
                                  ? 'text-teal-600 bg-teal-50'
                                  : 'text-gray-600 hover:bg-gray-50'
                              }`}
                            >
                              {svc.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block py-2 px-2 rounded-lg transition ${
                      isActive(link.href)
                        ? 'text-teal-600 bg-teal-50 font-semibold'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}

              <div className="pt-4 space-y-2">
                {isAuthenticated ? (
                  <Link
                    href="/pages/Dashboard"
                    className="block w-full text-center py-2.5 text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50 transition"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    href="/auth/login"
                    className="block w-full text-center py-2.5 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
