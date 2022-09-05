import React from "react";
import Head from "next/head";
import Register from "../components/Authentication/Signup/Register";
import HomePageLayout from "./homepagelayout";
type Props = {};

export default function login({}: Props) {
  return (
    <HomePageLayout>
      <Head>
        <title>Elverr - Login</title>
      </Head>
      <Register />
      <div style={{ marginTop: "40px" }}></div>
    </HomePageLayout>
  );
}
