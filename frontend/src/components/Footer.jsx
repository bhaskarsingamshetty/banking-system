import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
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
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul className="footer-links">
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/help">Help Center</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="footer-social">
            <li><a href="#"><FaFacebook className="sociallogo facebook"/></a></li>
            <li><a href="https://www.linkedin.com/in/bhaskar-singamshetty-45620433b/?originalSubdomain=in"target="_blank"><FaLinkedin 
            className="sociallogo teitter"/></a></li>
            <li><a href="#"><FaInstagram className="sociallogo insta"/></a></li>
          </ul>
        </div>

        {/* Members */}
        <div className="footer-section">
          <h3>Members</h3>
          <ul className="footer-links">
            <li><a href="#">S.Bhaskar</a></li>
            <li><a href="#">M.Ajay</a></li>
            <li><a href="#">Nishath</a></li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        © 2025 Trust One Bank. All rights reserved. | Privacy Policy | Terms & Conditions
      </div>
    </footer>
  );
};

export default Footer;
