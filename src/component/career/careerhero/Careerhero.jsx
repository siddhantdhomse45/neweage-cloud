import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Careerhero.module.css";

const Careerhero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <div className={`${styles.careerHeroMain} ${isVisible ? styles.animateIn : ''}`}>
      <div className={styles.overlay}></div>
      
      <motion.div 
        className={styles.careermain69}
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Careers
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          At Neweage, we believe that people are our greatest asset. Our mission
          is driven by passionate, curious, and forward-thinking individuals who
          are ready to challenge the status quo. Whether you're a developer,
          designer, strategist, or support specialist, you'll find a place here
          to thrive, create, and grow.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Careerhero;