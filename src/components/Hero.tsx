import React, { useState, useEffect } from 'react';
import { useMagnetic } from '../hooks/use-magnetic';

export function Hero() {
  const titles = ["Python Developer | Django | Data Analysis | Backend Development"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentFullText = titles[currentTitleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setCurrentText(
          currentFullText.substring(0, currentText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTitleIndex]);

  const btn1Ref = useMagnetic(0.2);
  const btn2Ref = useMagnetic(0.2);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-[100dvh] pt-20 flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="absolute top-1/3 left-1/3 w-16 h-16 border border-primary/30 rounded-xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-accent/30 rounded-full animate-float-delayed pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Krishna Subhash Patil</span>
          </h1>
          
          <div className="h-8 md:h-10 text-xl md:text-2xl font-mono text-white/80">
            &gt; {currentText}<span className="animate-pulse">_</span>
          </div>
          
          <p className="text-lg text-white/60 max-w-md leading-relaxed">
            I am a BCA graduate currently pursuing MCA, with a strong foundation in Python programming, backend development, and data analysis. I enjoy building web applications using Django and working with structured data to derive insights. I am a quick learner, detail-oriented, and interested in developing scalable backend systems and improving my skills through real-world projects.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <button 
              ref={btn1Ref}
              onClick={scrollToProjects}
              className="px-8 py-4 rounded-full bg-primary text-white font-semibold transition-all hover:bg-primary/90 box-glow"
            >
              View My Work
            </button>
            <button 
              ref={btn2Ref}
              onClick={scrollToContact}
              className="px-8 py-4 rounded-full glass border border-white/20 text-white font-semibold transition-all hover:bg-white/10"
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[3rem] p-1 animate-halo bg-gradient-to-br from-primary via-transparent to-accent rotate-3 transition-transform hover:rotate-0 duration-500">
            <div className="w-full h-full rounded-[2.8rem] overflow-hidden bg-background relative z-10">
              <img 
                src="/images/KSP_photo.jpeg" 
                alt="Profile" 
                onClick={() => alert("Kya dekh raha hai be? Handsome aadmi dekhega to dekhta hi rahega?!")}
                className="w-full h-full object-cover mix-blend-luminosity opacity-80 hover:opacity-100 hover:mix-blend-normal transition-all duration-500 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
