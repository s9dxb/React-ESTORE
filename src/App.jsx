import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useThemeHook } from "./GlobalComponents/ThemeProvider";
import Header from "./Components/Header";
import { Router } from "@reach/router";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import MyAccount from "./Pages/MyAccount";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";

function App() {
  const [theme] = useThemeHook();
  return (
    <main
      className={theme ? "bg-black" : "bg-light-2"}
      style={{ height: "100vh", overflowY: "auto" }}
    >
      <Header />
      <Router>
        <Home path="/" />
        <MyAccount path="my-account" />
        <SignIn path="sign-in" />
        <Register path="register" />
        <ProductDetails path="product-details/:productId" />
        <Cart path="/cart" />
      </Router>
    </main>
  );
}

export default App;
