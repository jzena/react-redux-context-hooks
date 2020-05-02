import React, { createContext, useReducer } from 'react';
import { Shop, Auth, RootReducer } from './reducers';
import {
  IInitialStateType,
  CounterAction,
  AuthAction,
  ShopAction,
} from './types';

const initialState = {
  shop: Shop.initialState,
  auth: Auth.initialState,
  counter: 0,
};

const AppContext = createContext<{
  state: IInitialStateType;
  // dispatch: React.Dispatch<any>;
  dispatch: React.Dispatch<CounterAction | AuthAction | ShopAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(RootReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
