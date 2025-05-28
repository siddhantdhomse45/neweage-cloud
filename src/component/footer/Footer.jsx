import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaChevronRight
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            {/* Company Info */}
            <div className={styles.footerColumn}>
              <div className={styles.companyInfo}>
                <Link to="/" className={styles.logoLink}>
                  <img
                    src="https://neweageclouds.com/NeweageLogo.png"
                    alt="Neweage Cloud Solutions Logo"
                    className={styles.logo}
                    width="60"
                    height="60"
                  />
                  <span className={styles.companyName}>
                    {/* Neweage Cloud Software Service Pvt Ltd. */}
                  </span>
                </Link>
                <p className={styles.companyDescription}>
                  Empowering businesses with innovative cloud solutions and digital transformation services.
                </p>
                <div className={styles.socialLinks}>
                  <a 
                    href="https://www.linkedin.com/company/neweage-cloud-solutions" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Follow us on LinkedIn"
                    className={styles.socialLink}
                  >
                    <FaLinkedin />
                  </a>
                  <a 
                    href="https://twitter.com/neweagecloud" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Follow us on Twitter"
                    className={styles.socialLink}
                  >
                    <FaTwitter />
                  </a>
                  <a 
                    href="https://www.facebook.com/neweagecloud" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Follow us on Facebook"
                    className={styles.socialLink}
                  >
                    <FaFacebook />
                  </a>
                  <a 
                    href="https://www.instagram.com/neweagecloud" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                    className={styles.socialLink}
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="https://www.youtube.com/neweagecloud" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Follow us on YouTube"
                    className={styles.socialLink}
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Quick Links</h3>
              <ul className={styles.footerLinks}>
                <li className={styles.footerLinkItem}>
                  <FaChevronRight className={styles.linkIcon} />
                  <Link to="/aboutus" className={styles.footerLink}>About Us</Link>
                </li>
                <li className={styles.footerLinkItem}>
                  <FaChevronRight className={styles.linkIcon} />
                  <Link to="/services" className={styles.footerLink}>Services</Link>
                </li>
                <li className={styles.footerLinkItem}>
                  <FaChevronRight className={styles.linkIcon} />
                  <Link to="/solutions" className={styles.footerLink}>Solutions</Link>
                </li>
                <li className={styles.footerLinkItem}>
                  <FaChevronRight className={styles.linkIcon} />
                  <Link to="/case-studies" className={styles.footerLink}>Case Studies</Link>
                </li>
                <li className={styles.footerLinkItem}>
                  <FaChevronRight className={styles.linkIcon} />
                  <Link to="/career" className={styles.footerLink}>Careers</Link>
                </li>
                <li className={styles.footerLinkItem}>
                  <FaChevronRight className={styles.linkIcon} />
                  <Link to="/blog" className={styles.footerLink}>Blog</Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Our Services</h3>
              <ul className={styles.footerLinks}>
                <li className={styles.footerLinkItem}>
                  <FaChevronRight className={styles.linkIcon} />
                  <Link to="/services/cloud-computing" className={styles.footerLink}>Cloud Computing</Link>
                </li>
                <li className={styles.footerLinkItem}>
                  <FaChevronRight className={styles.linkIcon} />
                  <Link to="/services/devops" className={styles.footerLink}>DevOps Solutions</Link>
                </li>
                <li className={styles.footerLinkItem}>
                  <FaChevronRight className={styles.linkIcon} />
                  <Link to="/services/ai-ml" className={styles.footerLink}>AI/ML Services</Link>
                </li>
                <li className={styles.footerLinkItem}>
                  <FaChevronRight className={styles.linkIcon} />
                  <Link to="/services/web-development" className={styles.footerLink}>Web Development</Link>
                </li>
                <li className={styles.footerLinkItem}>
                  <FaChevronRight className={styles.linkIcon} />
                  <Link to="/services/mobile-apps" className={styles.footerLink}>Mobile Applications</Link>
                </li>
                <li className={styles.footerLinkItem}>
                  <FaChevronRight className={styles.linkIcon} />
                  <Link to="/services/consulting" className={styles.footerLink}>IT Consulting</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Contact Us</h3>
              <ul className={styles.contactInfo}>
                <li className={styles.contactItem}>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                  <address className={styles.contactText}>
                    Office No. 4-C, Second Floor,<br />
                    Ganesham Commercial - A, Survey No. 21/18-21/24,<br />
                    BRTS Road, Pimple Saudagar, Pune - 411027
                  </address>
                </li>
                <li className={styles.contactItem}>
                  <FaPhoneAlt className={styles.contactIcon} />
                  <div>
                    <a href="tel:+919112100662" className={styles.contactLink}>
                      +91-9112100662
                    </a>
                    <br />
                    <a href="tel:+918080425555" className={styles.contactLink}>
                      +91-8080425555
                    </a>
                  </div>
                </li>
                <li className={styles.contactItem}>
                  <FaEnvelope className={styles.contactIcon} />
                  <div>
                    <a href="mailto:hr@neweageclouds.com" className={styles.contactLink}>
                      hr@neweageclouds.com
                    </a>
                    <br />
                    <a href="mailto:sales@neweageclouds.com" className={styles.contactLink}>
                      sales@neweageclouds.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <div className={styles.footerBottomContent}>
            <p className={styles.copyright}>
              &copy; {currentYear} Neweage Cloud Solutions LLP. All Rights Reserved.
            </p>
            <div className={styles.legalLinks}>
              <Link to="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
              <span className={styles.legalSeparator}>|</span>
              <Link to="/terms-of-service" className={styles.legalLink}>Terms of Service</Link>
              <span className={styles.legalSeparator}>|</span>
              <Link to="/cookie-policy" className={styles.legalLink}>Cookie Policy</Link>
              <span className={styles.legalSeparator}>|</span>
              <Link to="/sitemap" className={styles.legalLink}>Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;