import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppProvider } from './context/shop-context';
import Router from "./router";
import './App.css';
// import { ProductsPage, CartPage, LoginPage } from './pages';

const repo = `/${window.location.pathname.split('/')[1]}`;
const App = (props: any) => {
  console.log('App:', props);
  return (
    <AppProvider>
      <BrowserRouter basename={repo}>
        <Router />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
