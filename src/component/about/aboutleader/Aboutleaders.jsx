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
          // Add staggered delay based on index
          element.style.transitionDelay = `${index * 0.15}s`;
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger on initial load
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <section className={`${styles.aboutSection} ${styles.animateOnScroll}`}>
      <div className={styles.container}>
        <div className={`${styles.leftContent} ${styles.animateOnScroll}`}>
          <div className={styles.imageContainer}>
            <img
              src="https://bracketweb.com/tolak-html/main/assets/images/resources/about-3-1.jpg"
              alt="Team working"
              className={`${styles.image} ${styles.animateOnScroll}`}
            />
            <img
              src="https://bracketweb.com/tolak-html/main/assets/images/resources/about-3-2.jpg"
              alt="Team discussion"
              className={`${styles.imageHalf} ${styles.animateOnScroll}`}
            />
          </div>

          <div className={`${styles.projectStats} ${styles.animateOnScroll}`}>
            <span className={styles.checkIcon}>✔</span>
            <div>
              <div className={styles.projectCount}>1283k+</div>
              <div>Completed Projects</div>
            </div>
          </div>
        </div>

        <div className={`${styles.rightContent} ${styles.animateOnScroll}`}>
          <h4 className={styles.subTitle}>OUR COMPANY</h4>
          <h2 className={styles.title}>
            Delivering <span className={styles.highlight}>291+</span> Business Solutions Worldwide
          </h2>
          <p className={styles.description}>
            We provide tailored IT design, management & support services that drive digital transformation and business growth.
          </p>

          <ul className={styles.features}>
            <li className={styles.animateOnScroll}>Strategic Research & Development</li>
            <li className={styles.animateOnScroll}>Business Process Optimization</li>
            <li className={styles.animateOnScroll}>Cutting-edge Technology Solutions</li>
          </ul>

          <div className={`${styles.solutionBox} ${styles.animateOnScroll}`}>
            <div className={styles.percentage}>45%</div>
            <div>
              <div className={styles.solutionTitle}>Solution Business Growth</div>
              <div className={styles.solutionSubtitle}>High Performance Level</div>
            </div>
          </div>

          <blockquote className={`${styles.quoteBox} ${styles.animateOnScroll}`}>
            <div className={styles.quoteIcon}>❝</div>
            <em>
              "Our approach combines deep industry expertise with innovative technology to deliver transformative results for our clients."
            </em>
          </blockquote>

          <div className={`${styles.founderSection} ${styles.animateOnScroll}`}>
            <button className={styles.videoButton}>
              <span className={styles.playIcon}>▶</span>
              <span className={styles.playText}>Watch Video</span>
            </button>
            <div className={styles.founderInfo}>
              <img
                src="https://bracketweb.com/tolak-html/main/assets/images/resources/about-3-author.jpg"
                alt="Founder"
                className={styles.founderImg}
              />
              <div>
                <div className={styles.founderName}>Smith Paul</div>
                <div className={styles.founderTitle}>CEO & Founder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutleaders;