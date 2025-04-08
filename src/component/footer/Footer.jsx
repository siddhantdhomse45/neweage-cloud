import React from "react";
import RPSolution from "/src/assets/RPSolution.png";
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
                <img src={RPSolution} alt="img" />
              </Link>
            </div>
            <h1>RP Business Solutions LLP.</h1>
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
            <h4>Address:</h4> 401/402, <br />
            4th Floor Sai Villa Commercial Appartment, <br />
            Sr No 166, Malwadi road, <br />
            Opps. to Sahyadri Hospital, <br />
            Hadapsar Pune-411028
          </p>
          <p>
            <h4>Contact:</h4>897517234
          </p>
          <p>
            <h4>Email Us:</h4> hr@devconssoftware.com
          </p>
        </div>
      </div>
      <div className={styles.footerlast}>
        <h5>
          © Copyright 2025 RP Business Solutions LLP. All Rights Reserved.
        </h5>
      </div>
    </>
  );
};

export default Footer;
