import React from "react";
import Layout from "./layout";
import Services from "../components/Service/Service";
import Navbar from "../components/Navbar/Navbar";

type Props = {};

const services: React.FC<Props> = ({}) => {
  return (
    <>
      <Navbar isfixed={true} />
      <Services />
    </>
  );
};
export default services;
