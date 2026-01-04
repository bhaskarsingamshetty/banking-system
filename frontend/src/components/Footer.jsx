import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa"; // Simplified imports

const Footer = ({serviceRef}) => {
  const handileservice=()=>{
    serviceRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Bank Logo */}
        <div className="footer-logo">
          <h2>Trust One Bank</h2>
          <p>Secure & Trusted Banking</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li> {/* Assuming these routes exist or will */}
            <li><a onClick={handileservice}>Services</a></li> {/* Assuming these routes exist or will */}
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul className="footer-links">
            <li><a href="/contact">Contact</a></li> {/* Assuming these routes exist or will */}
            <li><a href="/faq">FAQ</a></li> {/* Assuming these routes exist or will */}
            <li><a href="/help">Help Center</a></li> {/* Assuming these routes exist or will */}
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="footer-social">
            {/* Added rel="noopener noreferrer" for security */}
            <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook className="sociallogo facebook"/></a></li>
            <li><a href="https://www.linkedin.com/in/bhaskar-singamshetty-45620433b/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin className="sociallogo teitter"/></a></li> {/* Corrected class name spelling if needed */}
            <li><a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className="sociallogo insta"/></a></li>
          </ul>
        </div>

        {/* Members */}
        <div className="footer-section">
          <h3>Members</h3>
          <ul className="footer-links">
            {/* Using spans as they are not links */}
            <li><span>S.Bhaskar</span></li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Trust One Bank. All rights reserved. | Privacy Policy | Terms & Conditions
      </div>
    </footer>
  );
};

export default Footer;