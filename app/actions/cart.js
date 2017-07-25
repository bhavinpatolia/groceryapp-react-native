export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_TO_CART = 'ADD_TO_CART';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';

export const addItem = () => ({
  type: ADD_ITEM
});

export const removeItem = () => ({
  type: REMOVE_ITEM
});

export const addToCart = (productID) => ({
  type: ADD_TO_CART,
  id: productID
});

export const selectProduct = (productID) => ({
  type: SELECT_PRODUCT,
  id: productID
});