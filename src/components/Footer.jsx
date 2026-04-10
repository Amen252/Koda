import React from 'react';
import { SquareCode, Github, Twitter, Linkedin, Heart, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-32 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="p-2 bg-white rounded-lg shadow-sm group-hover:rotate-12 transition-all">
                <SquareCode className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">Koda</span>
            </Link>
            <p className="text-accent/40 text-sm leading-relaxed mb-8 max-w-xs font-medium">
              A minimalist knowledge engine for builders. 
              Stripping away the noise to focus on the code.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-2.5 bg-white/5 rounded-xl hover:bg-white hover:text-primary transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="font-mono text-[10px] font-bold text-accent/20 uppercase tracking-[0.2em] mb-8 block">
              // explore
            </span>
            <ul className="space-y-4">
              {['Trending Blogs', 'Latest News', 'Top Authors', 'Tech Stack'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-accent/60 hover:text-white text-sm font-bold transition-colors flex items-center group">
                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all mr-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <span className="font-mono text-[10px] font-bold text-accent/20 uppercase tracking-[0.2em] mb-8 block">
              // company
            </span>
            <ul className="space-y-4">
              {['About Us', 'Contact Support', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-accent/60 hover:text-white text-sm font-bold transition-colors flex items-center group">
                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all mr-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - Dark Mode Minimalist */}
          <div>
            <span className="font-mono text-[10px] font-bold text-accent/20 uppercase tracking-[0.2em] mb-8 block">
              // updates
            </span>
            <p className="text-accent/60 text-xs font-bold mb-4 uppercase tracking-[0.1em]">Stay in the loop</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="developer@work.sys" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/20 w-full font-mono text-white placeholder:text-white/20"
              />
              <button className="w-full bg-white text-primary py-3 rounded-xl font-black text-sm hover:shadow-xl hover:shadow-white/20 transition-all active:scale-95">
                Subscribe_
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-accent/20 font-mono text-[10px] font-black tracking-widest uppercase">
          <p>© 2024 KODA._PLATFORM</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="flex items-center gap-1.5">
              Made with <Heart className="w-3 h-3 text-white/10" /> for builders.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
