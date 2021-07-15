import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Cards from "./components/cards/Cards";
import Cart from "./components/cart/Cart";
import Card from "./components/card/Card";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./app.scss";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/shop/:id" exact component={Cards}/>
          <Route path="/card/:id" exact component={Card}/>
          <Route path="/cart" exact component={Cart}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
};

export default App

