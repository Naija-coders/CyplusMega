import { makeStyles, withStyles } from "@mui/styles";
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
  Divider,
} from "@mui/material";
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

export const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "black",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "black",
    minWidth: "99.5vw",
    padding: "1rem",
  },
}));
export const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",

    boxShadow: " 1px 1px #888888",
    fontSize: 11,
  },
}));
export const StyledTypography = styled(Typography)(
  sx({
    color: "#222325",

    fontFamily: "GeoticaW01-FourOpen",
    fontSize: { xs: "1.3rem", md: "2rem" },
  })
);
export const Tooltipdiv = styled("div")(
  sx({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    gap: "30px",
  })
);
export const MobileMenu = styled(IconButton)(
  sx({
    display: { xs: "flex", md: "none" },
    alignSelf: "center",
  })
);
export const ResponsiveDiv = styled("div")(
  sx({
    display: { xs: "none", sm: "none", md: "flex" },
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
  })
);
export const StyledQuote = styled(Typography)(
  sx({
    fontSize: "40px",
    color: "#221133",
    fontFamily: "cursive",
  })
);
export const MainText = styled(Typography)(
  sx({
    color: "#221133",
    fontSize: "14px",
  })
);
export const TooltipButton = styled(Button)(
  sx({
    "background": "green",
    "&:hover": {
      background: "green",
    },
  })
);
export const TooltipText = styled(Typography)(
  sx({
    "color": "#fff",
    "fontSize": "0.7rem !important",
    "&:hover": {
      color: "green",
      textDecoration: "underline",
      cursor: "pointer",
    },
  })
);

export const StyledCaption = styled(Typography)(sx({}));
export const StyledAppBar = styled(AppBar)(
  sx({
    justifyContent: "center",

    display: { xs: "none", md: "flex" },
    background: "white",
    opacity: "100%",

    width: { xs: "none", sm: "100%", md: "100%" },
  })
);
export const MyAppBar = styled(AppBar)(
  sx({
    display: "flex",
    background: "white",
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "1rem 2rem",
  })
);
//BUTTON MAIN COLOR IS #F68B1E
export const StyledSearchSubmitButton = styled(Button)(
  sx({
    "color": "white",
    "textTransform": "none",
    "height": "40px",

    "background": "#F68B1E",
    "&:hover": {
      background: "#F68B1E",
    },
  })
);
export const StyledTextField = styled(TextField)(
  sx({
    minWidth: "40%",
    color: "#222325",
  })
);
export const StyledButton = styled(Button)(
  sx({
    display: { xs: "none", md: "flex" },
    color: "#222325",
    textTransform: "none",
  })
);

export const Styledpaper = styled(Paper)(
  sx({
    "height": 500,
    "width": 300,
    "position": "relative",

    "borderRadius": "10px",
    "&:hover": {
      elevation: "19%",
      height: 400,
      cursor: "pointer",
      boxShadow: 20,
    },
  })
);
export const StyledLoginIcon = styled(IconButton)(
  sx({
    display: { xs: "flex", sm: "flex", md: "none", lg: "none", xl: "none" },
  })
);

export const Wrapper = styled("div")(
  sx({ width: "90%", marginLeft: "10%", marginTop: "4%" })
);
export const StyledProfile = styled("div")(
  sx({
    justifyContent: "spaced-evenly",
    alignItems: "self",

    display: "flex",
    left: "10%",
    position: "absolute",
    bottom: "40px",
  })
);
export const CustomDivider = styled(Divider)(
  sx({
    width: "100%",
  })
);
export const StyledTitle = styled("div")(
  sx({
    justifyContent: "spaced-evenly",
    alignItems: "center",

    display: "flex",
    left: "26%",
    position: "absolute",
    bottom: "40px",
  })
);

export const StyledDiv = styled("div")(
  sx({
    display: "flex",

    width: "100%",

    justifyContent: "right",
    justifyItems: "end",
    gap: "10px",

    alignItems: "center",
  })
);
export const StyledMainButton = styled(Button)(
  sx({
    "display": { xs: "none", md: "flex" },

    "height": "40px",
    "borderStyle": "solid",
    "borderRadius": "20px",
    "fontFamily": "Avenir Light",
    "textTransform": "none",
    "background": "#222325",
    "color": "white",
    "fontSize": "13px",
    "&:hover": {
      background: "white",
      color: "#222325",
    },
  })
);
export const StyledIconButton = styled(IconButton)(
  sx({
    display: { xs: "none", md: "flex" },
  })
);
export const StyledMenu = styled(Menu)(
  sx({
    display: { xs: "none", md: "flex" },
  })
);
