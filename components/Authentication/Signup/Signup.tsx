import React, { useContext, useState } from "react";
import {
  Button,
  Divider,
  IconButton,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import { AxiosError, AxiosResponse } from "axios";

import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
import {
  StyledButton,
  StyleCheckoutButton,
  StyledTypography,
  StyledButtonGoogle,
  StyledTextField,
  StyleLoadingButton,
  CustomDivider,
  ContainerDiv,
  StyledBox,
  StyledDiv,
} from "./styles";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Clientapi from "../../../pages/api/client";
import StateContext from "../../../context/StateContext";
import DispatchContext from "../../../context/DispatchContext";
import Cookies from "js-cookie";
import ReCaptchaV2 from "react-google-recaptcha";

import LoadingButton from "@mui/lab/LoadingButton";
import { LoginModal } from "../../LoginModal/Loginmodal";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

type Props = {};
const SignUp: React.FC<Props> = ({}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <ContainerDiv>
      <StyledBox component="form">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "3%",
          }}
        >
          <StyledTypography>
            Signup and start browsing services
          </StyledTypography>
          <StyledTextField type="text" size="medium" label="Full Name" />
          <StyledTextField type="text" size="medium" label="Email" />
          <StyledTextField
            type={showPassword ? "text" : "password"}
            size="medium"
            label="Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    /*     onClick={}
                  onMouseDown={handleMouseDownPassword} */
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <StyledDiv>
            <Checkbox />
            <Typography style={{ fontSize: "0.9rem" }}>
              Send me special offers,personalized recommendations,and learning
              tips
            </Typography>
          </StyledDiv>

          <StyledButton size="large">Sign Up</StyledButton>
          <span style={{ display: "flex" }}>
            {" "}
            <Typography
              style={{
                fontSize: "0.8rem",
                paddingTop: "1rem",
                display: "flex",
                gap: "5px",
              }}
            >
              By Signing up, you agree to our{" "}
              <Typography
                style={{
                  fontSize: "0.8rem",
                  textDecoration: "underline",
                  textDecorationThickness: "2px",
                  textUnderlinePosition: "under",
                  textDecorationLine: "underline",
                }}
              >
                Terms of Use
              </Typography>
              and{" "}
              <Typography
                style={{
                  fontSize: "0.8rem",
                  textDecoration: "underline",
                  textDecorationThickness: "2px",
                  textUnderlinePosition: "under",
                  textDecorationLine: "underline",
                }}
              >
                Privacy Policy
              </Typography>
            </Typography>
          </span>
        </div>
      </StyledBox>
    </ContainerDiv>
  );
};
export default SignUp;
