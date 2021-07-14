import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Cart from "./components/cart/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/cart" exact component={Cart}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
};

export default App

