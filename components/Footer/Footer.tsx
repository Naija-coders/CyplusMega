import React from "react";
import Link from "next/link";
import { Paper, TextField, Typography, Button, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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

import StarBorder from "@mui/icons-material/StarBorder";

type Props = {};
import {
  DurationDiv,
  DurationTypography1,
  DurationGroup,
  DurationTypography,
  DurationSubDiv,
  TableCells,
  CustomFooterBackgroundDiv,
  NonDiv,
} from "./styles";
const Root = styled("div")(({ theme }) => ({
  "width": "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

export default function Footer({}: Props) {
  const [support, setSupport] = React.useState(false);
  const [categories, setCategories] = React.useState(false);
  const [advertise, setAdvertise] = React.useState(false);
  const [about, setAbout] = React.useState(false);

  const handleClickCategories = () => {
    setCategories(!categories);
  };

  const handleClickSuport = () => {
    setSupport(!support);
  };
  const handleClickAdvertise = () => {
    setAdvertise(!advertise);
  };
  const handleClickAbout = () => {
    setAbout(!about);
  };
  const RenderMobile = () => {
    return (
      <NonDiv>
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
          <ListItemButton onClick={handleClickCategories}>
            <ListItemText>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  padding: "1rem 0rem",
                  fontWeight: "bold",
                }}
              >
                Categories
              </Typography>
            </ListItemText>
            {categories ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={categories} timeout="auto" unmountOnExit>
            <div style={{ padding: "0rem 1rem" }}>
              <DurationTypography>IT Services</DurationTypography>
              <DurationTypography>Cleaning Services</DurationTypography>
              <DurationTypography>Event Services</DurationTypography>
              <DurationTypography>Automative Services</DurationTypography>
              <DurationTypography>Building & Trade Services</DurationTypography>
              <DurationTypography>Health & Beauty Services</DurationTypography>
              <DurationTypography>
                Landscaping & Gardening Services
              </DurationTypography>
              <DurationTypography>Logistics Services</DurationTypography>
              <DurationTypography>Printing Services</DurationTypography>
              <DurationTypography>
                Photography & Video Services
              </DurationTypography>
              <DurationTypography>Wedding Event Services</DurationTypography>
              <DurationTypography>Repair Services</DurationTypography>
              <DurationTypography>Fitness Services</DurationTypography>
              <DurationTypography>Pet Services</DurationTypography>
              <DurationTypography>
                Travel Agent & Tour Services
              </DurationTypography>
              <DurationTypography>
                Classes & Courses Services
              </DurationTypography>
              <DurationTypography>Manufacturing Services</DurationTypography>
              <br></br>
            </div>
          </Collapse>
          <Divider />
          <ListItemButton onClick={handleClickSuport}>
            <ListItemText>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  padding: "1rem 0rem",
                  fontWeight: "bold",
                }}
              >
                Support
              </Typography>
            </ListItemText>

            {support ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={support} timeout="auto" unmountOnExit>
            <div style={{ padding: "0rem 1rem" }}>
              <DurationTypography>Help & Support</DurationTypography>
              <DurationTypography>Trust & Safety</DurationTypography>
              <DurationTypography>Buying on Elverr</DurationTypography>
              <DurationTypography>Selling on Elverr</DurationTypography>
              <br></br>
            </div>
          </Collapse>
          <Divider />
          <ListItemButton onClick={handleClickAdvertise}>
            <ListItemText>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  padding: "1rem 0rem",
                  fontWeight: "bold",
                }}
              >
                Advertise on Elverr
              </Typography>
            </ListItemText>

            {advertise ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={advertise} timeout="auto" unmountOnExit>
            <div style={{ padding: "0rem 1rem" }}>
              <DurationTypography>Become a Seller</DurationTypography>
              <DurationTypography>Forum</DurationTypography>
              <br></br>
            </div>
          </Collapse>
          <Divider />
          <ListItemButton onClick={handleClickAbout}>
            <ListItemText>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  padding: "1rem 0rem",
                  fontWeight: "bold",
                }}
              >
                About
              </Typography>
            </ListItemText>

            {about ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={about} timeout="auto" unmountOnExit>
            <div style={{ padding: "0rem 1rem" }}>
              <Link href={"/contactus"}>
                <DurationTypography>Contact us</DurationTypography>
              </Link>
              <DurationTypography>FAQ</DurationTypography>
              <DurationTypography>Terms of Services</DurationTypography>
              <DurationTypography>Blog</DurationTypography>
              <DurationTypography>Privacy Policy</DurationTypography>
              <DurationTypography>Terms and Conditions</DurationTypography>
              <br></br>
            </div>
          </Collapse>
          <Divider />
        </List>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "200%",
            gap: "1rem",
          }}
        >
          <img src={"elverrlogo.png"} style={{ height: "60px" }} />
          <div
            style={{
              display: "flex",

              justifyContent: "center",
              gap: "30px",
            }}
          >
            <FacebookRoundedIcon sx={{ color: "black", fontSize: "2rem" }} />
            <TwitterIcon sx={{ color: "black", fontSize: "2rem" }} />
            <InstagramIcon sx={{ color: "black", fontSize: "2rem" }} />
            <LinkedInIcon sx={{ color: "black", fontSize: "2rem" }} />
          </div>
          <Typography fontSize={"1.5rem"} sx={{ color: "black" }}>
            {" "}
            &nbsp; ©Elverr International Ltd. 2022 &nbsp;
          </Typography>
        </div>
      </NonDiv>
    );
  };
  return (
    <div>
      <RenderMobile />
      <CustomFooterBackgroundDiv elevation={0}>
        <Divider sx={{ width: "100%" }} />
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
          <DurationDiv>
            <DurationGroup>
              <br></br>
              <DurationSubDiv>
                <TableCells>
                  <DurationTypography1>{"Categories"}</DurationTypography1>
                </TableCells>
                <TableCells>
                  <DurationTypography1>{"Support"}</DurationTypography1>
                </TableCells>
                <TableCells>
                  <DurationTypography1>
                    {"Advertise on Elverr"}
                  </DurationTypography1>
                </TableCells>
                <TableCells>
                  <DurationTypography1>{"About"}</DurationTypography1>
                </TableCells>
              </DurationSubDiv>{" "}
              <DurationSubDiv>
                <TableCells>
                  <DurationTypography>{"IT Services"}</DurationTypography>
                </TableCells>
                <TableCells>
                  <DurationTypography>{"Help & Support"}</DurationTypography>
                </TableCells>
                <TableCells>
                  <DurationTypography>{"Become a Seller"}</DurationTypography>
                </TableCells>
                <TableCells>
                  <Link href={"/contactus"} passHref={true}>
                    <DurationTypography>Contact us</DurationTypography>
                  </Link>
                </TableCells>
              </DurationSubDiv>
              <DurationSubDiv>
                <TableCells>
                  <DurationTypography>{"Cleaning Services"}</DurationTypography>
                </TableCells>
                <TableCells>
                  <DurationTypography>{"Trust & Safety"}</DurationTypography>
                </TableCells>
                <TableCells>
                  <DurationTypography>{"Forum"}</DurationTypography>
                </TableCells>
                <TableCells>
                  <DurationTypography>{"FAQ"}</DurationTypography>
                </TableCells>
              </DurationSubDiv>
              <DurationSubDiv>
                <TableCells>
                  <DurationTypography>{"Event Services"}</DurationTypography>
                </TableCells>
                <TableCells>
                  <DurationTypography>{"Buying on Elverr"}</DurationTypography>
                </TableCells>
                <TableCells></TableCells>
                <TableCells>
                  <DurationTypography>{"Terms of Services"}</DurationTypography>
                </TableCells>
              </DurationSubDiv>
              <DurationSubDiv>
                <TableCells>
                  <DurationTypography>
                    {"Automative Services"}
                  </DurationTypography>
                </TableCells>
                <TableCells>
                  <DurationTypography>{"Selling on Elverr"}</DurationTypography>
                </TableCells>
                <TableCells>
                  <DurationTypography></DurationTypography>
                </TableCells>
                <TableCells>
                  <DurationTypography>{"Blog"}</DurationTypography>
                </TableCells>
              </DurationSubDiv>
              <DurationSubDiv>
                <TableCells>
                  <DurationTypography>
                    {"Building & Trade Services"}
                  </DurationTypography>
                </TableCells>
                <TableCells>
                  <DurationTypography></DurationTypography>
                </TableCells>
                <TableCells>
                  <DurationTypography></DurationTypography>
                </TableCells>
                <TableCells>
                  <DurationTypography>{"Privacy Policy"}</DurationTypography>
                </TableCells>
              </DurationSubDiv>
              <DurationSubDiv>
                <TableCells>
                  <DurationTypography>
                    {"Healthy & Beauty Services"}
                  </DurationTypography>
                </TableCells>
                <TableCells>
                  <DurationTypography></DurationTypography>
                </TableCells>
                <TableCells>
                  <DurationTypography></DurationTypography>
                </TableCells>
                <TableCells>
                  <DurationTypography>
                    {"Terms and Conditions"}
                  </DurationTypography>
                </TableCells>
              </DurationSubDiv>
              <DurationSubDiv>
                <TableCells>
                  <DurationTypography>
                    {"Landscaping & Gardening Services"}
                  </DurationTypography>
                </TableCells>
              </DurationSubDiv>
              <DurationSubDiv>
                <TableCells>
                  <DurationTypography>
                    {"Logistics Services"}
                  </DurationTypography>
                </TableCells>
              </DurationSubDiv>
              <DurationSubDiv>
                <TableCells>
                  <DurationTypography>{"Printing Services"}</DurationTypography>
                </TableCells>
              </DurationSubDiv>
              <DurationSubDiv>
                <TableCells>
                  <DurationTypography>
                    {"Photography & Video Services"}
                  </DurationTypography>
                </TableCells>
              </DurationSubDiv>
              <DurationSubDiv>
                <TableCells>
                  <DurationTypography>
                    {"Wedding Events Services"}
                  </DurationTypography>
                </TableCells>
              </DurationSubDiv>
              <DurationSubDiv>
                <TableCells>
                  <DurationTypography>{"Repair Services"}</DurationTypography>
                </TableCells>
              </DurationSubDiv>
              <DurationSubDiv>
                <TableCells>
                  <DurationTypography>{"Fitness Services"}</DurationTypography>
                </TableCells>
              </DurationSubDiv>
              <DurationSubDiv>
                <TableCells>
                  <DurationTypography>{"Pet Services"}</DurationTypography>
                </TableCells>
              </DurationSubDiv>
              <DurationSubDiv>
                <TableCells>
                  <DurationTypography>
                    {"Travel Agent & Tour Services"}
                  </DurationTypography>
                </TableCells>
              </DurationSubDiv>
              <DurationSubDiv>
                <TableCells>
                  <DurationTypography>
                    {"Classes & Courses Services"}
                  </DurationTypography>
                </TableCells>
              </DurationSubDiv>
              <DurationSubDiv>
                <TableCells>
                  <DurationTypography>
                    {"Manufacturing Services"}
                  </DurationTypography>
                </TableCells>
              </DurationSubDiv>
            </DurationGroup>
          </DurationDiv>
          <br></br>
          <br></br>
          <Divider sx={{ width: "100%" }} />
          <div
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "space-between",
              width: "100%",
              paddingLeft: "9rem",
            }}
          >
            <div style={{ display: "flex", gap: "10px", alignItems: "end" }}>
              <img src={"elverrlogo.png"} style={{ height: "40px" }} />

              <Typography fontSize={"13px"} sx={{ color: "black" }}>
                {" "}
                &nbsp; ©Elverr International Ltd. 2022 &nbsp;
              </Typography>
            </div>
            <div
              style={{
                display: "flex",

                justifyContent: "right",
                gap: "10px",
                marginRight: "60px",
              }}
            >
              <FacebookRoundedIcon sx={{ color: "black" }} />
              <TwitterIcon sx={{ color: "black" }} />
              <InstagramIcon sx={{ color: "black" }} />
              <LinkedInIcon sx={{ color: "black" }} />
            </div>
          </div>

          <br></br>
        </div>
      </CustomFooterBackgroundDiv>
    </div>
  );
}
