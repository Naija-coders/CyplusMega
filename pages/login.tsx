import React from "react";
import Login from "../components/Authentication/Signin/Login";
import HomePageLayout from "./homepagelayout";
type Props = {};

export default function login({}: Props) {
  return (
    <HomePageLayout>
      <Login />
    </HomePageLayout>
  );
}
