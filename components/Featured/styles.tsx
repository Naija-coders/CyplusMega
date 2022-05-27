import { makeStyles, withStyles } from "@mui/styles";
import {
  Paper,
  Button,
  Typography,
  Box,
  Avatar,
  AppBar,
  TextField,
  Card,
  Link,
  Divider,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";
import { BorderStyle } from "@mui/icons-material";

export const StyledDiv = styled("div")(
  sx({
    width: "80%",
    height: "100px",
    marginLeft: "30px",
    display: "flex",

    alignItems: "center",
  })
);
export const MobileDiv = styled("div")(
  sx({
    marginLeft: "30px",
    display: "flex",

    alignItems: "center",
  })
);
export const StyledTypography = styled(Typography)(
  sx({
    fontFamily: "EB Garamond",
    fontSize: { xs: "0.7rem", md: "24px" },
    color: "#ffff",
  })
);

export const StyledDivider = styled(Divider)(
  sx({
    width: "1px",
    border: "#ffff 1px",
    opacity: "100%",
    borderStyle: "solid ",
    marginLeft: "10%",
    height: "40px",
  })
);
