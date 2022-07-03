import { makeStyles, withStyles } from "@mui/styles";
import {
  Paper,
  Button,
  Typography,
  Avatar,
  AppBar,
  TextField,
} from "@mui/material";
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";
export const StyledImage = styled("img")(
  sx({
    width: "100%",
    objectFit: "cover",

    display: { xs: "none", md: "flex" },
    height: "300px",
    opacity: "100%",
  })
);
export const CustomContainer = styled("div")(
  sx({
    display: " flex",

    marginLeft: { xs: "0%", md: "5%", lg: "0%", xl: "5%" },
    flexDirection: " column",
  })
);
export const CustomDivContainer = styled("div")(
  sx({
    width: { md: "95%", lg: "93%", xl: "100%" },
  })
);
export const mainStyleDiv = styled("div")(
  sx({
    width: "100%",
    height: "300px",
    background:
      "linear-gradient(164.22deg, #23395D 11.02%, rgba(16, 101, 240, 0) 112.14%) !important",
  })
);
export const StyledContainers = styled("div")(
  sx({
    width: "98%",

    display: "flex",

    marginLeft: { md: "5%", xs: "5%" },
    height: "300px",
    justifyContent: "space-between",
    gap: "30px",

    alignItems: "center",

    flexDirection: { xs: "column-reverse", md: "row" },
  })
);

export const Text = styled(Typography)(
  sx({
    fontSize: "1.4rem",
    fontWeight: "bold",
  })
);
export const SubText = styled(Typography)(
  sx({
    fontSize: "1.3rem",
  })
);
export const StyledPaper = styled(Paper)(
  sx({
    width: { xs: "400px", md: "400px", lg: "400px", xl: "300px" },
    height: "90%",
  })
);

export const StyledButton = styled(Button)(
  sx({
    "borderStyle": "solid",

    "fontFamily": "Avenir Light",
    "textTransform": "none",
    "width": "80%",
    "background": "#222325",
    "color": "white",
    "fontSize": "13px",
    "&:hover": {
      background: "white",
      color: "#222325",
    },
  })
);

export const StyledTypography = styled(Typography)(
  sx({
    color: "whitesmoke",
    fontFamily: "avenir",
    fontWeight: "bold",
    fontSize: { xs: "2.5rem", md: "4rem" },
  })
);
export const SubTypography = styled(Typography)(
  sx({
    color: "whitesmoke",
    fontFamily: "Avenir Light",

    fontSize: { xs: "0.8rem", sm: "1rem", md: "20px" },
    textAlign: "left",
    marginLeft: "10px",
  })
);
export const StyledTextField = styled(TextField)(
  sx({
    "minWidth": { xs: "84%", sm: "50%", md: "30%", xl: "20%" },
    "border": "none",
    "borderStyle": "none",

    "background": "#ffff",
    "borderRadius": "20px",

    "outline": 0,
    "& fieldset": {
      borderRadius: "20px",
    },
  })
);
export const StyledDiv = styled("div")(
  sx({
    display: "flex",
    justifyContent: { md: "space-between", xs: "center" },
    marginTop: "10px",
    justifyItems: "center",
    gap: { xs: "10px", md: "0px" },
    width: { xs: "87%", sm: "40%", md: "30%", xl: "20%" },
  })
);
export const StyledDivButton = styled(Button)(
  sx({
    "border": "#1D67CD",
    "borderRadius": "60px",

    "borderShadow": "1px #000000",
    "background": "#ffff",
    "color": "black",
    "opacity": "40%",

    "textDecorationColor": "whitesmoke",

    "width": "30%",
    "fontFamily": "serif",

    "textTransform": "none",
    "&:hover": {
      background: "#689ADE",
    },
  })
);
