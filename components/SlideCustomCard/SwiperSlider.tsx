import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
type Props = {};

export default function SwiperSlider({}: Props) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={true}
      modules={[Autoplay, Pagination]}
    >
      <SwiperSlide>
        <img src="slide1.png" style={{ borderRadius: "10px" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="slide2.png" style={{ borderRadius: "10px" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="slide3.png" style={{ borderRadius: "10px" }} />
      </SwiperSlide>
    </Swiper>
  );
}
