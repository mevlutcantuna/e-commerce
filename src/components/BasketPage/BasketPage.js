import React, {useState} from "react";
import "../../styles/BasketPage.scss";

//components
import Navbar from "../Products/Navbar";

//routes
import { routes } from "../../router/routes";

//material-ui
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {
  Button, Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";
import { RemoveShoppingCart } from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import { BASKETCONSTANT } from "../../store/constant/basket";
import PaymentModal from "./PaymentModal";

function BasketPage(props) {
  //get username from localStorage login
  const username = JSON.parse(localStorage.getItem("login")).username;

  //get basket from reducer
  const basket = useSelector((state => state.basketReducer.basket));

  //dispatch
  const dispatch = useDispatch();

  //if page refresh,it makes same reducer state and localStorage basket_${username}
  React.useEffect(() => {
    if (basket !== []) {
      dispatch({ type: BASKETCONSTANT.UPDATE_BASKET, payload: username });
    }
  }, [dispatch, username]);

  //price of products
  const prices = basket.map((e) => e.item.prices * e.productQuantity);
  let totalPrice = 0;
  for (let i = 0; i < prices.length; i++) {
    totalPrice = totalPrice + prices[i];
  }

  const [toggle,setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <div className={"basketPage"}>
      <PaymentModal totalPrice={totalPrice} handleToggle={handleToggle} toggle={toggle} setToggle={setToggle}/>
      <Navbar handleActivePage={props.handleActivePage} />
      <div
        onClick={() => props.handleActivePage(routes.products.path)}
        className={"basketPage__backToProducts"}
      >
        <ArrowBackIcon fontSize={"large"} /> Back To Products
      </div>
      <div className={"basketPage__payment"}>
        <span className={"basketPage__payment__totalPrice"}>
          Total Price : ${totalPrice}
        </span>
        <Button onClick={handleToggle} variant={"outlined"} color={"secondary"}>
          Payment
        </Button>
      </div>
      <div className={"basketPage__products"}>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {basket.map((e) => (
                <TableRow key={Math.random()}>
                  <TableCell component="th" scope="row">
                    <img alt={"#"} src={e.item.image} />
                  </TableCell>
                  <TableCell align="left">
                    <span className={"basketPage__products__name"}>
                      {e.item.name}
                    </span>
                  </TableCell>
                  <TableCell align="left">
                    <div className={"basketPage__products__quantity"}>
                      <span className={"basketPage__products__quantity__span"}>
                        {e.productQuantity}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell align="left">
                    <span className={"basketPage__products__prices"}>
                      ${e.item.prices}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button>
                      <RemoveShoppingCart
                        onClick={() =>
                          dispatch({
                            type: BASKETCONSTANT.REMOVE_FROM_BASKET,
                            payload: e,
                          })
                        }
                        color={"secondary"}
                      />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default BasketPage;
