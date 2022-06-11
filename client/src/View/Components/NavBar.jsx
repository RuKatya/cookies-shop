import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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

      <Link to="cart">
        <ShoppingCartOutlinedIcon />
      </Link>

      {/* <div className="searchInput">
        <SearchOutlinedIcon className="searchInput__searchIcon" />
        <input type="text" name="searchCookie" placeholder="Search" />
      </div> */}

      <Paper
        component="form"
        className="searchInput"
        sx={{ p: "1px 4px", display: "flex", alignItems: "center" }}
      >
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Paper>

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
