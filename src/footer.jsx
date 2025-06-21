// src/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <h3>Rubens Marcolino</h3>
          <p>
          Software engineering student with a technical background in mechanics and a passion for creative, purposeful development. I design and build clean, user-focused web experiences.
          </p>
          <div className="newsletter">
            <h4>Our Newsletter</h4>
            <input type="text" placeholder="Email Address" />
          </div>
        </div>
        <div className="footer-center">
          <h3 className="useful-links">Useful Links</h3>
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/uses">Uses</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>Contact Info</h3>
          <p>Phone: +1 (385) 233-164</p>
          <p>Email: rubensmc4@gmail.com</p>
          <p>Address: Highland, UT</p>
          <div className="social-icons">
          <a href="https://facebook.com"><img src={`${process.env.PUBLIC_URL}/images/fb_end.png`} alt="Facebook" /></a>
          <a href="https://linkedin.com"><img src={`${process.env.PUBLIC_URL}/images/in_end.png`} alt="LinkedIn" /></a>
          <a href="https://x.com"><img src={`${process.env.PUBLIC_URL}/images/tw_end.png`} alt="Twitter" /></a>
          <a href="https://youtube.com"><img src={`${process.env.PUBLIC_URL}/images/yt_end.png`} alt="YouTube" /></a>
          </div>
        </div>
      </div>
      <section className="footer-bottom">
        <p>© 2025 Designed by Rubens Marcolino.</p>
        <div className="payment-icons">
    <img src={`${process.env.PUBLIC_URL}/images/visa.svg`} alt="Visa" />
    <img src={`${process.env.PUBLIC_URL}/images/mastercard.svg`} alt="Mastercard" />
    <img src={`${process.env.PUBLIC_URL}/images/paypal.svg`} alt="PayPal" />
    <img src={`${process.env.PUBLIC_URL}/images/skrill.svg`} alt="Skrill" />
    <img src={`${process.env.PUBLIC_URL}/images/payoneer.svg`} alt="Payoneer" />
    <img src={`${process.env.PUBLIC_URL}/images/gpay.svg`} alt="Google Pay" />
        </div>
        <p><a href="/terms-and-conditions">Terms & Conditions</a> | <a href="https://www.ensign.com">Privacy Policy</a></p>
      </section>
    </footer>
  );
};

export default Footer;
