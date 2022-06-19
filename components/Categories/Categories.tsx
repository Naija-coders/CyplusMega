import React, { useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IconButton, Paper } from "@mui/material";

import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import Button from "@mui/material/Button";
import Clientapi from "../../pages/api/client";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { RootState } from "../../state/reducers";
import Card from "@mui/material/Card";
import { SideBar } from "../SideBar/SideBar";
import {
  ContainerDiv,
  StickyBar,
  StyledPaper,
  MainPaperDiv,
  CustomDivContainer,
  ColorText,
  BasicText1,
  BasicText,
  StyledDiv,
} from "./styles";
import ReuseableCategories from "../ReuseableCategories";
import CustomGrid from "./CustomGid";
import CustomCard from "../CustomCard";

interface Props {
  servicesState?: [];
  query?: any;
}

const Categories: React.FC<Props> = ({ servicesState, query }) => {
  const dispatch: Dispatch<any> = useDispatch();
  const { storeservices } = bindActionCreators(actionCreators, dispatch);
  const [services, setServices] = useState<any>(servicesState);
  const [userservice, setUserservice] = useState<any>([]);

  const state = useSelector((state: RootState) => state.appstate);
  useEffect(() => {
    if (servicesState) {
      storeservices(servicesState);
      const servicesData = state.services?.filter(
        (items: any) => items?.categories_id == query?.id
      );
      if (userservice.length <= 0) {
        setUserservice(servicesData);
      }
      console.log("this is the servicesData", userservice);
    }
  }, [userservice]);

  // the userservice data will be the mapped data

  console.log(query, "checking out categories query");
  console.log(servicesState, "checking out service state");
  console.log("the lenght of service is", services.length);
  console.log("the dispatch state services", state.services);
  return (
    <div style={{ marginTop: "10px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "white",
          padding: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              marginLeft: "5%",
            }}
          >
            <div>
              <BasicText>Home</BasicText>
            </div>
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path>
            </svg>
            <div>
              <ColorText>Service</ColorText>
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <BasicText>{userservice.length} results</BasicText>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              marginLeft: "5%",
            }}
          >
            <div>
              {" "}
              {userservice?.slice(0, 1)?.map((item: any) => (
                <div>
                  <BasicText1>{item?.type}</BasicText1>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <BasicText sx={{ fontWeight: "bold" }}>Sort By:</BasicText>
            <StyledDiv>
              <BasicText sx={{ color: "green" }}>Relavance</BasicText>
              <Divider
                orientation="vertical"
                sx={{ background: "green" }}
              ></Divider>
              <BasicText>Price- High To Low</BasicText>
              <Divider
                orientation="vertical"
                sx={{ background: "green" }}
              ></Divider>
              <BasicText>Price- Low to High</BasicText>
            </StyledDiv>
          </div>
        </div>
      </div>
      <ContainerDiv>
        <StickyBar elevation={0.8}>hey mano</StickyBar>{" "}
        <StyledPaper>
          <MainPaperDiv>
            {userservice?.map((item: any) => (
              <CustomDivContainer key={Math.random()}>
                <CustomCard bottomColor="#222325" />
                <br></br>
              </CustomDivContainer>
            ))}
          </MainPaperDiv>
        </StyledPaper>
      </ContainerDiv>
    </div>
  );
};

export default Categories;
