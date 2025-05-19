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
    <section ref={sectionRef} className={styles.moremain}>
      <div className={`${styles.imageContainer} ${isVisible ? styles.leftVisible : ""}`}>
        <img src={more1} alt="Main Visual" />
      </div>
      <div className={`${styles.contentContainer} ${isVisible ? styles.rightVisible : ""}`}>
        <div className={styles.headerContainer77}>
          <h5>OUR CHOOSE MORE</h5>
          <h2>
            Preparing For Your Success
            <br /> Choose Best Solutions.
          </h2>
          <p>
            Neweage Cloud, management & support services for business success.
            We bring humor, precision, and tailored strategies to drive results.
          </p>
        </div>
        <div className={styles.solutionsContainer22}>
          {[{ img: moresec1, title: "Technological Solutions" }, { img: moresec2, title: "Financial Management" }, { img: moresec3, title: "Product Development" }].map((item, index) => (
            <div className={styles.solution} key={index}>
              <div className={styles.solutionImageContainer1}>
                <img src={item.img} alt={item.title} />
              </div>
              <div className={styles.solutionTextContainer}>
                <h5>{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.featuresListContainer0}>
          <ul className={styles.featuresListContainer11}>
            <li>Team Support</li>
            <li>Business Management</li>
          </ul>
          <ul className={styles.featuresListContainer11}>
            <li>Business Tailored</li>
            <li>Consultancy</li>
          </ul>
        </div>
        <div className={styles.buttonContainer1}>
          <button>READ MORE</button>
        </div>
      </div>
    </section>
  );
};

export default Moresec;
