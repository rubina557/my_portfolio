import React, { useState, useEffect, useRef } from "react";

const Contact = () => {
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
      id="contact"
      ref={ref}
      className="min-h-[50vh] flex items-center justify-center bg-cloud-white py-20 px-4 text-center"
    >
      <div
        className={`max-w-2xl mx-auto transition-all duration-1000 ease-out ${
          isIntersecting
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-bold text-night-sky mb-4">Get In Touch</h2>
        <p className="text-deep-cove text-lg mb-8">
          I'm currently open to new opportunities and collaborations. If you
          have a project in mind or just want to say hello, feel free to reach
          out!
        </p>
        <a
          href="mailto:rubinanazeer29@gmail.com"
          className="inline-block bg-aqua-vibrant text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-aqua-vibrant-dark hover:scale-110 transform transition-all duration-300 ease-in-out"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
