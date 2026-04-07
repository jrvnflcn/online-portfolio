import React, { useEffect, useRef } from "react";

function About() {
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
    <section ref={ref} id="about" className="about-section">
      <h2 id="about">About Me</h2>
      <p>
        I’m Jeane Irvin Feliciano, a full-stack developer and graphic designer
        with over 5 years of experience creating innovative, scalable web
        solutions. I’ve worked on Shopify stores, WordPress websites, and
        government applications; most of my projects remain behind the scenes,
        but they make a real impact. I specialize in React, Node.js, and modern
        web technologies to build solutions that are both functional and
        visually engaging. I leverage AI tools and integrations to enhance
        functionality and efficiency. Beyond development, I optimize projects
        for search engines through SEO and offer Amazon optimization as an
        additional service, helping clients reach wider audiences and improve
        performance. My work blends technical skill, creativity, and strategic
        thinking to deliver results that truly matter.
      </p>
    </section>
  );
}

export default About;
