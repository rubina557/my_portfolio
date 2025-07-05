import React, { useState, useEffect, useRef } from "react";
import myPhoto from "../assets/mypic.png";

const About = () => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-cloud-white py-20 px-4"
    >
      <div
        className={`max-w-4xl grid md:grid-cols-2 gap-10 items-center transition-all duration-1000 ease-out ${
          isIntersecting
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex justify-center">
          <img
            src={myPhoto}
            alt="my pic"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-aqua-vibrant"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-night-sky mb-4">About Me</h2>
          <p className="text-deep-cove text-lg leading-relaxed">
            Hello! I'm a passionate developer with a love for creating
            beautiful, intuitive, and highly performant web applications. With a
            keen eye for detail and a user-centric approach, I strive to build
            experiences that are not just functional, but also delightful to
            use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
