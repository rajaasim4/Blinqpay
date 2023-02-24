import React from "react";
import Access from "../../assets/Access.svg";
import Cashflow from "../../assets/Cashflow.svg";
import Connect from "../../assets/Connect.svg";
import Invoice from "../../assets/Invoice.svg";
import HeaderCard from "../../Layout/Header/HeaderCard";
import HeaderHeading from "./HeaderHeading";
const HeaderMid = () => {
  return (
    <div className="Banner_mid">
      <div className="Banner_mid_left">
        <HeaderCard imgsrc={Access} title="Easy Access" />
        <HeaderCard imgsrc={Cashflow} title="Cashflow Visibilty" />
        <HeaderCard imgsrc={Invoice} title="Manage Invocing" />
        <HeaderCard imgsrc={Connect} title="Use Your Connect" />
      </div>

      <HeaderHeading>
        <h3>
          Make and Share <br />
          <span> Payments </span>
          with
          <br /> Community
        </h3>
      </HeaderHeading>
    </div>
  );
};

export default HeaderMid;
