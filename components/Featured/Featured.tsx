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
import CustomCard from "../CustomCard";

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
  const [serviceevent, setServiceevent] = React.useState<any>();
  const [servicehealth, setServicehealth] = React.useState<any>();
  const state = useSelector((state: RootState) => state.appstate);

  const HandleFilter = () => {
    const types = state.mainservices.filter(
      (items: any) => items?.type == "IT Services"
    );
    setServicetype(types);
  };
  const HandleFilterEvent = () => {
    const types = state.mainservices.filter(
      (items: any) => items?.type == "Event Services"
    );
    setServiceevent(types);
  };
  const HandleFilterHealth = () => {
    const types = state.mainservices.filter(
      (items: any) => items?.type == "Health & Beauty Services"
    );
    setServicehealth(types);
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
    HandleFilterEvent();
    HandleFilterHealth();
  }, [
    servicetype,
    servicecleaning,
    servicebuilding,
    servicemanufacturing,
    serviceevent,
  ]);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const [itservice, setItservice] = React.useState(true);
  const [cleaningservices, setCleaningservices] = React.useState(false);
  const [eventservices, setEventServices] = React.useState(false);
  const [manufacturingservices, setManufacturingservices] =
    React.useState(false);
  const [healthservices, setHealthservices] = React.useState(false);

  const handleClickItservices = () => {
    setItservice(!itservice);
  };
  const handleClickCleaning = () => {
    setCleaningservices(!cleaningservices);
  };
  const handleClickEvent = () => {
    setEventServices(!eventservices);
  };
  const handleClickManufacturing = () => {
    setManufacturingservices(!manufacturingservices);
  };
  const handleClickHealth = () => {
    setHealthservices(!healthservices);
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
        <ListItemButton onClick={handleClickItservices}>
          <ListItemText>
            <Typography
              sx={{
                fontSize: "1.5rem",
                padding: "1rem 0rem",
                fontWeight: "bold",
              }}
            >
              IT Services
            </Typography>
          </ListItemText>
          {itservice ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={itservice} timeout="auto" unmountOnExit>
          <div
            style={{
              padding: "0rem 1rem",
              overflow: "scroll",
              display: "flex",
              gap: "20px",
            }}
          >
            {servicetype?.length <= 0 ? (
              <div>
                <Typography align="center">
                  {"There's no IT Services at the moment"!}
                </Typography>
              </div>
            ) : (
              <>
                {servicetype?.slice(0, 9).map((item: any, i: any) => {
                  return (
                    <CustomCard
                      id={item.id}
                      name={item.name}
                      type={item.type}
                      about={item.about}
                      price={item.price}
                      updated_at={item.updated_at}
                    ></CustomCard>
                  );
                })}
              </>
            )}
            <br></br>
          </div>
        </Collapse>
        <Divider />
        <ListItemButton onClick={handleClickCleaning}>
          <ListItemText>
            <Typography
              sx={{
                fontSize: "1.5rem",
                padding: "1rem 0rem",
                fontWeight: "bold",
              }}
            >
              Cleaning Services
            </Typography>
          </ListItemText>

          {cleaningservices ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={cleaningservices} timeout="auto" unmountOnExit>
          <div
            style={{
              padding: "0rem 1rem",
              overflow: "scroll",
              display: "flex",
              gap: "20px",
            }}
          >
            {servicecleaning?.length <= 0 ? (
              <div>
                <Typography align="center">
                  {"There's no Cleaning Services at the moment"!}
                </Typography>
                <br></br>
              </div>
            ) : (
              <>
                {servicecleaning?.slice(0, 9).map((item: any, i: any) => {
                  return (
                    <CustomCard
                      id={item.id}
                      name={item.name}
                      type={item.type}
                      about={item.about}
                      price={item.price}
                      updated_at={item.updated_at}
                    ></CustomCard>
                  );
                })}
              </>
            )}
            <br></br>
          </div>
        </Collapse>
        <Divider />
        <ListItemButton onClick={handleClickEvent}>
          <ListItemText>
            <Typography
              sx={{
                fontSize: "1.5rem",
                padding: "1rem 0rem",
                fontWeight: "bold",
              }}
            >
              Event Services
            </Typography>
          </ListItemText>

          {eventservices ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={eventservices} timeout="auto" unmountOnExit>
          <div
            style={{
              padding: "0rem 1rem",
              overflow: "scroll",
              display: "flex",
              gap: "20px",
            }}
          >
            {serviceevent?.length <= 0 ? (
              <div>
                <Typography align="center">
                  {"There's no Event Services at the moment"!}
                </Typography>
                <br></br>
              </div>
            ) : (
              <>
                {serviceevent?.slice(0, 9).map((item: any, i: any) => {
                  return (
                    <CustomCard
                      id={item.id}
                      name={item.name}
                      type={item.type}
                      about={item.about}
                      price={item.price}
                      updated_at={item.updated_at}
                    ></CustomCard>
                  );
                })}
              </>
            )}
            <br></br>
          </div>
        </Collapse>
        <Divider />
        <ListItemButton onClick={handleClickManufacturing}>
          <ListItemText>
            <Typography
              sx={{
                fontSize: "1.5rem",
                padding: "1rem 0rem",
                fontWeight: "bold",
              }}
            >
              Manufacturing Services
            </Typography>
          </ListItemText>

          {manufacturingservices ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={manufacturingservices} timeout="auto" unmountOnExit>
          <div
            style={{
              padding: "0rem 1rem",
              overflow: "scroll",
              display: "flex",
              gap: "20px",
            }}
          >
            {servicemanufacturing?.length <= 0 ? (
              <div>
                <Typography align="center">
                  {"There's no Manufacturing Services at the moment"!}
                </Typography>
                <br></br>
              </div>
            ) : (
              <>
                {servicemanufacturing?.slice(0, 9).map((item: any, i: any) => {
                  return (
                    <CustomCard
                      id={item.id}
                      name={item.name}
                      type={item.type}
                      about={item.about}
                      price={item.price}
                      updated_at={item.updated_at}
                    ></CustomCard>
                  );
                })}
              </>
            )}
            <br></br>
          </div>
        </Collapse>
        <Divider />
        <ListItemButton onClick={handleClickHealth}>
          <ListItemText>
            <Typography
              sx={{
                fontSize: "1.5rem",
                padding: "1rem 0rem",
                fontWeight: "bold",
              }}
            >
              Healthy & Beauty Services
            </Typography>
          </ListItemText>

          {healthservices ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={healthservices} timeout="auto" unmountOnExit>
          <div
            style={{
              padding: "0rem 1rem",
              overflow: "scroll",
              display: "flex",
              gap: "20px",
            }}
          >
            {servicehealth?.length <= 0 ? (
              <div>
                <Typography align="center">
                  {"There's no Healthy & Beauty Services at the moment"!}
                </Typography>
                <br></br>
              </div>
            ) : (
              <>
                {servicehealth?.slice(0, 9).map((item: any, i: any) => {
                  return (
                    <CustomCard
                      id={item.id}
                      name={item.name}
                      type={item.type}
                      about={item.about}
                      price={item.price}
                      updated_at={item.updated_at}
                    ></CustomCard>
                  );
                })}
              </>
            )}
            <br></br>
          </div>
        </Collapse>
        <Divider />
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
