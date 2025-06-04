// Healthhero.jsx
import React, { useEffect, useRef } from 'react';
import styles from './Healthhero.module.css';

const Healthhero = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateIn);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (headingRef.current) observer.observe(headingRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <section className={styles.healthheromin} ref={heroRef}>
      <div className={styles.healthmain33}>
        <h1 ref={headingRef}>
          Transforming <span>Healthcare</span>,<br />
          Empowering <span>Lives</span>
        </h1>
        
        <p ref={textRef}>
          Neweage Cloud is dedicated to revolutionizing the healthcare landscape by providing 
          innovative IT solutions tailored to meet the evolving needs of the industry. From 
          electronic health record systems to telemedicine platforms, we empower healthcare 
          providers to deliver exceptional care through seamless digital experiences.
        </p>
        
        <a href="#contact" className={styles.ctaButton} ref={buttonRef}>
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Healthhero;