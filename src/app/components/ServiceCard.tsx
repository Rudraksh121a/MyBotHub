'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  color: string;
  index: number;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  color, 
  index, 
  href 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100
      }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="relative rounded-2xl bg-white/5 backdrop-blur-lg p-8 border border-white/10 shadow-lg hover:shadow-xl transition-all group overflow-hidden"
    >
      {/* Gradient accent */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

      <div className="relative z-10">
        {/* Icon container */}
        <div className={`mb-6 w-12 h-12 rounded-xl ${color} flex items-center justify-center`}>
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 10V3L4 14h7v7l9-11h-7z" 
            />
          </svg>
        </div>

        <h3 className="text-white text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-300 leading-relaxed mb-6">{description}</p>

        <Link
          href={href}
          className="inline-flex items-center text-amber-400 hover:text-amber-300 font-medium transition-colors"
        >
          Explore Service
          <svg 
            className="w-4 h-4 ml-2" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
              clipRule="evenodd" 
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;