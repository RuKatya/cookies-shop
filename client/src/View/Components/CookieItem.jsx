import { useState } from "react";

const CookieItem = ({ cookie }) => {
  let [countOfCookies, setCountOfCookies] = useState(1);

  function hendleAddToCart(e) {
    e.preventDefault();

    console.log(e);

    const cookieId = e.target.id;

    console.log(cookieId);
  }

  return (
    <div>
      <div key={cookie.index} id={cookie.name} className="cookie">
        <img src={cookie.src} alt={cookie.name} />
        <div className="mainPage__cookiesGrid--information">
          <p>{cookie.name}</p>
          <p>{cookie.price}$</p>
        </div>
        <form onSubmit={hendleAddToCart} id={cookie.name}>
          <button type="button">-</button>
          <input type="number" name="countCookies" value={countOfCookies} />
          <button type="button">+</button>
          <button type="submit">Add to cart</button>
        </form>
      </div>
    </div>
  );
};

export default CookieItem;
