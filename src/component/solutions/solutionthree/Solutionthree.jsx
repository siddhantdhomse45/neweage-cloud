import React from 'react';
import solutionleader1 from '/src/assets/solutionleader1.jpg';
import solutionleader2 from '/src/assets/solutionleader2.jpg';
import solutionleader3 from '/src/assets/solutionleader3.jpg';
import styles from './Solutionthree.module.css';

const Solutionthree = () => {
  return (
    <div className={styles.solutionthreemain}>
      <div className={styles.header}>
        <h2>Our Leaders Give You the Best Solutions</h2>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img src={solutionleader1} alt="Leader 1" />
          </div>
          <div className={styles.cardContent}>
            <h3>Business Of Growth</h3>
            <p>
              We provide business solutions with a standard chunk of expertise,
              catering to agencies and startups alike.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img src={solutionleader2} alt="Leader 2" />
          </div>
          <div className={styles.cardContent}>
            <h3>Innovative Strategies</h3>
            <p>
              Our innovative strategies empower businesses with cutting-edge
              solutions for sustainable growth.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img src={solutionleader3} alt="Leader 3" />
          </div>
          <div className={styles.cardContent}>
            <h3>Expert Guidance</h3>
            <p>
              Our experienced leaders offer guidance tailored to meet your
              business needs and goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutionthree;
