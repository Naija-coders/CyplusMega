import { Paper, Typography } from "@mui/material";
import React from "react";
import { StyledBox } from "../NotLoggedIn/style";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Avatar from "@mui/material/Avatar";
import PaidIcon from "@mui/icons-material/Paid";
import Rating from "@mui/material/Rating";
import {
  BasicText,
  BasicTextHeader,
  BasicTextbody,
  CustomPaper,
  BasicTextTitle,
  BasicTextQuote,
  StyledQuote,
  BasicTextTestimonials,
  BasicTextTestimonialsTitle,
  AccessPaper,
  BasicStyledPaper,
  BasicAccessPaper,
  BasicAccessPaper2,
  BasicCutomDiv,
  BasicIDiv,
} from "./styles";

type Props = {};

export default function BecomeaSeller({}: Props) {
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
            flexDirection: "column",
            alignItems: "center",
            marginTop: "50px",
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "row",

            gap: "1rem",
          }}
        >
          <img src="founderlogo.png" />
          <div>
            <BasicIDiv>
              <span style={{}}>
                <Typography
                  sx={{
                    fontFamily: "DM Sans",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "1rem",
                    lineHeight: "37px",
                    color: "#747582",
                    marginLeft: "20px",
                  }}
                >
                  {" "}
                  Omogha Oghenemano (CEO), Co-Founder
                </Typography>
                <div style={{ display: "flex", gap: "10px" }}>
                  <StyledQuote>&#8220;</StyledQuote>
                  <BasicTextQuote>
                    It’s extremely exciting that Elverr provides a diverse and
                    all inclusive work-space for freelancers from all over the
                    world.
                    <StyledQuote>&#8221;</StyledQuote>
                  </BasicTextQuote>
                </div>
              </span>
            </BasicIDiv>
          </div>
        </div>
        <br></br>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <BasicTextHeader style={{ color: "#2B2B2B" }} align={"center"}>
            Become a company
          </BasicTextHeader>
          <br></br>
          <BasicTextbody style={{ width: "495px" }} align={"center"}>
            Find and hire lead agencies on Elverr to execute your projects and
            increase your productivity in record time.
          </BasicTextbody>
        </div>
        <div
          style={{
            minWidth: "100%",
            height: "400px",

            backgroundImage: `url("becomeacompany.png")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "darken",
            backgroundPosition: "center",
          }}
        ></div>
        <div style={{ marginTop: "50px" }}>
          <div style={{ display: "flex", gap: "1rem" }}>
            <BasicTextHeader style={{ color: "#2B2B2B" }}>
              Enjoy unlimited access to world class talent on
            </BasicTextHeader>
            <BasicTextHeader style={{ color: "#34A422" }}>
              Elverr
            </BasicTextHeader>
          </div>
          <div
            style={{
              minWidth: "100%",
              height: "650px",
              marginTop: "20px",
              backgroundImage: `url("world.png")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "darken",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "30px",
              }}
            >
              <BasicAccessPaper2
                elevation={0}
                sx={{
                  width: "288.3px",
                  marginTop: "30px",
                  minHeight: "150.05px",

                  boxShadow:
                    "22.6722px 0px 39.6763px rgba(123, 67, 67, 0.07), -22.6722px 56.6804px 39.6763px rgba(122, 79, 79, 0.07)",
                  borderRadius: " 12.0852px",
                  padding: "1rem",
                }}
              >
                <StyledQuote>&#8220;</StyledQuote>
                <BasicTextbody style={{ fontSize: "0.8rem" }}>
                  I really like the team for example, a relationship-focused
                  performance expectation might be that the employee sustain
                  collegial working relationships with her peers, subordinates
                  and customers.
                </BasicTextbody>
                <BasicCutomDiv>
                  <div>
                    <Avatar />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <BasicTextTestimonials>mano</BasicTextTestimonials>
                    <BasicTextTestimonialsTitle>
                      mano
                    </BasicTextTestimonialsTitle>
                  </div>
                  <div style={{ marginLeft: "17px" }}>
                    <Rating
                      name="half-rating-read"
                      style={{ fontSize: "0.9rem" }}
                      defaultValue={5}
                      precision={5}
                      readOnly
                    />
                  </div>
                </BasicCutomDiv>
              </BasicAccessPaper2>
              <BasicAccessPaper elevation={0}>
                <StyledQuote>&#8220;</StyledQuote>
                <BasicTextbody style={{ fontSize: "0.8rem" }}>
                  I really like the team for example, a relationship-focused
                  performance expectation might be that the employee sustain
                  collegial working relationships with her peers, subordinates
                  and customers.
                </BasicTextbody>
                <BasicCutomDiv>
                  <div>
                    <Avatar />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <BasicTextTestimonials>mano</BasicTextTestimonials>
                    <BasicTextTestimonialsTitle>
                      mano
                    </BasicTextTestimonialsTitle>
                  </div>
                  <div style={{ marginLeft: "17px" }}>
                    <Rating
                      name="half-rating-read"
                      style={{ fontSize: "0.9rem" }}
                      defaultValue={5}
                      precision={5}
                      readOnly
                    />
                  </div>
                </BasicCutomDiv>
              </BasicAccessPaper>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              <BasicStyledPaper elevation={0}>
                <StyledQuote sx={{ fontSize: "2.6rem" }}>&#8220;</StyledQuote>
                <BasicTextbody style={{ fontSize: "0.8rem" }}>
                  I really like the team for example, a relationship-focused
                  performance expectation might be that the employee sustain
                  collegial working relationships with her peers, subordinates
                  and customers.
                </BasicTextbody>
                <BasicCutomDiv>
                  <div>
                    <Avatar />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <BasicTextTestimonials>mano</BasicTextTestimonials>
                    <BasicTextTestimonialsTitle>
                      mano
                    </BasicTextTestimonialsTitle>
                  </div>
                  <div style={{ marginLeft: "17px" }}>
                    <Rating
                      name="half-rating-read"
                      style={{ fontSize: "0.9rem" }}
                      defaultValue={5}
                      precision={5}
                      readOnly
                    />
                  </div>
                </BasicCutomDiv>
              </BasicStyledPaper>
            </div>
          </div>
        </div>
      </div>
    </StyledBox>
  );
}
