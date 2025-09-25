'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 0) {
        setIsVisible(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80  dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container  mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold"><p>Santiago Ojeda <span className="text-[#1CCEBF]">Portfolio</span></p> </div>
        <nav className="hidden md:flex gap-6">
          <a href="#inicio" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Start</a>
          <a href="#proyectos" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">My Timeline</a>
          <a href="#sobre-mi" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">About</a>
          <a href="#contacto" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
} 