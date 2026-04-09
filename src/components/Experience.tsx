import React from 'react';
import { useIntersectionObserver } from '../hooks/use-intersection-observer';

export function Experience() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const experiences = [
    {
      company: "PCET's PCCOE, Pune.",
      role: "Master of Computer Applications (MCA) - Pursuing",
      date: "Present",
      points: []
    },
    {
      company: "SSBT's ACSC, Jalgaon.",
      role: "Bachelor of Computer Applications (BCA) - Completed",
      date: "2025",
      points: []
    },
    {
      company: "Fresher",
      role: "Python Developer | Django | Data Analysis | Backend Development",
      date: "Present",
      points: [
        "Focused on building practical projects in web development and data analysis."
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Education & Experience</h2>
          <div className="w-20 h-1 bg-primary rounded-full box-glow mx-auto"></div>
        </div>

        <div 
          ref={ref}
          className={`relative fade-up-enter ${isIntersecting ? 'fade-up-enter-active' : ''}`}
        >
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

          {experiences.map((exp, idx) => (
            <div key={idx} className={`mb-16 relative flex items-center w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Dot */}
              <div className="absolute left-[-5px] md:left-1/2 w-3 h-3 rounded-full bg-primary box-glow md:-translate-x-1/2 z-10" />

              <div className="w-full md:w-1/2 pl-8 md:pl-0">
                <div className={`glass p-8 rounded-2xl ${idx % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                  <div className="text-sm font-mono text-accent mb-2">{exp.date}</div>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <h4 className="text-lg text-white/60 mb-6">{exp.company}</h4>
                  
                  <ul className="space-y-3">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="text-white/70 text-sm flex gap-3">
                        <span className="text-primary mt-1">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
