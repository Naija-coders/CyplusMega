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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
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
        </div>
        <br></br>
        <div>
          <BasicText>PROFESSIONAL SERVICES</BasicText>
        </div>
        <br></br>
        <div
          style={{
            display: "grid",
            flexDirection: "row",
            gridTemplateColumns: "auto auto auto auto",

            alignItems: "start",
          }}
        >
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
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "150px",
            justifyContent: "space-around",
          }}
        >
          <img
            width={"709.06px"}
            height={"360px"}
            src={"descriptions.png"}
            alt="how the system works"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginTop: "30px",
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "50px",
            gap: "1rem",
          }}
        >
          <BasicTextHeader style={{ color: "#2B2B2B" }}>
            Become a seller
          </BasicTextHeader>
          <BasicTextbody style={{ width: "495px" }} align="center">
            Sign up for free and offers your services to our audience while
            building your client base on Elverr.
          </BasicTextbody>
          <img src="users.png" alt="users" />
          <img src="ratings.png" alt="ratings" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "50px",
            gap: "1rem",
          }}
        >
          <BasicTextHeader style={{ color: "#2B2B2B" }}>
            Become an Agency
          </BasicTextHeader>
          <BasicTextbody style={{ width: "495px" }} align="center">
            Create a team of experienced freelancers to suit your business
            projects offers.
          </BasicTextbody>
        </div>
      </div>
    </StyledBox>
  );
}
