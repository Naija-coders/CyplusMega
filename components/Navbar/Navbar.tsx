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
      <div className="navbar__nav_mobile">
        <IconButton onClick={handleMenuClicks} onMouseLeave={handleCloseMenu}>
          <MenuRoundedIcon />
          <Menu
            id="basic-menu"
            anchorEl={anchorElmenu}
            open={displaymenu}
            onClose={handleCloseMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {" "}
            <Box>
              {catvalue?.map(
                (
                  item: {
                    type:
                      | boolean
                      | React.ReactChild
                      | React.ReactFragment
                      | React.ReactPortal
                      | null
                      | undefined;
                  },
                  i: string | number | any
                ) => (
                  <MenuItem key={Math.random()}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignSelf: "self-end",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "serif",

                          fontSize: "0.9rem",
                        }}
                      >
                        <img
                          src={imagelist[i]}
                          style={{
                            height: "20px",
                            width: "20px",
                            position: "relative",
                            top: "4px",
                            left: -10,
                          }}
                        />
                        {item?.type}
                      </Typography>
                    </div>
                  </MenuItem>
                )
              )}
              <MenuItem onClick={handleCloseMenu}>
                <Typography
                  style={{
                    fontFamily: "serif",

                    fontSize: "0.9rem",
                  }}
                >
                  Other Services
                </Typography>
              </MenuItem>
            </Box>
          </Menu>
        </IconButton>

        <StyledTextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          size="small"
        />
      </div>
    );
  };
  return (
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                <StyledTypography
                  sx={{
                    fontFamily: "GeoticaW01-FourOpen",
                    cursor: "pointer",
                  }}
                >
                  Elverr
                </StyledTypography>
                <img
                  src="companylogo.jpeg"
                  style={{ height: "20px", objectFit: "contain" }}
                ></img>
              </div>
            </div>
          </div>

          <StyledDiv>
            <Search isVisible={showSearch} />
            <StyledIconButton sx={{ color: "#222325" }}>
              <NotificationsNoneOutlinedIcon />
            </StyledIconButton>
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
                    <Avatar /> &nbsp; Hi {AuthState.user.name}{" "}
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
                          <MenuItem onClick={handleClose}>My account</MenuItem>
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
          <IconButton>
            <MainText>Categories</MainText>
            <KeyboardArrowDown />
          </IconButton>
          <IconButton>
            <MainText>IT Services</MainText>
            <KeyboardArrowDown />
          </IconButton>
          <IconButton>
            <MainText>Cleaning Services</MainText>
            <KeyboardArrowDown />
          </IconButton>
          <IconButton>
            <MainText>Automative Services</MainText>
            <KeyboardArrowDown />
          </IconButton>
          <IconButton>
            <MainText>Advertise on Elverr</MainText>
            <KeyboardArrowDown />
          </IconButton>
          <IconButton>
            <MainText>FAQ</MainText>
            <KeyboardArrowDown />
          </IconButton>
          <LanguageMenu />
        </ResponsiveDiv>
      </div>
    </StyledAppBar>
  );
};

export default Navbar;
