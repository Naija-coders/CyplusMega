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

export const mainStyleDiv = styled("div")(
  sx({
    width: "100%",
    height: "300px",
    background:
      "linear-gradient(164.22deg, #23395D 11.02%, rgba(16, 101, 240, 0) 112.14%) !important",
  })
);
export const StyledButton = styled(Button)(
  sx({
    "width": "50%",
    "color": "white",
    "fontFamily": "serif",
    "textTransform": "none",
    "marginLeft": "10px",
    "background": "#F68B1E",
    "&:hover": {
      background: "#FFA500",
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
    fontSize: { xs: "1rem", md: "20px" },
    textAlign: "left",
    marginLeft: "10px",
  })
);
export const StyledTextField = styled(TextField)(
  sx({
    "minWidth": { xs: "80%", sm: "50%", md: "30%" },
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
    justifyContent: "space-between",
    marginTop: "10px",
    justifyItems: "center",
    width: { xs: "80%", sm: "40%", md: "30%" },
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
