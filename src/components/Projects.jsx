import React, { useState, useEffect, useRef } from 'react';

const ProjectCard = ({ title, description, link }) => (
  <div className="bg-deep-cove p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-[1.03] hover:shadow-aqua-vibrant/20 transition-all duration-300 ease-in-out group flex flex-col">
    <div className="flex-grow">
      <h3 className="text-2xl font-bold text-cloud-white mb-2">{title}</h3>
      <p className="text-slate-gray mb-4">{description}</p>
    </div>
    <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block mt-auto text-aqua-vibrant font-semibold group-hover:text-aqua-vibrant-light transition-colors duration-300 self-start">
      View Project →
    </a>
  </div>
);

const Projects = () => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIntersecting(true); observer.disconnect(); }}, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <section id="projects" ref={ref} className="min-h-screen flex items-center justify-center bg-night-sky py-20 px-4">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl font-bold text-center text-cloud-white mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard title="Fast Pizza Co. Clone" description="A feature-rich pizza ordering website clone built with React and Redux Toolkit, offering a seamless menu and cart experience." link="https://fast-pizza-clone.vercel.app/" />
          <ProjectCard title="Facebook UI Clone" description="A pixel-perfect UI clone of the Facebook feed, demonstrating strong skills in responsive design and component-based architecture." link="https://facebook-clone-nine-ruddy.vercel.app/" />
          <ProjectCard title="Interactive Quiz App" description="A dynamic quiz application built with React, featuring state management to handle questions, track scores, and provide instant feedback." link="https://quiz-app-ruby-zeta-54.vercel.app/" />
        </div>
      </div>
    </section>
  );
};

export default Projects;