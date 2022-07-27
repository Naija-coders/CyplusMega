import React from "react";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Fade from "@mui/material/Fade";
import {
  ResponsiveDiv,
  HtmlTooltip,
  TooltipText,
  MainText,
  Tooltipdiv,
  AllCategoryTooltip,
  LightTooltip,
  MyCustomTooltip,
  TooltipButton,
} from "./styles";
import { Typography } from "@mui/material";
import MyToolTips from "./ToolTipDrawer";
type Props = {};
const ToolTips: React.FC<Props> = ({}) => {
  return (
    <ResponsiveDiv>
      <AllCategoryTooltip
        TransitionComponent={Fade}
        enterDelay={-500}
        title={<MyToolTips />}
      >
        <IconButton
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "6px",
          }}
        >
          {" "}
          <MenuRoundedIcon sx={{ color: "black" }} />
          <MainText>All</MainText>
        </IconButton>
      </AllCategoryTooltip>
      <HtmlTooltip
        title={
          <Tooltipdiv>
            <TooltipText>Web Design</TooltipText>
            <TooltipText>Software Developer</TooltipText>
            <TooltipText>IT Consultant</TooltipText>
            <TooltipText>Hardware</TooltipText>
          </Tooltipdiv>
        }
      >
        <IconButton>
          <MainText>IT Services</MainText>
        </IconButton>
      </HtmlTooltip>
      <HtmlTooltip
        title={
          <Tooltipdiv>
            <TooltipText>Residential </TooltipText>
            <TooltipText>Commercial </TooltipText>
            <TooltipText>Janitorial </TooltipText>
            <TooltipText>Laundry and Dry Cleaning</TooltipText>
            <TooltipText>Sanitizaton and Disinfection</TooltipText>
            <TooltipText>Green Cleaning</TooltipText>
            <TooltipText>Pressure Washing</TooltipText>
          </Tooltipdiv>
        }
      >
        <IconButton>
          <MainText>Cleaning Services</MainText>
        </IconButton>
      </HtmlTooltip>

      <HtmlTooltip
        title={
          <Tooltipdiv>
            <TooltipText>Brake Repair </TooltipText>
            <TooltipText>Oil Change and Oil Filter Replacement </TooltipText>
            <TooltipText>Coolant System Services </TooltipText>
            <TooltipText>Air and Cabin Filter Replacement</TooltipText>
            <TooltipText>Scheduled Maintenance</TooltipText>
            <TooltipText>Tire Replacement</TooltipText>
            <TooltipText>Pressure Washing</TooltipText>
          </Tooltipdiv>
        }
      >
        <IconButton>
          <MainText>Automative Services</MainText>
        </IconButton>
      </HtmlTooltip>
      <HtmlTooltip
        title={
          <Tooltipdiv>
            <TooltipText>Elevator installer and repairer </TooltipText>
            <TooltipText>Construction and building inspector </TooltipText>
            <TooltipText>Sheet metal worker </TooltipText>
            <TooltipText>Carpenter</TooltipText>
            <TooltipText>Oil and gas worker</TooltipText>
            <TooltipText>Electrician</TooltipText>
            <TooltipText>Drywall and ceilling tile installer</TooltipText>
          </Tooltipdiv>
        }
      >
        <IconButton>
          <MainText>Building and Trade Services</MainText>
        </IconButton>
      </HtmlTooltip>
      <HtmlTooltip
        title={
          <Tooltipdiv>
            <TooltipText>Jobs coming soon </TooltipText>
          </Tooltipdiv>
        }
      >
        <IconButton>
          <MainText>Jobs</MainText>
        </IconButton>
      </HtmlTooltip>
      <LightTooltip
        title={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography color="black" align="center">
              On Elverr, you can post your services or ads for free{" "}
            </Typography>
            <br></br>
            <TooltipButton
              variant="contained"
              sx={{ background: "green" }}
              endIcon={<AddBoxIcon />}
            >
              Post Now
            </TooltipButton>
            <br></br>
          </div>
        }
      >
        <IconButton>
          <MainText style={{ color: "green" }}>Advertise on Elverr</MainText>
        </IconButton>
      </LightTooltip>

      <IconButton>
        <MainText>FAQ</MainText>
      </IconButton>
    </ResponsiveDiv>
  );
};

export default ToolTips;
