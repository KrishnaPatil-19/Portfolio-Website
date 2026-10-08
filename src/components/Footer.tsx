import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export function Footer() {
  return (
    <footer className="border-t border-border py-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-primary/5 rounded-t-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-mono font-bold text-lg tracking-tighter">
          <span className="text-foreground">KRISHNA</span>PATIL
        </div>

        <div className="flex items-center gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/KrishnaPatil-19"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaGithub size={20} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/krishna-patil-759269249/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaLinkedin size={20} />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/KrishnaPatil-19/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <SiLeetcode size={20} />
          </a>
        </div>

        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Krishna Subhash Patil. All rights reserved.
        </div>
      </div>
    </footer>
  );
}