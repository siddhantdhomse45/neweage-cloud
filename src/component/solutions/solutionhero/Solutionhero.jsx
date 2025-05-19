import React from 'react';
import styles from './Solutionhero.module.css';

const Solutionhero = () => {
  return (
    <section className={styles.solutionheroback}>
      <div className={styles.overlay}></div>
      <div className={styles.solutionMain}>
        <h1>Solutions</h1>
        <p>
          At NEWEAGE CLOUD SOFTWARE SERVICES PRIVATE LIMITED,<br />
          we understand that every business is unique. Our success stems from our deep understanding of our clients' needs,
          enabling us to provide tailored solutions that precisely address their challenges and aspirations.
        </p>
      </div>
    </section>
  );
};

export default Solutionhero;
