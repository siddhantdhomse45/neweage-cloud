import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Add this import
import styles from "./Abouthero.module.css";

const Abouthero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <div className={`${styles.aboutheromain} ${isVisible ? styles.animateIn : ''}`}>
      <div className={styles.overlay}></div>
      
      <div className={styles.aboutmain22}>
        <motion.h1 
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          About <span className={styles.titleHighlight}>Us</span>
        </motion.h1>
        
        <motion.h6 
          className={styles.subheading}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          Charting Your Path to Success.
        </motion.h6>
        
        <motion.p 
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
        >
          A team of passionate developers who simplifies your path to success!
          Get custom software solutions, ERP CRM, digital marketing, etc.
          through a comprehensive process. At Neweage Cloud Software Services
          (NEWEAGE CLOUD SOFTWARE SERVICES PRIVATE LIMITED), we provide
          customized solutions to our clients that cater to their unique needs.
          Get on board to become a part of a positive and driven environment
          with customer-oriented results!
        </motion.p>

        <motion.div 
          className={styles.ctaContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <button className={styles.primaryButton}>Get Started</button>
          <button className={styles.secondaryButton}>Learn More</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Abouthero;