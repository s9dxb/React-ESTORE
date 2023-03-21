import React from "react";
import ReactDOM from "react-dom/client";
import { render } from "react-dom";
import App from "./App";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./GlobalComponents/ThemeProvider";
import { CartProvider } from "react-use-cart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
);
