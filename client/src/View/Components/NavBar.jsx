import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const NavBar = ({ pageWidth, userAuth }) => {
  // console.log(pageWidth);
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  async function searchCookie(e) {
    e.preventDefault();
    console.log(e);

    const inputSearch = document.querySelector("input[name=searchInput]");
    console.log(inputSearch.value);

    // const {data} = await axios.get('', {inputSearch})
    // console.log(data)

    if (e.type === "click") {
      inputSearch.value = "";
    }
  }
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="./img/cookie-logo-small.png" alt="cookie-shop" />
        </Link>
      </div>

      <Link to="cart">
        <ShoppingCartOutlinedIcon />
      </Link>

      <Paper
        component="form"
        className="searchInput"
        sx={{ p: "1px 4px", display: "flex", alignItems: "center" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          name="searchInput"
          onChange={searchCookie}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={searchCookie}
        >
          <SearchIcon />
        </IconButton>
      </Paper>

      {(toggleMenu || pageWidth > 700) && (
        <div className="logReg">
          {userAuth ? (
            <>Go nahui!!!</>
          ) : (
            <>
              <CloseIcon className="logReg__closeBtn" onClick={toggleNav} />
              <div className="logReg__links">
                <Link to="auth" onClick={toggleNav}>
                  Login
                </Link>
                <Link to="auth/registration" onClick={toggleNav}>
                  Registration
                </Link>
              </div>
            </>
          )}
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
