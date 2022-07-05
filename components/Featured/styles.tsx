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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
interface StyledTabsProps {
  children?: React.ReactNode;
  value: any;
  onChange: any;
  variant: any;
  scrollButtons: any;
}
interface StyledTabProps {
  label?: string;
  value?: string;
}
export const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  "textTransform": "none",

  "marginRight": theme.spacing(1),
  "color": "black",
  "fontWeight": "bold",
  "fontSize": "1rem",
  "&.Mui-selected": {
    color: "green",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));

export const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    minHeight: "5px",
  },

  "& .MuiTabs-indicatorSpan": {
    width: "80%",
    backgroundColor: "green",
  },
});
