import { useEffect, useState, useCallback, useContext } from "react";
import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import CompaniesFeatured from "../components/Featured/CompaniesFeatured";
import ElverrBanner from "../components/Banner/ElverrBanner";

import { Dispatch } from "redux";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Layout from "./layout";
import HomePageLayout from "./homepagelayout";
import Banner from "../components/Banner/Banner";
import Clientapi from "./api/client";
import AvailableServices from "../components/AvailableServices";
import Testing from "./testing";
import LatestServices from "../components/LatestServices";
import Recommended from "../components/Recommended/Recommended";
import "react-loading-skeleton/dist/skeleton.css";
import Featured from "../components/Featured/Featured";
import Cookie from "../components/CookieManager/Cookie";
import dynamic from "next/dynamic";
import ChatWidget from "../components/ChatWidget/ChatWidget";
import StateContext from "../context/StateContext";
import Cookies from "js-cookie";
import BecomeaSeller from "../components/Featured/BecomeaSeller";
const TopCategories = dynamic(
  () => import("../components/TopCategories/TopCategories")
);

import "../i18n";
import NotLoggedIn from "../components/Banner/NotLoggedIn";
import PopularServices from "../components/Featured/PopularServices";
interface Props {
  query: any;
  ourService: any;
}

const Home: NextPage = () => {
  const [categories, setCategories] = useState([]);
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false);

  const CheckAuth = () => {
    if (AuthState.isLoggedIn) setLoggedIn(true);
    else {
      setLoggedIn(false);
    }
  };
  const { AuthState } = useContext<any>(StateContext);

  const LoggedIn = () => {
    return (
      <>
        <div>
          <div style={{ padding: "2.5rem" }}></div>
          <Banner />

          <Cookie />
          <Featured />
          <AvailableServices services={categories} />

          <LatestServices />
          <TopCategories />
          <Recommended />
          <ChatWidget />
        </div>{" "}
      </>
    );
  };
  const NotRegistered = () => {
    return (
      <>
        <NotLoggedIn />
        <CompaniesFeatured />
        <PopularServices />
        <ElverrBanner />
        <BecomeaSeller />
        <div style={{ marginTop: "50px" }}></div>
      </>
    );
  };
  useEffect(() => {
    CheckAuth();
  }, []);

  return (
    /*     <Layout showSearch={true} isVisible={false}>
      {" "}
      <Head>
        <title>Elverr - The Market Place</title>
      </Head>
      <div>
        <div style={{ padding: "2.5rem" }}></div>
        <Banner />

        <Cookie />
        <Featured />
        <AvailableServices services={categories} />

        <LatestServices />
        <TopCategories />
        <Recommended />
        <ChatWidget />
      </div>{" "}
    </Layout> */
    <HomePageLayout>
      <Head>
        <title>Elverr - The Market Place</title>
      </Head>
      {loggedIn ? <NotRegistered /> : <NotRegistered />}
    </HomePageLayout>
  );
};

export default Home;
