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
      >
        {" "}
        <SwiperSlide>
          {" "}
          <CustomImage
            style={{
              minWidth: "100%",

              backgroundImage: `url("pics3.jpeg")`,
              backgroundSize: "100% 140%",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "darken",
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
                <Typography
                  gutterBottom
                  sx={{
                    fontSize: "60px",
                    fontStyle: "bold",
                    color: " #FFFFFF",
                    position: "relative",

                    top: "200px",
                    width: "915px",
                    height: "182px",
                    lineHeight: "91px",
                    textAlign: "left",

                    textShadow: " 0px 4px 10px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  Find Skilled Workers from anywhere with Elverr
                </Typography>
              </div>
            </StyledBox>
          </CustomImage>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CustomImage
            style={{
              minWidth: "100%",

              backgroundImage: `url("pics2.jpeg")`,
              backgroundSize: "100% 140%",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "darken",
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
                <Typography
                  gutterBottom
                  sx={{
                    fontSize: "60px",
                    fontStyle: "bold",
                    color: " #FFFFFF",
                    position: "relative",

                    top: "200px",
                    width: "915px",
                    height: "182px",
                    lineHeight: "91px",
                    textAlign: "left",

                    textShadow: " 0px 4px 10px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  Reach your business goals in record time
                </Typography>
              </div>
            </StyledBox>
          </CustomImage>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CustomImage
            style={{
              minWidth: "100%",

              backgroundImage: `url("pics1.jpeg")`,
              backgroundSize: "100% 140%",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "darken",
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
                <Typography
                  gutterBottom
                  sx={{
                    fontSize: "60px",
                    fontStyle: "bold",
                    color: " #FFFFFF",
                    position: "relative",

                    top: "200px",
                    width: "915px",
                    height: "182px",
                    lineHeight: "91px",
                    textAlign: "left",

                    textShadow: " 0px 4px 10px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  Get ahead of the competition with Elverr
                </Typography>
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "30px",
              position: "absolute",
              top: "550px",

              zIndex: 1,
            }}
          >
            <div
              style={{
                width: " 643px",
              }}
            >
              {" "}
              <StyledTextFieldSearch
                placeholder={"Search or type keywords.."}
              />
            </div>
            <GetStartedBtn size="small" variant="outlined">
              Get Statrted
            </GetStartedBtn>
          </div>
        </div>
      </StyledBox>
    </>
  );
}
