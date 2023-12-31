import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span><a href="/mentionslegales" style={{ color: 'inherit', textDecoration: 'none' }}>Mentions légales</a>   -   <a href="/cgu" style={{ color: 'inherit', textDecoration: 'none' }}>CGU</a>   -   <a href="/politiquedeconfidentialite" style={{ color: 'inherit', textDecoration: 'none' }}>Politique de confidentialité</a></span>
        </div>
        <div className="footer-section-columns">
        </div>
        <div className="footer-section-columns">
        </div>
        <div className="footer-section-columns">
          <span>teuropemed@t3hwe.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;