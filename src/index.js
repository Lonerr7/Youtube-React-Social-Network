import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./App";
import state from './redux/state';
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
