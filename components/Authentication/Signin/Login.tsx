import {
  Paper,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Avatar,
} from "@mui/material";
import * as React from "react";

import { StyledBox, StyleContainer } from "../..//NotLoggedIn/style";
import SwiperSlider from "../../SlideCustomCard/SwiperSlider";
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
} from "../../Featured/styles";
import { StyledTextField } from "./styles";

type Props = {};
const Login: React.FC<Props> = ({}) => {
  return (
    <StyledBox>
      <StyleContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Paper
            elevation={0}
            style={{
              width: "50%",
              background: "rgba(128, 204, 40, 0.1)",

              display: "flex",
              flexDirection: "column",
              padding: "3rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "95%" }}>
              <SwiperSlider />
            </div>
          </Paper>
          <Paper
            elevation={0}
            style={{
              width: "40%",
              background: "white",

              display: "flex",
              flexDirection: "column",
              padding: "3rem",
              gap: "1rem",
            }}
          >
            <BasicTextHeader style={{ color: "#000000" }}>
              Welcome 👋
            </BasicTextHeader>
            <BasicTextbody>
              Clarity gives you the blocks and components you need to create a
              truly professional website.
            </BasicTextbody>
            <Button
              sx={{
                "background": "#1E293B",
                "&:hover": { background: "#1E293B" },
                "textTransform": "none",
              }}
              startIcon={
                <Avatar
                  src="googleimagelogo.png"
                  sx={{ width: 24, height: 24 }}
                />
              }
              variant="contained"
              style={{ borderRadius: "20px" }}
            >
              Sign up with Google
            </Button>
            <BasicTextbody sx={{ fontSize: "0.9rem" }}>
              First & last name{" "}
            </BasicTextbody>
            <StyledTextField size="small" placeholder="i.e Davon Lean" />
            <BasicTextbody sx={{ fontSize: "0.9rem" }}>
              Email Address{" "}
            </BasicTextbody>
            <StyledTextField size="small" placeholder="i.e davon@gmail.com" />
            <BasicTextbody sx={{ fontSize: "0.9rem" }}>Password </BasicTextbody>
            <StyledTextField
              type={"password"}
              size="small"
              placeholder="********"
            />
            <FormControlLabel
              value="start"
              control={
                <Checkbox
                  sx={{
                    "color": "#747582",
                    "&.Mui-checked": {
                      color: "green",
                    },
                  }}
                />
              }
              label={
                <BasicTextbody sx={{ fontSize: "0.9rem" }}>
                  Remember me{" "}
                </BasicTextbody>
              }
              labelPlacement="end"
            />
            <Button
              variant="contained"
              sx={{
                "borderRadius": "20px",
                "textTransform": "none",
                "width": "40%",
                "&:hover": { background: "#34A422" },
                "background": "#34A422",
              }}
              size="large"
            >
              Sign up
            </Button>
            <div style={{ display: "flex", gap: "10px" }}>
              <BasicTextbody sx={{ fontSize: "0.9rem" }}>
                {"Don't have an account?"}
              </BasicTextbody>
              <BasicTextbody
                sx={{
                  "fontSize": "0.9rem",
                  "color": "#34A422",
                  "&:hover": {
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                }}
              >
                {"Create free account"}
              </BasicTextbody>
            </div>
          </Paper>
        </div>
      </StyleContainer>
    </StyledBox>
  );
};

export default Login;
