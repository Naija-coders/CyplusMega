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
  value: string;
  onChange: (event: React.SyntheticEvent, newValue: string) => void;
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
  label: string;
  value: string;
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: { xs: "relative", md: "sticky" },
    top: 100,

    zIndex: 1,

    height: "100%",
    width: { md: "30%", xl: "25%" },
    gap: "10px",
    marginTop: { xs: "20px", md: "0px" },
    marginRight: "20px",
    justifyItems: "center",
    paddingLeft: "1rem",
    alignItems: "center",
  })
);
export const StyledWrapper = styled("div")(
  sx({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginLeft: "5%",
    justifyContent: "space-between",
  })
);
export const MainSub = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingLeft: "1rem",
    overflowY: "scroll",
  })
);
export const StyledSubWrapper = styled("div")(
  sx({
    display: "flex",
    width: "75%",

    background: "#f6f9f5",
  })
);
export const StyledMainText = styled(Typography)(
  sx({
    padding: "1rem 3rem",
    fontSize: "1rem",
    color: "black",
  })
);
export const StyledMainHeaderText = styled(Typography)(
  sx({
    padding: "1rem 3rem",
    fontSize: "1.4rem",
    fontWeight: "bold",
  })
);
export const NormalTypography = styled(Typography)(
  sx({
    fontSize: "1rem",
    color: "black",
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
    width: "90%",
    justifyContent: "center",

    height: "500px",
    padding: "1rem",
  })
);
export const StyledAvatar = styled(Avatar)(sx({}));
export const RandomFlex = styled("div")(
  sx({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    padding: "1rem",
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
    width: "100%",
  })
);
export const CatWrapper = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
    justifyItems: "center",
    flexWrap: "wrap",
  })
);
export const ContainerDiv = styled(Paper)(
  sx({
    borderRadius: "5px",
    border: "solid 1px #D9D9D9",
  })
);
export const StyledButton = styled(Button)(
  sx({
    "background": "#152238",
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
