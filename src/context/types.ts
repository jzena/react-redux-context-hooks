import { ActionMap } from './../util/util';
import { AuthType, CounterType, ShopType } from './enum';
// ==========================================
// General
// ==========================================
export interface IProps {
  history: { push: (path: string) => {} };
}
export interface IEvent {
  currentTarget: {
    name: string;
    value: any;
  };
}

export interface IPropsRoute {
  exact?: boolean;
  path: string;
  restricted?: boolean;
  component: React.ComponentType<any>;
}

export type IInitialStateType = {
  shop: IShop;
  auth: IAuth;
  counter: number;
};


// ==========================================
// Shop reducer
// ==========================================
export interface IProduct {
  id: string;
  title: string;
  price: number;
}

export interface ICart extends IProduct {
  quantity: number
}

export interface IShop {
  products: IProduct[];
  cart: ICart[];
}

type ShopPayload = {
  [ ShopType.ADD_PRODUCT ]: {
    product: IProduct
  },
  [ ShopType.REMOVE_PRODUCT ]: {
    productId: string
  }
}

export type ShopAction = ActionMap<ShopPayload>[ keyof ActionMap<ShopPayload> ]

// ==========================================
// Auth reducer
// ==========================================
export interface IAuth {
  loading: boolean;
  user?: {
    user: string,
    lastName: string
  };
}
type AuthPayload = {
  [ AuthType.SIGN_IN ]: {
    user: string,
    lastName: string
  },
  [ AuthType.SIGN_OUT ]: undefined
}

export type AuthAction = ActionMap<AuthPayload>[ keyof ActionMap<AuthPayload> ]

// ==========================================
// Counter reducer
// ==========================================
type CounterPayload = {
  [ CounterType.ADD_COUNTER ]: undefined
}

export type CounterAction = ActionMap<CounterPayload>[ keyof ActionMap<CounterPayload> ]

// ==========================================
// Pages
// ==========================================
export interface IMainNavigation {
  cartItemNumber?: number
}
