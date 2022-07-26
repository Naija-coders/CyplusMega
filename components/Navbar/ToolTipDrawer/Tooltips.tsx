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
        overflowY: "scroll",
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
            <ListItemText primary="Wedding Event Services" />
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
      <div style={{ width: "70vw" }}>
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
        </div>
      </div>
    </Box>
  );
};
export default Tooltips;
