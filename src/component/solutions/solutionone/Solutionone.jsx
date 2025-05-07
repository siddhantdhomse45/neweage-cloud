import React from "react";
import Solution1 from "/src/assets/Solution1.jpg";
import styles from "./Solutionone.module.css";

const Solutionone = () => {
  return (
    <div className={styles.solutionmain}>
      <div className={styles.solutioncontain1}>
        <div className={styles.scontainer1}>
          <h2>Understanding of Client Needs</h2>
          <p>
            At NEWEAGE CLOUD SOFTWARE SERVICES PRIVATE LIMITED, we understand that every business is unique. Our success
            stems from our deep understanding of our clients' needs, enabling us
            to provide tailored solutions that precisely address their
            challenges and aspirations.
          </p>
        </div>
        <div className={styles.scontainer2}>
          <h2>Commitment to Innovation</h2>
          <p>
            person graphic Understanding of Client Needs At NCSS, we understand
            that every business is unique. Our success stems from our deep
            understanding of our clients' needs, enabling us to provide tailored
            solutions that precisely address their challenges and aspirations.
            Commitment to Innovation Highlighting innovation and customization
            indicates that RPBS is proactive in finding new and better ways to
            solve client problems
          </p>
        </div>
      </div>
      <div className={styles.solutioncontain1}>
        <div className={styles.scontainer1}>
          <h2>Focus on Quality & Customer Service</h2>
          <p>
            Emphasizing dedication to quality and customer service reassures
            potential clients that they will receive high-quality solutions and
            support.
          </p>
        </div>
        <div className={styles.scontainer2}>
          <h2>Establishing Trust</h2>
          <p>
            Positioning NCSS as a trusted partner reinforces the idea that
            clients can rely on the company to deliver results and support them
            throughout their journey.
          </p>
        </div>
      </div>
      <div className={styles.solutionimgg}>
        <img src={Solution1} alt="img" />
      </div>
    </div>
  );
};

export default Solutionone;
