import { BASKETCONSTANT } from "../constant/basket";

const initialState = {
  basket: [],
  totalPrice: 0,
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case BASKETCONSTANT.ADD_TO_BASKET:
      //create a new product
      const newProduct = action.payload;
      //create a new total price
      const newTotalPrices =
        action.payload.productQuantity * action.payload.item.prices +
        state.totalPrice;

      const newBasket = [...state.basket,newProduct];

      //get username from localStorage login
      const username = JSON.parse(localStorage.getItem("login")).username;

      // set basket in localStorage
      if (localStorage.getItem(`basket_${username}`) !== null) {
        localStorage.setItem(`basket_${username}`, JSON.stringify(newBasket));
      }

      return {
        ...state,
        basket: [...state.basket, newProduct],
        totalPrice: newTotalPrices,
      };

    case BASKETCONSTANT.UPDATE_BASKET:
      const localBasket = JSON.parse(
        localStorage.getItem(`basket_${action.payload}`)
      );
      return { ...state, basket: localBasket };
    case BASKETCONSTANT.REMOVE_FROM_BASKET:
      console.log(action.payload);
      console.log(state.basket);
      const removedBasket = state.basket.filter(
        (e) => e.item.id !== action.payload.item.id
      );
      console.log(removedBasket);
      const userName = JSON.parse(localStorage.getItem("login")).username;
      localStorage.setItem(`basket_${userName}`, JSON.stringify(removedBasket));
      console.log(removedBasket);
      return { ...state, basket: removedBasket };
    default:
      return state;
  }
};

export default basketReducer;
