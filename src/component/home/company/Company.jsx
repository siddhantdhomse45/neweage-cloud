import React from "react";
import companyimg from "/src/assets/companyimg.jpg";
import Company1 from "/src/assets/Company1.png";
import Company2 from "/src/assets/Company2.png";
import Company3 from "/src/assets/Company3.png";
import Company4 from "/src/assets/Company4.png";
import styles from "./Company.module.css";

const Company = () => {
  return (
    <div className={styles.companymain}>
      <div className={styles.headerContainer}>
        <h5>OUR COMPANY SOLUTION</h5>
        <h2>Technology Of Our Apps Solution</h2>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.solutionContainer}>
            <div className={styles.solutionItem}>
              <div className={styles.soltuion1}>
                <img src={Company1} alt="logo" className={styles.logo} />
                <h4>Digital Marketing</h4>
              </div>
              <p>
                Solution the we create this company for service business
                solution
              </p>
            </div>
            <div className={styles.solutionItem}>
              <div className={styles.soltuion1}>
                <img src={Company2} alt="logo" className={styles.logo} />
                <h4>Data management</h4>
              </div>
              <p>
                Solution the we create this company for service business
                solution
              </p>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={companyimg} alt="img"/>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.solutionContainer}>
            <div className={styles.solutionItem}>
              <div className={styles.soltuion1}>
                <img src={Company3} alt="logo" className={styles.logo} />
                <h4>great Speaker</h4>
              </div>
              <p>
                Solution the we create this company for service business
                solution
              </p>
            </div>
            <div className={styles.solutionItem}>
              <div className={styles.soltuion1}>
                <img src={Company4} alt="logo" className={styles.logo} />
                <h4>App Development</h4>
              </div>
              <p>
                Solution the we create this company for service business
                solution
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
