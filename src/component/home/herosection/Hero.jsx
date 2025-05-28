import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import newedgeSlider from '/src/assets/newedgeSlider.jpg';
import Webdevelopment from '/src/assets/Webdevelopment.jpg';
import aboutus from '/src/assets/aboutus.png';
import styles from './Hero.module.css';

const Hero = () => {
  const slides = [
    { 
      src: newedgeSlider, 
      alt: "NewEdge Services",
      title: "Innovative Cloud Solutions",
      subtitle: "Cutting-edge technology for your business growth",
      features: ["99.9% Uptime", "Enterprise Security", "24/7 Support"]
    },
    { 
      src: Webdevelopment, 
      alt: "Web Development",
      title: "Web & Mobile Development",
      subtitle: "Custom solutions tailored to your needs",
      features: ["React/Next.js", "Mobile Apps", "UI/UX Design"]
    },
    { 
      src: aboutus, 
      alt: "About Us",
      title: "Trusted Technology Partner",
      subtitle: "Over a decade of industry experience",
      features: ["200+ Clients", "50+ Experts", "10+ Awards"]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const timeoutRef = useRef(null);
  const constraintsRef = useRef(null);
  const sliderRef = useRef(null);

  // Auto slide interval in milliseconds
  const AUTO_SLIDE_INTERVAL = 4000;

  // Reset timeout when index changes
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Start auto slide
  const startAutoSlide = () => {
    resetTimeout();
    if (!isHovering && !isDragging) {
      timeoutRef.current = setTimeout(() => {
        goToNext();
      }, AUTO_SLIDE_INTERVAL);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      resetTimeout();
    };
  }, [currentIndex, isHovering, isDragging]);

  const goToSlide = (index) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Handle drag events for touch/swipe support
  const handleDragStart = () => {
    setIsDragging(true);
    resetTimeout();
  };

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      goToPrev();
    } else if (info.offset.x < -threshold) {
      goToNext();
    }
    setIsDragging(false);
    startAutoSlide();
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  // Progress bar animation variants
  const progressVariants = {
    initial: { width: 0 },
    animate: { 
      width: '100%',
      transition: { 
        duration: AUTO_SLIDE_INTERVAL / 1000,
        ease: 'linear' 
      } 
    }
  };

  return (
    <section 
      className={styles.hero} 
      aria-label="Company showcase"
      ref={constraintsRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={styles.slidesContainer} ref={sliderRef}>
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className={styles.slide}
            drag="x"
            dragConstraints={sliderRef}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            dragElastic={0.1}
          >
            <div 
              className={styles.slideImage}
              style={{ backgroundImage: `url(${slides[currentIndex].src})` }}
              role="img"
              aria-label={slides[currentIndex].alt}
            />
            <div className={styles.slideOverlay}></div>
            
            {/* Progress bar for current slide */}
            <motion.div 
              className={styles.progressBar}
              variants={progressVariants}
              initial="initial"
              animate={!isHovering && !isDragging ? "animate" : "initial"}
              key={`progress-${currentIndex}`}
              onAnimationComplete={() => {
                if (!isHovering && !isDragging) {
                  goToNext();
                }
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={styles.decorativeCircle1}></div>
      <div className={styles.decorativeCircle2}></div>
      <div className={styles.decorativeGrid}></div>

      <div className={styles.content}>
        <div className={styles.textContent}>
          <motion.div 
            className={styles.breadcrumb}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span>Home</span>
            <span className={styles.divider}>/</span>
            <span className={styles.current}>Services</span>
          </motion.div>
          
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className={styles.titleLine}>Welcome to</span>
            <span className={styles.companyName}>NEWEAGE CLOUD</span>
            <span className={styles.companySub}>SOFTWARE SERVICES PRIVATE LIMITED</span>
          </motion.h1>

          <motion.div 
            className={styles.slideContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            key={`content-${currentIndex}`}
          >
            <h2 className={styles.slideTitle}>{slides[currentIndex].title}</h2>
            <p className={styles.slideSubtitle}>{slides[currentIndex].subtitle}</p>
            
            <div className={styles.features}>
              {slides[currentIndex].features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className={styles.featureItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className={styles.featureIcon}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className={styles.ctaContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <motion.button 
              className={`${styles.ctaButton} ${styles.primary}`}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get Started</span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
            <motion.button 
              className={`${styles.ctaButton} ${styles.secondary}`}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Learn More</span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </motion.div>
        </div>

        <motion.div 
          className={styles.imageContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <motion.div 
            className={styles.imageWrapper}
            drag
            dragConstraints={constraintsRef}
            whileHover={{ scale: 1.02 }}
          >
            <div className={styles.imageBadge}>
              <span>10+ Years</span>
              <span>Experience</span>
            </div>
            <div className={styles.imageGlow}></div>
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.controls}>
        <motion.button 
          className={styles.arrowButton}
          onClick={goToPrev}
          aria-label="Previous slide"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>

        <div className={styles.dots}>
          {slides.map((_, index) => (
            <motion.button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {index === currentIndex && (
                <motion.span
                  className={styles.activeDot}
                  layoutId="activeDot"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <motion.button 
          className={styles.arrowButton}
          onClick={goToNext}
          aria-label="Next slide"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </div>

      <div className={styles.socialLinks}>
        <motion.a 
          href="#" 
          aria-label="Facebook"
          whileHover={{ y: -3 }}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.a>
        <motion.a 
          href="#" 
          aria-label="Twitter"
          whileHover={{ y: -3 }}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.a>
        <motion.a 
          href="#" 
          aria-label="LinkedIn"
          whileHover={{ y: -3 }}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;