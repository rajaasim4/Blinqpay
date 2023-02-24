import React from "react";
import "./HeaderCard.css";
const HeaderCard = (props) => {
  return (
    <div className="HeaderCard">
      <img src={props.imgsrc} alt="" />
      <h3>{props.title}</h3>
      <p>Now track all of your transaction easily.</p>
    </div>
  );
};

export default HeaderCard;
