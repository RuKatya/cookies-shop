import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { changeCountItem, deleteFromCart } from "../../store/actions/user";

const CartItem = ({ item, userId }) => {
  const idProduct = useRef();
  const countOfProduct = useRef();

  const dispatch = useDispatch();
  const [countChange, setCountChange] = useState(item.count);
  const [showBtnChange, setShowBtnChange] = useState(false);

  const hendleChangeCount = (e) => {
    e.preventDefault();

    setShowBtnChange(false);
    console.log(countChange);
    const productId = idProduct.current.id;
    console.log(productId);
    dispatch(changeCountItem(userId, productId, countChange));
  };

  return (
    <div>
      <h2>{item.name}</h2>
      <h3 ref={countOfProduct}>{item.count}</h3>
      <button
        onClick={() => {
          dispatch(deleteFromCart(userId, item.id));
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
