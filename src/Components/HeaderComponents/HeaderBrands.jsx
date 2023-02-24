import React from "react";
import avengers from "../../assets/avengers.png";
import etsy from "../../assets/etsy.png";
import land_roverin from "../../assets/land_roverin.png";
import linkedin from "../../assets/linkedin.png";
import tiktok from "../../assets/tiktok.png";
const HeaderBrands = () => {
  return (
    <div className="HeaderBrands">
      <img src={land_roverin} alt="" />
      <img src={etsy} alt="" />
      <img src={avengers} alt="" />
      <img src={linkedin} alt="" />
      <img src={tiktok} alt="" />
    </div>
  );
};

export default HeaderBrands;
