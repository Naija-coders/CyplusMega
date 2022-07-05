import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function Banner() {
  return (
    <>
      <div style={{ marginTop: "3%" }}></div>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
        style={{ height: "650px" }}
      >
        <SwiperSlide>
          <div style={{ width: "100%", height: "100%" }}>
            <img
              src="servicesbanner.png"
              style={{
                width: "100%",
                height: "100%",
                objectPosition: "center -4px",
                objectFit: "cover",
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
