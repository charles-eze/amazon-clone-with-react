import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HeaderTwo from "./components/HeaderTwo";
import Home from "./components/Home";
import ProductDisplay from "./components/ProductDisplay";
import Checkout from "./components/Checkout";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Header />
      <HeaderTwo />
      <Switch>
        <Route component={ Home } path='/' exact />
        <Route component={ ProductDisplay } path='/products' />
        <Route component={ Checkout } path='/checkout' />
      </Switch>
      

    </BrowserRouter>
  );
}

export default App;
