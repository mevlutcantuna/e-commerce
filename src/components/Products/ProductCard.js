import React from "react";
import "../../styles/ProductCard.scss";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { routes } from "../../router/routes";
import { useDispatch } from "react-redux";
import { BASKETCONSTANT } from "../../store/constant/basket";

function ProductCard({ item, handleActivePage }) {
  const detailPath = routes.productDetail.path.replace(":productId", item.id);

  const dispatch = useDispatch();

  return (
    <div className={"product-card"}>
      <div
        onClick={() => handleActivePage(detailPath)}
        className={"product-card__image"}
      >
        <img alt={"#"} src={item.image} />
      </div>
      <div className={"product-card__title"}>{item.name}</div>
      <div className={"product-card__bottom"}>
        <div className={"product-card__bottom__prices"}>${item.prices}</div>
        <div className={"product-card__bottom__addToBasket"}>
          <AddShoppingCartIcon
            className={"product-card__bottom__addToBasket__icon"}
            onClick={() =>
              dispatch({
                type: BASKETCONSTANT.ADD_TO_BASKET,
                payload: { item, productQuantity: 1 },
              })
            }
            color={"secondary"}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
