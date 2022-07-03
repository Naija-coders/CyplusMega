import React from "react";
import Tab from "@mui/material/Tab";
import { Dispatch } from "redux";

import { actionCreators } from "../../state";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { StyledTabs, StyledTab, StyledPaper, CatWrapper } from "./styles";
import Clientapi from "../../pages/api/client";
import { useRouter } from "next/router";
import { RootState } from "../../state/reducers";
import SwiperThumb from "./Swiper";
import Image from "next/image";
import Link from "next/link";
import CustomCard from "../CustomCard";
import BasicTabs from "./TabBarPanel";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import {
  StyledDiv,
  DivVal,
  NormalDiv,
  StyledWrapper,
  MainSub,
  NormalTypography,
  StyledImageDiv,
  StyledSubWrapper,
  StyledAvatar,
  StyledMainHeaderText,
  RandomFlex,
  StyledMainText,
  StyledContact,
  StyledButton,
  CustomDivider,
  ContainerWrapper,
  RenderMobileDiv,
  StyledContactMobile,
  ContainerDiv,
  HeaderPageTypo,
  PaperDiv,
  NormalContainer,
} from "./styles";
import Typography from "@mui/material/Typography";
import CustomLoader from "../CustomLoader";

interface LinkTabProps {
  label?: string;
  href?: string;
  value?: any;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {}}
      sx={{
        "textTransform": "none",

        "marginRight": "20px",
        "color": "grey",
        "&.Mui-selected": {
          color: "#152238",
        },
        "&.Mui-focusVisible": {
          backgroundColor: "rgba(100, 95, 228, 0.32)",
        },
      }}
      {...props}
    />
  );
}
export default function Service() {
  const [value, setValue] = React.useState("Overview");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const route = useRouter();
  const query = route.query;
  const handle = query["ad"];

  const services_id = handle;
  const data = { services_id: 2 };
  const { AuthState } = React.useContext<any>(StateContext);
  const { AuthDispatcher } = React.useContext<any>(DispatchContext);
  const dispatch: Dispatch<any> = useDispatch();
  const state = useSelector((state: RootState) => state.appstate);
  const [favorite, setFavorite] = React.useState(false);
  const [types, setTypes] = React.useState<any>();
  const [offers, setOffers] = React.useState<any>();
  const [similar, setSimilar] = React.useState<any>([]);
  const [loaded, setLoaded] = React.useState(false);

  let offer = [];
  let recommended = [];

  const handleFavorite = () => {
    setFavorite(!favorite);
  };
  const { getmainservices, recommendedServices, setViewed } =
    bindActionCreators(actionCreators, dispatch);
  function getServices() {
    Clientapi.get(`/api/company/services`).then((response) => {
      offer = response.data.filter(
        (items: any) => items?.services_id == handle
      );
      setOffers(offer);
      getmainservices(offer);
    });
  }
  React.useEffect(() => {
    getServices();
  }, []);
  React.useEffect(() => {
    if (similar.length <= 0) {
      handleData();
    }

    recommendedServices(similar);
  }, [similar]);
  console.log("similar", similar);
  const handleData = () => {
    offers?.map((item: any) => {
      setTypes(item.type);
      setViewed(item.type);
    });
    Clientapi.get("/api/company/categories").then((response) => {
      recommended = response.data.filter((items: any) => items?.type == types);
      setSimilar(recommended);
    });
  };

  React.useEffect(() => {
    if (offers === null || offers?.length < 0) {
      setLoaded(false);
    } else if (state.mainservices.length > 0) {
      setLoaded(true);
    }
  });
  return (
    <div>
      {loaded ? (
        <ContainerWrapper>
          {offers?.map((item: any) => (
            <div
              style={{
                width: "100%",

                marginTop: "2%",
              }}
              key={Math.random()}
            >
              <CatWrapper sx={{ background: "white" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <NormalDiv>
                    <HeaderPageTypo sx={{ color: "black" }}>
                      Home
                    </HeaderPageTypo>{" "}
                    {/* svg greater than sign for navigayion */}
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path>
                    </svg>
                    <HeaderPageTypo sx={{ color: "green" }}>
                      Service
                    </HeaderPageTypo>
                  </NormalDiv>
                  <div style={{ display: "flex", paddingLeft: "5%" }}>
                    <h2>{item.title}</h2>
                  </div>
                </div>
              </CatWrapper>
              {/* <CatWrapper>
          <StyledPaper>
            <div
              style={{
                display: "flex",
                width: "100%",

                justifyContent: "space-between",
                paddingLeft: "5%",
              }}
            >
              <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="secondary StyledTabs example"
              >
                <LinkTab value="Overview" label="Overview" href={"#Overview"} />

                <LinkTab
                  value="Description"
                  label="Description"
                  href={"#Description"}
                />

                <LinkTab value="About" label="About seller" href={"#About"} />
                <LinkTab
                  value="Similar"
                  label="Similar services"
                  href={"#Similar"}
                />
                <LinkTab value="Reviews" label="Reviews" href="#Reviews" />
              </StyledTabs>

              <IconButton
                onClick={() => {
                  handleFavorite();
                }}
              >
                {favorite ? (
                  <FavoriteBorderIcon />
                ) : (
                  <FavoriteIcon sx={{ color: "red" }} />
                )}
              </IconButton>
            </div>
          </StyledPaper>
        </CatWrapper> */}
              {/*    <div
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              gap: "20px",
              marginTop: "10px",
            }}
          >
            {/*  <div className="listitem__mainlist">
              <ul>
                <li>Home</li>
              </ul>
            </div>
            <div>Service</div> 
          </div> */}
              <DivVal>
                <StyledDiv>
                  {" "}
                  <StyledWrapper key={Math.random()}>
                    <StyledSubWrapper>
                      <MainSub>
                        {/*     <Typography
                      style={{ color: "#152238", fontSize: "1.4rem" }}
                    >
                      {item.About}
                    </Typography> */}
                        <NormalContainer id="Overview">
                          <div
                            style={{
                              display: "flex",
                              width: "100%",
                            }}
                          >
                            {" "}
                            <StyledImageDiv>
                              <SwiperThumb myimage={item} />
                            </StyledImageDiv>
                          </div>
                          {/*    <RandomFlex>
                        <StyledAvatar />
                        <p>mano</p>
                      </RandomFlex> */}
                        </NormalContainer>
                        <br></br>
                        <RenderMobileDiv>
                          <StyledContactMobile>
                            <ContainerDiv elevation={0.6}>
                              <div
                                style={{
                                  display: "flex",

                                  flexDirection: "column",

                                  justifyContent: "center",
                                  justifyItems: "center",
                                  gap: "10px",

                                  alignItems: "center",
                                }}
                              >
                                <StyledMainHeaderText align="center">
                                  Find out more about this seller
                                </StyledMainHeaderText>
                                <CustomDivider />
                                <StyledAvatar
                                  variant="square"
                                  sx={{ width: "50%", margin: "10px" }}
                                />
                                <NormalTypography align="center">
                                  {item?.title}
                                </NormalTypography>
                                <StyledButton variant="contained">
                                  Send Enquiry{" "}
                                </StyledButton>
                                <NormalTypography align="center">
                                  Submit an enquiry direct
                                </NormalTypography>
                                <br></br>
                              </div>
                            </ContainerDiv>
                            <br></br>
                          </StyledContactMobile>
                        </RenderMobileDiv>
                        <ContainerDiv elevation={0.6}>
                          <StyledMainHeaderText id="Description">
                            Description
                          </StyledMainHeaderText>
                          <StyledMainText paragraph>
                            {item.About}
                          </StyledMainText>
                        </ContainerDiv>
                        <br></br>
                        <ContainerDiv elevation={0.6}>
                          <StyledMainHeaderText id="About">
                            About this Seller
                          </StyledMainHeaderText>

                          <StyledMainText paragraph>
                            A course description is a brief summary of the
                            significant learning experiences for a course.
                            Course descriptions appear in individual Course
                            Outlines and in the Program of Studies (POSs) for
                            individual programs.
                          </StyledMainText>
                        </ContainerDiv>

                        <PaperDiv
                          elevation={0.6}
                          style={{ marginTop: "-60px" }}
                        >
                          <BasicTabs
                            overview={item.type}
                            Description={
                              "A course description is a brief summary of the significant learning experiences for a course. Course descriptions appear in individual Course Outlines and in the Program of Studies"
                            }
                            About={"About"}
                          />
                        </PaperDiv>
                        <br></br>
                        <PaperDiv elevation={0.6}>
                          <StyledMainHeaderText id="Recommended">
                            Similar Services
                          </StyledMainHeaderText>

                          {similar.length <= 0 ? (
                            <div>
                              <CustomLoader />
                            </div>
                          ) : (
                            <div
                              style={{
                                display: "flex",
                                padding: "10px",
                                gap: "20px",
                                overflowX: "scroll",
                                width: "100%",
                              }}
                            >
                              {similar?.slice(0, 6)?.map((item: any) => (
                                <div key={Math.random()}>
                                  <CustomCard
                                    id={item.services_id}
                                    name={item.name}
                                    type={item.type}
                                    about={item.about}
                                    price={item.price}
                                    updated_at={item.updated_at}
                                    image={item.image}
                                    bottomColor={"green"}
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                        </PaperDiv>
                      </MainSub>
                    </StyledSubWrapper>
                    <StyledContact>
                      <PaperDiv>
                        <div
                          style={{
                            display: "flex",

                            flexDirection: "column",
                            width: "100%",
                            justifyContent: "center",
                            justifyItems: "center",
                            gap: "10px",

                            alignItems: "center",
                          }}
                        >
                          <StyledMainHeaderText align="center">
                            Find out more about this seller
                          </StyledMainHeaderText>
                          <CustomDivider />
                          <StyledAvatar
                            variant="square"
                            sx={{ width: "50%", margin: "10px" }}
                          />
                          <NormalTypography align="center">
                            {item?.title}
                          </NormalTypography>
                          <StyledButton variant="contained">
                            Send Enquiry{" "}
                          </StyledButton>
                          <NormalTypography align="center">
                            Submit an enquiry direct
                          </NormalTypography>
                          <br></br>
                        </div>
                      </PaperDiv>
                    </StyledContact>
                  </StyledWrapper>
                </StyledDiv>
              </DivVal>{" "}
            </div>
          ))}
        </ContainerWrapper>
      ) : (
        <Skeleton
          count={6}
          height={30}
          style={{
            marginLeft: "15px",
            borderRadius: "0.5rem",

            justifyContent: "center",
            marginTop: "10px",
          }}
          width={"100%"}
        />
      )}
    </div>
  );
}
