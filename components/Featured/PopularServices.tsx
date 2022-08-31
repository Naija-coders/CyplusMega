import React from "react";
import { StyledBox } from "../NotLoggedIn/style";
import {
  BasicText,
  BasicTextHeader,
  BasicTextbody,
  CustomPaper,
  BasicTextTitle,
  BasicPaper,
  BasicImage,
  BasicServiceTitle,
  BasicDiv,
} from "./styles";
import { Paper, Button } from "@mui/material";
type Props = {};

export default function PopularServices({}: Props) {
  return (
    <StyledBox>
      <div
        style={{
          display: "flex",
          justifyItems: "space-evenly",
          flexDirection: "column",

          maxWidth: "1500px",
          width: "100%",
          marginTop: "50px",
          gap: "2rem",
        }}
      >
        {" "}
        <BasicTextHeader style={{ color: "#2B2B2B" }}>
          Popular Services
        </BasicTextHeader>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto ",
            rowGap: "30px",
            columnGap: "1px",
          }}
        >
          <BasicPaper elevation={0}>
            <BasicImage src="servicesit.jpeg" />
            <BasicDiv>
              <BasicServiceTitle> IT Services</BasicServiceTitle>
              <BasicText>
                {" "}
                We’ll get you directly seated and inside for you to enjoy the
                show.
              </BasicText>
            </BasicDiv>
          </BasicPaper>{" "}
          <BasicPaper elevation={0}>
            <BasicImage src="servicelogistics.jpeg" />
            <BasicDiv>
              <BasicServiceTitle> Logistics Services</BasicServiceTitle>
              <BasicText>
                {" "}
                We’ll get you directly seated and inside for you to enjoy the
                show.
              </BasicText>
            </BasicDiv>
          </BasicPaper>{" "}
          <BasicPaper elevation={0}>
            <BasicImage src="servicebuilding.jpeg" />
            <BasicDiv>
              <BasicServiceTitle> Building Services</BasicServiceTitle>
              <BasicText>
                {" "}
                We’ll get you directly seated and inside for you to enjoy the
                show.
              </BasicText>
            </BasicDiv>
          </BasicPaper>{" "}
          <BasicPaper elevation={0}>
            <BasicImage src="serviceautomative.jpeg" />
            <BasicDiv>
              <BasicServiceTitle> Automative Services</BasicServiceTitle>
              <BasicText>
                {" "}
                We’ll get you directly seated and inside for you to enjoy the
                show.
              </BasicText>
            </BasicDiv>
          </BasicPaper>{" "}
          <BasicPaper elevation={0}>
            <BasicImage src="serviceimage.jpeg" />
            <BasicDiv>
              <BasicServiceTitle> Cleaning Services</BasicServiceTitle>
              <BasicText>
                {" "}
                We’ll get you directly seated and inside for you to enjoy the
                show.
              </BasicText>
            </BasicDiv>
          </BasicPaper>{" "}
          <div
            style={{
              display: "flex",
              flexDirection: "column",

              width: "300.4px",
              justifyItems: "center",
              height: "315.4px",
              justifyContent: "center",
              padding: "1rem",
              gap: "1rem",
            }}
          >
            <BasicText>PROJECTS</BasicText>
            <BasicServiceTitle>
              get ahead of the competition with{" "}
              <BasicServiceTitle sx={{ color: "#34A422" }}>
                Elverr
              </BasicServiceTitle>
            </BasicServiceTitle>
            <Button
              style={{
                width: "146.68px",
                height: "59.69",
                border: "1.08524px solid #80CC28",
                borderRadius: "86.8191px",
                background: "#ffffff",
                color: "#747582",
                textTransform: "none",
              }}
              variant={"outlined"}
            >
              See More
            </Button>
          </div>
        </div>
      </div>
    </StyledBox>
  );
}
