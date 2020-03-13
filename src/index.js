import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import repositoryReducer from "./store/repositories/reducer";
import "./styles/App.css";
import App from "./App";

const rootReducer = combineReducers({
  repo: repositoryReducer,
});
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
