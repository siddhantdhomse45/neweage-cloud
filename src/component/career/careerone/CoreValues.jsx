import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./CoreValues.module.css";

// Using React Icons (install with: npm install react-icons)
import { 
  FaHeart, 
  FaHammer, 
  FaHandsHelping, 
  FaLaughSquint,
  FaSeedling,
  FaUsers
} from "react-icons/fa";

const values = [
  { icon: <FaHeart className={styles.icon} />, label: "Empathy" },
  { icon: <FaHammer className={styles.icon} />, label: "Craftsmanship" },
  { icon: <FaHandsHelping className={styles.icon} />, label: "Courtesy" },
  { icon: <FaLaughSquint className={styles.icon} />, label: "Playfulness" },
  { icon: <FaSeedling className={styles.icon} />, label: "Thriving" },
  { icon: <FaUsers className={styles.icon} />, label: "Solidarity" },
];

const CoreValues = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      easing: 'ease-out-quart'
    });
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content} data-aos="fade-right">
        <h2 className={styles.title}>Our Core Values</h2>
        <p className={styles.description}>
          These fundamental principles guide everything we do as a company. 
          We don't just preach them—we build them into our platform and products, 
          creating real value by helping people work more effectively while 
          bringing their authentic selves to everything they do.
        </p>
        <div className={styles.grid}>
          {values.map((val, i) => (
            <div
              key={i}
              className={styles.item}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <div className={styles.iconWrapper}>
                {val.icon}
              </div>
              <span className={styles.label}>{val.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.imageWrapper} data-aos="fade-left" data-aos-delay="300">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Team collaborating and living our core values"
          className={styles.image}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default CoreValues;