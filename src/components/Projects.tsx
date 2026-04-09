import React from 'react';
import { useIntersectionObserver } from '../hooks/use-intersection-observer';

export function Projects() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const projects = [
    {
      title: "ScholarLink",
      description: "A Django-based web application that connects students with scholarship opportunities. It includes user authentication, structured database models, and backend logic for managing data efficiently.",
      tags: ["Python", "Django", "SQLite", "HTML/CSS"],
      image: "/images/scholarlink.png",
      link: "#"
    },
    {
      title: "Road Accident Analysis Dashboard",
      description: "An Excel-based dashboard project where I cleaned and analyzed accident data using Pivot Tables and created interactive visualizations using charts and slicers.",
      tags: ["MS Excel"],
      image: "/images/road-accident-dashboard.png",
      link: "https://github.com/KrishnaPatil-19/Road-Accident-Analysis-Dashboard"
    },
    {
      title: "Calculator",
      description: "A responsive calculator that performs arithmetic operations with error handling and a clean UI.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/images/Calc1.png",
      link: "https://krishnapatil-19.github.io/Calculator-project/index.html"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, skills, and contact details with a polished UI.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/images/portfolio_latest.png",
      link: "https://krishnapatil-19.github.io/Portfolio-Website/"
    },
    {
      title: "Tic Tac Toe Game",
      description: "A browser-based Tic Tac Toe game built with JavaScript for interactive gameplay and responsive controls.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/images/ttt_mm.png",
      link: "https://krishnapatil-19.github.io/TicTacToe/"
    },
    {
      title: "Language Translator",
      description: "A web-based language translation tool built with JavaScript, featuring a simple interface for text input and output.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/images/lt.png",
      link: "https://krishnapatil-19.github.io/Language_Translator/"
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Work</h2>
          <div className="w-20 h-1 bg-primary rounded-full box-glow"></div>
        </div>

        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 fade-up-enter ${isIntersecting ? 'fade-up-enter-active' : ''}`}
        >
          {projects.map((project, idx) => (
            <a 
              key={idx} 
              href={project.link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                if (project.title === "ScholarLink") {
                  e.preventDefault();
                  alert("Coming soon!");
                }
                if (project.title === "Portfolio Website") {
                  e.preventDefault();
                  alert("You're already here!");
                }
              }}
              className="group glass-card rounded-2xl overflow-hidden hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 relative cursor-pointer"
            >
              {project.image ? (
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : null}

              <div className="p-8 flex flex-col justify-between h-full bg-slate-950/70">
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-white/60 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
