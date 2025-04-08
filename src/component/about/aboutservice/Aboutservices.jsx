import React from "react";
import styles from "./AboutServices.module.css";
import chose from "/src/assets/chose.jpg";

const AboutServices = () => {
  return (
    <div className={styles.container55}>
      <div className={styles.imageWrapper}>
        <img src={chose} alt="About Us" />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.introSection}>
          <h6>Our About Now</h6>
          <h1>About is Over 291+ Company Business Solution.</h1>
          <p>
            RP Solutions IT design, management & support services business
            agency elit, sed do eiusmod tempor.
          </p>
        </div>
        <div className={styles.statsSection}>
          <div className={styles.listWrapper}>
            <li>Company and Research</li>
            <li>Business and Research</li>
          </div>
          <div className={styles.progressWrapper}>
            <div className={styles.innerprogressWrapper}>45%</div>
          </div>
          <div className={styles.solutionlevel}>
            <h2>Solution Business</h2>
            <p>Level is high</p>
          </div>
        </div>
        <div className={styles.quoteSection}>
          <p>
              "If you are accused of committing a crime, you will the very best
            criminal defense attorneys."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutServices;