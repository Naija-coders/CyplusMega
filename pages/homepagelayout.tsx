import HeaderNotLoggedIn from "../components/NotLoggedIn/HeaderNotLoggedIn";
import FooterNotLoggedIn from "../components/NotLoggedIn/FooterNotLoggedIn";

import React from "react";
import "../i18n";
type Props = {
  children: any;
};
const HomePageLayout: React.FC<Props> = ({ children }) => (
  <>
    <HeaderNotLoggedIn />
    {children}

    <FooterNotLoggedIn />
  </>
);

export default HomePageLayout;
