import { Typography } from "@mui/material";
import React from "react";
import {
  StyledButton,
  StyledTypography,
  SubTypography,
  StyledTextField,
  StyledDiv,
  StyledDivButton,
} from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";

import { useTranslation } from "react-i18next";

type Props = {};

export default function Banner({}: Props) {
  const { t, i18n } = useTranslation();

  const state = useSelector((state: RootState) => state.appstate);
  return (
    <>
      <br></br>
      <div className="maindiv">
        <div
          style={{
            position: "relative",
            marginTop: "50px",

            background:
              "linear-gradient(164.22deg, #23395D 11.02%, rgba(16, 101, 240, 0) 112.14%) !important",
          }}
        >
          <div
            style={{
              width: "100%",

              display: "flex",
              height: "300px",
              justifyContent: "center",
              background: `url("happybanner.jpg")`,

              alignItems: "center",

              flexDirection: "column",
            }}
          >
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
          </div>
        </div>
      </div>
    </>
  );
}
