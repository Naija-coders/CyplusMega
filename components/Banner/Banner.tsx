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

        <SwiperSlide>
          {" "}
          <div style={{ width: "100%", height: "100%" }}>
            <img
              src="bannerservice2.png"
              style={{
                width: "100%",
                height: "100%",
                objectPosition: "center -4px",
                objectFit: "cover",
              }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
