// src/components/ServicesSection.jsx
import React from "react";
import styles from "./ServicesSection.module.css";
import { FaUserAlt, FaShieldAlt, FaChartLine } from "react-icons/fa";
import { MdMedicalServices, MdPayment, MdAssignmentTurnedIn } from "react-icons/md";
import { PiFileTextFill, PiCertificateFill } from "react-icons/pi";
import { BsCashStack, BsFileEarmarkText } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";

const ServicesSection = () => {
  const services = [
    {
      title: "AR Caller",
      icon: <FaUserAlt className={styles.icon} />,
      features: [
        { text: "Data Security", icon: <FaShieldAlt /> },
        { text: "Unpaid Insurance Claim Tracking", icon: <HiOutlineDocumentReport /> },
        { text: "Track Electronic and Paper Claims", icon: <BsFileEarmarkText /> },
        { text: "Patient's Collectible Handling", icon: <BsCashStack /> },
        { text: "Generate AR Reports", icon: <FaChartLine /> },
        { text: "Affordable AR Calling Services", icon: <MdPayment /> },
        { text: "HIPAA Compliant Services", icon: <PiCertificateFill /> }
      ]
    },
    {
      title: "Medical Coding",
      icon: <MdMedicalServices className={styles.icon} />,
      features: [
        { text: "HCC Medical Coding Services", icon: <MdAssignmentTurnedIn /> },
        { text: "Risk Adjustment HCC Coding", icon: <FaChartLine /> },
        { text: "Medical Coding Audit Services", icon: <FaShieldAlt /> },
        { text: "Medical Coding Analysis", icon: <FaChartLine /> },
        { text: "Submission of coded charts", icon: <BsFileEarmarkText /> },
        { text: "Client Feedback System", icon: <FaUserAlt /> },
        { text: "Comprehensive Documentation", icon: <PiFileTextFill /> }
      ]
    },
    {
      title: "Medical Billing",
      icon: <PiFileTextFill className={styles.icon} />,
      features: [
        { text: "Physician Billing Services", icon: <FaUserAlt /> },
        { text: "Hospital Billing Services", icon: <MdMedicalServices /> },
        { text: "Mental Health Billing Services", icon: <FaUserAlt /> },
        { text: "Chiropractic Billing Services ", icon: <MdMedicalServices /> },
        { text: "Ambulance Billing Services", icon: <MdMedicalServices /> },
        { text: "Anesthesia Billing Services", icon: <MdMedicalServices /> },
        { text: "Pathology Billing Services", icon: <MdMedicalServices /> }
      ]
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Our Specialized Services</h2>
        <p className={styles.sectionSubtitle}>Comprehensive solutions tailored to your healthcare revenue cycle needs</p>
      </div>
      
      <div className={styles.wrapper}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconContainer}>
              {service.icon}
            </div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <ul className={styles.featuresList}>
              {service.features.map((feature, idx) => (
                <li key={idx} className={styles.featureItem}>
                  <span className={styles.featureIcon}>{feature.icon}</span>
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;