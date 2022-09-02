import * as React from "react";
import { StyledBox, TypographyStyle, StyledImage } from "./style";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";

type Props = {};

const HeaderNotLoggedIn: React.FC<Props> = ({}) => {
  const route = useRouter();
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
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            onClick={() => {
              route.push("/");
            }}
          >
            <StyledImage src="elverrlogo.png"></StyledImage>
          </div>
          <div style={{ display: "flex", gap: "50px" }}>
            <TypographyStyle
              style={{
                color: "green",
              }}
            >
              Elverr Business
            </TypographyStyle>
            <TypographyStyle
              style={{
                color: "#747582",
              }}
            >
              Explore
            </TypographyStyle>
            <TypographyStyle
              style={{
                color: "#747582",
              }}
            >
              Categories
            </TypographyStyle>
            <TypographyStyle
              style={{
                color: "#747582",
              }}
            >
              Become a Seller
            </TypographyStyle>
            <TypographyStyle
              style={{
                color: "#747582",
              }}
              onClick={() => {
                route.push("/login");
              }}
            >
              Log in / Sign up
            </TypographyStyle>
          </div>
        </div>
      </div>
    </StyledBox>
  );
};

export default HeaderNotLoggedIn;
