import React from 'react';
import health from '/src/assets/health.jpg';
import styles from './Healthone.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHospital,
  faFileMedical,
  faLaptopMedical,
  faShieldAlt,
  faCloud,
  faUserMd,
  faArrowRight,
  faSyncAlt,
  faVideo,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Healthone = () => {
  return (
    <div className={styles.healthoneContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={health} alt="Healthcare transformation" className={styles.heroImage} />
          <div className={styles.imageOverlay}></div>
        </motion.div>

        <motion.div 
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={1}
        >
          <h3 className={styles.heroTitle}>
            Transforming <span>Healthcare</span>, Empowering <span>Lives</span>
          </h3>
          <p className={styles.heroDescription}>
            Neweage Cloud is dedicated to revolutionizing the healthcare landscape by providing innovative IT solutions tailored to meet the evolving needs of the industry. From electronic health record systems to telemedicine platforms, we empower healthcare providers to deliver exceptional care through seamless digital experiences.
          </p>
          <motion.button 
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faUserMd} className={styles.buttonIcon} />
            Learn More About Our Solutions
          </motion.button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >Our Healthcare Solutions</motion.h2>

        <motion.p 
          className={styles.sectionSubtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >Innovative technologies designed to transform patient care</motion.p>

        <div className={styles.servicesGrid}>
          {[{
            icon: faHospital,
            title: 'Healthcare IT Infrastructure',
            desc: 'Robust infrastructure solutions tailored for healthcare organizations. From network design to cloud services and cybersecurity, we ensure your systems are secure and scalable.',
            features: [
              { icon: faShieldAlt, text: 'HIPAA Compliant' },
              { icon: faCloud, text: 'Cloud Solutions' }
            ],
            link: 'Explore Infrastructure'
          }, {
            icon: faFileMedical,
            title: 'Electronic Health Records',
            desc: 'Our EHR solutions streamline clinical workflows and improve patient care coordination with customized implementations, training, and support.',
            features: [
              { icon: faShieldAlt, text: 'Data Security' },
              { icon: faSyncAlt, text: 'Real-time Updates' }
            ],
            link: 'Discover EHR Solutions'
          }, {
            icon: faLaptopMedical,
            title: 'Telemedicine Platforms',
            desc: 'Cutting-edge telemedicine platforms enabling remote consultations, virtual visits, and patient monitoring to improve access to care.',
            features: [
              { icon: faVideo, text: 'Video Consultations' },
              { icon: faChartLine, text: 'Analytics' }
            ],
            link: 'Learn About Telehealth'
          }].map((service, index) => (
            <motion.div
              className={styles.serviceCard}
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className={styles.serviceIcon}>
                <FontAwesomeIcon icon={service.icon} />
                <div className={styles.iconBackground}></div>
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.desc}</p>
              <div className={styles.serviceFeatures}>
                {service.features.map((feat, i) => (
                  <span key={i}><FontAwesomeIcon icon={feat.icon} /> {feat.text}</span>
                ))}
              </div>
              <a href="#" className={styles.serviceLink}>
                {service.link} <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Healthone;
