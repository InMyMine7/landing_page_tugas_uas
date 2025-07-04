
import React, { useRef } from 'react';

export const useScrollToSection = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const topologyRef = useRef(null);
  const socialProofRef = useRef(null);
  const contactRef = useRef(null);
  const ctaRef = useRef(null);

  const refs = {
    hero: heroRef,
    about: aboutRef,
    features: featuresRef,
    stats: statsRef,
    topology: topologyRef,
    'social-proof': socialProofRef,
    contact: contactRef,
    cta: ctaRef,
  };

  const scrollToSection = (sectionId) => {
    refs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return { refs, scrollToSection };
};
