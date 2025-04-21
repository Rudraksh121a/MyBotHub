'use client';

import React from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import { motion } from 'framer-motion';
import ServiceCard from '@components/ServiceCard';


export default function Home() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      <Navbar />
      <main className="flex flex-col items-center justify-center py-16 px-4 sm:px-8">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl w-full gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8 max-w-2xl"
          >
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Transform Your Business with{" "}
              <span className="block mt-2">AI-Powered Bots</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-xl mx-auto lg:mx-0">
              Create, deploy, and manage intelligent bots across multiple platforms. 
              Streamline operations, boost engagement, and drive growth with our all-in-one automation platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-400 text-gray-900 font-semibold py-4 px-8 rounded-xl shadow-lg hover:bg-amber-300 transition-colors flex items-center gap-2"
                onClick={() => scrollToSection('services')}
              >
                <span>Explore Features</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 011.414-1.414l6 6z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-2xl lg:max-w-none"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl shadow-2xl transform -rotate-3"></div>
            <img  
              src="/side-image.png"
              alt="AI Bot Platform Dashboard showing analytics and chatbot interface"
              className="relative z-10 w-full rounded-2xl shadow-2xl transform transition hover:scale-105"
              loading="eager"
            />
          </motion.div>
        </div>

        {/* Services Section */}
        <section id="services" className="mt-32 w-full max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Powerful Automation Solutions
              <div className="mt-4 h-1 bg-amber-400 w-24 mx-auto rounded-full" />
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
             <ServiceCard
             key={index}
             title={service.title}
             description={service.description}
             color={service.color}
             index={index}
             href={service.href}
           />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 w-full bg-white/5 backdrop-blur-lg mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Platform Features
                <div className="mt-4 h-1 bg-amber-400 w-24 mx-auto rounded-full" />
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 p-8 rounded-2xl shadow-lg"
                >
                  <div className={`w-12 h-12 rounded-xl ${feature.color} mb-6 flex items-center justify-center`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-blue-100">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Trusted by Thousands
                <div className="mt-4 h-1 bg-amber-400 w-24 mx-auto rounded-full" />
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="bg-white/10 p-8 rounded-2xl shadow-lg"
                >
                  <p className="text-blue-100 mb-6">&quot;{testimonial.text}&quot;</p>
                  <div className="flex items-center gap-4">
                    <img      
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-blue-200 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 w-full">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 shadow-2xl"
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
        </section>
      </main>
      <Footer />
    </div>
  );
}

const services = [
  {
    title: "Telegram Bots",
    description: "Create intelligent Telegram bots for customer engagement, notifications, and automated workflows.",
    color: "bg-blue-500",
    href: "/pages/services/telegram"
  },
  {
    title: "WhatsApp Automation",
    description: "Build enterprise-grade WhatsApp solutions for customer support and marketing automation.",
    color: "bg-green-500",
    href: "/pages/services/whatsapp"
  },
  {
    title: "Discord Integrations",
    description: "Develop custom Discord bots with moderation tools, game integrations, and community features.",
    color: "bg-purple-500",
    href: "/pages/services/discord"
  }
];

const features = [
  {
    title: "Drag & Drop Builder",
    description: "Intuitive visual editor for creating bot workflows without coding",
    color: "bg-pink-500",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16M4 12h16M4 12h16" />
      </svg>
    )
  },
  {
    title: "Real-time Analytics",
    description: "Comprehensive dashboard with user engagement metrics and performance tracking",
    color: "bg-cyan-500",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "Multi-platform Support",
    description: "Manage all your messaging platforms from a single unified interface",
    color: "bg-amber-500",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  }
];

const testimonials = [
  {
    text: "This platform revolutionized our customer support. Response times improved by 300%!",
    name: "Harsh kumar Gupta",
    role: "CEO at TechStart",
    avatar: "/avatars/1.jpg"
  },
  {
    text: "The easiest bot development experience we've ever had. Highly recommended!",
    name: "Raj Goud",
    role: "CTO at DigitalAgency",
    avatar: "/avatars/2.jpg"
  },
  {
    text: "Our engagement rates skyrocketed after implementing their WhatsApp solutions.",
    name: "Pranav Verma",
    role: "Marketing Director",
    avatar: "/avatars/3.jpg"
  }
];