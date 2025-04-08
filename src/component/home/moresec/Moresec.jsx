import React, { useState, useEffect, useRef } from "react";
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
    <div ref={sectionRef} className={styles.moremain}>
      <div className={`${styles.imageContainer} ${isVisible ? styles.leftVisible : ""}`}>
        <img src={more1} alt="img" />
      </div>
      <div className={`${styles.contentContainer} ${isVisible ? styles.rightVisible : ""}`}>
        <div className={styles.headerContainer77}>
          <h5>OUR CHOOSE MORE</h5>
          <h2>
            We Preparing For Your Success
            <br /> Choose Best Solutions.
          </h2>
          <p>
            RP Solutions, management & support services Business
            business agency e lit, sed do eiusmod tempor majority have in some
            we form, by injected humour solution.
          </p>
        </div>
        <div className={styles.solutionsContainer22}>
          <div className={styles.solution}>
            <div className={styles.solutionImageContainer1}>
              <img src={moresec1} alt="img" />
            </div>
            <div className={styles.solutionTextContainer}>
              <h5>
                Technological <br />
                Solutions
              </h5>
            </div>
          </div>
          <div className={styles.solution}>
            <div className={styles.solutionImageContainer1}>
              <img src={moresec2} alt="img" />
            </div>
            <div className={styles.solutionTextContainer}>
              <h5>
                Financial <br />
                Management
              </h5>
            </div>
          </div>
          <div className={styles.solution}>
            <div className={styles.solutionImageContainer1}>
              <img src={moresec3} alt="img" />
            </div>
            <div className={styles.solutionTextContainer}>
              <h5>
                Product <br />
                Development
              </h5>
            </div>
          </div>
        </div>
        <div className={styles.featuresListContainer0}>
          <div className={styles.featuresListContainer11}>
            <ul>
              <li>Team Support</li>
              <li>Business Management</li>
            </ul>
          </div>
          <div className={styles.featuresListContainer11}>
            <ul>
              <li>Business tailored</li>
              <li>Consultancy</li>
            </ul>
          </div>
        </div>
        <div className={styles.buttonContainer1}>
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Moresec;
