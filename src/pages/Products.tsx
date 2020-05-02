import React, { useContext } from 'react';

import { AppContext } from '../context/shop-context';
import MainNavigation from '../components/MainNavigation';
import Counter from './../components/Counter';
import { ShopType } from './../context/enum';
import './Products.css';

const ProductsPage: React.FC = () => {
  const { state: {shop}, dispatch } = useContext(AppContext);
  console.log('ProductsPage');
  return (
    <React.Fragment>
      <MainNavigation />
      <main className="products">
        <ul>
          {shop.products.map((product) => (
            <li key={product.id}>
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  onClick={() =>
                    dispatch({
                      type: ShopType.ADD_PRODUCT,
                      payload: { product },
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
        <Counter />
      </main>
    </React.Fragment>
  );
};

export default ProductsPage;
