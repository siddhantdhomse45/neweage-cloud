import React, { useEffect } from 'react';
import styles from "./Abouthero.module.css";

const Abouthero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(`.${styles.aboutheromain}`);
      const content = document.querySelector(`.${styles.aboutmain22}`);
      
      if (hero && content) {
        const heroTop = hero.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (heroTop < windowHeight * 0.75) {
          hero.classList.add(styles.animateBg);
          content.classList.add(styles.animateContent);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.aboutheromain}>
      <div className={styles.aboutmain22}>
        <h1 className={styles.title}>ABOUT</h1>
        <h2 className={styles.companyName}>Neweage Cloud Software Service Pvt Ltd</h2>
        <h6 className={styles.tagline}>Charting Your Path to Success.</h6>
        <p className={styles.description}>
          "Join Neweage Cloud, where talent meets opportunity.
          <br />
          Explore growth, innovation, and a supportive culture."
        </p>
      </div>
    </div>
  );
};

export default Abouthero;