import React from "react";
import Careerone1 from '/src/assets/Careerone1.png';
import Careerone2 from '/src/assets/Careerone2.png';
import Careerone3 from '/src/assets/Careerone3.png'; 
import Careerone4 from '/src/assets/Careerone4.png'; 
import Careerone5 from '/src/assets/Careerone5.png';                                                 
import Careerone6 from '/src/assets/Careerone6.png';
import Careerone7 from '/src/assets/Careerone7.png';
import Careerone8 from '/src/assets/Careerone8.png';
import Careerone9 from '/src/assets/Careerone9.png';
import styles from './Careerone.module.css';

const Careerone = () => {
  return (
    <div className={styles.careerOneMain}>
      <div className={styles.header}>
        <h2>Our Career Programs</h2>
      </div>
      <div className={styles.programsContainer}>
        <div className={styles.program}>
          <div className={styles.imageContainer}>
            <img src={Careerone1} alt="Web Design" />
          </div>
          <div className={styles.textContainer}>
            <h2>Web Design</h2>
            <p>
              We have pixel-perfect designers who make websites responsive that
              can be used on phones, tablets, desktops, laptops, or even projectors.
            </p>
          </div>
        </div>

        <div className={styles.program}>
          <div className={styles.imageContainer}>
            <img src={Careerone2} alt="Application Software" />
          </div>
          <div className={styles.textContainer}>
            <h2>Application Software</h2>
            <p>
              Dynamic web applications help your business grow and save valuable
              time. Every application software is based on performance.
            </p>
          </div>
        </div>

        <div className={styles.program}>
          <div className={styles.imageContainer}>
            <img src={Careerone3} alt="Website Serving" />
          </div>
          <div className={styles.textContainer}>
            <h2>Website Serving</h2>
            <p>
              Our SEO team helps your website to display in the top 10 on all
              modern browsers, which will definitely help your business grow.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.programsContainer}>
        <div className={styles.program}>
          <div className={styles.imageContainer}>
            <img src={Careerone4} alt="US Healthcare" />
          </div>
          <div className={styles.textContainer}>
            <h2>US Healthcare</h2>
            <p>
              Medical billers take the codes prepared by the medical coder and
              submit claims to the insurance company.
            </p>
          </div>
        </div>

        <div className={styles.program}>
          <div className={styles.imageContainer}>
            <img src={Careerone5} alt="Analytics" />
          </div>
          <div className={styles.textContainer}>
            <h2>Analytics</h2>
            <p>
              We have a certified Google analytics team to help you analyze your
              application with advanced Google Analytics tools.
            </p>
          </div>
        </div>

        <div className={styles.program}>
          <div className={styles.imageContainer}>
            <img src={Careerone6} alt="Coding" />
          </div>
          <div className={styles.textContainer}>
            <h2>Coding</h2>
            <p>
              Every line of code is tested twice before the application release,
              ensuring quick execution and optimal performance.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.programsContainer}>
        <div className={styles.program}>
          <div className={styles.imageContainer}>
            <img src={Careerone7} alt="Android App" />
          </div>
          <div className={styles.textContainer}>
            <h2>Android App</h2>
            <p>
              SMART Software services provide rapid Android application
              development as per your business requirements with high-quality
              products.
            </p>
          </div>
        </div>

        <div className={styles.program}>
          <div className={styles.imageContainer}>
            <img src={Careerone8} alt="Branding" />
          </div>
          <div className={styles.textContainer}>
            <h2>Branding</h2>
            <p>
              SMART Software Services offer branding services that help you
              achieve your business goals and increase your business strategy.
            </p>
          </div>
        </div>

        <div className={styles.program}>
          <div className={styles.imageContainer}>
            <img src={Careerone9} alt="Marketing" />
          </div>
          <div className={styles.textContainer}>
            <h2>Marketing</h2>
            <p>
              We understand that every business needs marketing. Our team helps
              you plan business marketing and use the latest marketing strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careerone;
