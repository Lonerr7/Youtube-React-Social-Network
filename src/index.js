import "./index.css";

import store from "./redux/redux-store";
import reportWebVitals from "./reportWebVitals";

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./App";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App state={store.getState()} />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
