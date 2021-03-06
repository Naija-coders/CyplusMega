import { useTranslation } from "react-i18next";
import React, { useState, useEffect, useContext } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "../../state";

import { RootState } from "../../state/reducers";
import i18next from "../../i18n/index";
import i18n from "../../i18n/index";

import dynamic from "next/dynamic";

const LanguageMenu = dynamic(() => import("../LanguageMenu"), {
  ssr: false,
});

//plus button
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Search from "../Search/Search";

import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ToolTips from "./ToolTips";

import {
  AppBar,
  Typography,
  Link,
  Box,
  ListItemText,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  ListItemIcon,
  List,
  ListItemButton,
  Avatar,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useRouter } from "next/router";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {
  StyledAppBar,
  StyledButton,
  StyledTypography,
  StyledDiv,
  StyledSearchSubmitButton,
  StyledTextField,
  StyledMainButton,
  StyledIconButton,
  StyledMenu,
  MobileMenu,
  StyledLoginIcon,
  CustomDivider,
  MainText,
  ResponsiveDiv,
  Tooltipdiv,
  MyAppBar,
  HtmlTooltip,
  TooltipText,
  LightTooltip,
} from "./styles";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { LoginModal } from "../LoginModal/Loginmodal";
import VerifiedIcon from "@mui/icons-material/Verified";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import Clientapi from "../../pages/api/client";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import ForumIcon from "@mui/icons-material/Forum";

import Cookies from "js-cookie";

