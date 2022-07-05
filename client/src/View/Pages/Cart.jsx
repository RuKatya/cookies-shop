import { useDispatch, useSelector } from "react-redux";
import { cleareAllCart } from "../../store/actions/user";
import { getUser } from "../../store/selectors/user";
import CartItem from "../Components/CartItem";

const Cart = () => {
  const user = useSelector(getUser);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Cart</h1>

      {user.length > 0 ? (
        <>
          {user[0].cart.length > 0 ? (
            <>
              <button onClick={() => dispatch(cleareAllCart(user[0].id))}>
                Clear cart
              </button>
              {user[0].cart.map((item, index) => {
                return <CartItem item={item} key={index} userId={user[0].id} />;
              })}
            </>
          ) : (
            <>EMPTY</>
          )}
        </>
      ) : (
        <>LOGIN</>
      )}
    </div>
  );
};

export default Cart;
