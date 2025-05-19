// import React from 'react';
// import Our1 from '/src/assets/Our1.png';
// import Our2 from '/src/assets/Our2.png';
// import Our3 from '/src/assets/Our3.png';
// import Our4 from '/src/assets/Our4.png';
// import styles from './Ourfeature.module.css';

// const Ourfeature = () => {
//   return (
//     <div className={styles.ourMainSection}>
//       <div className={styles.headerSection}>
//         <h6>Our Best Feature</h6>
//         <h2>We Are Features Digital Solution</h2>
//       </div>
//       <div className={styles.featuresSection}>
//         <div className={styles.featureItem}>
//           <img src={Our1} alt="Technological Solutions" />
//           <h4>Technological<br />Solutions</h4>
//         </div>
//         <div className={styles.featureItem}>
//           <img src={Our2} alt="Operational Efficiency" />
//           <h4>Operational<br />Efficiency</h4>
//         </div>
//         <div className={styles.featureItem}>
//           <img src={Our3} alt="Financial Management" />
//           <h4>Financial<br />Management</h4>
//         </div>
//         <div className={styles.featureItem}>
//           <img src={Our4} alt="Business Resources" />
//           <h4>Business<br />Resources</h4>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ourfeature;


import React from 'react';
import Our1 from '/src/assets/Our1.png';
import Our2 from '/src/assets/Our2.png';
import Our3 from '/src/assets/Our3.png';
import Our4 from '/src/assets/Our4.png';
import styles from './Ourfeature.module.css';

const Ourfeature = () => {
  const features = [
    { img: Our1, title: 'Technological Solutions' },
    { img: Our2, title: 'Operational Efficiency' },
    { img: Our3, title: 'Financial Management' },
    { img: Our4, title: 'Business Resources' }
  ];

  return (
    <section className={styles.ourMainSection}>
      <div className={styles.headerSection}>
        <h6 className={styles.subtitle}>Our Best Feature</h6>
        <h2 className={styles.title}>We Are Featured Digital Solution</h2>
      </div>
      <div className={styles.featuresSection}>
        {features.map((feature, index) => (
          <div className={styles.featureItem} key={index}>
            <img src={feature.img} alt={feature.title} />
            <h4>{feature.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ourfeature;
