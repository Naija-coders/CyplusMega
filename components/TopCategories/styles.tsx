import { makeStyles, withStyles } from "@mui/styles";
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

export const StyledCard = styled(Card)(
  sx({
    "cursor": "pointer",

    "border": "#d5d7db 2px",

    "borderRadius": " 12px",
    "borderStyle": "solid",

    "width": {
      xs: "245px",

      sm: "300px",
      md: "270px",

      lg: "270px",
      xl: "270px",
    },
    "minWidth": "245px",

    "background": "white",

    "&:hover": {
      boxShadow: " 0px 2px 12px -1px #565454;",
    },
  })
);
export const LatestServicesDiv = styled("div")(
  sx({
    marginTop: "10px",
    width: { xs: "210%", sm: "100%", md: "100%" },
    display: " grid",
    justifyContent: "space-between",
    overflow: { xs: "scroll", md: "none" },

    gridTemplateColumns: {
      xs: "repeat(3,1fr)",
      sm: "repeat(2,1fr)",
      md: "repeat(3,1fr)",
      lg: "repeat(4,1fr)",
      xl: "repeat(4,1fr)",
    },
    gridGap: { xs: "10px", sm: "32px", md: "32px" },
  })
);
export const TextTypography = styled(Typography)(
  sx({
    fontFamily: "sans-serif",

    fontStretch: "normal",
    fontStyle: "normal",

    fontSize: { xs: "0.6rem", md: "12px" },
    marginLeft: "4px",
    color: "rgb(98, 100, 98)",
  })
);

export const StyledTypographyHeader = styled(Typography)(
  sx({
    "fontSize": " 1rem",

    "fontFamily": "Avenir Light",
    "&:hover": {
      color: "green",
    },
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
    fontSize: { xs: "1rem", md: "25px" },
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
export const CustomContainer = styled("div")(
  sx({
    display: " flex",
    marginLeft: { md: "5%", lg: "0%", xl: "5%" },

    flexDirection: " column",
    marginTop: { xs: "30px", sm: "0px" },
  })
);
export const CustomDivContainer = styled("div")(
  sx({
    width: { md: "95%", lg: "94%", xl: "93%" },
  })
);
export const StyledBox = styled(Box)(
  sx({
    display: "flex",
    justifyContent: "space-between",
    justifyItems: "center",
    alignItems: "center",

    width: { xs: "210%", sm: "100%" },
    marginTop: { xs: "0%", md: "3%" },
  })
);
export const StyledCustomTypography = styled(Typography)(
  sx({
    fontSize: { xs: "1.5rem", sm: "24px" },
    fontFamily: "caudex",
    color: "#222325",
    fontWeight: "bold",
  })
);

//mobile design coming soon

export const StyledMobileCard = styled("div")(
  sx({
    minWidth: "50%",
    height: "200px",
    justifyContent: "flex-start",
    display: "flex",
    flexDirection: "column",
  })
);

export const CustomMobileDiv = styled("div")(
  sx({
    justifyContent: "center",

    display: "grid",
    gridTemplateColumns: "auto auto",
    gap: "10px",
    width: "110%",
  })
);
