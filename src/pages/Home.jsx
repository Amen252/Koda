import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BentoBox from '../components/BentoBox';
import WhoWeAre from '../components/WhoWeAre';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main>
        <Hero />
        <BentoBox />
        <WhoWeAre />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
