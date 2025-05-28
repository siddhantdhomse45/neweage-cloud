import React from "react";
import { FiSettings, FiTrendingUp, FiGlobe, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import servicehome1 from "/src/assets/servicehome1.jpg";
import servicehome2 from "/src/assets/servicehome2.jpg";
import servicehome3 from "/src/assets/servicehome3.jpg";
import styles from "./Servicessec.module.css";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.16, 0.77, 0.47, 0.97]
    }
  }),
  hover: {
    y: -15,
    transition: { 
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const Servicessec = () => {
  return (
    <section className={styles.servicesMainSection}>
      <div className={styles.backgroundPattern}></div>
      
      <div className={styles.headerSection}>
        <motion.h5 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
        >
          PREMIUM SOLUTIONS
        </motion.h5>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
          transition={{ delay: 0.1 }}
        >
          Elevate Your Business With Our Expertise
        </motion.h2>
        <motion.div 
          className={styles.underline}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        ></motion.div>
      </div>
      
      <div className={styles.servicesSection}>
        {[
          {
            icon: <FiSettings />,
            title: "Operational Excellence",
            description: "Optimize workflows with our efficiency solutions that maximize productivity while minimizing costs.",
            image: servicehome1
          },
          {
            icon: <FiTrendingUp />,
            title: "Growth Strategies",
            description: "Data-driven business solutions designed to overcome challenges and accelerate sustainable growth.",
            image: servicehome2
          },
          {
            icon: <FiGlobe />,
            title: "Digital Transformation",
            description: "Comprehensive digital services to establish your brand's cutting-edge online presence.",
            image: servicehome3
          }
        ].map((service, index) => (
          <motion.div 
            key={index}
            className={styles.serviceItem}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            custom={index}
          >
            <div className={styles.imageWrapper}>
              <motion.img 
                src={service.image} 
                alt={service.title}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.iconWrapper}>
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <motion.a 
                href="#" 
                className={styles.learnMore}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Discover More <FiArrowRight className={styles.arrowIcon} />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Servicessec;