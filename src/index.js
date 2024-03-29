import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { Login } from "./Authentication_pages/Login";
import Register from "./Authentication_pages/Register";
import Create from "./Product/Create";
import { Cart } from "./Cart/Cart";
import { Show } from "./Product/Show";
import { ProductsList } from "./Product/ProductsList";
import { Nav } from "./components/Nav";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
