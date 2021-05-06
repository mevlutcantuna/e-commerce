import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//react-notification
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

//redux
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ReactNotification />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
