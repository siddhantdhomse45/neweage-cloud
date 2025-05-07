import React from "react";
import aboutleader1 from '/src/assets/aboutleader1.jpg';
import aboutleader2 from '/src/assets/aboutleader2.jpg';
import aboutleader3 from '/src/assets/aboutleader3.jpg';
import styles from './Aboutleaders.module.css';

const Aboutleaders = () => {
  return (
    <div className={styles.aboutleadermain}>
      <div className={styles.header}>
        <h1>Our Great Leaders</h1>
      </div>

      <div className={styles.leadersGrid}>
        <div className={styles.leaderCard}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={aboutleader1} alt="john" />
          </div>
          <div className={styles.textWrapper}>
            <h3 className={styles.name}>John </h3>
            <p className={styles.position}>Founder</p>
          </div>
        </div>

        <div className={styles.leaderCard}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={aboutleader2} alt="michel" />
          </div>
          <div className={styles.textWrapper}>
            <h3 className={styles.name}>Michel </h3>
            <p className={styles.position}>Manager</p>
          </div>
        </div>

        <div className={styles.leaderCard}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={aboutleader3} alt="Anisha" />
          </div>
          <div className={styles.textWrapper}>
            <h3 className={styles.name}>Anisha</h3>
            <p className={styles.position}>Founder</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Aboutleaders;
