import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";
import {
  Paper,
  Button,
  Typography,
  Avatar,
  AppBar,
  TextField,
} from "@mui/material";

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
    "borderRadius": "10px",

    "outline": 0,
    "& fieldset": {
      borderRadius: "10px",
    },
  })
);
