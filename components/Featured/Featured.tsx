import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomCardFeature from "./CustomCardFeature";
import { RootState } from "../../state/reducers";
import { useDispatch, useSelector } from "react-redux";
import { StyledTabs, StyledTab } from "./styles";
import { CustomContainer, CustomDivContainer } from "../TopCategories/styles";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import StarBorder from "@mui/icons-material/StarBorder";
import Search from "../Search/Search";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface LinkTabProps {
  label?: string;
  onClick?: any;
  value?: any;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {}}
      sx={{
        "textTransform": "none",

        "marginRight": "20px",
        "color": "grey",
        "&.Mui-selected": {
          color: "#152238",
        },
        "&.Mui-focusVisible": {
          backgroundColor: "rgba(100, 95, 228, 0.32)",
        },
      }}
      {...props}
    />
  );
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

export default function Featured() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [servicetype, setServicetype] = React.useState<any>();

  const [servicecleaning, setServicecleaning] = React.useState<any>();
  const [servicebuilding, setServicebuilding] = React.useState<any>();
  const [servicemanufacturing, setServicemanufacservicemanufacturing] =
    React.useState<any>();
  const [servicelandspacing, setServicelandspacing] = React.useState<any>();
  const state = useSelector((state: RootState) => state.appstate);

  const HandleFilter = () => {
    const types = state.mainservices.filter(
      (items: any) => items?.type == "IT Services"
    );
    setServicetype(types);
  };
  const handleFilterCleaning = () => {
    const types = state.mainservices.filter(
      (items: any) => items?.type == "Cleaning Services"
    );
    setServicecleaning(types);
  };
  const handleFilterBuilding = () => {
    const types = state.mainservices.filter(
      (items: any) => items?.type == "Building & Trade Services"
    );
    setServicebuilding(types);
  };
  const handleManufacturing = () => {
    const types = state.mainservices.filter(
      (items: any) => items?.type == "Manufacturing Services"
    );
    setServicemanufacservicemanufacturing(types);
  };

  const handleLandspacing = () => {
    const types = state.mainservices.filter(
      (items: any) => items?.type == "Landspacing & Gardening Services"
    );
    setServicelandspacing(types);
  };
  React.useEffect(() => {
    HandleFilter();
    handleFilterCleaning();
    handleFilterBuilding();
    handleManufacturing();
    handleLandspacing();
  }, [servicetype, servicecleaning, servicebuilding, servicemanufacturing]);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const RenderMobile = () => {
    return (
      <List
        sx={{
          width: "200%",
          display: { sm: "none" },
          maxWidth: "200%",
          bgcolor: "background.paper",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <br></br>
        <Divider />
        <ListItemButton>
          <ListItemText>
            <Typography sx={{ fontSize: "1.5rem" }}>IT Services</Typography>
          </ListItemText>
          {open ? (
            <ExpandLess sx={{ fontSize: "1.5rem" }} />
          ) : (
            <ExpandMore sx={{ fontSize: "1.5rem" }} />
          )}
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText>
            <Typography sx={{ fontSize: "1.5rem" }}>
              Cleaning Services
            </Typography>
          </ListItemText>

          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText>
            <Typography sx={{ fontSize: "1.5rem" }}>
              Building and Trade Services
            </Typography>
          </ListItemText>

          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText>
            <Typography sx={{ fontSize: "1.5rem" }}>
              Manufacturing Services
            </Typography>
          </ListItemText>

          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText>
            <Typography sx={{ fontSize: "1.5rem" }}>
              Landscaping & Gardening Services
            </Typography>
          </ListItemText>

          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </List>
    );
  };
  return (
    <div>
      <RenderMobile />

      <Box
        sx={{
          width: "100%",
          display: { xs: "none", sm: "block" },
          marginTop: { md: "20px" },
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <StyledTabs
            variant="scrollable"
            scrollButtons="auto"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ marginLeft: { md: "5%", lg: "5%", xl: "9%" } }}
          >
            <StyledTab label="IT Services" {...a11yProps(0)} />
            <StyledTab label="Cleaning Services" {...a11yProps(1)} />

            <StyledTab label="Building and Trade Services" {...a11yProps(2)} />
            <StyledTab label="Manufacturing Services" {...a11yProps(3)} />
            <StyledTab
              label="Landspacing &  Gardening Services"
              {...a11yProps(4)}
            />
          </StyledTabs>
        </Box>
        <TabPanel value={value} index={0}>
          <CustomContainer>
            <CustomDivContainer>
              <div style={{ marginLeft: "4%" }}>
                {servicetype?.length <= 0 ? (
                  <div>
                    <Typography align="center">
                      {"There's no IT Services at the moment"!}
                    </Typography>
                  </div>
                ) : (
                  <>
                    <CustomCardFeature data={servicetype} />
                  </>
                )}
              </div>
            </CustomDivContainer>
          </CustomContainer>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CustomContainer>
            <CustomDivContainer>
              <div style={{ marginLeft: "4%" }}>
                {servicecleaning?.length <= 0 ? (
                  <div>
                    <Typography align="center">
                      {" There's no Cleaning Services at the moment!"}
                    </Typography>
                  </div>
                ) : (
                  <>
                    <CustomCardFeature data={servicecleaning} />
                  </>
                )}
              </div>
            </CustomDivContainer>
          </CustomContainer>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CustomDivContainer>
            <div style={{ marginLeft: "4%" }}>
              {servicebuilding?.length <= 0 ? (
                <div>
                  <Typography align="center">
                    {
                      " There's no Building and Trade Services services at the moment!"
                    }
                  </Typography>
                </div>
              ) : (
                <>
                  <CustomCardFeature data={servicebuilding} />
                </>
              )}
            </div>
          </CustomDivContainer>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <CustomDivContainer>
            <div style={{ marginLeft: "4%" }}>
              {servicemanufacturing?.length <= 0 ? (
                <div>
                  <Typography align="center">
                    {"There's no Manufacturing Services at the moment!"}
                  </Typography>
                </div>
              ) : (
                <>
                  <CustomCardFeature data={servicemanufacturing} />
                </>
              )}
            </div>
          </CustomDivContainer>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <CustomDivContainer>
            <div style={{ marginLeft: "4%" }}>
              {servicelandspacing?.length <= 0 ? (
                <div>
                  <Typography align="center">
                    {
                      " There's no Landspacing and Gardening Services at the moment!"
                    }
                  </Typography>
                </div>
              ) : (
                <>
                  <CustomCardFeature data={servicelandspacing} />
                </>
              )}
            </div>
          </CustomDivContainer>
        </TabPanel>
      </Box>
    </div>
  );
}
