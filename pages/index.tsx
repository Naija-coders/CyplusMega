import { useEffect, useState, useCallback } from "react";
import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { Dispatch } from "redux";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Layout from "./layout";
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
const TopCategories = dynamic(
  () => import("../components/TopCategories/TopCategories")
);

import "../i18n";
const Home: NextPage = () => {
  const [categories, setCategories] = useState([]);
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    if (categories.length === 0) {
      Clientapi.get("api/Categories").then((response) => {
        setCategories(response.data);
      });
      console.log("the lenght wasnt fetched");
    }
  }, [categories]);
  console.log("checking via the index", categories);
  return (
    <Layout showSearch={true} isVisible={false}>
      {" "}
      <Head>
        <title>Elverr - The Market Place</title>
      </Head>
      <div>
        <div style={{ padding: "2rem" }}></div>
        <Banner />

        <Cookie />
        <Featured />
        <AvailableServices services={categories} />

        <LatestServices />
        <TopCategories />
        <Recommended />
        <ChatWidget />
      </div>{" "}
    </Layout>
  );
};

export default Home;
