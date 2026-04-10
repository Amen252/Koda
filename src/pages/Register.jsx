import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Command, Github, Chrome, CheckCircle2 } from 'lucide-react';

const Register = () => {
  return (
    <div className="min-h-screen bg-white flex w-full">
      
      {/* ── Left Branding Panel (Hidden on Mobile) ── */}
      <div className="hidden lg:flex w-1/2 bg-primary relative flex-col justify-between p-12 overflow-hidden">
        {/* Subtle grid background overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="relative z-10 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 rounded-xl bg-white/10 text-white group-hover:scale-105 transition-transform">
              <Command className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold uppercase tracking-widest text-white" style={{ fontFamily: "'Syncopate', sans-serif" }}>
              Koda
            </span>
          </Link>

          <Link to="/" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-[9px] font-black uppercase tracking-[0.3em]">Return</span>
          </Link>
        </div>

        <div className="relative z-10 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="font-mono text-[10px] font-black text-white/40 uppercase tracking-[0.5em] block mb-6">
              // join.the.collective
            </span>
            <h1 className="text-5xl xl:text-6xl font-black text-white leading-[1.1] tracking-tighter max-w-md">
              BUILD THE FUTURE OF SOFTWARE.
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 pt-8 border-t border-white/10 max-w-sm"
          >
            {['Access advanced architectural patterns', 'Connect with senior engineers', 'Publish and monetize your concepts'].map((feature, i) => (
              <div key={i} className="flex items-start gap-3 text-white/70">
                <CheckCircle2 className="w-5 h-5 text-white/30 shrink-0" />
                <span className="font-medium text-sm leading-tight">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative z-10">
          <p className="font-mono text-[9px] font-black uppercase text-white/20 tracking-widest">
            © {new Date().getFullYear()} KODA COLLECTIVE — ALL RIGHTS RESERVED
          </p>
        </div>
      </div>

      {/* ── Right Registration Form ── */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-24 bg-white overflow-y-auto">
        <div className="w-full max-w-md space-y-12">
          
          {/* Mobile Header (Only visible on small screens) */}
          <div className="lg:hidden flex items-center justify-between mb-12">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="p-2 rounded-xl bg-primary text-white group-hover:scale-105 transition-transform">
                <Command className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold uppercase tracking-widest text-primary" style={{ fontFamily: "'Syncopate', sans-serif" }}>
                Koda
              </span>
            </Link>
            <Link to="/" className="text-primary/40 hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-black text-primary tracking-tighter uppercase mb-2">Create Account</h2>
            <p className="font-mono text-[10px] font-black uppercase text-primary/40 tracking-widest">
              Already a member? <Link to="/login" className="text-primary hover:underline">Sign In</Link>
            </p>
          </div>

          <form className="space-y-6">
            <div className="space-y-1 group">
              <input 
                type="text" 
                placeholder="FULL NAME"
                className="w-full bg-transparent border-b-2 border-primary/10 py-4 text-lg font-black text-primary placeholder:text-primary/20 placeholder:uppercase focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            <div className="space-y-1 group">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent border-b-2 border-primary/10 py-4 text-lg font-black text-primary placeholder:text-primary/20 placeholder:uppercase focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            <div className="space-y-1 group">
              <input 
                type="password" 
                placeholder="CREATE PASSWORD"
                className="w-full bg-transparent border-b-2 border-primary/10 py-4 text-lg font-black text-primary placeholder:text-primary/20 placeholder:uppercase focus:outline-none focus:border-primary transition-colors hover:border-primary/30"
                required
              />
            </div>

            <button className="w-full bg-primary text-white py-5 px-8 font-black text-xs uppercase tracking-[0.2em] hover:bg-black transition-colors flex justify-center items-center gap-3">
              Join Koda <ArrowLeft className="w-4 h-4 rotate-180" />
            </button>
            
            <div className="flex items-center justify-center space-x-4 pt-6">
              <div className="h-[1px] flex-grow bg-primary/10" />
              <span className="font-mono text-[9px] font-black text-primary/30 uppercase tracking-[0.3em]">Or Continue With</span>
              <div className="h-[1px] flex-grow bg-primary/10" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center gap-3 py-4 bg-[#F8F9FB] hover:bg-primary/5 transition-colors text-primary font-black text-[10px] uppercase tracking-widest">
                <Chrome className="w-4 h-4" />
                Google
              </button>
              <button type="button" className="flex items-center justify-center gap-3 py-4 bg-[#F8F9FB] hover:bg-primary/5 transition-colors text-primary font-black text-[10px] uppercase tracking-widest">
                <Github className="w-4 h-4" />
                Github
              </button>
            </div>
            
            <p className="text-center font-mono text-[9px] font-black text-primary/30 uppercase tracking-widest leading-relaxed mt-8">
              By creating an account, you agree to our<br/>
              <a href="#" className="hover:text-primary transition-colors text-primary/50">Terms of Service</a> & <a href="#" className="hover:text-primary transition-colors text-primary/50">Privacy Policy</a>
            </p>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Register;
