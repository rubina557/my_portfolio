import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1e293b 1px, transparent 1px),
            linear-gradient(to bottom, #1e293b 1px, transparent 1px)
          `,
          backgroundSize: "3rem 3rem",
          animation: "grid-pan 20s linear infinite",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1
          className="mt-10 text-5xl md:text-7xl font-bold text-slate-gray opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Rubina Nazeer{" "}
          <span className="text-aqua-vibrant">Creative Developer</span>
        </h1>

        <p
          className="mt-4 text-xl md:text-2xl text-slate-gray max-w-2xl mx-auto opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          I build beautiful, responsive, and highly performant web applications
          that provide a delightful user experience.
        </p>

        <div
          className="mt-8 flex justify-center gap-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#projects"
            className="bg-aqua-vibrant text-night-sky font-bold py-3 px-6 rounded-full shadow-lg hover:bg-aqua-vibrant-dark hover:scale-105 transform transition-all duration-300 ease-in-out"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-slate-gray text-slate-gray font-bold py-3 px-6 rounded-full shadow-lg hover:bg-slate-gray hover:text-night-sky hover:scale-105 transform transition-all duration-300 ease-in-out"
          >
            Get In Touch
          </a>
        </div>

        <div
          className="mt-10 flex justify-center gap-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="https://github.com/rubina557"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-gray hover:text-aqua-vibrant transition-colors duration-300"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-gray hover:text-aqua-vibrant transition-colors duration-300"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-gray hover:text-aqua-vibrant transition-colors duration-300"
          >
            <FaFacebook size={30} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "1s" }}
      >
        <div className="text-slate-gray hover:text-aqua-vibrant transition-colors duration-300 animate-bounce">
          <HiOutlineArrowNarrowDown size={30} />
        </div>
      </a>
    </section>
  );
};

export default Hero;
