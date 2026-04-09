import React, { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'About', id: 'hero' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
        <div className="font-mono font-bold text-xl tracking-tighter text-primary cursor-pointer" onClick={() => scrollTo('hero')}>
          <span className="text-foreground">KRISHNA</span>PATIL
          <span className="text-accent">.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-white/70 hover:text-white hover:text-glow transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
