import { Paper, Typography } from "@mui/material";
import React from "react";
import { StyledBox } from "../NotLoggedIn/style";
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
            <BasicTextTitle>Quality Work</BasicTextTitle>
            <BasicTextbody>
              Grow the holistic world view of disruptive innovation workspace
            </BasicTextbody>
          </CustomPaper>
          <CustomPaper elevation={0}>
            <BasicTextTitle>Friendly Budget</BasicTextTitle>
            <BasicTextbody>
              Grow the holistic world view of disruptive innovation workspace
            </BasicTextbody>
          </CustomPaper>{" "}
          <CustomPaper elevation={0}>
            <BasicTextTitle>Secure Payment</BasicTextTitle>
            <BasicTextbody>
              Grow the holistic world view of disruptive innovation workspace
            </BasicTextbody>
          </CustomPaper>
        </div>
      </div>
    </StyledBox>
  );
}
