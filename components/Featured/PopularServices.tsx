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
  BasicServiceButton,
  BasicServiceDiv,
  BasicServiceGrid,
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
        <BasicServiceGrid>
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
          <BasicServiceDiv>
            <BasicText>PROJECTS</BasicText>
            <BasicServiceTitle>
              Get ahead of the competition with{" "}
              <BasicServiceTitle sx={{ color: "#34A422" }}>
                Elverr
              </BasicServiceTitle>
            </BasicServiceTitle>
            <BasicServiceButton variant={"outlined"}>
              See More
            </BasicServiceButton>
          </BasicServiceDiv>
        </BasicServiceGrid>
      </div>
    </StyledBox>
  );
}
