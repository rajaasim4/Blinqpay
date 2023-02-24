import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../../assets/Logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer_main">
        <div className="footer_sub_1 footer_sub">
          <img src={logo} alt="" />
          <div className="footer_icons_copyright">
            <div className="footer_social">
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
            </div>
            <p>
              &copy; Copyright {new Date().getFullYear()}. All rights are
              reserved
            </p>
          </div>
        </div>
        <div className="footer_sub_2 footer_sub">
          <span>Services</span>
          <ul>
            <li>
              <a href="/#">Design</a>
            </li>
            <li>
              <a href="/#">Coding</a>
            </li>
            <li>
              <a href="/#">Developnment</a>
            </li>
            <li>
              <a href="/#">Marketing</a>
            </li>
            <li>
              <a href="/#">Digital Marketing</a>
            </li>
            <li>
              <a href="/#">Product Design</a>
            </li>
          </ul>
        </div>
        <div className="footer_sub_3 footer_sub">
          <span>Products</span>
          <ul>
            <li>
              <a href="/#">Hotel Management</a>
            </li>
            <li>
              <a href="/#">Rent Management</a>
            </li>
            <li>
              <a href="/#">Micro Finance</a>
            </li>
            <li>
              <a href="/#">Industry</a>
            </li>
            <li>
              <a href="/#">Dhoko</a>
            </li>
          </ul>
        </div>
        <div className="footer_sub_4 footer_sub">
          <span>Company</span>
          <ul>
            <li>
              <a href="/#">Las Vegas</a>
            </li>
            <li>
              <a href="/#">New York</a>
            </li>
            <li>
              <a href="/#">Tokyo</a>
            </li>
            <li>
              <a href="/#">Paris</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
