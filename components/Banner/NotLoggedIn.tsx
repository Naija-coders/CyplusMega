import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import {
  StyledCustomDivBanner,
  StyledImage,
  CustomImage,
  StyledDivBanner,
} from "./styles";
export default function NotLoggedIn() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          {" "}
          <CustomImage
            style={{
              minWidth: "100%",

              backgroundImage: `url("pics3.jpeg")`,
              backgroundSize: "100% 120%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            mano
          </CustomImage>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CustomImage
            style={{
              minWidth: "100%",

              backgroundImage: `url("pics2.jpeg")`,
              backgroundSize: "100% 120%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            mano
          </CustomImage>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CustomImage
            style={{
              minWidth: "100%",

              backgroundImage: `url("pics1.jpeg")`,
              backgroundSize: "100% 120%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            mano
          </CustomImage>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
