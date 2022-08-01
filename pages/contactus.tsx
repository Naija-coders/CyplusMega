import * as React from "react";
import Layout from "./layout";
import ContactUs from "../components/ContactUs";

interface IAppProps {}

const Contact: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <Layout>
      <ContactUs />
    </Layout>
  );
};

export default Contact;
