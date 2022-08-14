import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../View/Pages/App";
import Layout from "../View/Layout";
import Cart from "../View/Pages/Cart";
import Auth from "../View/Pages/Auth";
import Login from "../View/Components/Login";
import Registration from "../View/Components/Registration";

function Routers() {
  const [userAuth, setUserAuth] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout pageWidth={screenWidth} userAuth={userAuth} />} >
          <Route index element={<App />} />
          <Route path="auth" element={<Auth />}>
            <Route index element={<Login />} />
            <Route path="registration" element={<Registration />} />
          </Route>
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
