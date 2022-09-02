import { makeStyles, withStyles } from "@mui/styles";
import {
  Paper,
  Button,
  Typography,
  Box,
  Avatar,
  AppBar,
  TextField,
  Divider,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";

export const StyledButton = styled(Button)(
  sx({
    "width": "80%",

    "color": "white",
    "borderRadius": "13px",
    "textTransform": "none",
    "boxShadow": "  0px 1px 0px 1px #888888",
    "background": "	#4267B2",
    "&:hover": {
      background: "blue",
    },
  })
);
export const StyledButtonGoogle = styled(Button)(
  sx({
    "width": "80%",

    "color": "black",
    "borderRadius": "13px",
    "textTransform": "none",
    "background": "whitesmoke",

    "boxShadow": "  0px 1px 0px 1px #888888",
    "&:hover": {
      background: "white",
    },
  })
);
export const CustomDivider = styled(Divider)(
  sx({
    width: "80%",
    marginTop: "40px",
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
    "border": "1px solid #334155",
    "borderStyle": "none",
    "display": { xs: "flex", md: "flex", lg: "flex", xl: "flex" },

    "background": "#ffff",
    "borderRadius": "30px",

    "outline": 0,
    "& fieldset": {
      borderRadius: "30px",
    },
    "& .MuiInputBase-root": {},
    "& input::placeholder": {
      paddingLeft: "1rem",
      fontFamily: "DM Sans",
    },
  })
);
export const StyledBox = styled(Box)(
  sx({
    width: "80%",
    marginTop: "30px",
  })
);
export const StyleCheckoutButton = styled(Button)(
  sx({
    "width": "80%",
    "color": "white",
    "marginTop": "30px",
    "borderRadius": "13px",
    "textTransform": "none",
    "background": "green",
    "borderShadow": " 0px 0px 0px 10px grey",

    "&:hover": {
      background: "green",
    },
  })
);
export const StyleLoadingButton = styled(LoadingButton)(
  sx({
    width: "80%",
    color: "white",
    marginTop: "30px",
    borderRadius: "13px",
    textTransform: "none",
    background: "#FFA500",
    borderShadow: " 5px 4px grey",
    boxShadow: " 5px 4px #888888",
  })
);
export const StyledTypography = styled(Typography)(
  sx({
    marginTop: "10px",
    fontFamily: "serif",
  })
);
