import {
  Paper,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import * as React from "react";

import { StyledBox, StyleContainer } from "../..//NotLoggedIn/style";
import SwiperSlider from "../../SlideCustomCard/SwiperSlider";

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
            <div>Welcome</div>
            <div>
              Clarity gives you the blocks and components you need to create a
              truly professional website.
            </div>
            <Button variant="contained" style={{ borderRadius: "20px" }}>
              Sign up with Google
            </Button>
            <label>First & last name </label>
            <TextField />
            <label>Email Address </label>
            <TextField />
            <label>Password </label>
            <TextField />
            <FormControlLabel
              value="start"
              control={<Checkbox />}
              label="Remember me"
              labelPlacement="end"
            />
            <Button variant="contained" style={{ borderRadius: "20px" }}>
              Sign up
            </Button>
          </Paper>
        </div>
      </StyleContainer>
    </StyledBox>
  );
};

export default Login;
