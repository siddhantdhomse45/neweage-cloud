import React, { useEffect, useState, useRef } from "react";
import experiancesec from "/src/assets/experiancesec.jpg";
import styles from "./Experiance.module.css";

const Experiance = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } 
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

  return (
    <div
      ref={sectionRef}
      className={`${styles.experianceMainSection} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <div className={`${styles.contentSection} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.headingSection}>
          <h6>OUR EXPERIENCE ABOUT COMPANY</h6>
          <h2>
            Our Experience About 2+ Years <br />
            Experience And Challenge!
          </h2>
          <p>
            Business tailored design, management & support services Business
            business agency elit, sed do eiusmod tempor majority have in some we
            form, by injected humour solution.
          </p>
        </div>
        <div className={styles.networkSection}>
          <h2>Network Infrastructure software</h2>
        </div>
        <div className={styles.teamSection}>
          <h2>Business Expert Team Member</h2>
        </div>
        <div className={styles.moreInfoSection}>
          <p>
            <span>BUSINESS</span> : Treating Cancer With AI-Powered Imaging
            Healthcare <br />
            Best Solution Company <span>SEE MORE</span>
          </p>
        </div>
      </div>
      <div className={`${styles.imageSection} ${isVisible ? styles.visible : ""}`}>
        <img src={experiancesec} alt="Experience" />
      </div>
    </div>
  );
};

export default Experiance;
