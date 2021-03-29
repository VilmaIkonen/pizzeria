import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import Contact from './components/Contact/Contact'

const App = () => {
  const cartItemCount = useSelector((state) =>
    state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  );

  return (
    <BrowserRouter>
      <Navigation cartItemCount={cartItemCount} />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/products' component={Products} exact />
        <Route path='/cart' component={Cart} exact />
        <Route path='/contact' component={Contact} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
