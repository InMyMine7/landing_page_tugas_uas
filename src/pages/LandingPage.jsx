
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Features from '@/components/sections/Features';
import Stats from '@/components/sections/Stats';
import Topology from '@/components/sections/Topology';
import SocialProof from '@/components/sections/SocialProof';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/sections/Contact';
import { useScrollToSection } from '@/hooks/useScrollToSection';

const LandingPage = () => {
  const { refs, scrollToSection } = useScrollToSection();

  return (
    <div className="min-h-screen text-slate-200 overflow-hidden main-bg">
      <Navbar scrollToSection={scrollToSection} />
      <main>
        <div ref={refs.hero}>
          <Hero scrollToSection={scrollToSection} />
        </div>
        <div ref={refs.about}>
          <About />
        </div>
        <div ref={refs.features}>
          <Features />
        </div>
        <div ref={refs.stats}>
          <Stats />
        </div>
        <div ref={refs.topology}>
          <Topology />
        </div>
        <div ref={refs['social-proof']}>
          <SocialProof />
        </div>
        <div ref={refs.contact}>
           <Contact />
        </div>
        <div ref={refs.cta}>
          <CTA scrollToSection={scrollToSection} />
        </div>
      </main>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default LandingPage;
