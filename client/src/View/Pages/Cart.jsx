import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <h1>Cart</h1>

      {cart.map((item, index) => {
        return <CartItem item={item} key={index} />;
      })}
    </div>
  );
};

export default Cart;
