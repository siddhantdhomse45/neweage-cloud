import React, { useState, useEffect, useRef } from "react";
import styles from "./Contactsection.module.css";
import { Link } from "react-router-dom";

const Contactsection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const targetPercentage = 70;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setPercentage((prev) => {
          if (prev >= targetPercentage) {
            clearInterval(interval);
            return targetPercentage;
          }
          return prev + 1;
        });
      }, 30);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className={`${styles.sectionMain} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.circleWrapper}>
        <svg className={styles.progressCircle} width="120" height="120">
          <circle className={styles.backgroundCircle} cx="60" cy="60" r="50" />
          <circle
            className={styles.foregroundCircle}
            cx="60"
            cy="60"
            r="50"
            strokeDasharray="314"
            strokeDashoffset={314 - (314 * percentage) / 100}
          />
        </svg>
        <div className={styles.percentageText}>{percentage}%</div>
      </div>

      <div className={styles.contentWrapper}>
        <h3 className={styles.heading}>
          We Provide More Details — Let Us Know What Help You Need
        </h3>
        <p className={styles.description}>
          Technology is a broad category encompassing information technology and
          the application of tech solutions. Let's build your digital future together.
        </p>
        <Link to="/contact" className={styles.contactButton}>Contact Us</Link>
      </div>
    </section>
  );
};

export default Contactsection;
