import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import solutionleader1 from '/src/assets/solutionleader1.jpg';
import solutionleader2 from '/src/assets/solutionleader2.jpg';
import solutionleader3 from '/src/assets/solutionleader3.jpg';
import styles from './Solutionthree.module.css';

const Solutionthree = () => {
  const [headerRef, headerInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [cardsRef, cardsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className={styles.solutionthreemain}>
      <div 
        ref={headerRef}
        className={`${styles.header} ${headerInView ? styles.animated : ''}`}
      >
        <h2>Strategic Leadership for Transformative Solutions</h2>
        <div className={styles.underline}></div>
        <p className={styles.subheader}>
          Our executive team brings decades of combined experience to deliver exceptional results
        </p>
      </div>
      
      <div 
        ref={cardsRef}
        className={styles.cardContainer}
      >
        <div className={`${styles.card} ${cardsInView ? styles.animated : ''}`}>
          <div className={styles.cardImage}>
            <img src={solutionleader1} alt="Business Growth Expert" loading="lazy" />
            <div className={styles.imageOverlay}></div>
            <div className={styles.expertiseBadge}>Growth</div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <h3>Business Growth</h3>
              <div className={styles.divider}></div>
            </div>
            <p>
              We architect scalable business solutions with proven methodologies to accelerate 
              your company's expansion and market penetration.
            </p>
            <button className={styles.learnMore}>
              <span>Explore Growth Solutions</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className={`${styles.card} ${cardsInView ? styles.animated : ''}`}>
          <div className={styles.cardImage}>
            <img src={solutionleader2} alt="Innovation Strategist" loading="lazy" />
            <div className={styles.imageOverlay}></div>
            <div className={styles.expertiseBadge}>Innovation</div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <h3>Innovation Strategy</h3>
              <div className={styles.divider}></div>
            </div>
            <p>
              Our forward-thinking strategies leverage emerging technologies to create 
              competitive advantages and future-proof your business.
            </p>
            <button className={styles.learnMore}>
              <span>Discover Innovations</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className={`${styles.card} ${cardsInView ? styles.animated : ''}`}>
          <div className={styles.cardImage}>
            <img src={solutionleader3} alt="Business Consultant" loading="lazy" />
            <div className={styles.imageOverlay}></div>
            <div className={styles.expertiseBadge}>Consulting</div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <h3>Executive Guidance</h3>
              <div className={styles.divider}></div>
            </div>
            <p>
              Seasoned leadership providing tailored advisory services to navigate complex 
              challenges and capitalize on opportunities.
            </p>
            <button className={styles.learnMore}>
              <span>Get Expert Advice</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutionthree;