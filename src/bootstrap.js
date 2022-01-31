import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "webpack_module_federation/store";
import App from "./App";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>
  , document.getElementById("root"));
