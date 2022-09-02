import { Paper, Typography } from "@mui/material";
import React from "react";
import { StyledBox } from "../NotLoggedIn/style";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Avatar from "@mui/material/Avatar";
import PaidIcon from "@mui/icons-material/Paid";
import {
  BasicText,
  BasicTextHeader,
  BasicTextbody,
  CustomPaper,
  BasicTextTitle,
  StyledDiv,
  MainDivs,
  StyledImages,
} from "./styles";

type Props = {};

export default function CompaniesFeatured({}: Props) {
  return (
    <StyledBox>
      <div
        style={{
          justifyContent: "space-around",
          maxWidth: "1500px",
          width: "100%",
        }}
      >
        <StyledDiv>
          <img
            style={{ width: "203px", height: "75.33px" }}
            src={"slack.png"}
          />
          <img
            style={{ width: "220px", height: "75.33px" }}
            src={"prudential.png"}
          />
          <img
            style={{ width: "230px", height: "75.33px" }}
            src={"microsoft.png"}
          />
          <img
            style={{ width: "203px", height: "60.33px" }}
            src={"zoover.png"}
          />
        </StyledDiv>
        <br></br>
        <div style={{ marginTop: "50px" }}>
          <BasicText>PROFESSIONAL SERVICES</BasicText>
        </div>
        <br></br>
        <MainDivs>
          <div>
            <BasicTextHeader> Why choose us?</BasicTextHeader>
            <br></br>
            <div style={{ width: "347px" }}>
              <BasicTextbody>
                {" "}
                We bring the breathe of our experience and industry freelance
                knowledge to help you succeed in your project.
              </BasicTextbody>
            </div>
          </div>
          <CustomPaper elevation={0}>
            <img src="qualitywork.png" width={"38px"} height={"38px"}></img>
            <BasicTextTitle>Quality Work</BasicTextTitle>
            <BasicTextbody>
              Grow the holistic world view of disruptive innovation workspace
            </BasicTextbody>
          </CustomPaper>
          <CustomPaper elevation={0}>
            <img src="friendlybudget.png" width={"38px"} height={"38px"}></img>
            <BasicTextTitle>Friendly Budget</BasicTextTitle>
            <BasicTextbody>
              Grow the holistic world view of disruptive innovation workspace
            </BasicTextbody>
          </CustomPaper>{" "}
          <CustomPaper elevation={0}>
            <img src="securepayment.png" width={"38px"} height={"38px"}></img>
            <BasicTextTitle>Secure Payment</BasicTextTitle>
            <BasicTextbody>
              Grow the holistic world view of disruptive innovation workspace
            </BasicTextbody>
          </CustomPaper>
        </MainDivs>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "150px",
            justifyContent: "space-around",
          }}
        >
          <StyledImages src={"descriptions.png"} alt="how the system works" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginTop: "30px",
              justifyContent: "center",
            }}
          >
            <BasicText>HOW OUR SYSTEM WORKS</BasicText>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <Avatar sx={{ background: "green" }}>
                <VpnKeyIcon />
              </Avatar>
              <BasicTextTitle>Sign up</BasicTextTitle>
            </div>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <Avatar sx={{ background: "green" }}>
                <AllInboxIcon />
              </Avatar>
              <BasicTextTitle>Deliver great work</BasicTextTitle>
            </div>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <Avatar sx={{ background: "green" }}>
                <PaidIcon />
              </Avatar>
              <BasicTextTitle>Get Paid</BasicTextTitle>
            </div>
          </div>
        </div>
      </div>
    </StyledBox>
  );
}
