import React, { useState } from "react";
import RPSolution from "/src/assets/RPSolution.png";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbarmain}>
      <div className={styles.logo}>
      <Link to="/"><img src={RPSolution} alt="logo" /></Link>
      </div>
      <button className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </button>
      <div className={`${styles.menu} ${isMenuOpen ? styles.showMenu : ""}`}>
        <ul className={styles.navLinks}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/solutions">Solutions</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/career">Career</Link></li>
          <li><Link to="/health">US Health Care</Link></li>
          <li><Link to="/admin">Admin Login</Link></li>
          <li className={styles.button}><Link to="/contact">Contact Now</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
