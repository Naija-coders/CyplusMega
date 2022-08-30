import * as React from "react";
import { StyledBox } from "./style";
import Typography from "@mui/material/Typography";

type Props = {};

const HeaderNotLoggedIn: React.FC<Props> = ({}) => {
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
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div>
            <img
              src="elverrlogo.png"
              style={{
                width: "148.49px",
                height: " 42.59px",
                objectFit: "contain",
                userSelect: "none",
              }}
            ></img>
          </div>
          <div style={{ display: "flex", gap: "50px" }}>
            <Typography
              style={{
                fontFamily: "DM Sans",
                fontWeight: 500,
                fontSize: "1.2rem",
                lineHeight: "31px",
                color: "green",
              }}
            >
              Elverr Business
            </Typography>
            <Typography
              style={{
                fontFamily: "DM Sans",
                fontWeight: 500,
                fontSize: "1.2rem",
                lineHeight: "31px",
                color: "#747582",
              }}
            >
              Explore
            </Typography>
            <Typography
              style={{
                fontFamily: "DM Sans",
                fontWeight: 500,
                fontSize: "1.2rem",
                lineHeight: "31px",
                color: "#747582",
              }}
            >
              Categories
            </Typography>
            <Typography
              style={{
                fontFamily: "DM Sans",
                fontWeight: 500,
                fontSize: "1.2rem",
                lineHeight: "31px",
                color: "#747582",
              }}
            >
              Become a Seller
            </Typography>
            <Typography
              style={{
                fontFamily: "DM Sans",
                fontWeight: 500,
                fontSize: "1.2rem",
                lineHeight: "31px",
                color: "#747582",
              }}
            >
              Log in / Sign up
            </Typography>
          </div>
        </div>
      </div>
    </StyledBox>
  );
};

export default HeaderNotLoggedIn;
