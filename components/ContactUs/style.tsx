import { makeStyles, withStyles } from "@mui/styles";
import {
  Paper,
  Button,
  Typography,
  Avatar,
  AppBar,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";

export const CustomDiv = styled("div")(
  sx({
    width: { xs: "200%", sm: "100%" },
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    padding: "2rem",
    gap: "50px",

    alignItems: "start",
  })
);
export const CustomInfo = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: { xs: "100%", md: "40%" },
  })
);
export const CustomBtn = styled(Button)(
  sx({
    "width": { xs: "100%", md: "150px" },
    "textTransform": "none",
    "background": "green",

    "&:hover": {
      background: "green",
    },
  })
);
export const CustomTypography = styled(Typography)(
  sx({
    color: "grey",
    fontSize: "1rem",
  })
);
export const CustomTextDiv = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: { xs: "100%", md: "40%" },
  })
);
export const CustomTextArea = styled(TextareaAutosize)(sx({}));
export const CustomTextField = styled(TextField)(sx({}));
export const CustomHeader = styled(Typography)(
  sx({
    marginLeft: "7%",
    fontSize: "2rem",
    fontWeight: "bold",
    marginTop: "130px",
  })
);
