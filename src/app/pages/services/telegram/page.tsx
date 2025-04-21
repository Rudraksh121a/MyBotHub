'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ChatBubbleOvalLeftIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';
import Navbar from './components/telegramNavbar';
import Footer from './components/footer';

export default function TelegramServicePage() {
  const router = useRouter();

  const features = [
    {
      title: 'Smart Chat Automation',
      icon: <ChatBubbleOvalLeftIcon className="h-8 w-8 text-blue-600" />,
      description:
        'AI‑powered message handling for groups & channels with natural conversation flow',
    },
    {
      title: 'Payment Integration',
      icon: <CurrencyDollarIcon className="h-8 w-8 text-green-600" />,
      description:
        "Secure payment processing through Telegram's native payment system",
    },
    {
      title: 'Performance Analytics',
      icon: <ChartBarIcon className="h-8 w-8 text-purple-600" />,
      description:
        'Real‑time tracking of message delivery, engagement, and conversion rates',
    },
    {
      title: 'Enterprise Security',
      icon: <ShieldCheckIcon className="h-8 w-8 text-red-600" />,
      description:
        'End‑to‑end encryption & GDPR compliance for all communications',
    },
  ];

  const useCases = [
    {
      title: 'Customer Support Automation',
      description: '24/7 automated customer service with AI‑powered responses',
      icon: '💬',
    },
    {
      title: 'E‑commerce Management',
      description: 'Full store management via Telegram interface',
      icon: '🛒',
    },
    {
      title: 'Community Moderation',
      description: 'Auto‑moderation tools for large Telegram groups',
      icon: '🛡️',
    },
    {
      title: 'Content Broadcasting',
      description: 'Scheduled delivery to millions of subscribers',
      icon: '📢',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Transform Telegram Management with
            <span className="block bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Advanced Automation
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Build enterprise‑grade Telegram solutions with AI‑driven workflows,
            secure payments, and real‑time analytics for unparalleled engagement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/pages/services/telegram/pages/services/createbot')}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Start Building Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/pages/services/telegram/pages/docs')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition"
            >
              Explore Documentation
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-bold text-gray-900"
            >
              Popular Implementation Scenarios
            </motion.h2>
            <p className="text-gray-600 mt-2">
              See how others are revolutionizing their Telegram operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((u, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl hover:bg-white transition"
              >
                <div className="text-3xl mb-4">{u.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{u.title}</h3>
                <p className="text-gray-600">{u.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900">Technical Capabilities</h2>
            <div className="space-y-6">
              <Spec
                icon={<CodeBracketIcon className="h-6 w-6 text-blue-600" />}
                title="API Integration"
                desc="RESTful endpoints with WebSocket support for real‑time interactions"
              />
              <Spec
                icon={<ShieldCheckIcon className="h-6 w-6 text-green-600" />}
                title="Security Protocols"
                desc="Military‑grade encryption, 2FA, and detailed audit logs"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Integration Highlights</h3>
            <ul className="space-y-4 text-gray-700">
              {[
                'Native Telegram Bot API support',
                'Webhook configuration wizard',
                'Multi‑language SDKs (Python, Node.js, Java)',
                'Pre‑built workflow templates',
              ].map((line, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="block w-2 h-2 bg-blue-600 rounded-full" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Developer Quick‑Start */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-bold">Developer Quick‑Start</h2>
          <p>Install our SDK and get your first bot running in under 5 minutes:</p>
          <code className="block bg-white bg-opacity-20 p-4 rounded-lg font-mono">
            npm install mybothub-sdk
          </code>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/docs/telegram/quickstart')}
            className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Read Quick‑Start
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Spec({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
