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
export const DurationDiv = styled("div")(
  sx({
    display: "table",
    flexDirection: "column",

    justifyContent: "space-betweeen",
    alignItems: "flex-start",
    justifyItems: "flex-start",
    marginTop: "30px",

    width: { xs: "100%", md: "80%" },
  })
);
export const DurationGroup = styled("div")(
  sx({
    display: "table-row-group",
  })
);
export const TableCells = styled("div")(
  sx({
    display: "table-cell",
    paddingLeft: "2px",

    verticalAlign: "top",
  })
);
export const DurationSubDiv = styled("div")(
  sx({
    display: "table-row;",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    padding: "0.1rem",
    width: "100%",
  })
);

export const DurationTypography = styled(Typography)(
  sx({
    "fontSize": "1rem !important",
    "paddingTop": "1rem",
    "color": "grey",
    "&:hover": {
      color: "green",
      cursor: "pointer",
    },
  })
);
export const DurationTypography1 = styled(Typography)(
  sx({
    fontSize: "1rem !important",
    color: "black",
    fontWeight: "bold",
  })
);

export const StyledTypography = styled(Typography)(
  sx({
    position: "relative",
    top: "40%",
    color: "white",
    fontFamily: "serif",
  })
);
export const CustomFooterText = styled(Typography)(
  sx({
    color: "white",
    fontFamily: "serif",
    fontSize: "0.8rem",
  })
);
export const StyledTextField = styled(TextField)(
  sx({
    background: "white",
    width: "30%",

    marginTop: "1%",
    borderRadius: "10px",
  })
);
export const StyledButton = styled(Button)(
  sx({
    color: "white",
    borderColor: "grey",

    marginTop: "1%",
    width: "10%",
    height: "40px",
    textTransform: "none",
  })
);

export const CustomFooterBackgroundDiv = styled(AppBar)(
  sx({
    justifyContent: "center",
    position: "relative",

    display: "flex",
    background: "white",
    opacity: "90%",
    marginTop: "30px",

    width: { xs: "110%", sm: "100%", md: "100%" },
  })
);
