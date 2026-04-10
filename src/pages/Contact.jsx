import React from 'react';
import { Mail, MapPin, Phone, Send, Github, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center pt-40 pb-20 relative overflow-hidden">
        {/* Subtle Pro Grid Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #021a54 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Pillar: High-Signal Info */}
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 opacity-30">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono text-[9px] font-black uppercase tracking-[0.4em]">status.available</span>
                </div>
                <h1 className="text-6xl lg:text-7xl font-black text-primary leading-none tracking-tighter uppercase">
                  Contact<span className="text-primary/10">.</span>
                </h1>
                <p className="text-xl text-primary font-bold leading-tight uppercase opacity-60">
                  Ready to process your <br />technical inquiries.
                </p>
              </div>

              <div className="space-y-8">
                <div className="group cursor-default">
                  <span className="font-mono text-[8px] font-black text-primary/30 uppercase tracking-[0.3em] block mb-2">Comm Channel</span>
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-primary/5 rounded-lg text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Mail className="w-4 h-4" />
                    </div>
                    <a href="mailto:hello@koda.com" className="text-lg font-black text-primary hover:text-primary/60 transition-colors">hello@koda.com</a>
                  </div>
                </div>

                <div className="group cursor-default">
                  <span className="font-mono text-[8px] font-black text-primary/30 uppercase tracking-[0.3em] block mb-2">Physical Node</span>
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-primary/5 rounded-lg text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <p className="text-lg font-black text-primary uppercase leading-tight">Mogadishu, Somalia</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-10 border-t border-primary/5">
                {[Github, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="p-3 bg-primary/5 text-primary/40 rounded-xl hover:bg-primary hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Pillar: Refined Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-white border-2 border-primary/5 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl shadow-primary/5 overflow-hidden">
                <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="First Name"
                    className="w-full bg-primary/[0.02] border border-primary/5 focus:border-primary/20 focus:bg-white rounded-xl px-5 py-4 text-sm font-black text-primary placeholder:text-primary/10 transition-all outline-none"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name"
                    className="w-full bg-primary/[0.02] border border-primary/5 focus:border-primary/20 focus:bg-white rounded-xl px-5 py-4 text-sm font-black text-primary placeholder:text-primary/10 transition-all outline-none"
                  />
                </div>

                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-primary/[0.02] border border-primary/5 focus:border-primary/20 focus:bg-white rounded-xl px-5 py-4 text-sm font-black text-primary placeholder:text-primary/10 transition-all outline-none"
                />

                <textarea 
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full bg-primary/[0.02] border border-primary/5 focus:border-primary/20 focus:bg-white rounded-2xl px-5 py-5 text-sm font-black text-primary placeholder:text-primary/10 transition-all outline-none resize-none"
                ></textarea>

                  <button className="w-full btn-primary py-4 rounded-xl flex items-center justify-center gap-3">
                    Send Message
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
