import React from 'react';
import { Github, Terminal, CheckCircle2, Command } from 'lucide-react';
import { motion } from 'framer-motion';
import mao from '../assets/Mao.jpeg';
import moves from '../assets/ismail.jpeg';
import mare from '../assets/mare.jpeg';
import sadaq from '../assets/sadaq.jpeg';

const testimonials = [
  {
    name: "MAO",
    role: "Founder of Koda",
    text: "Koda was born from a need for pure signal in the dev ecosystem. It's built for builders, by builders.",
    avatar: mao,
    social: <Github className="w-4 h-4" />,
    span: "lg:col-span-8"
  },
  {
    name: "Ismail Abdifadil",
    role: "Fullstack Dev @ JTECH",
    text: "Koda is my daily driver for keeping up with the JS ecosystem.",
    avatar: moves,
    social: <Terminal className="w-4 h-4" />,
    span: "lg:col-span-4"
  },
  {
    name: "Hodan Ibrahim",
    role: "Fullstack Developer",
    text: "The aesthetic of the site alone keeps me coming back.",
    avatar: mare,
    social: <Github className="w-4 h-4" />,
    span: "lg:col-span-4"
  },
  {
    name: "Sadak Mohamed",
    role: "Fullstack Developer",
    text: "Sharing my cloud architecture articles here helped me establish my personal brand in the tech space.",
    avatar: sadaq,
    social: <CheckCircle2 className="w-4 h-4" />,
    span: "lg:col-span-8"
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-transparent relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-24 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4 opacity-30">
              <Command className="w-4 h-4 text-primary" />
              <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-[0.4em]">
                stdout.process()
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-primary leading-none tracking-tighter">
              The Collective.
            </h2>
          </div>
          <div className="hidden lg:block font-mono text-[10px] font-bold text-primary/20 uppercase tracking-widest">
            Rows: {testimonials.length} // Latency: 12ms
          </div>
        </div>

        {/* Cardless Layout (Stream Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-32">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`${t.span} group relative pl-10 lg:pl-16 border-l border-primary/5 hover:border-primary/20 transition-all duration-700`}
            >
              {/* Terminal-Inspired Head */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="w-10 h-10 rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-md">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  {index === 0 && (
                    <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-primary rounded-full border-2 border-[#F5F5F5]" />
                  )}
                </div>
                <div>
                  <h4 className="font-black text-primary text-sm uppercase tracking-tight">{t.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-mono text-[9px] font-bold text-primary/30 uppercase tracking-widest">
                      {t.role}
                    </span>
                    <div className="w-1 h-1 rounded-full bg-primary/10" />
                    <span className="font-mono text-[8px] text-primary/20">
                      0{index + 1}_NODE
                    </span>
                  </div>
                </div>
              </div>

              {/* Quote as Block Comment */}
              <div className="relative">
                 <div className="absolute -left-10 lg:-left-16 top-0 text-primary/5 font-mono text-xl select-none">
                  &rsaquo;
                </div>
                <p className="text-base text-primary/60 font-medium leading-relaxed max-w-2xl italic group-hover:text-primary transition-colors duration-500">
                  {t.text}
                </p>
              </div>

              {/* Functional Indicator */}
              <div className="mt-8 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="h-[1px] w-8 bg-primary/20" />
                <span className="font-mono text-[8px] font-black text-primary/20 uppercase tracking-[0.4em]">
                  verified_status: ok
                </span>
                <CheckCircle2 className="w-3 h-3 text-primary/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
