
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppProvider } from './context/shop-context';
import Router from "./router";
import './App.css';

const repo = `/${ window.location.pathname.split('/')[1] }`;
const App = props => {
  return (
    <AppProvider>
      <BrowserRouter basename={ repo }>
        <Router />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;