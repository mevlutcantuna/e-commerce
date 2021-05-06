//redux
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootreducer from "./reducer/rootreducer";

//promise-middleware
import promise from "redux-promise-middleware";

//devtools
import { composeWithDevTools } from "redux-devtools-extension";

let middleware = applyMiddleware(promise, thunk);

export const store = createStore(rootreducer, composeWithDevTools(middleware));
