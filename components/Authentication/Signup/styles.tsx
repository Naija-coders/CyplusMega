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
    "width": { xs: "95%", md: "400px" },

    "color": "white",

    "textTransform": "none",
    "boxShadow": "  0px 1px 0px 1px #888888",
    "marginTop": "15px",
    "background": "	green",
    "&:hover": {
      background: "green",
    },
  })
);
export const ContainerDiv = styled("div")(
  sx({
    marginTop: "11%",
    width: { xs: "100%", sm: "100%" },
  })
);
export const StyledDiv = styled("div")(
  sx({
    width: { xs: "90%", md: "400px" },
    display: "flex",
    justifyItems: "flex-start",

    flexDirection: "row",
    marginTop: "10px",
  })
);
export const StyledButtonGoogle = styled(Button)(
  sx({
    "width": "35%",

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
    "width": { xs: "95%", md: "400px" },

    "marginTop": "10px",

    "color": "white",
    "borderRadius": "10px",

    "textTransform": "none",

    "outline": 0,
    "& fieldset": {
      borderColor: "green",
    },
  })
);
export const StyledBox = styled(Box)(
  sx({
    marginTop: "150px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    width: { xs: "120%", md: "100%" },
  })
);
export const StyleCheckoutButton = styled(Button)(
  sx({
    "width": "80%",
    "color": "white",
    "marginTop": "30px",
    "borderRadius": "13px",
    "textTransform": "none",
    "background": "#152238",
    "borderShadow": " 0px 0px 0px 10px grey",

    "&:hover": {
      background: "#035772",
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
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: "black",
  })
);
