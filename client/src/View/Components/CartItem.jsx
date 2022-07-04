import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { chengeAmount, removeFromCart } from "../../store/actions/cart";

const CartItem = ({ item }) => {
  const idProduct = useRef();
  const countOfProduct = useRef();

  // console.log(countOfProduct);

  const dispatch = useDispatch();
  const [countChange, setCountChange] = useState(item.count);
  const [showBtnChange, setShowBtnChange] = useState(false);

  const hendleChangeCount = (e) => {
    e.preventDefault();

    setShowBtnChange(false);
    const productId = idProduct.current.id;

    dispatch(chengeAmount(productId, countChange));
  };

  // const save

  return (
    <div>
      <h2>{item.name}</h2>
      <h3 ref={countOfProduct}>{item.count}</h3>
      <button
        onClick={() => {
          dispatch(removeFromCart(item.id));
        }}
      >
        Delete
      </button>
      <form onSubmit={hendleChangeCount} id={item.id} ref={idProduct}>
        <button
          type="button"
          onClick={() => {
            setCountChange((countChange) => --countChange);
            setShowBtnChange(true);
          }}
        >
          -
        </button>
        <div>{countChange}</div>
        <button
          type="button"
          onClick={() => {
            setCountChange((countChange) => ++countChange);
            setShowBtnChange(true);
          }}
        >
          +
        </button>
        {showBtnChange ? <button type="submit">Change amount</button> : null}
      </form>
    </div>
  );
};

export default CartItem;
