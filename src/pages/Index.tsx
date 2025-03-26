
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import OnlineCourses from '@/components/OnlineCourses';
import Packages from '@/components/Packages';
import Team from '@/components/Team';
import Development from '@/components/Development';
import ConnectBanner from '@/components/ConnectBanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  // Function to reveal elements on scroll
  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', revealElements);
    revealElements(); // Call on initial load
    
    return () => window.removeEventListener('scroll', revealElements);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <Hero />
        <Programs />
        <Development />
        <OnlineCourses />
        <ConnectBanner />
        <Packages />
        <Team />
        <Contact />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
