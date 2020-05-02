import logger from 'use-reducer-logger';
import Counter from './counterReducer';
import Shop from './shopReducer';
import Auth from './authReducer';

const combineReducers = (slices: any) => (state: any, action: any) =>
  Object.keys(slices).reduce(
    // use for..in loop, if you prefer it
    (acc, prop) => ({
      ...acc,
      [ prop ]: slices[ prop ](acc[ prop ], action),
    }),
    state
  );


const allReducer = combineReducers({
  shop: Shop.reducer,
  auth: Auth.reducer,
  counter: Counter.reducer,
});

const RootReducer =
  process.env.NODE_ENV === 'production' ? allReducer : logger(allReducer);

export {
  Counter,
  Shop,
  Auth,
  RootReducer
}