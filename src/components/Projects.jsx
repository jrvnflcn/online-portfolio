import React, { useEffect, useRef } from "react";

const projects = [
  {
    title: "Ace Auto Wreckers",
    description: "Wordpress site for auto parts business",
    link: "https://www.aceautowreckers.com/",
  },
  {
    title: "Ruby Care",
    description:
      "An Oncology App integated with Wordpress for a healthcare company",
    link: "https://useruby.care/en",
  },  {
    title: "Natissy",
    description: "Shopify store with seamless shopping experience",
    link: "https://shop.natissy.eu/",
  },
  {
    title: "Femissy",
    description: "Shopify store with seamless shopping experience",
    link: "https://www.femissy.com/",
  },
  {
    title: "Government PH Websites",
    description:
      "A collection of official government websites for the Philippine departments",
  },
  {
    title: "Freelance Work for Various Online Clients",
    description:
      "Freelance web development services for various online clients",
  },
];

function Projects() {
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
    <section ref={ref}  className="projects-section">
      <h2 id="projects">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Click here to view
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
