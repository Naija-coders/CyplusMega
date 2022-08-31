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
  onClick?: any;
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
export const BasicText = styled(Typography)(
  sx({
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "1rem",
    lineHeight: "24px",
    color: "#747582",
  })
);
export const BasicTextHeader = styled(Typography)(
  sx({
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "39px",
    lineHeight: "46px",
    color: "#34A422",
  })
);
export const BasicTextbody = styled(Typography)(
  sx({
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "1rem",

    lineHeight: "21px",
    color: "#747582",
  })
);
export const CustomPaper = styled(Paper)(
  sx({
    background: "#FFFFFF",
    height: "180px",
    width: "239.63px",
    boxShadow:
      " 38.1882px 0px 66.8293px rgba(121, 121, 121, 0.05), -38.1882px 95.4704px 66.8293px rgba(121, 121, 121, 0.05);",
    padding: "2rem",
    display: "flex",
    flexDirection: "Column",
    justifyContent: "center",
    gap: "1rem",
  })
);
export const BasicTextTitle = styled(Typography)(
  sx({
    fontFamily: "DM Sans",
    fontStyle: "bold",
    fontWeight: "700",
    fontSize: "1rem",
    lineHeight: "24px",
    color: "#14183E",
  })
);

export const BasicPaper = styled(Paper)(
  sx({
    height: "315.4px",
    width: "300.4px",
    filter: "drop-shadow(0px 21.5532px 53.8831px rgba(119, 115, 170, 0.1))",
    borderRadius: "21.5532px 21.5532px 21.5532px  21.5532px ",
  })
);
export const BasicImage = styled("img")(
  sx({
    height: "170.15px",
    width: "100%",
    borderRadius: "21.5532px 21.5532px 0px 0px",
    objectFit: "cover",
  })
);
export const BasicDiv = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
  })
);
export const BasicServiceTitle = styled(Typography)(
  sx({
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "1.5rem",
    lineHeight: "37px",
    color: "#282C4B;",
  })
);
