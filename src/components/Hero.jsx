import React from 'react';
import { SquareCode, Activity, Binary, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImg from '../assets/Hero.png';
import mao from '../assets/Mao.jpeg';
import dalfac from '../assets/dalfac.jpeg';
import ismail from '../assets/ismail.jpeg';
import mare from '../assets/mare.jpeg';
import sadaq from '../assets/sadaq.jpeg';

const Hero = () => {
  const communityImages = [mao, dalfac, ismail, mare, sadaq];
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      
      {/* Cinematic Background Image - High-Visibility Pro Look */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 w-full lg:w-3/4" />
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full lg:w-2/3 h-full relative"
        >
          <img
            src={heroImg}
            alt="Koda Platform Background"
            className="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply"
          />
           <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white to-transparent z-20" />
           <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent z-20" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full pt-20">
        <div className="max-w-3xl">
          
          {/* Status Strip - No Underscores */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6 mb-16 select-none pl-1"
          >
            <div className="flex items-center gap-2 group">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(2,26,84,0.4)]" />
              <span className="text-[10px] font-mono font-black text-primary uppercase tracking-[0.3em]">Koda Environment</span>
            </div>
            <div className="h-4 w-[1px] bg-primary/10" />
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold text-primary/30 uppercase tracking-[0.2em]">Status</span>
              <span className="text-[10px] font-mono font-black text-primary/60 uppercase tracking-[0.1em]">Stable v1.0</span>
            </div>
          </motion.div>
          
          {/* Main Content Block - Precision Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <h1 className="text-6xl lg:text-8xl font-black leading-[1.1] tracking-tighter text-primary">
              Where Ideas <br />
              Meet Reality.
            </h1>
            
            <p className="text-xl text-primary/80 leading-relaxed max-w-xl font-medium">
              Join a community of forward-thinking builders sharing insights, trending frameworks, and developer lifestyle stories.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <button className="w-full sm:w-auto btn-primary flex items-center justify-center gap-3">
                Initialize Access
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto btn-outline">
                View Showcase
              </button>
            </div>

            {/* Community Proof - No Underscores */}
            <div className="pt-20 flex items-center gap-8 border-t border-primary/5">
              <div className="flex -space-x-4">
                {communityImages.map((img, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-white shadow-xl hover:scale-110 hover:z-50 transition-all duration-300">
                    <img src={img} alt="member" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-grayscale duration-500" />
                  </div>
                ))}
              </div>
              <div className="text-[10px] font-mono font-bold text-primary/40 uppercase tracking-[0.3em] leading-loose">
                <p className="text-primary/60">Growing Community</p>
                <p>Global Collective v2</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
