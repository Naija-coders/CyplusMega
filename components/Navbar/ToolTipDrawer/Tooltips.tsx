import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import {
  DurationDiv,
  DurationGroup,
  DurationSubDiv,
  DurationTypography1,
  DurationTypography,
  TableCells,
} from "../../Footer/styles";

const drawerWidth = 240;

type Props = {};

const CleaningService = () => {
  return (
    <>
      <DurationDiv>
        <DurationGroup>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography1>
                {"Residential Cleaning"}
              </DurationTypography1>
            </TableCells>
            <TableCells>
              <DurationTypography1>{"Commercial Cleaning"}</DurationTypography1>
            </TableCells>
            <TableCells>
              <DurationTypography1>{"Builder's Cleaning"}</DurationTypography1>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Mopping"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Janitorial Services"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Air vent  Cleaning"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Disinfect your Home"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Disinfection Cleaning"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>
                {"Windows & Frames Cleaning"}
              </DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Dust & Shine"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>
                {"Project-Based Cleaning"}
              </DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>
                {"Wiping of switches & outlets"}
              </DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>
                {"Laundry & Dry Cleaning"}
              </DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Pressure Washing"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>
                {"Packaging & Removal of debris"}
              </DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <br></br> <br></br>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography1>{"Upholstery Cleaning"}</DurationTypography1>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Steam Cleaning"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Sofa Cleaning"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Leather Cleaning"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
        </DurationGroup>
      </DurationDiv>
    </>
  );
};

const ItService = () => {
  return (
    <>
      <DurationDiv>
        <DurationGroup>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography1>{"Web Design"}</DurationTypography1>
            </TableCells>
            <TableCells>
              <DurationTypography1>{"Software Developer"}</DurationTypography1>
            </TableCells>
            <TableCells>
              <DurationTypography1>{"IT Consultant"}</DurationTypography1>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Ad Design"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>
                {"Mobile App Development"}
              </DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"IT Roadmap"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Logo Design"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"DevOps Automation"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Vendor Management"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"WordPress Support"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Cloud Consulting"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Project Management"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <br></br> <br></br>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography1>{"Hardware Developer"}</DurationTypography1>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Program Management"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"App Structure"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Systems Management"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>
                {"Application Architecture"}
              </DurationTypography>
            </TableCells>
          </DurationSubDiv>
        </DurationGroup>
      </DurationDiv>
    </>
  );
};

const AutomativeServices = () => {
  return (
    <>
      <DurationDiv>
        <DurationGroup>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography1>{"Automotive Industry"}</DurationTypography1>
            </TableCells>
            <TableCells>
              <DurationTypography1>{"Automobile Services"}</DurationTypography1>
            </TableCells>
            <TableCells>
              <DurationTypography1>{"Car Services"}</DurationTypography1>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Wholesaling parts"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Cooling System"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>
                {"Extension brake inspectio"}
              </DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Retailing parts"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Lubrication System"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>
                {"Air condioning inspection"}
              </DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>
                {"Maintenance of Motor Vehicles"}
              </DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Electrical System"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>
                {"Radiator & coolant hose check"}
              </DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Safety & Security"}</DurationTypography>
            </TableCells>
            <TableCells></TableCells>
          </DurationSubDiv>
          <br></br> <br></br>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography1>{"Vehicle Services"}</DurationTypography1>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>
                {"Wiper blade replacement"}
              </DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Oil replacement"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Fuel Fiter(diesel)"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Tire replacement"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Relace Air filter"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Scheduled Maintenance"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <br></br>
        </DurationGroup>
      </DurationDiv>
    </>
  );
};

