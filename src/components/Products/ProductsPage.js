import React from "react";
import Navbar from "./Navbar";
import Filters from "./Filters";
import Products from "./Products";
import { useDispatch } from "react-redux";
import { BASKETCONSTANT } from "../../store/constant/basket";

function ProductsPage(props) {
  const [filter, setFilter] = React.useState("All");

  const showFilterProducts = (filterName) => {
    setFilter(filterName);
  };

  const dispatch = useDispatch();

  const username = JSON.parse(localStorage.getItem("login")).username;
  const basket = JSON.parse(localStorage.getItem(`basket_${username}`));
  React.useEffect(() => {
    if (basket !== []) {
      dispatch({ type: BASKETCONSTANT.UPDATE_BASKET, payload: username });
    }
  }, [basket, dispatch, username]);

  console.log(basket);

  return (
    <div>
      <Navbar handleActivePage={props.handleActivePage} />
      <Filters showFilterProducts={showFilterProducts} />
      <Products filter={filter} handleActivePage={props.handleActivePage} />
    </div>
  );
}

export default ProductsPage;
