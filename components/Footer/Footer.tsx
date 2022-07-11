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
            <DurationSubDiv>
              <TableCells>
                <DurationTypography1>{"Categories"}</DurationTypography1>
              </TableCells>
              <TableCells>
                <DurationTypography1>
                  {"For Posting Services"}
                </DurationTypography1>
              </TableCells>
              <TableCells>
                <DurationTypography1>{"Helpful Resources"}</DurationTypography1>
              </TableCells>
              <TableCells>
                <DurationTypography1>{"About"}</DurationTypography1>
              </TableCells>
            </DurationSubDiv>{" "}
            <DurationSubDiv>
              <TableCells>
                <DurationTypography>{"Browse Services"}</DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography>{"Products"}</DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography>
                  {"Terms and Conditions"}
                </DurationTypography>
              </TableCells>{" "}
              <TableCells>
                <DurationTypography>{"Partnerships"}</DurationTypography>
              </TableCells>
            </DurationSubDiv>{" "}
            <DurationSubDiv>
              <TableCells>
                <DurationTypography>{"Blog"}</DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography>{"Blog"}</DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography>{"Blog"}</DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography>{"Carears"}</DurationTypography>
              </TableCells>
            </DurationSubDiv>{" "}
            <DurationSubDiv>
              <TableCells>
                <DurationTypography>{"Contact Us"}</DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography>{"Contact Us"}</DurationTypography>
              </TableCells>
              <TableCells>
                <DurationTypography>{"Contact Us"}</DurationTypography>
              </TableCells>
            </DurationSubDiv>{" "}
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
