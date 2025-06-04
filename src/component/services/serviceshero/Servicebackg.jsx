import React, { useEffect, useRef } from 'react';
import styles from './Servicesbackg.module.css';

const Servicebackg = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Add animateIn class after component mounts
    if (containerRef.current) {
      containerRef.current.classList.add(styles.animateIn);
    }
  }, []);

  return (
    <div ref={containerRef} className={styles.servicebackgmain0}>
      <div className={styles.overlay}></div>
      <div className={styles.Servivcesmain44}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.heading}>Our <span className={styles.titleHighlight}>Services</span></h1>
          <p className={styles.description}>Neweage Cloud Software Service offers customized software services to meet your needs. We focus on personalized care and innovation to help your business thrive in the digital age. Let our experts drive growth and efficiency for you. Contact us to learn more.</p>
          <h2 className={styles.subheading}>See What We Offer & What We Provide</h2>
          <div className={styles.ctaContainer}>
            <button className={styles.primaryButton}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicebackg;