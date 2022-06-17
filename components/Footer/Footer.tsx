import React from "react";
import Link from "next/link";
import { Paper, TextField, Typography, Button, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
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
    <CustomFooterBackgroundDiv>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ background: "#2e2e2e", width: "100%" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            mano
          </div>
        </div>
        {/*  <Divider sx={{ width: "100%", background: "grey" }} /> */}
        <DurationDiv>
          <DurationGroup>
            <DurationSubDiv>
              <TableCells>
                <DurationTypography1>{"For Services"}</DurationTypography1>
              </TableCells>
              <TableCells>
                <DurationTypography1>
                  {"For Posting Services"}
                </DurationTypography1>
              </TableCells>
              <TableCells>
                <DurationTypography1>{"Helpful Resources"}</DurationTypography1>
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

        <Divider sx={{ width: "100%", background: "grey", height: "0.3px" }}>
          <div style={{ marginTop: "-10px", background: "#0C0C0C" }}>
            <Typography fontSize={"13px"}>
              {" "}
              &nbsp;Copyright ©Elverr 2022 &nbsp;
            </Typography>
          </div>
        </Divider>

        <br></br>
      </div>
    </CustomFooterBackgroundDiv>
  );
}
