import React, { useContext, useEffect } from 'react';

import { AppContext } from '../context/shop-context';
import MainNavigation from '../components/MainNavigation';
import './Cart.css';

const CartPage = props => {
  console.log('CartPage');
  const { state, dispatch } = useContext(AppContext);
  const { shop } = state;

  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <React.Fragment>
      <MainNavigation
        cartItemNumber={ shop.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0) }
      />
      <main className="cart">
        { shop.cart.length <= 0 && <p>No Item in the Cart!</p> }
        <ul>
          { shop.cart.map(cartItem => (
            <li key={ cartItem.id }>
              <div>
                <strong>{ cartItem.title }</strong> - ${ cartItem.price } (
                { cartItem.quantity })
              </div>
              <div>
                <button
                  onClick={ () => dispatch({
                    type: 'REMOVE_PRODUCT',
                    productId: cartItem.id
                  }) }
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          )) }
        </ul>
      </main>
    </React.Fragment>
  );
};

export default CartPage;