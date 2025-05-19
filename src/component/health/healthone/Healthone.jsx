// import React from 'react'
// import health from '/src/assets/health.jpg'
// import styles from './Healthone.module.css'

// const Healthone = () => {
//   return (
//     <div className={styles.healthoneContainer}>
//       <div className={styles.heroSection}>
//         <div className={styles.imageContainer}>
//           <img src={health} alt="Healthcare transformation" />
//         </div>
//         <div className={styles.heroText}>
//           <h3>Transforming Healthcare, Empowering Lives</h3>
//           <p>Neweage Cloud is dedicated to revolutionizing the healthcare landscape by providing innovative IT solutions tailored to meet the evolving needs of the industry. From electronic health record systems to telemedicine platforms, we empower healthcare providers to deliver exceptional care through seamless digital experiences. Our HIPAA-compliant solutions prioritize patient privacy and security while enhancing access to care and driving patient satisfaction. With RPBS, healthcare organizations can embrace the future of healthcare delivery with confidence.</p>
//         </div>
//       </div>
//       <div className={styles.servicesSection}>
//         <div className={styles.serviceItem}>
//           <h2>Healthcare IT Infrastructure</h2>
//           <p>Infrastructure solutions tailored to the needs of healthcare organizations. From network design and implementation to cloud services and cybersecurity, we ensure that our clients' IT systems are robust, secure, and scalable.</p>
//         </div>
//         <div className={styles.serviceItem}>
//           <h2>Electronic Health Records Systems</h2>
//           <p>Our EHR solutions streamline clinical workflows, enhance data accessibility, and improve patient care coordination. We offer customized EHR implementations, training, and support to help healthcare providers maximize the benefits of digital health records.</p>
//         </div>
//         <div className={styles.serviceItem}>
//           <h2>Telemedicine Platforms</h2>
//           <p>In response to the growing demand for telehealth services, RPBS develops and deploys telemedicine platforms that enable remote consultations, virtual visits, and remote patient monitoring. Our solutions facilitate seamless communication between healthcare providers and patients, improving access to care and patient outcomes.</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Healthone




import React from 'react';
import health from '/src/assets/health.jpg';
import styles from './Healthone.module.css';

const Healthone = () => {
  return (
    <div className={styles.healthoneContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.imageContainer}>
          <img src={health} alt="Healthcare transformation" />
        </div>
        <div className={styles.heroText}>
          <h3>Transforming Healthcare, Empowering Lives</h3>
          <p>
            Neweage Cloud is dedicated to revolutionizing the healthcare landscape by providing innovative IT solutions tailored to meet the evolving needs of the industry. From electronic health record systems to telemedicine platforms, we empower healthcare providers to deliver exceptional care through seamless digital experiences. Our HIPAA-compliant solutions prioritize patient privacy and security while enhancing access to care and driving patient satisfaction. With RPBS, healthcare organizations can embrace the future of healthcare delivery with confidence.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.servicesSection}>
        <div className={styles.serviceItem}>
          <h2>Healthcare IT Infrastructure</h2>
          <p>
            Infrastructure solutions tailored to the needs of healthcare organizations. From network design and implementation to cloud services and cybersecurity, we ensure that our clients' IT systems are robust, secure, and scalable.
          </p>
        </div>
        <div className={styles.serviceItem}>
          <h2>Electronic Health Records Systems</h2>
          <p>
            Our EHR solutions streamline clinical workflows, enhance data accessibility, and improve patient care coordination. We offer customized EHR implementations, training, and support to help healthcare providers maximize the benefits of digital health records.
          </p>
        </div>
        <div className={styles.serviceItem}>
          <h2>Telemedicine Platforms</h2>
          <p>
            In response to the growing demand for telehealth services, RPBS develops and deploys telemedicine platforms that enable remote consultations, virtual visits, and remote patient monitoring. Our solutions facilitate seamless communication between healthcare providers and patients, improving access to care and patient outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Healthone;
