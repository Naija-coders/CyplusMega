import React from "react";
import Head from "next/head";
import Login from "../components/Authentication/Signin/Login";
import HomePageLayout from "./homepagelayout";
type Props = {};

export default function login({}: Props) {
  return (
    <HomePageLayout>
      <Head>
        <title>Elverr - Login</title>
      </Head>
      <Login />
    </HomePageLayout>
  );
}
