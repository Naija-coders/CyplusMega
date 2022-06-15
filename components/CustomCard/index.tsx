import React from "react";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import moment from "moment";
import CustomCardSwiper from "../CustomCard/CardSwiper";
import { useRouter } from "next/router";

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
  const route = useRouter();
  return (
    <div>
      <div>
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
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "380px",
              }}
            >
              <div style={{ height: "200px", width: "100%" }}>
                {" "}
                <CustomCardSwiper />
              </div>
              <div
                style={{ display: "flex", padding: "0.7rem" }}
                onClick={() => {
                  route.push("/services?ad=" + id);
                }}
              >
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
              <div style={{ marginLeft: "1rem" }}>
                <StyledTypography>{type}</StyledTypography>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <StyledTypographyHeader>{about}</StyledTypographyHeader>
              </div>
              <div
                style={{
                  height: "50px",
                  background: "#152238",

                  width: "114%",

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
                    marginLeft: "10px",

                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <StyledIconButton key={id} /*  onClick={handleOpen} */>
                    <FavoriteBorderIcon style={{ color: "white" }} />
                  </StyledIconButton>

                  <StyledPrice> STARTING AT</StyledPrice>
                  <StyledPriceValue>${price}</StyledPriceValue>
                </div>
              </div>
            </div>
          </StyledCard>
        </div>
      </div>
    </div>
  );
};
export default CustomCard;
