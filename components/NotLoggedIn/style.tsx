import { makeStyles, withStyles } from "@mui/styles";
import {
  Paper,
  Button,
  Typography,
  Avatar,
  AppBar,
  TextField,
  Box,
} from "@mui/material";
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";
//for container use width 100%
//maxwidth 1500px
export const StyledBox = styled(Box)(
  sx({
    boxSizing: "border-box",
    paddingRight: "100px",
    paddingLeft: "100px",
    paddingTop: "2rem",
    paddingBottom: "1rem",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  })
);

export const StyledBoxFooter = styled(Box)(
  sx({
    boxSizing: "border-box",
    paddingRight: "100px",
    paddingLeft: "100px",
    paddingTop: "2rem",
    background: "#34A422",
    paddingBottom: "2rem",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  })
);
export const FooterTypo = styled(Typography)(
  sx({
    fontSize: "1rem",
    color: "#F3F3F3",
    fontFamily: "DM Sans",
  })
);
export const FooterHeader = styled(Typography)(
  sx({
    fontSize: "1.3rem",
    color: "#FFFFFF",
    fontWeight: "700",
    fontFamily: "DM Sans",
  })
);
export const StyledTextField = styled(TextField)(
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
      height: { xs: 70, md: "100%" },
    },
    "& input::placeholder": {
      fontSize: { xs: "30px", sm: "0.7rem" },
      paddingLeft: "1rem",
    },
  })
);
