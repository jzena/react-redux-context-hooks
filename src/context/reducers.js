export const ADD_COUNTER = 'ADD_COUNTER';

export const counterReducer = (state, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return state + 1;
    default:
      return state;
  }
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    // case ADD_PRODUCT:
    //   return addProductToCart(action.product, state);
    // case REMOVE_PRODUCT:
    //   return removeProductFromCart(action.productId, state);
    default:
      return state;
  }
}