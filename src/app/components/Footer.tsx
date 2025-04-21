'use client';

import { motion } from "framer-motion";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn as FaLinkedin 
} from "react-icons/fa";

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const linkVariants = {
    hover: { scale: 1.05, color: "#fbbf24" },
    tap: { scale: 0.95 }
  };

  return (
    <footer className="bg-gray-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={footerVariants}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Branding Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              MyBotHub
            </h3>
            <p className="text-gray-400 text-sm">
              Empowering businesses with intelligent automation solutions
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-4 md:place-self-center">
            <motion.a
              href="#home"
              className="text-gray-300 hover:text-amber-400 transition-colors"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Home
            </motion.a>
            <motion.a
              href="#features"
              className="text-gray-300 hover:text-amber-400 transition-colors"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Features
            </motion.a>
            <motion.a
              href="#pricing"
              className="text-gray-300 hover:text-amber-400 transition-colors"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Pricing
            </motion.a>
            <motion.a
              href="#contact"
              className="text-gray-300 hover:text-amber-400 transition-colors"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Contact
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 md:justify-end">
            <motion.a
              href="#"
              className="text-gray-400 hover:text-amber-400 transition-colors"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-amber-400 transition-colors"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Twitter"
            >
              <FaTwitter className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-amber-400 transition-colors"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-amber-400 transition-colors"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} MyBotHub. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <motion.a
              href="#"
              className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}