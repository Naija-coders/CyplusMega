import React from "react";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import moment from "moment";
import CustomCardSwiper from "../CustomCard/CardSwiper";
import StarIcon from "@mui/icons-material/Star";
import { useRouter } from "next/router";

type Props = {
  id?: any;
  image?: string;
  name?: any;
  type?: string;
  about?: any;
  price?: any;
  updated_at?: any;
  bottomColor: string;
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
  bottomColor,
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
          <StyledCard key={id} elevation={6}>
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
                style={{
                  display: "flex",
                  paddingLeft: "0.7rem",
                  marginTop: "2px",
                }}
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
                  <span
                    style={{
                      width: "8",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <StarIcon sx={{ fontSize: "13px", color: "#faaf00" }} />
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#faaf00",
                      }}
                    >
                      {" "}
                      4.9(59)
                    </p>
                  </span>
                </div>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <StyledTypography>{type}</StyledTypography>
              </div>
              <div style={{ marginLeft: "1rem", width: "8" }}>
                <StyledTypographyHeader>
                  {about?.slice(0, 40)}
                </StyledTypographyHeader>
              </div>
              <div
                style={{
                  height: "50px",
                  background: bottomColor,

                  width: "100%",

                  display: "flex",
                  padding: "10px",

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

                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <StyledIconButton key={id} /*  onClick={handleOpen} */>
                    <FavoriteBorderIcon style={{ color: "white" }} />
                  </StyledIconButton>

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
