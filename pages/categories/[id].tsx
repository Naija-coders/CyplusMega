import React from "react";
import CustomCategories from "../../components/Categories";
import Clientapi from "../api/client";
import Layout from "../layout";
interface Props {
  query: any;
  ourService: any;
}
const Categoriesid: React.FC<Props> = ({ query, ourService }) => {
  return (
    <Layout showSearch={true} isVisible={true}>
      <CustomCategories query={query} servicesState={ourService} />
    </Layout>
  );
};
export async function getServerSideProps(context: any) {
  const query = context.query;
  let datas;
  const { res } = context;
  res.setHeader("Cache-Control", `s-maxage=3660, stale-while-revalidate=4600`);
  const mydata = Clientapi.get("/api/company/categories")
    .then((response) => {
      datas = response.data;
    })
    .catch((error) => {});
  await mydata;
  const ourService = datas;

  return {
    props: { query, ourService },
  };
}

export default Categoriesid;
