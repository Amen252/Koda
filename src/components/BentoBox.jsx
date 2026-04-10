import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, Zap, BookOpen, Copy, Check, Quote } from 'lucide-react';

const BentoBox = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      {/* Absolute glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="font-mono text-[10px] font-black text-secondary uppercase tracking-[0.5em] block mb-4">
              // the.publishing.engine
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
              Built for<br />Engineers.
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-sm font-medium leading-relaxed">
            Koda is a distraction-free blogging platform designed exclusively for developers to share insights, tutorials, and architectural patterns.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          
          {/* Card 1: The Markdown Editor (Col Span 8) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-[#0a0a0a] rounded-[2rem] border border-white/10 p-1 flex flex-col relative overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            {/* Editor Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-[10px] text-white/30 tracking-widest pl-4">draft.mdx</span>
              <button onClick={handleCopy} className="text-white/20 hover:text-white transition-colors">
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            
            {/* Editor Body */}
            <div className="flex-1 p-6 sm:p-8 font-mono text-sm sm:text-base leading-loose overflow-hidden relative">
              {/* Subtle background logo watermark */}
              <FileText className="absolute right-[-10%] bottom-[-20%] w-96 h-96 text-white/[0.02] -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
              
              <div className="relative z-10">
                <span className="text-[#56b6c2] font-black"># The Architecture of Tomorrow</span>
                <br /><br />
                <span className="text-[#98c379]">We are moving away from monoliths.</span> <span className="text-[#abb2bf]">When designing your next large-scale platform, you must consider the trade-offs of microservices.</span>
                <br /><br />
                <span className="text-[#c678dd] font-bold">```javascript</span>
                <br />
                <span className="text-[#e5c07b]">const</span> <span className="text-[#61afef]">system</span> <span className="text-[#56b6c2]">=</span> <span className="text-[#c678dd] text-lg">await</span> <span className="text-[#e06c75]">build</span>();<br />
                <span className="text-[#e5c07b]">console</span>.<span className="text-[#56b6c2]">log</span>(<span className="text-[#98c379]">'Ready for traffic'</span>);
                <br />
                <span className="text-[#c678dd] font-bold">```</span>
              </div>
            </div>
            
            {/* Editor Footer / Info */}
            <div className="absolute bottom-6 right-6 flex items-center gap-3">
              <span className="px-3 py-1.5 rounded-full bg-secondary/20 text-secondary font-mono text-[9px] font-black uppercase tracking-widest border border-secondary/20 backdrop-blur-md">
                Markdown Native
              </span>
            </div>
          </motion.div>

          {/* Card 2: Community Reach (Col Span 4) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-gradient-to-br from-white/10 to-white/5 rounded-[2rem] border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            
            <div className="relative z-10 flex items-center justify-between mb-8">
              <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary/20 text-secondary rounded-full border border-secondary/20">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                <span className="font-mono text-[9px] font-black uppercase tracking-widest">Growing Daily</span>
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-5xl font-black text-white tracking-tighter mix-blend-overlay">500<span className="text-2xl text-white/50">+</span></h3>
              <p className="text-white/40 mt-2 font-mono text-[10px] uppercase tracking-widest">Active Readers</p>
            </div>
          </motion.div>

          {/* Card 3: Syntax Support (Col Span 5) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-5 bg-white/5 rounded-[2rem] border border-white/10 p-8 flex flex-col justify-between hover:bg-white/10 transition-colors relative"
          >
            <div className="relative z-10">
              <Quote className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">Rich Formatting</h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                Your articles look beautiful immediately. Seamless support for syntax highlighting, pull quotes, and embedded diagrams.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Curated Insights (Col Span 7) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-7 bg-white rounded-[2rem] p-8 flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden relative group shadow-2xl"
          >
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
            
            <div className="relative z-10 max-w-sm mb-8 md:mb-0">
              <h3 className="text-3xl font-black text-primary uppercase tracking-tighter mb-4 leading-none">Curated<br/>Knowledge.</h3>
              <p className="text-primary/60 text-sm font-medium leading-relaxed">
                Filter out the noise. Read high signal-to-noise ratio technical essays from senior engineers actively working in the industry.
              </p>
            </div>
            
            <div className="relative z-10 right-0 md:bg-white md:shadow-[-20px_0_40px_white] flex justify-end">
              <div className="p-6 bg-primary/5 rounded-[2rem] border border-primary/10 group-hover:scale-105 transition-transform duration-500">
                <BookOpen className="w-16 h-16 text-primary" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BentoBox;
