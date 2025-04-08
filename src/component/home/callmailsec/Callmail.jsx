import React from "react";
import Callmailimg from "/src/assets/Callmailimg.jpg";
import call from "/src/assets/call.png";
import mail from "/src/assets/mail.png";
import styles from "./Callmail.module.css";

const Callmail = () => {
  return (
    <div className={styles.callmailMain}>
      <div className={styles.callmailcontaner}>
        <div className={styles.header}>
          <h4>
            We help you with any questions or information you need.<br/> What do you
            need assistance with?
          </h4>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.contactBlock1}>
            <div className={styles.iconContainer}>
              <img src={call} alt="call icon" />
            </div>
            <div className={styles.contactInfo}>
              <h6>Get Contact Now</h6>
              <p>+91 8975172394</p>
            </div>
          </div>
          <div className={styles.contactBlock1}>
            <div className={styles.iconContainer}>
              <img src={mail} alt="mail icon" />
            </div>
            <div className={styles.contactInfo}>
              <h6>Send Email</h6>
              <p>hr@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={Callmailimg} alt="support" />
      </div>
    </div>
  );
};

export default Callmail;
