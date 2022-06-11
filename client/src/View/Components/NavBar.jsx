import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = ({ pageWidth }) => {
  console.log(pageWidth);
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">Cookie-store &hearts;</Link>
      </div>

      <Link to="cart">Cart</Link>

      <div className="searchInput">
        <input type="text" name="searchCookie" placeholder="Search" />
      </div>

      {(toggleMenu || pageWidth > 700) && (
        <div className="logReg">
          <CloseIcon className="logReg__closeBtn" onClick={toggleNav} />
          <div className="logReg__links">
            <Link to="login">Login</Link>
            <Link to="reg">Registration</Link>
          </div>
        </div>
      )}

      <MenuIcon
        onClick={toggleNav}
        style={{
          background: "none",
        }}
        className="menuBtn"
      />
    </nav>
  );
};

export default NavBar;
