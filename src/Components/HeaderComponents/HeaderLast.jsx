import React from "react";
import HeaderHeading from "./HeaderHeading";
const HeaderLast = (props) => {
  return (
    <div className="Header_last" style={{ flexDirection: props.direction }}>
      <HeaderHeading>{props.children}</HeaderHeading>

      <div className="Header_last_right">
        <img src={props.imgsrc} alt="" />
      </div>
    </div>
  );
};
// HeaderLast.defaultProps = {
//   flexDirection: "row-reverse",
// };

export default HeaderLast;
