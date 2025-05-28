import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

import completed from '/src/assets/completed.png';
import happyclient from '/src/assets/happyclient.png';
import partner from '/src/assets/partner.png';
import trophy from '/src/assets/trophy.png';

import styles from './Aboutaward.module.css';

const Aboutaward = () => {
  const awards = [
    { img: completed, count: 26, label: 'Completed Projects' },
    { img: happyclient, count: 42, label: 'Happy Clients' },
    { img: partner, count: 50, label: 'Business Partners' },
    { img: trophy, count: 84, label: 'Award Wins' }
  ];

  return (
    <div className={styles.Aboutawardmain}>
      {awards.map((award, index) => {
        const { ref, inView } = useInView({ triggerOnce: true });

        return (
          <div className={styles.card1} key={index} ref={ref}>
            <div className={styles.imageWrapper}>
              <img src={award.img} alt={award.label} />
            </div>
            <div className={styles.textWrapper}>
              <h3>
                {inView ? (
                  <CountUp start={0} end={award.count} duration={2} suffix="+" />
                ) : (
                  '0+'
                )}
              </h3>
              <p>{award.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Aboutaward;
