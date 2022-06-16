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
import { LoginModal } from "../LoginModal/Loginmodal";
import { Divider } from "@mui/material";
import { useRouter } from "next/router";
import moment from "moment";
import CustomCardSwiper from "../CustomCard/CardSwiper";

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
} from "../TopCategories/styles";
type Props = {
  title: any;
  data?: any;
};
const ReuseableCategory: React.FC<Props> = ({ data, title }) => {
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
                      }}
                    >
                      <div
                        key={Math.random()}
                        onClick={() => {
                          route.push("/services?ad=" + item?.services_id);
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            borderRadius: "10px",

                            marginLeft: "11px",
                            justifyContent: "left",
                            gap: "10px",
                          }}
                        >
                          <img
                            src={item.image}
                            style={{
                              height: "70px",
                              width: "100px",
                              borderRadius: "13px",

                              objectFit: "cover",
                            }}
                          ></img>
                          <div>
                            <StyledTypographyHeader>
                              {" "}
                              {item.about}
                            </StyledTypographyHeader>
                            <StyledPriceValue>${item.price}</StyledPriceValue>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            borderRadius: "10px",

                            marginLeft: "11px",
                            justifyContent: "left",
                            gap: "3px",
                            marginTop: "6px",
                          }}
                        >
                          <Avatar
                            sx={{ height: "16px", width: "16px" }}
                          ></Avatar>
                          <TextTypography>{item.name}</TextTypography>
                        </div>
                      </div>
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
      <div className="navbar__mycontainer" style={{ marginTop: "-40px" }}>
        <CustomContainer>
          <CustomDivContainer>
            <Paper elevation={0} sx={{ height: "110%", background: "#f6f9f5" }}>
              <StyledBox>
                <StyledCustomTypography
                  variant="h5"
                  style={{ marginLeft: "2%", fontFamily: "serif" }}
                >
                  {title}
                </StyledCustomTypography>
                <StyledCustomTypography
                  style={{
                    marginRight: "2%",
                    fontFamily: "serif",
                    fontSize: "15px",
                    textDecoration: "underline",
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
                  {data?.slice(0, 20)?.map(
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
                          marginLeft: "1%",
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
                              style={{ display: "flex", padding: "0.7rem" }}
                              onClick={() => {
                                route.push("/services?ad=" + item?.services_id);
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
                              </div>
                            </div>
                            <div style={{ marginLeft: "1rem" }}>
                              <StyledTypography>{item.type}</StyledTypography>
                            </div>
                            <div style={{ marginLeft: "1rem", width: "92%" }}>
                              <StyledTypographyHeader>
                                {item.about.slice(0, 40)}
                              </StyledTypographyHeader>
                            </div>
                            <div
                              style={{
                                height: "50px",
                                background: "#222325",

                                width: "114%",

                                display: "flex",
                                marginTop: "5%",
                                justifyContent: "flex-end",
                                alignSelf: "flex-end",
                                justifyItems: "flex-end",

                                alignItems: "flex-end",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  width: "100%",

                                  alignSelf: "flex-end",
                                  marginLeft: "10px",

                                  justifyContent: "space-evenly",
                                  alignItems: "center",
                                }}
                              >
                                <StyledIconButton
                                  key={item.services_id}
                                  onClick={handleOpen}
                                >
                                  <FavoriteBorderIcon
                                    style={{ color: "white" }}
                                  />
                                </StyledIconButton>

                                <StyledPrice> STARTING AT</StyledPrice>
                                <StyledPriceValue>
                                  ${item.price}
                                </StyledPriceValue>
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