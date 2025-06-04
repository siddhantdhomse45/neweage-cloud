import React, { useEffect, useRef, useState } from "react";
import Web from "/src/assets/Web.jpg";
import Data from "/src/assets/Data.jpg";
import Digital from "/src/assets/DigitalMarketing.png";
import AWS from "/src/assets/AWS1.png";
import mobile from "/src/assets/mobile.avif";
import Cloud from "/src/assets/Cloud.jpg";
import styles from "./Servicestwo.module.css";

const services = [
  {
    img: Web,
    title: "Website Development",
    desc:
      "Neweage Cloud specializes in website development, creating tailored online platforms to meet businesses' unique needs. From design to functionality, we ensure user-friendly and impactful websites.",
  },
  {
    img: Data,
    title: "Data Analytics",
    desc:
      "Data analytics platforms facilitate informed decision-making and strategic growth by extracting valuable insights using visualization and predictive modeling.",
  },
  {
    img: Digital,
    title: "Digital Marketing",
    desc:
      "We enhance online visibility through strategies in social media, search engines, email, and content marketing to achieve remarkable marketing success.",
  },
  {
    img: AWS,
    title: "Amazon Web Services (AWS)",
    desc:
      "With AWS, businesses benefit from scalable and cost-effective cloud infrastructure. We help streamline operations and ensure digital competitiveness.",
  },
  {
    img: mobile,
    title: "Mobile App Development",
    desc:
      "From idea to deployment, we build cross-platform mobile apps to enhance user engagement and digital reach on both iOS and Android.",
  },
  {
    img: Cloud,
    title: "Cloud Services Integration",
    desc:
      "We integrate AWS, Azure, and Google Cloud into your systems with smooth data migration and architecture optimization.",
  },
];

const Servicestwo = () => {
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            setVisibleCards((prev) => ({ ...prev, [index]: true }));
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      cardRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className={styles.servicesContainer}>
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.gridContainer}>
        {services.map((service, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`${styles.serviceCard} ${
              visibleCards[index] ? styles[`fadeIn${index + 1}`] : ""
            }`}
          >
            <img src={service.img} alt={service.title} />
            <h4>{service.title}</h4>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicestwo;
