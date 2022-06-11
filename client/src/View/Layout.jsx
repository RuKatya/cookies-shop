import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

const Layout = ({ pageWidth }) => {
  return (
    <>
      <NavBar pageWidth={pageWidth} />

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
