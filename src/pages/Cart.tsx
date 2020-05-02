import React, { useContext, useEffect } from 'react';

import { AppContext } from '../context/shop-context';
import MainNavigation from '../components/MainNavigation';
import { ShopType } from './../context/enum';
import './Cart.css';

const CartPage: React.FC = () => {
  const {
    state: { shop },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    console.log(shop);
    // eslint-disable-next-line
  }, [shop.cart]);

  return (
    <React.Fragment>
      <MainNavigation />
      <main className="cart">
        {shop.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {shop.cart.map((cartItem) => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button
                  onClick={() =>
                    dispatch({
                      type: ShopType.REMOVE_PRODUCT,
                      payload: { productId: cartItem.id },
                    })
                  }
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
};

export default CartPage;
