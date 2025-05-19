import React from 'react';
import completed from '/src/assets/completed.png';
import happyclient from '/src/assets/happyclient.png';
import partner from '/src/assets/partner.png';
import trophy from '/src/assets/trophy.png';
import styles from './Aboutaward.module.css';

const Aboutaward = () => {
  return (
    <div className={styles.Aboutawardmain}>
      <div className={styles.card1}>
        <div className={styles.imageWrapper}>
          <img src={completed} alt="logo" />
        </div>
        <div className={styles.textWrapper}>
          <h3>26+</h3>
          <p>Completed Projects</p>
        </div>
      </div>

      <div className={styles.card1}>
        <div className={styles.imageWrapper}>
          <img src={happyclient} alt="logo" />
        </div>
        <div className={styles.textWrapper}>
          <h3>42+</h3>
          <p>Happy Clients</p>
        </div>
      </div>

      <div className={styles.card1}>
        <div className={styles.imageWrapper}>
          <img src={partner} alt="logo" />
        </div>
        <div className={styles.textWrapper}>
          <h3>50+</h3>
          <p>Business Partners</p>
        </div>
      </div>

      <div className={styles.card1}>
        <div className={styles.imageWrapper}>
          <img src={trophy} alt="logo" />
        </div>
        <div className={styles.textWrapper}>
          <h3>84+</h3>
          <p>Award Wins</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutaward;
