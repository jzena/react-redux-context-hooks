import React, { useContext } from 'react';

import { AppContext } from '../context/shop-context';
import MainNavigation from '../components/MainNavigation';
import './Products.css';

const ProductsPage = props => {
  console.log('ProductsPage');
  const { state, dispatch } = useContext(AppContext);
  console.log(state)
  const { shop } = state;
  return (
    <React.Fragment>
      <MainNavigation
        cartItemNumber={ (shop.cart || []).reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0) }
      />
      <main className="products">
        <ul>
          { shop.products.map(product => (
            <li key={ product.id }>
              <div>
                <strong>{ product.title }</strong> - ${ product.price }
              </div>
              <div>
                <button
                  onClick={ () => dispatch({
                    type: 'ADD_PRODUCT',
                    product
                  })
                  }
                >
                  Add to Cart
                    </button>
              </div>
            </li>
          )) }
        </ul>
        <div>
          <button
            onClick={ () => {
              dispatch({
                type: 'ADD_COUNTER'
              });
            } }
          >
            click
      </button>
          { state.counter }
        </div>
      </main>
    </React.Fragment>

  );
};

export default ProductsPage;