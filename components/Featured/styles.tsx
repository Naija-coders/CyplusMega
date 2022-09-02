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

export const StyledDiv = styled("div")(
  sx({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "-50px",
  })
);
export const MainDivs = styled("div")(
  sx({
    display: "grid",
    flexDirection: "row",
    gridTemplateColumns: {
      sm: "auto ",
      md: "auto auto auto ",
      lg: "auto auto auto auto",
    },
    gap: "10px",

    alignItems: "start",
  })
);

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
    fontSize: { md: "30px", lg: "39px" },
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
    minHeight: "180px",
    width: { sm: "100%", md: "100%", lg: "239.63px" },
    minWidth: "100px",
    boxShadow:
      " 38.1882px 0px 66.8293px rgba(121, 121, 121, 0.05), -38.1882px 95.4704px 66.8293px rgba(121, 121, 121, 0.05);",
    padding: "2rem",
    display: "flex",
    flexDirection: "Column",
    justifyContent: "center",
    gap: "1rem",
  })
);

export const StyledImages = styled("img")(
  sx({
    width: { sm: "400px", md: "500px", lg: "709.06px" },
    height: "360px",
    objectFit: "contain",
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
export const AccessPaper = styled(Paper)(
  sx({
    minHeight: "150.05px",
    width: "375.67px",
    padding: "1rem",
    boxShadow:
      "28.1403px 0px 49.2456px rgba(123, 67, 67, 0.07), -28.1403px 70.3508px 49.2456px rgba(122, 79, 79, 0.07)",
    borderRadius: " 12.0852px",
  })
);
export const BasicIDiv = styled("div")(
  sx({
    marginLeft: { md: "-50px", lg: "-100px" },
    marginTop: "40px",
    width: "424px",
  })
);
export const BasicPaper = styled(Paper)(
  sx({
    minHeight: "315.4px",
    width: { sm: "260.4px", md: "280px", lg: "300.4px" },
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
export const BasicTextQuote = styled(Typography)(
  sx({
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "1.2rem",
    lineHeight: "37px",
    color: "#747582",
  })
);
export const BasicTextTestimonials = styled(Typography)(
  sx({
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "0.9rem",

    color: "#BBBBBB",
  })
);
export const BasicTextTestimonialsTitle = styled(Typography)(
  sx({
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "0.9rem",

    color: "#34A422",
  })
);
export const BasicServiceButton = styled(Button)(
  sx({
    width: "146.68px",
    height: "59.69",
    border: "1.08524px solid #80CC28",
    borderRadius: "86.8191px",
    background: "#ffffff",
    color: "#747582",
    textTransform: "none",
  })
);

export const BasicServiceDiv = styled("div")(
  sx({
    display: "flex",
    flexDirection: "column",
    width: "300.4px",
    justifyItems: "center",
    height: "315.4px",
    justifyContent: "center",
    padding: "1rem",
    gap: "1rem",
  })
);
export const BasicServiceGrid = styled("div")(
  sx({
    display: "grid",
    gridTemplateColumns: "auto auto auto ",
    rowGap: "30px",
    columnGap: { sm: "20px", lg: "1px" },
  })
);
export const StyledQuote = styled("span")(
  sx({
    fontSize: "32px",
    color: "#FB3F6C",
    fontFamily: "cursive",
  })
);
export const BasicStyledPaper = styled(Paper)(
  sx({
    minHeight: "150.05px",
    width: "375.67px",
    padding: "1rem",
    boxShadow:
      "28.1403px 0px 49.2456px rgba(123, 67, 67, 0.07), -28.1403px 70.3508px 49.2456px rgba(122, 79, 79, 0.07)",
    borderRadius: " 12.0852px",
  })
);
export const BasicAccessPaper = styled(Paper)(
  sx({
    width: "288.3px",
    marginTop: "30px",
    padding: "1rem",
    minHeight: "150.05px",
    boxShadow:
      "18.5991px 0px 32.5483px rgba(123, 67, 67, 0.07), -18.5991px 46.4976px 32.5483px rgba(122, 79, 79, 0.07)",
    borderRadius: " 12.0852px",
  })
);
export const BasicAccessPaper2 = styled(Paper)(
  sx({
    width: "288.3px",
    marginTop: "30px",
    minHeight: "150.05px",

    boxShadow:
      "22.6722px 0px 39.6763px rgba(123, 67, 67, 0.07), -22.6722px 56.6804px 39.6763px rgba(122, 79, 79, 0.07)",
    borderRadius: " 12.0852px",
    padding: "1rem",
  })
);
export const BasicCutomDiv = styled("div")(
  sx({
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    alignItems: "center",
    marginTop: "0.5rem",
  })
);
