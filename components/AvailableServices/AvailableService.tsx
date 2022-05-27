import React, { useState, useContext, useEffect } from "react";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import Paper from "@mui/material/Paper";
import { Typography, List, Link, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import Clientapi from "../../pages/api/client";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import Card from "@mui/material/Card";
import { RootState } from "../../state/reducers";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination, Autoplay, Navigation } from "swiper";

import {
  StyledLink,
  StyledCard,
  StyledCustomTypography,
  StyledBox,
} from "./styles";

type Props = {
  services: any;
};

const serviceimages = [
  "IT services.jpeg",
  "Cleaning services.jpeg",
  "event services.jpeg",
  "entertainment services.jpeg",
  "kidandtoy.jpeg",
  "automotive services.jpeg",
  "building & trade services.jpeg",
  "legal services.jpeg",
  "health & beauty services.jpeg",
  "landscaping & gardening services.jpeg",
  "logistics services.jpeg",
  "printing services.jpeg",
  "photography & video services.jpeg",
  "wedding events services.jpeg",
  "repair services.jpeg",
  "fitness services.jpeg",
  "Pet services...jpeg",
  "travel agent & tour services.jpeg",
  "classes & courses services.jpeg",
  "manufacturing services.jpeg",
  "chauffeur & airport services.jpeg",
];

const AvailableService = (props: Props) => {
  const [checkhover, setCheckhover] = useState(false);
  const [current, setCurrent] = useState(0);
  const length = props.services.length;
  const route = useRouter();
  const { AuthState } = useContext<any>(StateContext);
  const { AuthDispatcher } = useContext<any>(DispatchContext);
  const dispatch: Dispatch<any> = useDispatch();
  const state = useSelector((state: RootState) => state.appstate);
  const [loaded, setLoaded] = useState(true);

  function nextSlide() {
    setCurrent(current === length - 10 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  const handleMousehover = (
    event: React.MouseEventHandler<HTMLDivElement> | undefined
  ) => {
    setCheckhover(true);
  };
  const handleMouseClose = (
    event: React.MouseEventHandler<HTMLDivElement> | undefined
  ) => {
    setCheckhover(false);
  };
  useEffect(() => {
    if (state.categories === null || state.categories.length < 0) {
      setLoaded(true);
    } else if (state.categories.length > 0) {
      setLoaded(false);
    }
  });

  return (
    <div className="navbar__mycontainer">
      <div className="navbar__catwrapper">
        <div style={{ width: "80%" }}>
          <Paper elevation={2}>
            <StyledBox>
              <StyledCustomTypography
                variant="h5"
                style={{ marginLeft: "2%", fontFamily: "serif" }}
              >
                Service categories
              </StyledCustomTypography>
            </StyledBox>
            {loaded ? (
              <Skeleton
                count={6}
                inline
                height={120}
                containerClassName="flexitems__avalableservice"
                style={{
                  marginLeft: "2px",
                }}
                width={"270px"}
              />
            ) : (
              <Swiper
                slidesPerView={5}
                spaceBetween={0}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
              >
                {state.categories?.map(
                  (
                    item: {
                      type:
                        | boolean
                        | React.ReactChild
                        | React.ReactFragment
                        | React.ReactPortal
                        | null
                        | undefined;
                      categories_id: number;
                    },
                    i: string | number | any
                  ) => (
                    <SwiperSlide
                      key={Math.random()}
                      style={{ marginLeft: "1%", position: "relative" }}
                    >
                      <StyledCard elevation={0}>
                        <StyledLink /* href={"/categories?list=" + item?.categories_id} */
                          sx={{ textDecoration: "none", color: "#000" }}
                          onClick={() => {
                            route.push(
                              "/categories?services=" + item?.categories_id
                            );
                          }}
                        >
                          {" "}
                          <img
                            src={serviceimages[i]}
                            style={{
                              width: "250px",
                              borderRadius: "13px",
                              height: "200px",
                              cursor: "pointer",
                              objectFit: "cover",
                            }}
                          />
                          <Typography
                            style={{ fontFamily: "serif", fontSize: "0.9rem" }}
                          >
                            {item.type}
                          </Typography>
                        </StyledLink>
                      </StyledCard>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            )}
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default AvailableService;
