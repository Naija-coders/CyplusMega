import React from "react";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import moment from "moment";

type Props = {
  id?: any;
  image?: string;
  name?: any;
  type?: string;
  about?: string;
  price?: any;
  updated_at?: any;
};
import {
  LatestServicesDiv,
  StyledCard,
  TextTypography,
  StyledTypography,
  StyledTypographyHeader,
  StyledIconButton,
  StyledPrice,
  StyledPriceValue,
} from "../LatestServices/styles";
const CustomCard: React.FC<Props> = ({
  id,
  image,
  name,
  type,
  about,
  price,
  updated_at,
}) => {
  return (
    <div>
      <LatestServicesDiv>
        <div
          key={id}
          style={{
            position: "relative",
            marginLeft: "1%",
          }}
        >
          <StyledCard key={Math.random()} elevation={6}>
            <div
              style={{
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <img
                  src={image}
                  style={{
                    height: "200px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                ></img>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "4%",
                  marginTop: "2%",
                }}
              >
                <div style={{ display: "flex" }}>
                  <span>
                    <Avatar />
                  </span>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span>
                      <TextTypography>{name}</TextTypography>
                    </span>
                    <span>
                      <TextTypography>
                        {moment(updated_at).format("MMM Do ")}
                      </TextTypography>
                    </span>
                  </div>
                </div>
                <span>
                  <StyledTypography>{type}</StyledTypography>
                  <StyledTypographyHeader>{about}</StyledTypographyHeader>
                </span>
                <div
                  style={{
                    height: "50px",
                    background: "#152238",

                    width: "114%",
                    marginLeft: "-4.5%",
                    display: "flex",
                    marginTop: "5%",
                    justifyContent: "flex-end",
                    alignSelf: "flex-end",
                    justifyItems: "flex-end",

                    alignItems: "flex-end",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",

                      alignSelf: "flex-end",

                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <StyledIconButton key={id}>
                      <FavoriteBorderIcon style={{ color: "white" }} />
                    </StyledIconButton>

                    <StyledPrice> STARTING AT</StyledPrice>
                    <StyledPriceValue>${price}</StyledPriceValue>
                  </div>
                </div>
              </div>
            </div>
          </StyledCard>
        </div>
      </LatestServicesDiv>
    </div>
  );
};
export default CustomCard;
