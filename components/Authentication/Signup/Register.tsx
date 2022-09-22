import React, { useContext, useState } from "react";
import {
  Paper,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Avatar,
  IconButton,
} from "@mui/material";

import { StyledBox, StyleContainer } from "../../NotLoggedIn/style";
import SwiperSlider from "../../SlideCustomCard/SwiperSlider";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import GoogleOauth from "./GoogleAuth";
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
import { StyleLoadingButton, StyledButton } from "./styles";
import { StyledTextField } from "../Signin/styles";
import { AxiosError, AxiosResponse } from "axios";
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
const Register: React.FC<Props> = ({}) => {
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
  const handleGoogleLogin = () => {
    Clientapi.get("api/auth/google").then((response) => {
      console.log(response, "checking response");
    });
  };
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

        setLoading(false);
        route.push("/");
      })
      .catch((err: AxiosError) => {
        console.log("invalid data entered");
      });
  };
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
              gap: "0.4rem",
            }}
          >
            <BasicTextHeader style={{ color: "#000000" }}>
              Welcome 👋
            </BasicTextHeader>

            <BasicTextbody>
              Clarity gives you the blocks and components you need to create a
              truly professional website.
            </BasicTextbody>
            <br></br>

            <GoogleOauth />
            <form
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <BasicTextbody sx={{ fontSize: "0.9rem" }}>
                {"First & Last Name "}
              </BasicTextbody>
              <StyledTextField
                size="small"
                placeholder="i.e Davon lean"
                type="text"
                required
                {...register("name", { required: true, maxLength: 100 })}
              />

              <BasicTextbody sx={{ fontSize: "0.9rem" }}>
                Email Address{" "}
              </BasicTextbody>
              <StyledTextField
                size="small"
                placeholder="i.e davon@gmail.com"
                type="text"
                required
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              <BasicTextbody sx={{ fontSize: "0.9rem" }}>
                Password{" "}
              </BasicTextbody>
              <StyledTextField
                type={showPassword ? "text" : "password"}
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
            </form>

            <div style={{ display: "flex", gap: "10px" }}>
              <BasicTextbody sx={{ fontSize: "0.9rem" }}>
                {"Already have an account?"}
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
                {"Sign in"}
              </BasicTextbody>
            </div>
          </Paper>
        </div>
      </StyleContainer>
    </StyledBox>
  );
};

export default Register;
