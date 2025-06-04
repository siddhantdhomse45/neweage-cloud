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
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);
  const constraintsRef = useRef(null);
  const sliderRef = useRef(null);

  // Auto slide interval in milliseconds
  const AUTO_SLIDE_INTERVAL = 4000;

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

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
      className={`${styles.hero} ${isVisible ? styles.animateIn : ''}`}
      aria-label="Company showcase"
      ref={constraintsRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={styles.overlay}></div>
      
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

      <div className={styles.content}>
        <div className={styles.textContent}>
          <motion.div 
            className={styles.breadcrumb}
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <span>Home</span>
            <span className={styles.divider}>/</span>
            <span className={styles.current}>Services</span>
          </motion.div>
          
          <motion.h1 
            className={styles.heading}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Welcome to <span className={styles.titleHighlight}>NEWEAGE CLOUD</span>
            <span className={styles.companySub}>SOFTWARE SERVICES PRIVATE LIMITED</span>
          </motion.h1>

          <motion.div 
            className={styles.slideContent}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            key={`content-${currentIndex}`}
          >
            <motion.h2 
              className={styles.subheading}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              {slides[currentIndex].title}
            </motion.h2>
            
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
            >
              {slides[currentIndex].subtitle}
            </motion.p>
            
            <div className={styles.features}>
              {slides[currentIndex].features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className={styles.featureItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.1 + index * 0.1 }}
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
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4 }}
          >
            <motion.button 
              className={styles.primaryButton}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.button>
            <motion.button 
              className={`${styles.primaryButton} ${styles.secondary}`}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
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
    </section>
  );
};

export default Hero;