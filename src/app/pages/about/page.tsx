'use client';

import { motion } from 'framer-motion';
import { RocketLaunchIcon, EyeIcon, UserGroupIcon, CommandLineIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            About Our Vision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Pioneering intelligent automation solutions for the digital age
          </motion.p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-blue-100 rounded-lg">
                <RocketLaunchIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Empower businesses worldwide with cutting-edge AI automation solutions 
              that streamline operations, enhance customer engagement, and drive 
              sustainable growth through intelligent bot ecosystems.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-purple-100 rounded-lg">
                <EyeIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Our Vision
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To become the global leader in conversational AI solutions, 
              revolutionizing how businesses interact with customers and 
              automate workflows across all digital platforms.
            </p>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div className="py-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Core Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <UserGroupIcon className="h-8 w-8 text-amber-600" />,
                title: "User-Centric",
                content: "We prioritize intuitive experiences and measurable results"
              },
              {
                icon: <CommandLineIcon className="h-8 w-8 text-blue-600" />,
                title: "Technical Excellence",
                content: "Cutting-edge solutions with robust architecture"
              },
              {
                icon: <RocketLaunchIcon className="h-8 w-8 text-purple-600" />,
                title: "Continuous Innovation",
                content: "Pushing boundaries in AI and automation tech"
              },
              {
                icon: <EyeIcon className="h-8 w-8 text-green-600" />,
                title: "Transparent Operations",
                content: "Clear processes and open communication"
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.content}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="py-12 mt-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Leadership Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Sarah Johnson",
                role: "CEO & Founder",
                bio: "AI strategy expert with 10+ years in enterprise automation",
                img: "/team/sarah.jpg"
              },
              { 
                name: "Michael Chen",
                role: "CTO",
                bio: "Lead architect of our core automation platform",
                img: "/team/michael.jpg"
              },
              { 
                name: "Emma Wilson",
                role: "Head of Product",
                bio: "Customer experience and product strategy leader",
                img: "/team/emma.jpg"
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-64 w-full">
                  <Image 
                    src={member.img} 
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                  <p className="text-amber-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 mt-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 shadow-2xl text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Start your free trial today and experience the power of AI-driven automation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-400 text-gray-900 font-semibold py-4 px-8 rounded-xl shadow-lg hover:bg-amber-300 transition-colors"
            >
              Start Free Trial
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}