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
    objectFit: "contain",
    marginTop: { xs: "30px", md: "-10px" },
    height: "20%",
  })
);

export const Div1 = styled("div")(
  sx({
    display: "flex",
    flexDirection: "row",
    gap: "30px",
    position: "absolute",
    top: { xs: "450px", sm: "400px", md: "500px", lg: "550px" },

    zIndex: 1,
  })
);
export const Div2 = styled("div")(
  sx({
    width: { xs: "250px", sm: "450px", md: "500px", lg: " 643px" },
  })
);

//for typography

export const CustomTypography = styled(Typography)(
  sx({
    fontSize: { xs: "20px", sm: "30px", md: "40px", lg: "60px" },
    fontStyle: "bold",
    color: " #FFFFFF",
    position: "relative",

    top: { xs: "150px", sm: "100px", md: "200px", lg: "200px" },
    width: { md: "600px", sm: "400px", lg: "915px" },
    height: "182px",
    lineHeight: { md: "60px", lg: "91px" },
    textAlign: "left",

    textShadow: " 0px 4px 10px rgba(0, 0, 0, 0.25)",
  })
);
export const BannerImage = styled("img")(
  sx({
    height: { md: "100px" },
    objectFit: "contain",
    background:
      "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(0, 0, 0, 0.5) 54.51%)",
  })
);
export const CustomImage = styled("div")(
  sx({
    height: { xs: "400px", sm: "400px", md: "500px", lg: "580px", xl: "900px" },
    background:
      "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(0, 0, 0, 0.5) 54.51%)",
  })
);

export const StyledCustomDivBanner = styled("div")(
  sx({
    width: { xs: "110%", md: "100%", height: "90%" },
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
export const StyledTextFieldSearch = styled(TextField)(
  sx({
    "minWidth": {
      xs: "84%",
      sm: "100%",
      md: "90%",
      lg: "90%",
      xl: "90%",
    },
    "border": "none",
    "borderStyle": "none",
    "display": { xs: "flex", md: "flex", lg: "flex", xl: "flex" },

    "background": "#ffff",
    "borderRadius": "30px",

    "outline": 0,
    "& fieldset": {
      borderRadius: "30px",
    },
    "& .MuiInputBase-root": {
      height: { xs: "45px", md: "70px" },
    },
    "& input::placeholder": {
      fontSize: { xs: "1rem", md: " 20px" },
      paddingLeft: "1rem",
      fontFamily: "DM Sans",
    },
  })
);
export const GetStartedBtn = styled(Button)(
  sx({
    fontWeight: "bold",
    width: { xs: "30%", lg: "213.5px" },
    height: { xs: "45px", md: "70px" },

    borderRadius: "195.2px",
    border: " 3px solid rgba(255, 255, 255, 0.8)",
    filter: " drop-shadow(0px 30.5px 50.8333px rgba(168, 22, 75, 0.15))",
    textTransform: "none",
    fontFamily: "DM Sans",
    color: "#FFFFFF",
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

export const StyledDivBanner = styled("div")(
  sx({
    width: { xs: "185%", sm: "100%" },
    marginTop: { xs: "80px", md: "3%" },
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
