
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const authInitialState = {
  loading: false,
  user: null
}
export const authReducer = (state, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.user
      };
    case SIGN_OUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};
