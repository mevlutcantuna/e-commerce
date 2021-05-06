import React from "react";

//SCSS
import "../../styles/SignUp.scss";

//material-ui
import { TextField, Button } from "@material-ui/core";

//notification component
import { store } from "react-notifications-component";

//redux
import { connect } from "react-redux";
import { SIGNUP } from "../../store/constant/signUp";
import { postUser } from "../../store/action/signUp";
import { getUsers } from "../../store/action/users";
import { getUser } from "../../store/action/user";

function SignUp({
  handleIsOpen,
  handleUsername,
  handleEmail,
  handlePassword,
  username,
  password,
  email,
  users,
  getUsers,
  postUser,
  signUpFetched,
  getUser,
  user,
}) {
  React.useEffect(() => {
    getUsers();
    getUser(username);
  }, [getUsers, getUser, username]);

  console.log(user.data);

  const addUser = () => {
    let newId = users.length + 1;
    const newUser = {
      id: newId,
      username: username,
      email: email,
      password: password,
      basket: [],
    };

    if (user.data[0] !== Object) {
      postUser(newUser);
      store.addNotification({
        message: "başarılı bir şekilde kayıt oluştu",
        type: "success",
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
    } else {
      store.addNotification({
        message: "böyle bir kullanıcı bulunmaktatır",
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
  };

  return (
    <div className={"sign-up"}>
      <div className={"sign-up__title"}>
        <h1>Sing - Up</h1>
      </div>
      <div className={"sign-up__input"}>
        <TextField
          onChange={(e) => handleUsername(e)}
          value={username}
          id="outlined-username-input"
          label="username"
          type="username"
          autoComplete="current-username"
          variant="outlined"
        />
        <TextField
          onChange={(e) => handleEmail(e)}
          value={email}
          id={"outlined-email-input"}
          label={"email"}
          type={"email"}
          autoComplete={"current-email"}
          variant={"outlined"}
        />
        <TextField
          onChange={(e) => handlePassword(e)}
          value={password}
          id={"outlined-password-input"}
          label={"password"}
          type={"password"}
          autoComplete={"current-password"}
          variant={"outlined"}
        />
      </div>
      <div className={"sign-up__button"}>
        <Button onClick={addUser} variant="contained">
          Sign Up
        </Button>
      </div>
      <div className={"sign-up__link"}>
        <button onClick={handleIsOpen}>If you have a member,click here!</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.signupReducer.username,
    email: state.signupReducer.email,
    password: state.signupReducer.password,
    users: state.usersReducer.users,
    signUpFetching: state.signupReducer.fetching,
    signUpFetched: state.signupReducer.fetched,
    signUpError: state.signupReducer.error,
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleUsername: (e) =>
      dispatch({ type: SIGNUP.HANDLE_USERNAME, payload: e.target.value }),
    handleEmail: (e) =>
      dispatch({ type: SIGNUP.HANDLE_EMAIL, payload: e.target.value }),
    handlePassword: (e) =>
      dispatch({ type: SIGNUP.HANDLE_PASSWORD, payload: e.target.value }),
    postUser: (user) => dispatch(postUser(user)),
    getUsers: () => dispatch(getUsers()),
    getUser: (username) => dispatch(getUser(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
