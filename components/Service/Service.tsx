import React from "react";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
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

import {
  StyledDiv,
  DivVal,
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
  ContainerDiv,
} from "./styles";
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

  let offer = [];
  //card color #D9D9D9
  const handleFavorite = () => {
    setFavorite(!favorite);
  };
  const { getmainservices } = bindActionCreators(actionCreators, dispatch);
  function getServices() {
    Clientapi.get(`/api/company/services`).then((response) => {
      offer = response.data.filter(
        (items: any) => items?.services_id == handle
      );
      getmainservices(offer);
      console.log("the service ad data is ", offer);
    });
  }
  React.useEffect(() => {
    getServices();
  }, []);

  console.log("state service", state.servicedata);
  return (
    <ContainerWrapper>
      <div
        style={{
          width: "100%",

          marginTop: "2%",
        }}
      >
        <CatWrapper>
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
                <StyledTab value="Overview" label="Overview" />

                <StyledTab value="Description" label="Description" />

                <StyledTab value="About" label="About seller" />
                <StyledTab value="Similar" label="Similar services" />
                <StyledTab value="Reviews" label="Reviews" />
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
        </CatWrapper>
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
          <StyledDiv sx={{ width: "100%" }}>
            {" "}
            {state.servicedata.map((item: any) => (
              <StyledWrapper key={Math.random()}>
                <StyledSubWrapper>
                  <MainSub>
                    <ContainerDiv id="Overview">
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "center",
                        }}
                      >
                        {" "}
                        <StyledImageDiv>
                          <SwiperThumb myimage={item} />
                        </StyledImageDiv>
                      </div>
                      <RandomFlex>
                        <StyledAvatar />
                        <StyledMainText>mano</StyledMainText>
                      </RandomFlex>
                    </ContainerDiv>
                    <br></br>
                    <ContainerDiv>
                      <StyledMainHeaderText id="Description">
                        Description
                      </StyledMainHeaderText>
                      <StyledMainText paragraph>{item.About}</StyledMainText>
                    </ContainerDiv>
                    <br></br>
                    <ContainerDiv>
                      <StyledMainHeaderText id="About">
                        About this Seller
                      </StyledMainHeaderText>
                      <StyledMainText paragraph>
                        A course description is a brief summary of the
                        significant learning experiences for a course. Course
                        descriptions appear in individual Course Outlines and in
                        the Program of Studies (POSs) for individual programs.
                      </StyledMainText>
                    </ContainerDiv>
                    <br></br>
                    <ContainerDiv>
                      <StyledMainHeaderText id="Recommended">
                        Similar Services
                      </StyledMainHeaderText>
                      <div
                        style={{
                          display: "flex",
                          padding: "10px",

                          overflow: "scroll",
                        }}
                      >
                        <CustomCard />
                        <CustomCard />
                        <CustomCard />
                      </div>
                    </ContainerDiv>
                  </MainSub>
                </StyledSubWrapper>
                <StyledContact>
                  <ContainerDiv>
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
                  </ContainerDiv>
                </StyledContact>
              </StyledWrapper>
            ))}
          </StyledDiv>
        </DivVal>{" "}
      </div>{" "}
    </ContainerWrapper>
  );
}
