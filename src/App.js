import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HeaderTwo from "./components/HeaderTwo";
import Home from "./components/Home";
import ProductDisplay from "./components/ProductDisplay";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import ScrollToTop from "./components/ScrollToTop";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";



function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        //User is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // User is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);

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
