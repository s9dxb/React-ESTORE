import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useThemeHook } from "./GlobalComponents/ThemeProvider";
import Header from "./Components/Header";
// import { Router } from "@reach/router";
import { Routes, Route } from "react-router-dom";

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
      <Routes>
        <Route path="/src/Pages/Home.jsx" element={<Home />} />
        {/* <MyAccount path="my-account" /> */}
        {/* <SignIn path="sign-in" /> */}
        {/* <Register path="register" /> */}
        <Route path="product-details/:productId" element={<ProductDetails />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </main>
  );
}

export default App;
