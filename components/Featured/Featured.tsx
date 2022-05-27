import React from "react";
import {
  StyledDiv,
  StyledDivider,
  StyledTypography,
  MobileDiv,
} from "./styles";
import { Divider, Typography } from "@mui/material";

export default function Featured() {
  const RenderMobile = () => {
    return (
      <div className="navbar__catwrappermobile">
        <MobileDiv>
          <StyledTypography>Trusted by</StyledTypography>
          <StyledDivider orientation="vertical" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              justifyItems: "center",
              alignItems: "center",
              height: "60px",
              width: "50%",
            }}
          >
            <StyledTypography>Pay pal</StyledTypography>
            <StyledTypography>Google</StyledTypography>
            <StyledTypography>Amazon</StyledTypography>
          </div>
        </MobileDiv>
      </div>
    );
  };
  return (
    <>
      <div className="navbar__catfeaturemobile">
        {RenderMobile()}
        <div className="navbar__mycontainer">
          <div className="navbar__catwrapper">
            <StyledDiv>
              <StyledTypography>Trusted by</StyledTypography>
              <StyledDivider orientation="vertical" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  justifyItems: "center",
                  alignItems: "center",

                  width: "50%",
                }}
              >
                <StyledTypography>Pay pal</StyledTypography>
                <StyledTypography>Google</StyledTypography>
                <StyledTypography>Amazon</StyledTypography>
              </div>
            </StyledDiv>
          </div>
        </div>
      </div>
    </>
  );
}
