import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './MainNavigation.css';
import { AppContext } from '../context/shop-context';
import { IMainNavigation } from './../context/types';
import { AuthType } from './../context/enum';

const MainNavigation = (props: IMainNavigation) => {
  console.log('MainNavigation');
  const { state, dispatch } = useContext(AppContext);
  const {
    auth: { user },
    shop: { cart },
  } = state;
  const cartItemNumber = cart.reduce((count, curItem) => {
    return count + curItem.quantity;
  }, 0);

  function handleLogOut() {
    dispatch({
      type: AuthType.SIGN_OUT,
    });
  }
  return (
    <header className="main-navigation">
      <nav>
        {user && (
          <ul>
            <li>
              <NavLink to="/home">Products</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart ({cartItemNumber})</NavLink>
            </li>
            <li>
              <NavLink to="/home" onClick={handleLogOut}>
                Log out
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default MainNavigation;
