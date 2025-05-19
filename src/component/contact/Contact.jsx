import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9d7a0513-b70b-46c4-82e5-7d1488688cc0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Message Send Successful!");
    }
  };

  return (
    <div className={styles.contactContainer444}>
      <div className={styles.contactmain}>
        <div className={styles.contactForm}>
          <h3>Get free Business touch Customers me.</h3>
          <p>
            Neweage Cloud design, management & support services business agency
            elit, sed do eiusmod tempor.
          </p>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className={styles.input}
              name="name"
              required
            />
            <input
              type="email"
              placeholder="Email address"
              className={styles.input}
              name="email"
              required
            />
            <textarea
              placeholder="Message"
              className={styles.textarea}
              name="message"
              required
            ></textarea>
            <button type="submit" className={styles.button}>
              Send Request
            </button>
          </form>
        </div>
        <div className={styles.contactInfo}>
          <h3>Contact Information:</h3>
          <p>
            Neweage Cloud design, management & support business agency elit, sed
            do eiusmod tempor.
          </p>
          <ul>
            <li>
              <strong>Call This Now:</strong> <br />
              +919112100662
            </li>
            <li>
              <strong>Your Message:</strong> <br />
              hr@neweageclouds.com
            </li>
            <li>
              <strong>Your Location:</strong> <br />
              ​​Office No. 4-C,Second Floor, <br />
              Ganesham Commercial -A, Survey No.
              <br /> 21/18-21/24, BRTS Road, Pimple
              Saudagar, Pune- 411027
             
            </li>
          </ul>
          <div className={styles.socialLinks}>
            <span>Follow Social:</span>
            <a href="#">🌐</a>
            <a href="#">📘</a>
            <a href="#">🐦</a>
            <a href="#">📷</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
