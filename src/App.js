import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HeaderTwo from "./components/HeaderTwo";
import Home from "./components/Home";
import ProductDisplay from "./components/ProductDisplay";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Switch>
        <Route component={ Home } path='/' exact >
          <Header />
          <HeaderTwo />
          <Home />
        </Route>
        <Route component={ ProductDisplay } path='/products' >
          <Header />
          <HeaderTwo />
          <ProductDisplay />
        </Route>
        <Route component={ Checkout } path='/checkout' >
          <Header />
          <HeaderTwo />
          <Checkout />
        </Route>
        <Route component={ Login } path='/login' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
