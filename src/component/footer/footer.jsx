import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        Divyanshu Tripathi
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.facebook.com/divyanshu.tripathi.37625/"
          target="blank"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/divyanshu____tripathi/"
          target="blank"
        >
          <FaInstagram />
        </a>
        <a href="https://twitter.com/Divyans88357769" target="blank">
          <FaTwitter />
        </a>
        <a
          href="https://www.youtube.com/channel/UCDDMmTsoW6OTKUxjg84DE9Q"
          target="blank"
        >
          <BsYoutube />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Divyanshu Tripathi, All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
