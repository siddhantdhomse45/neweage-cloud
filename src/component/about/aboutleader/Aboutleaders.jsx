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
            <img className={styles.image} src={aboutleader1} alt="Swapnil Kattare" />
          </div>
          <div className={styles.textWrapper}>
            <h3 className={styles.name}>Tejashri </h3>
            <p className={styles.position}>Founder</p>
          </div>
        </div>

        <div className={styles.leaderCard}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={aboutleader2} alt="Siddhant Thomse" />
          </div>
          <div className={styles.textWrapper}>
            <h3 className={styles.name}>Siddhant Thomse</h3>
            <p className={styles.position}>Manager</p>
          </div>
        </div>

        <div className={styles.leaderCard}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={aboutleader3} alt="Gudiya Pawar" />
          </div>
          <div className={styles.textWrapper}>
            <h3 className={styles.name}>Gudiya Pawar</h3>
            <p className={styles.position}>Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutleaders;
