import React from 'react';
import { Layout, Server, Wrench, Code2, Database, Palette, Terminal, Globe } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/use-intersection-observer';

export function Skills() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const skills = [
    { name: "Python", icon: Code2, col: "md:col-span-1", row: "md:row-span-1", desc: "Programming language for backend development" },
    { name: "Django", icon: Server, col: "md:col-span-1", row: "md:row-span-1", desc: "Web framework for building applications" },
    { name: "REST API (Basics)", icon: Globe, col: "md:col-span-1", row: "md:row-span-1", desc: "API development and integration" },
    { name: "SQL & SQLite", icon: Database, col: "md:col-span-1", row: "md:row-span-1", desc: "Database management and querying" },
    { name: "HTML, CSS, JavaScript (Basic)", icon: Layout, col: "md:col-span-2", row: "md:row-span-1", desc: "Frontend web technologies" },
    { name: "Git & GitHub", icon: Terminal, col: "md:col-span-1", row: "md:row-span-1", desc: "Version control and collaboration" },
    { name: "MS Excel", icon: Wrench, col: "md:col-span-1", row: "md:row-span-1", desc: "Data analysis with Pivot Tables, IF, VLOOKUP" },
    { name: "Problem Solving & Debugging", icon: Wrench, col: "md:col-span-1", row: "md:row-span-1", desc: "Analytical thinking and code debugging" },
  ];

  return (
    <section id="skills" className="py-32 relative bg-white/[0.01]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Arsenal</h2>
          <div className="w-20 h-1 bg-accent rounded-full box-glow-accent"></div>
        </div>

        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(120px,auto)] fade-up-enter ${isIntersecting ? 'fade-up-enter-active' : ''}`}
        >
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div 
                key={idx} 
                className={`${skill.col} ${skill.row} glass-card rounded-2xl p-6 group hover:bg-white/[0.04] transition-all flex flex-col justify-between`}
              >
                <Icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="font-bold text-lg mb-1">{skill.name}</h3>
                  <p className="text-sm text-white/50">{skill.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
