import React, { useState, useContext, useEffect } from "react";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

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
import Checkbox from "@mui/material/Checkbox";
import Favorite from "@mui/icons-material/Favorite";

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

  const label = { inputProps: { "aria-label": "Favorite Icon" } };

  return (
    <>
      <div className="navbar__rand" style={{ position: "relative" }}>
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
                <LatestServicesDiv>
                  <Stack spacing={1}>
                    <Skeleton
                      variant="rectangular"
                      width={"270px"}
                      height={118}
                    />
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="text" width={"270px"} />
                    <Skeleton
                      variant="rectangular"
                      width={"270px"}
                      height={118}
                    />
                  </Stack>
                  <Stack spacing={1}>
                    <Skeleton
                      variant="rectangular"
                      width={"270px"}
                      height={118}
                    />
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="text" width={"270px"} />
                    <Skeleton
                      variant="rectangular"
                      width={"270px"}
                      height={118}
                    />
                  </Stack>
                  <Stack spacing={1}>
                    <Skeleton
                      variant="rectangular"
                      width={"270px"}
                      height={118}
                    />
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="text" width={"270px"} />
                    <Skeleton
                      variant="rectangular"
                      width={"270px"}
                      height={118}
                    />
                  </Stack>

                  <Stack spacing={1}>
                    <Skeleton
                      variant="rectangular"
                      width={"270px"}
                      height={118}
                    />
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="text" width={"270px"} />
                    <Skeleton
                      variant="rectangular"
                      width={"270px"}
                      height={118}
                    />
                  </Stack>
                </LatestServicesDiv>
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
                              height: "410px",
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
                                  <TextTypography
                                    sx={{
                                      fontWeight: "bold",
                                      userSelect: "none",
                                    }}
                                  >
                                    {item.name}
                                  </TextTypography>
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
                            <Divider />
                            <div>
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
                                  <Checkbox
                                    sx={{ color: "#969799" }}
                                    {...label}
                                    icon={<Favorite />}
                                    checkedIcon={
                                      <Favorite sx={{ color: "#ba1e33" }} />
                                    }
                                  />

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
