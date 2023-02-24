import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import t3 from "../../assets/t3.png";
import t4 from "../../assets/t4.png";
import t5 from "../../assets/t5.png";
import HeaderHeading from "../../Components/HeaderComponents/HeaderHeading";
import "./Testimonials.css";
const Testimonials = () => {
  return (
    <div className="Testimonials">
      <div className="Testimonials_main">
        <div className="Testimonial_left">
          <h3 style={{ color: "white" }}>
            What Our
            <span> Customers </span>
            <br />
            Are Saying
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem neque
            reiciendis iusto sed id ducimus?
          </p>
        </div>
        <div className="Testimonial_right">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            effect={"flip"}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {/* <SwiperSlide>
              <div className="Slider">
                <img src={t1} alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium, ab!
                </p>
                <h5>CEO</h5>
                <span>David Jones</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide> */}
            <SwiperSlide>
              <SliderComponent name={"David"} imgsrc={t1} />
            </SwiperSlide>
            <SwiperSlide>
              <SliderComponent name={"Aliias"} imgsrc={t2} />
            </SwiperSlide>
            <SwiperSlide>
              <SliderComponent name={"Kim"} imgsrc={t3} />
            </SwiperSlide>
            <SwiperSlide>
              <SliderComponent name={"EvanYou"} imgsrc={t4} />
            </SwiperSlide>
            <SwiperSlide>
              <SliderComponent name={"Anglenia"} imgsrc={t5} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="Try_now">
        <h2>
          What are you <span>Waiting For?</span>
        </h2>
        <button>Try Blinqpay</button>
      </div>
    </div>
  );
};
const SliderComponent = (props) => {
  return (
    <>
      <div className="Slider">
        <img src={props.imgsrc} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          ab!
        </p>
        <h5>CEO</h5>
        <span>{props.name}</span>
      </div>
    </>
  );
};

export default Testimonials;
