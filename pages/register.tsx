import React, { useContext } from "react";
import Layout from "./layout";
import Userprofile from "../components/Profile";
import Signup from "../components/Authentication/Signup/Signup";

type Props = {};

const Register = (props: Props) => {
  return (
    <Layout showSearch={true}>
      <Signup />
    </Layout>
  );
};
export default Register;
