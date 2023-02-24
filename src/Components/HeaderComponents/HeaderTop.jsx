import React from "react";
import Banner_main from "../../assets/Banner_main.png";
import Banner_pc from "../../assets/Banner_pc.png";
const HeaderTop = () => {
  return (
    <>
      <div className="Banner_top">
        <div className="Banner_get_payment">
          <h1>
            Get Your <br /> Payment Faster
          </h1>
          <p>
            Blinqpay helps businesses in Africa get paid by <br /> anyone,
            anywhere in the world
          </p>
          <button>Start Now</button>
        </div>
        <div className="Banner_main_img">
          <img src={Banner_pc} alt="" />
          {/* <img src={Banner_main} alt="" /> */}
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
