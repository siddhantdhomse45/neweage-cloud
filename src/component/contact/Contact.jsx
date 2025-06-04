import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "9d7a0513-b70b-46c4-82e5-7d1488688cc0");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        event.target.reset();
      }
    } catch (error) {
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactWrapper}>
        {/* Left Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.contactForm}
        >
          <h2>Get in <span>Touch</span></h2>
          <p>Have a question or need assistance? Send us a message!</p>

          <form onSubmit={onSubmit}>
            <div className={styles.inputGroup}>
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className={styles.inputGroup}>
              <input type="email" name="email" placeholder="Email Address" required />
            </div>
            <div className={styles.inputGroup}>
              <textarea name="message" placeholder="Your Message" required></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className={styles.submitBtn}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.contactInfo}
        >
          <h2>Contact <span>Info</span></h2>
          <p>We'd love to hear from you. Reach out via any of these channels.</p>

          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <FaPhone className={styles.icon} />
              <div>
                <h3>Phone</h3>
                <p>+91 9112100662</p>
              </div>
            </div>

            <div className={styles.detailItem}>
              <FaEnvelope className={styles.icon} />
              <div>
                <h3>Email</h3>
                <p>hr@neweageclouds.com</p>
              </div>
            </div>

            <div className={styles.detailItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <div>
                <h3>Address</h3>
                <p>
                  Office No. 4-C, Second Floor,<br />
                  Ganesham Commercial -A,<br />
                  Pimple Saudagar, Pune- 411027
                </p>
              </div>
            </div>
          </div>

          <div className={styles.socialMedia}>
            <h3>Follow Us</h3>
            <div className={styles.socialIcons}>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;