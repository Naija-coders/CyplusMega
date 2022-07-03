import React from "react";
import Layout from "./layout";
import Services from "../components/Service/Service";
import Navbar from "../components/Navbar/Navbar";

type Props = {};

const Service = (props: Props) => {
  return (
    <Layout showSearch={true}>
      <Services />
    </Layout>
  );
};
export default Service;
