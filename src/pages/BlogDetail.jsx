import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowLeft, ArrowRight, Tag } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts } from './Blogs';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === parseInt(id));
  const others = blogPosts.filter(p => p.id !== parseInt(id)).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-4">
          <p className="font-mono text-[10px] font-black text-primary/20 uppercase tracking-[0.5em]">// 404.not.found</p>
          <Link to="/blogs" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* ── Cinematic Hero — Full Bleed behind Navbar ── */}
      <section className="relative h-[70vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent" />

        {/* Hero Content — bottom anchored */}
        <div className="absolute inset-0 flex flex-col justify-end z-10">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full pb-12">
            {/* Back button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <button
                onClick={() => navigate('/blogs')}
                className="flex items-center gap-2.5 bg-white/10 hover:bg-white backdrop-blur-md border border-white/20 text-white hover:text-primary px-4 py-2.5 rounded-xl transition-all duration-500 group"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                <span className="font-mono text-[8px] font-black uppercase tracking-[0.3em]">Back to Blogs</span>
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="font-mono text-[8px] font-black text-white/30 uppercase tracking-[0.4em]">{post.category}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl lg:text-5xl font-black text-white leading-tight tracking-tighter mb-6"
            >
              {post.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white font-black text-xs">
                  {post.author.charAt(0)}
                </div>
                <span className="text-white/60 font-bold text-sm uppercase tracking-widest">{post.author}</span>
              </div>
              <div className="flex items-center gap-2 text-white/30">
                <Clock className="w-3 h-3" />
                <span className="font-mono text-[9px] font-black">{post.readTime} read</span>
              </div>
              <span className="font-mono text-[9px] font-black text-white/20 uppercase tracking-widest">{post.date}</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Article Body ── */}
      <article className="py-24 max-w-3xl mx-auto px-6 lg:px-8">
        <p className="text-2xl text-primary font-bold leading-relaxed mb-10 italic">
          {post.excerpt}
        </p>

        <div className="space-y-8 text-primary/70 text-lg leading-relaxed font-medium">
          <p>
            The engineering landscape is shifting faster than most organizations can adapt. Understanding these changes—at an architectural level, not just a surface one—is what separates the engineers who build lasting systems from those who chase every new release.
          </p>
          <p>
            In this article, we examine the core patterns emerging from the ecosystem, why they exist, and how you can apply them immediately in production environments without introducing unnecessary complexity.
          </p>

          <div className="border-l-4 border-primary pl-8 py-2">
            <p className="text-primary font-black text-xl leading-snug">
              "The best systems are built by engineers who understand not just what a tool does, but why it exists."
            </p>
          </div>

          <p>
            Start by auditing your current stack for points of friction. Every abstraction you remove is a potential performance win and a maintenance burden lifted. The goal is not to build less—it's to ship exactly as much as the problem requires, and no more.
          </p>
          <p>
            The patterns we've outlined here have been validated across teams of 5 to 500 engineers. They are not theoretical. They emerged from real production constraints, real user needs, and real architectural mistakes made at scale.
          </p>
        </div>

        <div className="mt-16 pt-10 border-t border-primary/5 flex flex-wrap gap-3">
          {[post.category, "Engineering", "Architecture"].map((tag, i) => (
            <span key={i} className="font-mono text-[9px] font-black text-primary uppercase tracking-widest px-4 py-2 bg-primary/5 rounded-lg">
              {tag}
            </span>
          ))}
        </div>
      </article>

      {/* ── Related Posts ── */}
      <section className="py-24 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="font-mono text-[9px] font-black text-primary/20 uppercase tracking-[0.5em] block mb-3">// more.articles</span>
            <h2 className="text-4xl font-black text-primary tracking-tighter uppercase">Continue Reading</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {others.map((other, i) => (
              <motion.div
                key={other.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/blogs/${other.id}`} className="group block">
                  <div className="aspect-[16/9] overflow-hidden rounded-[1.5rem] mb-5 bg-primary/5">
                    <img
                      src={other.image}
                      alt={other.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <span className="font-mono text-[8px] font-black text-primary/20 uppercase tracking-widest block mb-3">{other.category}</span>
                  <h3 className="text-lg font-black text-primary tracking-tight leading-snug group-hover:text-primary/60 transition-colors line-clamp-2 mb-3">
                    {other.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-primary/30 group-hover:text-primary transition-colors">
                    <span className="text-[9px] font-black uppercase tracking-wider">Read Article</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetail;
