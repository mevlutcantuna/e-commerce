import React from "react";
import "../../styles/SignIn.scss";
import { Button, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { SIGNIN } from "../../store/constant/signIn";
import { store } from "react-notifications-component";
import { getUser } from "../../store/action/user";
import { routes } from "../../router/routes";
import { BASKETCONSTANT } from "../../store/constant/basket";

function SignIn({ handleIsOpen, handleActivePage }) {
  const username = useSelector((state) => state.signinReducer.username);
  const password = useSelector((state) => state.signinReducer.password);
  const user = useSelector((state) => state.userReducer.user);

  const basket = useSelector((state) => state.basketReducer.basket);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (username !== "".trim() || undefined) {
      dispatch(getUser(username));
    }
  }, [username, dispatch]);

  console.log(user);

  const signIn = () => {
    console.log(user.data[0]);
    if (user.data[0].username !== "".trim() || undefined) {
      if (
        user.data[0].username === username &&
        user.data[0].password === password
      ) {
        const loginArray = user.data[0];
        localStorage.setItem("login", JSON.stringify(loginArray));
        if (localStorage.getItem(`basket_${user.data[0].username}`) === null) {
          localStorage.setItem(
            `basket_${user.data[0].username}`,
            JSON.stringify([])
          );
        }

        if (
          JSON.parse(
            localStorage.getItem(`basket_${user.data[0].username}`)
          ) !== basket
        ) {
          console.log("can");
          dispatch({
            type: BASKETCONSTANT.UPDATE_BASKET,
            payload: user.data[0].username,
          });
        }

        return handleActivePage(routes.products.path);
      } else if (user.data[0].username !== username) {
        return store.addNotification({
          message: "Bir Hata Oluştu...",
          type: "danger",
          insert: "top",
          width: 300,
          showIcon: true,
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 1500,
            onScreen: false,
          },
        });
      }
    }
    console.log(user);
  };

  return (
    <div className={"sign-in"}>
      <div className={"sign-in__tittle"}>
        <h1>Sing In</h1>
      </div>
      <div className={"sign-in__input"}>
        <TextField
          onChange={(e) =>
            dispatch({ type: SIGNIN.HANDLE_USERNAME, payload: e.target.value })
          }
          value={username}
          id={"outlined-username-input"}
          label={"username"}
          type={"username"}
          autoComplete={"current-username"}
          variant={"outlined"}
        />
        <TextField
          onChange={(e) =>
            dispatch({ type: SIGNIN.HANDLE_PASSWORD, payload: e.target.value })
          }
          value={password}
          id={"outlined-password-input"}
          label={"password"}
          type={"password"}
          autoComplete={"current-password"}
          variant={"outlined"}
        />
      </div>
      <div className={"sign-in__button"}>
        <Button onClick={signIn}>Sign In</Button>
      </div>
      <div className={"sign-in__link"}>
        <button onClick={handleIsOpen}>
          If you don't have a member,click here!
        </button>
      </div>
    </div>
  );
}

export default SignIn;