type Props = {
  isfixed?: boolean;
  showSearch?: boolean;
};
const Navbar: React.FC<Props> = ({ isfixed, showSearch }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [categories, setCategories] = useState([]);
  const { AuthState } = useContext<any>(StateContext);
  const { AuthDispatcher } = useContext<any>(DispatchContext);
  const dispatch: Dispatch<any> = useDispatch();

  const route = useRouter();
  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
    setMyaccount(false);
  };

  const [scroll, setScroll] = useState("33px");
  const [myaccount, setMyaccount] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mainservice, setMainservices] = useState([]);
  const [allservices, setAllservices] = useState([]);
  const [anchorElmenu, setAnchorElmenu] = React.useState<null | HTMLElement>(
    null
  );
  const displaylist = Boolean(anchorEl);
  const displaymenu = Boolean(anchorElmenu);
  const handleProfileClicks = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setMyaccount(!myaccount);
  };
  const handleCloseMenu = () => {
    setAnchorElmenu(null);
  };
  const [menu, setMenu] = useState(true);
  const handleMenuClicks = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElmenu(event.currentTarget);
    setMenu(!menu);
  };
  const handleScroll = () => {
    setScroll("0%");
  };
  const handleScrollclose = () => {
    setScroll("33px");
  };
  useEffect(() => {
    window.onscroll = () =>
      window.pageYOffset === 0 ? handleScrollclose() : handleScroll();
  });
  const state = useSelector((state: RootState) => state.appstate);
  console.log("confirmation of the state ", state);
  console.log("checking the category state", state.categories);
  //button color is FCA301
  const UserFavorite = () => {
    Clientapi.get("api/user/favorite").then((res) => {
      const favorite = res.data;
      AuthDispatcher({ type: "getfavorite", payload: favorite });
      getuserfavorite(favorite);
    });
  };
  const [slide, setSlide] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const list = () => <div>coming soon</div>;

  const {
    depositMoney,
    storecategory,
    mainServices,
    getuserfavorite,
    getallservices,
  } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    if (categories.length === 0) {
      Clientapi.get("api/Categories").then((response) => {
        setCategories(response.data);
        AuthDispatcher({ type: "addCategories", payload: response.data });
        console.log(
          "checking data",
          AuthDispatcher({ type: "addCategories", payload: response.data })
        );
        storecategory(response.data);
        AuthDispatcher({ type: "displayCategories" });
      });

      console.log("the lenght wasnt fetched", AuthState.categorydata);
    }
    if (mainservice.length === 0) {
      Clientapi.get("/api/company/categories").then((response) => {
        mainServices(response.data);
      });
    }
    if (allservices.length === 0) {
      Clientapi.get("/api/company/allservices").then((response) => {
        getallservices(response.data);
      });
    }

    if (AuthState.isLoggedIn) {
      Clientapi.get("api/user").then((response) => {
        const user = response.data;
        AuthDispatcher({ type: "addUser", payload: user });
        console.log(AuthState.user);

        //checking dispatch for reducer
        depositMoney(user);
      });
    }
  }, [categories]);

  let catvalue = state.categories?.slice(0, 14);
  console.log("this are the categories", categories);
  const toggleDrawer =
    (anchor: "left", open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setSlide({ ...state, [anchor]: open });
    };

  const HandleLogout = () => {
    Clientapi.get("api/logout").then((response) => {
      const user = response.data;
      console.log("logging out");
      Cookies.remove("auth_token");
      AuthDispatcher({ type: "logout" });
      handleClose();
    });
  };

  const imagelist = [
    "ITservice.png",
    "cleaningservice.png",
    "Eventservice.png",
    "entertainmentservices.png",
    "childcareservices.jpeg",
    "automativeservices.jpeg",
    "building&tradeservices.png",
    "legalservices.png",
    "image&beautyservices.jpeg",
    "landscaping&gardeningservices.jpeg",
    "logisticsservices.png",
    "printingservices.png",
    "photography&videoservices.png",
    "weddingeventsservices.jpeg",
  ];
  const RenderMobile = () => {
    return (
      <div>
        <MyAppBar>
          {" "}
          <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
            <MobileMenu onClick={toggleDrawer("left", true)}>
              <MenuRoundedIcon sx={{ color: "black" }} />
            </MobileMenu>
            <div
              onClick={() => {
                route.push("/");
              }}
              style={{
                display: "flex",
                height: "30px",
              }}
            >
              <img
                src="elverrlogo.png"
                style={{ height: "100%", objectFit: "contain" }}
              ></img>
            </div>
          </div>
          <div>
            <Search isVisible={showSearch} />
          </div>
        </MyAppBar>
      </div>
    );
  };
  return (
    <div>
      {RenderMobile()}
      <StyledAppBar position={isfixed ? "relative" : "fixed"}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="navbar__container">
            <Toolbar></Toolbar>
            <div className="navbar__mainwrapper">
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <MobileMenu onClick={toggleDrawer("left", true)}>
                  <MenuRoundedIcon sx={{ color: "black" }} />
                </MobileMenu>
                <SwipeableDrawer
                  anchor={"left"}
                  open={slide["left"]}
                  onClose={toggleDrawer("left", false)}
                  onOpen={toggleDrawer("left", true)}
                >
                  {list()}
                </SwipeableDrawer>
                <div
                  onClick={() => {
                    route.push("/");
                  }}
                  style={{
                    height: "45px",
                    display: "flex",
                  }}
                >
                  <img
                    src="elverrlogo.png"
                    style={{
                      height: "100%",

                      objectFit: "cover",
                    }}
                  ></img>
                </div>
              </div>
            </div>

            <StyledDiv>
              <Search isVisible={showSearch} />
              <LightTooltip
                title={
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      color="green"
                      style={{ fontWeight: "bold", padding: "1rem" }}
                      align="center"
                    >
                      Notifications{" "}
                    </Typography>

                    <Typography
                      color="black"
                      style={{ fontSize: "0.8rem", paddingLeft: "1rem" }}
                    >
                      No notifications.
                    </Typography>
                    <br></br>
                  </div>
                }
              >
                <StyledIconButton sx={{ color: "#222325" }}>
                  <NotificationsNoneOutlinedIcon />
                </StyledIconButton>
              </LightTooltip>

              <StyledIconButton
                onClick={() => {
                  route.push("/my-favorite");
                }}
                sx={{ color: "#222325" }}
              >
                <FavoriteBorderOutlinedIcon />
              </StyledIconButton>

              {/*      <p
            onClick={() => {
              handleLanguageChange("en");
            }}
          >
            EN
            
          </p> */}

              <div>
                {AuthState.user ? (
                  <>
                    <StyledButton
                      variant="text"
                      sx={{ textTransform: "none" }}
                      onClick={handleProfileClicks}
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <Avatar sx={{ background: "green" }}>00</Avatar>
                      {myaccount ? (
                        <>
                          {" "}
                          <KeyboardArrowDown
                            sx={{ transform: "rotate(180deg)" }}
                          />{" "}
                        </>
                      ) : (
                        <>
                          {" "}
                          <KeyboardArrowDown
                            sx={{ transform: "rotate(0deg)" }}
                          />{" "}
                          <StyledMenu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={displaylist}
                            onClose={handleClose}
                            MenuListProps={{
                              "aria-labelledby": "basic-button",
                            }}
                          >
                            <MenuItem
                              onClick={() => {
                                route.push("/profile");
                              }}
                            >
                              Profile
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              My account
                            </MenuItem>
                            <MenuItem onClick={HandleLogout}>Logout</MenuItem>
                          </StyledMenu>
                        </>
                      )}
                    </StyledButton>
                    <div
                      style={{
                        display: "flex",

                        justifyContent: "center",
                        bottom: "20px",

                        position: "absolute",
                        right: 0,
                      }}
                    >
                      {/*    <StyledLoginIcon sx={{ color: "#222325" }}>
                    <FavoriteBorderOutlinedIcon sx={{ fontSize: "1.3rem" }} />
                  </StyledLoginIcon>

                  <StyledLoginIcon sx={{ color: "#222325" }}>
                    <NotificationsNoneOutlinedIcon sx={{ fontSize: "1.3rem" }} />
                  </StyledLoginIcon> */}
                      <StyledLoginIcon
                        sx={{ color: "#222325" }}
                        onClick={handleOpen}
                      >
                        <Avatar sx={{ height: "1.3rem", width: "1.3rem" }} />
                      </StyledLoginIcon>
                    </div>
                  </>
                ) : (
                  <div>
                    <StyledButton
                      variant="text"
                      sx={{ textTransform: "none" }}
                      onClick={handleOpen}
                    >
                      <PersonIcon /> Account <KeyboardArrowDown />
                    </StyledButton>
                    <LoginModal
                      OpenModalForm={open}
                      CloseModalForm={handleClose}
                    />{" "}
                    <div
                      style={{
                        display: "flex",

                        justifyContent: "center",
                        bottom: "20px",

                        position: "absolute",
                        right: 0,
                      }}
                    >
                      {/*     <StyledLoginIcon sx={{ color: "#222325" }}>
                    <FavoriteBorderOutlinedIcon sx={{ fontSize: "0.8rem" }} />
                  </StyledLoginIcon> */}

                      {/*      <StyledLoginIcon sx={{ color: "#222325" }}>
                    <NotificationsNoneOutlinedIcon sx={{ fontSize: "0.8rem" }} />
                  </StyledLoginIcon> */}
                      <StyledLoginIcon
                        sx={{ color: "#222325" }}
                        onClick={handleOpen}
                      >
                        <PersonIcon sx={{ fontSize: "1.3rem" }} />
                      </StyledLoginIcon>
                    </div>
                  </div>
                )}
              </div>
            </StyledDiv>
          </div>
          <CustomDivider />
          <ResponsiveDiv>
            <ToolTips />

            <LanguageMenu />
          </ResponsiveDiv>
        </div>
      </StyledAppBar>
    </div>
  );
};

export default Navbar;
