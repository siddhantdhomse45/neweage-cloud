import React from "react";
import Web from "/src/assets/Web.jpg";
import Data from "/src/assets/Data.jpg";
import Digital from "/src/assets/Digital.jpg";
import AWS from "/src/assets/AWS.jpg";
import mobile from "/src/assets/mobile.avif";
import Cloud from "/src/assets/Cloud.jpg";
import styles from "./Servicestwo.module.css";

const Servicestwo = () => {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.servicesRow}>
        <div className={styles.serviceItem}>
          <img src={Web} alt="img" />
          <h4>Website Development</h4>
          <p>
            RPBS specializes in website development, creating tailored online platforms to meet businesses' unique needs. From design to functionality, we ensure user-friendly and impactful websites. With our expertise, we enhance online presence, engage visitors, and drive business growth through effective digital solutions.
          </p>
        </div>
        <div className={styles.serviceItem}>
          <img src={Data} alt="img" />
          <h4>Data Analytics</h4>
          <p>
            RPBS's data analytics platforms facilitate informed decision-making and strategic growth initiatives by extracting valuable insights from data. With advanced capabilities like data visualization and predictive modeling, they optimize operations and confer a competitive edge in industry.
          </p>
        </div>
        <div className={styles.serviceItem}>
          <img src={Digital} alt="img" />
          <h4>Digital Marketing</h4>
          <p>
            RPBS specializes in digital marketing services, enhancing businesses' online visibility and achieving marketing goals across various platforms. Our expertise covers social media, search engines, email, and content marketing, crafting tailored strategies for your success. With RPBS, elevate your digital presence and achieve remarkable marketing success.
          </p>
        </div>
      </div>
      <div className={styles.servicesRow}>
        <div className={styles.serviceItem}>
          <img src={AWS} alt="img" />
          <h4>Amazon Web Services (AWS)</h4>
          <p>
            With AWS, businesses benefit from scalability, flexibility, and cost-effectiveness in infrastructure management, data storage, and application deployment. By leveraging AWS solutions, RPBS helps businesses streamline their operations, improve efficiency, and stay competitive in today's digital landscape.
          </p>
        </div>
        <div className={styles.serviceItem}>
          <img src={mobile} alt="img" />
          <h4>Mobile App Development</h4>
          <p>
            RPBS specializes in mobile app development, creating innovative and user-friendly applications for businesses. From conceptualization to deployment, we ensure seamless functionality across iOS and Android platforms. With our expertise, businesses can enhance customer engagement and expand their digital presence.
          </p>
        </div>
        <div className={styles.serviceItem}>
          <img src={Cloud} alt="img" />
          <h4>Cloud Services Integration</h4>
          <p>
            RPBS excels in integrating cloud solutions like AWS, Microsoft Azure, and Google Cloud into existing infrastructure. We specialize in tailored integration, data migration, and optimizing architecture for scalability and cost-effectiveness. With RPBS, businesses harness cloud computing for innovation and growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Servicestwo;
