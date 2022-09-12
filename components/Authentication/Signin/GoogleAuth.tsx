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

import { useTranslation } from "react-i18next";
import { AxiosError, AxiosResponse } from "axios";

import { GoogleLogin } from "@react-oauth/google";
import Clientapi from "../../../pages/api/client";
import { Button, Avatar } from "@mui/material";
import { StyleLoadingButton, StyledButton } from "../Signup/styles";
//import OverlayLoader from "../../OverlayLoader"

import Image from "next/image";
import { resolve } from "path";
import { route } from "next/dist/server/router";

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
  const googleLoginHandler = (response?: any) => {
    setLoading(true);
    const accessToken = { access_token: response.accessToken };
    Clientapi.post("/api/login/google", accessToken)
      .then(async (response: AxiosResponse) => {
        Cookies.set("auth_token", response.data.token, {
          domain: process.env.NEXT_PUBLIC_APP_DOMAIN ?? ".iskibris.com",
          sameSite: "None",
          secure: true,
          expires: 364,
        });
        localStorage.setItem("mano_token", response.data["token"]);

        console.log("this shit worked", response);
      })
      .catch((err: AxiosError) => {
        setLoading(false);
      });
  };
  //make a props in the main page and pass the function which is the google login to the header page that way it should be fixed
  return (
    <div style={{ justifyContent: "center" }}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          console.log("api worked oh");
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      ;
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
