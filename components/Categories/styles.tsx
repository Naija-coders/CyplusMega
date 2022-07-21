import { makeStyles, withStyles } from "@mui/styles";
import {
  Paper,
  Button,
  Typography,
  Avatar,
  Link,
  AppBar,
  TextField,
  Card,
  Drawer,
} from "@mui/material";
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";

export const StyledLink = styled(Link)(
  sx({
    "textDecoration": "none",
    "color": "black",
    "cursor": "pointer",
    "&:hover": {
      color: "blue",
    },
  })
);

export const StyledCard = styled(Card)(
  sx({
    "cursor": "pointer",
    "&:hover": {
      boxShadow: " 0px 2px 12px -1px #565454;",
    },
  })
);
export const StyledHeader = styled(Typography)(
  sx({
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "10px",
    fontFamily: "serif",
  })
);
export const StyledPrice = styled(Typography)(
  sx({
    fontSize: "1.1rem",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
    fontFamily: "serif",
  })
);
export const StyledAbout = styled(Typography)(
  sx({
    fontSize: "1rem",
    color: "grey",
    fontFamily: "serif",
    marginLeft: "21px",
  })
);
export const StyledPriceValue = styled(Typography)(
  sx({
    color: "red",
    fontFamily: "serif",
    fontSize: "1.1rem",
  })
);
export const StyledButton = styled(Button)(
  sx({
    "background": "#F68B1E",
    "marginBottom": "10px",
    "color": "white",
    "&:hover": {
      background: "#F68B1E",
    },
  })
);
export const CustomDrawer = styled(Drawer)(
  sx({
    "width": "19rem",

    "flexShrink": 0,

    "& .MuiDrawer-paper": {
      width: "85%",
      boxSizing: "border-box",
      height: "100%",

      position: "static",
      marginLeft: "2.5%",

      overflowY: "scroll",
      borderRadius: "12px",
    },
  })
);
export const StyledTypography = styled(Typography)(
  sx({
    width: "50%",

    fontFamily: "serif",
    fontSize: "0.9rem",

    marginLeft: "10px",
  })
);
//mano contribution

export const ContainerDiv = styled("div")(
  sx({
    display: "flex",
    flexDirection: "row",

    justifyContent: "space-between",
  })
);
export const StickyBar = styled(Paper)(
  sx({
    width: "20%",

    height: "55px",

    position: "sticky",
    top: 10,
    marginTop: "7px",
    display: "flex",
    justifyContent: "center",

    zIndex: 100,
  })
);
export const StyledPaper = styled("div")(
  sx({
    width: "100%",
    marginTop: "7px",
  })
);
export const CustomDivContainer = styled("div")(
  sx({
    displaY: "flex",

    justifyContent: "left",
    width: "100%",
    marginTop: "20px",
  })
);
export const MainPaperDiv = styled("div")(
  sx({
    display: "grid",
    gridTemplateColumns: {
      xs: "auto",
      md: "250px 250px 250px ",
      lg: "250px 250px 250px 250px 250px",
      xl: "auto auto auto auto auto auto",
    },
    width: "100%",
    columnGap: { md: "60px", lg: "10px", xl: "20px" },
    rowGap: "-10px",
    justifyContent: "center",
    alignItems: "left",
  })
);
export const ColorText = styled(Typography)(
  sx({
    fontSize: "0.8rem",
    color: "green",
  })
);
export const BasicText1 = styled(Typography)(
  sx({
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#222325",
  })
);
export const BasicText = styled(Typography)(
  sx({
    fontSize: "0.8rem",
    color: "#222325",
  })
);
export const StyledDiv = styled("div")(
  sx({
    border: "green 1px",
    borderStyle: "solid",
    height: "30px",
    display: "flex",
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",
  })
);
