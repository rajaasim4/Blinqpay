import React, { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/Logo.png";
import useClickOutsideDetecor from "../../Hooks/useClickOutsideDetector";
import "./Navbar.css";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const hideNavbar = () => {
    setShow(false);
  };
  let menuref = useRef();
  useClickOutsideDetecor(menuref, () => {
    setShow(false);
  });

  return (
    <nav>
      <div className="Nav_logo">
        <img src={Logo} alt="" />
      </div>
      <div
        className={`${show ? "Main_nav Main_nav_show" : "Main_nav"}`}
        ref={menuref}
      >
        <ul>
          <li>
            <a href="/#" onClick={hideNavbar}>
              Products
            </a>
          </li>
          <li>
            <a href="/#" onClick={hideNavbar}>
              Developer
            </a>
          </li>
          <li>
            <a href="/#" onClick={hideNavbar}>
              Company
            </a>
          </li>
          <li>
            <a href="/#" onClick={hideNavbar}>
              Pricing
            </a>
          </li>
        </ul>
        <div className="Nav_btn">
          <a href="/#" onClick={hideNavbar}>
            Support
          </a>
          <button>Sign In</button>
        </div>
      </div>
      <div className="Hamburger">
        {show ? (
          <AiOutlineClose onClick={() => setShow(!show)} />
        ) : (
          <FaBars onClick={() => setShow(!show)} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
