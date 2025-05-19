import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Solutionone.module.css";

const Solutionone = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,   // Animation duration in ms
      easing: "ease-in-out",
      once: true,       // Only animate once
      mirror: true    // Don't animate when scrolling back
    });
  }, []);

  return (
    <div className={styles.solutionmain}>
      <div className={styles.solutioncontain1}>
        <div
          className={styles.scontainer1}
          data-aos="flip-left"
          data-aos-delay="100"
        >
          <h2>Understanding of Client Needs</h2>
          <p>
            At NEWEAGE CLOUD SOFTWARE SERVICES PRIVATE LIMITED, we understand
            that every business is unique. Our success stems from our deep
            understanding of our clients' needs, enabling us to provide
            tailored solutions that precisely address their challenges and
            aspirations.
          </p>
        </div>

        <div
          className={styles.scontainer2}
          data-aos="flip-right"
          data-aos-delay="300"
        >
          <h2>Commitment to Innovation</h2>
          <p>
            Highlighting innovation and customization indicates that NewEage
            Cloud is proactive in finding new and better ways to solve client
            problems.
          </p>
        </div>
      </div>

      <div className={styles.solutioncontain1}>
        <div
          className={styles.scontainer1}
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <h2>Focus on Quality & Customer Service</h2>
          <p>
            Emphasizing dedication to quality and customer service reassures
            potential clients that they will receive high-quality solutions and
            support.
          </p>
        </div>

        <div
          className={styles.scontainer2}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h2>Establishing Trust</h2>
          <p>
            Positioning NCSS as a trusted partner reinforces the idea that
            clients can rely on the company to deliver results and support them
            throughout their journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solutionone;
