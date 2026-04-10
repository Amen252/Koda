import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Users, Globe, Zap, Github, Twitter, Linkedin, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import aboutImg from '../assets/About.png';
import founderImg from '../assets/founder.png';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

const About = () => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ── 01 HERO ── */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        {/* Full-bleed image */}
        <div className="absolute inset-0 z-0">
          <img
            src={aboutImg}
            alt="Koda Team"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-24 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-white/40" />
              <span className="font-mono text-[10px] font-black text-white/50 uppercase tracking-[0.5em]">
                01 — Our Story
              </span>
            </div>

            <h1 className="text-6xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-10">
              Built for<br />
              <span className="text-white/30">Builders</span><span className="text-white/20">.</span>
            </h1>

            <div className="flex flex-col lg:flex-row items-start lg:items-end gap-12 justify-between">
              <p className="text-xl text-white/70 font-bold leading-relaxed max-w-xl">
                Koda is a technical knowledge engine designed to bridge the gap between Somali developers and world-class engineering culture.
              </p>
              <div className="flex items-center gap-8 text-white shrink-0">
                <div>
                  <p className="text-4xl font-black">4.2k</p>
                  <p className="text-xs font-mono text-white/40 uppercase tracking-widest mt-1">Members</p>
                </div>
                <div className="w-[1px] h-12 bg-white/10" />
                <div>
                  <p className="text-4xl font-black">2021</p>
                  <p className="text-xs font-mono text-white/40 uppercase tracking-widest mt-1">Founded</p>
                </div>
                <div className="w-[1px] h-12 bg-white/10" />
                <div>
                  <p className="text-4xl font-black">100+</p>
                  <p className="text-xs font-mono text-white/40 uppercase tracking-widest mt-1">Articles</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 02 MISSION TICKER ── */}
      <section className="bg-primary py-6 overflow-hidden border-y border-white/5">
        <div className="flex gap-24 animate-[ticker_20s_linear_infinite] whitespace-nowrap w-max">
          {Array(6).fill(0).map((_, i) => (
            <div key={i} className="flex items-center gap-24">
              <span className="font-mono text-[11px] font-black text-white/20 uppercase tracking-[0.4em]">Signal</span>
              <span className="font-mono text-[11px] font-black text-white/60 uppercase tracking-[0.4em]">Architecture</span>
              <span className="font-mono text-[11px] font-black text-white/20 uppercase tracking-[0.4em]">Collective</span>
              <span className="font-mono text-[11px] font-black text-white/60 uppercase tracking-[0.4em]">Mogadishu</span>
              <span className="text-white/10">◆</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 03 MANIFESTO ── */}
      <section className="py-32 lg:py-48 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div {...fadeUp} className="lg:col-span-4">
            <span className="font-mono text-[9px] font-black text-primary/20 uppercase tracking-[0.5em] block mb-6">
              02 — Manifesto
            </span>
            <h2 className="text-4xl font-black text-primary tracking-tighter leading-none uppercase">
              What We<br />Stand For.
            </h2>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.15 }} className="lg:col-span-8">
            <p className="text-3xl lg:text-4xl font-bold text-primary/80 leading-[1.2] tracking-tight">
              We believe great engineers aren't made in isolation. They're forged in communities where knowledge flows freely, feedback is direct, and ambition is shared.
            </p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-1">
              {[
                { icon: Code2, title: "Clean Architecture", desc: "Every article reviewed for technical accuracy." },
                { icon: Users, title: "Peer Network", desc: "Connecting senior engineers with rising talent." },
                { icon: Globe, title: "Global Reach", desc: "Mogadishu to Silicon Valley, signal travels far." },
              ].map((item, i) => (
                <div key={i} className="group p-8 border border-primary/5 hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-500">
                  <div className="mb-8 p-3 bg-primary/5 rounded-xl inline-block text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-black text-primary tracking-tight uppercase mb-3">{item.title}</h3>
                  <p className="text-sm text-primary/50 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 04 FOUNDER ── */}
      <section className="bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">

            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative overflow-hidden"
            >
              <img
                src={founderImg}
                alt="Mohamed A. Omar"
                className="w-full h-full object-cover object-top grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-[1.5s]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/80 hidden lg:block" />
              <div className="absolute bottom-10 left-10">
                <span className="font-mono text-[9px] text-white/20 uppercase tracking-[0.5em]">
                  03 — The Architect
                </span>
              </div>
            </motion.div>

            {/* Right: Bio */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col justify-center py-24 lg:pl-20 text-white space-y-10"
            >
              <div>
                <span className="font-mono text-[9px] font-black text-white/20 uppercase tracking-[0.5em] block mb-6">
                  Founder
                </span>
                <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-4 uppercase">
                  Mohamed<br />A. Omar.
                </h2>
                <div className="flex items-center gap-3 mt-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse" />
                  <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em]">Systems Architect</p>
                </div>
              </div>

              <div className="border-l-2 border-white/10 pl-8">
                <p className="text-xl text-white/70 leading-relaxed font-medium italic">
                  "We exist to give every Somali builder a seat at the table of global engineering. Koda is the transmission layer — turning ambition into architecture."
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/5">
                {[
                  { val: "12+", label: "Years XP" },
                  { val: "4.2k", label: "Commits" },
                  { val: "6", label: "Products" }
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-3xl font-black text-white">{s.val}</p>
                    <p className="font-mono text-[9px] text-white/20 uppercase tracking-widest mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                {[Github, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="p-3.5 bg-white/5 border border-white/10 rounded-xl text-white/40 hover:bg-white hover:text-primary transition-all duration-500">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 05 CTA ── */}
      <section className="py-32 lg:py-48 px-6 lg:px-8">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-[9px] font-black text-primary/20 uppercase tracking-[0.5em] block mb-8">
            04 — Join Us
          </span>
          <h2 className="text-5xl lg:text-8xl font-black text-primary leading-none tracking-tighter mb-10 uppercase">
            Ready to<br />Ship Code<span className="text-primary/10">?</span>
          </h2>
          <p className="text-xl text-primary/60 font-bold leading-relaxed max-w-2xl mx-auto mb-12 uppercase">
            Join a collective of builders who refuse to build in silence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary flex items-center gap-3">
              Join the Collective
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-outline">
              Read Articles
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default About;
