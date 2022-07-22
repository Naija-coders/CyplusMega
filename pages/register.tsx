import React, { useContext } from "react";
import Layout from "./layout";
import Userprofile from "../components/Profile";
import Signup from "../components/Authentication/Signup/Signup";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

type Props = {};
const authToken = Cookies.get("auth_token");

const Register = (props: Props) => {
  const route = useRouter();
  React.useEffect(() => {
    if (authToken) route.push("/");
  }, [authToken]);
  return (
    <Layout showSearch={true}>
      <Signup />
    </Layout>
  );
};
export default Register;
