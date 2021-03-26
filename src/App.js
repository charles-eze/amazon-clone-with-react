import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HeaderTwo from "./components/HeaderTwo";
import Home from "./components/Home";
import ProductDisplay from "./components/ProductDisplay";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Orders from "./components/Orders";
import ScrollToTop from "./components/ScrollToTop";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import PaymentPage from "./components/PaymentPage";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51IZ0lgHpeRC1eUPAigAxrVfxXzLANjrDR4Fr0sz37x3NS8KKPw7zexgE26bgwNhwPs3iPTI1ICPRu3M2s4MPWXro007JnLaRkZ');



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
        <Route component={ PaymentPage } path='/payment' >
          <Header />
          <HeaderTwo />
          <Elements stripe={promise}>
            <PaymentPage />
          </Elements>
        </Route>
        <Route component={ Login } path='/login' />
        <Route component={ Orders } path='/orders' >
          <Header />
          <HeaderTwo />
          <Orders />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
