import React from "react";
import servicehome1 from "/src/assets/servicehome1.jpg";
import servicehome2 from "/src/assets/servicehome2.jpg";
import servicehome3 from "/src/assets/servicehome3.jpg";
import styles from "./Servicessec.module.css";

const Servicessec = () => {
  return (
    <div className={styles.servicesMainSection}>
      <div className={styles.headerSection}>
        <h5>OUR BEST SERVICE</h5>
        <h2>We Are Service Your Business</h2>
      </div>
      <div className={styles.servicesSection}>
        <div className={styles.serviceItem}>
          <div className={styles.imageWrapper}>
            <img src={servicehome1} alt="Operational Efficiency" />
          </div>
          <div className={styles.textWrapper}>
            <h2>Operational Efficiency</h2>
            <p>Solution the we create this<br />business Solution</p>
          </div>
        </div>
        <div className={styles.serviceItem}>
          <div className={styles.imageWrapper}>
            <img src={servicehome2} alt="Business Solution" />
          </div>
          <div className={styles.textWrapper}>
            <h2>Business Solution</h2>
            <p>Solution the we create this<br /> business Soluiton</p>
          </div>
        </div>
        <div className={styles.serviceItem}>
          <div className={styles.imageWrapper}>
            <img src={servicehome3} alt="Digital Of Agency" />
          </div>
          <div className={styles.textWrapper}>
            <h2>Digital Of Agency</h2>
            <p>Solution the we create this<br /> business Soluiton</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicessec;
