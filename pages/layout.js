import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import "../i18n/index";

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
