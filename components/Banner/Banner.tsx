import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { StyledCustomDivBanner, StyledImage } from "./styles";

export default function Banner() {
  return (
    <>
      <div style={{ marginTop: "3%" }}></div>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="myCustomSwiper"
      >
        {/*  <SwiperSlide>
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
        </SwiperSlide> */}

        <SwiperSlide>
          {" "}
          <StyledCustomDivBanner>
            <StyledImage src="bannerservice2.png" />
          </StyledCustomDivBanner>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