const EventServices = () => {
  return (
    <>
      <DurationDiv>
        <DurationGroup>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography1>{"Event Management"}</DurationTypography1>
            </TableCells>
            <TableCells>
              <DurationTypography1>{"Event Planner"}</DurationTypography1>
            </TableCells>
            <TableCells>
              <DurationTypography1>
                {"Event design & Decor"}
              </DurationTypography1>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Conferences"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>
                {"Conception & Event planning services"}
              </DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Budgeting"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Concerts"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Location scouting"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Design proposal"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Festivals"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>
                {"Servcice bid & contract mangement"}
              </DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Decor setuo & styling"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Ceremonies"}</DurationTypography>
            </TableCells>
            <TableCells></TableCells>
            <TableCells>
              <DurationTypography>
                {"Vendor sourcing & curating"}
              </DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <br></br>
          <br></br>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography1>{"Corporate Events"}</DurationTypography1>
            </TableCells>
          </DurationSubDiv>
        </DurationGroup>
      </DurationDiv>
    </>
  );
};
const TravelAgentServices = () => {
  return (
    <>
      <DurationDiv>
        <DurationGroup>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography1>{"Travel Management"}</DurationTypography1>
            </TableCells>
            <TableCells>
              <DurationTypography1>{"Travel Agents"}</DurationTypography1>
            </TableCells>
            <TableCells>
              <DurationTypography1>{"Tour Operator"}</DurationTypography1>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Consulting"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>
                {"Domestic & International Hotel booking"}
              </DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Railway reservations"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells></TableCells>
            <TableCells></TableCells>
            <TableCells>
              <DurationTypography>{"Travel Insurance"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
        </DurationGroup>
      </DurationDiv>
    </>
  );
};
const EntertainmentServices = () => {
  return (
    <>
      <DurationDiv>
        <DurationGroup>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography1>{"Media Industry"}</DurationTypography1>
            </TableCells>
            <TableCells>
              <DurationTypography1>
                {"Entertainment Industry"}
              </DurationTypography1>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>
                {"Photo Edition Services"}
              </DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Cultural Events"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>
                {"Creative Design  Services"}
              </DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Perfomance Art"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Data Entry Services"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Sports"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Call Center Services"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Film"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells></TableCells>
            <TableCells>
              <DurationTypography>{"Attractions"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells></TableCells>
            <TableCells>
              <DurationTypography>{"Museums"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells></TableCells>
            <TableCells>
              <DurationTypography>{"Media"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
        </DurationGroup>
      </DurationDiv>
    </>
  );
};

const Othercategories = () => {
  return (
    <>
      <DurationDiv>
        <DurationGroup>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography1>
                {"Building & Trade Services"}
              </DurationTypography1>
            </TableCells>
            <TableCells>
              <DurationTypography1>
                {"Heath & Beauty Services"}
              </DurationTypography1>
            </TableCells>
            <TableCells>
              <DurationTypography1>
                {"Lnadscaping & Gardening Services"}
              </DurationTypography1>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography1>
                {"Electrical Installation & Testing"}
              </DurationTypography1>
            </TableCells>
            <TableCells>
              <DurationTypography1>{"Make-up"}</DurationTypography1>
            </TableCells>
            <TableCells>
              <DurationTypography1>{"Pruning"}</DurationTypography1>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Carpentry and Joinery"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Hair dresser & Barber"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Garden Design"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Oil & Gas Industry"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Skincare"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Soil Enrichment"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Electrician"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Pedicure"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>
                {"Landscape/garden Cleanup"}
              </DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>
                {"Heavy Equipment Operator"}
              </DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Drainage Services"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>
                {"Alarm & CCTV Installations"}
              </DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <br></br> <br></br>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography1>{"Printing Services"}</DurationTypography1>
            </TableCells>
            <TableCells>
              <DurationTypography1>{"Repair Services"}</DurationTypography1>
            </TableCells>
            <TableCells>
              <DurationTypography1>{"Logistics Services"}</DurationTypography1>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Gradvure Printing"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Dry docking & Repairs"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Engraving"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Machine Services"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Thermongraphy"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Emergency Repairs"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Flexography"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Home Repairs"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Screen Printing"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Bookbinding"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Plate-making Services"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <br></br> <br></br>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography1>{"Fitness Services"}</DurationTypography1>
            </TableCells>
            <TableCells>
              <DurationTypography1>{"Pet Services"}</DurationTypography1>
            </TableCells>
            <TableCells>
              <DurationTypography1>
                {"Manufacturing Services"}
              </DurationTypography1>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Yoga Classes"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Veterinarian"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>
                {"Apparent Manufacturing"}
              </DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Physiotheraphy"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Dog Grooming"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>
                {"Texttile Product Mills"}
              </DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Lifestyle Seminars"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Kernal Attendant"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"3d Printing"}</DurationTypography>
            </TableCells>
          </DurationSubDiv>
          <DurationSubDiv>
            <TableCells>
              <DurationTypography>{"Weight Training"}</DurationTypography>
            </TableCells>
            <TableCells>
              <DurationTypography>{"Pet Breeder"}</DurationTypography>
            </TableCells>
            <TableCells></TableCells>
          </DurationSubDiv>
        </DurationGroup>
      </DurationDiv>
    </>
  );
};
const Tooltips: React.FC<Props> = ({}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };
  return (
    <Box
      sx={{
        display: "flex",
        minWidth: "99.5vw",
        height: "1100px",
        background: "white",
        overflow: "scroll",
      }}
    >
      <div style={{ width: "25vw" }}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton
            selected={selectedIndex === 0}
            onMouseEnter={(event) => handleListItemClick(event, 0)}
          >
            <ListItemText primary="IT Services" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 1}
            onMouseEnter={(event) => handleListItemClick(event, 1)}
          >
            <ListItemText primary="Cleaning Services" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 2}
            onMouseEnter={(event) => handleListItemClick(event, 2)}
          >
            <ListItemText primary="Automative Services" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 3}
            onMouseEnter={(event) => handleListItemClick(event, 3)}
          >
            <ListItemText primary="Event Services" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 4}
            onMouseEnter={(event) => handleListItemClick(event, 4)}
          >
            <ListItemText primary="Travel Agent & Tour Servcices" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 5}
            onMouseEnter={(event) => handleListItemClick(event, 5)}
          >
            <ListItemText primary="Entertainment Services" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 6}
            onMouseEnter={(event) => handleListItemClick(event, 6)}
          >
            <ListItemText primary="Other Categories" />
          </ListItemButton>
        </List>
      </div>
      <Divider orientation="vertical"></Divider>
      <div style={{ width: "70vw", overflow: "scroll", overflowY: "scroll" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/*  <Divider sx={{ width: "100%", background: "grey" }} /> */}
          {selectedIndex == 0 && <ItService />}
          {selectedIndex == 1 && <CleaningService />}
          {selectedIndex == 2 && <AutomativeServices />}
          {selectedIndex == 3 && <EventServices />}
          {selectedIndex == 4 && <TravelAgentServices />}
          {selectedIndex == 5 && <EntertainmentServices />}
          {selectedIndex == 6 && <Othercategories />}
        </div>
      </div>
    </Box>
  );
};
export default Tooltips;
