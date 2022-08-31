import { Typography, Button } from "@mui/material";
import React from "react";

import { StyledBox } from "../NotLoggedIn/style";
type Props = {};

export default function ElverrBanner({}: Props) {
  return (
    <div style={{ background: "#001847", height: "492px" }}>
      <StyledBox>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "1500px",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img src="elverbusiness.png" style={{ objectFit: "contain" }} />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Typography
              style={{ fontSize: "50px", fontStyle: "bold", color: " #FFFFFF" }}
            >
              Earning on elverr made easy
            </Typography>
            <Typography
              style={{ fontSize: "24px", fontStyle: "bold", color: " #FFFFFF" }}
            >
              Earning on elverr made easy
            </Typography>
            <Button
              variant="contained"
              sx={{
                width: "200px",
                background: "#34A422",
                color: "#ffffff",
                borderRadius: "30px",
                textTransform: "none",
              }}
            >
              Join Us
            </Button>
          </div>
        </div>
      </StyledBox>
    </div>
  );
}
