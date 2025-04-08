import React, { useState, useEffect } from 'react'
import homeright from '/src/assets/homeright.jpg'
import styles from './Hero.module.css'

const Hero = () => {
  const [backgroundImage, setBackgroundImage] = useState('../../../assets/Homeslider1.jpg');

  useEffect(() => {
    const images = [
      '../../../assets/Homeslider1.jpg',
      '../../../assets/Homeslider2.jpg',
      '../../../assets/Homeslider3.jpg',
    ];

    let currentImageIndex = 0;

    const changeBackgroundImage = () => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      setBackgroundImage(images[currentImageIndex]);
    };

    const intervalId = setInterval(changeBackgroundImage, 100000); // 
    

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className={styles.herosection} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.heroword}>
        <h2>Welcome to RP BUSINESS<br />SOLUTIONS LLP</h2>
        <h1>Personalized <span className={styles.care}>Care</span> & <span className={styles.transformative}>transformative</span> impact</h1>
        <h5>"Empowering Growth, Delivering<br />Solutions" </h5>
      </div>
      <div className={styles.heroimage22}>
        <img src={homeright} alt="img" />
      </div>
    </div>
  );
}

export default Hero;