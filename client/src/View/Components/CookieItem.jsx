import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addCountToExistItem, addToUserCart } from "../../store/actions/user";
import { getAllProducts } from "../../store/selectors/products";
import { getUser } from "../../store/selectors/user";

const CookieItem = ({ cookie }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const products = useSelector(getAllProducts);

  const idProduct = useRef();

  const [countOfCookies, setCountOfCookies] = useState(1);

  // console.log(user[0].cart);
  function hendleAddToCart(e) {
    e.preventDefault();

    const userId = user[0].id;
    const productId = idProduct.current.id;

    const item = products.find((item) => item.id === productId);
    item["count"] = countOfCookies;

    const searchProductInCart = user[0].cart.find(
      (item) => item.id === productId
    );

    if (searchProductInCart) {
      dispatch(addCountToExistItem(userId, productId, countOfCookies));
      console.log(`in cart`);
    } else {
      dispatch(addToUserCart(userId, item));
    }
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
          <p>{cookie.name}</p>
          <p>{cookie.price}$</p>
          <p>{cookie.typeOfFood}</p>
        </div>
        {user[0] ? (
          <>
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
          </>
        ) : (
          <>Need to Login</>
        )}
      </div>
    </div>
  );
};

export default CookieItem;
