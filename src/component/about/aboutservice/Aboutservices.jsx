import React, { useEffect, useRef } from 'react';
import styles from './Aboutservices.module.css';

const Aboutservices = () => {
  const boxesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            entry.target.style.transitionDelay = `${index * 0.1}s`;
          }
        });
      },
      { threshold: 0.1 }
    );

    boxesRef.current.forEach((box) => {
      if (box) observer.observe(box);
    });

    return () => {
      boxesRef.current.forEach((box) => {
        if (box) observer.unobserve(box);
      });
    };
  }, []);

  const coreValues = [
    {
      number: '01.',
      title: 'Upgrading our Clients',
      desc: 'At Newage Cloud Software Services, helping comes first. We help our clients to upgrade through comfortable, reliable, and affordable software development services.',
    },
    {
      number: '02.',
      title: 'Entrepreneurship',
      desc: 'With over a decade of experience behind us, we never forget the tool of entrepreneurship. Hop on our journey to innovation and adventure with enthusiastic and driven employees.',
    },
    {
      number: '03.',
      title: 'Integrity',
      desc: 'Integrity means doing the right thing even when no one is watching. It reflects honesty, strong moral principles, and a commitment to ethical behavior in every action and decision.',
    },
    {
      number: '04.',
      title: 'A Safe Space',
      desc: 'Our employees know that this is a safe space to grow and learn. This value extends to our clients through 100% transparency and honesty.',
    },
    {
      number: '05.',
      title: 'Appreciation',
      desc: 'We nurture our employee-employer relationship with appreciation, rewards, and recognition. We provide a space where they feel valued.',
    },
    {
      number: '06.',
      title: 'Innovation',
      desc: 'We constantly push boundaries to deliver cutting-edge solutions that drive business growth.',
    },
    {
      number: '07.',
      title: 'Collaboration',
      desc: 'We believe in teamwork and partnership to achieve the best results for our clients.',
    },
    {
      number: '08.',
      title: 'Excellence',
      desc: 'We strive for excellence in everything we do, delivering quality beyond expectations.',
    },
    {
      number: '09.',
      title: 'Customer Focus',
      desc: 'We put our customers at the heart of everything we do, ensuring their success is our success.',
    }
  ];

  return (
    <div className={styles.coreValuesSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Core values</h2>
        <p className={styles.description}>
          Besides our genius team, we are encircled with a progressive culture and core values that guide our software development direction.
          These values are deeply embedded in each of us and guide our actions.
        </p>
      </div>

      <div className={styles.valuesContainer}>
        {coreValues.map((value, index) => (
          <div
            key={index}
            className={styles.valueBox}
            ref={(el) => (boxesRef.current[index] = el)}
          >
            <div className={styles.number}>{value.number}</div>
            <h3 className={styles.valueTitle}>{value.title}</h3>
            <p className={styles.valueDesc}>{value.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aboutservices;