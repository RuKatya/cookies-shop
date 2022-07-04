import { useSelector } from "react-redux";
import { selectProductFilter } from "../../store/selectors/filter";
import { selectVisibleProducts } from "../../store/selectors/product";
import CookieItem from "../Components/CookieItem";
import Filters from "../Components/Filter";

function App() {
  const productFilter = useSelector(selectProductFilter);
  const cookies = useSelector((state) =>
    selectVisibleProducts(state, productFilter)
  );

  return (
    <div className="mainPage">
      <Filters />
      <div className="mainPage__cookiesGrid">
        {cookies.map((cookie, index) => {
          return <CookieItem cookie={cookie} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
