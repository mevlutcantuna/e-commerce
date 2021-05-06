import React, { useEffect, useState } from "react";
import "../../styles/ProductDetailPage.scss";

import { withRouter } from "react-router";

import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../store/action/product";
import { Button } from "@material-ui/core";
import { BASKETCONSTANT } from "../../store/constant/basket";
import { routes } from "../../router/routes";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
function ProductDetailPage(props) {
  const detailProductId = props.match.params.productId;

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  const handleQuantityInput = (e) => {
    setQuantity(e.target.value);
  };

  useEffect(() => {
    dispatch(getProduct(detailProductId));
  }, [dispatch, detailProductId]);

  const product = useSelector((state) => state.productReducer.product);

  return (
    <React.Fragment>
      <Navbar handleActivePage={props.handleActivePage} />
      <div
        className={"backToProducts"}
        onClick={() => props.handleActivePage(routes.products.path)}
      >
        <ArrowBackIcon style={{ fontSize: "1.75rem" }} />
        Back To Products
      </div>
      {product.data !== undefined &&
        product.data.map((item) => (
          <div key={item.id} className={"productDetail"}>
            <div className={"productDetail__leftSide"}>
              <img alt={"$"} src={item.image} />
            </div>
            <div className={"productDetail__rightSide"}>
              <div className={"productDetail__rightSide__title"}>
                {item.name}
              </div>
              <div className={"productDetail__rightSide__info"}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </div>
              <div className={"productDetail__rightSide__category"}>
                <span>{item.category}</span>
                <span>{item.prices}</span>
              </div>
              <div className={"productDetail__rightSide__button"}>
                <div className={"productDetail__rightSide__button__input"}>
                  <button
                    className={
                      quantity < 1
                        ? "productDetail__rightSide__button__input__none"
                        : ""
                    }
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <input
                    value={quantity}
                    onChange={(e) => handleQuantityInput(e)}
                    type={"number"}
                  />
                  <button onClick={increaseQuantity}>+</button>
                </div>
                <Button
                  onClick={() =>
                    dispatch({
                      type: BASKETCONSTANT.ADD_TO_BASKET,
                      payload: { item, productQuantity: quantity },
                    })
                  }
                  disabled={quantity <= 0 && true}
                  style={{
                    width: "8rem",
                    height: "2.75rem",
                    marginLeft: "0.5rem",
                  }}
                  color={"secondary"}
                  variant={"contained"}
                >
                  Buy
                </Button>
              </div>
            </div>
          </div>
        ))}
    </React.Fragment>
  );
}

export default withRouter(ProductDetailPage);
