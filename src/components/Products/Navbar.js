import React, { useEffect } from "react";
import "../../styles/Navbar.scss";
import { Button } from "@material-ui/core";
import { ShoppingBasket } from "@material-ui/icons";
import { routes } from "../../router/routes";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/action/user";

function Navbar(props) {
  const dispatch = useDispatch();

  const basket = useSelector((state) => state.basketReducer.basket);
  console.log(basket);

  const localUser = JSON.parse(localStorage.getItem("login"));
  const username = localUser.username;

  useEffect(() => {
    //get user of account
    dispatch(getUser(username));
  }, [dispatch, username]);

  //logout
  const logout = () => {
    //removed login and basket from localStorage
    localStorage.removeItem("login");
    props.handleActivePage(routes.login.path);
  };

  //localStorage basketQuantity
  const localBasketQuantity = JSON.parse(
    localStorage.getItem(`basket_${username}`)
  );

  return (
    <div className={"navbar"}>
      <div className={"navbar__title"}>Title</div>
      <div className={"navbar__side"}>
        <Button variant="outlined" color="default" onClick={logout}>
          Logout
        </Button>
        <div
          onClick={() => props.handleActivePage(routes.basket.path)}
          className={"navbar__side__basket"}
        >
          <ShoppingBasket className={"navbar__side__basket__icon"} />
          <span className={"navbar__side__basket__title"}>Basket</span>
          <span>
            (
            {localBasketQuantity !== undefined ? localBasketQuantity.length : 0}
            )
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
