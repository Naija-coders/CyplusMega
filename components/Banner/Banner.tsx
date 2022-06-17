import { Button, Divider, Typography } from "@mui/material";
import React from "react";
import {
  StyledButton,
  StyledTypography,
  SubTypography,
  StyledTextField,
  StyledDiv,
  StyledPaper,
  StyledContainers,
  CustomContainer,
  CustomDivContainer,
  StyledDivButton,
  SubText,
  Text,
} from "./styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import Paper from "@mui/material/Paper";

import { useTranslation } from "react-i18next";

type Props = {};

export default function Banner({}: Props) {
  const { t, i18n } = useTranslation();

  const state = useSelector((state: RootState) => state.appstate);
  return (
    <>
      <br></br>
      <div className="maindiv">
        <CustomContainer>
          <CustomDivContainer>
            <div
              style={{
                marginTop: "20px",
              }}
            >
              <StyledContainers>
                <StyledPaper elevation={1}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "20px",
                      padding: "20px",
                      width: "100%",
                    }}
                  >
                    <Text align="center">Post a Service</Text>
                    <Divider sx={{ width: "100%" }} />

                    <SubText align="center">
                      Advertise your business for free
                    </SubText>
                    <StyledButton
                      variant="contained"
                      endIcon={<ArrowRightAltIcon />}
                    >
                      Post Now{" "}
                    </StyledButton>
                  </div>
                </StyledPaper>
                <div>
                  {" "}
                  <img
                    src="happybanner.jpg"
                    style={{
                      width: "100%",
                      objectFit: "cover",

                      display: "flex",
                      height: "300px",
                      opacity: "100%",
                    }}
                  />
                </div>

                {/*  <StyledTypography>Great Services</StyledTypography>{" "}
            <SubTypography>{t("every_service")}</SubTypography>
            <br></br>
            <StyledTextField
              placeholder={t("find_service")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              size="small"
              variant="outlined"
              color="primary"
            />
            <StyledDiv>
              <StyledDivButton>{t("it_services")}</StyledDivButton>
              <StyledDivButton> {t("Events")}</StyledDivButton>
              <StyledDivButton>{t("Cleaning")}</StyledDivButton>
            </StyledDiv>
            <br></br>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Avenir Light",
              fontSize: { xs: "0.7rem", md: "15px" },
              color: "#626462",
            }}
          >
            Welcome to a place where you find reliable services
          </Typography>*/}
              </StyledContainers>
            </div>
          </CustomDivContainer>
        </CustomContainer>
      </div>
    </>
  );
}
