import React from "react";
import { motion } from "framer-motion";
import companyimg from "/src/assets/companyimg.jpg";
import Company1 from "/src/assets/Company1.png";
import Company2 from "/src/assets/Company2.png";
import Company3 from "/src/assets/Company3.png";
import Company4 from "/src/assets/Company4.png";
import styles from "./Company.module.css";

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

const Company = () => {
  return (
    <div className={styles.companymain}>
      <motion.div
        className={styles.headerContainer}
        variants={fadeDown}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h5>OUR COMPANY SOLUTION</h5>
        <h2>Technology Of Our Apps Solution</h2>
      </motion.div>

      <div className={styles.contentContainer}>
        {/* Left Section */}
        <motion.div
          className={styles.leftContainer}
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className={styles.solutionContainer}>
            {[{ img: Company1, title: "Digital Marketing" }, { img: Company2, title: "Data Management" }].map((item, i) => (
              <motion.div
                className={styles.solutionItem}
                key={i}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.soltuion1}>
                  <img src={item.img} alt="logo" className={styles.logo} />
                  <h4>{item.title}</h4>
                </div>
                <p>Solution the we create this company for service business solution</p>
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
          <img src={companyimg} alt="img" />
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
            {[{ img: Company3, title: "Great Speaker" }, { img: Company4, title: "App Development" }].map((item, i) => (
              <motion.div
                className={styles.solutionItem}
                key={i}
                whileHover={{ scale: 1.05 }}
              >
                <div className={styles.soltuion1}>
                  <img src={item.img} alt="logo" className={styles.logo} />
                  <h4>{item.title}</h4>
                </div>
                <p>Solution the we create this company for service business solution</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Company;
