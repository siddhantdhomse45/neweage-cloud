import React from "react";
import { motion } from "framer-motion";
import companyimg from "/src/assets/companyimg.jpg";
import Company1 from "/src/assets/Company1.png";
import Company2 from "/src/assets/Company2.png";
import Company3 from "/src/assets/Company3.png";
import Company4 from "/src/assets/Company4.png";
import styles from "./Company.module.css";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const fadeDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

const cardHover = {
  hover: {
    y: -10,
    boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
    transition: { duration: 0.3 }
  }
};

const Company = () => {
  const solutionsLeft = [
    {
      img: Company1,
      title: "Digital Marketing",
      description: "Comprehensive digital strategies to grow your online presence and reach your target audience effectively."
    },
    {
      img: Company2,
      title: "Data Management",
      description: "Secure and efficient data handling solutions tailored to your business needs."
    }
  ];

  const solutionsRight = [
    {
      img: Company3,
      title: "Human Resources",
      description: "Empowering your organization with expert HR solutions—streamlining recruitment, enhancing employee engagement, and building a people-first culture."
    },
    {
      img: Company4,
      title: "App Development",
      description: "Custom mobile and web applications designed to solve your unique business challenges."
    }
  ];

  return (
    <section className={styles.companymain}>
      <motion.div
        className={styles.headerContainer}
        variants={fadeDown}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <span className={styles.subtitle}>OUR COMPANY SOLUTION</span>
        <h2 className={styles.title}>Innovative Technology Solutions</h2>
        <p className={styles.headerText}>
          We deliver cutting-edge solutions tailored to your business needs, 
          helping you stay ahead in the digital landscape.
        </p>
      </motion.div>

      <motion.div 
        className={styles.contentContainer}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left Section */}
        <motion.div
          className={styles.leftContainer}
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className={styles.solutionContainer}>
            {solutionsLeft.map((item, i) => (
              <motion.div
                className={styles.solutionItem}
                key={i}
                variants={cardHover}
                whileHover="hover"
              >
                <div className={styles.solutionHeader}>
                  <div className={styles.iconWrapper}>
                    <img src={item.img} alt={item.title} className={styles.logo} />
                  </div>
                  <h4>{item.title}</h4>
                </div>
                <p>{item.description}</p>
                <a href="#" className={styles.learnMore}>Learn more →</a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Center Image */}
        <motion.div
          className={styles.imageContainer}
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className={styles.imageWrapper}>
            <img src={companyimg} alt="Technology solutions" className={styles.centerImage} />
            <div className={styles.imageOverlay}></div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className={styles.rightContainer}
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className={styles.solutionContainer}>
            {solutionsRight.map((item, i) => (
              <motion.div
                className={styles.solutionItem}
                key={i}
                variants={cardHover}
                whileHover="hover"
              >
                <div className={styles.solutionHeader}>
                  <div className={styles.iconWrapper}>
                    <img src={item.img} alt={item.title} className={styles.logo} />
                  </div>
                  <h4>{item.title}</h4>
                </div>
                <p>{item.description}</p>
                <a href="#" className={styles.learnMore}>Learn more →</a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Company;