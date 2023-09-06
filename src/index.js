import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./Context/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="women-s_association">
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>
);
