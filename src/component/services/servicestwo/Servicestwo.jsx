// // Servicestwo.jsx
// import React from "react";
// import Web from "/src/assets/Web.jpg";
// import Data from "/src/assets/Data.jpg";
// import Digital from "/src/assets/Digital.jpg";
// import AWS from "/src/assets/AWS.jpg";
// import mobile from "/src/assets/mobile.avif";
// import Cloud from "/src/assets/Cloud.jpg";
// import styles from "./Servicestwo.module.css";

// const Servicestwo = () => {
//   const services = [
//     {
//       image: Web,
//       title: "Website Development",
//       description:
//         "Neweage Cloud specializes in website development, creating tailored online platforms to meet businesses' unique needs. From design to functionality, we ensure user-friendly and impactful websites."
//     },
//     {
//       image: Data,
//       title: "Data Analytics",
//       description:
//         "Data analytics platforms facilitate informed decision-making and strategic growth initiatives by extracting valuable insights."
//     },
//     {
//       image: Digital,
//       title: "Digital Marketing",
//       description:
//         "Neweage Cloud enhances online visibility and marketing goals with strategies for social media, search engines, email, and content marketing."
//     },
//     {
//       image: AWS,
//       title: "Amazon Web Services (AWS)",
//       description:
//         "With AWS, businesses benefit from scalability and flexibility. RPBS streamlines operations and improves efficiency in a digital-first landscape."
//     },
//     {
//       image: mobile,
//       title: "Mobile App Development",
//       description:
//         "Neweage Cloud creates innovative apps with seamless functionality across iOS and Android, enhancing customer engagement."
//     },
//     {
//       image: Cloud,
//       title: "Cloud Services Integration",
//       description:
//         "Neweage Cloud integrates AWS, Azure, and Google Cloud with tailored strategies for architecture optimization and innovation."
//     }
//   ];

//   return (
//     <div className={styles.servicesContainer}>
//       {services.reduce((rows, service, index) => {
//         const rowIndex = Math.floor(index / 3);
//         if (!rows[rowIndex]) rows[rowIndex] = [];
//         rows[rowIndex].push(service);
//         return rows;
//       }, []).map((row, i) => (
//         <div key={i} className={styles.servicesRow}>
//           {row.map((service, j) => (
//             <div key={j} className={styles.serviceItem}>
//               <img src={service.image} alt={service.title} />
//               <h4>{service.title}</h4>
//               <p>{service.description}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Servicestwo;


import React from "react";
import Web from "/src/assets/Web.jpg";
import Data from "/src/assets/Data.jpg";
import Digital from "/src/assets/Digital.jpg";
import AWS from "/src/assets/AWS.jpg";
import mobile from "/src/assets/mobile.avif";
import Cloud from "/src/assets/Cloud.jpg";
import styles from "./Servicestwo.module.css";

const services = [
  {
    img: Web,
    title: "Website Development",
    desc:
      "Neweage Cloud specializes in website development, creating tailored online platforms to meet businesses' unique needs. From design to functionality, we ensure user-friendly and impactful websites.",
  },
  {
    img: Data,
    title: "Data Analytics",
    desc:
      "Data analytics platforms facilitate informed decision-making and strategic growth by extracting valuable insights using visualization and predictive modeling.",
  },
  {
    img: Digital,
    title: "Digital Marketing",
    desc:
      "We enhance online visibility through strategies in social media, search engines, email, and content marketing to achieve remarkable marketing success.",
  },
  {
    img: AWS,
    title: "Amazon Web Services (AWS)",
    desc:
      "With AWS, businesses benefit from scalable and cost-effective cloud infrastructure. We help streamline operations and ensure digital competitiveness.",
  },
  {
    img: mobile,
    title: "Mobile App Development",
    desc:
      "From idea to deployment, we build cross-platform mobile apps to enhance user engagement and digital reach on both iOS and Android.",
  },
  {
    img: Cloud,
    title: "Cloud Services Integration",
    desc:
      "We integrate AWS, Azure, and Google Cloud into your systems with smooth data migration and architecture optimization.",
  },
  // You can add more items here if needed to fill a full 3x3 grid (9 total)
];

const Servicestwo = () => {
  return (
    <div className={styles.servicesContainer}>
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.gridContainer}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <img src={service.img} alt={service.title} />
            <h4>{service.title}</h4>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicestwo;
