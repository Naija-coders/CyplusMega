import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import React from "react";
import "../i18n";
type Props = {
  children?: any;
  showSearch?: boolean;
  isVisible?: boolean;
};
const Layout: React.FC<Props> = ({ children, showSearch, isVisible }) => (
  <>
    <Navbar showSearch={showSearch} isfixed={isVisible} />
    {children}
    <Footer />
  </>
);

export default Layout;
