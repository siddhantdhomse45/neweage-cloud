import React, { useState, useEffect, useRef } from "react";
import styles from "./Contactsection.module.css";

const Contactsection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const targetPercentage = 70;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let interval = setInterval(() => {
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
    <div ref={sectionRef} className={`${styles.sectionMain} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.percentageDiv}>
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
        <div className={styles.percentageDivinner}>{percentage}%</div>
      </div>
      <div className={styles.detailsDiv}>
        <div className={styles.headingDiv}>
          <h3>We Provide More Details Let Me Know Solution <br/>What You Need Help</h3>
        </div>
        <div className={styles.paragraphDiv}>
          <p>
            Technology is a broad category encompassing information technology<br/>
            and the application of technology.
          </p>
        </div>
      </div>
      <div className={styles.buttonDiv}>
        <button>CONTACT US</button>
      </div>
    </div>
  );
};

export default Contactsection;
