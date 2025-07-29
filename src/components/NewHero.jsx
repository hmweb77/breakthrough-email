"use client"
import React from 'react';
import { motion } from 'framer-motion';

const NewHeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative h-screen w-full ">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/herBG2.png')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-5xl text-center text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Headline */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl  font-light leading-tight mb-12 tracking-wide"
            variants={itemVariants}
            style={{
              fontFamily: 'Georgia, serif',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
            }}
          >
            What if your biggest breakthrough isn't about learning and doing more -{' '}
            <br className="hidden sm:block" />
            but instead clearing what's quietly holding you back from{' '}
            <em className="italic">within</em>?
          </motion.h1>
          
          {/* Action Statements */}
          <motion.div 
            className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed space-y-1 mb-12"
            variants={itemVariants}
            style={{
              fontFamily: 'Georgia, serif',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)'
            }}
          >
            <div className="opacity-95">Clear the resistance.</div>
            <div className="opacity-95">Reclaim your power.</div>
            <div className="opacity-95">Lead from freedom.</div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
  className="bg-[#4A798D] text-white font-semibold mb-4 px-6 py-3 rounded-lg hover:bg-[#50A7AC] transition w-full sm:w-auto"
  variants={itemVariants}
  whileHover={{ 
    scale: 1.05,
    transition: { duration: 0.2 }
  }}
  whileTap={{ scale: 0.95 }}
  style={{
    fontFamily: 'Georgia, serif',
    textShadow: 'none'
  }}
  onClick={() => {
    document.getElementById('email')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  }}
>
  Your journey to liberation starts here
</motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewHeroSection;