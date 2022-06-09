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
    "minWidth": { xs: "84%", sm: "100%", md: "300px", xl: "500px" },
    "border": "none",
    "borderStyle": "none",
    "display": { xs: "none", md: "flex" },

    "background": "#ffff",
    "borderRadius": "20px",
    "marginRight": "30px !important",

    "outline": 0,
    "& fieldset": {
      borderRadius: "20px",
    },
  })
);
