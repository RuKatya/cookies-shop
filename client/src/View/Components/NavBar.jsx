import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import { getUser } from "../../store/selectors/user";
import { logoutUser } from "../../store/actions/user";
import { useEffect } from "react";

const NavBar = ({ pageWidth }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const [toggleMenu, setToggleMenu] = useState(false);
  const [totalToPay, setTotalToPay] = useState();

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  async function searchCookie(e) {
    e.preventDefault();

    const inputSearch = document.querySelector("input[name=searchInput]");
    console.log(inputSearch.value);

    if (e.type === "click") {
      inputSearch.value = "";
    }
  }

  const logout = () => {
    dispatch(logoutUser);
  };

  useEffect(() => {
    if (user[0]?.cart.length > 0) {
      const pricesOfItems = user[0].cart.map((item) => item.count * item.price);
      setTotalToPay(pricesOfItems.reduce((a, b) => a + b));
    }
  }, [user]);

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="./img/logo/cookie-logo-small.png" alt="cookie-shop" />
        </Link>
      </div>

      <Link to="cart" className="cartIcon">
        <ShoppingCartOutlinedIcon />
        <>
          {user[0]?.cart.length > 0 ? (
            <>
              <div className="cartIcon__count">{user[0].cart.length}</div>
            </>
          ) : null}
        </>
      </Link>

      {user[0]?.cart.length > 0 ? (
        <>
          <div>{totalToPay}$</div>
        </>
      ) : null}

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
          {user.length > 0 ? (
            <>
              <div onClick={logout}>Logout</div>
            </>
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
