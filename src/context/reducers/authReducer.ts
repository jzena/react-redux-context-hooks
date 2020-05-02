import { IAuth, AuthAction } from './../types';
import { AuthType } from './../enum';


const authInitialState: IAuth = {
  loading: false,
  user: undefined
}


const authReducer = (state: IAuth, action: AuthAction) => {
  switch (action.type) {
    case AuthType.SIGN_IN:
      return {
        ...state,
        user: action.payload
      };
    case AuthType.SIGN_OUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

export default {
  reducer: authReducer,
  initialState: authInitialState
}