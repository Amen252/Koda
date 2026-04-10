import React from 'react';
import { motion } from 'framer-motion';
import { Binary, Braces, Code, Zap, ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: Binary,
    label: "// community",
    title: "Open Network",
    description: "Connect with builders sharing real-world experiences. No fluff, just pure dev-to-dev engineering insights.",
    span: "md:col-span-7",
    code: 'git checkout -b innovation',
  },
  {
    icon: Braces,
    label: "// knowledge",
    title: "Open Source",
    description: "Handpicked technical articles and architectural deep-dives from the global collective.",
    span: "md:col-span-5",
    code: 'SELECT * FROM knowledge',
  },
  {
    icon: Code,
    label: "// innovation",
    title: "Modern Tech",
    description: "Deep exploration of frameworks and tools shaping the next gen of web dev.",
    span: "md:col-span-5",
    code: 'system.update_kernel()',
  },
  {
    icon: Zap,
    label: "// focus",
    title: "Pure Signal",
    description: "Actionable advice. Zero noise. Curated by senior technical leads.",
    span: "md:col-span-7",
    code: 'pipe(filter(is_signal))',
  },
];

const WhoWeAre = () => {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 relative">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '2rem' }}
            viewport={{ once: true }}
            className="h-[1px] bg-primary mb-4"
          />
          <h2 className="text-3xl lg:text-4xl font-black text-primary leading-none tracking-tighter">
            Architecting <br />
            <span className="text-primary/20 hover:text-primary transition-colors duration-700 cursor-default italic">Modern</span> Knowledge.
          </h2>
        </div>

        {/* Compact Dev Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`${item.span} group relative bg-white border border-primary/5 rounded-2xl p-6 hover:border-primary/20 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-md`}
            >
              {/* Background Code Snippet */}
              <div className="absolute top-4 right-4 font-mono text-[8px] text-primary/5 select-none">
                {item.code}
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="p-2.5 bg-primary/5 text-primary rounded-lg transition-colors group-hover:bg-primary group-hover:text-white">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-primary/0 group-hover:text-primary transition-all transform translate-x-2 group-hover:translate-x-0" />
                </div>
                
                <span className="font-mono text-[8px] font-bold text-primary/40 uppercase tracking-[0.4em] mb-2 block">
                  {item.label}
                </span>
                
                <h3 className="text-xl font-black text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-primary/60 font-medium leading-relaxed text-xs max-w-[280px]">
                  {item.description}
                </p>

                <div className="mt-6 overflow-hidden h-[1px] w-full bg-primary/5 rounded-full">
                  <motion.div 
                    initial={{ x: '-100%' }}
                    whileInView={{ x: '0%' }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-full w-1/4 bg-primary/20"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
