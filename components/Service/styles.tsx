import { makeStyles, withStyles } from "@mui/styles";
import {
  Paper,
  Button,
  Typography,
  Avatar,
  AppBar,
  Card,
  TextField,
  InputAdornment,
  Divider,
} from "@mui/material";
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";

import * as React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
interface StyledTabsProps {
  children?: React.ReactNode;
  value: any;
  onChange: any;
}
export const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    minHeight: "5px",
  },

  "& .MuiTabs-indicatorSpan": {
    width: "80%",
    backgroundColor: "#152238",
  },
});
interface StyledTabProps {
  label?: string;
  value?: string;
}
export const StyledDiv = styled("div")(
  sx({
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "10px",
    width: "100% !important",
  })
);

export const StyledContact = styled("div")(
  sx({
    borderRadius: "5px",
    display: { xs: "none", md: "flex" },
    flexDirection: "column",
    justifyContent: "center",
    position: { xs: "relative", md: "sticky" },
    top: 100,
    zIndex: 1,

    height: "100%",
    width: { md: "300px", lg: "300px", xl: "300px" },
    gap: "10px",
    marginTop: { xs: "20px", md: "30px" },
    marginRight: "20px",
    justifyItems: "center",
    paddingLeft: "1rem",
    alignItems: "center",
  })
);
export const StyledWrapper = styled("div")(
  sx({
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    width: { xs: "110%", md: "100%" },
    marginLeft: { md: "0%", lg: "5%", xl: "5%" },
    justifyContent: "space-between",
  })
);
export const MainSub = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
    width: { xs: "110%", md: "100%" },
    paddingLeft: { xs: "0%", md: "1rem" },
    overflowY: "scroll",
  })
);
export const RenderMobileDiv = styled("div")(
  sx({
    display: { xs: "flex", md: "none" },
    marginTop: "-20px",
  })
);
export const StyledContactMobile = styled("div")(
  sx({
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    width: "110%",
    gap: "10px",
    marginTop: { xs: "20px", md: "0px" },

    justifyItems: "center",

    alignItems: "center",
  })
);
export const StyledSubWrapper = styled("div")(
  sx({
    display: "flex",
    width: { xs: "100%", md: "65%", lg: "70%", xl: "75%" },

    background: "#f6f9f5",
  })
);
export const StyledMainText = styled(Typography)(
  sx({
    padding: { xs: "0 1rem", md: " 0rem 1rem" },
    fontSize: "1rem",
    color: "#152238",
  })
);
export const HeaderPageTypo = styled(Typography)(
  sx({
    fontSize: "1rem",
  })
);
export const StyledMainHeaderText = styled(Typography)(
  sx({
    padding: { xs: "1rem 1rem", md: " 1rem 1rem" },
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#152238",
  })
);
export const NormalTypography = styled(Typography)(
  sx({
    fontSize: "1rem",
    color: "#152238",
  })
);
export const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  "textTransform": "none",

  "marginRight": theme.spacing(1),
  "color": "grey",
  "&.Mui-selected": {
    color: "#152238",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));
export const StyledImageDiv = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
    width: { xs: "100%", md: "90%" },
    justifyContent: "left",
    alignItems: "left",
    height: { xs: "300px", md: "500px" },
    padding: { xs: "0px", md: "1rem" },
  })
);
export const StyledAvatar = styled(Avatar)(sx({}));
export const RandomFlex = styled("div")(
  sx({
    display: "flex",
    flexDirection: "row",
    gap: "10px",

    alignItems: "center",
    padding: { xs: "0px", md: "1rem 3rem" },
  })
);
export const CustomDivider = styled(Divider)(
  sx({
    marginLeft: "10px",
    width: "90%",
  })
);
export const StyledPaper = styled(Paper)(
  sx({
    width: "100%",

    height: "55px",

    position: "sticky",
    top: 0,
    display: { xs: "none", md: "flex" },

    zIndex: 100,
  })
);
export const DivVal = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
    width: { md: "100%", lg: "95%", xl: "90%" },
  })
);
export const ContainerWrapper = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
  })
);
export const CatWrapper = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
    width: { xs: "110%", md: "100%" },
  })
);
export const NormalContainer = styled("div")(
  sx({
    width: "100%",
  })
);
export const ContainerDiv = styled(Paper)(
  sx({
    display: { md: "none" },
    borderRadius: "5px",
    width: "100%",
    border: "solid 0.4px #D9D9D9",
  })
);
export const PaperDiv = styled(Paper)(
  sx({
    borderRadius: "5px",
    width: "100%",
    border: "solid 0.4px #D9D9D9",
  })
);
export const StyledButton = styled(Button)(
  sx({
    "background": "green",
    "width": "90%",
    "padding": "0.8rem",
    "color": "white",
    "textTransform": "none",
    "&:hover": {
      background: "#152238",
      color: "white",
    },
  })
);
