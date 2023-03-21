import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useThemeHook } from "./GlobalComponents/ThemeProvider";
import Header from "./Components/Header";
import { Router } from "@reach/router";

import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  const [theme] = useThemeHook();
  return (
    <main
      className={theme ? "bg-black" : "bg-light-2"}
      style={{ height: "100vh", overflowY: "auto" }}
    >
      <Header />
      <Router>
        <Home path="/src/Pages/Home.jsx" />
        {/* <MyAccount path="my-account" /> */}
        {/* <SignIn path="sign-in" /> */}
        {/* <Register path="register" /> */}
        <ProductDetails path="product-details/:productId" />
        <Cart path="/src/Pages/Cart.jsx" />
      </Router>
    </main>
  );
}

export default App;
