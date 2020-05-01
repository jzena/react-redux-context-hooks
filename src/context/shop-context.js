import React, { createContext, useReducer } from 'react';
import { shopReducer, shopInitialState } from './reducers/shopReducer';
import { authReducer, authInitialState } from './reducers/authReducer';
import { counterReducer } from './reducers';
import logger from 'use-reducer-logger';

const initialState = {
  shop: shopInitialState,
  auth: authInitialState,
  counter: 0
};

const combineReducers = (slices) => (state, action) =>
  Object.keys(slices).reduce( // use for..in loop, if you prefer it
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  );


const allReducer = combineReducers({
  shop: shopReducer,
  auth: authReducer,
  counter: counterReducer
});

// const allReducer = ({shop, auth, counter}, action) => ({
//   shop: shopReducer(shop, action),
//   auth: authReducer(auth, action),
//   counter: counterReducer(counter, action)
// });

const rootReducer = (process.env.NODE_ENV === 'production' ? allReducer : logger(allReducer));

const AppContext = createContext({
  state: initialState,
  dispatch: () => null
});

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <AppContext.Provider value={ { state, dispatch } }>
      { children }
    </AppContext.Provider>
  )
}
export { AppContext, AppProvider };