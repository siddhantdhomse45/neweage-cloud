import React, { useEffect, useRef } from 'react';
import styles from './Solutionhero.module.css';

const Solutionhero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateIn);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    buttonsRef.current.forEach(button => {
      if (button) observer.observe(button);
    });

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      buttonsRef.current.forEach(button => {
        if (button) observer.unobserve(button);
      });
    };
  }, []);

  return (
    <section className={styles.solutionheroback} ref={heroRef}>
      <div className={styles.overlay}></div>
      <div className={styles.solutionMain}>
        <div className={styles.contentWrapper}>
          <h1 ref={titleRef}>
            <span className={styles.titleHighlight}>Innovative Solutions</span> 
            <br />for Your Digital Transformation
          </h1>
          <p className={styles.subtitle} ref={subtitleRef}>
            At NEWEAGE CLOUD SOFTWARE SERVICES PRIVATE LIMITED, we craft bespoke solutions 
            that align perfectly with your business objectives and technological needs.
          </p>
          <div className={styles.ctaContainer}>
            <button 
              className={styles.primaryButton} 
              ref={el => buttonsRef.current[0] = el}
            >
              Explore Solutions
            </button>
            <button 
              className={styles.secondaryButton} 
              ref={el => buttonsRef.current[1] = el}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutionhero;