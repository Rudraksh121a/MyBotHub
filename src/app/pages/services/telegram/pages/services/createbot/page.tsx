'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiEye, FiEyeOff, FiCheckCircle, FiAlertCircle, FiInfo } from 'react-icons/fi';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

// Modern stepper with vertical timeline and two-column layout
export default function CreateTelegramBot() {
  const [botName, setBotName] = useState('');
  const [botToken, setBotToken] = useState('');
  const [showToken, setShowToken] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const steps = [
    'Open Telegram and search for @BotFather',
    'Send the /newbot command',
    'Give your bot a display name',
    'Set a unique username ending with "bot"',
    'Copy the API token you receive',
    'Paste the token into the form on the right'
  ];

  const validateInputs = () => {
    if (!botName.trim()) { setError('Bot name is required'); return false; }
    if (!botToken.trim()) { setError('Bot token is required'); return false; }
    if (!/^\d+:[A-Za-z0-9_-]+$/.test(botToken)) { setError('Invalid token format'); return false; }
    return true;
  };

  const handleCreateBot = async () => {
    if (!validateInputs()) return;
    setIsLoading(true);
    setError('');
    setSuccess('');
    try {
      await new Promise(r => setTimeout(r, 2000));
      setSuccess(`Bot "${botName}" created successfully!`);
      setBotName(''); setBotToken('');
    } catch {
      setError('Creation failed, please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex-grow flex items-center justify-center py-10 px-4">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left: Vertical Timeline Stepper */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative bg-white p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Setup Steps
            </h2>
            <div className="absolute left-8 top-16 bottom-6 w-0.5 bg-indigo-200"></div>
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex items-start mb-10">
                <div className="flex flex-col items-center z-10">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {idx + 1}
                  </div>
                </div>
                <div className="ml-6 p-4 bg-gray-100 rounded-lg shadow-inner flex-1 hover:bg-gray-50 transition">
                  <p className="text-gray-700 leading-snug">{step}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Bot Creation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              Create Your Telegram Bot
            </h1>
            <p className="text-sm text-gray-500 mb-6 flex items-center justify-center gap-2">
              <FiInfo /> All fields are <span className="font-semibold">required</span>
            </p>
            <div className="space-y-6">
              {/* Bot Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bot Name</label>
                <input
                  type="text"
                  value={botName}
                  onChange={e => { setBotName(e.target.value); setError(''); }}
                  placeholder="e.g. MyAwesomeBot"
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              {/* BotFather Token */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">BotFather Token</label>
                <div className="relative">
                  <input
                    type={showToken ? 'text' : 'password'}
                    value={botToken}
                    onChange={e => { setBotToken(e.target.value); setError(''); }}
                    placeholder="123456789:ABCdefGhIjkLmNopQRStUvWxYz"
                    className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 pr-10"
                  />
                  <button
                    onClick={() => setShowToken(!showToken)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                  >
                    {showToken ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>
              {/* Feedback */}
              <AnimatePresence>
                {(error || success) && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="my-2"
                  >
                    <div className={`flex items-center gap-2 p-3 rounded-md text-sm font-medium ${
                      error ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
                    }`}>
                      {error ? <FiAlertCircle /> : <FiCheckCircle />}
                      <span>{error || success}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {/* Submit */}
              <button
                onClick={handleCreateBot}
                disabled={isLoading}
                className="w-full py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Creating...
                  </div>
                ) : 'Create Bot'}
              </button>
            </div>
          </motion.div>

        </div>
      </div>
      <Footer />
    </div>
  );
}