import React from 'react';
import styles from './Ourfeature.module.css';

const Ourfeature = () => {
  const features = [
    {
      img: '/src/assets/Our1.png',
      title: 'Technological Solutions',
      description: 'Empowering businesses with innovative technological solutions that drive efficiency, scalability, and digital transformation.'
    },
    {
      img: '/src/assets/Our2.png',
      title: 'Operational Efficiency',
      description: 'Streamlining business operations through smart technology, automation, and data-driven strategies to enhance productivity, reduce costs, and drive sustainable growth.'
    },
    {
      img: '/src/assets/Our3.png',
      title: 'Financial Management',
      description: 'Empowering smarter financial decisions with innovative tools and strategies to manage budgets, optimize expenses, and drive long-term profitability.'
    },
    {
      img: '/src/assets/Our4.png',
      title: 'Business Resources',
      description: 'Comprehensive tools, insights, and support to help businesses streamline operations, boost productivity, and achieve sustainable growth.'
    }
  ];

  return (
    <section className={styles.ourMainSection}>
      <div className={styles.headerSection}>
        <h6 className={styles.subtitle}>Our Best Feature</h6>
        <h2 className={styles.title}>We Are Featured Digital Solution</h2>
      </div>
      <div className={styles.featuresSection}>
        {features.map((feature, index) => (
          <div className={styles.featureCard} key={index}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <div className={styles.iconWrapper}>
                  <img src={feature.img} alt={feature.title} />
                </div>
                <h4>{feature.title}</h4>
              </div>
              <div className={styles.cardBack}>
                <p>{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ourfeature;