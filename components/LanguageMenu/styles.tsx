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
      color: "white",
    },

    ".MuiSelect-outlined": {
      background: "#152238",
      color: "white",
      border: "#152238 ",
      borderRadius: "20px",
    },
    "outline": 0,
    "& fieldset": {
      border: "#152238 ",
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
