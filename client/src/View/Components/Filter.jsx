import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../store/actions/filter";
import { selectProductFilter } from "../../store/selectors/filter";

const Filters = () => {
  const dispatch = useDispatch();
  const productFilter = useSelector(selectProductFilter);
  console.log(productFilter);

  return (
    <div>
      <button
        onClick={() => dispatch(setFilter("All"))}
        style={{ color: productFilter === "All" ? "red" : "black" }}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter("Dairy"))}
        style={{ color: productFilter === "Dairy" ? "red" : "black" }}
      >
        Dairy
      </button>
      <button
        onClick={() => dispatch(setFilter("Vegan"))}
        style={{ color: productFilter === "Vegan" ? "red" : "black" }}
      >
        Vegan
      </button>
      <button
        onClick={() => dispatch(setFilter("Gluten Free"))}
        style={{ color: productFilter === "Gluten Free" ? "red" : "black" }}
      >
        Gluten Free
      </button>
    </div>
  );
};

export default Filters;
