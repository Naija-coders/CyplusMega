import React, { useState, useContext, useEffect } from "react";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { RootState } from "../../state/reducers";
import { Avatar, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { LoginModal } from "../LoginModal/Loginmodal";
import { Divider } from "@mui/material";
import { useRouter } from "next/router";
import moment from "moment";
import CustomCardSwiper from "../CustomCard/CardSwiper";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";

import {
  StyledLink,
  StyledCard,
  StyledTypographyHeader,
  StyledPriceValue,
  TextTypography,
  StyledPrice,
  StyledButton,
  StyledTypography,
  StyledIconButton,
  StyledCustomTypography,
  StyledBox,
  CustomDivContainer,
  CustomContainer,
  LatestServicesDiv,
  StyledMobileCard,
} from "../TopCategories/styles";
type Props = {
  title: any;
  data?: any;
  quantity: number;
};
const ReuseableCategory: React.FC<Props> = ({ data, title, quantity }) => {
  const state = useSelector((state: RootState) => state.appstate);
  const { AuthState } = useContext<any>(StateContext);
  const { AuthDispatcher } = useContext<any>(DispatchContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch: Dispatch<any> = useDispatch();
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(true);
  const [active, setActive] = useState(false);

  const route = useRouter();
  const handleLogin = AuthState.user;
  const [buttoncolor, setButtoncolor] = useState<any>(false);
  const handleColor = () => {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  const [activeButton, setActiveButton] = useState([]);

  const handleOpen = () => {
    if (handleLogin === null || handleLogin === undefined) {
      setLoggedIn(false);
      setOpen(true);
    } else {
      setLoggedIn(true);
      handleColor();
      setOpen(false);
      setButtoncolor(true);
    }
  };

  useEffect(() => {
    if (state.mainservices === null || state.mainservices.length < 0) {
      setLoaded(true);
    } else if (state.mainservices.length > 0) {
      setLoaded(false);
    }
  });
  console.log("displaying mainservices", state.mainservices);
  const Rendermobile = () => {
    return (
      <div className="navbar__catwrappermobile">
        <div className="navbar__sizewidth">
          <Paper elevation={0} sx={{ height: "110%" }}>
            <StyledBox>
              <StyledCustomTypography
                sx={{
                  marginLeft: "20px",
                  fontFamily: "serif",
                  fontSize: "1.3rem",
                }}
              >
                {title}
              </StyledCustomTypography>
            </StyledBox>
            {loaded ? (
              <Skeleton
                count={1}
                height={"100px"}
                containerClassName="flexitems__mobilelatestservices"
                style={{
                  marginLeft: "15px",
                  borderRadius: "0.5rem",

                  justifyContent: "center",
                  marginTop: "10px",
                }}
                width={"350px"}
              />
            ) : (
              <div className="flexitems__mobilelatestservices">
                {data?.slice(0, 9)?.map(
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
                      image: any;
                      name: string;
                      services_id: number;
                      about: string;
                      price: number;
                      updated_at: string;
                    },
                    i: string | number | any
                  ) => (
                    <div
                      key={item.services_id}
                      style={{
                        position: "relative",
                        width: "100%",
                      }}
                    >
                      <StyledMobileCard>
                        <div
                          style={{
                            width: "100%",
                            height: "150px",
                            position: "relative",
                          }}
                        >
                          <CustomCardSwiper />
                          <div
                            style={{
                              position: "absolute",
                              bottom: "-10%",

                              zIndex: "200",
                              right: "3%",
                            }}
                          >
                            <IconButton sx={{ background: "white" }}>
                              <BookmarkBorderIcon sx={{ color: "green" }} />
                            </IconButton>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              marginTop: "10px",
                              height: "100%",
                              position: "relative",
                              justifyItems: "flex-end",
                            }}
                          >
                            <TextTypography
                              onClick={() => {
                                route.push("/services?ad=" + item?.services_id);
                              }}
                            >
                              {item?.type}
                            </TextTypography>
                            <StyledPriceValue align="right">
                              {item?.price}
                            </StyledPriceValue>
                          </div>
                        </div>
                      </StyledMobileCard>
                      <br></br>
                      <Divider />
                    </div>
                  )
                )}
                <LoginModal
                  OpenModalForm={open}
                  CloseModalForm={() => setOpen(false)}
                />{" "}
              </div>
            )}
          </Paper>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  };
  return (
    <>
      {Rendermobile()}
      <div className="navbar__mycontainer" style={{ position: "relative" }}>
        <CustomContainer>
          <CustomDivContainer>
            <Paper elevation={0} sx={{ height: "110%" }}>
              <StyledBox>
                <StyledCustomTypography
                  variant="h5"
                  style={{ fontFamily: "serif" }}
                >
                  {title}
                </StyledCustomTypography>
                <StyledCustomTypography
                  style={{
                    marginRight: "2%",
                    fontFamily: "serif",
                    fontSize: "15px",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    route.push("/");
                  }}
                >
                  See All
                </StyledCustomTypography>
              </StyledBox>
              {loaded ? (
                <Skeleton
                  count={6}
                  inline
                  height={300}
                  containerClassName="flexitems__latestservices"
                  style={{
                    marginLeft: "15px",
                    borderRadius: "0.5rem",

                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                  width={"270px"}
                />
              ) : (
                <LatestServicesDiv>
                  {data?.slice(0, quantity)?.map(
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
                        image: any;
                        name: string;
                        services_id: number;
                        about: string;
                        price: number;
                        updated_at: string;
                      },
                      i: string | number | any
                    ) => (
                      <div
                        key={item.services_id}
                        style={{
                          position: "relative",
                          marginTop: "10%",
                        }}
                      >
                        <StyledCard key={Math.random()} elevation={0}>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                              height: "380px",
                            }}
                          >
                            <div style={{ height: "200px", width: "100%" }}>
                              {" "}
                              <CustomCardSwiper />
                            </div>

                            <div
                              style={{
                                display: "flex",
                                paddingLeft: "0.7rem",
                                marginTop: "2px",
                              }}
                            >
                              <span>
                                <Avatar />
                              </span>

                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <span>
                                  <TextTypography>{item.name}</TextTypography>
                                </span>
                                <span>
                                  <TextTypography>
                                    {moment(item.updated_at).format("MMM Do ")}
                                  </TextTypography>
                                </span>
                                <span
                                  style={{
                                    width: "8",
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <StarIcon
                                    sx={{ fontSize: "13px", color: "#faaf00" }}
                                  />
                                  <p
                                    style={{
                                      fontSize: "13px",
                                      color: "#faaf00",
                                    }}
                                  >
                                    {" "}
                                    4.9(59)
                                  </p>
                                </span>
                              </div>
                            </div>

                            <div
                              style={{
                                marginLeft: "1rem",
                              }}
                            >
                              <StyledTypography>{item.type}</StyledTypography>
                            </div>
                            <div style={{ marginLeft: "1rem", width: "8" }}>
                              <a href={"/services?ad=" + item?.services_id}>
                                <StyledTypographyHeader>
                                  {item.about.slice(0, 40)}
                                </StyledTypographyHeader>
                              </a>
                            </div>
                            <div style={{ background: "#222325" }}>
                              <div
                                style={{
                                  display: "flex",

                                  justifyContent: "flex-end",
                                  alignSelf: "flex-end",
                                  justifyItems: "flex-end",
                                  width: "97%",

                                  alignItems: "flex-end",
                                  paddingLeft: "1px",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    width: "100%",

                                    alignSelf: "flex-end",

                                    justifyContent: "space-between",
                                    alignItems: "center",
                                  }}
                                >
                                  <StyledIconButton
                                    key={item.services_id}
                                    onClick={handleOpen}
                                  >
                                    <BookmarkBorderIcon
                                      style={{ color: "white" }}
                                    />
                                  </StyledIconButton>

                                  <StyledPriceValue>
                                    ${item.price}
                                  </StyledPriceValue>
                                </div>
                              </div>
                            </div>
                          </div>
                        </StyledCard>
                      </div>
                    )
                  )}
                  <LoginModal
                    OpenModalForm={open}
                    CloseModalForm={() => setOpen(false)}
                  />{" "}
                </LatestServicesDiv>
              )}

              <br></br>
            </Paper>
            <br></br>
          </CustomDivContainer>
        </CustomContainer>
      </div>
    </>
  );
};
export default ReuseableCategory;
