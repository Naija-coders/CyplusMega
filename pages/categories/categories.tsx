import { AnySet } from "immer/dist/internal";
import React from "react";
import CustomCategories from "../../components/Categories";
import Clientapi from "../api/client";
import Layout from "../layout";
type Props = {
  ourService: any;
};

export default function categories({ ourService }: Props) {
  return (
    <Layout showSearch={true}>
      <CustomCategories servicesState={ourService} />
    </Layout>
  );
}
export async function getStaticProps(context: any) {
  let datas;
  const mydata = Clientapi.get("/api/company/categories")
    .then((response) => {
      datas = response.data;
      console.log("hey checking the static prop to see if theres any changes");
    })
    .catch((error) => {
      console.log("it didnt wr=ork");
    });
  await mydata;
  const ourService = JSON.stringify(datas);
  return {
    props: { ourService },
    revalidate: 360,
  };
}
