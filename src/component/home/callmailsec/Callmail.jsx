// import React from "react";
// import Callmailimg from "/src/assets/Callmailimg.jpg";
// import call from "/src/assets/call.png";
// import mail from "/src/assets/mail.png";
// import styles from "./Callmail.module.css";

// const Callmail = () => {
//   return (
//     <div className={styles.callmailMain}>
//       <div className={styles.callmailcontaner}>
//         <div className={styles.header}>
//           <h4>
//             We help you with any questions or information you need.<br/> What do you
//             need assistance with?
//           </h4>
//         </div>
//         <div className={styles.contactContainer}>
//           <div className={styles.contactBlock1}>
//             <div className={styles.iconContainer}>
//               <img src={call} alt="call icon" />
//             </div>
//             <div className={styles.contactInfo}>
//               <h6>Get Contact Now</h6>
//               <p>+91 9112100662</p>
//             </div>
//           </div>
//           <div className={styles.contactBlock1}>
//             <div className={styles.iconContainer}>
//               <img src={mail} alt="mail icon" />
//             </div>
//             <div className={styles.contactInfo}>
//               <h6>Send Email</h6>
//               <p>hr@neweageclouds.com</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={styles.imageContainer}>
//         <img src={Callmailimg} alt="support" />
//       </div>
//     </div>
//   );
// };

// export default Callmail;




// File: src/components/CompanyIntro.jsx
import React from 'react';
import styles from './Callmail.module.css';
// import profileImg from '../assets/profile-girl.jpg'; // Replace with actual image
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa';

const  Callmail = () => {
  return (
    <section className={styles.introWrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/h2-intro-video1.jpg" alt="Company Representative" className={styles.image} />
          <button className={styles.playButton}>▶</button>
        </div>

        <div className={styles.right}>
          <button className={styles.badge}>About Our Company ~</button>
          <h1>
            Choose <span className={styles.highlight}>The Best</span> IT Service Company
          </h1>
          <p className={styles.description}>
            An IT firm or MSP who keeps your IT running smoothly at all times is like a plumber who fixes
            your pipes; that’s what they are supposed to do. Many IT firms struggle.
          </p>

          <div className={styles.features}>
            <div className={styles.featureItem}>
              <span className={styles.icon}>👍</span>
              <div>
                <strong>Moneyback</strong>
                <br />Gurentee
              </div>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.icon}>📄</span>
              <div>
                <strong>Technical</strong>
                <br />Support
              </div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <button className={styles.contactButton}>Contact Us! <FaArrowRight /></button>
            <div className={styles.callInfo}>
              <div className={styles.callIcon}><FaPhoneAlt /></div>
              <div>
                <span className={styles.callText}>Call for help</span>
                <br /><span className={styles.callNumber}>+91 9112100662</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Callmail;
