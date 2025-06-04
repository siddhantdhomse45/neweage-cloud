import React, { useEffect } from 'react';
import styles from './Aboutleaders.module.css';

const Aboutleaders = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(`.${styles.animateOnScroll}`);
      elements.forEach((element, index) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          element.classList.add(styles.animated);
          element.style.animationDelay = `${index * 0.1}s`;
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger on initial load
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Left Content with Images */}
        <div className={`${styles.leftContent} ${styles.animateOnScroll}`}>
          <div className={styles.imageContainer}>
            <img
              src="/src/assets/completed2.jpg"
              alt="Team working"
              className={`${styles.mainImage} ${styles.animateOnScroll}`}
            />
            <div className={styles.secondaryImageWrapper}>
              <img
                src="https://bracketweb.com/tolak-html/main/assets/images/resources/about-3-2.jpg"
                alt="Team discussion"
                className={`${styles.secondaryImage} ${styles.animateOnScroll}`}
              />
              <div className={`${styles.projectStats} ${styles.animateOnScroll}`}>
                <div className={styles.statsContent}>
                  <span className={styles.checkIcon}>✓</span>
                  <div>
                    <div className={styles.projectCount}>1283k+</div>
                    <div className={styles.statsLabel}>Completed Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content with Text */}
        <div className={`${styles.rightContent} ${styles.animateOnScroll}`}>
          <div className={styles.contentWrapper}>
            <h4 className={styles.subTitle}>OUR COMPANY</h4>
            <h2 className={styles.title}>
              Delivering <span className={styles.highlight}>291+</span> Business Solutions Worldwide
            </h2>
            <p className={styles.description}>
              We provide tailored IT design, management & support services that drive digital transformation and business growth.
            </p>

            <ul className={styles.featuresList}>
              <li className={styles.animateOnScroll}>
                <span className={styles.featureIcon}>✓</span>
                Strategic Research & Development
              </li>
              <li className={styles.animateOnScroll}>
                <span className={styles.featureIcon}>✓</span>
                Business Process Optimization
              </li>
              <li className={styles.animateOnScroll}>
                <span className={styles.featureIcon}>✓</span>
                Cutting-edge Technology Solutions
              </li>
            </ul>

            <div className={`${styles.solutionBox} ${styles.animateOnScroll}`}>
              <div className={styles.percentageCircle}>45%</div>
              <div className={styles.solutionText}>
                <h4 className={styles.solutionTitle}>Solution Business Growth</h4>
                <p className={styles.solutionSubtitle}>High Performance Level</p>
              </div>
            </div>

            <div className={`${styles.quoteBox} ${styles.animateOnScroll}`}>
              <div className={styles.quoteIcon}>❝</div>
              <p className={styles.quoteText}>
                "Our approach combines deep industry expertise with innovative technology to deliver transformative results for our clients."
              </p>
            </div>

            <div className={`${styles.footerSection} ${styles.animateOnScroll}`}>
              <button className={styles.videoButton}>
                <span className={styles.playIcon}>▶</span>
                <span className={styles.playText}>Watch Video</span>
              </button>
              <div className={styles.founderInfo}>
                <img
                  src="https://bracketweb.com/tolak-html/main/assets/images/resources/about-3-author.jpg"
                  alt="Founder"
                  className={styles.founderImage}
                />
                <div className={styles.founderDetails}>
                  <h5 className={styles.founderName}>Smith Paul</h5>
                  <p className={styles.founderTitle}>CEO & Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutleaders;