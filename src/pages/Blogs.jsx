import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Clock, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const blogPosts = [
  {
    id: 1,
    title: "Mastering React 19: New Patterns You Should Know",
    excerpt: "React 19 ships with powerful new concurrent patterns that fundamentally change how you architect large-scale applications.",
    author: "Fadumo Jama",
    date: "March 20, 2024",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1600",
    readTime: "8 min",
    featured: true,
  },
  {
    id: 2,
    title: "The Future of AI in Modern Software Development",
    excerpt: "How large language models are transforming the developer workflow — and what you should actually ship using them today.",
    author: "Abdirahman Ali",
    date: "March 18, 2024",
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
    readTime: "12 min",
    featured: false,
  },
  {
    id: 3,
    title: "Why Tailwind CSS Wins for Rapid Prototyping",
    excerpt: "A pragmatic argument for utility-first design systems and why your team should adopt it for every new project in 2024.",
    author: "Asha Yusuf",
    date: "March 15, 2024",
    category: "CSS",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1600",
    readTime: "6 min",
    featured: false,
  },
  {
    id: 4,
    title: "Understanding Web3: A Developer's Perspective",
    excerpt: "Cutting through the hype to understand what blockchain-native development actually requires.",
    author: "Khalid Ibrahim",
    date: "March 10, 2024",
    category: "Web3",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1600",
    readTime: "15 min",
    featured: false,
  },
  {
    id: 5,
    title: "System Design at Scale: Lessons from Production",
    excerpt: "Real patterns from production systems handling millions of requests — applied to the problems you're building right now.",
    author: "Omar Mohamed",
    date: "March 5, 2024",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1600",
    readTime: "20 min",
    featured: false,
  },
  {
    id: 6,
    title: "TypeScript Generics: The Missing Manual",
    excerpt: "Stop fumbling with complex generic types. This deep dive will permanently level up your TypeScript intuition.",
    author: "Hodan Ahmed",
    date: "February 28, 2024",
    category: "TypeScript",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1600",
    readTime: "10 min",
    featured: false,
  },
];

const categories = ["All", "React", "AI", "CSS", "Web3", "Architecture", "TypeScript"];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = blogPosts
    .filter(p => activeCategory === "All" || p.category === activeCategory)
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* ── Page Header ── */}
      <section className="pt-40 pb-12 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8"
        >
          <div>
            <span className="font-mono text-[9px] font-black text-primary/20 uppercase tracking-[0.5em] block mb-4">
              // koda.articles
            </span>
            <h1 className="text-5xl lg:text-7xl font-black text-primary leading-none tracking-tighter uppercase">
              Articles<span className="text-primary/10">.</span>
            </h1>
          </div>

          {/* Search */}
          <div className="flex items-center gap-3 bg-primary/5 border border-primary/5 px-5 py-3.5 rounded-xl">
            <Search className="w-3.5 h-3.5 text-primary/30" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="bg-transparent outline-none text-sm font-black text-primary placeholder:text-primary/10 w-44"
            />
          </div>
        </motion.div>

        {/* Category Pills */}
        <div className="flex items-center gap-3 mt-10 overflow-x-auto pb-1">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 font-mono text-[9px] font-black uppercase tracking-widest px-4 py-2.5 rounded-lg transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-white'
                  : 'bg-primary/5 text-primary/40 hover:text-primary hover:bg-primary/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Blog Grid ── */}
      <section className="pb-32 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link to={`/blogs/${post.id}`} className="group block">
                {/* Cover Image — compact */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-5 bg-primary/5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary text-[8px] font-black uppercase tracking-widest px-2.5 py-1.5 rounded-lg">
                    {post.category}
                  </span>
                </div>

                {/* Meta row */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[8px] font-black text-primary/20 uppercase tracking-widest">{post.date}</span>
                  <div className="h-[1px] flex-grow bg-primary/5" />
                  <div className="flex items-center gap-1 text-primary/20">
                    <Clock className="w-2.5 h-2.5" />
                    <span className="font-mono text-[8px] font-black">{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-lg font-black text-primary leading-snug tracking-tight mb-2 group-hover:text-primary/50 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-primary/40 font-medium leading-relaxed line-clamp-2 mb-5">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-primary/5">
                  <span className="text-[10px] font-black text-primary/30 uppercase tracking-widest">{post.author}</span>
                  <div className="flex items-center gap-1.5 text-primary/20 group-hover:text-primary transition-colors">
                    <span className="text-[9px] font-black uppercase tracking-wider">Read</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-32">
            <p className="font-mono text-[10px] font-black text-primary/20 uppercase tracking-[0.5em]">// no results found</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
