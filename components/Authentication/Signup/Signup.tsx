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
import { useRouter } from "next/router";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const { AuthState } = useContext<any>(StateContext);
  const { AuthDispatcher } = useContext<any>(DispatchContext);
  const [recapcha, setRecapcha] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const route = useRouter();
  function handleClick() {
    setLoading(true);
  }
  const onSubmit = async (data: any) => {
    console.log(data.email, "your email is ");
    console.log(data.password, "password is ");
    console.log(data.name, "the name you entered is");
    await handleClick();
    await Clientapi.post("api/company/register", data)
      .then((response) => {
        const user = response.data;
        console.log("you just created an account", user);
        Cookies.set("auth_token", response.data.auth_token);
        AuthDispatcher({ type: "login" });
        AuthDispatcher({ type: "addUser", payload: response.data });

        setArticle({
          ...article,
          user,
        });
        console.log("article payload data", article);

        setLoading(false);
        route.push("/");
      })
      .catch((err: AxiosError) => {
        console.log("invalid data entered");
      });
  };
  const [article, setArticle] = React.useState<IArticle | {}>();
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <ContainerDiv>
      <StyledBox component="form" onSubmit={handleSubmit(onSubmit)}>
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
          <StyledTextField
            type="text"
            size="medium"
            label="Full Name"
            required
            {...register("name", { required: true, maxLength: 100 })}
          />
          <StyledTextField
            type="text"
            size="medium"
            label="Email"
            required
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <StyledTextField
            type={showPassword ? "text" : "password"}
            size="medium"
            label="Password"
            required
            {...register("password", { required: true, maxLength: 100 })}
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
          {loading ? (
            <StyleLoadingButton
              loading={loading}
              loadingPosition="end"
              endIcon={<ArrowForwardIosIcon />}
              variant="contained"
              size="large"
            >
              Sign Up
            </StyleLoadingButton>
          ) : (
            <StyledButton size="large" type="submit">
              Sign Up
            </StyledButton>
          )}

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
