import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cart";

const CookieItem = ({ cookie }) => {
  const nameOfCookie = useRef();
  const idProduct = useRef();
  const dispatch = useDispatch();
  const [countOfCookies, setCountOfCookies] = useState(1);

  function hendleAddToCart(e) {
    e.preventDefault();

    const cookieName = nameOfCookie.current?.innerText;
    const productId = idProduct.current.id;

    dispatch(addToCart(productId, cookieName, countOfCookies));
  }

  const handleCount = (symbol) => {
    switch (symbol) {
      case "+":
        setCountOfCookies((countOfCookies) => ++countOfCookies);
        break;
      case "-":
        setCountOfCookies((countOfCookies) => --countOfCookies);
        if (countOfCookies <= 1) {
          setCountOfCookies(1);
        }
        break;
      default:
    }
  };

  return (
    <div>
      <div key={cookie.index} id={cookie.name} className="cookie">
        <img src={`${cookie.src}_big.jpg`} alt={cookie.name} />
        <div className="mainPage__cookiesGrid--information">
          <p ref={nameOfCookie}>{cookie.name}</p>
          <p>{cookie.price}$</p>
          <p>{cookie.typeOfFood}</p>
        </div>
        <form onSubmit={hendleAddToCart} id={cookie.id} ref={idProduct}>
          <button type="button" onClick={() => handleCount("-")}>
            -
          </button>
          <div>{countOfCookies}</div>
          <button type="button" onClick={() => handleCount("+")}>
            +
          </button>
          <button type="submit">Add to cart</button>
        </form>
      </div>
    </div>
  );
};

export default CookieItem;
