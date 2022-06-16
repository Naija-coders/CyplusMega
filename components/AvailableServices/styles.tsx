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

export const StyledTypography = styled(Typography)(
  sx({
    marginTop: "30px",
  })
);
export const CustomContainer = styled("div")(
  sx({
    display: " flex",
    marginLeft: { md: "5%", lg: "0%", xl: "5%" },
    flexDirection: " column",
  })
);
export const CustomDivContainer = styled("div")(
  sx({
    width: { md: "95%", lg: "93%", xl: "93%" },
  })
);

export const StyledLink = styled(Link)(
  sx({
    "&:hover": {
      color: "blue",
    },
  })
);

export const StyledCard = styled(Card)(
  sx({
    "cursor": "pointer",
    "borderRadius": "10px",
    "marginTop": "5px",

    "&:hover": {
      boxShadow: " 0px 2px 12px -1px #565454;",
    },
  })
);
export const StyledBox = styled(Box)(
  sx({
    width: "100%",
    marginTop: "3%",
  })
);
export const StyledCustomTypography = styled(Typography)(
  sx({
    fontSize: "24px",
    font: "Macan,Helvetica Neue,Helvetica,Arial,sans-serif",

    color: "#222325e",
  })
);
