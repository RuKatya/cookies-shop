import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

const Layout = ({ pageWidth, userAuth }) => {
  return (
    <>
      <NavBar pageWidth={pageWidth} userAuth={userAuth} />

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
