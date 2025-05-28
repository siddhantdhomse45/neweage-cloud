import React from 'react';
import { FaPhoneAlt, FaArrowRight, FaPlay } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';
import styles from './Callmail.module.css';

const Callmail = () => {
  return (
    <section className={styles.introWrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.imageContainer}>
            <img 
              src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/h2-intro-video1.jpg" 
              alt="IT Service Professionals" 
              className={styles.image} 
            />
            <button className={styles.playButton}>
              <FaPlay className={styles.playIcon} />
            </button>
            <div className={styles.imageOverlay}></div>
          </div>
        </div>

        <div className={styles.right}>
          <span className={styles.badge}>About Our Company</span>
          <h1 className={styles.heading}>
            Elevate Your Business With <span className={styles.highlight}>Premium</span> IT Solutions
          </h1>
          <p className={styles.description}>
            We go beyond just fixing problems - we provide strategic IT solutions that drive growth. 
            Our team delivers exceptional service with a focus on your business objectives.
          </p>

          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <FiCheckCircle />
              </div>
              <div className={styles.featureText}>
                <strong>Money-Back</strong>
                <span>Guarantee</span>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <FiCheckCircle />
              </div>
              <div className={styles.featureText}>
                <strong>24/7 Technical</strong>
                <span>Support</span>
              </div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <button className={styles.contactButton}>
              Get Started <FaArrowRight className={styles.arrowIcon} />
            </button>
            <div className={styles.callInfo}>
              <div className={styles.callIcon}>
                <FaPhoneAlt className={styles.phoneIcon} />
              </div>
              <div className={styles.callDetails}>
                <span className={styles.callText}>Emergency Support</span>
                <span className={styles.callNumber}>+91-9112100662</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Callmail;