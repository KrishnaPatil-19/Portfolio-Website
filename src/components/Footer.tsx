import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-primary/5 rounded-t-full blur-[80px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-mono font-bold text-lg tracking-tighter">
          <span className="text-foreground">KRISHNA</span>PATIL<span className="text-accent">.</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/KrishnaPatil-19" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/krishna-patil-759269249/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
        </div>

        <div className="text-sm text-white/40">
          © {new Date().getFullYear()} Krishna Subhash Patil. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
