// import React, { useState, useEffect } from 'react'
// import homeright from '/src/assets/homeright.jpg'
// import styles from './Hero.module.css'

// const Hero = () => {
//   const [backgroundImage, setBackgroundImage] = useState('../../../assets/aidevelopment.png');

//   useEffect(() => {
//     const images = [
//       '../../../assets/newedgeSlider.jpg',
//       '../../../assets/Webdevelopment.jpg',
//       '../../../assets/aboutus.png',
//     ];

//     let currentImageIndex = 0;

//     const changeBackgroundImage = () => {
//       currentImageIndex = (currentImageIndex + 1) % images.length;
//       setBackgroundImage(images[currentImageIndex]);
//     };

//     const intervalId = setInterval(changeBackgroundImage, 100000); // 
    

//     return () => clearInterval(intervalId); 
//   }, []);

//   return (
//     <div className={styles.herosection} style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className={styles.heroword}>
//         <h2>Welcome to NEWEAGE CLOUD<br />SOFTWARE SERVICES PRIVATE LIMITED</h2>
//         <h1>Personalized <span className={styles.care}>Care</span> & <span className={styles.transformative}>transformative</span> impact</h1>
//         <h5>"Empowering Growth, Delivering<br />Solutions" </h5>
//       </div>
//       <div className={styles.heroimage22}>
//         <img src={homeright} alt="img" />
//       </div>
//     </div>
//   );
// }

// export default Hero;


import React, { useState, useEffect } from 'react';
import homeright from '/src/assets/homeright.jpg';
import styles from './Hero.module.css';

const Hero = () => {
  const images = [
    '../../../assets/newedgeSlider.jpg',
    '../../../assets/Webdevelopment.jpg',
    '../../../assets/aboutus.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div
      className={styles.herosection}
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      {/* Left Arrow */}
      <button className={styles.arrowLeft} onClick={goToPreviousImage}>
        &#10094;
      </button>

      {/* Hero Content */}
      <div className={styles.heroword}>
        <h2>
          Welcome to NEWEAGE CLOUD
          <br />
          SOFTWARE SERVICES PRIVATE LIMITED
        </h2>
        <h1>
          Personalized <span className={styles.care}>Care</span> &{' '}
          <span className={styles.transformative}>transformative</span> impact
        </h1>
        <h5>"Empowering Growth, Delivering<br />Solutions" </h5>
      </div>

      {/* Image on the right */}
      <div className={styles.heroimage22}>
        <img src={homeright} alt="img" />
      </div>

      {/* Right Arrow */}
      <button className={styles.arrowRight} onClick={goToNextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default Hero;
