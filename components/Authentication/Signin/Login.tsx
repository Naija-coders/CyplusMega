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
import { StyleLoadingButton, StyledButton } from "../Signup/styles";
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
const Login: React.FC<Props> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { AuthState } = useContext<any>(StateContext);
  const { AuthDispatcher } = useContext<any>(DispatchContext);
  const [recapcha, setRecapcha] = useState(false);
  const [loading, setLoading] = React.useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const route = useRouter();

  function handleClick() {
    setLoading(true);
  }
  const [loginsucess, setLoginsucess] = useState(true);
  const [article, setArticle] = React.useState<IArticle | {}>();

  const onSubmit = async (data: any) => {
    await handleClick();
    setLoginsucess(true);
    await Clientapi.post("api/login", data)
      .then((response) => {
        console.log("it worked hahha", response);
        const user = response.data;
        console.log("your auth token is", response.data.auth_token);

        Cookies.set("auth_token", response.data.auth_token);
        AuthDispatcher({ type: "login" });
        AuthDispatcher({ type: "addUser", payload: response.data });

        setArticle({
          ...article,
          user,
        });

        console.log("the user state is", AuthState.user);

        setLoginsucess(true);

        setLoading(true);
        route.push("/");
      })
      .catch((err: AxiosError) => {
        setLoginsucess(false);
        console.log("invalid data entered");

        setLoading(false);
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
              Sign in with Google
            </Button>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <BasicTextbody sx={{ fontSize: "0.9rem" }}>
                Email Address{" "}
              </BasicTextbody>
              <StyledTextField
                size="small"
                placeholder="i.e davon@gmail.com"
                type="text"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              <BasicTextbody sx={{ fontSize: "0.9rem" }}>
                Password{" "}
              </BasicTextbody>
              <StyledTextField
                type={"password"}
                placeholder="********"
                size="small"
                {...register("password", { required: true, maxLength: 100 })}
              />

              {!loginsucess && (
                <BasicTextbody style={{ color: "red" }}>
                  Wrong username or password, please try again.
                </BasicTextbody>
              )}
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
