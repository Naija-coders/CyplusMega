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
import { StyledTabs, StyledTab } from "./styles";
import Clientapi from "../../pages/api/client";
import { useRouter } from "next/router";
import { RootState } from "../../state/reducers";
import Swiper from "./Swiper";
import Image from "next/image";

import {
  StyledDiv,
  StyledWrapper,
  MainSub,
  StyledImageDiv,
  StyledSubWrapper,
} from "./styles";
export default function Service() {
  const [value, setValue] = React.useState("Description");

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
  getServices();
  console.log("state service", state.servicedata);
  return (
    <div className="navbar__mycontainer">
      <div className="navbar__catwrapper">
        <div style={{ width: "80%", position: "relative", marginTop: "9%" }}>
          <Paper
            sx={{
              width: "100%",
              border: "solid 1px #D9D9D9",
              background: "#f6f9f5",
              height: "55px",
            }}
            elevation={0}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="secondary StyledTabs example"
              >
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
          </Paper>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              gap: "20px",
              marginTop: "10px",
            }}
          >
            <div className="listitem__mainlist">
              <ul>
                <li>Home</li>
              </ul>
            </div>
            <div>Service</div>
          </div>
          <StyledDiv sx={{ width: "100%" }}>
            {" "}
            {state.servicedata.map((item: any) => (
              <StyledWrapper>
                <StyledSubWrapper>
                  <MainSub>
                    <StyledImageDiv>
                      <Swiper />
                    </StyledImageDiv>
                  </MainSub>
                </StyledSubWrapper>
                <StyledSubWrapper>{item.services_id}</StyledSubWrapper>
              </StyledWrapper>
            ))}
          </StyledDiv>
        </div>{" "}
      </div>{" "}
      <div style={{ marginTop: "37%" }}></div>
    </div>
  );
}
