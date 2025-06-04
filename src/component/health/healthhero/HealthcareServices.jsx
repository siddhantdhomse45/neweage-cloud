import React from "react";
import styles from "./HealthcareServices.module.css";
import { FaPhoneAlt, FaFileMedicalAlt, FaFileInvoiceDollar } from "react-icons/fa";

const HealthcareServices = () => {
  const services = [
    {
      title: "AR Calling",
      description: "Accounts Receivable (AR) calling is a critical component in the financial ecosystem of healthcare organizations. As a fundamental part of Revenue Cycle Management (RCM), AR calling involves reaching out to payers, insurance companies, or patients to ensure timely and accurate payment for the services rendered.",
      image: "https://i.pinimg.com/736x/8f/95/7f/8f957f14100910bdfa276291f9f6b567.jpg",
      icon: <FaPhoneAlt />,
      features: [
        "Claims processing expertise",
        "Payment dispute resolution",
        "Reimbursement delay management",
        "Effective communication strategies"
      ]
    },
    {
      title: "Medical Coding",
      description: "Medical Coding Services is a specialized function in the Revenue Cycle Management which involves healthcare providers, patients, payers and Physician administrative staff. Medical Coders work in tandem with billers to process accurate revenue codes.",
      image: "https://i.pinimg.com/736x/bb/f8/32/bbf8323ccd804ba8abf294ba27fdbbcb.jpg",
      icon: <FaFileMedicalAlt />,
      features: [
        "Accurate revenue code processing",
        "Clinical documentation analysis",
        "Denial-free reimbursement",
        "Standardized code translation"
      ]
    },
    {
      title: "Medical Billing",
      description: "As healthcare reforms reshape the industry, medical billing services have become indispensable for practitioners. Facing challenges like increased denials and operating costs, reduced reimbursements, and complex coding requirements.",
      image: "https://i.pinimg.com/736x/20/37/59/2037599facb6c9af343ed4bc36dcf993.jpg",
      icon: <FaFileInvoiceDollar />,
      features: [
        "ICD-10 transition support",
        "HIPAA 5010 compliance",
        "Reimbursement optimization",
        "Complex coding handling"
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Healthcare Services</h1>
        <p className={styles.subtitle}>Comprehensive solutions for your medical practice's financial health</p>
      </div>

      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <div 
            className={`${styles.serviceCard} ${index % 2 !== 0 ? styles.reverse : ""}`}
            key={index}
          >
            <div className={styles.imageContainer}>
              <img src={service.image} alt={service.title} className={styles.serviceImage} />
              <div className={styles.serviceIcon}>
                {service.icon}
              </div>
            </div>
            
            <div className={styles.content}>
              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <p className={styles.serviceDescription}>{service.description}</p>
              
              <ul className={styles.featuresList}>
                {service.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <span className={styles.checkIcon}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthcareServices;