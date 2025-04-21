'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  DiscordLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  TextAlignMiddleIcon
    
} from '@radix-ui/react-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-100 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Platform Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/telegram" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Telegram Integration
                </Link>
              </li>
              <li>
                <Link href="/discord" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Discord Bot Setup
                </Link>
              </li>
              <li>
                <Link href="/whatsapp" className="text-gray-600 hover:text-blue-600 transition-colors">
                  WhatsApp Automation
                </Link>
              </li>
              <li>
                <Link href="/slack" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Slack Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pages/services/telegram/pages/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/pages/services/telegram/pages/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pages/services/telegram/pages/docs" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/api-reference" className="text-gray-600 hover:text-blue-600 transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-gray-600 hover:text-blue-600 transition-colors">
                  System Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Community */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Join Community</h3>
            <div className="flex space-x-4">
              <Link 
                href="https://discord.gg/your-invite-link" 
                target="_blank"
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
                aria-label="Discord Server"
              >
                <DiscordLogoIcon className="h-6 w-6 text-gray-600 hover:text-[#5865F2]" />
              </Link>
              <Link
                href="https://t.me/your-channel"
                target="_blank"
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
                aria-label="Telegram Channel"
              >
                <TextAlignMiddleIcon className="h-6 w-6 text-gray-600 hover:text-[#0088CC]" />
              </Link>
              <Link
                href="https://github.com/your-repo"
                target="_blank"
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
                aria-label="GitHub Repository"
              >
                <GitHubLogoIcon className="h-6 w-6 text-gray-600 hover:text-gray-900" />
              </Link>
              <Link
                href="https://twitter.com/your-handle"
                target="_blank"
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
                aria-label="Twitter Profile"
              >
                <TwitterLogoIcon className="h-6 w-6 text-gray-600 hover:text-[#1DA1F2]" />
              </Link>
            </div>

            {/* Newsletter */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                Subscribe to our newsletter
              </h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {currentYear} MyBotHub. All rights reserved.
            <span className="mx-2">|</span>
            <Link href="/sitemap" className="hover:text-blue-600 transition-colors">
              Sitemap
            </Link>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;