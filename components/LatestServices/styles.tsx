import { makeStyles, withStyles } from "@mui/styles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Paper,
  Button,
  Typography,
  Box,
  Avatar,
  AppBar,
  IconButton,
  TextField,
  Card,
  Link,
  Divider,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";

export const StyledTypography = styled(Typography)(
  sx({
    fontSize: "12px",
    fontFamily: "san-serif",
    marginLeft: "15%",
    color: "#152238",
  })
);
export const CustomContainer = styled("div")(
  sx({
    display: " flex",
    marginLeft: { md: "5%", lg: "0%", xl: "5%" },
    width: { md: "100%", lg: "100%", xl: "95%" },
    flexDirection: " column",
  })
);
export const CustomDivContainer = styled("div")(
  sx({
    width: { md: "95%", lg: "93%", xl: "93%" },
  })
);
export const StyledLink = styled(Link)(
  sx({
    "&:hover": {},
  })
);

export const StyledIconButton = styled(IconButton)(
  sx({
    "&:active": {
      color: "red",
    },
    "&:focus": {
      color: "red",
    },
  })
);
export const CoverCard = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyItems: "end",
    gap: "10px",
    justifyContent: "space-between",
    justifySelf: "center",
    alignContent: "flex-end",
    flexGrow: 10,
    height: "100%",
  })
);

export const StyledCard = styled(Card)(
  sx({
    "cursor": "pointer",

    "border": "grey 1px",

    "borderRadius": " 12px",
    "borderStyle": "solid",

    "width": {
      xs: "270px",

      sm: "270px",
      md: "290px",

      lg: "290px",
      xl: "290px",
    },

    "background": "white",

    "&:hover": {
      boxShadow: " 0px 2px 12px -1px #565454;",
    },
  })
);
export const LatestServicesDiv = styled("div")(
  sx({
    marginTop: "10px",
    width: "100%",
    display: " grid",
    justifyContent: "space-between",

    gridTemplateColumns: {
      xs: "repeat(1,1fr)",
      sm: "repeat(2,1fr)",
      md: "repeat(3,1fr)",
      lg: "repeat(4,1fr)",
      xl: "repeat(5,1fr)",
    },
    gridGap: { sm: "32px", md: "32px" },
  })
);
export const TextTypography = styled(Typography)(
  sx({
    fontFamily: "sans-serif",

    fontStretch: "normal",
    fontStyle: "normal",

    fontSize: "12px",
    marginLeft: "4px",
    color: "rgb(98, 100, 98)",
  })
);
export const StyledTypographyHeader = styled(Typography)(
  sx({
    fontSize: " 14px",

    fontFamily: "Avenir Light",
  })
);
export const StyledButton = styled(Button)(
  sx({
    "background": "#F68B1E",
    "color": "white",
    "textTransform": "none",
    "width": "255px",
    "maxwidth": "10px",
    "&:hover": {
      background: "#F68B1E",
    },
  })
);

export const StyledPriceValue = styled(Typography)(
  sx({
    color: "black",
    fontFamily: "Avenir Light",
    fontSize: "25px",
  })
);
export const StyledPrice = styled(Typography)(
  sx({
    fontSize: "11px",
    fontWeight: "bold",

    textAlign: "center",
    color: "#F6F9F5",

    fontFamily: "Avenir Light",
  })
);
export const StyledBox = styled(Box)(
  sx({
    background: "#152238",
    display: "flex",
    justifyContent: "space-between",
    justifyItems: "center",
    alignItems: "center",

    width: "100%",
    marginTop: { xs: "0%", md: "3%" },
  })
);
export const StyledCustomTypography = styled(Typography)(
  sx({
    fontSize: "30px",
    fontFamily: "caudex",
    color: "#ffff",
  })
);
