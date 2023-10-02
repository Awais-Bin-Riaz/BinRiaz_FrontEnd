import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './containers/HomePage';
import { ProductListPage } from './containers/ProductListPage';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, updateCart } from './actions';
import { ProductDetailsPage } from './containers/ProductDetailsPage';
import {CartPage} from './containers/CartPage';
import {CheckoutPage} from './containers/CheckoutPage';
import OrderPage from './containers/OrderPage';
import OrderDetailsPage from './containers/OrderDetailsPage';
import Loading from './components/LoadingPage/index';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
  const [isLoading, setIsLoading] = useState(true); // State variable for loading


  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn())
    }
  }, [auth.authenticate])

  useEffect(()=>{
    console.log('App.js-updateCart')
    dispatch(updateCart());
    setIsLoading(false);
  },[auth.authenticate])

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" exact component={CartPage} />
          <Route path="/checkout" exact component={CheckoutPage} />
          <Route path="/account/orders" component={OrderPage} />
          <Route path="/order_details/:orderId" component={OrderDetailsPage} />
          <Route path="/:productSlug/:productId/p" component={ProductDetailsPage} />
          <Route path="/:slug" component={ProductListPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
