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
import { useRouter } from "next/router";

import { useTranslation } from "react-i18next";
import { AxiosError, AxiosResponse } from "axios";

import GoogleLogin from "react-google-login";
import { Button, Avatar } from "@mui/material";
import { StyleLoadingButton, StyledButton } from "../Signup/styles";
//import OverlayLoader from "../../OverlayLoader"

import Image from "next/image";
import { resolve } from "path";
import { route } from "next/dist/server/router";

interface Props {
  mode?: string;
  onSuccess?: () => void;
  onFail?: () => void;
  onAuthenticated?: () => void;
}
const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const clientid = JSON.stringify(googleClientId);

const GoogleOauth: React.FC<Props> = (props: Props) => {
  const [loading, setLoading] = React.useState(false);

  const route = useRouter();
  const googleLoginHandler = (response?: any) => {
    setLoading(true);
    const accessToken = { access_token: response.accessToken };
  };
  //make a props in the main page and pass the function which is the google login to the header page that way it should be fixed
  return (
    <div style={{ justifyContent: "center" }}>
      <GoogleLogin
        clientId={clientid}
        onAutoLoadFinished={(successLogin) => {}}
        onSuccess={googleLoginHandler}
        render={(ownProps) => (
          <Button
            sx={{
              "background": "#1E293B",
              "&:hover": { background: "#1E293B" },
              "textTransform": "none",
              "width": "100%",
            }}
            size="medium"
            onClick={ownProps.onClick}
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
        )}
      />
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
