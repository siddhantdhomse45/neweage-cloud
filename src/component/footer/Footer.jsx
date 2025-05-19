import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={styles.footermain1}>
        <div className={styles.footer55}>
          <div className={styles.rpsolutionlogo}>
            <div>
              <Link to="/">
                <img
                  src="https://neweageclouds.com/NeweageLogo.png"
                  alt="img"
                />
              </Link>
            </div>
            <h1>Neweage Cloud Software Service Pvt Ltd.</h1>
          </div>
          <div className={styles.footerh2}>
            <p>
              Feel Free To Contact <br />
              Let’s Create Progress Together
            </p>
          </div>
        </div>
        <div className={styles.footercontainer1}>
          <p>
            <h4>Address:</h4> ​​Office No. 4-C,Second Floor, <br />
            Ganesham Commercial -A, Survey No. <br />
            21/18-21/24, BRTS Road, Pimple <br />
            Saudagar, Pune- 411027 <br />
          </p>
          <p>
            <h4>Contact:</h4>+91 9112100662
          </p>
          <p>
            <h4>Email Us:</h4> hr@neweageclouds.com
          </p>
        </div>
      </div>
      <div className={styles.footerlast}>
        <h5>
          © Copyright 2025 Neweage clouds Solutions LLP. All Rights Reserved.
        </h5>
      </div>
    </>
  );
};

export default Footer;
