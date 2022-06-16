import {
  Paper,
  Button,
  Typography,
  Avatar,
  AppBar,
  TextField,
  InputAdornment,
  IconButton,
  Menu,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";

export const CustomSelect = styled(Select)(
  sx({
    ".MuiSelect-iconOutlined": {
      color: "black",
    },

    ".MuiSelect-outlined": {
      background: "white",
      color: "black",
      border: "white ",
      borderRadius: "20px",
    },
    "outline": 0,
    "& fieldset": {
      border: "white ",
    },
  })
);
export const StyledDiv = styled("div")(
  sx({
    position: { xs: "absolute", md: "relative" },
    right: { xs: "9%", md: "0" },
  })
);
export const StyledTypography = styled(Typography)(
  sx({
    fontSize: { xs: "0.8rem", md: "1rem" },
  })
);
