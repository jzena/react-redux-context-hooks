import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  ProductsPage,
  CartPage,
  LoginPage
} from "./pages";
import { AppContext } from './context/shop-context';

const Router = () => {
  const { state } = useContext(AppContext);
  const { auth: { user } } = state;
  console.log('route state', user);

  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (

      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page
      <Route { ...rest } render={ props => (
        user ?
          <Component { ...props } />
          : <Redirect to="/login" />
      ) } />
    );
  };

  const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    return (
      // restricted = false meaning public route
      // restricted = true meaning restricted route
      <Route { ...rest } render={ props => (
        user && restricted ?
          <Redirect to="/home" />
          : <Component { ...props } />
      ) } />
    );
  };
  
  return (
    <Switch>
      <PublicRoute path="/login" restricted={ false } component={ LoginPage } exact />
      <PrivateRoute path="/home" component={ ProductsPage } exact />
      <PrivateRoute path="/cart" component={ CartPage } exact />
      <Redirect from="/" to="/home" />
    </Switch>
  )
};

export default Router;