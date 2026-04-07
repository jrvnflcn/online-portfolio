import React, { useEffect, useRef } from "react";

function Contact() {
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
    <section ref={ref} id="contact" className="contact-section">
      <h2>Contact</h2>
      <p>
        Reach out at <a href="mailto:alex@example.com">jrvnflcn@gmail.com</a>
      </p>
    </section>
  );
}

export default Contact;
