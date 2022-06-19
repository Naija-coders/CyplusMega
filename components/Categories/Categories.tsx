/* import React, { useContext, useState, useEffect } from "react";
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
  StyledTypography,
  StyledLink,
  CustomDrawer,
  StyledHeader,
  StyledAbout,
  StyledPriceValue,
  StyledPrice,
  StyledButton,
  StyledCard,
} from "./styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { HomeRepairServiceSharp } from "@mui/icons-material";

const drawerWidth = 240;
interface Props {
  servicesState: any;
}

const Categories: React.FC<Props> = ({ servicesState }) => {
  const route = useRouter();
  const query = route.query;
  const [cardmouse, setCardmouse] = useState(1);
  const { AuthState } = useContext<any>(StateContext);
  const { AuthDispatcher } = useContext<any>(DispatchContext);
  const lessvalue = AuthState.categorydata?.slice(0, 5);
  const showall = AuthState.categorydata?.length - 5;
  //the disptached data
  const dispatch: Dispatch<any> = useDispatch();
  //bind action

  const state = useSelector((state: RootState) => state.appstate);
  const [cat, setCat] = useState<number>();
  const [services, setServices] = useState([]);
  console.log("checking service data", servicesState);

  const handle = query["services"];
  console.log("the handle is ", handle);
  const { storeservices } = bindActionCreators(actionCreators, dispatch);

  const Mouseover = () => {
    setCardmouse(10);
  };
  const MouseOut = () => {
    setCardmouse(1);
  };

  function getIsbriskpackage() {
    Clientapi.get("/api/company/categories")
      .then((response) => {
        const offer = response.data.filter(
          (items: any) => items?.categories_id == handle
        );
        storeservices(offer);
        setServices(offer);
        console.log("the services data is ", services);
        console.log("fecthing the response data", response.data);
      })
      .catch((error) => {});
  }

  useEffect(() => {
    if (state.services.length <= 0) {
      Clientapi.get("/api/company/categories")
        .then((response) => {
          const offer = response.data.filter(
            (items: any) => items?.categories_id == handle
          );
          storeservices(offer);
          setServices(offer);
          console.log("the services data is ", services);
          console.log("fecthing the response data", response.data);
        })
        .catch((error) => {});
    } else {
      getIsbriskpackage();
    }
    console.log("the service data is", services);
  }, []);
  //the wrapper should be fixed for services
  return (
    <>
      <div
        style={{
          display: "flex",

          top: "12%",
          left: "-2.5%",
          position: "absolute",
        }}
      >
        <div className="listitem__mainlist">
          <ul>
            <li>Home</li>
          </ul>
        </div>
        <div className="listitem">
          <ul>
            <li>Services</li>
          </ul>
        </div>
      </div>
      <div>
        <Box sx={{ display: "flex", marginTop: "7%" }}>
          <div style={{ position: "relative" }}>
            <SideBar lessvalue={lessvalue} showall={showall} />
          </div>

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              marginRight: "22px",
              p: 1,
              borderRadius: "12px",
            }}
          >
            <div className="product__gridval">
              {state.services?.map(
                (
                  item: {
                    type:
                      | boolean
                      | React.ReactChild
                      | React.ReactFragment
                      | React.ReactPortal
                      | null
                      | undefined;
                    name: string | null | undefined;
                    price: number;
                    image: string | null | undefined | any;
                    about: string | null | undefined | any;
                    title: string | null | undefined | any;
                    services_id: number;
                  },
                  i: string | number | any
                ) => {
                  const styledelevation = [cardmouse];
                  return (
                    <StyledCard
                      key={item.services_id}
                      sx={{ width: "270px" }}
                      onClick={() => {
                        console.log("you clicked on me", item.services_id);
                      }}
                    >
                      <img
                        src={item?.image}
                        style={{
                          height: "150px",
                          width: "90%",
                          display: "flex",
                          justifyContent: "center",
                          marginLeft: "10px",

                          marginTop: "10px",
                          borderRadius: "10px",
                        }}
                      />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "end",
                          justifyItems: "end",
                          justifyContent: "center",
                        }}
                      >
                        <StyledHeader>{item?.title}</StyledHeader>
                        {/* maintain the state when the icon is clicked
                        <IconButton>
                          <FavoriteBorderIcon />
                        </IconButton>
                      </div>
                      <StyledAbout>{item?.about.slice(0, 30)}...</StyledAbout>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <StyledPrice>Price: </StyledPrice>
                        <StyledPriceValue>${item?.price}</StyledPriceValue>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <StyledButton size="small" variant="contained">
                          Make an Offer
                        </StyledButton>
                      </div>
                    </StyledCard>
                  );
                }
              )}
            </div>
          </Box>
        </Box>
        <div style={{ marginTop: "40%" }}></div>
      </div>
    </>
  );
};

export default Categories;
 */
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginLeft: "5%",
          }}
        >
          <div>Home</div>
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path>
          </svg>
          <div>
            {userservice?.slice(0, 1).map((item: any) => (
              <div>{item?.type}</div>
            ))}
          </div>
        </div>
        <div>
          {userservice?.slice(0, 1).map((item: any) => (
            <div>{item?.type}</div>
          ))}
        </div>
      </div>
      <ContainerDiv>
        <StickyBar elevation={0.8}>hey mano</StickyBar>{" "}
        <StyledPaper elevation={1}>
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
