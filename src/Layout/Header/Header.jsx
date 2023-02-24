import React from "react";
import Banking from "../../assets/Banking.png";
import Savings from "../../assets/Savings.png";
import Tab from "../../assets/Tab.png";
import HeaderBrands from "../../Components/HeaderComponents/HeaderBrands";
import HeaderLast from "../../Components/HeaderComponents/HeaderLast";
import HeaderMid from "../../Components/HeaderComponents/HeaderMid";
import HeaderTop from "../../Components/HeaderComponents/HeaderTop";
import Navbar from "../../Components/Navbar/Navbar";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header>
        <Navbar />
        <div className="Main_Banner">
          <HeaderTop />
          <HeaderMid />
          <HeaderBrands />

          <div className="Banner_last_section">
            <HeaderLast imgsrc={Tab} direction={"row"}>
              <h3>
                Payments
                <br />
                <span>Get Easier </span>
              </h3>
            </HeaderLast>
            <HeaderLast imgsrc={Banking} direction={"row-reverse"}>
              <h3>
                Smart
                <br />
                <span>Mobile Banking</span>
              </h3>
            </HeaderLast>
            <HeaderLast imgsrc={Savings} direction={"row"}>
              <h3>
                Safe
                <br />
                <span>Your Savings </span>
              </h3>
            </HeaderLast>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
