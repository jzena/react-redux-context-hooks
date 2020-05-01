import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './MainNavigation.css';
import { AppContext } from '../context/shop-context';

const MainNavigation = props => {
  const { state, dispatch } = useContext(AppContext);
  const { auth: { user } } = state;
  function handleLogOut() {
    dispatch({
      type: 'SIGN_OUT'
    })
  }
  return (
    <header className="main-navigation">
      <nav>
        { user &&
          <ul>
            <li>
              <NavLink to="/home">Products</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart ({ props.cartItemNumber })</NavLink>
            </li>
            <li>
              <NavLink to="/cart" onClick={ handleLogOut }>Log out</NavLink>
            </li>
          </ul>
        }
      </nav>
    </header>
  );
};

export default MainNavigation;