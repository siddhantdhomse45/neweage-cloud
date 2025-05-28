import React, { useEffect } from "react";
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

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.aboutheromain}>
      <div className={styles.aboutmain22}>
        <h1 className={styles.title}>About Us</h1>
        
        <h6 className={styles.tagline}>Charting Your Path to Success.</h6>
        <p className={styles.description}>
          A team of passionate developers who simplifies your path to success!
          Get custom software solutions, ERP CRM, digital marketing, etc.
          through a comprehensive process. At Neweage Cloud Software Services
          (NEWEAGE CLOUD SOFTWARE SERVICES PRIVATE LIMITED), we provide
          customized solutions to our clients that cater to their unique needs.
          Get on board to become a part of a positive and driven environment
          with customer-oriented results!
          <br />
        </p>
      </div>
    </div>
  );
};

export default Abouthero;
