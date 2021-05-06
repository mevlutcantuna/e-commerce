import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/action/products";
import ProductCard from "./ProductCard";

function Products(props) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.productsReducer.products);

  useEffect(() => {
    if (products.data !== undefined) {
      if (props.filter === "All") {
        setFilteredProducts(products.data);
      } else {
        const filteringProducts = products.data.filter(
          (item) => item.category === props.filter
        );
        setFilteredProducts(filteringProducts);
      }
    }
  }, [products, props.filter]);

  console.log(products.data);

  console.log(props.filter);

  return (
    <div
      style={{
        margin: "0 10%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {filteredProducts !== undefined &&
        filteredProducts.map((item) => (
          <ProductCard
            handleActivePage={props.handleActivePage}
            item={item}
            key={item.id}
          />
        ))}
    </div>
  );
}

export default Products;
