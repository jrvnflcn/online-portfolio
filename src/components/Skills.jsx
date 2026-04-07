import React, { useEffect, useRef } from "react";

function Skills() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="skills" className="skills-section">
      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>WordPress</li>
        <li>Shopify</li>
        <li>Amazon</li>
        <li>SEO</li>
        <li>Graphic Design</li>
      </ul>
    </section>
  );
}

export default Skills;
