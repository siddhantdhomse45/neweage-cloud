import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./CoreValues.module.css";

const values = [
  { icon: "❤️", label: "Empathy" },
  { icon: "🔨", label: "Craftsmanship" },
  { icon: "🤗", label: "Courtesy" },
  { icon: "🎭", label: "Playfulness" },
  { icon: "🌻", label: "Thriving" },
  { icon: "🫶", label: "Solidarity" },
];

const CoreValues = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content} data-aos="fade-right">
        <h2 className={styles.title}>Our Core Values</h2>
        <p className={styles.description}>
          These are some of the values that we live by as a company. We work by them, too —
          building a platform and products that we believe in, knowing that there is
          real value to be gained from helping people to simplify whatever it is that they do
          and bring more of themselves to their work, wherever they are.
        </p>
        <div className={styles.grid}>
          {values.map((val, i) => (
            <div
              key={i}
              className={styles.item}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <span className={styles.icon}>{val.icon}</span>
              <span className={styles.label}>{val.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.imageWrapper} data-aos="fade-left">
        <img
          src="https://a.slack-edge.com/c29da/marketing/img/careers/img-careers-values.jpg"
          alt="Core Values Illustration"
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default CoreValues;
