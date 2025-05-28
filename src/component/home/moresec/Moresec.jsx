import React, { useState, useEffect, useRef } from "react";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import more1 from "/src/assets/more1.jpg";
import moresec1 from "/src/assets/moresec1.png";
import moresec2 from "/src/assets/moresec2.png";
import moresec3 from "/src/assets/moresec3.png";
import styles from "./Moresec.module.css";

const Moresec = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const solutions = [
    { img: moresec1, title: "Technological Solutions" },
    { img: moresec2, title: "Financial Management" },
    { img: moresec3, title: "Product Development" }
  ];

  const featuresLeft = ["Team Support", "Business Management"];
  const featuresRight = ["Business Tailored", "Consultancy"];

  return (
    <section ref={sectionRef} className={styles.moremain}>
      <div className={`${styles.imageContainer} ${isVisible ? styles.leftVisible : ""}`}>
        <div className={styles.imageWrapper}>
          <img src={more1} alt="Business Solutions" className={styles.mainImage} />
          <div className={styles.imageOverlay}></div>
        </div>
      </div>
      
      <div className={`${styles.contentContainer} ${isVisible ? styles.rightVisible : ""}`}>
        <div className={styles.headerContainer}>
          <span className={styles.sectionTag}>WHY CHOOSE US</span>
          <h2 className={styles.sectionTitle}>
            Preparing For Your Success With <span className={styles.highlight}>Optimal</span> Solutions
          </h2>
          <p className={styles.sectionDescription}>
            Newage Cloud provides comprehensive management & support services for business success. 
            We combine expertise with tailored strategies to deliver exceptional results.
          </p>
        </div>

        <div className={styles.solutionsGrid}>
          {solutions.map((item, index) => (
            <div className={`${styles.solutionCard} ${isVisible ? styles.cardVisible : ""}`} key={index}>
              <div className={styles.solutionIcon}>
                <img src={item.img} alt={item.title} />
              </div>
              <h3 className={styles.solutionTitle}>{item.title}</h3>
            </div>
          ))}
        </div>

        <div className={styles.featuresContainer}>
          <ul className={styles.featuresList}>
            {featuresLeft.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                <FiCheckCircle className={styles.checkIcon} />
                {feature}
              </li>
            ))}
          </ul>
          <ul className={styles.featuresList}>
            {featuresRight.map((feature, index) => (
              <li key={index} className={styles.featureItem}>
                <FiCheckCircle className={styles.checkIcon} />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <button className={styles.ctaButton}>
          Explore More <FiArrowRight className={styles.arrowIcon} />
        </button>
      </div>
    </section>
  );
};

export default Moresec;