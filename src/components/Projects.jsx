import React from 'react';

const projects = [
  {
    title: 'Pillar OS',
    description: 'POS/ERP progressive web app with offline support, built for small businesses. Co-developed under Pillar Software.',
    live: 'https://pillarsoftware.vercel.app/',
    github: '',
  },
  {
    title: 'PharmTrack',
    description: 'Pharmacy-focused POS/ERP system for inventory, sales, and stock management.',
    live: 'https://pillarsoftware.vercel.app/',
    github: '',
  },
  {
    title: 'Simba Waste Management',
    description: 'Client website built with React, TypeScript, and Vite, deployed on Render.',
    live: 'https://simbawaste.co.ke/',
    github: '',
  },
  {
    title: 'Urban Vines Hotel Website',
    description: 'Hotel website with booking and gallery features.',
    live: 'http://urban-vines-hotel.rf.gd/?i=1',
    github: 'https://github.com/Lynn-Wanjiru/hotel-client-website',
  },
  {
    title: 'Animated 3D Portfolio',
    description: 'Interactive portfolio with React, Tailwind, and Three.js.',
    live: 'https://animated-portfolio-0tvf.onrender.com',
    github: 'https://github.com/Lynn-Wanjiru/3d-animated-portfolio',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#f4f4f4] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-14 text-center">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">Selected work</div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Projects</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={project.title} data-aos="fade-up" data-aos-delay={i * 100} className="bg-white rounded-[1.5rem] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(255,42,42,0.2)] hover:-translate-y-1 transition-all duration-500 flex flex-col">
              <span className="text-xl font-bold mb-2 font-serif italic text-gray-300">0{i + 1}</span>
              <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight">{project.title}</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6 flex-1">{project.description}</p>
              <div className="flex gap-4">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-[#ff2a2a] hover:text-black transition font-bold text-sm">Live Demo</a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#ff2a2a] hover:text-black transition font-bold text-sm">GitHub</a>
                )}
                {!project.live && !project.github && (
                  <span className="text-gray-400 text-sm italic">Link coming soon</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
