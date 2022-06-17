import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { StyledTabs, StyledTab, StyledMainText } from "../styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    "id": `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

type Props = {
  overview: any;
  Description: any;
  About?: any;
  Reviews?: any;
};
const BasicTab: React.FC<Props> = ({
  overview,
  Description,
  About,
  Reviews,
}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", display: { xs: "none", md: "inherit" } }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="basic StyledTabs example"
        >
          <StyledTab label="Overview" {...a11yProps(0)} />
          <StyledTab label="Description" {...a11yProps(1)} />
          <StyledTab label="About seller" {...a11yProps(2)} />
          <StyledTab label="Reviews" {...a11yProps(3)} />
        </StyledTabs>
      </Box>
      <TabPanel value={value} index={0}>
        <StyledMainText>{overview}</StyledMainText>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StyledMainText>{Description}</StyledMainText>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <StyledMainText>{About}</StyledMainText>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <StyledMainText>{Reviews}</StyledMainText>
      </TabPanel>
    </Box>
  );
};

export default BasicTab;
