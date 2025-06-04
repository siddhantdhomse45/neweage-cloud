import React, { useEffect, useState, useRef } from "react";
import experiancesec from "/src/assets/experiancesec.jpg";
import styles from "./Experiance.module.css";

const Experiance = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.experienceContainer} ${isVisible ? styles.visible : ""}`}
      id="experience"
    >
      <svg width="0" height="0" className={styles.gradientDefs}>
        <defs>
          <linearGradient id="featureIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <linearGradient id="quoteIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className={styles.backgroundPattern}></div>
      <div className={styles.backgroundGradient}></div>
      <div className={styles.contentWrapper}>
        <div className={`${styles.contentSection} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.headingSection}>
            <span className={styles.subtitle}>OUR EXPERTISE</span>
            <h2 className={styles.title}>
              Digital Excellence <span>Perfected</span> Since 2021
            </h2>
            <p className={styles.description}>
              We combine cutting-edge technology with creative vision to craft digital 
              experiences that drive measurable results and create lasting impressions.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={`${styles.featureCard} ${isVisible ? styles.visible : ""}`}>
              <div className={styles.featureIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="url(#featureIconGradient)">
                  <path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44z"/>
                  <path d="M10.59 2.59a6 6 0 0 1 8 8l-1.3 1.3-1.42-1.42L17 9a4 4 0 0 0-5.56-5.56l-1.42-1.42L10.6 2.6z"/>
                  <path d="M19 11a6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 6-6 6 6 0 0 1 6 6z"/>
                  <circle cx="12" cy="11" r="2"/>
                </svg>
              </div>
              <div className={styles.featureContent}>
                <h3>Innovative Technology</h3>
                <p>Future-proof solutions leveraging AI, blockchain, and cloud-native architectures</p>
                <div className={styles.featureProgress}>
                  <div className={styles.progressBar} style={{ width: '94%' }}>
                    <span className={styles.progressValue}>94%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.featureCard} ${isVisible ? styles.visible : ""}`}>
              <div className={styles.featureIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="url(#featureIconGradient)">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className={styles.featureContent}>
                <h3>Elite Team</h3>
                <p>Top 1% industry experts with specialized skills and proven track records</p>
                <div className={styles.featureProgress}>
                  <div className={styles.progressBar} style={{ width: '98%' }}>
                    <span className={styles.progressValue}>98%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.featureCard} ${isVisible ? styles.visible : ""}`}>
              <div className={styles.featureIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="url(#featureIconGradient)">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                  <path d="M7 12h2v5H7zm4-7h2v12h-2zm4 4h2v8h-2z"/>
                </svg>
              </div>
              <div className={styles.featureContent}>
                <h3>Data-Driven</h3>
                <p>Metrics-focused approach ensuring measurable impact and continuous optimization</p>
                <div className={styles.featureProgress}>
                  <div className={styles.progressBar} style={{ width: '92%' }}>
                    <span className={styles.progressValue}>92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <div className={styles.statNumber} data-count="75">20+</div>
              <div className={styles.statLabel}>Successful Projects</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber} data-count="100">85%</div>
              <div className={styles.statLabel}>Client Satisfaction</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber} data-count="3">5K+</div>
              <div className={styles.statLabel}>Users Impacted</div>
            </div>
          </div>
        </div>

        <div className={`${styles.imageSection} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.imageWrapper}>
            <img 
              src={experiancesec} 
              alt="Our professional team at work" 
              className={styles.mainImage} 
              loading="lazy"
            />
            <div className={styles.imageOverlay}></div>
            <div className={styles.quoteBox}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="url(#quoteIconGradient)">
                <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604C6.854 9.561 6.5 10.581 6.5 11.6V20H3v-8.4c0-1.34.251-2.632.746-3.822.495-1.188 1.347-2.236 2.574-3.086l-.629-1.4zM13.691 6.292C15.094 4.771 17.217 4 20 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604C16.854 9.561 16.5 10.581 16.5 11.6V20H13v-8.4c0-1.34.251-2.632.746-3.822.495-1.188 1.347-2.236 2.574-3.086l-.629-1.4z"/>
              </svg>
              <p>"We don't just build products—we craft experiences that transform businesses and delight users."</p>
              <div className={styles.quoteAuthor}>— Sarah Johnson, CEO</div>
            </div>
            <div className={styles.imageDecoration}></div>
            <div className={styles.imageAccent}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;