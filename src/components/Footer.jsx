import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="section">
            <h3>Quick Links</h3>
            <ul>
                <li> About </li>
                <li> Services </li>
                <li> Privacy Policy </li>
                <li> Terms of Service </li>
            </ul>
      </div>

      <div className="section">
        <h3>Contact Us</h3>
        <p>Email: contact@apnichhat.com</p>
        <p>Phone: +91 7875039821</p>
      </div>

      <div className="section">
        <h3>Follow Us</h3>
        <div className="icons">
            <ul>
                <li> <img src="src/assets/fb.jpeg" alt="Facebook"/> </li>
                <li> <img src="src/assets/in.webp" alt="Instagram"/> </li>
                <li> <img src="src/assets/lk.png" alt="Linkedin"/> </li>
            </ul>
        </div>
      </div>

      <div className="bottom">
        <p>© 2025 Apni Chhat. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
