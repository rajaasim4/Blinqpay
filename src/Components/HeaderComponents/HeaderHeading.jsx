import React from "react";

const HeaderHeading = (props) => {
  return (
    <>
      <div className="Banner_Main_heading">
        {props.children}
        <p>
          Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem
          adipiscing inw
        </p>
        <a href="/#">Learn More &rarr;</a>
      </div>
    </>
  );
};

export default HeaderHeading;
