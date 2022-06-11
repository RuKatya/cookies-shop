import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../View/Pages/App";
import Layout from "../View/Layout";

function Routers() {
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
        <Route path="/" element={<Layout pageWidth={screenWidth} />}>
          <Route index element={<App />} />
          {/* <Route path="cart" element={}/> */}
          {/* <Route path="login" element={}/> */}
          {/* <Route path="reg" element={}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
