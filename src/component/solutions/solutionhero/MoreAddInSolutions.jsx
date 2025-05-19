import React from 'react';
import styles from '../MoreAddInSolutions.module.css';
import { FaChartLine, FaCloud, FaRobot, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MoreAddInSolutions = () => {
  const solutions = [
    {
      title: 'Analytics Dashboard',
      description: 'Monitor KPIs and user engagement using our intuitive analytics dashboard.',
      icon: <FaChartLine />,
    },
    {
      title: 'Cloud Integration',
      description: 'Seamless integration with AWS, Azure, and Google Cloud.',
      icon: <FaCloud />,
    },
    {
      title: 'Automation Tools',
      description: 'Streamline your workflows with AI-driven automation.',
      icon: <FaRobot />,
    },
    {
      title: 'Security Suite',
      description: 'Advanced protection against data breaches and cyber threats.',
      icon: <FaLock />,
    },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>More Add-in Solutions</h2>
      <div className={styles.grid}>
        {solutions.map((sol, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={styles.icon}>{sol.icon}</div>
            <h3 className={styles.title}>{sol.title}</h3>
            <p className={styles.description}>{sol.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MoreAddInSolutions;
