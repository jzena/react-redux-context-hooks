import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalState from './context/GlobalState';
import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';
import './App.css';

const repo = `/${window.location.pathname.split('/')[1]}`;
class App extends Component {
  render() {
    return (
      <GlobalState>
        <BrowserRouter basename={repo}>
          <Switch>
            <Route path="/" component={ProductsPage} exact />
            <Route path="/cart" component={CartPage} exact />
          </Switch>
        </BrowserRouter>
      </GlobalState>
    );
  }
}

export default App;