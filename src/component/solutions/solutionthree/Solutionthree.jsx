import React, { useEffect } from 'react';
import solutionleader1 from '/src/assets/solutionleader1.jpg';
import solutionleader2 from '/src/assets/solutionleader2.jpg';
import solutionleader3 from '/src/assets/solutionleader3.jpg';
import styles from './Solutionthree.module.css';

const Solutionthree = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(`.${styles.animateOnScroll}`);
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          element.classList.add(styles.animated);
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger on initial load
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <section className={styles.solutionthreemain}>
      <div className={`${styles.header} ${styles.animateOnScroll}`}>
        <h2>Our Leaders Give You the Best Solutions</h2>
        <div className={styles.underline}></div>
      </div>
      
      <div className={styles.cardContainer}>
        <div className={`${styles.card} ${styles.animateOnScroll}`}>
          <div className={styles.cardImage}>
            <img src={solutionleader1} alt="Business Growth Expert" />
            <div className={styles.imageOverlay}></div>
          </div>
          <div className={styles.cardContent}>
            <h3>Business Growth</h3>
            <p>
              We provide business solutions with a standard chunk of expertise,
              catering to agencies and startups alike.
            </p>
            <button className={styles.learnMore}>Learn More</button>
          </div>
        </div>

        <div className={`${styles.card} ${styles.animateOnScroll}`}>
          <div className={styles.cardImage}>
            <img src={solutionleader2} alt="Innovation Strategist" />
            <div className={styles.imageOverlay}></div>
          </div>
          <div className={styles.cardContent}>
            <h3>Innovative Strategies</h3>
            <p>
              Our innovative strategies empower businesses with cutting-edge
              solutions for sustainable growth.
            </p>
            <button className={styles.learnMore}>Learn More</button>
          </div>
        </div>

        <div className={`${styles.card} ${styles.animateOnScroll}`}>
          <div className={styles.cardImage}>
            <img src={solutionleader3} alt="Business Consultant" />
            <div className={styles.imageOverlay}></div>
          </div>
          <div className={styles.cardContent}>
            <h3>Expert Guidance</h3>
            <p>
              Our experienced leaders offer guidance tailored to meet your
              business needs and goals.
            </p>
            <button className={styles.learnMore}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutionthree;