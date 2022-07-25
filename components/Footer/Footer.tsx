import React from "react";
import Link from "next/link";
import { Paper, TextField, Typography, Button, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

type Props = {};
import {
  DurationDiv,
  DurationTypography1,
  DurationGroup,
  DurationTypography,
  DurationSubDiv,
  TableCells,
  CustomFooterBackgroundDiv,
} from "./styles";
const Root = styled("div")(({ theme }) => ({
  "width": "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));
export default function Footer({}: Props) {
  return (
    <CustomFooterBackgroundDiv elevation={0}>
      <Divider sx={{ width: "100%" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/*  <Divider sx={{ width: "100%", background: "grey" }} /> */}
        <DurationDiv>
          <DurationGroup>
            <br></br>
            <DurationSubDiv>
              <TableCells>
                <DurationTypography1>{"Categories"}</DurationTypography1>
              </TableCells>
              <TableCells>
                <DurationTypography1>{"Support"}</DurationTypography1>
              </TableCells>
              <TableCells>
                <DurationTypography1>
                  {"Advertise on Elverr"}
                </DurationTypography1>
              </TableCells>
              <TableCells>
                <DurationTypography1>{"About"}</DurationTypography1>
              </TableCells>
            </DurationSubDiv>{" "}
            <DurationSubDiv>
              <TableCells>
                <DurationTypography>{"IT Services"}</DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography>{"Help & Support"}</DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography>{"Become a Seller"}</DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography>{"Contact us"}</DurationTypography>
              </TableCells>
            </DurationSubDiv>
            <DurationSubDiv>
              <TableCells>
                <DurationTypography>{"Cleaning Services"}</DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography>{"Trust & Safety"}</DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography>{"Forum"}</DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography>{"FAQ"}</DurationTypography>
              </TableCells>
            </DurationSubDiv>
            <DurationSubDiv>
              <TableCells>
                <DurationTypography>{"Event Services"}</DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography>{"Buying on Elverr"}</DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography>{"Inivite a Friend"}</DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography>{"Terms of Services"}</DurationTypography>
              </TableCells>
            </DurationSubDiv>
            <DurationSubDiv>
              <TableCells>
                <DurationTypography>{"Automative Services"}</DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography>{"Selling on Elverr"}</DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography></DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography>{"Blog"}</DurationTypography>
              </TableCells>
            </DurationSubDiv>
            <DurationSubDiv>
              <TableCells>
                <DurationTypography>
                  {"Building & Trade Services"}
                </DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography></DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography></DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography>{"Privacy Policy"}</DurationTypography>
              </TableCells>
            </DurationSubDiv>
            <DurationSubDiv>
              <TableCells>
                <DurationTypography>
                  {"Healthy & Beauty Services"}
                </DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography></DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography></DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography>
                  {"Terms and Conditions"}
                </DurationTypography>
              </TableCells>
            </DurationSubDiv>
            <DurationSubDiv>
              <TableCells>
                <DurationTypography>
                  {"Landscaping & Gardening Services"}
                </DurationTypography>
              </TableCells>
            </DurationSubDiv>
            <DurationSubDiv>
              <TableCells>
                <DurationTypography>{"Logistics Services"}</DurationTypography>
              </TableCells>
            </DurationSubDiv>
            <DurationSubDiv>
              <TableCells>
                <DurationTypography>{"Printing Services"}</DurationTypography>
              </TableCells>
            </DurationSubDiv>
            <DurationSubDiv>
              <TableCells>
                <DurationTypography>
                  {"Photography & Video Services"}
                </DurationTypography>
              </TableCells>
            </DurationSubDiv>
            <DurationSubDiv>
              <TableCells>
                <DurationTypography>
                  {"Wedding Events Services"}
                </DurationTypography>
              </TableCells>
            </DurationSubDiv>
            <DurationSubDiv>
              <TableCells>
                <DurationTypography>{"Repair Services"}</DurationTypography>
              </TableCells>
            </DurationSubDiv>
            <DurationSubDiv>
              <TableCells>
                <DurationTypography>{"Fitness Services"}</DurationTypography>
              </TableCells>
            </DurationSubDiv>
            <DurationSubDiv>
              <TableCells>
                <DurationTypography>{"Pet Services"}</DurationTypography>
              </TableCells>
            </DurationSubDiv>
            <DurationSubDiv>
              <TableCells>
                <DurationTypography>
                  {"Travel Agent & Tour Services"}
                </DurationTypography>
              </TableCells>
            </DurationSubDiv>
            <DurationSubDiv>
              <TableCells>
                <DurationTypography>
                  {"Classes & Courses Services"}
                </DurationTypography>
              </TableCells>
            </DurationSubDiv>
            <DurationSubDiv>
              <TableCells>
                <DurationTypography>
                  {"Manufacturing Services"}
                </DurationTypography>
              </TableCells>
            </DurationSubDiv>
          </DurationGroup>
        </DurationDiv>
        <br></br>
        <br></br>
        <Divider sx={{ width: "100%" }} />
        <div
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
            width: "100%",
            paddingLeft: "9rem",
          }}
        >
          <div style={{ display: "flex", gap: "10px", alignItems: "end" }}>
            <img src={"elverrlogo.png"} style={{ height: "40px" }} />

            <Typography fontSize={"13px"} sx={{ color: "black" }}>
              {" "}
              &nbsp; ©Elverr International Ltd. 2022 &nbsp;
            </Typography>
          </div>
          <div
            style={{
              display: "flex",

              justifyContent: "right",
              gap: "10px",
              marginRight: "60px",
            }}
          >
            <FacebookRoundedIcon sx={{ color: "black" }} />
            <TwitterIcon sx={{ color: "black" }} />
            <InstagramIcon sx={{ color: "black" }} />
            <LinkedInIcon sx={{ color: "black" }} />
          </div>
        </div>

        <br></br>
      </div>
    </CustomFooterBackgroundDiv>
  );
}
