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
  StyledTextFieldSearch,
  GetStartedBtn,
  CustomTypography,
  Div1,
  Div2,
} from "./styles";
import { StyledBox } from "../NotLoggedIn/style";
import { Typography, Button } from "@mui/material";
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
        style={{
          background:
            "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(0, 0, 0, 0.5) 54.51%),linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(0, 0, 0, 0.5) 54.51%)",
        }}
      >
        {" "}
        <SwiperSlide>
          {" "}
          <CustomImage
            style={{
              minWidth: "100%",

              backgroundImage: `linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(0, 0, 0, 0.5) 54.51%),url("pics3.jpeg")`,
              backgroundSize: "100% 140%",
              backgroundRepeat: "no-repeat",

              backgroundPosition: "center",
            }}
          >
            <StyledBox>
              <div
                style={{
                  justifyContent: "space-around",
                  maxWidth: "1500px",
                  width: "100%",
                }}
              >
                <CustomTypography gutterBottom>
                  Find Skilled Workers from anywhere with Elverr
                </CustomTypography>
              </div>
            </StyledBox>
          </CustomImage>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CustomImage
            style={{
              minWidth: "100%",

              backgroundImage: `linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(0, 0, 0, 0.5) 54.51%),url("pics2.jpeg")`,
              backgroundSize: "100% 140%",
              backgroundRepeat: "no-repeat",

              backgroundPosition: "center",
            }}
          >
            <StyledBox>
              <div
                style={{
                  justifyContent: "space-around",
                  maxWidth: "1500px",
                  width: "100%",
                }}
              >
                <CustomTypography gutterBottom>
                  Reach your business goals in record time
                </CustomTypography>
              </div>
            </StyledBox>
          </CustomImage>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CustomImage
            style={{
              minWidth: "100%",

              backgroundImage: `linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(0, 0, 0, 0.5) 54.51%),url("pics1.jpeg")`,
              backgroundSize: "100% 140%",
              backgroundRepeat: "no-repeat",

              backgroundPosition: "center",
            }}
          >
            <StyledBox>
              <div
                style={{
                  justifyContent: "space-around",
                  maxWidth: "1500px",
                  width: "100%",
                }}
              >
                <CustomTypography gutterBottom>
                  Get ahead of the competition with Elverr
                </CustomTypography>
              </div>
            </StyledBox>
          </CustomImage>
        </SwiperSlide>
      </Swiper>
      <StyledBox>
        <div
          style={{
            justifyContent: "space-around",
            maxWidth: "1500px",
            width: "100%",
          }}
        >
          <Div1>
            <Div2>
              {" "}
              <StyledTextFieldSearch
                placeholder={"Search or type keywords.."}
              />
            </Div2>
            <GetStartedBtn size="small" variant="outlined">
              Get Statrted
            </GetStartedBtn>
          </Div1>
        </div>
      </StyledBox>
    </>
  );
}
