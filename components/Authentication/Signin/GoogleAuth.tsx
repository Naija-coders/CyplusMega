/*
 * Copyright (C) 2020 Is Kibris - All Rights Reserved
 * Is Kibris Hiring - https://hiring.iskbris.com
 * Innovia - https://www.innoviadigital.biz
 *
 * Authors:
 * Diligence Vagere - diligence@innovia.biz
 *
 * Description:
 * Component to allow google signin or signup
 */

import React from "react";
import Cookies from "js-cookie";
import ReactDOM from "react-dom";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";

import { useTranslation } from "react-i18next";
import { AxiosError, AxiosResponse } from "axios";

import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import Clientapi from "../../../pages/api/client";
import { Button, Avatar } from "@mui/material";
import { StyleLoadingButton, StyledButton } from "../Signup/styles";
import axios from "axios";
//import OverlayLoader from "../../OverlayLoader"

import Image from "next/image";
import { resolve } from "path";
import { route } from "next/dist/server/router";
import { user } from "../../../state/action-creators";

interface Props {}
const googleClientId =
  "264301299946-ijjjc7iej14fqe906a3geog90sssjt98.apps.googleusercontent.com";

const GoogleOauth: React.FC<Props> = ({}) => {
  const [loading, setLoading] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [loginStatus, setLoginStatus] = React.useState(false);

  const route = useRouter();
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const data = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );

        const userdata = {
          name: data?.data?.name,
          email: data?.data?.email,
          picture: data?.data?.picture,
        };

        await Clientapi.post("api/googlelogin", data.data)
          .then((res) => {
            Cookies.set("auth_token", res?.data.auth_token);
          })
          .catch((err: AxiosError) => {
            console.log("failed to regsiter this user");
          });
      } catch (err) {
        console.log(err);
      }
      console.log("response is", response);
    },
  });

  //make a props in the main page and pass the function which is the google login to the header page that way it should be fixed
  return (
    <div style={{ justifyContent: "center" }}>
      <Button
        sx={{
          "background": "#1E293B",
          "&:hover": { background: "#1E293B" },
          "textTransform": "none",
          "width": "100%",
        }}
        size="large"
        onClick={() => {
          login();
        }}
        startIcon={
          <Avatar src="googleimagelogo.png" sx={{ width: 24, height: 24 }} />
        }
        variant="contained"
        style={{ borderRadius: "10px" }}
      >
        Sign up with Google
      </Button>
      {/*  {loading ? (
        <OverlayLoader
          handleClose={() => {
            setLoading(false)
          }}
          open
        />
      ) : null} */}
    </div>
  );
};

export default GoogleOauth;
