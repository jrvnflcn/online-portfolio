import React, { useEffect, useRef } from "react";
import profilePhoto from "../assets/Photo ID.png";
import nameImage from "../assets/Signature with name.png";

function Hero() {
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

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className="hero-section">
      <div className="hero-container">
      <div className="hero-profile">
        <img src={profilePhoto} alt="Profile" />
      </div>
      <img src={nameImage} alt="Name" className="name-signature" />
      </div>
      <p className="mobileName">Jeane Irvin Feliciano</p>
      <p>Web Developer | React Specialist</p>
      <button onClick={scrollToProjects}>View My Work</button>
    </section>
  );
}

export default Hero;
